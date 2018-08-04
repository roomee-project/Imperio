import React from "react";

const ElectionView = props => (
  <div className="">
    <div>{props.data.election ? props.data.election.electionDay : ''}</div>
    <div>{props.data.election ? props.data.election.name : '' }</div>
  </div>
)

export default ElectionView;