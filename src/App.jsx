// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import React from "react";
// import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shares from './Pages/Shares'
import Careers from './Pages/Careers'
import United from './Pages/United'
import Purpose from './Pages/Purpose'
import Learn from './Pages/Learn'
import Community from './Pages/Community'
import NotFound from './Pages/NotFound';

//  {RouterProvider}
 export default function App() {
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Shares />,
  },
  {
    path:"/purpose",
    element: <Purpose/>
  },
  {
    path:"/community",
    element:<Community/>
  },
  {
    path:"/career",
    element:<Careers/>,
  },
     {
    path:"/learn",
    element:<Learn/>
  },
  {
    path:"/united",
    element:<United/>
  },
  {
  path:"*",
  element:<NotFound/>
  },
])
return <RouterProvider router = {routes}/>
}