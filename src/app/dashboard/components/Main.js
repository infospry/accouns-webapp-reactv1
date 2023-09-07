"use client"
import React from 'react'
import Link from "next/link";
import { useState,useEffect } from 'react';



function Main() {
  return (
    <section class="content">
        <div class="body_scroll">
            <div class="scrolfx">
                <div class="booktab d-flex justify-content-between align-items-center bdrb">
                    <div class="p-2">
                        <h2 class="font-bold mb-0"><i class="zmdi zmdi-view-dashboard me-1"></i>Dashboard </h2>
                    </div>
                    <div class="pagination-email">
                        <div class="btn-group bdrr dnone-mob pe-0">
                            <button class="btn btn-outline-primary dropdown-toggle pe-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span class="col-grey me-1">Last 7 Days</span>
                                <b>Jun 7 - 13,2019</b>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i class="zmdi zmdi-calendar"></i>
                                    <b>Jun 7 - 13,2019</b>
                                </a>
                                <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i class="zmdi zmdi-calendar"></i>
                                    <b>Jun 8 - 14,2019</b>
                                </a>
                                <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i class="zmdi zmdi-calendar"></i>
                                    <b>Jun 9 - 18,2019</b>
                                </a>
                                <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i class="zmdi zmdi-calendar"></i>
                                    <b>Jun 10 - 19,2019</b>
                                </a>
                                <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i class="zmdi zmdi-calendar"></i>
                                    <b>Jun 11 - 29,2019</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contactlist scroll_bar">
                <div class="container-fluid"> 
                    <div class="row mt-3">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-7"> 
                            <div class="card bdr5 mb-1">
                                <div class="header pt-2 ps-2">
                                    <h2 class="col-black"><i class="ti ti-stats-up"></i> Top Opportunities</h2>
                                </div>
                            </div>   
                           
                            <div class="row">
                                <div class="col-12 col-sm-6 col-xl-6 items pe-0">       
                                    <div class="card bdr5 mt-0">
                                        <div class="header">
                                            <h2><i class="zmdi zmdi-view-dashboard"></i> Leads<br/><small>Unread Lead</small> </h2>
                                            <ul class="header-dropdown">
                                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                                    <ul class="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div class="body pt-1 pb-2">
                                            <div class="icon-small">
                                                <div class="w_icon cyan">437</div><h4>Leads</h4>                                                
                                            </div>  
                                            <div class="state_w1 mb-1 mt-1 ms-3">
                                                <div class="d-flex justify-content-between">                                           
                                                    <div> 
                                                        <h4 class="mt-1"><span class="badge badge-info me-1 font-15 bold"> 437 </span> <span class="font-15"> Unread Leads</span> </h4> 
                                                    </div>
                                                    <div>                                              
                                                        <a href="#" class="btn btn-brimary float-right text-right font-14 btnnn mt-2">View →</a>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>                         
                                </div>
                                <div class="col-12 col-sm-6 col-xl-6 items ps-1">       
                                    <div class="card bdr5 mt-0">
                                        <div class="header">
                                            <h2><i class="zmdi zmdi-view-dashboard"></i> Response<br/><small>Unread Messages</small> </h2>
                                            <ul class="header-dropdown">
                                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                                    <ul class="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div class="body pt-1 pb-2">
                                            <div class="icon-small">
                                                <div class="w_icon cyan">1</div><h4>Response</h4> 
                                               
                                            </div>                                      
                                            <div class="state_w1 mb-1 mt-1 ms-3">
                                                <div class="d-flex justify-content-between">                                           
                                                    <div> 
                                                        <h4 class="mt-1"><span class="badge badge-light me-1 font-15 bold"> 0 </span> <span class="font-15"> Unread Messages </span> </h4> 
                                                    </div>
                                                    <div>                                              
                                                        <a href="#" class="btn btn-brimary float-right text-right font-14 btnnn mt-2">View →</a>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>                         
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-5"> 
                            <div class="card bdr5 mb-1">
                                <div class="header pt-2 ps-2">
                                    <h2 class="col-black"><i class="ti ti-layout-accordion-list"></i> Top Opportunities by Industry</h2>
                                </div>
                            </div> 
                            <div class="row">
                                <div class="col-12 items">  
                                    <div class="card bdr5 pb-1">
                                        <div class="table-responsive">
                                            <table class="table  rwd-table btdr_none mb-0" id="sortable">
                                                <thead>
                                                    <tr class="font_btd">
                                                        <th class="pt-3 pb-3">Industy</th>
                                                        <th>Leads</th>                                                        
                                                    </tr>
                                                </thead>            
                                                <tbody>
                                                    <tr class="">
                                                        <td class="pt-3 pb-3"> IT </td>                                                         
                                                        <td> 50 </td>
                                                    </tr> 
                                                    <tr class="">
                                                        <td class="pt-3 pb-3">  Health care </td>                                                         
                                                        <td> 100 </td>
                                                    </tr>  
                                                    <tr class="">
                                                        <td class="pt-3 pb-3"> Energy</td>                                                         
                                                        <td> 5 </td>
                                                    </tr>  
                                                    <tr class="text-center">
                                                        <td colspan="2" class="pt-3 pb-3 text-center">  <a href="#" class="btn btn-brimary font-14 btnnn text-center">View →</a></td> 
                                                    </tr>                                     
                                                </tbody>        
                                            </table>
                                        </div>                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-7"> 
                            <div class="card bdr5 mb-1">
                                <div class="header ps-2 pt-2">
                                    <h2 class="col-black"><i class="zmdi zmdi-sign-in"></i> Recent customer signups </h2>                                    
                                </div>
                            </div>
                            <div class="card bdr5">                                
                                <div class="body p-0">                                  
                                    <div class="table-responsive">
                                        <div class="table-responsive">
                                            <table class="table  rwd-table btdr_none mb-0" id="sortable">
                                                <thead>
                                                    <tr class="font_btd">
                                                        <th class="">  Org Name</th>
                                                        <th> Email</th>                                          
                                                        <th>  Phone </th> 
                                                        <th>  Location</th>
                                                     </tr>
                                                </thead>            
                                                <tbody>
                                                    <tr class=""> 
                                                        <td class="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>    
                                                    <tr class=""> 
                                                        <td class="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr> 
                                                    <tr class=""> 
                                                        <td class="pt-3 pb-3"> Frank Josheph. </td>                                                         
                                                        <td> FrankJosheph@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> Porterfield 508 Virginia Street Chicago, IL 60653 </td>
                                                    </tr> 
                                                    <tr class=""> 
                                                        <td class="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>                                               
                                                    <tr class=""> 
                                                        <td class="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>
                                                    <tr class=""> 
                                                        <td class="pt-3 pb-3"> Andrew anderson Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>
                                                    <tr class="text-center">
                                                        <td colspan="4" class="pt-3 pb-3 text-center">  <a href="#" class="btn btn-brimary font-14 btnnn text-center">View →</a></td> 
                                                    </tr>  
                                                </tbody>        
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-5"> 
                            <div class="card bdr5 mb-1">
                                <div class="header ps-2 pt-2">
                                    <h2 class="col-black"><i class="zmdi zmdi-square-down"></i> Activity </h2>                                    
                                </div>
                            </div>
                            <div class="card bdr5">                                
                                <div class="body mb-0 p-0">                                  
                                    <div class="body">                              
                                        <ul class="row list-unstyled c_review">
                                            <li class="col-12">
                                                <div class="avatar">
                                                   <span class="cbptmicon">H</span>
                                                </div>                                
                                                <div class="comment-action">
                                                    <h6 class="c_name">Hossein Shams</h6>
                                                    <p class="c_msg m-b-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                                                    <div class="badge badge-info">iPhone 8</div>
                                                   
                                                    <small class="comment-date float-sm-right">Dec 21, 2019</small>
                                                </div>                                
                                            </li>
                                            <li class="col-12">
                                                <div class="avatar">
                                                    <span class="cbptmicon">T</span>
                                                 </div>                                
                                                <div class="comment-action">
                                                    <h6 class="c_name">Tim Hank</h6>
                                                    <p class="c_msg m-b-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                                    <div class="badge badge-info">Nokia 8</div>
                                                   
                                                    <small class="comment-date float-sm-right">Dec 18, 2019</small>
                                                </div>                                
                                            </li>
                                            <li class="col-12">
                                                <div class="avatar">
                                                    <span class="cbptmicon">M</span>
                                                 </div>                                
                                                <div class="comment-action">
                                                    <h6 class="c_name">Maryam Amiri</h6>
                                                    <p class="c_msg m-b-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                                    <div class="badge badge-info">Samsung Galaxy S8</div>
                                                   
                                                    <small class="comment-date float-sm-right">Dec 18, 2019</small>
                                                </div>                                
                                            </li>
                                            <li class="col-12">
                                                <div class="avatar">
                                                    <span class="cbptmicon">G</span>
                                                 </div>                                
                                                <div class="comment-action">
                                                    <h6 class="c_name">Gary Camara</h6>
                                                    <p class="c_msg m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <div class="badge badge-info">HTC U11</div>
                                                  
                                                    <small class="comment-date float-sm-right">Dec 13, 2019</small>
                                                </div>                                
                                            </li>
                                        </ul>                                                       
                                        <p class="mb-0 text-left pt-3 ps-2">
                                            <a href="#" class="btn btn-brimary font-14 btnnn text-center">View →</a>                                           
                                        </p>                   
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main
