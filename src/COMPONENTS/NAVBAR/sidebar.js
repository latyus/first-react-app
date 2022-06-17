import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BsFilePlay,BsPersonFill,BsBlockquoteLeft,HiPlusSm ,BsCalendarEventFill,BsPalette2,BsGrid3X2Gap} from "react-icons/bs";
import { useState,useContext } from 'react';
import { getValue } from '../../App';
import './navbar.css'
 const Sidebar = () => {
 const {s,specific:{sidebar,sidebar2,load,load2,special,special2}} = useContext(getValue)

    // const [s,setS] = useState(true)
    // const [sidebar,setSidebar] = useState('sidebar')
    // const [sidebar2,setSidebar2] = useState('sidebar2')
    // const [special,setSpecial] = useState('special')
    // const [special2,setSpecial2] = useState('special2')




  return (
    <section>
        <div className={s ? sidebar2 :sidebar}>
            <ul>
            <li><span><BsGrid3X2Gap/> </span>   <a href='#' > dashboad</a></li>
            <li><span><BsFilePlay/></span><a href='#' > my profile</a></li>
            <li><span><BsPalette2/></span> <a href='#' > analytics</a></li>

            <li><span><BsBlockquoteLeft/></span><a href='#' > DFY</a></li>
               
        

                </ul>
                <div className={s ?special :special2} >  
     
                    <h5 className='fw-light '>Hubs</h5>

                    <h5><BsFilePlay/></h5>
                    </div>
                <ul>
            <li><span>  <BsCalendarEventFill/></span> <a href='#' > dev vid</a></li>

            <li> <span><BsCalendarEventFill/></span> <a href='#' >test vid</a></li>
                </ul>
                <div className={s ? special : special2}>  
                    <h5 className='fw-light'>settings</h5>
                    </div>
                <ul>
            <li><span><BsBlockquoteLeft/></span><a href='#' >workspace</a></li>
            <li> <span><BsPersonFill/></span> <a href='#' >profile</a></li>
            <li><span><BsPalette2/></span> <a href='#' > logout</a></li>


            </ul>
            
            
            
     
 
            
    
            
            
            

        </div>
        
    </section>
    // <div>Sidebar</div>
  )
}

export default Sidebar