"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import LeftSidebar from '../../components/LeftSidebar';
function Main() {
   //#region toggle
   const [isDivVisible, setIsDivVisible] = useState(false);

   const toggleDiv = () => {
     setIsDivVisible(!isDivVisible);
   };

//#endregion

    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0">Sprints And Task</h2>
                            </div>
                            <div className="pe-2">
                                <div className="btn-group ms-1">
                                    <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">More</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-upload"></i> Export</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-download"></i> Import</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-repeat"></i> History</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-rotate-left"></i> Refresh</a>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
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
                                        <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-bs-toggle="collapse" href="#email-nav"
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
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="bdr5 mb-0 d-flex justify-content-between align-items-center ps-3  pe-3 pt-2 pb-2 bdRT bgblulgt">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <b>Today</b>                          
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">
                                            <b className="col-black me-1 font-16" id="fulltime"> </b>      
                                        </div>
                                    </div> 
                                
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <button className="badge bg-primary me-1"onClick={toggleDiv}>2</button>
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"215px"}} placeholder='Task A' />
                                            <a className="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> React </a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a className="btnA"> <img src="../images/tag-gray.svg" alt="img" /></a>
                                            <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div className="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="../images/calendar-gray.svg" alt="img" /></a>
                                                <span className="btnA font-16 col-black">00:00:00</span>
                                                <a className="btnA"><img src="../images/play.svg" alt="img" /></a>
                                                <a className="btnA"style={{borderRight:"0px solid #eee"}}><img src="../images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div> 
                                    {isDivVisible && <div>
                                        
                                        <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT" style={{background:"#f9f9f9"}}>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Task a.2' />
                                            <a className="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> React </a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a className="btnA"> <img src="../images/tag-gray.svg" alt="img" /></a>
                                            <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div className="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="../images/calendar-gray.svg" alt="img" /></a>
                                                <span className="btnA font-16 col-black">00:00:00</span>
                                                <a className="btnA"><img src="../images/play.svg" alt="img" /></a>
                                                <a className="btnA"style={{borderRight:"0px solid #eee"}}><img src="../images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="bdr5 mb-0 d-flex justify-content-between align-items-center p-1 bdRT" style={{background:"#f9f9f9"}}>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="text" className="form-control floatinglabel me-2" style={{width:"240px"}} placeholder='Task a.1' />
                                            <a className="btnA col-blue fwN"><i className="zmdi zmdi-plus-circle me-1"></i> React</a>                            
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">                                
                                            <a className="btnA"> <img src="../images/tag-gray.svg" alt="img" /></a>
                                            <a className="btnA font-20 a col-blue clickmode" data-hide=".a" data-show=".b">£</a>
                                            <a className="b btnA font-20  dd_none col-grey clickmode" data-hide=".b" data-show=".a">£</a>
                                            <div className="d-flex">
                                                <input type="text" className="form-control floatinglabel me-2" style={{width:"65px"}} placeholder='14:10' />
                                                <span className="btnA ps-0 pe-1" style={{borderRight:"0px solid #fff"}}> -</span>
                                                <input type="text" className="form-control floatinglabel me-0"style={{width:"65px"}} placeholder='14:11' />
                                                <a className="btnA font-20"style={{borderLeft:"1px solid #eee"}}>
                                                <img src="../images/calendar-gray.svg" alt="img" /></a>
                                                <span className="btnA font-16 col-black">00:00:00</span>
                                                <a className="btnA"><img src="../images/play.svg" alt="img" /></a>
                                                <a className="btnA"style={{borderRight:"0px solid #eee"}}><img src="../images/menu-dots-vertical.svg" alt="img" /></a>
                                            </div>
                                        </div>
                                    </div>  
                                        </div>}

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
