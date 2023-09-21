import React from 'react'

function EmailNotifications() {
  return (
    <>
    <div className='row justify-content-start'>
                                    <div className="col-lg-7">
       <h2 className="font-bold"> Email Notifications </h2>
       <div class="saddow_box mb-2">
            <div class="mb-0 col-info d-flex justify-content-between align-items-center">
                <div class="mb-0 font-18 blucolor"><b>Email Notifications to me</b><br/>
                <small className="col-grey">Turn on/off all email notifications</small>
                </div>
                <div class="text-end"> 
                    <button type="button" class="btn btn-toggle active mt-2 mb-0" data-toggle="button" aria-pressed="true" autocomplete="off">
                    <div class="handle"></div>
                    </button>
                </div>
            </div> 
            <hr/>
<div class="ps-3 pe-3">
    
<p class="font-16 mb-1"><b>Invoice</b></p>
            <div class="form-check">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label class="form-check-label col-grey" for="flexCheckDefault">
                     A recurring Invoice is sent   </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label class="form-check-label col-grey" for="flexCheckDefault">
                    A comment is added on an Invoice</label>
            </div>
           
            <p class="font-16 mt-3 mb-1"><b>Quotes and Proposals</b></p>
            
            <div class="form-check">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label class="form-check-label col-grey" for="flexCheckDefault">
                    A comment is added on a Quote/Proposal</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label class="form-check-label col-grey" for="flexCheckDefault">
                       A Quote/Proposals is accepted</label>
            </div>

            <p class="font-16 mt-3 mb-1"><b>Payments</b></p>
            
            <div class="form-check">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label class="form-check-label col-grey" for="flexCheckDefault">
                    An online payment is received</label>
            </div>
            <p class="font-16 mt-3 mb-1"><b>Payments</b></p>

            <div class="form-check">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label class="form-check-label col-grey" for="flexCheckDefault">
                      A comment is added on a Project</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value=""/>
                    <label class="form-check-label col-grey" for="flexCheckDefault">
                     A post is made on a Project</label>
            </div>


</div>

        </div></div></div>
    </>
  )
}

export default EmailNotifications
