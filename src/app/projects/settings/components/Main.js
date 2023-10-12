"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import LeftSidebar from '../../components/LeftSidebar';
function Main() {
   


    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"> Projects Settings </h2>
                            </div>
                            <div className="pe-2">
                               
                            </div>
                        </div>
                    </div>
                    <div className="contactlist scroll_bar">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-12 d-flex ps-0 pe-0 project">
                                    <div className="mobile-left">
                                        <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav"
                                            role="button" aria-expanded="false" aria-controls="email-nav">
                                            <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                                        </a>
                                    </div>
                                    <div className="inbox left pe-0 pt-3" id="email-nav">
                                        <div className="mail-side">
                                        <LeftSidebar/>
                                        </div>
                                    </div>
                                    <div className="inbox right">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 bg-white">
                                            <div className="saddow_box">
        <div className="row mt-3">            
            <div className="col-12 col-md-6 col-lg-4">
                <div className="mb-3">
                <p className="m-0 font-14"><b>Name</b></p>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="mb-3">
                <p className="m-0 font-14"><b>Client</b></p>
                    <select className="form-select" name="">
                        <option selected> No Client Select</option>                    
                    </select>
                </div>
            </div>
            <div className="col-12 col-md-12">
            <hr className="mt-2 mb-2"/>
                <div className="invwhite d-flex justify-content-start align-items-center pe-0  pt-2 pb-2">
                    <div>
                        <p className="m-0 font-14"><b>Billable by default </b></p>
                        <p className="col-grey m-0 font-14">All new entries on this project will be initially set as billable.</p>
                    </div>
                    <div className="form-check form-switch ms-4">
                        <input className="form-check-input" id="flexSwitchCheckDefault" type="checkbox"/>
                    </div>
                </div>
                <hr className="mt-2 mb-2"/>
            </div>
            <div className="col-12 col-md-12 col-lg-6">           
                <div className="invwhite d-flex justify-content-between align-items-center pe-0  pt-2 pb-2">
                    <div>
                        <p className="m-0 font-14"><b>Project billable rate</b></p>
                        <p className="col-grey m-0 font-14">Billable rate used for calculating billable amount for this project.</p>
                    </div>
                    
                </div>
                <div className="">
                    <label className="form-label">Hourly rate (USD) </label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="-"/>
                        <span className="input-group-text" id="basic-addon2">Set rate</span>
                    </div>
                </div>

            </div>
            <div className="col-12 col-md-12 col-lg-6">           
                <div className="invwhite d-flex justify-content-between align-items-center pe-0  pt-2 pb-2">
                    <div>
                        <p className="m-0 font-14"><b>Project estimate </b></p>
                        <p className="col-grey m-0 font-14">Choose how you wish to track project progress (time or fixed fee budget). </p>
                    </div>
                   
                </div>
                <div className="mb-3">
                    <label className="form-label"> Estimate </label>
                    <select className="form-select" name="">
                        <option selected> No Estimate</option> 
                        <option> Time Estimate </option>                      
                    </select>
                </div>

            </div>
        </div> 
        </div> 
        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>

          
        </>
    )
}

export default Main
