"use client"
import React from 'react'

function EmailNotifications() {
  return (
    <>
    <div className='row justify-content-start'>
                                    <div className="col-lg-7">
       <h2 className="font-bold"> Email Notifications </h2>
       <div className="saddow_box mb-2">
            <div className="mb-0 col-info d-flex justify-content-between align-items-center">
                <div className="mb-0 font-18 blucolor"><b>Email Notifications to me</b><br/>
                <small className="col-grey">Turn on/off all email notifications</small>
                </div>
                <div className="text-end"> 
                    <button type="button" className="btn btn-toggle active mt-2 mb-0" data-toggle="button" aria-pressed="true" autocomplete="off">
                    <div className="handle"></div>
                    </button>
                </div>
            </div> 
            <hr/>
<div className="ps-3 pe-3">
    
<p className="font-16 mb-1"><b>Invoice</b></p>
            <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label className="form-check-label col-grey" for="flexCheckDefault">
                     A recurring Invoice is sent   </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label className="form-check-label col-grey" for="flexCheckDefault">
                    A comment is added on an Invoice</label>
            </div>
           
            <p className="font-16 mt-3 mb-1"><b>Quotes and Proposals</b></p>
            
            <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label className="form-check-label col-grey" for="flexCheckDefault">
                    A comment is added on a Quote/Proposal</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label className="form-check-label col-grey" for="flexCheckDefault">
                       A Quote/Proposals is accepted</label>
            </div>

            <p className="font-16 mt-3 mb-1"><b>Payments</b></p>
            
            <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label className="form-check-label col-grey" for="flexCheckDefault">
                    An online payment is received</label>
            </div>
            <p className="font-16 mt-3 mb-1"><b>Payments</b></p>

            <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label className="form-check-label col-grey" for="flexCheckDefault">
                      A comment is added on a Project</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label className="form-check-label col-grey" for="flexCheckDefault">
                     A post is made on a Project</label>
            </div>


</div>

        </div></div></div>
    </>
  )
}

export default EmailNotifications
