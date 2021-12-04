import axios from 'axios'
import React, { createElement } from 'react'
import Worker from '../../components/worker/Worker';

export default function AdminDashboard() {

  var workers;
  const getWorkers=async(e)=>{
    // e.preventDefault();
    workers = await (await axios.get("http://localhost:8080/worker/")).data;
    console.log(workers);

  }
  getWorkers();
  return (

    <div>
      <h1>This is admin dashboard.</h1>
      <div>
        {/* {
          workers.forEach(worker => {
            createElement(div)
            `<Worker worker={worker} />`
          })
        } */}
      </div>
    </div>
  )
}
