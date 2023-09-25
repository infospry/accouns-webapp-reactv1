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
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-accounts-list-alt me-1"></i> Project Users </h2>
                            </div>
                            <div className="pe-2">
                                <div className="btn-group ms-1">
                                    <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> More Actions</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-upload"></i> Export</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-download"></i> Import</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-repeat"></i> History</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-rotate-left"></i> Refresh</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
                                    </div>
                                </div>
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
                                        <div className="row mb-2">
                                            <div class="col-12 col-sm-6 col-md-4  col-lg-4  items mt-2"> 
                                                <div class="bdr5 mt-0 float-left profile-card mb-0">
                                                    <div class="flt__left float-left">
                                                        <div class="profile-card__img">
                                                            <img src="../images/download.jpg" alt="profile card"/>
                                                        </div> 
                                                    </div>                                       
                                                    <div class="profile-card__cnt float-left">                                                
                                                        <div class="profile-card__name d-flex justify-content-between">
                                                            <div>Andrew Filntuff<span class="badge badge-success ms-2 mt-1 mb-0"><b>Owner</b> </span></div>   
                                                            <div class="btn-group">
                                                                <a class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="zmdi zmdi-more-vert"></i></a>
                                                                <div class="dropdown-menu">                            
                                                                    <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i class="zmdi zmdi-copy"></i> Find &amp; Merge Duplicates</a>
                                                                    <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i class="zmdi zmdi-email"></i> Send Email</a>
                                                                    <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i class="zmdi zmdi-repeat"></i> History</a>           
                                                                    <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#"><i class="zmdi zmdi-notifications-active"></i> Delete</a>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div class="profile-card__txt"><strong>Email : </strong> andrewfilntuff@gmail.com</div>
                                                        <div class="profile-card__txt"><strong>Team Role : </strong> Admin</div>
                                                        <div class="profile-card__txt"><strong>Project Profile : </strong> Project Owner</div> 
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
