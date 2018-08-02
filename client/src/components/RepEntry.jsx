import React from 'react';

const Facebook = (props) => {return (<a href={`https://www.facebook.com/${props.id}`} target="_blank"><i className="fab fa-facebook-square"></i></a>)}

const Youtube = (props) => { return (<a href={`https://www.youtube.com/channel/${props.id}`} target="_blank"><i className="fab fa-youtube-square"></i></a>) }

const Twitter = (props) => { return (<a href={`https://www.twitter.com/${props.id}`} target="_blank"><i className="fab fa-twitter-square"></i></a>) }

const RepEntry = props => (
  <div className="card col-md-8" style={{maxWidth: "20rem" }}>

    <div className="card-body text-center">
      {props.rep.photoUrl ? <img className="card-img-top" src={props.rep.photoUrl} alt={props.rep.title} /> : ''}
      
      <h5 className="card-title">{props.rep.title}</h5>
      <p className="card-text">{props.rep.name} <br /> Party: {props.rep.party} </p>
      <p>{props.rep.phones[0] ? props.rep.phones[0] : ''}</p>
      <div>
        {props.rep.urls ? <a href={props.rep.urls[0]} className="btn btn-primary btn-xs" target="_blank">Website</a> : ''}
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

{/* <a href="http://www.website.com" title="Website name"><i style="margin-right: 0.5em; color: #EEEEEE;" class="icon-home icon-4x"></i>Website Link</a> */}
