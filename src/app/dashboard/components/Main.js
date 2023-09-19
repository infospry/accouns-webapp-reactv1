"use client"
import React from 'react'
import Link from "next/link";




function Main() {
  return (
    <section className="content">
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrb">
                    <div className="p-2">
                        <h2 className="font-bold mb-0"><i className="zmdi zmdi-view-dashboard me-1"></i>Dashboard </h2>
                    </div>
                    <div className="pagination-email">
                        <div className="btn-group bdrr dnone-mob pe-0">
                            <button className="btn btn-outline-primary dropdown-toggle pe-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span className="col-grey me-1">Last 7 Days</span>
                                <b>Jun 7 - 13,2019</b>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 7 - 13,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 8 - 14,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 9 - 18,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 10 - 19,2019</b>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#">
                                    <i className="zmdi zmdi-calendar"></i>
                                    <b>Jun 11 - 29,2019</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactlist scroll_bar">
                <div className="container-fluid"> 
                    <div className="row mt-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7"> 
                            <div className="card bdr5 mb-1">
                                <div className="header pt-2 ps-2">
                                    <h2 className="col-black"><i className="ti ti-stats-up"></i> Top Opportunities</h2>
                                </div>
                            </div>   
                           
                            <div className="row">
                                <div className="col-12 col-sm-6 col-xl-6 items pe-0">       
                                    <div className="card bdr5 mt-0">
                                        <div className="header">
                                            <h2><i className="zmdi zmdi-view-dashboard"></i> Leads<br/><small>Unread Lead</small> </h2>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div className="body pt-1 pb-2">
                                            <div className="icon-small">
                                                <div className="w_icon cyan">437</div><h4>Leads</h4>                                                
                                            </div>  
                                            <div className="state_w1 mb-1 mt-1 ms-3">
                                                <div className="d-flex justify-content-between">                                           
                                                    <div> 
                                                        <h4 className="mt-1"><span className="badge badge-info me-1 font-15 bold"> 437 </span> <span className="font-15"> Unread Leads</span> </h4> 
                                                    </div>
                                                    <div>                                              
                                                        <Link href="/"  className="btn btn-brimary float-right text-right font-14 btnnn mt-2">View →</Link>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>                         
                                </div>
                                <div className="col-12 col-sm-6 col-xl-6 items ps-1">       
                                    <div className="card bdr5 mt-0">
                                        <div className="header">
                                            <h2><i className="zmdi zmdi-view-dashboard"></i> Response<br/><small>Unread Messages</small> </h2>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li><a href="javascript:void(0);">Action</a></li>
                                                        <li><a href="javascript:void(0);">Another action</a></li>
                                                        <li><a href="javascript:void(0);">Something else</a></li>
                                                    </ul>
                                                </li>                                    
                                            </ul>
                                        </div>
                                        <div className="body pt-1 pb-2">
                                            <div className="icon-small">
                                                <div className="w_icon cyan">1</div><h4>Response</h4> 
                                               
                                            </div>                                      
                                            <div className="state_w1 mb-1 mt-1 ms-3">
                                                <div className="d-flex justify-content-between">                                           
                                                    <div> 
                                                        <h4 className="mt-1"><span className="badge badge-light me-1 font-15 bold"> 0 </span> <span className="font-15"> Unread Messages </span> </h4> 
                                                    </div>
                                                    <div>                                              
                                                        <Link href="/"  className="btn btn-brimary float-right text-right font-14 btnnn mt-2">View →</Link>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>                         
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5"> 
                            <div className="card bdr5 mb-1">
                                <div className="header pt-2 ps-2">
                                    <h2 className="col-black"><i className="ti ti-layout-accordion-list"></i> Top Opportunities by Industry</h2>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="col-12 items">  
                                    <div className="card bdr5 pb-1">
                                        <div className="table-responsive">
                                            <table className="table  rwd-table btdr_none mb-0" id="sortable">
                                                <thead>
                                                    <tr className="font_btd">
                                                        <th className="pt-3 pb-3">Industy</th>
                                                        <th>Leads</th>                                                        
                                                    </tr>
                                                </thead>            
                                                <tbody>
                                                    <tr className="">
                                                        <td className="pt-3 pb-3"> IT </td>                                                         
                                                        <td> 50 </td>
                                                    </tr> 
                                                    <tr className="">
                                                        <td className="pt-3 pb-3">  Health care </td>                                                         
                                                        <td> 100 </td>
                                                    </tr>  
                                                    <tr className="">
                                                        <td className="pt-3 pb-3"> Energy</td>                                                         
                                                        <td> 5 </td>
                                                    </tr>  
                                                    <tr className="text-center">
                                                        <td colSpan="2" className="pt-3 pb-3 text-center">  <Link href="/"  className="btn btn-brimary font-14 btnnn text-center">View →</Link></td> 
                                                    </tr>                                     
                                                </tbody>        
                                            </table>
                                        </div>                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7"> 
                            <div className="card bdr5 mb-1">
                                <div className="header ps-2 pt-2">
                                    <h2 className="col-black"><i className="zmdi zmdi-sign-in"></i> Recent customer signups </h2>                                    
                                </div>
                            </div>
                            <div className="card bdr5">                                
                                <div className="body p-0">                                  
                                    <div className="table-responsive">
                                        <div className="table-responsive">
                                            <table className="table  rwd-table btdr_none mb-0" id="sortable">
                                                <thead>
                                                    <tr className="font_btd">
                                                        <th className="">  Org Name</th>
                                                        <th> Email</th>                                          
                                                        <th>  Phone </th> 
                                                        <th>  Location</th>
                                                     </tr>
                                                </thead>            
                                                <tbody>
                                                    <tr className=""> 
                                                        <td className="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>    
                                                    <tr className=""> 
                                                        <td className="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr> 
                                                    <tr className=""> 
                                                        <td className="pt-3 pb-3"> Frank Josheph. </td>                                                         
                                                        <td> FrankJosheph@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> Porterfield 508 Virginia Street Chicago, IL 60653 </td>
                                                    </tr> 
                                                    <tr className=""> 
                                                        <td className="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>                                               
                                                    <tr className=""> 
                                                        <td className="pt-3 pb-3"> John doe Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>
                                                    <tr className=""> 
                                                        <td className="pt-3 pb-3"> Andrew anderson Ltd. </td>                                                         
                                                        <td> johndoe@sds.com </td>
                                                        <td> 074855***22 </td>
                                                        <td> London </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td colSpan="4" className="pt-3 pb-3 text-center">  <Link href="/" className="btn btn-brimary font-14 btnnn text-center">View →</Link></td> 
                                                    </tr>  
                                                </tbody>        
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5"> 
                            <div className="card bdr5 mb-1">
                                <div className="header ps-2 pt-2">
                                    <h2 className="col-black"><i className="zmdi zmdi-square-down"></i> Activity </h2>                                    
                                </div>
                            </div>
                            <div className="card bdr5">                                
                                <div className="body mb-0 p-0">                                  
                                    <div className="body">                              
                                        <ul className="row list-unstyled c_review">
                                            <li className="col-12">
                                                <div className="avatar">
                                                   <span className="cbptmicon">H</span>
                                                </div>                                
                                                <div className="comment-action">
                                                    <h6 className="c_name">Hossein Shams</h6>
                                                    <p className="c_msg m-b-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                                                    <div className="badge badge-info">iPhone 8</div>
                                                   
                                                    <small className="comment-date float-sm-right">Dec 21, 2019</small>
                                                </div>                                
                                            </li>
                                            <li className="col-12">
                                                <div className="avatar">
                                                    <span className="cbptmicon">T</span>
                                                 </div>                                
                                                <div className="comment-action">
                                                    <h6 className="c_name">Tim Hank</h6>
                                                    <p className="c_msg m-b-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                                                    <div className="badge badge-info">Nokia 8</div>
                                                   
                                                    <small className="comment-date float-sm-right">Dec 18, 2019</small>
                                                </div>                                
                                            </li>
                                            <li className="col-12">
                                                <div className="avatar">
                                                    <span className="cbptmicon">M</span>
                                                 </div>                                
                                                <div className="comment-action">
                                                    <h6 className="c_name">Maryam Amiri</h6>
                                                    <p className="c_msg m-b-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                                    <div className="badge badge-info">Samsung Galaxy S8</div>
                                                   
                                                    <small className="comment-date float-sm-right">Dec 18, 2019</small>
                                                </div>                                
                                            </li>
                                            <li className="col-12">
                                                <div className="avatar">
                                                    <span className="cbptmicon">G</span>
                                                 </div>                                
                                                <div className="comment-action">
                                                    <h6 className="c_name">Gary Camara</h6>
                                                    <p className="c_msg m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <div className="badge badge-info">HTC U11</div>
                                                  
                                                    <small className="comment-date float-sm-right">Dec 13, 2019</small>
                                                </div>                                
                                            </li>
                                        </ul>                                                       
                                        <p className="mb-0 text-left pt-3 ps-2">
                                            <Link href="/" className="btn btn-brimary font-14 btnnn text-center">View →</Link>                                           
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
