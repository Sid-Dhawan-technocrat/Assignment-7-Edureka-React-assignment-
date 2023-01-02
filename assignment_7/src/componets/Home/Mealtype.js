import React from 'react'

export default function Mealtype(props) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4">
    <div className="tileContainer">
      <div className="tileComponent1">
        <img src={props.item.image} height="150" width="140" />
      </div>
      <div className="tileComponent2">
        <div className="componentHeading">
          {props.item.name}
        </div>
        <div className="componentSubHeading">
          {props.item.content}
        </div>
      </div>
    </div>
  </div>
  )
}
