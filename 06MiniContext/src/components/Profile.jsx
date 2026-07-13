import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
  const {user} = useContext(UserContext)

  if(! user){
    return(
      <div>Pls Login</div>
    )
  }

  return (
    <div>
      <h1>profile of {user.username}</h1>

    </div>
  )
}

export default Profile