import React from 'react'
import styles from './Card.module.css';
export default function Card(props) {
  const arrayPath =props.pathArray;
  const { ride,badges, badge } = styles;
  let res=Number.MAX_SAFE_INTEGER;
  let station_code=props.stationCode;
  arrayPath.map((code)=>(
    res=Math.min(res,Math.abs(code-station_code))

  ));
  return (
    <>
      
      <div className={ride}>
          <img src={props.pic} alt="" />
          <div className="data1">
              <ul>
                  <li>Ride Id: {props.id}</li>
                  <li>Origion Station: {props.origin}</li>
                  <li>Station_path: {`[${ arrayPath.join(", ") }]` }</li>
                  <li>Date: {props.date}</li>
                  <li>Distance: {res}</li>
              </ul>
          </div>
          <div className={badges}>
              <div className={badge}>{props.city}</div>
              <div className={badge}>{props.state}</div>
          </div>
      </div>
    </>
  )
}
