import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import {Login, Profile} from './components'
function App() {
  

  return (
   <>
    <UserContextProvider>
      <p>Hello</p>

      <Login />

      <Profile/>
    </UserContextProvider>
   </>
  )
}

export default App
