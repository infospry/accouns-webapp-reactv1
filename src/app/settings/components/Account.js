"use client"
import React from 'react'

function Account({accountData}) {
return (
<>

                                           
<div className='row justify-content-center'>
    <div className="col-lg-7"> 
        <div className="saddow_box "style={{backgroundColor:"#fff"}}>            
            <div className="basicDetails">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="m-0 p-0 font-18"> <i className="zmdi zmdi-account-box-mail mr-1 me-1 col-grey "></i> <b> Account Information  </b></h2>
                </div>
                <hr/>
                {accountData && accountData.length > 0 && accountData.map((item, i) => (
                <div className="row font-h4 p-3"key={i}>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0">Account Name</h4>
                        <p className="mb-3"> <span className="col-black">  {item.account_name}  </span> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Role</h4>
                        <p className="mb-3"> <span className="col-black"><b>{item.account_role}</b> </span> </p>
                    </div> 
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Email Address</h4>
                        <p className="mb-3"> <span className="col-black">{item.account_email} </span><small id="spanEmail" class="ms-2 col-green">Verified{item.email_verify_status}</small> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Mobile Number</h4>
                        <p className="mb-3"> <span className="col-black"><b>{item.account_mobile}</b> </span><small id="spanEmail" class="ms-2 col-green">Unverified{item.mobile_verify_status}</small> </p>
                    </div>  
                     
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> A/c create date</h4>
                        <p className="mb-3"> <span className="col-black"><b>{item.create_date}  </b> </span></p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> A/c Update Date</h4>
                        <p className="mb-3"> <span className="col-black">
                            
                        {item.update_date ? ( <b> {item.update_date}</b> ) : ( <b> Not Available</b> )}</span> </p>

                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Last Login</h4>
                        <p className="mb-3"> <span className="col-black"><b>{item.last_login[0].login_datetime}  </b> </span><a href="/" class="ms-2 col-blue">View more...</a> </p>
                    </div>
                </div>                
                ))}
                <div className="text-center col-12">
                    <hr/>
                    <button className="btn btn-primary clickmode basic_btn clickmode" data-hide=".basic_btn, .basicDetails" data-show=".editBasic"> <i className="zmdi zmdi-edit"></i> Edit </button>
                </div>

            </div>
            <div className="editBasic dd_none">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="m-0 p-0 font-18"> <i className="zmdi zmdi-account-box-mail mr-1 me-1 col-grey "></i> <b> Account Information </b></h2>
                </div>
                <hr/>
                <div className="row">
                            
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Account Name<span>*</span></label>
                            <input type="text" className="form-control" placeholder="Enter account name" />
                        </div>
                    </div>                    
                    <div className="col-12 col-md-6">
                        <div className="mb-3">                                                
                            <label for="exampleFormControlInput1" className="form-label">Email address<span>*</span></label>
                            <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Mobile Number <span>*</span></label>
                            <input type="text" className="form-control" placeholder="Enter 10 digit mobile Number" />
                        </div>
                    </div>
                    <div className="text-center col-12">
                        <hr/>
                        <button className="btn btn-primary clickmode me-1" data-show=".basic_btn, .basicDetails" data-hide=".editBasic"> <i className="zmdi zmdi-upload"></i> Save </button>
                        <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                    </div>
                    
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mt-4">
                    <h2 className="m-0 p-0 font-18"> <i className="zmdi zmdi-city me-1 col-grey "></i> <b> Address </b></h2>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Address Line 1</label>
                            <input type="text" className="form-control mb-3" placeholder="Address Line 1" />
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Address Line 2</label>
                            <input type="text" className="form-control mb-3" placeholder="Address Line 2" />
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control mb-3" placeholder="Post Town" />
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Post Town</label>
                            <input type="text" className="form-control mb-3" placeholder="Post Town" />
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Postcode</label>
                            <input type="text" className="form-control mb-3" placeholder="Postcode" />
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <input type="text" className="form-control mb-3" placeholder="United Kingdom" />
                            
                        </div>
                    </div>
                    
                </div>  */}
            </div>
        </div> 
    </div>
</div>
</>
)
}

export default Account