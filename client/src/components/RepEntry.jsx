import React from 'react';

const Facebook = (props) => {return (<a href={`https://www.facebook.com/${props.id}`} target="_blank"><i className="fab fa-facebook-square"></i></a>)}

const Youtube = (props) => { return (<a href={`https://www.youtube.com/user/${props.id}`}><i className="fab fa-youtube-square"></i></a>) }

const Twitter = (props) => { return (<a href={`https://www.twitter.com/${props.id}`} target="_blank"><i className="fab fa-twitter-square"></i></a>) }

const RepEntry = props => (
  <div className="card col-md-8" style={{maxWidth: "20rem" }}>

    <div className="card-body text-center">
      {props.rep.photoUrl ? <img className="card-img-top" src={props.rep.photoUrl} width="248" height="273" alt="no image" /> : <img className="card-img-top" src="https://static1.squarespace.com/static/5086f19ce4b0ad16ff15598d/t/5554f9bfe4b0085468ec253e/1431632320881/missing+photo+placeholder.png" width="248" height="273" alt="no image" /> }


      <h5 className="card-title">{props.rep.title}</h5>
      <p className="card-text">{props.rep.name} <br /> Party: {props.rep.party} </p>

      <p>{props.rep.phones ? <a href={`tel:+${props.rep.phones[0]}`}>{props.rep.phones[0]}</a> : <br></br> }</p>
      <p>{props.rep.emails ? <a href={`mailto:${props.rep.emails[0]}?Subject=Hello%20Representative`} >{props.rep.emails[0]}</a> : <br></br> }</p>
      <div>
        {props.rep.urls ? <a href={props.rep.urls[0]} className="btn btn-primary btn-xs" target="_blank">Website</a> : <br></br>}
      </div>
      {props.rep.channels ? props.rep.channels.map(channel => {
        return (
          <span>
            <span> {channel.type === 'Facebook' ? <Facebook id={channel.id}/> : ''} </span>
            <span> {channel.type === 'YouTube' ? <Youtube id={channel.id}/> :  ''} </span>
            <span> {channel.type === 'Twitter' ? <Twitter id={channel.id} /> : ''} </span>
          </span>)
        }) : ''}
    </div>
  </div>
)

export default RepEntry;

 {/*alt={props.reps.title /> : ''*/}
{/*props.rep.emails[0]*/}
{/*props.rep.phones[0]*/}


{/* <a href="http://www.website.com" title="Website name"><i style="margin-right: 0.5em; color: #EEEEEE;" class="icon-home icon-4x"></i>Website Link</a> */}
