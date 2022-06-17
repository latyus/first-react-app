import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {RiVideoAddLine,BsCameraVideo} from "react-icons/bs";
import f from '../NAVBAR/image-restaurant.jpg'
import './upload.css'
import { getValue } from '../../App';
const Upload = () =>{
    const {s,change,setChange,specific:{load,load2}} = React.useContext(getValue)
    return(
 <section id="section1" className="toggle mt-5">
    
<div className={s ? load : load2}>
            <div className="d-flex py-4 align-items-center justify-content-between">

           
            <h3>my project</h3>
                <div className="bgt">
                <button className="btn2 border-0 " 
                onClick={()=>setChange(!change)}
                > <BsCameraVideo/></button>
                </div>

                
            </div>
            <div className="d-sm-flex gap-3 flex-wrap align-items-center justify-content-start ">
                <div className="box text-start ">
                    <img  src={f} className="img-fluid"/>
                    <p className="text-capitalize"> car racing with scratch</p>
                <span>2 views</span>  . <span>20 days ago</span>
                </div>
                <div className="box text-start ">
                    <img  src={f} className="img-fluid"/>
                    <p className="text-capitalize"> car racing with scratch</p>
                <span>2 views</span>  . <span>20 days ago</span>
                </div>
                <div className="box text-start ">
                    <img  src={f} className="img-fluid"/>
                    <p className="text-capitalize"> car racing with scratch</p>
                <span>2 views</span>  . <span>20 days ago</span>
                </div>
                <div className="box text-start ">
                    <img  src={f} className="img-fluid"/>
                    <p className="text-capitalize"> car racing with scratch</p>
                <span>2 views</span>  . <span>20 days ago</span>
                </div>
                <div className="box text-start ">
                    <img  src={f} className="img-fluid"/>
                    <p className="text-capitalize"> car racing with scratch</p>
                <span>2 views</span>  . <span>20 days ago</span>
                </div>
            </div>
                </div>
        </section>
    )
}

export default Upload