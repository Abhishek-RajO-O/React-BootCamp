import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router'
import Layout from './Layout'
import { About, Contact, Github, githubInfoLoader, Home, User } from './components'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout /> ,
//     children:[
//       {
//         path: "",
//         element:<Home />
//       },
//       {
//         path: "about",
//         element: <About /> 
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='user/:userId' element={<User />}/>
        <Route 
          path='github'
          element={<Github />}
          loader ={githubInfoLoader}
          />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
