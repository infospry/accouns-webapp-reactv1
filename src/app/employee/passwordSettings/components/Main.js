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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-lock-open me-1"></i> Password Settings</h2>
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
                                            <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
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
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 pro mt-3 mb-3">                                 
                                                <div className="group_lead mt-4">
                                                    <input type="password" id="password" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i> Old
                                                        Password</label>
                                                </div>
                                                <div className="group_lead">
                                                    <input type="password" id="password" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i> New
                                                        Password</label>
                                                </div>
                                                <div className="group_lead">
                                                    <input type="password" id="password" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled"><i className="zmdi zmdi-lock col-grey">&nbsp;</i> Confrim
                                                        Password</label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <hr/>
                                                        <div className="text-center">
                                                            <button className="btn btn-primary  btn-lg me-1"  type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                                                            <button className="btn btn-danger btn-lg" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
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
                    {/* <<<<<<<<<< */}
                </div>
            </section>
            



        </>
    )
}

export default Main
