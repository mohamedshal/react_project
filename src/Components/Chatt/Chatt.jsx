import React from 'react'
import person1 from "../../Images/1.png"
import Navbar from '../Navbar/Navbar';
import ChatPerson from '../ChatPerson/ChatPerson';
export default function Chatt() {
    let chatts = [];
    for(let i = 0;i<10;i++) {
        chatts.push(<div onClick={function () {
            console.log("hi")
        }} role='button' key={i} className="chat-person d-flex justify-content-between pt-1 mt-2 border-top">
            <div className="box px-5">
            <h3 className='h5'>Mohamed</h3>
            <p className='text-secondary'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="image"style={{width:"50px"}}>
                <img className='w-100' src={person1} alt="" />
            </div>
        </div>)
    }
  return (
    <>
        <div className="contianer-fluid d-flex justify-content-center" style={{width:"40%",overflowY: "auto",height:"100vh"}}>
        <div className="box bg-white" style={{width:"90%",overflowY: "auto",height:"100vh"}}>
            {chatts}
        </div>
        <div className="box" style={{width:"10%",height:"100vh",backgroundColor:"#f0f2f5"}}>
            <Navbar />
        </div>
        </div>
    </>
  )
}
