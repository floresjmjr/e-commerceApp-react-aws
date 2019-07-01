import React from 'react'

const leftArrow = (props) =>{

  return (
    <div className="LeftArrow" onClick={props.clicked}>
      <i className="fas fa-chevron-left fa-2x" aria-hidden="true"></i>
    </div>
  )

}

export default leftArrow;
