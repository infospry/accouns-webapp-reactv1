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
                            <a href="javascript:void(0);" className="btn btn-success" data-toggle="modal" data-target="#add"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create User</a>

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
            <div class="modal right-quater md-one" id="add" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog ui-draggable ui-draggable-handle" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Existing / Create New User </b>
                    </h4>
                </div>
                <div class="modal-body pe-0 ps-0 pb-0 contbody">  
                    <div class="row  m-0">
                        <div class="col-md-12 ps-0 pe-0">
                            <div class="bgblulgt">
                                <ul class="nav nav-tabs nav-justified p-0">                            
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#AddExistingUser"><i class="ti ti-layout-accordion-list"></i> Add Existing User </a>
                                    </li>                                    
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#CreateNewUser"><i class="zmdi zmdi-comment-edit"></i> Create New User</a>
                                    </li>                      
                                </ul>
                            </div>
                            <div class="tab-content p-1">                                            
                                <div role="tabpanel" class="tab-pane active" id="AddExistingUser">                                             
                                    <div class="table-responsive">
                                        <div class="table-responsive">
                                            <table class="table table-bordered overflow-y rwd-table btdr_none mb-0" id="sortable">
                                                <thead class="font_b dnone-mob">                     
                                                    <tr class="font_btd">
                                                        <th style={{width:"30px"}}> 
                                                            <div class="checkbox">
                                                                <input class="all_slct" id="order" type="checkbox"/>
                                                                <label for="order" class="ps-0">&nbsp;</label>
                                                            </div>
                                                        </th>
                                                        <th> <i class="zmdi zmdi-accounts-list-alt me-1"></i>User  </th>
                                                        <th> Role </th>  
                                                        <th> Profile </th>                                                                                  
                                                    
                                                     </tr>
                                                </thead>            
                                                <tbody>
                                                    <tr class="">
                                                        <td class="">
                                                            <div class="checkbox">
                                                                <input class="all_slct" id="product1" type="checkbox"/>
                                                                <label for="product1" class="ps-0">&nbsp;</label>
                                                            </div> 
                                                        </td>                                                
                                                        <td class="pt-2 pb-2">
                                                            <span class="u_image float-left me-2"><img src="images/user.png" alt="user" class="rounded" style={{width:"32px"}}/></span>
                                                            <span class="float-left col-grey"><b class="col-black">DMRC </b> <i class="zmdi zmdi-email ms-2"></i><br/> Delhi Metro Rail Corporation</span>
                                                        </td>                                                        
                                                       
                                                        <td> Manager</td>
                                                        <td class="col-grey"> Member</td>
                                                                                                  
                                                      
                                                    </tr>
                                                </tbody>        
                                            </table>
                                        </div>
                                    </div>
                                </div>                             
                                <div role="tabpanel" class="tab-pane p-3" id="CreateNewUser"> 
                                   
                                        <div class="group_lead mt-3">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled">User Name</label>                                           
                                        </div>   
                                        <div class="group_lead">
                                            <input type="email" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled">Email Id </label>                                           
                                        </div> 
                                        <div class="group_lead">
                                            <select type="text" id="unit" class="custom-select select_f" required="required">  
                                                <option selected="">Role</option>                                         
                                                <option value="Price excluding VAT" class="option">Owner</option>   
                                                <option value="Price excluding VAT" class="option">Project Owner</option>  
                                                <option value="Price excluding VAT" class="option">Manager</option>      
                                                <option value="Price excluding VAT" class="option">Member</option>                                          
                                            </select> 
                                        </div>  
                                        <div class="group_lead">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled">Profile </label>                                           
                                        </div> 
                                </div>
                            </div>
                        </div>
                                           
                    </div>                 
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                                <button class="btn btn-primary btn-lg clickmode btn-lg" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add </button>
                                <button class="btn btn-danger btn-lg ms-1" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
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
