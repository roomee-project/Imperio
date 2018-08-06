import React from "react";
import RepEntry from './RepEntry.jsx';

const ListView = props => (
  <div className="container" data-spy="scroll" data-target="#nav-usa" data-offset="-1">
    <div className="row" id="reps">
        {Array.isArray(props.data) ? props.data.map((rep, i) => <RepEntry rep={rep} key={i}/>) : ''}
    </div>
  </div>
)

export default ListView;