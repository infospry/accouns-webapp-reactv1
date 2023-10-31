import React from 'react'

function Invoice() {
  return (
    <>
      <div className="bussinessDetails dd_none"> 
       
       <div className='row justify-content-start'>
           <div className="col-lg-6">
               <div className="saddow_box mb-3">
                   <h2 className="font-bold  font-18"> Business Main Information</h2>
                   <hr/>
                   <div className="row">                    
                      <div className="col-12 col-md-12">
                        <div className="group_lead">
                            <input type="text" id="txt_billing_name" className="input_text" defaultValue={billing_info.billing_name} placeholder="Enter Billing Name" disabled="disabled" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Billing Name<span>*</span></label>
                        </div>
                        
                       </div>
                       <div className="col-lg-12">
                          <h6 className="col-blue"> <b>Tax Status</b></h6>
                      </div>
                      <div className="col-sm-12">
                          <div className="form-group mt-3">
                              <div className="from-control from-radio from-radio-inline mr-4" style={{ display: "inline-block" }}>
                                  <input type="radio" id="rdo_vat_yes" className="custom-control-input evt-org-settings" data-action="org-info" data-request-for="vat-status" name="vatStatus" defaultChecked={billing_info !=='' && billing_info.tax_status===1?"checked":""} defaultValue="1" disabled="disabled" />
                                  <label className="custom-control-label" htmlFor="rdo_vat_yes"><b>Yes</b> </label>
                              </div>
                              <div className="from-control custom-radio custom-radio-inline  mb-3 ml-3" style={{ display: "inline-block" }}>
                                  <input type="radio" className="custom-control-input evt-org-settings" id="rdo_vat_no" data-action="org-info" data-request-for="vat-status" name="vatStatus" defaultChecked={billing_info !=='' && billing_info.tax_status===0?"checked":""} defaultValue="0" disabled="disabled" />
                                  <label className="custom-control-label" htmlFor="rdo_vat_no"><b>No</b></label>
                              </div>
                          </div>
                      </div>
                      <div className="row org-tax-status ml-1" style={{display:billing_info.tax_status===0?"none":"visible"}}>
                          <div className="col-sm-6">
                              <div className="group_lead">
                                  <input type="text" id="txt_tax_type" className="input_text" defaultValue={billing_info.tax_type} disabled="disabled" required="required" autoComplete="off" />
                                  <label htmlFor="" className="lablefilled">Tax Type</label>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="group_lead">
                                  <input type="text" id="txt_tax_id" className="input_text" defaultValue={billing_info.tax_id} disabled="disabled" required="required" autoComplete="off" />
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
                            <input type="text" id="txt_address_line1" className="input_text" defaultValue={billing_info.address1} placeholder="Enter address line 1" disabled="disabled" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Address Line 1<span>*</span></label>
                        </div>
                   </div>
                   <div className="col-12">
                        <div className="custom-control custom-checkbox mb-4">
                            <input type="checkbox" className="custom-control-input evt-org-settings" data-action="invoices" data-request-for="same-addr" id="chkSameAdr" disabled="disabled" />
                            <label className="custom-control-label" htmlFor="chkSameAdr">Same Address </label>
                        </div>
                    </div>
                   <div className="col-12 col-md-12">
                        <div className="group_lead">
                            <input type="text" id="txt_address_line2" className="input_text" defaultValue={billing_info.address2} placeholder="Enter address line 2" disabled="disabled" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Address Line 2</label>
                        </div>
                   </div>
                   <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_state" className="input_text" defaultValue={billing_info.state} placeholder="Enter state" disabled="disabled" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">State<span>*</span></label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_city" className="input_text" defaultValue={billing_info.city} placeholder="Enter city" disabled="disabled" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">City<span>*</span></label>
                        </div>
                    </div>
                    <div className="col-sm-12  col-md-6">
                        <div className="group_lead">
                            <select id="ddl_country" className="custom-select select_f" disabled="disabled" required="required" autoComplete="off" >
                                <option value="0">Select Country</option>
                                {/* {{each response.billing_info}} {{each country_list}} */}
                                {billing_info.country_list.map((list,i)=>(
                                <option key={i} value={list.country_id}>{list.country_name}</option>
                                ))}
                                {/* {{/each}}{{/each}} */}
                            </select>
                            <label htmlFor="" className="lablefilled">Country</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_post_code" className="input_text" defaultValue={billing_info.postal_code} placeholder="Enter post code" disabled="disabled" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Postcode<span>*</span></label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="text" id="txt_web_url" className="input_text" defaultValue={billing_info.web_url} placeholder="Enter web url" disabled="disabled" required="required" autoComplete="off" />
                            <label htmlFor="" className="lablefilled">Web</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="group_lead">
                            <input type="number" id="txt_phone" className="input_text" defaultValue={billing_info.org_phone} placeholder="Enter phone" disabled="disabled"  maxLength="10" required="required" autoComplete="off" />
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
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Base Currency<span>*</span></label>
                               <input type="text" className="form-control mb-3" placeholder="GBP - Pound sterling" />
                               
                           </div>
                       </div>
                       <div className="col-12 col-md-6 ">
                           <div className="mb-3">
                               <label className="form-label">Business Time Zone</label>
                               <select className="form-select" name="timezone">
                               <option selected> Select Time Zone</option>
                               <option value="Etc/GMT+12">(GMT-12:00) International Date Line West</option>
                               <option value="Pacific/Midway">(GMT-11:00) Midway Island, Samoa</option>
                               <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
                               <option value="US/Alaska">(GMT-09:00) Alaska</option>
                               <option value="America/Los_Angeles">(GMT-08:00) Pacific Time (US & Canada)</option>
                               <option value="America/Tijuana">(GMT-08:00) Tijuana, Baja California</option>
                               <option value="US/Arizona">(GMT-07:00) Arizona</option>
                               <option value="America/Chihuahua">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                               <option value="US/Mountain">(GMT-07:00) Mountain Time (US & Canada)</option>
                               <option value="America/Managua">(GMT-06:00) Central America</option>
                               <option value="US/Central">(GMT-06:00) Central Time (US & Canada)</option>
                               <option value="America/Mexico_City">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                               <option value="Canada/Saskatchewan">(GMT-06:00) Saskatchewan</option>
                               <option value="America/Bogota">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                               <option value="US/Eastern">(GMT-05:00) Eastern Time (US & Canada)</option>
                               <option value="US/East-Indiana">(GMT-05:00) Indiana (East)</option>
                               <option value="Canada/Atlantic">(GMT-04:00) Atlantic Time (Canada)</option>
                               <option value="America/Caracas">(GMT-04:00) Caracas, La Paz</option>
                               <option value="America/Manaus">(GMT-04:00) Manaus</option>
                               <option value="America/Santiago">(GMT-04:00) Santiago</option>
                               <option value="Canada/Newfoundland">(GMT-03:30) Newfoundland</option>
                               <option value="America/Sao_Paulo">(GMT-03:00) Brasilia</option>
                               <option value="America/Argentina/Buenos_Aires">(GMT-03:00) Buenos Aires, Georgetown</option>
                               <option value="America/Godthab">(GMT-03:00) Greenland</option>
                               <option value="America/Montevideo">(GMT-03:00) Montevideo</option>
                               <option value="America/Noronha">(GMT-02:00) Mid-Atlantic</option>
                               <option value="Atlantic/Cape_Verde">(GMT-01:00) Cape Verde Is.</option>
                               <option value="Atlantic/Azores">(GMT-01:00) Azores</option>
                               <option value="Africa/Casablanca">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                               <option value="Etc/Greenwich">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                               <option value="Europe/Amsterdam">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                               <option value="Europe/Belgrade">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                               <option value="Europe/Brussels">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                               <option value="Europe/Sarajevo">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                               <option value="Africa/Lagos">(GMT+01:00) West Central Africa</option>
                               <option value="Asia/Amman">(GMT+02:00) Amman</option>
                               <option value="Europe/Athens">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                               <option value="Asia/Beirut">(GMT+02:00) Beirut</option>
                               <option value="Africa/Cairo">(GMT+02:00) Cairo</option>
                               <option value="Africa/Harare">(GMT+02:00) Harare, Pretoria</option>
                               <option value="Europe/Helsinki">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                               <option value="Asia/Jerusalem">(GMT+02:00) Jerusalem</option>
                               <option value="Europe/Minsk">(GMT+02:00) Minsk</option>
                               <option value="Africa/Windhoek">(GMT+02:00) Windhoek</option>
                               <option value="Asia/Kuwait">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                               <option value="Europe/Moscow">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                               <option value="Africa/Nairobi">(GMT+03:00) Nairobi</option>
                               <option value="Asia/Tbilisi">(GMT+03:00) Tbilisi</option>
                               <option value="Asia/Tehran">(GMT+03:30) Tehran</option>
                               <option value="Asia/Muscat">(GMT+04:00) Abu Dhabi, Muscat</option>
                               <option value="Asia/Baku">(GMT+04:00) Baku</option>
                               <option value="Asia/Yerevan">(GMT+04:00) Yerevan</option>
                               <option value="Asia/Kabul">(GMT+04:30) Kabul</option>
                               <option value="Asia/Yekaterinburg">(GMT+05:00) Yekaterinburg</option>
                               <option value="Asia/Karachi">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                               <option value="Asia/Calcutta">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                               <option value="Asia/Calcutta">(GMT+05:30) Sri Jayawardenapura</option>
                               <option value="Asia/Katmandu">(GMT+05:45) Kathmandu</option>
                               <option value="Asia/Almaty">(GMT+06:00) Almaty, Novosibirsk</option>
                               <option value="Asia/Dhaka">(GMT+06:00) Astana, Dhaka</option>
                               <option value="Asia/Rangoon">(GMT+06:30) Yangon (Rangoon)</option>
                               <option value="Asia/Bangkok">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                               <option value="Asia/Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
                               <option value="Asia/Hong_Kong">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                               <option value="Asia/Kuala_Lumpur">(GMT+08:00) Kuala Lumpur, Singapore</option>
                               <option value="Asia/Irkutsk">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                               <option value="Australia/Perth">(GMT+08:00) Perth</option>
                               <option value="Asia/Taipei">(GMT+08:00) Taipei</option>
                               <option value="Asia/Tokyo">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                               <option value="Asia/Seoul">(GMT+09:00) Seoul</option>
                               <option value="Asia/Yakutsk">(GMT+09:00) Yakutsk</option>
                               <option value="Australia/Adelaide">(GMT+09:30) Adelaide</option>
                               <option value="Australia/Darwin">(GMT+09:30) Darwin</option>
                               <option value="Australia/Brisbane">(GMT+10:00) Brisbane</option>
                               <option value="Australia/Canberra">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                               <option value="Australia/Hobart">(GMT+10:00) Hobart</option>
                               <option value="Pacific/Guam">(GMT+10:00) Guam, Port Moresby</option>
                               <option value="Asia/Vladivostok">(GMT+10:00) Vladivostok</option>
                               <option value="Asia/Magadan">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                               <option value="Pacific/Auckland">(GMT+12:00) Auckland, Wellington</option>
                               <option value="Pacific/Fiji">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                               <option value="Pacific/Tongatapu">(GMT+13:00) Nuku'alofa</option>
                               </select>
                           </div>
                       </div>
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Fiscal Year End Month</label>
                               <select className="form-select" name="Month">
                               <option value=''>--Select Month--</option>
                               <option selected value='1'>Janaury</option>
                               <option value='2'>February</option>
                               <option value='3'>March</option>
                               <option value='4'>April</option>
                               <option value='5'>May</option>
                               <option value='6'>June</option>
                               <option value='7'>July</option>
                               <option value='8'>August</option>
                               <option value='9'>September</option>
                               <option value='10'>October</option>
                               <option value='11'>November</option>
                               <option value='12'>December</option>                                                  
                               </select>
                           </div>
                       </div>
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Fiscal Year End Day</label>
                               <select className="form-select" name="timezone">
                                   <option selected> Select Time Format</option>
                                   <option value="12 hours">1</option>
                                   <option value="24 hours">31</option>                                                    
                               </select>
                           </div>
                       </div>
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Start week On</label>
                               <select className="form-select" name="weekday">
                               <option value="0">Monday</option>
                               <option value="1">Tuesday</option>
                               <option value="2">Wednesday</option>
                               <option value="3">Thursday</option>
                               <option value="4">Friday</option>
                               <option value="5">Saturday</option>
                               <option value="6">Sunday</option>
                               </select>
                           </div>
                       </div>
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Date Format</label>
                               <select className="form-select" name="dateFormat">
                               <option value="0">dd/mm/yyyy</option>  
                               </select>
                           </div>
                       </div>
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Tax Name</label>
                               <input type="text" className="form-control mb-3" placeholder="Tax Name" />                            
                           </div>
                       </div>
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Tax Number</label>
                               <input type="text" className="form-control mb-3" placeholder="" />                            
                           </div>
                       </div>
                       <div className="col-12 col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Standred Rate</label>
                               <div className="input-group mb-0">
                               <input type="text" className="form-control" placeholder="£0.00"/>
                               <span className="input-group-text" id="basic-addon2"> /hr</span>
                               </div>
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
               <div className="col-lg-6">
                   <div className="saddow_box mb-3"style={{backgroundColor:"#fff"}}>
                       <h2 className="font-bold  font-18"> Business Information</h2>
                       <hr/>
                       {businessData && businessData.length > 0 && businessData.map((item, index) => (
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
                        ))}
                   </div> 
                   <div className="saddow_box mb-3"style={{backgroundColor:"#fff"}}>
                       
                       <h2 className="font-bold  font-18"> Address Information </h2>
                       <hr/>
                       {businessAddress && businessAddress.length > 0 && businessAddress.map((item, index) => (
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
                        ))}
                   </div>                   
               </div>
               <div className="col-lg-6 saddow_box"style={{backgroundColor:"#fff"}}>
                   <div className="">
                       <h2 className="font-bold font-18"> Preferences</h2>
                       <hr/>
                       {businessPreferenceData && businessPreferenceData.length > 0 && businessPreferenceData.map((item, index) => (

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
                        ))}
                   </div> 
                                  
               </div> 
                            
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
