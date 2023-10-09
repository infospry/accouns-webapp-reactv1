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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-accounts-list-alt me-1"></i> Project Users </h2>
                            </div>
                            <div className="pe-2">
                            <a href="javascript:void(0);" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#add"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create User</a>

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
                                        <div className="row mb-2">
                                            <div className="col-12 col-sm-6 col-md-4  col-lg-4  items mt-2"> 
                                                <div className="bdr5 mt-0 float-left profile-card mb-0">
                                                    <div className="flt__left float-left">
                                                        <div className="profile-card__img">
                                                            <img src="../images/download.jpg" alt="profile card"/>
                                                        </div> 
                                                    </div>                                       
                                                    <div className="profile-card__cnt float-left">                                                
                                                        <div className="profile-card__name d-flex justify-content-between">
                                                            <div>Andrew Filntuff<span className="badge badge-success ms-2 mt-1 mb-0"><b>Owner</b> </span></div>   
                                                            <div className="btn-group">
                                                                <a className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="zmdi zmdi-more-vert"></i></a>
                                                                <div className="dropdown-menu">                            
                                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-copy"></i> Find &amp; Merge Duplicates</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-repeat"></i> History</a>           
                                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
                                                                </div>
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
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
            <div className="modal right-quater md-one" id="add" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header bg-blu-lite">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title" id="myModalLabel2">
                        <b> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add Existing / Create New User </b>
                    </h4>
                </div>
                <div className="modal-body pe-0 ps-0 pb-0 contbody">  
                    <div className="row  m-0">
                        <div className="col-md-12 ps-0 pe-0">
                            <div className="bgblulgt">
                                <ul className="nav nav-tabs nav-justified p-0">                            
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#AddExistingUser"><i className="ti ti-layout-accordion-list"></i> Add Existing User </a>
                                    </li>                                    
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#CreateNewUser"><i className="zmdi zmdi-comment-edit"></i> Create New User</a>
                                    </li>                      
                                </ul>
                            </div>
                            <div className="tab-content p-1">                                            
                                <div role="tabpanel" className="tab-pane active" id="AddExistingUser">                                             
                                    <div className="table-responsive">
                                        <div className="table-responsive">
                                            <table className="table table-bordered overflow-y rwd-table btdr_none mb-0" id="sortable">
                                                <thead className="font_b dnone-mob">                     
                                                    <tr className="font_btd">
                                                        <th style={{width:"30px"}}> 
                                                            <div className="checkbox">
                                                                <input className="all_slct" id="order" type="checkbox"/>
                                                                <label for="order" className="ps-0">&nbsp;</label>
                                                            </div>
                                                        </th>
                                                        <th> <i className="zmdi zmdi-accounts-list-alt me-1"></i>User  </th>
                                                        <th> Role </th>  
                                                        <th> Profile </th>                                                                                  
                                                    
                                                     </tr>
                                                </thead>            
                                                <tbody>
                                                    <tr className="">
                                                        <td className="">
                                                            <div className="checkbox">
                                                                <input className="all_slct" id="product1" type="checkbox"/>
                                                                <label for="product1" className="ps-0">&nbsp;</label>
                                                            </div> 
                                                        </td>                                                
                                                        <td className="pt-2 pb-2">
                                                            <span className="u_image float-left me-2"><img src="images/user.png" alt="user" className="rounded" style={{width:"32px"}}/></span>
                                                            <span className="float-left col-grey"><b className="col-black">DMRC </b> <i className="zmdi zmdi-email ms-2"></i><br/> Delhi Metro Rail Corporation</span>
                                                        </td>                                                        
                                                       
                                                        <td> Manager</td>
                                                        <td className="col-grey"> Member</td>
                                                                                                  
                                                      
                                                    </tr>
                                                </tbody>        
                                            </table>
                                        </div>
                                    </div>
                                </div>                             
                                <div role="tabpanel" className="tab-pane p-3" id="CreateNewUser"> 
                                   
                                        <div className="group_lead mt-3">
                                            <input type="text" id="" className="input_text" required="required"/>
                                            <label for="" className="lablefilled">User Name</label>                                           
                                        </div>   
                                        <div className="group_lead">
                                            <input type="email" id="" className="input_text" required="required"/>
                                            <label for="" className="lablefilled">Email Id </label>                                           
                                        </div> 
                                        <div className="group_lead">
                                            <select type="text" id="unit" className="custom-select select_f" required="required">  
                                                <option selected="">Role</option>                                         
                                                <option value="Price excluding VAT" className="option">Owner</option>   
                                                <option value="Price excluding VAT" className="option">Project Owner</option>  
                                                <option value="Price excluding VAT" className="option">Manager</option>      
                                                <option value="Price excluding VAT" className="option">Member</option>                                          
                                            </select> 
                                        </div>  
                                        <div className="group_lead">
                                            <input type="text" id="" className="input_text" required="required"/>
                                            <label for="" className="lablefilled">Profile </label>                                           
                                        </div> 
                                </div>
                            </div>
                        </div>
                                           
                    </div>                 
                </div>
                <div className="model-footer">
                    <div className="row m-0">
                        <div className="col-md-12">                          
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg clickmode btn-lg" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i className="zmdi zmdi-plus-circle-o-duplicate"></i> Add </button>
                                <button className="btn btn-danger btn-lg ms-1" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
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
