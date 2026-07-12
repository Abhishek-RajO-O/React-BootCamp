import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState({})
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/Abhishek-RajO-O')
  //       .then((res)=> res.json())
  //       .then((data)=> setData(data))
  //   },[])

  return (
    <>
    <div className='text-center text-4xl m-5'>Github Followers : {data.followers}</div>
    <img src={data.avatar_url} alt="img" className='self-center justify-self-center m-5'/>
    </>
  )
}

export const  githubInfoLoader = async function () {
    const responce = await fetch('https://api.github.com/users/Abhishek-RajO-O')
    return responce.json();   
}

export default Github