import React, { Component } from 'react';

class ChatZipForm extends Component {
  constructor(props) {
    super(props);

  }



  render () {
    return (
        <div>
          <div>Enter your zip code to view messages in your area:</div>
          <div>
              <input 
                type="text" 
                placeholder="Zip Code" 
                className="form-control" 
                onChange={this.props.setZip}
              />
              <br/>
              <button 
                onClick={this.props.submitZip} 
                className="btn btn-primary btn-sm form-control"
              >
                Submit
              </button>
          </div>
      </div>    
    )      
  }
}

export default ChatZipForm;
