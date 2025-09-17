import React from 'react'
import ChatPerson from '../ChatPerson/ChatPerson';
import Chatt from "../Chatt/Chatt";
export default function Content() {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <ChatPerson/>
        <Chatt/>
    </div>
  )
}
