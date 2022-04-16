import React from 'react'
import './Dashboard.css'

function Dashboard(props) {
  return (
    <div className="top-container">

      <div className="top-title">Edvora</div>
      <div className="top-profile">
        <div className="top-profile-name">{props.name}</div>
        <div className="top-profile-image">
          <img src={props.image} alt="" className="top-profile-image" />
        </div>
      </div>
    </div>

  )
}

export default Dashboard