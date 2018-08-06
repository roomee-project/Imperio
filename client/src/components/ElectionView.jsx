import React from "react";
import moment from 'moment';

const ElectionView = props => (
  <div className="">
    <h5>{props.data.election ? `Date: ${moment(props.data.election.electionDay).format("dddd, MMM Do YYYY")}` : `No upcoming elections found`}</h5>
    <h5>{props.data.election ? `Election: ${props.data.election.name}` : '' }</h5>
  </div>
)

export default ElectionView;
