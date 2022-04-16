import React from "react";
import "./Ride.css";

// import LocationButton from "../location-button/LocationButton";

function Ride(props) {
    
  return (
    <div className="ride">
        <div className="ride-image">
            <img src="https://picsum.photos/200" alt="" className="ride-image"/>
        </div>
        <div className="ride-data">
            <div>Ride Id: {props.id}</div>
            <div>Origin Station: {props.os_code}</div>
            <div>station_path: [ {props.s_path} ]</div>
            <div>Date: {props.date}</div>
            <div>Distance: {props.distance}</div>
        </div>
        <div className="ride-location">
            <div className="location-button">{props.city}</div>
            <div className="location-button">{props.state}</div>
        </div>
    </div>
  )
}

export default Ride
