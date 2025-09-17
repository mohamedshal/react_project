import React from 'react'
import Person1 from "../../Images/1.png"
export default function ChatPerson() {
    const now = new Date();
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const formattedTime = `Today (${hours}:${minutes})`;
  return (
    <>
        <div className="navbar">
        <div className="chat-person d-flex justify-content-between pt-1 mt-2 border-top">
            <div className="box px-5">
            <h3 className='h5'>Mohamed</h3>
            <p className='text-secondary'>last time is {formattedTime}</p>
            </div>
            <div className="image"style={{width:"50px"}}>
                <img className='w-100' src={Person1} alt="" />
            </div>
        </div>
        </div>
    </>
  )
}
