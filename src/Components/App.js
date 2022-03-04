import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import axios from 'axios';
import Rides from './rides/Rides';
function App() {
  const[rideInfo,setRideInfo]=useState([]);
  const[userInfo,setUserInfo]=useState("Loading..");
  const[userStation,setUserStation]=useState(0);
  

  
  useEffect(()=>{
    axios.get('https://assessment.api.vweb.app/rides')
    .then(res =>{
      setRideInfo(res.data);
    })
    axios.get('https://assessment.api.vweb.app/user')
    .then(response =>{
       setUserInfo(response.data);
       setUserStation(response.data.station_code);

    })
  },[]);
  function calcDistance( path , stCode ) {
    let pointer = Math.abs( path[0] - stCode );
    let length = path.length;

    for( let i = 0; i < length; i++ ) {

        if( i === 0 ) {
            continue;
        }

        let temp = Math.abs( path[i] - stCode );

        if( temp < pointer ) {
            pointer = temp;
            continue;
        }

        break;
    }

    return pointer;
 }

function sortByNearest(ride, stCode) {
    return ride.sort( (a, b) =>  {
        let A = a.station_path;
        let B = b.station_path;

        return calcDistance(A, stCode) - calcDistance(B, stCode);

    })
}

 sortByNearest(rideInfo,userStation);

 

  
  return (
    <div className="App">
      <Navbar name={userInfo.name} picture={userInfo.url}/>
      <Rides rideInfo={rideInfo} userStation={userStation}/>
      </div>
  );
}

export default App;
