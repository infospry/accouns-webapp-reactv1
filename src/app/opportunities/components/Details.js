"use client"
import React from 'react'
function Details({res,contact}) {
  return (
    <>
    <div className="row justify-content-center">
        <div className="col-lg-9 font-h4">
            <div class="d-flex justify-content-start align-items-center mt-4">    
                      <div class="css-3sr5s9 me-2">
                          <span class="css-19k1nij">
                             <img src="../images/no-image.jpg" alt="avatar" class="img-fluid rounded-circle img"></img>
                          </span></div>
                <div>
                <h2 class="mb-0">  {contact.lead_company_name !==''?<>{ contact.lead_company_name} &nbsp;</> :''}</h2>
                <p>Let employers know that you are available to start working as soon as possible.</p>
                </div>
            </div>

            <a className="css-es7v8c css-z4q3yd clickmode" href="javascript:void(0);"  data-show=".mainInfo">
                <div className="css-ra8ckx">
                    <div className="css-1waj6v4">
                        <h3 className="css-tixvpt"> Information Details</h3>
                        <span className="css-jcj5hu">Highlight your  Main Information.</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                        <path
                            d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                        ></path>
                    </svg>
                </div>
            </a>

            
            <div className="mainInfo">
                <div class="css-es7v8c css-z4q3yd pro">
                    <div class="css-ra8ckx d-flex justify-content-center align-items-top" style={{alignItems:" flex-start"}}>
                        <div class="css-1waj6v4 eu4oa1w0">
                            <div class="row justify-content-center align-items-top">
                                <div className="col-lg-6">                                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-account me-1"></i>Name</h4>
                                          <p className="mb-2"> <span className="col-black"><b>
                                              {contact.lead_name !== '' ? <>{contact.lead_name} &nbsp;</> : 'NA'}</b> [<b className="col-green font-13 ms-1">Active</b>] </span> </p>
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-accounts me-1"></i> Designations </h4>
                                    <p className="mb-2"> <span className="col-black">Director</span> </p>

                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i>Location </h4>
                                    <p className="mb-2"> <span className="col-black">California</span> </p>

                                </div>
                                <div className="col-lg-6">
                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-smartphone-android me-1"></i> Mobile</h4>
                                    <p className="mb-2"> <span className="col-black">  {contact.lead_mobile !== '' ? <>{contact.lead_mobile} &nbsp;</> : 'NA'}  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-phone me-1"></i> Phone </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_phone !== '' ? <>{contact.lead_phone} &nbsp;</> : 'NA'}  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>

                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-email me-1"></i> Email</h4>
                                    <p className="mb-2"> <span className="col-black">  {contact.lead_email !== '' ? <>{contact.lead_email} &nbsp;</> : 'NA'} <small className="col-red"> <i className="zmdi zmdi-alert-triangle"> </i> Unerified</small></span> </p>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".ContactInfo">
                <div className="css-ra8ckx">
                    <div className="css-1waj6v4">
                        <h3 className="css-tixvpt"> Contact Address</h3>
                        <span className="css-jcj5hu">Highlight your  Contact Information.</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                        <path
                            d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                        ></path>
                    </svg>
                </div>
            </a>

            
            <div className="ContactInfo ddnone">
                <div class="css-es7v8c">
                    <div class="css-ra8ckx d-flex justify-content-center align-items-top" style={{alignItems:" flex-start"}}>
                        <div class="css-1waj6v4 eu4oa1w0">
                            <div class="row justify-content-center align-items-top">
                                <div className="col-lg-6">                                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-account me-1"></i>Name</h4>
                                    <p className="mb-2"> <span className="col-black"><b>Nicole Pearson</b> [<b className="col-green font-13 ms-1">Active</b>] </span> </p>
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-accounts me-1"></i> Designations </h4>
                                    <p className="mb-2"> <span className="col-black">Director</span> </p>

                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i>Location </h4>
                                    <p className="mb-2"> <span className="col-black">California</span> </p>

                                </div>
                                <div className="col-lg-6">
                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-smartphone-android me-1"></i> Mobile</h4>
                                    <p className="mb-2"> <span className="col-black">7123584758  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-phone me-1"></i> Phone </h4>
                                    <p className="mb-2"> <span className="col-black">73737  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>

                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-email me-1"></i> Email</h4>
                                    <p className="mb-2"> <span className="col-black">daniel.cook@gmail.com <small className="col-red"> <i className="zmdi zmdi-alert-triangle"> </i> Unerified</small></span> </p>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".History">
                <div className="css-ra8ckx">
                    <div className="css-1waj6v4">
                        <h3 className="css-tixvpt"> Lead Status History</h3>
                        <span className="css-jcj5hu">Highlight Lead Status History</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                        <path
                            d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                        ></path>
                    </svg>
                </div>
            </a>

            <div className="History ddnone">
                <div class="css-es7v8c">
                    <div class="css-ra8ckx d-flex justify-content-center align-items-top" style={{alignItems:" flex-start"}}>
                        <div class="css-1waj6v4 eu4oa1w0">
                            <div className="dd-content">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-time">
                                            <span className="date">Today</span>
                                            <span className="time">04:20</span>
                                        </div>
                                        <div className="timeline-icon">
                                            <a href="javascript:;">&nbsp;</a>
                                        </div>
                                        <div className="timeline-body">
                                            <div className="timeline-header">
                                                <span className="userimage"><img
                                                        src="images/download.jpg" /></span>
                                                <span className="username"><a
                                                        href="javascript:;">John Smith</a>
                                                    <small></small></span>
                                                <span
                                                    className="text-right float-right text-muted">New
                                                    Lead</span>
                                            </div>
                                            <div className="timeline-content">
                                                <p className="lead">Traning Magager Software
                                                    Engneering</p>
                                                <p>
                                                    A Leads Status in a campaign can be
                                                    Updated from the Lead Profile in a
                                                    Campaign.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-time">
                                            <span className="date">16/2-2021</span>
                                            <span className="time">09:20</span>
                                        </div>
                                        <div className="timeline-icon">
                                            <a href="javascript:;">&nbsp;</a>
                                        </div>
                                        <div className="timeline-body">
                                            <div className="timeline-header">
                                                <span className="userimage"><img
                                                        src="images/download.jpg" /></span>
                                                <span className="username"><a
                                                        href="javascript:;">John Smith</a>
                                                    <small></small></span>
                                                <span
                                                    className="text-right float-right text-muted">New
                                                    Lead</span>
                                            </div>
                                            <div className="timeline-content">
                                                <p className="lead">Traning Magager Software
                                                    Engneering</p>
                                                <p>
                                                    A Leads Status in a campaign can be
                                                    Updated from the Lead Profile in a
                                                    Campaign.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-icon">
                                            <a href="javascript:;">&nbsp;</a>
                                        </div>
                                        <div className="timeline-body">
                                            Loading...
                                        </div>
                                    </li>
                                </ul>
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

export default Details
