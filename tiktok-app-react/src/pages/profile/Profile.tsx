import React, { useEffect } from 'react'

function Profile() {
  useEffect(() => {
    console.log(1)
  }, [])

  return (
    <div>
      <p>x</p>
      <p>x</p>
      <p>x</p>
    </div>
  )
}

export default Profile
