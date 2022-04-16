import './App.css';
import Dashborad from './components/layout/Dashboard';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import axios from "axios";
import React from 'react'
import Function from './components/Function';

function App() {
  const [userData, setUserData] = React.useState({});
  const [ridesData, setRidesData] = React.useState({})

  React.useEffect(() => {
    axios.get("https://assessment.api.vweb.app/user").then((response) => {
      setUserData(response.data);
    });
  }, []);
  // console.log(Object.values(userData)[1]); 
  var uData = {
    station_code: Object.values(userData)[0],
    name: Object.values(userData)[1],
    url: Object.values(userData)[2]
  };

  React.useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides").then((response) => {
      setRidesData(response.data);
    });
  }, []);
  // console.log(Object.values(ridesData)[0]);
  var rData = [];
  var rObj = {
    id: 966,
    origin_station_code: 4,
    station_path: [23, 31, 49, 57, 63, 78, 80],
    destination_station_code: 90,
    date: "02/10/2022 01:53 PM",
    map_url: "https://picsum.photos/200",
    state: "Andaman and Nicobar Islands",
    city: "Port Blair"
  };
  for (var i = 0; i < ridesData.length; i++) {
    rObj = {
      id: Object.values(ridesData)[i].id,
      origin_station_code: Object.values(ridesData)[i].origin_station_code,
      station_path: Object.values(ridesData)[i].station_path,
      destination_station_code: Object.values(ridesData)[i].destination_station_code,
      date: Object.values(ridesData)[i].date,
      map_url: Object.values(ridesData)[i].map_url,
      state: Object.values(ridesData)[i].state,
      city: Object.values(ridesData)[i].city
    }
    rData.push(rObj);
  }
  // console.log(rData[0].destination_station_code);
  // console.log(uData.station_code);

  const closest = (arr, num) => {
    return arr.reduce((acc, val) => {
      if (Math.abs(val - num) < Math.abs(acc)) {
        return val - num;
      } else {
        return acc;
      }
    }, Infinity) + num;
  }

  // console.log(uData, rData);

  return (
    <Router>
      <Dashborad
        name={uData.name}
        image={uData.url}
      />
      <Function key="/function" userData={uData} closest={closest} rideData={rData} />
    </Router>
  );
}

export default App;
