import React, { Component } from 'react';

const ChatZipForm = props => (
  <div>
    <div>Enter your zip code to view messages in your area:</div>
    <div>
        <input 
          type="text" 
          placeholder="Zip Code" 
          className="form-control" 
          onChange={props.setZip}
        />
        <br/>
        <button 
          onClick={props.submitZip} 
          className="btn btn-primary btn-sm form-control"
        >
          Submit
        </button>
    </div>
  </div>  
)

export default ChatZipForm;
