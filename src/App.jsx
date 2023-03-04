
import './App.css'
import React from "react";

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shares from './Pages/Shares'
import Careers from './Pages/Careers'
import United from './Pages/United'
import Purpose from './Pages/Purpose'
import Learn from './Pages/Learn'
import Community from './Pages/Community'
import NotFound from './Pages/NotFound';
import Cookies from './Components/Cookies';

 function App() {
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
return(
   <RouterProvider router = {routes}/>
   )
}
export default App