"use client"
import React from 'react'
function Details({res,contact}) {
  return (
    <>
    <div className="row justify-content-center account__details font-h4 ">
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

            <div className="accordion accordion-flush mt-3" id="faqlist1">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                            Basic Details
                        </button>
                    </h2>
                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                            <div className="row justify-content-center align-items-top">
                                <div className="col-lg-6">                                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-account me-1"></i>Name</h4>
                                        <p className="mb-2"> <span className="col-black"><b>
                                            {contact.lead_name !== '' ? <>{contact.lead_title}&nbsp;&nbsp;{contact.lead_name} &nbsp;</> : 'NA'}</b> [<b className="col-green font-13 ms-1">Active</b>] </span> </p>
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-accounts me-1"></i> Gender </h4>
                                    <p className="mb-2"> <span className="col-black"> {contact.lead_gender !==''?<>{ contact.lead_gender}</> :'NA'} </span> </p>

                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-calendar">&nbsp;</i>Date of Birth </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_dob !==''?<>{ contact.lead_dob}</> :'NA'}</span> </p>

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
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                        Contract Details
                        </button>
                    </h2>
                    <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                            <div className="row justify-content-center align-items-top">
                                <div className="col-lg-6">                                                    
                                    <h4 className="col-grey m-0 p-0"> Reference Id</h4>
                                        <p className="mb-2"> <span className="col-black"><b>
                                            {contact.lead_name !== '' ? <>{contact.lead_title}&nbsp;&nbsp;{contact.lead_name} &nbsp;</> : 'NA'}</b> [<b className="col-green font-13 ms-1">Active</b>] </span> </p>
                             
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-calendar">&nbsp;</i>Title</h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_dob !==''?<>{ contact.lead_dob}</> :'NA'}</span> </p>
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-phone me-1"></i> Estimated Value From </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_phone !== '' ? <>{contact.lead_phone} &nbsp;</> : 'NA'}  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-email me-1"></i> Deadline Date</h4>
                                    <p className="mb-2"> <span className="col-black">  {contact.lead_email !== '' ? <>{contact.lead_email} &nbsp;</> : 'NA'} <small className="col-red"> <i className="zmdi zmdi-alert-triangle"> </i> Unerified</small></span> </p> 
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-phone me-1"></i> Description </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_phone !== '' ? <>{contact.lead_phone} &nbsp;</> : 'NA'}  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>

                                </div>
                                <div className="col-lg-6">
                                           
                                <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-accounts me-1"></i> Opportunity Id </h4>
                                    <p className="mb-2"> <span className="col-black"> {contact.lead_gender !==''?<>{ contact.lead_gender}</> :'NA'} </span> </p>

                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-smartphone-android me-1"></i> Region of suppply</h4>
                                    <p className="mb-2"> <span className="col-black">  {contact.lead_mobile !== '' ? <>{contact.lead_mobile} &nbsp;</> : 'NA'}  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                                    
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-email me-1"></i> Estimated Value To</h4>
                                    <p className="mb-2"> <span className="col-black">  {contact.lead_email !== '' ? <>{contact.lead_email} &nbsp;</> : 'NA'} <small className="col-red"> <i className="zmdi zmdi-alert-triangle"> </i> Unerified</small></span> </p>

                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-smartphone-android me-1"></i> Lead Suitable For</h4>
                                    <p className="mb-2"> <span className="col-black">  {contact.lead_mobile !== '' ? <>{contact.lead_mobile} &nbsp;</> : 'NA'}  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                            Contact Address <span className="ms-2 css-jcj5hu">{
                                contact.lead_address !== '' ? <>{contact.lead_address}</> : 'NA'}
                            </span>
                        </button>
                    </h2>
                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                            <div className="row justify-content-center align-items-top">
                                <div className="col-lg-6">                                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-pin me-1"></i>Address Line</h4>
                                    <p className="mb-2"> <span className="col-black"><b>{contact.lead_address !==''?<>{ contact.lead_address}</> :'NA'}</b> </span> </p>
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i> Country </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.country_name !==''?<>{ contact.country_name}</> :'NA'}</span> </p>

                                    <h4 className="col-grey m-0 p-0">Website </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_website !==''?<>{ contact.lead_website}</> :''}</span> </p>

                                </div>
                                <div className="col-lg-6">
                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-pin me-1"></i> City/State</h4>
                                    <p className="mb-2"> <span className="col-black"> {contact.lead_city !==''?<>{ contact.lead_city}</> :''} {contact.lead_county !==''?<>{ contact.lead_county}</> :''}</span> </p>
                                    
                                

                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i> Postcode</h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_postcode !==''?<>{ contact.lead_postcode}</> :'NA'}</span> </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                            Other Details
                        </button>
                    </h2>
                    <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                            <div className="row justify-content-center align-items-top">
                                <div className="col-lg-6">                                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-pin me-1"></i>Address Line</h4>
                                    <p className="mb-2"> <span className="col-black"><b>{contact.lead_address !==''?<>{ contact.lead_address}</> :'NA'}</b> </span> </p>
                                    
                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i> Country </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.country_name !==''?<>{ contact.country_name}</> :'NA'}</span> </p>

                                    <h4 className="col-grey m-0 p-0">Website </h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_website !==''?<>{ contact.lead_website}</> :''}</span> </p>

                                </div>
                                <div className="col-lg-6">
                                    
                                    <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-pin me-1"></i> City/State</h4>
                                    <p className="mb-2"> <span className="col-black"> {contact.lead_city !==''?<>{ contact.lead_city}</> :''} {contact.lead_county !==''?<>{ contact.lead_county}</> :''}</span> </p>
                                    
                                

                                    <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i> Postcode</h4>
                                    <p className="mb-2"> <span className="col-black">{contact.lead_postcode !==''?<>{ contact.lead_postcode}</> :'NA'}</span> </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            Lead Activities
                        </button>
                    </h2>
                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                            <div className="dd-content">
                                <ul className="timeline">                                          
                            {contact.lead_status_list && contact.lead_status_list.map((status, i) => (
                            <li key={i}>
                                <div className="timeline-time">
                                    <span className="date">{status.create_date}</span>
                                    <span className="time">{status.create_time}</span>
                                </div>
                                <div className="timeline-icon">
                                    <a href="javascript:;">&nbsp;</a>
                                </div>
                                <div className="timeline-body">
                                    <div className="timeline-header">
                                        <span className="userimage"><img
                                                src="images/download.jpg" /></span>
                                        <span className="username"><a
                                                href="javascript:;">{status.user_name}</a>
                                            <small></small></span>
                                        <span
                                            className="text-right float-right text-muted">{status.status_name}</span>
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
                            ))}
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
