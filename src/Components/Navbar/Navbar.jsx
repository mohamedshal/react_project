import React from 'react'
import Person2 from "../../Images/2.png"
export default function Navbar() {
  return (
    <div className="nav d-flex justify-content-between flex-column" style={{height:"100%"}}>
        <ul className="list-unstyled d-flex justify-content-around mx-auto flex-column" style={{height:"30%"}} >
            <li><i class="fa-brands fa-rocketchat"></i></li>
            <li><i class="fa-solid fa-circle-notch"></i></li>
            <li><i class="fa-solid fa-link-slash"></i></li>
            <li><i class="fa-solid fa-users-between-lines"></i></li>
        </ul>
        <ul className="list-unstyled">
            <li ><i role="button" class="fa-solid fa-gear border rounded-circle p-1 bg-white" style={{fontSize:"25px"}}></i></li>
            <li>
                <div className="image mx-auto mt-3" style={{width:"60%"}}>
                    <img className='w-100' src={Person2} alt="" />
                </div>
            </li>
        </ul>
    </div>
  )
}
