"use client"
import Loading from '@/app/components/Loading'
import React, { useState } from 'react';
import Image from 'next/image';
import Details from './Details';
import Document from './Document';
import Note from './Note';
import Activity from './Activity';
function Main() {
//#region style
const customStyles = {
    borderLeft: '1px solid rgb(221, 221, 221)',
    height: '100vh',
};
//#endregion




return (
<>
    <section className="content">
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="p-2">
                        <h2 className="font-bold mb-0">Opporrunites </h2>
                    </div>
                    <div className="pe-2">
                       
                        <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addpage"><i
                                className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</a>
                        <div className="btn-group ms-1">
                            <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">More</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#"><i className="zmdi zmdi-upload"></i> Export</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#"><i className="zmdi zmdi-download"></i> Import</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#"><i className="zmdi zmdi-email"></i> Send Email</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#"><i className="zmdi zmdi-repeat"></i> History</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#"><i className="zmdi zmdi-rotate-left"></i> Refresh</a>
                                <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#"><i className="zmdi zmdi-notifications-active"></i> Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className='Lodingbox'>
                <Loading />
            </div> */}

            <div className="contactlist">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 p-0 bg-white bdrrgtt">
                            <div className="hgt80 formobile">

                                <div className="position-relative">
                                    <div className="checkbox chk_absult">
                                        <input className="all_slct" id="list_f" type="checkbox" />
                                        <label for="list_f" className="ps-0">&nbsp;</label>
                                    </div>
                                    <a className="media d-flex border p-3 mb-0 nav__link clickmode" data-hide=".fone" data-show=".one"
                                        href="#">
                                        <div className="media-body d-block text-start ms-3">
                                            <h5>Graham </h5>
                                            
                                            <p className="mb-2"><i className="zmdi zmdi-city-alt"></i> Lisburn, BT27 <span
                                                    className="float-right col-grey"> 3d</span></p>

                                            <p className="lable_show"><span className="badge badge-primary me-1">Primary Online store, Create a
                                                    new website</span> <span className="badge badge-danger">Danger</span> </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="position-relative">
                                    <div className="checkbox chk_absult">
                                        <input className="all_slct" id="list_s" type="checkbox" />
                                        <label for="list_s" className="ps-0">&nbsp;</label>
                                    </div>
                                    <a className="media d-flex  border nav__link p-3 mb-0 clickmode" data-hide=".one" data-show=".fone" href="#">
                                        <div className="media-body d-block  text-start ms-3">
                                            <h5>Carom Recruitment Limited </h5>
                                            
                                            <p className="mb-2"><i className="zmdi zmdi-city-alt"></i> Lisburn, BT27 <span
                                                    className="float-right col-grey"> 3d</span></p>
                                            <p className="lable_show">
                                                <span className="badge badge-success me-1">Success</span>
                                                <span className="badge badge-warning">Warning</span>
                                            </p>
                                            
                                        </div>
                                    </a>
                                </div>
                            
                                <div className="text-center">
                                    <a href="#" className="btn btn-outline-primary mt-3 mb-4"><b className=" col-blue">Load More</b> →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-9 p-0 bg-white">
                            <div className="hgtt88 contbody one add_remove">
                                <div className="media border p-4 mb-0"style={{borderLeft:"0px",borderRight:"0px"}}>
                                    <div className="media-body ptag">
                                        <a href="#" className="btn cross_remove">x</a>
                                        <h5>Graham
                                            <span className="float-right  d-none d-lg-block ">
                                                <a href="#" className="btn btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#emailsend"><i className="zmdi zmdi-email-open"></i> <span
                                                        className="d-none_small">Send Email</span></a>
                                                <a href="#" className="btn btn btn-primary ms-1 me-1" data-bs-toggle="modal"
                                                    data-bs-target="#Schedule"><i className="zmdi zmdi-alarm-check"></i> <span
                                                        className="d-none_small"> Schedule</span></a>
                                               
                                                <div className="btn-group">
                                                    <button className="btn btn-outline-primary  dropdown-toggle" type="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i
                                                            className="zmdi zmdi-alert-polygon"></i> <span className="d-none_small">
                                                            Status</span></button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">1st attempt</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt"> 2nd attempt</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">3rd attempt</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">4th attempt</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">Interested</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">Very Interested</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">Call Later</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">Not Interested</a>
                                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                            data-bs-target="#fristattempt">Fake Lead</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn btn btn-outline-primary ms-1" data-bs-toggle="modal"
                                                    data-bs-target="#convert"><i className="zmdi zmdi-swap"></i> <span
                                                        className="d-none_small"><b>Convert</b> </span></a>
                                            </span>
                                        </h5>
                                        <p className="mb-1">Web Design | <span className="col-black">E-commerce</span> .</p>
                                        <p className="mb-1"><i className="zmdi zmdi-city-alt"></i> Lisburn, BT27 </p>
                                        <p className="mb-1"><i className="zmdi zmdi-whatsapp"></i> 9973373851 </p>
                                        <p className="mb-1"><i className="zmdi zmdi-phone"></i> 9973373851 <small className="col-green">
                                                Verified</small> </p>
                                        <p className="mb-1"><i className="zmdi zmdi-email-open"></i> <span id="">
                                                solutions.topicccano@gmail.com</span> <small className="col-green"> Verified</small>
                                            <span className="float-right col-grey"> Respond 1yr ago</span></p>
                                        <div className="mb-1 d-lg-none">
                                            <a href="#" className="btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#emailsend"><i
                                                    className="zmdi zmdi-email-open"></i> <span className="d-none_small">Send
                                                    Email</span></a>
                                            <a href="#" className="btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#Schedule"><i
                                                    className="zmdi zmdi-alarm-check"></i> <span className="d-none_small">
                                                    Schedule</span></a>
                                            <a href="#" className="btn btn btn-primary"><i className="zmdi zmdi-favorite-outline"></i> <span
                                                    className="d-none_small">Save</span></a>
                                            <div className="btn-group">
                                                <button className="btn btn-primary  dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i
                                                        className="zmdi zmdi-alert-polygon"></i> <span className="d-none_small">
                                                        Status</span></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">1st attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt"> 2nd attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">3rd attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">4th attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Interested</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Very Interested</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Call Later</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Not Interested</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Fake Lead</a>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn btn-outline-primary" data-bs-toggle="modal"
                                                data-bs-target="#convert"><i className="zmdi zmdi-swap"></i> <span
                                                    className="d-none_small"><b>Convert</b> </span></a>

                                        </div>
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="alert alert-danger mb-0" role="alert">
                                        <i className="zmdi zmdi-info"></i> Type the name of your service to start searching out
                                        thousands of available services.
                                    </div>
                                </div>
                                <div className="bgblulgt bfix">
                                    <ul className="nav nav-tabs nav-justified p-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-bs-toggle="tab" href="#leaddetails"><i
                                                    className="zmdi zmdi-info"></i> <span className="d-none_small"> Lead Details</span> </a>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#mydoc"> <i className="zmdi zmdi-file-text"></i>
                                                <span className="d-none_small"> My Doc </span> </a>
                                        </li>
                                        

                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#Messages "><i
                                                    className="zmdi zmdi-email-open"></i> <span className="d-none_small"> Messages</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#mynote"><i
                                                    className="zmdi zmdi-comment-edit"></i> <span className="d-none_small">Note </span> </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " data-bs-toggle="tab" href="#Activity"><i
                                                    className="zmdi zmdi-calendar-note"></i> <span className="d-none_small"> Activity
                                                </span></a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="tab-content pt-2 pb-2 ps-2 pe-2">
                                
                                    <div role="tabpanel" className=" tab-pane pb-5 in active" id="leaddetails">
                                        <Details/>
                                    </div>
                                    <div role="tabpanel" className=" tab-pane" id="mydoc">
                                        <Document/> 
                                    </div>
                                    <div role="tabpanel" className="tab-pane comntsection" id="mynote">
                                        <Note/> 
                                    </div>
                                    <div role="tabpanel" class=" tab-pane" id="Activity">  
                                        <Activity/>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="hgtt88 contbody ddnone fone">
                                <div className="media border p-4 mb-0" style={{borderLeft:"0px",borderRight:"0px"}}>
                                    <div className="media-body ptag">
                                        <h5>Graham
                                            <span className="float-right">
                                                <a href="#" className="btn btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#contact"><i className="zmdi zmdi-phone"></i> Contact</a>
                                                <a href="#" className="btn btn btn-primary ms-1 me-1" data-bs-toggle="modal"
                                                    data-bs-target="#emailsend"><i className="zmdi zmdi-email-open"></i> Send Email</a>
                                                <a href="#" className="btn btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#smssend"><i className="zmdi zmdi-comment-text"></i> Send SMS</a>
                                                <a href="#" className="btn btn btn-outline-danger ms-1"><i
                                                        className="zmdi zmdi-notifications-off"></i> Not Interested</a>
                                            </span>
                                        </h5>
                                        <p className="mb-1">Web Design | <span className="col-black">E-commerce</span> .</p>
                                        <p className="mb-1"><i className="zmdi zmdi-city-alt"></i> Lisburn, BT27 </p>
                                        <p className="mb-1"><i className="zmdi zmdi-phone"></i> 9973373851 <small className="col-green me-4">
                                                Verified</small> </p>
                                        <p className="mb-1"><i className="zmdi zmdi-email-open"></i> <span id="">
                                                solutions.topicccano@gmail.com</span> <small className="col-green"> Verified</small></p>
                                        <hr />
                                        <p className="mb-1"><i className="zmdi zmdi-tag"></i> Avarage Value<span
                                                className="font-20 font-bold col-blue"> : $80 - 140</span> <span
                                                className="float-right col-grey"> Respond 1yr ago</span></p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="p-3">
                                        <h4 className="mb-0 mt-3">Details</h4>
                                        <hr />
                                        <p className="col-blue"><b>1. What type of organisation is this for? Do you already have a logo?
                                                No I do not have a logo</b></p>
                                        <p className="mb-3 ms-3"><b>Bussiness</b></p>

                                        <p className="col-blue"><b>2. Do you already have a logo?</b></p>
                                        <p className="mb-3 ms-3"><b> No I do not have a logo</b></p>

                                        <p className="col-blue"><b>3. How many logo design are you looking for?</b></p>
                                        <p className="mb-3 ms-3"><b>2 Designs</b></p>

                                        <p className="col-blue"><b>4. How soon would you like the project to begin?</b></p>
                                        <p className="mb-3 ms-3"><b> Less than two weeks</b></p>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    </section>

    

    {/* <!-- :::::::23-feb-2020;;;;;;; add convert model       -->   */}
    <div class="modal fade mdds" id="convert" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center" id="exampleModalLongTitle"><b>Convert Lead</b></h4>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
                <p class="mb-1"> 
                    <span class="wd-12px"> Create New Account</span>
                    <span>:</span>
                    <span id="">Ross and River Inc   </span>
                </p>
                <p class="mb-1"> 
                    <span class="wd-12px"> Create New Contact</span>
                    <span>:</span>
                    <span id="">Judi Murdock  </span>
                </p>
                
                <div class="form-check mt-3 mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Create a new Deal for this Account.
                    </label>
                </div>
                <p><b>Owner of the records: </b></p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="" id="records" name="name"/>
                    <span class="input-group-text"><i class="zmdi zmdi-search"></i></span>
                </div>
               
            </div>
            <div class="modal-footer">             
                <div class="text-center">
                    <button class="btn btn-primary me-1" data-bs-dismiss="modal" type="button"> <i class="zmdi zmdi-swap"></i> Convert </button>
                    <button class="btn btn-danger" data-bs-dismiss="modal" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                </div>
            </div>
          </div>
        </div>
    </div>
    {/* <!-- :::::::2-16-2020;;;;;;; add model status section              -->      */}
    <div class="modal fade mdds" id="fristattempt" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center" id="exampleModalLongTitle"><b>1st attempt</b></h4>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
                <div class="alert alert-primary mb-4" role="alert">
                This is a primary alert—check it out!
              </div>             

                <div class="form-group">
                    <p> Lable Here</p>
                    <input type="text" id="" class="form-control" placeholder=""/>
                </div>
                <div class="form-group">
                    <p> Date</p>
                    <input type="text" id="" class="form-control" placeholder="DD/MM/YYYY"/>
                </div>
                <div class="form-group">
                   <p> Comments</p>
                <textarea  class="form-control"></textarea>
                </div>
            </div>
            <div class="modal-footer">             
                <div class="text-center">
                    <button class="btn btn-primary me-1" data-bs-dismiss="modal" type="button"> <i class="zmdi zmdi-upload"></i> Update </button>
                    <button class="btn btn-danger" data-bs-dismiss="modal" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                </div>
            </div>
          </div>
        </div>
    </div>


{/* send Email */}

    <div class="modal right-half md-one" id="emailsend" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-bs-toggle="modal" data-bs-target="#delete">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-email-open"></i>Send Email</b>
                    </h4>
                </div>
                <div class="modal-body pe-0 ps-0 contbody">
                    <div class="row  m-0">
                        <div id="side_lft" class="span0">
                            <div class="pt-2">
                                <h4 class="mt-1">Create Template <a  href="#" class="btn btn-danger btn-sm float-right text-righ trig-cross" type="button"> <i class="zmdi zmdi-close"></i></a></h4>
                                <hr/>
                                <div class="sidelft">
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                            </div>
                            </div> 
                        </div>
                        <div id="side_rgt" class="col-md-12 ps-0 pe-0 f8f8f8bg">
                            <div class="tab-content p-0">
                                <div role="tabpanel" class=" tab-pane in active">
                                    <div class="row m-0">
                                        <div class="col-md-12 p-0">
                                            <div class="f8f8f8bg">
                                                <div class="card mb-0 p-2 f8f8f8bg">
                                                    <div class="body mb-2">
                                                        <div class="group_lead">
                                                            <input type="text" class="input_text" id="" required="required"/>
                                                            <label for="" class="lablefilled">To</label>                                           
                                                        </div> 
                                                        <div class="group_lead mb-0">
                                                            <input type="text" class="input_text" id="" required="required"/>
                                                            <label for="" class="lablefilled">Subject</label>                                           
                                                        </div>  
                                                    </div>
                                                    <div class="body mb-2">
                                                        <a class="btn btn-primary trig-add"href="#"><i class="zmdi zmdi-file"></i> <strong>Templates</strong></a>   
                                                        <a class="btn btn-primary ms-1" type="button"data-bs-toggle="modal" data-bs-target="#savetemp" href="#"><i class="zmdi zmdi-save"></i> <strong>Save as Template</strong></a>                                                        
                                                        <a  href="#" class="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target="#Schedule"><i class="zmdi zmdi-alarm-check"></i> <strong>Schedule</strong></a>
                                                        <a  href="#" class="btn btn-danger ms-2 float-right" type="button"data-bs-toggle="modal" data-bs-target="#delete"> <i class="zmdi zmdi-close"></i></a>                                                       
                                                    </div>
                                                    <div class="body">
                                                        <div class="summernote">
                                                            Hello there,
                                                            <br/>
                                                            <p>The toolbar can be customized and it also supports various callbacks such
                                                                as
                                                                <code>oninit</code>,
                                                                <code>onfocus</code>,
                                                                <code>onpaste</code> and many more.</p>
                                                            <p>Please try
                                                                <b>paste some texts</b> here</p>

                                                                <div class="alert alert-secondary ddnone" role="alert">
                                                                    <b class="col-blue bold">Apply on company site</b>
                                                                    This is a secondary alert—check it out!
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
                       
                       
                    </div>
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">
                            <div class="text-center">
                                <button class="btn btn-primary clickmode me-1" data-show="." data-hide="" type="button">  Send </button>
                                <button class="btn btn-danger" type="button"data-bs-toggle="modal" data-bs-target="#delete"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Message ?</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-center">
                <div class="p-4">
                    <p>Are you sure you want to discard this message?<br/>
                        Your message will not be saved.
                        </p>
                        <div class="text-center">
                            <button class="btn btn-primary me-1 btn-sm" data-bs-dismiss="modal">  Discard </button>
                            <button class="btn btn-danger btn-sm" data-bs-dismiss="modal"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                        </div>
                </div>   
            </div>
            
          </div>
        </div>
    </div>
    <div class="modal right-half md-one" id="savetemp" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite fixed-top">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Template</b>
                    </h4>
                </div>
                <div class="modal-body pe-0 ps-0 pb-0">  
                    <div class="row  m-0">  
                        <div class="col-12 col-md-6 col-lg-7 pt-4">
                            <div class="group_lead">
                                <input type="text" id="" class="input_text" required="required"/>
                                <label for="" class="lablefilled"> Templet Name<span>*</span> </label>                                           
                            </div> 
                            
                            <div class="group_lead">
                                <textarea required="required" id="Message"></textarea>
                                <label for="Message" class="lablefilled">Message</label>                                          
                            </div>
                            <h5>Insert placeholder:</h5> 
                            {/* <a class="btn btn-outline-secondary m-1">{CANDIDATE_FIRST_NAME}</a>    
                            <a class="btn btn-outline-secondary m-1">{CANDIDATE_NAME}</a>    
                            <a class="btn btn-outline-secondary m-1">{JOB_TITLE}</a>    
                            <a class="btn btn-outline-secondary m-1">{JOB_LOCATION}</a>    
                            <a class="btn btn-outline-secondary m-1">{COMPANY_NAME}</a>   */}
                            <p class="col-grey mt-3">Insert candidate name, Job title, Job location or company name. Placeholders will automatically update between candidates.</p>                
                        </div> 
                        <div class="col-12 col-md-6 col-lg-5" style={{background:"#f9f9f9",borderLeft:'1px solid #ddd',height:"86vh" }}>
                            <div class="p-3 col-black">
                                <h3 class="mt-0 mb-0"><b>Preview</b></h3>
                                <hr/>                                        
                                <h6>Hello,</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>                                        
                            </div>                              
                        </div>            
                    </div>                   
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                                <button class="btn btn-primary  me-1 clickmode" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* scheduled */}
<div class="modal right-half md-one" id="Schedule" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-alarm-check"></i> Schedule</b>
                    </h4>
                </div>
                <div class="modal-body pe-0 ps-0 contbody">
                    <div class="row  m-0">
                        <div class="col-md-12 ps-0 pe-0">
                            <div class="tab-content p-0">
                                <div role="tabpanel" class=" tab-pane in active">
                                    <div class="media border p-4 mb-0">                                                                         
                                        <div class="media-body ptag">             
                                            <h5>Graham  Anderson</h5>
                                            <p class="mb-1">Administrative / <span class="col-black">Marketing</span> </p>
                                            <p class="mb-1"><span id=""> solutions.topicccano@gmail.com</span> <small class="col-green">  Verified</small> </p>                                       
                                            <p class="mb-1"> Applied to Freelance Sales Consultant - Birmingham, West Midlands   </p> 
                                        </div>                                        
                                    </div>
                                    
                                    
                                    <div class="pt-3 pb-2 ps-4 pe-4">
                                        <h4 class="mb-0">Application</h4>  
                                        <hr/>   
                                        <p class="col-grey">(GMT + 01:00) British Summer Time (United Kingdom) <a class="float-right col-blue" href="#"> <i class="zmdi zmdi-edit"></i> </a></p>
                                        <div class="row">
                                            <div class="col-md-7 col-sm-12">
                                                <div class="form-group">
                                                    <label for=""><strong>Date</strong></label>
                                                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="DD/MM/YYYY"/>                                                   
                                                  </div>
                                            </div>
                                            <div class="col-md-2 col-sm-5 pe-0">
                                                <div class="form-group">
                                                    <label for=""><strong>Start Time</strong></label>
                                                    <select class="form-control" id="">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                      </select>                                                 
                                                  </div>
                                            </div>
                                            <div class="col-md-1 col-1 col-sm-1 ps-0 pe-0 pt-4 mt-1 text-center"> <strong>to</strong> </div>
                                            <div class="col-md-2 col-sm-6 ps-0">                                              
                                                <div class="form-group">
                                                    <label for=""><strong>End Time</strong></label>
                                                    <select class="form-control" id="">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                      </select>
                                                  </div>
                                            </div>
                                        </div> 
                                       
                                        <p><a class="btn btn-primary btn-sm mt-3"><i class="zmdi zmdi-plus-circle-o-duplicate"></i> Suggest multiple times</a></p>         
                                    
                                        <h5 class="mb-2 mt-4"><b>Schedule Type</b></h5>
                                        <a class="btn btn-outline-primary me-1 clickmode typbtn sel" data-hide=".phone-missed, .Inperson" data-show=".comment-video" href="#"><i class="zmdi zmdi-comment-video"></i> Video</a>
                                        <a class="btn btn-outline-primary me-1 clickmode typbtn" data-hide=".comment-video, .Inperson" data-show=".phone-missed" href="#"><i class="zmdi zmdi-phone-missed"></i> Phone</a>
                                        <a class="btn btn-outline-primary me-1 clickmode typbtn" data-hide=".phone-missed, .comment-video" data-show=".Inperson" href="#"><i class="zmdi zmdi-account"></i> In-person</a>

                                        <div class="comment-video">
                                            <h5 class="mb-2 mt-3"><b>Video conference link</b></h5>
                                            
                                                <div class="form-check mb-3">
                                                    <input type="radio" class="form-check-input" id="noneed" name="conference" value="customEx"/>
                                                    <label class="form-check-label" for="noneed"><strong>Use Indeed video conferencing</strong><span class="bbl-light ms-1 col-green">Recommended</span> <br/>
                                                        <span class="col-grey">No need to download software or import your own links,
                                                            <strong>We will send a video conference link</strong> to you and your candidate when your interview is confirmed.
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="form-check mb-3">
                                                    <input type="radio" class="form-check-input" id="thirt_partyvio" name="conference" value="customEx"/>
                                                    <label class="form-check-label" for="thirt_partyvio"><strong>Use third-party video conferencing service</strong> <br/> <span class="col-grey">Paste your third-party video conferencing links.</span></label>
                                                </div>
                                               
                                                <div class="thirt_party">
                                                    <div class="group_lead">
                                                        <input class="input_text" id="" name="" required="required" type="text"/> 
                                                        <label class="lablefilled">Type Lable</label>
                                                    </div>
                                                </div>
                                                <div class="group_lead">
                                                    <textarea required="required" id="Message"></textarea>
                                                    <label for="Message" class="lablefilled">Message to Lable</label>                                          
                                                </div>
                                                <div class="thirt_party">
                                                    <div class="group_lead">
                                                        <input class="input_text" id="addadditional" name="addadditional" required="required" type="text"/> 
                                                        <label class="lablefilled">Add additional employers</label>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                        <div class="phone-missed ddnone">                                            
                                            <div class="group_lead mt-4">
                                                <input class="input_text" id="" name="" required="required" type="text"/> 
                                                <label class="lablefilled">Phone number <i class="zmdi zmdi-info col-blue"></i></label>
                                            </div>
                                            <div class="group_lead">
                                                <textarea required="required" id="Message"></textarea>
                                                <label for="Message" class="lablefilled">Message to Lable</label>                                          
                                            </div>                                            
                                            <div class="group_lead">
                                                <input class="input_text" id="addadditional" name="addadditional" required="required" type="text"/> 
                                                <label class="lablefilled">Add additional employers</label>
                                            </div>                                        
                                        </div>
                                        <div class="Inperson ddnone">
                                            <div class="group_lead mt-4">
                                                <input class="input_text" id="" name="" required="required" type="text"/> 
                                                <label class="lablefilled">Address</label>
                                            </div>
                                            <div class="group_lead">
                                                <textarea required="required" id="Message"></textarea>
                                                <label for="Message" class="lablefilled">Message to Lable</label>                                          
                                            </div>                                            
                                            <div class="group_lead">
                                                <input class="input_text" id="addadditional" name="addadditional" required="required" type="text"/> 
                                                <label class="lablefilled">Add additional employers</label>
                                            </div> 
                                        </div>
                                    
                                    </div>

                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">
                            <div class="text-center comment-video">
                                <button class="btn btn-primary me-1 clickmode" data-show="." data-hide=".md-one, .modal-backdrop" type="button">  Send  video invitation</button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                            <div class="text-center phone-missed ddnone">
                                <button class="btn btn-primary me-1 clickmode" data-show="." data-hide=".md-one, .modal-backdrop" type="button">  Send phone invitation</button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                            <div class="text-center Inperson ddnone">
                                <button class="btn btn-primary me-1 clickmode" data-show="." data-hide=".md-one, .modal-backdrop" type="button">  Send In-person invitation</button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal right-quater md-one" id="smssend" tabindex="-1" role="dialog" aria-labelledby="addpage">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="myModalLabel2"> <b> <i class="zmdi zmdi-email-open"></i>Send SMS</b> </h4>
                </div>
                <div class="modal-body pe-0 ps-0 pb-0 contbody">  
                    <div class="row  m-0">                                 
                        <div class="col-sm-12 mt-3">
                            <div class="group_lead">
                                <input type="number" class="input_text" id="" required="required"/>
                                <label for="" class="lablefilled">Contact Number</label>                                           
                            </div>                                                
                        </div>
                        <div class="col-sm-12">
                            <div class="group_lead">
                                <textarea required="required" id="smss"></textarea>
                                <label for="smss" class="lablefilled"> Write Massage</label>                                                          
                            </div>                                               
                        </div>                                
                    </div>             
                </div>  
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                                <button class="btn btn-primary clickmode me-1" type="button"> Send</button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>           
    </div>
    <div class="modal right-half md-one" id="contact" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-account-list"></i> Contact</b>
                    </h4>
                </div>
                <div class="modal-body pe-0 ps-0 contbody">
                    <div class="row  m-0">
                        <div class="col-md-12">
                            <p class="font-bold col-blue font-18 m-0 mt-3"><i class="zmdi zmdi-info col-blue"></i> Great! Now contact Us </p>
                            <p class="m-0">
                                Our most successful professionals contact customers straight away and we recommend completing
                                    the steps below.
                            </p>
                            <hr/>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="font-bold col-black m-0"><i class="zmdi zmdi-email-open"></i> Send an email  </p>
                                    <p class="m-0 col-grey"> Send an email to introduce your business </p>
                                </div>
                                <div class="text-right"> <button class="btn btn-primary">Send an email</button></div>
                            </div>
                            <hr/>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="font-bold col-black m-0"><i class="zmdi zmdi-phone"></i> Give them a call  </p>
                                    <p class="m-0 col-grey"> Connect with the customer now to discuss their project directly </p>
                                </div>
                                <div class="text-right"> <button class="btn btn-primary">Call now</button></div>
                            </div>
                            <hr/>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="font-bold col-black m-0"><i class="zmdi zmdi-comment-text"></i> Send an SMS  </p>
                                    <p class="m-0 col-grey">If you have called and can't get through, follow up with an sms </p>
                                </div>
                                <div class="text-right"> <button class="btn btn-primary">Send SMS</button></div>
                            </div>
                            <hr/>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="font-bold col-black m-0"><i class="zmdi zmdi-tag"></i> Send an estimate  </p>
                                    <p class="m-0 col-grey">Enter a guid price and some notes to explain your costs </p>
                                </div>
                                <div class="text-right"> <button class="btn btn-primary">Send Estimate</button></div>
                            </div>
                            <hr/>

                        </div>
                        
                    </div>
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">
                            <div class="text-center">
                                <button class="btn btn-primary clickmode me-1" data-show="." data-hide="" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal right-quater md-one" id="addmydoc" tabindex="-1" aria-labelledby="shortModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Edit New Document</b>
                    </h4>
                </div>
                <div class="modal-body ps-0 pe-0 pb-0">  
                    <div class="tab-content pt-2 pb-2 ps-2 pe-2">                                            
                        <div role="tabpanel" class=" tab-pane in active">                      
                            <div class="row m-0">
                                <div class="col-md-12 Uploadimg">
                                    <form method="post" action="#" id="#">                      
                                        <div class="form-group files mt-2">
                                        <label><b>Upload Your File/Image </b></label>
                                        <input type="file" class="form-control mt-3" multiple=""/>
                                        </div>
                                        <p class="col-grey font-11">Select Media(jpg, png, pdf allowed - upto 6 Mb)</p> 
                                    </form> 
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">Document Name</label>                                           
                                    </div> 
                                    <div class="group_lead">
                                        <input type="url" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">File Url</label>                                           
                                    </div> 
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">Document Type</label>                                           
                                    </div> 
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">Date</label>                                           
                                    </div>
                                    <div class="group_lead">
                                        <textarea required="required" class="input_text" id="Description"></textarea>
                                        <label for="Description" class="lablefilled">Description</label>                                           
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
                                <button class="btn btn-primary me-1 clickmode" data-show=".doclist" data-hide=".md-one, .addmydocbtn, .modal-backdrop" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
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