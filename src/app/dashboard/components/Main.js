"use client"
import React from 'react'
import Link from "next/link";
import { useState,useEffect } from 'react';
import { asyncGet } from '@/app/services/HttpServices';
import { TableHTMLAttributes,TH } from 'react';


export default function main() {
    const [product,setProduct]=useState([])
    useEffect(async()=>{
     let data = await asyncGet('','');
     setProduct(data.products);
    },[])

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
                    <div className="table-responsive p-5">
                  <h1 className='col-blue p-5 text-center'>Welcome To Agency Panel</h1>
                  <div><b>Dummy Products list:-</b></div>
                  <table  className="table table-bordered table-hover mb-0 overflow-y rwd-table ">              
                    <tbody>  
                      { product.map((item) => (  
                            <tr>                            
                        <td>{item.id}</td><td>{item.title}</td><td>{item.price}</td>
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
