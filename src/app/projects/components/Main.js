"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
function Main() {
   
    const [isDivVisible, setIsDivVisible] = useState(false);

    const toggleDiv = () => {
      setIsDivVisible(!isDivVisible);
    };


    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-folder mr-1"></i> Projects </h2>
                            </div>
                            <div className="pe-2">
                                <a href="javascript:void(0);" className="btn btn-success" data-toggle="modal" data-target="#addteam"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create New </a>
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
                            <div className="row justify-content-center mt-3">
                                    
                                <div className="col-12 col-sm-6 col-md-4  col-lg-4 col-xl-3  items">       
                                    <div className="card bdr5 mt-0">
                                        <div className="header pt-2">
                                           <Link href="/projects/overview"><h2><i className="zmdi zmdi-view-dashboard"></i> Home Care Services<br/><small>Ungrouped Projects</small> </h2></Link>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" role="button"> <i className="zmdi zmdi-star"></i> </a></li>
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div className="body pt-1 pb-0">
                                           <Link href="/projects/overview" className="icon-small">
                                                <div className="w_icon cyan">HCS</div>                                                
                                           </Link>  
                                            <div className="state_w1 mt-1 ">
                                                <div className="d-flex justify-content-between text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Sprints</span><br/>  <span className="font-15 bold col-black"> 01 </span></h4></Link> 
                                                    </div>
                                                    <div> 
                                                   <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Stories</span><br/>  <span className="font-15 bold col-black"> 13 </span></h4></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Tasks</span><br/>  <span className="font-15 bold col-black"> --- </span></h4></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Bugs</span><br/>  <span className="font-15 bold col-black"> --- </span></h4></Link>
                                                    </div>                                       
                                                </div>
                                            </div>
                                            <hr className="mt-2"/>
                                            <div className="state_w1 mb-1">
                                                <div className="d-flex justify-content-left text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link> 
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>                                       
                                                </div>
                                            </div>
                                        </div>
                                    </div>                         
                                </div>
                                <div className="col-12 col-sm-6 col-md-4  col-lg-4 col-xl-3  items">  
                                    <div className="card bdr5 mt-0">
                                        <div className="header pt-2">
                                           <Link href="/projects/overview"> <h2><i className="zmdi zmdi-view-dashboard"></i> Pension Module<br/><small>Ungrouped Projects</small> </h2></Link>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" role="button"> <i className="zmdi zmdi-star"></i> </a></li>
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div className="body pt-1 pb-0">
                                           <Link href="/projects/overview" className="icon-small">
                                                <div className="w_icon cyan">PM</div>                                                
                                           </Link>  
                                            <div className="state_w1 mt-1 ">
                                                <div className="d-flex justify-content-between text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Sprints</span><br/>  <span className="font-15 bold col-black"> --- </span></h4></Link> 
                                                    </div>
                                                    <div> 
                                                   <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Stories</span><br/>  <span className="font-15 bold col-black"> 4 </span></h4> </Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Tasks</span><br/>  <span className="font-15 bold col-black"> 22 </span></h4> </Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Bugs</span><br/>  <span className="font-15 bold col-black"> 01 </span></h4> </Link>
                                                    </div>                                       
                                                </div>
                                            </div>
                                            <hr className="mt-2"/>
                                            <div className="state_w1 mb-1">
                                                <div className="d-flex justify-content-left text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link> 
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>                                       
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                                <div className="col-12 col-sm-6 col-md-4  col-lg-4 col-xl-3  items">  
                                    <div className="card bdr5 mt-0">
                                        <div className="header pt-2">
                                           <Link href="/projects/overview"> <h2><i className="zmdi zmdi-view-dashboard"></i> Medico Tasks<br/><small>Ungrouped Projects</small> </h2></Link>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" role="button"> <i className="zmdi zmdi-star"></i> </a></li>
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div className="body pt-1 pb-0">
                                           <Link href="/projects/overview" className="icon-small">
                                                <div className="w_icon cyan">IT</div>                                                
                                            </Link>  
                                            <div className="state_w1 mt-1 ">
                                                <div className="d-flex justify-content-between text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Sprints</span><br/>  <span className="font-15 bold col-black"> 05 </span></h4></Link> 
                                                    </div>
                                                    <div> 
                                                   <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Stories</span><br/>  <span className="font-15 bold col-black"> 12 </span></h4> </Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Tasks</span><br/>  <span className="font-15 bold col-black"> 03 </span></h4> </Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Bugs</span><br/>  <span className="font-15 bold col-black"> -- </span></h4> </Link>
                                                    </div>                                       
                                                </div>
                                            </div>
                                            <hr className="mt-2"/>
                                            <div className="state_w1 mb-1">
                                                <div className="d-flex justify-content-left text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link> 
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>                                       
                                                </div>
                                            </div>
                                        </div>
                                    </div>             
                                </div>
                                <div className="col-12 col-sm-6 col-md-4  col-lg-4 col-xl-3  items">  
                                    <div className="card bdr5 mt-0">
                                        <div className="header pt-2">
                                           <Link href="/projects/overview"> <h2><i className="zmdi zmdi-view-dashboard"></i> IamTheLocum<br/><small>Ungrouped Projects</small> </h2></Link>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" role="button"> <i className="zmdi zmdi-star text-warning"></i> </a></li>
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div className="body pt-1 pb-0">
                                           <Link href="/projects/overview" className="icon-small">
                                                <div className="w_icon cyan">ILT</div>                                                
                                            </Link>  
                                            <div className="state_w1 mt-1 ">
                                                <div className="d-flex justify-content-between text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Sprints</span><br/>  <span className="font-15 bold col-black"> 03 </span></h4></Link> 
                                                    </div>
                                                    <div> 
                                                   <Link href="/projects/overview"> <h4 className="mt-1 line-height12"><span className="font-13"> Stories</span><br/>  <span className="font-15 bold col-black"> 10 </span></h4> </Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Tasks</span><br/>  <span className="font-15 bold col-black"> 05 </span></h4> </Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview"><h4 className="mt-1 line-height12"><span className="font-13"> Bugs</span><br/>  <span className="font-15 bold col-black"> --- </span></h4> </Link>
                                                    </div>                                       
                                                </div>
                                            </div>
                                            <hr className="mt-2"/>
                                            <div className="state_w1 mb-1">
                                                <div className="d-flex justify-content-left text-center ">                                           
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link> 
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
                                                    </div>
                                                    <div> 
                                                       <Link href="/projects/overview" className="cbp__icon"><img src="images/download.jpg"/></Link>
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
