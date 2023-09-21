import React from 'react'

function Business() {
  return (
    <>
      
        <div className='row justify-content-start'>
            <div className="col-lg-6">
                <div className="saddow_box mb-3">
                    <h2 className="font-bold"> Bussiness Details</h2>
                    <hr/>
                    <div className="row">                    
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Business Name</label>
                                <input type="text" className="form-control" placeholder="Business Name" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label">Business Phone</label>
                                <input type="text" className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">                                                
                                <label  class="form-label">Mobile Number</label>
                                <input type="text" class="form-control mb-3" placeholder="Mobile Number"/>            
                            </div>
                        </div>  


                        
                          
                    </div>
                </div> 
                <div className="saddow_box mb-3">
                    <div className="row">
                    <div className="col-12"> <h2 className="font-bold"> Address Details </h2>
                    <hr/>
                    </div>
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
                    </div>
                </div>                   
            </div>
            <div className="col-lg-6 saddow_box">
                <div className="">
                    <h2 className="font-bold"> Preferences</h2>
                    <hr/>
                    <div class="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Base Currency</label>
                                <input type="text" className="form-control mb-3" placeholder="GBP - Pound sterling" />
                                
                            </div>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="mb-3">
                                <label className="form-label">Business Time Zone</label>
                                <select class="form-select" name="timezone">
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
                                <select class="form-select" name="Month">
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
                                <select class="form-select" name="timezone">
                                    <option selected> Select Time Format</option>
                                    <option value="12 hours">1</option>
                                    <option value="24 hours">31</option>                                                    
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Start week On</label>
                                <select class="form-select" name="weekday">
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
                                <select class="form-select" name="dateFormat">
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
                                <div class="input-group mb-0">
                                <input type="text" class="form-control" placeholder="£0.00"/>
                                <span class="input-group-text" id="basic-addon2"> /hr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
                    
            <div class="text-center col-12">
            <hr/>
                <button class="btn btn-primary clickmode me-1"> <i class="zmdi zmdi-upload"></i> Save </button>
                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
            </div>
                


            

        </div>
    </>
  )
}

export default Business
