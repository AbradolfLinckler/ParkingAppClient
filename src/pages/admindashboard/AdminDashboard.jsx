import axios from 'axios'
import React, { createElement } from 'react';
import { useState , useEffect } from "react";
import Worker from '../../components/worker/Worker';
import './admindashboard.css'
import Space from '../../components/space/Space';

export default function AdminDashboard() {

  const [workers, setWorkers] = useState([]);
  const [spaces, setSpaces] = useState([]);
  const [workerName,setWorkerName]=useState("");
  const rating=0;
  const [workingSince, setWorkingSince]=useState(2000);

  useEffect(()=>{
    const getWorkers=async()=>{
      const res = await axios.get("http://localhost:8080/worker/");
      setWorkers(res.data);
    }
    getWorkers();
  },[]);

  useEffect(()=>{
    const getSpaces=async()=>{
      const res=await axios.get("http://localhost:8080/space/");
      setSpaces(res.data);
    }
    getSpaces();
  },[]);

  const addWorker= async ()=>{
    const name=workerName;
    const numOfRatings=0;
    if(name==="") return;
    const res=await axios.post("http://localhost:8080/worker/add",{
      name,
      rating,
      numOfRatings,
      workingSince
    });
    console.log(res.data);
    window.location.reload(true);
  }

  const addSpace = async ()=>{
    const spaceNumber=spaces.length+1;
    const bookings=[];
    console.log("This is working!")
    console.log(spaceNumber);
    const res=await axios.post("http://localhost:8080/space/add",{
      spaceNumber,
      bookings
    });
    console.log(res.data);
    window.location.reload(true);
  }

  return (
    <div className="admindashboard">

      <div className='manageworkers'>
        <div className="workerslist">
          <h2>List of Workers</h2>
          <div className='workerhead'>
            <p className="heading">Name</p>
            <p className="heading">Rating</p>
            <p className="heading">Working Since</p>
          </div>
          {
            workers.map(element=> (
              <Worker worker={element} />
            ))
          }
        </div>
        <div className="addWorker">
          <form className="addWorkerForm">
            <label>Name</label>
            <input onChange={e=>setWorkerName(e.target.value)} placeholder="Enter Worker Name..."/>
            <label>Working Since</label>
            <input onChange={e=>setWorkingSince(e.target.value)} placeholder="Enter joining year..." />
            <button onClick={addWorker}>Add Worker</button>
          </form>
        </div>
      </div>

      <div className="manageSpaces">
        <div className="spacesList">
          <div className="spacesHeader">
            <h2>List of Spaces</h2>
            <button onClick={addSpace}>Add Space</button>
          </div>
          {
            spaces.map(element=>(
              <Space prop={element} />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}
