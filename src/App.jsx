import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from './Pages/Home_page/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
      <Route path="/home" element={<Home/>} />
      
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <Home/>
       

    </div>
  )
}

export default App