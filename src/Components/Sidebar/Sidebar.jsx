import React from 'react'
import chatt from "../../Images/a6.jpg"
export default function Sidebar() {
  return (
    <>
        <div className="container-fluid d-flex justify-content-around align-items-center " style={{backgroundColor:"#f0f2f5", height:"100vh", flexDirection:"column", width:"60%"}}>
            <div className="content d-flex justify-content-between align-items-center gap-4 text-center" style={{flexDirection:"column"}}>
            <div className="image" style={{width:"300px"}}>
                <img src={chatt} alt="" className='w-100'/>
            </div>
            <p style={{width:"70%"}}>You can make calls, share your screen, and enjoy a faster experience when you download the Windows app.</p>
            <button className='btn btn-success'>Download</button>
            </div>
            <p className='mt-5 text-secondary'>Your personal messages are end-to-end encrypted <i className="fa-solid fa-lock"></i></p>
        </div>
    </>
  )
}
