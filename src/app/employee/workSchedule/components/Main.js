"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import LeftSidebar from '../../components/LeftSidebar';

function Main() {
    const customStyles = {
        borderLeft: '1px solid rgb(221, 221, 221)',
        height: '100vh',
    };



    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-calendar me-1"></i> Work Schedule </h2>
                            </div>
                            <div className="pe-2 d-flex">
                                                            
                            </div>
                        </div>
                    </div>
                    {/* <<<<<<<<<<<< */}
                    <div className=" contactlist scroll_bar">
                        <div className="container-fluid">
                            <div className="row clearfix">
                                <div className="col-12 p-0">                        
                                    <div className="d-flex">
                                        <div className="mobile-left">
                                            <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-bs-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                                <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                                            </a>
                                        </div>
                                        <div className="inbox left pe-0 me-0 lftfxd" id="email-nav">                                        
                                            <div className="mail-side"> 
                                            <LeftSidebar/>                                       
                                            </div>
                                        </div>                               
                                        
                                        
                                    </div>
                                    <div className="inbox right rgtinbox  htg_auto"> 
                                        <div className="table-responsive h__hgt">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        
                                                        <th>Monday
                                                                </th>
                                                        <th>Tuesday
                                                                    </th>
                                                        <th>Wednesday
                                                                    </th>
                                                        <th>Thursday
                                                                </th>
                                                        <th>Friday
                                                                </th>
                                                        <th>Saturday
                                                                </th>
                                                        <th>Sunday </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                
                                                        <td>
                                                            <select className="custom-select select_f">
                                                                <option data-tokens="">Working</option>
                                                                <option data-tokens="">Day Off</option>                                                               
                                                            </select>
                                                        </td>
                                                        <td>
                                                                <select className="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select className="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        
                                                        <td>
                                                                <select className="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select className="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select className="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select className="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        
                                                    </tr>
                                                
                                                    
                                                </tbody>
                                            </table>
                                            <div className="mb-5 mt-4 text-center">                                                                
                                                <button value="Submit" className="btn btn-primary save_edt_contntn me-1"><b>Update -&gt;</b></button>
                                                <button className="btn btn-outline-danger"><b> Cancel</b></button>
                                            </div>
                                        </div>
                                    </div>              
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <<<<<<<<<< */}
                </div>
            </section>
            



        </>
    )
}

export default Main
