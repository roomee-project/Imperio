import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Nav from './nav.jsx';
import Body from './body.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      id: '',
      username: '',
    }
  }
  componentDidMount() {
    axios.get('/checkUser')
      .then(res => {
        console.log('checkuser returned,', res)
        if (res.data.userFound === false) {
          console.log('no userFound')
          this.setState({isLoggedIn: false})
        } else if (res.data[0].id) {
          console.log('this is the user profile reference client side', res.data[0])
          this.setState({
            isLoggedIn: true,
            id: res.data[0].id,
            username: res.data[0].username
            //perhaps use spread operator here
          })
        }
      })
  }

  render() {
    return (
      <section>
        <div className="container-fluid">
          <Router>
            <div>
              <Nav isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
              <Body isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
            </div>
          </Router>
        </div>
        <footer className="bg-primary text-white w-auto h-100 row justify-content-center align-items-center">
          <p>© 2018 the roomee project edition</p>
        </footer>
      </section>
    )}
}

ReactDOM.render(<App />, document.getElementById('app'));
