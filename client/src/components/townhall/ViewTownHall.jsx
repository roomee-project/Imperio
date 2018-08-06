import React, { Component } from 'react';
import TownHallQuestion from './TownHallQuestion.jsx';
import axios from 'axios';

export default class ViewTownHall extends Component {

  constructor(props) {
    super(props)

    //props should contain info on which town hall it is.
    this.state = {
      userType: 'official',
      townHallName: '',
      questions: []
    }
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    //query list of questions for this particular town hall
    //console.log('viewtownhall mounted, current TownHall is:  ', this.props.townHall)
    //this.getQuestions(this.props.townHallName);
  }


  getQuestions(hallName) {
    console.log('axios called');
    axios.get('/questions', {
      params: {
        townHall: hallName
      }
    })
    .then(questionsAnswers => {

      let qData = questionsAnswers.data.slice();
      qData.length > 0 ?
        this.setState({questions: qData})
        : null
    })
  }




  //render
    render() {
    return (
      <div className="jumbotron">

        { this.props.questions.length > 0 ? this.props.questions.map((qData, i) =>
          <div key={i} className="container">
            <div className="rounded p-3 mb-2 bg-dark text-white">
            <p> {qData.question} </p></div>
            <div> <h6>Answer</h6>  <p>  {qData.answer ? qData.answer : 'ANSWER PENDING'} </p></div>
            <div> <h6>TownHall</h6> <p> {qData.townHallName} </p></div>
            <div> <h6>Created On</h6> <p> {qData.createDate} </p></div>
          </div>) : ''
        }

      </div>
    )
  }
}



  // //render
  //   render() {
  //   return (
  //     <div style={{ border: "dotted blue 2px" }}>
  //       This is the View (individual town hall) component. <br/>
  //       This is a child of ViewAllTownHalls<br/>
  //       This will map the list of questions to a list of elements.
  //       This will RETRIEVE a list of QUESTIONS for the SELECTED TOWN HALL, and map them to components.

  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //     </div>
  //   )
  // }

