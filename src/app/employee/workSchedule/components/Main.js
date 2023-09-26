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
                    <div class=" contactlist scroll_bar">
                        <div class="container-fluid">
                            <div class="row clearfix">
                                <div class="col-12 p-0">                        
                                    <div class="d-flex">
                                        <div class="mobile-left">
                                            <a class="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                                <span class="btn-label"><i class="zmdi zmdi-more"></i></span>
                                            </a>
                                        </div>
                                        <div class="inbox left pe-0 me-0 lftfxd" id="email-nav">                                        
                                            <div class="mail-side"> 
                                            <LeftSidebar/>                                       
                                            </div>
                                        </div>                               
                                        
                                        
                                    </div>
                                    <div class="inbox right rgtinbox  htg_auto"> 
                                        <div class="table-responsive h__hgt">
                                            <table class="table table-bordered">
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
                                                            <select class="custom-select select_f">
                                                                <option data-tokens="">Working</option>
                                                                <option data-tokens="">Day Off</option>                                                               
                                                            </select>
                                                        </td>
                                                        <td>
                                                                <select class="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select class="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        
                                                        <td>
                                                                <select class="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select class="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select class="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        <td>
                                                                <select class="custom-select select_f">
                                                                        <option data-tokens="">Working</option>
                                                                        <option data-tokens="">Day Off</option>                                                               
                                                                    </select>
                                                        </td>
                                                        
                                                    </tr>
                                                
                                                    
                                                </tbody>
                                            </table>
                                            <div class="mb-5 mt-4 text-center">                                                                
                                                <button value="Submit" class="btn btn-primary save_edt_contntn me-1"><b>Update -&gt;</b></button>
                                                <button class="btn btn-outline-danger"><b> Cancel</b></button>
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
