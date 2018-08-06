import React, { Component } from 'react';
import axios from 'axios';
import ElectionView from './ElectionView.jsx';


export default class ElectionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      voterInfo: '',
      data: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange = (e) => {
    this.setState({
      address: e.target.value
    });

  }

  search = () => {
    const address = this.state.address;

    axios.get('/voterinfo', { params: { address: address } })
    .then(response => {
      console.log('axios get request for voting data', response);
      this.setState({
        data: response.data
      });
      console.log(this.state.data)
    })
    .catch(error => {
      console.log(error);
    })
  };

  render () {
    //input div below's data needs to chanage lat and long of googlemap view
    return(
      <div style={{height:'80vh'}}>
      <div className="container jumbotron bg-white h-100" >
        <div className="row justify-content-center align-items-center">
           <div className="align-self-center">
             <h4>Find out more about upcoming Elections</h4>
           <div className="input-group mb-3">
             <input className="rounded form-control" value={this.state.address} placeholder="Address" onChange={this.onChange} />
           </div>
             <button className="btn btn-primary" onClick={this.search}>Search</button>
           <div>
            <br></br>
            {this.state.data === '' ? '' : <ElectionView data={this.state.data} address={this.state.address} />}
           </div>
         </div>
       </div>
      </div>
      </div>
      )
  }
}
