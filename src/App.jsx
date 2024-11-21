import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from './Pages/Home_page/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
      <Route path="/" element={<Home/>} />
      
    </Route>
  )
);

const App = () => {
  return (
    <div>
       <RouterProvider router={router} />
       

    </div>
  )
}

export default App