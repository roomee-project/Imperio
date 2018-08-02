import React, { Component } from 'react';
import axios from 'axios';
import ViewTownHall from './ViewTownHall.jsx';

export default class ViewAllTownHalls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      townHalls : [],
      townHall: '',
      questions: [],
      view: 'list'
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderView = this.renderView.bind(this);
    this.returnToList = this.returnToList.bind(this);
  }

  componentDidMount() {
    this.getTownHalls();
  }

  getTownHalls() {
    //send get request to server
    axios.get('/alltownhalls').then(halls => {
      //console.log(halls.data);
      this.setState({townHalls: halls.data})
    })
  }


  handleClick(e) {
    this.setState({ townHall: e.target.textContent, view: 'post'}, () => {
      axios.get('/questions', {
        params: {
          townHall: this.state.townHall
        }
      })
      .then(questionsAnswers => {
        let qData = questionsAnswers.data.slice();
        console.log('new question data', qData);
        this.setState({questions: qData})
      })
    })
  }
  returnToList () {
    this.setState({
      view: 'list'
    });
  }

  
  renderView () {
    if (this.state.view === 'list') {
      return (
        <ul className="list-group-flush">
        { this.state.townHalls.length > 0 ? this.state.townHalls.map((hall, i) =>
          <li className="list-group-item list-group-item-action" key={i}> <span onClick={this.handleClick}>{hall}</span>
          </li>) : ''}
        </ul>
      )

    } else if (this.state.view === 'post') {
      return (
        <div> 
          <button onClick={this.returnToList}>Back </button>
          <ViewTownHall townHallName={this.state.townHall} questions={this.state.questions}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="col-sm">
        <h1 className="display-4"> Open Town Halls </h1>
        {this.renderView()}
      </div>
    )
  }
}
//http://derpturkey.com/react-pass-value-with-onclick/

//create view switcher
//when clcik on hall, set viewtown to true
//show THAT town hall
//set to false when click back button and show alltownhalls

{/* <div className="col-sm">
<h1 className="display-4"> Open Town Halls </h1>
<ul className="list-group">
{ this.state.townHalls.length > 0 ? this.state.townHalls.map((hall, i) =>
  <li className="list-group-item" key={i}> <span onClick={this.handleClick}>{hall}</span>
  </li>) : ''}
</ul>
<div> 
  <ViewTownHall townHallName={this.state.townHall} questions={this.state.questions}/>
</div>
</div> */}