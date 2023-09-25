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
                                <h2 className="font-bold mb-0"><i class="zmdi zmdi-file-text me-1"></i> Files </h2>
                            </div>
                           <div className="pe-2">
                            <a href="javascript:void(0);" className="btn btn-success" data-toggle="modal" data-target="#add"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>  Create New File</a>
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
                                        <div className="row">
                                            <div class="col-12">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered overflow-y rwd-table btdr_none mb-3" id="sortable">
                                                        <thead class="font_b dnone-mob">                     
                                                            <tr class="font_btd">
                                                                <th style={{width:"30px"}}> 
                                                                    #
                                                                </th>
                                                                <th> File Name </th>  
                                                                <th>Folder</th>                                                    
                                                                <th> Modified on </th>
                                                                <th>File Type</th>                    
                                                                <th style={{width:"180px"}}>  Action</th>
                                                            </tr>
                                                        </thead>            
                                                        <tbody>
                                                            <tr class="">
                                                                <td class="">
                                                                1
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/pdf.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Yonger than Yestarday </b> - Delhi Metro Rail Corporation</span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PDF</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                2
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/word.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Delhi Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>world</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                3
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/exel.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 120kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>Exel</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                4
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/jpg.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Rail Corporation Delhi Metro</b> - </span><br/>
                                                                        <small>File Size :-105kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 13/06/2021</td>  
                                                                <td>JPEG</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                5
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/png.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 12mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PNG</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                1
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/pdf.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Yonger than Yestarday </b> - Delhi Metro Rail Corporation</span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PDF</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                2
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/word.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Delhi Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>world</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                3
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/exel.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 120kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>Exel</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                4
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/jpg.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Rail Corporation Delhi Metro</b> - </span><br/>
                                                                        <small>File Size :-105kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 13/06/2021</td>  
                                                                <td>JPEG</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                5
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/png.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 12mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PNG</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                1
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/pdf.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Yonger than Yestarday </b> - Delhi Metro Rail Corporation</span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PDF</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                2
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/word.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b>Delhi Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 5mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>world</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                3
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/exel.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 120kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>Exel</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                4
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/jpg.png" alt="user" class="rounded"style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Rail Corporation Delhi Metro</b> - </span><br/>
                                                                        <small>File Size :-105kb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 13/06/2021</td>  
                                                                <td>JPEG</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            <tr class="">
                                                                <td class="">
                                                                5
                                                                </td>                                                
                                                                <td class="pt-3 pb-3">
                                                                    <span class="u_image float-left me-2"><img src="../images/png.png" alt="user" class="rounded" style={{width:"36px"}}/></span>
                                                                    <span class="float-left">
                                                                        <span class="float-left nowrap-w220"><b> Metro Rail Corporation </b> - </span><br/>
                                                                        <small>File Size :- 12mb</small>
                                                                    </span>
                                                                </td>
                                                                <td>Policies</td>                                                         
                                                                <td class="col-grey"> 03/06/2021</td>  
                                                                <td>PNG</td>  
                                                                <td>
                                                                    <div class="btn-group">
                                                                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle dr-breakout-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu dr-breakout">  
                                                                            <li class="btn btn-outline-primary btn-sm" title="Edit" data-toggle="modal" data-target=""> <i class="zmdi zmdi-download"></i> </li>                                                        
                                                                            <li class="btn btn-outline-primary btn-sm me-1 ms-1" title="Edit" data-toggle="modal" data-target="#addpage"> <i class="zmdi zmdi-edit"></i> <span class="dnone-mob">Edit</span></li>
                                                                            <li class="btn btn-danger btn-sm" title="Delete" type="button"> <i class="zmdi zmdi-delete"></i> <span class="dnone-mob">Delete</span></li>                                                 
                                                                        </ul>
                                                                    </div> 
                                                                </td> 
                                                            </tr>
                                                            
                                                        </tbody>        
                                                    </table>
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
