import logo from './logo.svg';
import './App.css';

import { useContext,createContext,useState } from "react";

import Navbar from './COMPONENTS/NAVBAR/Navbar';
import Sidebar from './COMPONENTS/NAVBAR/sidebar';
import Upload from '../src/COMPONENTS/UPLOAD/upload'
import React from 'react';
import Upload2 from './COMPONENTS/UPLOAD/upload2';
import{ specific} from '../src/COMPONENTS/DATA/specific'
export const getValue = createContext()
function App() {
  const [s,setS] = useState(false)
  const [data,setData ] = useState(specific)
  const [change,setChange ] = useState(true)



  
  
 return (
    <getValue.Provider value={{s,setS,change,setChange,specific}}>
      <Navbar/>
      {/* <Upload2 /> */}
      {change ? <Upload /> :  <Upload2/>}
   


    </getValue.Provider>
  );
}

export default App;
