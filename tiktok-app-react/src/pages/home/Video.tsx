import React from 'react'

function Video(props:any) {
  return (
    <>
      <video src={props.video}></video>
    </>
  )
}

export default Video