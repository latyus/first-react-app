import React from "react";
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BsList,BsMoonFill,BsMoon} from "react-icons/bs";
import logo from '../NAVBAR/image-restaurant.jpg'
import Upload from "../UPLOAD/upload";
import Sidebar from "./sidebar";
import { getValue } from "../../App";
const Navbar = ()=>{
  const {s,setS} = React.useContext(getValue)

    return (
        <>
        <header>
        <nav className="mx-3 d-flex justify-content-between">
            <div className="nav-bar d-flex gap-2  align-items-center">
                {/* <div className="fw-bolder"> */}
                <button className=" btn3 p-0 border-0" onClick={()=>setS(!s)}><BsList/></button>
                {/* </div> */}
                <h1 className=" pt-2">metaCourse</h1>
            </div>
            <div className=" text-white  nav2 d-flex gap-2 align-items-center pt-2 gap-2">
              <a href="#" className=" sma text-white  "><BsMoonFill/></a>
                <div>
                <small className="pe-1">yusuf</small>

            <img src={logo} />
            </div>
            </div>
            </nav>
            <Sidebar/>
        </header>
       
        </>
    )
}

export default Navbar