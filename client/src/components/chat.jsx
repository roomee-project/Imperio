import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import ChatZipForm from './ChatZipForm.jsx';

class Chat extends Component {
    constructor(props) {
      super(props);

      this.state = {
        username: '',
        userZip: '',
        message: '',
        messages: [],
        isLoggedIn: false,
        zipCodeSubmitted: false
      };
    
      this.socket = io('localhost:3000');
      
      this.socket.on('receive_message', (data) => {
        console.log('client received message from server')
        addMessage(data);
      });
      
      const addMessage = (data) => {
        console.log('data:', data);
        this.setState({messages: [...this.state.messages, data]});
        console.log('this.state.messages', this.state.messages);
      };

      this.sendMessage = this.sendMessage.bind(this);
      this.setUsername = this.setUsername.bind(this);
      this.setMessage = this.setMessage.bind(this);
      this.setZip = this.setZip.bind(this);
      this.submitZip = this.submitZip.bind(this);
    }
    componentDidMount () {
      console.log('mounted', this.state.username)
      axios.get('/checkuser')
        .then(userData => {
          console.log('this is the user data you are looking for', userData);
          if (userData.data[0].username) {
            this.setState({
              username: `${userData.data[0].username}`,
              userZip: userData.data[0].zip,
              isLoggedIn: true
            })
          }
        })
    }

    sendMessage (e) {
      e.preventDefault();
      console.log('message sent to server, this.state:', this.state);
      this.socket.emit('send_message', {
        author: this.state.username,
        message: this.state.message
      });        
    }

    // delete this comment
    setUsername (e) {
      console.log('username target value', e.target.value)
      this.setState({
        username: e.target.value
      });
    }

    setMessage (e) {
      console.log('message target value', e.target.value)
      this.setState({
        message: e.target.value
      });
    }

    setZip (e) {
      console.log('zip target value', e.target.value)
      this.setState({
        userZip: e.target.value
      });
    }
    
    submitZip () {
      this.setState({ zipCodeSubmitted: true });
      // check to see if the user has an account
      // if the user does have an account
        // send their zip code to the server in a POST
      axios.get('/checkUser')
      .then(res => {
        // if a user is not in DB then the res.data will be {userFound: false}
        // if user is in DB res.data[0] will object below
        // {id: 3, userid: "117206635640981645178", username: "Anthony", zip: null}
        if (Array.isArray(res.data)) { //checks if user exists
          const user = res.data[0];
          // save zip user entered to user object
          user.zip = this.state.userZip;
          axios.post('/addZip', user)
          .then(res => {
            console.log('zip code added to user profile?', res);
          })

        }
      })

    }

    render () {
      return (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <h4>User Chat:</h4>
                  <div className="card-title"> 
                      {this.state.username ? `Chatting as: ${this.state.username}` : ''}
                  </div>
                  {this.state.userZip.length === 5 ? 
                    <ChatZipForm 
                      setZip={this.setZip}
                      submitZip={this.submitZip}
                    /> : ''
                  }
                  <hr/>
                  <div className="messages">
                      {this.state.messages.map(message => {
                          return (
                              <div>
                                  <strong>{message.author}:</strong> {message.message}
                              </div>
                          )
                      })}
                  </div>

                  <div className="card-footer">
                      {!this.state.isLoggedIn ? 
                        <input type="text" 
                          placeholder="Username" 
                          className="form-control" 
                          onChange={this.setUsername} 
                        /> : ''
                      }
                      <br/>
                      <input 
                        type="text" 
                        placeholder="Message" 
                        className="form-control" 
                        onChange={this.setMessage}
                      />
                      <br/>
                      <button 
                        onClick={this.sendMessage} 
                        className="btn btn-primary form-control"
                      >
                        Send
                      </button>
                  </div>
                </div>
              </div>                            
            </div>
          </div>
        </div>
      );    
    }
}

export default Chat;