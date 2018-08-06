import React, { Component } from 'react';
import axios from 'axios';
import fakeData from './fakeData.js';
import { BrowserRouter as Link} from 'react-router-dom';


//this is a helper stateless component
// const Options = props => <select value={this.state.selected}>{props.open.map((hall, i) => <option key={i}>{hall}</option>)}</select>;

//This should query the db for a list of open town halls.
//Town halls are opened by 'officials'.

//The user will be able to submit a form that sends the database both the question and the townhall identifier.
export default class UserCreateTownHall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fakeTownHalls: fakeData,
      townHalls: [],
      selected: '',
      question: '',
      currentUser: 2,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  //When component mounts, it should query the database for available town halls.
  //With this array of town halls, it should reflect them into the options list
  
  componentDidMount() {
    this.getTownHalls();

  }

  getTownHalls() {
    //send get request to server
    axios.get('/alltownhalls').then(halls => {
      console.log(halls.data);
      this.setState({ townHalls: halls.data })
    })
  }

  handleSubmit(e) {
    //send data to server
    //tell it that you are a user and send it your question and which town hall it is for
    // console.log('yo')
    e.preventDefault();
    this.sendQuestion(this.state.question, this.state.selected)
  }
  
  sendQuestion(inputQuestion, whichTownHall) {
    console.log('sendQuestion called', inputQuestion, whichTownHall)
    const data = {
      question: inputQuestion,
      townHallName: whichTownHall,
      userRowId: this.state.currentUser
    };
    axios.post('/question', data)
      .then(res => console.log(res))
  }

  handleSelect(e) {
    this.setState({ selected: e.target.value });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="jumbotron">
      {!this.props.isLoggedIn?
      <h6>Please login first.</h6> :
      <h6>Thanks for logging in!</h6>
    }
      <h4>Contribute to a town hall. </h4>
        <h6>Be active in your community.</h6>
        <form>
          <fieldset>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
              </div>
              <select 
                className="custom-select"
                value={this.state.selected}
                onChange={this.handleSelect}>
                <option 
                  value="" disabled defaultValue>Select a Town Hall
                </option>
                {this.state.townHalls.map((hall, i) => <option key={i}>{hall}</option>)}
              </select> <br/>
              </div>
              <textarea 
                className="form-control"
                name="question"
                placeholder="Enter a question here."
                value={this.state.question}
                onChange={e => this.handleChange(e)}/><br/>
            <button className="btn btn-light"
              onClick={this.handleSubmit}
            >Submit Question</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
//<Options open={this.state.townHalls} /> <br />

//<select value={this.state.selected}>{props.open.map((hall, i) => <option key={i}>{hall}</option>)}</select>