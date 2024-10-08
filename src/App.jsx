import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from './DashboardLayout'
import AI from './Pages/PlayGround/AI'
import APIkey from './Pages/KeyManagement/APIkey'
import Settings from './Pages/Settings/Settings'
import Integration from './Pages/Documentation/Integration'
import Plans from './Pages/Billing/Plans'
import NotFound from './Pages/NotFound'
import Landing from './Pages/Landing/Landing'
import AiLab from './Pages/AiLab/AiLab'

const router = createBrowserRouter([
  {

    path: "/app", // lets set / for the time being when we complete the landing page than we can update it to /app
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { path: '/app', element: <AI /> },
      {path: '/app/keymanagement', element: <APIkey />},
      {path: '/app/billing', element: <Plans />},
      {path: '/app/settings', element: <Settings />},
      {path: '/app/documentation', element: <Integration />},
      {path: '/app/ailab', element: <AiLab />},
    ]
  },  { path: '*', element: <NotFound /> },
   { path: '/', element: <Landing /> },
])


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App