import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function Element(props) {
    return (
      <span>
      <div  style={{margin:"7vw"}}>
          <div className="card " style={{width:"18rem"}}>
<img className="card-img-top" src={props.img} alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">{props.heading}</h5>
  <p className="card-text">{props.discription}</p>
  <div className="container text-center">
  <a  className="btn btn-primary " href={props.link} target="_blank">Website Link</a>
  </div>
  
</div>
</div>
      </div>
      </span>
    )
}
