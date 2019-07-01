import React from 'react';


const rightArrow = (props) => {

  return (
    <div className="RightArrow" onClick={props.clicked}>
      <i className="fas fa-chevron-right fa-2x" aria-hidden="true"></i>
    </div>
  )


}



export default rightArrow;