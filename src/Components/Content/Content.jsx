import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Chatt from "../Chatt/Chatt";
export default function Content() {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <Sidebar/>
        <Chatt/>
    </div>
  )
}
