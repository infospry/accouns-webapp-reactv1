"use client"
import React, { useState,useEffect } from 'react';
import { post } from '@/app/services/api_axios_services';
import ApiEndPoints from '@/app/utils/ApiEndPoints';

function Account({ accountData }) {
    
    const [formData, setFormData] = useState({
        name:'',
        user_email: '',
        user_mobile: '',
    }); 
     
    const [validationErrors, setValidationErrors] = useState({});      
    
    const editAccount = (e) => {          
       var JsonData= e.target.getAttribute("data-name")
       var objData= JSON.parse(JsonData);      
        setFormData({ name: objData[0].account_name, user_email:objData[0].account_email, user_mobile: objData[0].account_mobile});
    };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });      
      };
    
      const handleSave = () => {
        // Basic validation, you can add more complex validation as needed
        const errors = {};
        if (!formData.name.trim()) {
          errors.name = 'Account Name is required.';
        }
        if (!formData.user_email.trim()) {
          errors.user_email = 'Email is required.';
        }
        if (!formData.user_mobile.trim()) {
          errors.user_mobile = 'Mobile Number is required.';
        }
    
        if (Object.keys(errors).length > 0) {
          setValidationErrors(errors);
        } else {
                UpdateAccount();
        //   alert('Data saved:' + JSON.stringify(formData));
          // Clear the form
            //setFormData({ account_name: '', account_email: '', account_mobile: '' });
            
          setValidationErrors({});
          }
      };
    
    const UpdateAccount = async (e) => {           
        let strJsonString = {
            "account_info": formData,
            "action": 'account-info',
            "action_on": "organization",
            "request_for": 'update'
        };
        if (confirm("Are you sure you want to update account?")) {
            const resp = await post(strJsonString, ApiEndPoints.organizationApi);          
            if (resp.response_status === "OK") {
                alert(resp.response_msg);           
            }
            else { 
                alert(resp);
            }        
        }
    }
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
                            <hr />
                            
                                   <button data-name={JSON.stringify(accountData)} onClick={editAccount} className="btn btn-primary basic_btn clickmode" data-hide=".basicDetails" data-show=".editBasic"> <i className="zmdi zmdi-edit"></i> Edit </button>
                                   
                                        
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter account name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {validationErrors.name && (
                            <p className="text-danger">{validationErrors.name}</p>
                        )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                        <label className="form-label">Email address<span>*</span></label>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Enter account email Id"
                            name="user_email"
                            value={formData.user_email}
                                        onChange={handleInputChange}
                                        disabled='disabled'
                                        style={{backgroundColor:'#b7b5ae5e', border:'1px solid #ccc'}}
                        />
                        {validationErrors.user_email && (
                            <p className="text-danger">{validationErrors.user_email}</p>
                        )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                        <label className="form-label">Mobile Number <span>*</span></label>
                        <input
                            type="text"
                            className="form-control"
                                        placeholder="Enter 10-digit mobile number"
                                        maxLength={11}
                            name="user_mobile"
                            value={formData.user_mobile}
                            onChange={handleInputChange}
                        />
                        {validationErrors.user_mobile && (
                            <p className="text-danger">{validationErrors.user_mobile}</p>
                        )}
                        </div>
                    </div>
                    <div className="text-center col-12">
                        <hr />
                        <button
                        className="btn btn-primary clickmode me-1"
                        onClick={handleSave}
                        >
                        <i className="zmdi zmdi-upload"></i> Save
                        </button>
                        <button className="btn btn-danger clickmode" type="button"data-show=".basicDetails"data-hide=".editBasic">
                        <i className="zmdi zmdi-rotate-left"></i> Cancel
                        </button>
                    </div>
                </div>                
            </div>
        </div> 
    </div>
</div>
</>
)
}

export default Account