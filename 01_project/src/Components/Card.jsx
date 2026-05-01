import React from 'react'
import {Bookmark} from "lucide-react"


const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
            <img src={props.company.logo} alt="" />
            <button>Save <Bookmark size={18} /></button>
          </div>
          <div className="center">
            <h4>{props.company.companyName} <span className='info'> {props.company.applicationOpeningTime}</span></h4>
            <h2 >{props.company.role}</h2>
            <div>
              <h4>{props.company.tag1}</h4>
              <h4>{props.company.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.company.pay}</h3>
            <p className='info'>{props.company.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card