import React from 'react'

function Invoice({billing_info=[]}) {
    const countryList = billing_info?.country_list || [];
  return (
    <>
      <div className="bussinessDetails dd_none"> 
       
       <div className='row justify-content-start'>
           <div className="col-lg-6">
               <div className="saddow_box mb-3">
                   <h2 className="font-bold  font-18"> Business Main Information</h2>
                   <hr/>
                   <div className="row">                    
                      <div className="col-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_billing_name" className="input_text" value={billing_info.billing_name} placeholder="Enter Billing Name"  required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Billing Name<span>*</span></label>
                        </div>
                        
                       </div>
                      
                      <div className="col-12"> <h2 className="font-bold  font-18"> Tax Status </h2>
                   <hr/>
                   </div>
                      <div className="col-sm-12">
                          <div className=" mt-3">
                              <div className="form-check form-check-inline mr-4" style={{ display: "inline-block" }}>
                                  <input type="radio" id="rdo_vat_yes" className="form-check-input evt-org-settings" data-action="org-info" data-request-for="vat-status" name="vatStatus" defaultChecked={billing_info !=='' && billing_info.tax_status===1?"checked":""} value="1"  />
                                  <label className="custom-control-label" htmlFor="rdo_vat_yes"><b>Yes</b> </label>
                              </div>
                              <div className="form-check form-check-inline  mb-3 ml-3" style={{ display: "inline-block" }}>
                                  <input type="radio" className="form-check-input evt-org-settings" id="rdo_vat_no" data-action="org-info" data-request-for="vat-status" name="vatStatus" defaultChecked={billing_info !=='' && billing_info.tax_status===0?"checked":""} value="0"  />
                                  <label className="custom-control-label" htmlFor="rdo_vat_no"><b>No</b></label>
                              </div>
                          </div>
                      </div>
                      <div className="row org-tax-status ml-1" style={{display:billing_info.tax_status===0?"none":"visible"}}>
                          <div className="col-sm-6">
                              <div className="group_lead">
                                  <input type="text" id="txt_tax_type" className="input_text" value={billing_info.tax_type}  required="required" autoComplete="off" />
                                  <label htmlFor="" className="lablefilled">Tax Type</label>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="group_lead">
                                  <input type="text" id="txt_tax_id" className="input_text" value={billing_info.tax_id}  required="required" autoComplete="off" />
                                  <label htmlFor="" className="lablefilled">Tax Id</label>
                              </div>
                          </div>
                      </div>
                      
                       
                   </div>
               </div> 
               <div className="saddow_box mb-3">
                   <div className="row">
                   <div className="col-12"> <h2 className="font-bold  font-18"> Address Information </h2>
                   <hr/>
                   </div>
                   <div className="col-12 col-md-12">
                        <div className="group_lead">
                            <input type="text" id="txt_address_line1" className="input_text" value={billing_info.address1} placeholder="Enter address line 1"  required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Address Line 1<span>*</span></label>
                        </div>
                   </div>
                   <div className="col-12">
                        <div className="form-check form-check-inline mb-4">
                            <input type="checkbox" className="form-check-input evt-org-settings" data-action="invoices" data-request-for="same-addr" id="chkSameAdr"  />
                            <label className="custom-control-label" htmlFor="chkSameAdr">Same Address </label>
                        </div>
                    </div>
                   <div className="col-12 col-md-12">
                        <div className="group_lead">
                            <input type="text" id="txt_address_line2" className="input_text" value={billing_info.address2} placeholder="Enter address line 2"  required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Address Line 2</label>
                        </div>
                   </div>
                   <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_state" className="input_text" value={billing_info.state} placeholder="Enter state"  required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">State<span>*</span></label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_city" className="input_text" value={billing_info.city} placeholder="Enter city"  required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">City<span>*</span></label>
                        </div>
                    </div>
                    <div className="col-sm-12  col-md-6">
                        <div className="group_lead">
                            <select id="ddl_country" className="custom-select select_f"  required="required" autoComplete="off" >
                                <option value="0">Select Country</option>
                                {/* {{each response.billing_info}} {{each country_list}} */}
                               
                                <option value="0">Select Country</option>
      {countryList.map((country, i) => (
        <option key={i} value={country.country_id}>
          {country.country_name}
        </option>
      ))}
                                {/* {{/each}}{{/each}} */}
                            </select>
                            <label htmlFor="" className="lablefilled">Country</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_post_code" className="input_text" value={billing_info.postal_code} placeholder="Enter post code"  required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Postcode<span>*</span></label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_web_url" className="input_text" value={billing_info.web_url} placeholder="Enter web url"  required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Web</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="number" id="txt_phone" className="input_text" value={billing_info.org_phone} placeholder="Enter phone"   maxLength="10" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Phone</label>
                        </div>
                    </div>
                   
                   </div>
               </div>                   
           </div>
           <div className="col-lg-6 saddow_box">
               <div className="">
                   <h2 className="font-bold font-18"> Bank Details</h2>
                   <hr/>
                   <div className="row">
                       
                       <div className="col-sm-12 col-md-6">
                            <div className="group_lead">
                                <input type="text" id="bank_acct_no" className="input_text" value={billing_info.bank_acct_no} placeholder="Enter bank account No"  required="required" autoComplete="off" />
                                <label htmlFor="" className="lablefilled">Bank Account No</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="group_lead">
                                <input type="text" id="bank_acct_sort_code" className="input_text" value={billing_info.bank_acct_sort_code} placeholder="Enter bank account sort code"  required="required" autoComplete="off" />
                                <label htmlFor="" className="lablefilled">Bank Account Sort Code</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="group_lead">
                                <input type="text" id="bank_acct_name" className="input_text" value={billing_info.bank_acct_name} placeholder="Enter bank account name"  required="required" autoComplete="off" />
                                <label htmlFor="" className="lablefilled">Bank Account Name</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="group_lead">
                                <textarea id="invoice_message" className="input_text"  maxLength="250" required="required">{billing_info.invoice_message}</textarea>
                                <label htmlFor="" className="lablefilled">Invoice Message</label>
                            </div>
                        </div>
                   </div>
               </div>                
           </div>                    
           <div className="text-center col-12">
               <hr/>
               <button className="btn btn-primary clickmode me-1 clickmode" data-hide=".bussinessDetails" data-show=".bussinessEdit"> <i className="zmdi zmdi-upload"></i> Save </button>
               <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
           </div>
       </div>
   
   </div>
   <div className="bussinessEdit "> 
           <div className='row justify-content-start'>
               <div className="text-end col-12 mb-1">                    
                   <button className="btn btn-primary clickmode" data-show=".bussinessDetails" data-hide=".bussinessEdit"> <i className="zmdi zmdi-edit"></i> Edit </button>
               </div>
               {/* <div className="col-lg-6">
                   <div className="saddow_box mb-3"style={{backgroundColor:"#fff"}}>
                       <h2 className="font-bold  font-18"> Business Information</h2>
                       <hr/>
                       <div className="row font-h4 p-3"key={index}>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Organization Name</h4>
                               <p className="mb-3"> <span className="col-black">  {item.org_name}   </span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Company registration number/Id </h4>
                               <p className="mb-3"> <span className="col-black">
                               {item.company_id ? ( <b> {item.company_id}</b> ) : ( <b> Not Available</b> )}</span> </p>
                           </div> 
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Industry</h4>
                               <p className="mb-3"> <span className="col-black"key={item.industry_id}> {item.industry} </span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Organization Email Address</h4>
                               <p className="mb-3"> <span className="col-black"> {item.business_email}  </span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Organization Phone Number</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.business_phone} </b> </span></p>
                           </div>  
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Website</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.web_url} </b> </span></p>
                           </div>  
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Create Date</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.create_date} </b> </span> </p>
                           </div>  
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Update Date</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.update_date} </b> </span></p>
                           </div> 
                           <div className="col-lg-12">
                               <h4 className="col-grey m-0 p-0"> Company Description</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.desc} </b> </span></p>
                           </div>
                       </div>
                   </div> 
                   <div className="saddow_box mb-3"style={{backgroundColor:"#fff"}}>
                       
                       <h2 className="font-bold  font-18"> Address Information </h2>
                       <hr/>
                       <div className="row font-h4 p-3"key={index}>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Address</h4>
                               <p className="mb-3"> <span className="col-black">  {item.address1}  </span> </p>
                           </div>
                           
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Address Line 2</h4>
                               <p className="mb-3"> <span className="col-black"> {item.address2} </span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> State</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.state} </b> </span> </p>
                           </div>  
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> City</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.city} </b> </span> </p>
                           </div>  
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Country</h4>
                               <p className="mb-3"> <span className="col-black"key={country_id}><b> {item.country_name} </b> </span> </p>
                           </div>  
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Postcode</h4>
                               <p className="mb-3"> <span className="col-black"><b> {item.postal_code} </b> </span> </p>
                           </div> 
                       </div>
                   </div>                   
               </div>
               <div className="col-lg-6 saddow_box"style={{backgroundColor:"#fff"}}>
                   <div className="">
                       <h2 className="font-bold font-18"> Preferences</h2>
                       <hr/>
                       <div className="row font-h4 p-3"key={index}>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Base Currency</h4>
                               <p className="mb-3"> <span className="col-black">  {item.currency}  </span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Business Time Zone</h4>
                               <p className="mb-3"> <span className="col-black"><b>{item.timezone}</b> </span> </p>
                           </div> 
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Fiscal Year End Month</h4>
                               <p className="mb-3"> <span className="col-black">{item.fiscal_year_end_month}</span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Fiscal Year End Day</h4>
                               <p className="mb-3"> <span className="col-black"><b>{item.fiscal_year_end_day}</b> </span></p>
                           </div> 

                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0"> Start week On</h4>
                               <p className="mb-3"> <span className="col-black"><b>{item.start_week_on}</b> </span> </p>
                           </div> 
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Date Format</h4>
                               <p className="mb-3"> <span className="col-black">{item.date_format} </span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Tax Name</h4>
                               <p className="mb-3"> <span className="col-black"><b>{item.tax_name}</b> </span></p>
                           </div>   
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Tax Number</h4>
                               <p className="mb-3"> <span className="col-black">{item.tax_number}</span> </p>
                           </div>
                           <div className="col-lg-6">
                               <h4 className="col-grey m-0 p-0">Standred Rate</h4>
                               <p className="mb-3"> <span className="col-black"><b>{item.standard_rate}</b> </span></p>
                           </div> 
                           
                       </div>
                   </div> 
                                  
               </div> 
                             */}
               <div className="text-center col-12">
                   <hr/>
                   <button className="btn btn-primary clickmode" data-show=".bussinessDetails" data-hide=".bussinessEdit"> <i className="zmdi zmdi-edit"></i> Edit </button>
               </div>
           </div>
      
   </div>
    </>
  )
}

export default Invoice
