import React from 'react'
import './upload.css'
import { useContext,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BsDownload} from "react-icons/bs";
import { getValue } from '../../App';
import image from '../NAVBAR/image-restaurant.jpg'


 const Upload2 = () => {
  const {s,setChange,change,specific:{wrap2,first,first2,wrap}} = useContext(getValue)
  // const reader = new FileReader()
  // reader.readAsDataURL()
  
  const [data,setData] = useState([])
  const [value, setValue] = useState([])
  const [data3, setData3] = useState([])


  // console.log(data)
  // console.log(value)
  
const handler = (e)=>{
  const reader = new FileReader()
  let prop = e.target.files[0]
  reader.readAsDataURL(prop)

  reader.onload = ()=>{
    let newFile = {vide:reader.result, names:e.target.files[0].name, id:new Date().getTime().toString()}
    // console.log(newFile)    
    setData([...data,newFile])
    console.log(data)

  }
}
 
const handler2 = (e)=>{
  const reader = new FileReader()
  let props = e.target.files[0]
  reader.readAsDataURL(props)

  reader.onload = ()=>{
    let newFiles = {image:reader.result, name:e.target.files[0].name, id:new Date().getTime().toString()}
    setValue([...value,newFiles])
  }
}

const handler3 = (e)=>{
    const reader = new FileReader()
    const prop = e.target.files[0]
    reader.readAsDataURL(prop)

   
    reader.onload = ()=>{
     
      const audioName = e.target.files[0].name
      const file3 = {audio:reader.result, audioName:audioName, id:new Date().getTime().toString()}
      setData3([...data3, file3])

  }
   }
  

  return ( 
    <section className='p-3 mt-5'>
          <div className={s ? first : first2}>

          
       <div className='d-sm-flex justify-content-sm-center  align-items-center text-wrap flex-wrap  gap-3' >
       {value.map(val =>{
                const {name, image, id} = val
            return <div className="box text-start overflow-hidden" key={id}>

              
                    <img  src={image} className="img-fluid" />
                    <p className="text-capitalize">{name}</p>
                <span>2 views</span>  . <span>20 days ago</span>
                </div>


           
          
          })}

{data.map(data =>{
                const {names, vide, id} = data
            return <div className="box text-start " key={id}>
                    <video  src={vide} className=" img-fluid"
                    autoPlay controls loop></video>
                    <p className="text-capitalize ">{names}</p>
                <span>2 views</span>  . <span>20 days ago</span>
                </div>
          })}
           

           {data3.map(data =>{

            const {audioName,audio,id} = data
            return <div className="box text-start " key={id}>
            <audio  src={audio} className=" bg-white w-100" autoPlay controls loop></audio>
            <p className="text-capitalize">{audioName}</p>
        <span>2 views</span>  . <span>20 days ago</span>
        </div>
           })}
           </div>


           
           
           </div>
      <div className='showcase'>

      
    <div className={s ? wrap2 : wrap}>
    <h1 className='download' onClick={()=>setChange(!change)}><BsDownload/></h1>

    <p className='header5'>Drag and drop a video</p>
         
    <form>
    <div className='d-sm-flex justify-content-center'>
      <div className='mb-2'>
      <input type='file' className='d-none' 
      onChange={(e)=>handler2(e)}
      id='fileInput' />

      <label htmlFor='fileInput' className='btn7'>
        <span><BsDownload/></span><span>upload image</span> 
        </label>
      </div>

      {/* === video === */}
      <div className='mb-2'>
  <input type='file' className='d-none' 
  onChange={(e)=>handler(e)}  id='fileInput2'/>

      <label htmlFor='fileInput2' className='btn7'><span><BsDownload/></span><span>upload video</span> </label></div>
      

      <div className='mb-2'>
  <input type='file' className='d-none' 
  onChange={(e)=>handler3(e)}  id='fileInput3'/>

      <label htmlFor='fileInput3' className='btn7'><span><BsDownload/></span><span>upload audio</span> </label></div>
      

    </div>


{/*     
          <div className='mb-2'>
        <input type='file'  id='fileInput3' />
        <label htmlFor='fileInput3' className='btn7' onClick={(e)=>handler3(e)}>upload Audio</label>
        </div> */}
    </form>
    </div>
      
   
      <div>
      

      </div>
      </div>

    </section>
  )
}

export default Upload2

