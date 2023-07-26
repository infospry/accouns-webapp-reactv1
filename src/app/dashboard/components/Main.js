"use client"
import React from 'react'
import Link from "next/link";


import { useState,useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { endpoint_employer } from '@/app/services/ApiEndPoints';


// export default function main() {
//     const [employer,setEmployer]=useState([])
//     useEffect(async()=>{
//      let data = await asyncGet(endpoint_employer);
//      setEmployer(data.Response[0].Employers);
//     },[])

    export default function main() {
      const [employer, setEmployer] = useState([]);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await asyncGet(endpoint_employer);
            setEmployer(response.Response[0].Employers);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
  return (
    <>
      <section className="content">
        <div className="body_scroll">
            <div className="container-fluid">
                <div className="row clearfix">

                <div className="booktab d-flex justify-content-between align-items-center sadow">
                        <div className="p-3">
                            <h2 className="mb-0"><i className="zmdi zmdi-widgets"></i> Dashboard</h2>
                        </div>
                        <span className="float-right pr-2"><Link className="cls-personalized-wizards btn btn-outline-info" data-action="view-setting" data-toggle="modal" data-target="#ModalPersonalizedWizards" href="/"><i className="zmdi zmdi-settings zmdi-hc-spin">&nbsp;</i>Personalize Wizards</Link></span>
                    </div>  
                    <div className="table-responsive p-2">
                  <h1 className='col-blue p-2 text-center'>Welcome To Agency Panel</h1>
                  <h3><b>Employers:-</b></h3>
                  <table  className="table table-bordered table-hover mb-0 overflow-y rwd-table ">       
                  <thead><tr>
                    <th>SN.</th>
                    <th>Emp #</th>
                    <th>Employer</th>
                    <th>Reg No.</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Industry</th>
                    <th>Category</th>
                    <th>create date</th>
                    <th>Status</th>
                    </tr></thead>       
                    <tbody>  
                      
                      { employer.map((item) => (  
                            <tr> 
                              <td>{item.sr_no}</td>                           
                              <td>{item.emp_id}</td>
                              <td>{item.company_name}</td>
                              <td>{item.company_reg_no}</td>
                              <td>{item.emp_email}</td>
                              <td>{item.emp_mobile}</td>
                              <td>{item.industry}</td>
                              <td>{item.category}</td>
                              <td>{item.create_date}</td>
                              <td>{item.account_status}</td>
                        </tr>
                        ))}              

                    </tbody>
                  </table>
                  </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
