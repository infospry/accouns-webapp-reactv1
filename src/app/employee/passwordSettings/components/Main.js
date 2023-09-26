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
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-lock-open me-1"></i> Password Settings</h2>
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
                                        <div class="row justify-content-center">
                                            <div class="col-md-10 col-lg-6 col-xl-5 pro mt-3 mb-3">                                 
                                                <div class="group_lead mt-4">
                                                    <input type="password" id="password" class="input_text" required="required"/>
                                                    <label for="" class="lablefilled"><i class="zmdi zmdi-lock col-grey">&nbsp;</i> Old
                                                        Password</label>
                                                </div>
                                                <div class="group_lead">
                                                    <input type="password" id="password" class="input_text" required="required"/>
                                                    <label for="" class="lablefilled"><i class="zmdi zmdi-lock col-grey">&nbsp;</i> New
                                                        Password</label>
                                                </div>
                                                <div class="group_lead">
                                                    <input type="password" id="password" class="input_text" required="required"/>
                                                    <label for="" class="lablefilled"><i class="zmdi zmdi-lock col-grey">&nbsp;</i> Confrim
                                                        Password</label>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <hr/>
                                                        <div class="text-center">
                                                            <button class="btn btn-primary  btn-lg me-1"  type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                                            <button class="btn btn-danger btn-lg" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
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
