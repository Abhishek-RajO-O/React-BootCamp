import {useParams } from "react-router"
function User() {
    const {userId} = useParams()
  return (
    <div className="text-center m-4 text-3xl">User : {userId}</div>
  )
}

export default User