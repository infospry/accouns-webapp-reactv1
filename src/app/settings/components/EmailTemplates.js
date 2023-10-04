
"use client"
import React from 'react'

export default function EmailTemplates() {
  return (
    <>
    <div className="row">
    <div className="col-sm-12 col-md-12 mt-3">  
    <h2 className="font-bold"> Email & Templates </h2>   
    <p>Customize emails sent to your clients</p>                                
    </div>
    <div className="col-sm-12 col-md-6 col-lg-7">   
        <div className="saddow_box mb-3">                                    
            <p className="mb-2 font-18">
                <b>Email Templates</b>
                
            </p>
            <hr/>
            <p>See a step-by-step guid to setting up your email templates.</p>
            
            <div className="row mt-3">
                <div className="col-lg-12 mb-3">
                    <p>
                        <span className="col-blue">New Invoice</span><br/>
                        <span className="col-grey">Notifies client that a new invoice has been sent</span>
                    </p>    
                </div>
                <div className="col-lg-12 mb-3">
                    <p>
                        <span className="col-blue">Online Payment Notification</span><br/>
                        <span className="col-grey">Notifies client when their online payment has been processed</span>
                    </p>    
                </div>
                <div className="col-lg-12 mb-3">
                    <p>
                        <span className="col-blue">New Quote</span><br/>
                        <span className="col-grey">Notifies client that a new quote has been sent</span>
                    </p>    
                </div>
                <div className="col-lg-12 mb-3">
                    <p>
                        <span className="col-blue">Payment Reminder</span><br/>
                        <span className="col-grey">Notifies client when their invoice is outstanding or overdue</span>
                    </p>    
                </div>
                <div className="col-lg-12 mb-3">
                    <p>
                        <span className="col-blue">New Recurring Invoice</span><br/>
                        <span className="col-grey">Notifies client that a new invoice has been sent from a Recurring template</span>
                    </p>    
                </div>
                <div className="col-lg-12 mb-3">
                    <p>
                        <span className="col-blue">Automatic Recurring Payment Notification</span><br/>
                        <span className="col-grey">Notifies client when any Automatic Recurring Payment online payment has been processed</span>
                    </p>    
                </div>
                <div className="col-lg-12 mb-3">
                    <p>
                        <span className="col-blue">New Proposal</span><br/>
                        <span className="col-grey">Notifies client that a new Proposal has been sent</span>
                    </p>    
                </div>
            </div>
            
        </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-5 saddow_box">   
        <div className=" mb-3">                                    
            <p className="mb-2  font-18">
                <b>Replay to Email Address</b>
            </p>
            <hr/>
            <p>Replies to emails sent via GSTdummy are directed to: the sender (you or a team member)
                who emailed the client<br/><br/><a href="/"> Change reply to email</a></p>
            
        </div>
        <hr/>
        <div className="">                                    
            <p className="mb-2  font-18">
                <b>Email Signature</b>
            </p>
            <hr/>
            <p>Best regards,<br/><br/><br/>
            
            Your Name<br/>
            Your Company(email@address.com)
            </p>
            
        </div>
    </div>
    
    </div>
      
    </>
  )
}
