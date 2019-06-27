import React from 'react'


const socialMedia = (props) =>{

  return (
    <div>
      <a href={props.destination}><img src={props.image} alt=''></img></a>
    </div>
  )

}



export default socialMedia;