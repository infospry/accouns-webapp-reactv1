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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-folder me-1"></i> Projects </h2>
                            </div>
                            <div className="pe-2">
                                <a href="javascript:void(0);" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addpage"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create New </a>
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

            <div className="modal bsdmd" id="addpage" tabindex="-1" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-blu-lite" style={{position:"relative"}}>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add Project</b>
                            </h4>
                        </div>
                        <div className="modal-body ps-0 pe-0 pt-0">  
                                                
                                    <div className="fststep"> 
                                        <div className="steps mb-2">    
                                            <div className="step active">
                                            <i className="zmdi zmdi-info step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                    Create Project
                                                </div>
                                                <div className="step-description">
                                                    First Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step">
                                            <i className="zmdi zmdi-calendar-note step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Project Users
                                                </div>
                                                <div className="step-description">
                                                    Second Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step">
                                            <i className="zmdi zmdi-check-circle step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Sprint / Milestones
                                                </div>
                                                <div className="step-description">
                                                    Third Step
                                                </div>
                                            </div>
                                            </div>  
                                            <div className="step">
                                                <i className="zmdi zmdi-check-circle step-icon"></i>
                                                <div className="step-body">
                                                <div className="step-title">
                                                    Backlog Items
                                                </div>
                                                <div className="step-description">
                                                    Fourth Step
                                                </div>
                                                </div>
                                            </div>                                  
                                        </div>                                                                  
                                                
                                        <div className="p-4">
                                        <div className="row  m-0">                                                                      
                                            <div className="col-12 col-sm-12 col-md-12 mt-3">                                      
                                                <div className="group_lead">
                                                    <input type="text" id="" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled">Project Name</label>                                           
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6">        
                                                <div className="group_lead">
                                                    <select type="text" id="unit" className="custom-select select_f" required="required">  
                                                        <option selected="">Project Owner</option>                                         
                                                        <option value="Price excluding VAT" className="option">Andrew Fillinfuff</option>                                                
                                                    </select> 
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6"> 
                                                <div className="group_lead">
                                                    <select type="text" id="unit" className="custom-select select_f" required="required">  
                                                        <option selected="">Project Group</option>                                         
                                                        <option value="Price excluding VAT" className="option">Ungrouped Projects</option>                                                
                                                    </select> 
                                                </div>
                                            </div> 
                                                
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="group_lead">
                                                            <input type="text" id="" className="input_text" required="required"/>
                                                            <label for="" className="lablefilled">Start Date [DD/MM/YYYY]</label>                                           
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="group_lead">
                                                            <input type="text" id="" className="input_text" required="required"/>
                                                            <label for="" className="lablefilled">End Date [DD/MM/YYYY]</label>                                           
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            </div> 
                                                
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-6 col-sm-6">
                                                        <div className="group_lead">
                                                            <select type="text" id="unit" className="custom-select select_f" required="required">  
                                                                <option selected="">Priority</option>                                         
                                                                <option value="Price excluding VAT" className="option">Standard Layout</option>                                                
                                                            </select>                                      
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            </div> 
                                                
                                            <div className="col-12 col-sm-6 col-md-6"> 
                                                <div className="group_lead">
                                                    <input type="text" id="" className="input_text" required="required"/>
                                                    <label for="" className="lablefilled">Est. Hours</label>                                           
                                                </div>
                                            </div>    
                                            <div className="col-12 col-sm-6 col-md-6">    
                                                <div className="row">
                                                    <div className="col-6 col-sm-6">
                                                        <div className="group_lead">
                                                            <input type="text" id="" className="input_text bglightblu" required="required"/>
                                                            <label for="" className="lablefilled">Rate</label>                                           
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-6">
                                                        <div className="group_lead">
                                                            <select type="text" id="unit" className="custom-select select_f" required="required">  
                                                                <option selected="">Hourly</option>                                         
                                                                <option value="Price excluding VAT" className="option">1hrs</option>                                                
                                                            </select>                                      
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>                                          
                                            
                                            <div className="col-12 col-sm-12">                                               
                                                <div className="group_lead">
                                                    <textarea required="required" className="input_text" id="Description"></textarea>
                                                    <label for="Description" className="lablefilled">Description</label>                                           
                                                </div>
                                            </div>                                                                                                      
                                        </div> 
                                        </div>                                                                                                    
                                        
                                    </div> 
                                    <div className="secondtstep dnnone">                                  
                                        <div className="steps mb-2">    
                                            <div className="step completed">
                                            <i className="zmdi zmdi-info step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                    Create Project
                                                </div>
                                                <div className="step-description">
                                                    First Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step active">
                                            <i className="zmdi zmdi-calendar-note step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Project Users
                                                </div>
                                                <div className="step-description">
                                                    Second Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step">
                                            <i className="zmdi zmdi-check-circle step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Sprint / Milestones
                                                </div>
                                                <div className="step-description">
                                                    Third Step
                                                </div>
                                            </div>
                                            </div>  
                                            <div className="step">
                                                <i className="zmdi zmdi-check-circle step-icon"></i>
                                                <div className="step-body">
                                                <div className="step-title">
                                                    Backlog Items
                                                </div>
                                                <div className="step-description">
                                                    Fourth Step
                                                </div>
                                                </div>
                                            </div>                                  
                                        </div> 
                                        <div className="p-4 pb-1">                                                               
                                            <div className="row m-0">  
                                                <div className="col-12 col-sm-12 col-md-6  col-lg-6  items mb-3">
                                                    <div className=" card bdr5 mt-0 profile-card mb-0">
                                                        <div className="flt__left float-left">
                                                            <div className="profile-card__img">
                                                                <img src="images/download.jpg" alt="profile card"/>
                                                            </div> 
                                                        </div>                                       
                                                        <div className="profile-card__cnt float-left">                                                
                                                            <div className="profile-card__name d-flex justify-content-between">
                                                                <div>Andrew Filntuff<span className="badge badge-success ms-2 mt-1 mb-0"><b>Owner</b> </span></div>
                                                                <div className="checkbox posabs m__tten">
                                                                    <input className="all_slct" id="order" type="checkbox"/>
                                                                    <label for="order" className="ps-0">&nbsp;</label>
                                                                </div>                                                      
                                                            </div> 
                                                            <div className="profile-card__txt"><strong>Email : </strong> andrewfilntuff@gmail.com</div>
                                                            <div className="profile-card__txt"><strong>Team Role : </strong> Admin</div>
                                                            <div className="profile-card__txt"><strong>Project Profile : </strong> Project Owner</div> 
                                                        </div>
                                                    </div>                                                                
                                                </div>  
                                                <div className="col-12 col-sm-12 col-md-6  col-lg-6  items mb-3">
                                                    <div className=" card bdr5 mt-0 profile-card mb-0">
                                                        <div className="flt__left float-left">
                                                            <div className="profile-card__img">
                                                                <img src="images/download.jpg" alt="profile card"/>
                                                            </div> 
                                                        </div>                                       
                                                        <div className="profile-card__cnt float-left">                                                
                                                            <div className="profile-card__name d-flex justify-content-between">
                                                                <div>Maek andrew Filntuff</div>
                                                                <div className="checkbox posabs m__tten">
                                                                    <input className="all_slct" id="user" type="checkbox"/>
                                                                    <label for="user" className="ps-0">&nbsp;</label>
                                                                </div>                                                      
                                                            </div> 
                                                            <div className="profile-card__txt"><strong>Email : </strong> andrewfilntuff@gmail.com</div>
                                                            <div className="profile-card__txt"><strong>Team Role : </strong> Admin</div>
                                                            <div className="profile-card__txt"><strong>Project Profile : </strong> Project Owner</div> 
                                                        </div>
                                                    </div>                                                                
                                                </div> 
                                                <div className="col-12 col-sm-12 col-md-6  col-lg-6  items mb-3">
                                                    <div className=" card bdr5 mt-0 profile-card mb-0">
                                                        <div className="flt__left float-left">
                                                            <div className="profile-card__img">
                                                                <img src="images/download.jpg" alt="profile card"/>
                                                            </div> 
                                                        </div>                                       
                                                        <div className="profile-card__cnt float-left">                                                
                                                            <div className="profile-card__name d-flex justify-content-between">
                                                                <div>Maek andrew Filntuff</div>
                                                                <div className="checkbox posabs m__tten">
                                                                    <input className="all_slct" id="user" type="checkbox"/>
                                                                    <label for="user" className="ps-0">&nbsp;</label>
                                                                </div>                                                      
                                                            </div> 
                                                            <div className="profile-card__txt"><strong>Email : </strong> andrewfilntuff@gmail.com</div>
                                                            <div className="profile-card__txt"><strong>Team Role : </strong> Admin</div>
                                                            <div className="profile-card__txt"><strong>Project Profile : </strong> Project Owner</div> 
                                                        </div>
                                                    </div>                                                                
                                                </div> 
                                                <div className="col-12 col-sm-12 col-md-6  col-lg-6  items mb-3">
                                                    <div className=" card bdr5 mt-0 profile-card mb-0">
                                                        <div className="flt__left float-left">
                                                            <div className="profile-card__img">
                                                                <img src="images/download.jpg" alt="profile card"/>
                                                            </div> 
                                                        </div>                                       
                                                        <div className="profile-card__cnt float-left">                                                
                                                            <div className="profile-card__name d-flex justify-content-between">
                                                                <div>Andrew Filntuff<span className="badge badge-success ms-2 mt-1 mb-0"><b>Owner</b> </span></div>
                                                                <div className="checkbox posabs m__tten">
                                                                    <input className="all_slct" id="order" type="checkbox"/>
                                                                    <label for="order" className="ps-0">&nbsp;</label>
                                                                </div>                                                      
                                                            </div> 
                                                            <div className="profile-card__txt"><strong>Email : </strong> andrewfilntuff@gmail.com</div>
                                                            <div className="profile-card__txt"><strong>Team Role : </strong> Admin</div>
                                                            <div className="profile-card__txt"><strong>Project Profile : </strong> Project Owner</div> 
                                                        </div>
                                                    </div>                                                                
                                                </div>  
                                                <div className="col-12 col-sm-12 col-md-6  col-lg-6  items mb-3">
                                                    <div className=" card bdr5 mt-0 profile-card mb-0">
                                                        <div className="flt__left float-left">
                                                            <div className="profile-card__img">
                                                                <img src="images/download.jpg" alt="profile card"/>
                                                            </div> 
                                                        </div>                                       
                                                        <div className="profile-card__cnt float-left">                                                
                                                            <div className="profile-card__name d-flex justify-content-between">
                                                                <div>Maek andrew Filntuff</div>
                                                                <div className="checkbox posabs m__tten">
                                                                    <input className="all_slct" id="user" type="checkbox"/>
                                                                    <label for="user" className="ps-0">&nbsp;</label>
                                                                </div>                                                      
                                                            </div> 
                                                            <div className="profile-card__txt"><strong>Email : </strong> andrewfilntuff@gmail.com</div>
                                                            <div className="profile-card__txt"><strong>Team Role : </strong> Admin</div>
                                                            <div className="profile-card__txt"><strong>Project Profile : </strong> Project Owner</div> 
                                                        </div>
                                                    </div>                                                                
                                                </div>                                                                    
                                            </div> 
                                        </div>
                                    </div>  
                                    <div className="thirdtstep dnnone"> 
                                        <div className="steps mb-2">    
                                            <div className="step completed">
                                            <i className="zmdi zmdi-info step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                    Create Project
                                                </div>
                                                <div className="step-description">
                                                    First Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step completed">
                                            <i className="zmdi zmdi-calendar-note step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Project Users
                                                </div>
                                                <div className="step-description">
                                                    Second Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step active">
                                            <i className="zmdi zmdi-check-circle step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Sprint / Milestones
                                                </div>
                                                <div className="step-description">
                                                    Third Step
                                                </div>
                                            </div>
                                            </div>  
                                            <div className="step">
                                                <i className="zmdi zmdi-check-circle step-icon"></i>
                                                <div className="step-body">
                                                <div className="step-title">
                                                    Backlog Items
                                                </div>
                                                <div className="step-description">
                                                    Fourth Step
                                                </div>
                                                </div>
                                            </div>                                  
                                        </div>  
                                        <div className="pagediv p-2 pt-0" style={{minHeight:"450px"}}>                                                                    
                                            <div className="row m-0">
                                                <div className="col-md-12 mb-1">                                        
                                                <button className="btn btn-primary float-right add-row"><i className="zmdi zmdi-plus me-2"></i>Add Row</button>
                                                </div>
                                            </div>
                                            
                                            <div className="row m-0">
                                                <div className="col-md-12">
                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Start Date</th>
                                                        <th>End Date</th>
                                                        <th>Description</th>
                                                        <th>Files</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                
                                                    <tr data-id="1">
                                                        <td data-field="name">Halyna Nadia</td>
                                                        <td data-field="start">May 25, 2021</td>
                                                        <td data-field="end">June/25/2021</td>
                                                        <td data-field="desc">Sorry. We’re having trouble getting your pages back</td>
                                                        <td data-field="files">usd.pdf</td>
                                                        <td style={{width:"96px"}}>
                                                        <a className="btn btn-sm btn-outline-primary edit me-1" title="Edit"><i className="zmdi zmdi-edit"></i></a> 
                                                        <a className="btn btn-sm btn-danger" title="Delete"><i className="zmdi zmdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                            </div>
                                                                                                    
                                        
                                        </div>  
                                    </div> 
                                    <div className="fourthtstep dnnone"> 
                                        <div className="steps mb-2">    
                                            <div className="step completed">
                                            <i className="zmdi zmdi-info step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                    Create Project
                                                </div>
                                                <div className="step-description">
                                                    First Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step completed">
                                            <i className="zmdi zmdi-calendar-note step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Project Users
                                                </div>
                                                <div className="step-description">
                                                    Second Step
                                                </div>
                                            </div>
                                            </div>                                    
                                            <div className="step completed">
                                            <i className="zmdi zmdi-check-circle step-icon"></i>
                                            <div className="step-body">
                                                <div className="step-title">
                                                Sprint / Milestones
                                                </div>
                                                <div className="step-description">
                                                    Third Step
                                                </div>
                                            </div>
                                            </div>  
                                            <div className="step active">
                                                <i className="zmdi zmdi-check-circle step-icon"></i>
                                                <div className="step-body">
                                                <div className="step-title">
                                                    Backlog Items
                                                </div>
                                                <div className="step-description">
                                                    Fourth Step
                                                </div>
                                                </div>
                                            </div>                                  
                                        </div>  
                                        <div className="pagediv p-2 pt-0" style={{minHeight:"450px"}}>                                                                    
                                            <div className="row m-0">
                                                <div className="col-md-12 mb-1">                                        
                                                <button className="btn btn-primary float-right add-row"><i className="zmdi zmdi-plus me-2"></i>Add Row</button>
                                                </div>
                                            </div>
                                            
                                            <div className="row m-0">
                                                <div className="col-md-12">
                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th>Select Milestone</th>
                                                        <th>User</th>
                                                        <th>Due date</th>                                                
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                
                                                    <tr data-id="1">
                                                        <td data-field="name" style={{width:"150px"}}>---</td>
                                                        <td data-field="user">Andrew Filintuff</td>
                                                        <td data-field="start">May 25, 2015</td>
                                                        <td style={{width:"96px"}}>
                                                        <a className="btn btn-sm btn-outline-primary edit me-1" title="Edit"><i className="zmdi zmdi-edit"></i></a> 
                                                        <a className="btn btn-sm btn-danger" title="Delete"><i className="zmdi zmdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                            </div>
                                                                                                    
                                        
                                        </div>  
                                    </div>                                                                                                                                                                      
                                
                                    
                        </div>
                        
                        <div className="model-footer">
                            <div className="row m-0">
                                <div className="col-md-12">                          
                                    <div className="text-center fststep">
                                        <button className="btn btn-primary btn-lg clickmode btn-lg" data-show=".secondtstep" data-hide=".fststep, .thirdtstep,.fourthtstep" type="button">  Next <i className="zmdi zmdi-arrow-right"></i> </button>
                                        <button className="btn btn-danger btn-lg ms-1" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                    </div>
                                    <div className="text-center secondtstep dnnone">
                                        <button className="btn btn-outline-primary btn-lg clickmode btn-lg" data-show=".fststep" data-hide=".secondtstep, .thirdtstep,.fourthtstep" type="button"><i className="zmdi zmdi-arrow-left"></i>  Prev </button>
                                        <button className="btn btn-primary btn-lg clickmode btn-lg ms-1 me-1" data-show=".thirdtstep" data-hide=".fststep, .secondtstep" type="button">Next <i className="zmdi zmdi-arrow-right"></i> </button>
                                        <button className="btn btn-danger btn-lg" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                    </div>
                                    <div className="text-center thirdtstep dnnone">
                                        <button className="btn btn-outline-primary btn-lg clickmode btn-lg" data-show=".secondtstep" data-hide=".fststep, .thirdtstep,.fourthtstep" type="button"><i className="zmdi zmdi-arrow-left"></i>  Prev </button>
                                        <button className="btn btn-primary btn-lg clickmode btn-lg  ms-1 me-1" data-show=".fourthtstep" data-hide=".fststep, .secondtstep, .thirdtstep" type="button">Next <i className="zmdi zmdi-arrow-right"></i> </button>
                                        <button className="btn btn-danger btn-lg" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                    </div>
                                    <div className="text-center fourthtstep dnnone">
                                        <button className="btn btn-outline-primary btn-lg clickmode btn-lg" data-show=".thirdtstep" data-hide=".fststep,.secondtstep, .fourthtstep" type="button"><i className="zmdi zmdi-arrow-left"></i>  Prev </button>
                                        <button className="btn btn-success btn-lg clickmode btn-lg ms-1 me-1" type="button">  Completed <i className="zmdi zmdi-arrow-right"></i> </button>
                                        <button className="btn btn-danger btn-lg" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
