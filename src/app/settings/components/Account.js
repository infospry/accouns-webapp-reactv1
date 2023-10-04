"use client"
import React from 'react'

function Account() {
return (
<>

                                           
<div className='row justify-content-between'>
    <div className="col-lg-6"> 
        <div className="saddow_box"style={{backgroundColor:"#fff"}}>

            <div className="d-flex justify-content-between align-items-center">
                <h2 className="m-0 p-0 font-18"> <i className="zmdi zmdi-info me-1"></i> <b> Basic Details </b></h2>
                <a href="javascript:void(0);" className="btn btn-sm btn-outline-primary basic_btn clickmode" data-hide=".basic_btn, .basicDetails" data-show=".editBasic"><i className="zmdi zmdi-edit"></i> Edit</a>
            </div>
            <hr/>
            <div className="basicDetails p-4">
                <div className="row font-h4">
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> First Name</h4>
                        <p className="mb-3"> <span className="col-black">Loporem   </span> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Last Name</h4>
                        <p className="mb-3"> <span className="col-black">Dummy </span> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Email Address</h4>
                        <p className="mb-3"> <span className="col-black">emailaddresss@email.com </span> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Password</h4>
                        <p className="mb-3"> <span className="col-black"><b>***********</b> </span> </p>
                    </div>           
                </div>
            </div>
            <div className="editBasic dd_none">
                <div className="row">
                            
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">                                                
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control mb-3" placeholder="Password" />
                           
                        </div>
                    </div>
                    <div className="text-center col-12">
                        <hr/>
                        <button className="btn btn-primary clickmode me-1" data-show=".basic_btn, .basicDetails" data-hide=".editBasic"> <i className="zmdi zmdi-upload"></i> Save </button>
                        <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                    </div>
                </div> 
            </div>
        </div> 
    </div>
    <div className="col-lg-6"> 
        <div className="saddow_box" style={{backgroundColor:"#fff"}}>

            <div className="d-flex justify-content-between  align-items-center">
                <h2 className="m-0 p-0  font-18"> <i className="zmdi zmdi-folder me-1"></i> <b> Preferences </b></h2>
                <a href="javascript:void(0);" className="btn btn-sm btn-outline-primary Preferences_btn clickmode" data-hide=".Preferences_btn, .PreferencesDetails" data-show=".editPreferences"><i className="zmdi zmdi-edit"></i> Edit</a>
            </div>
            <hr/>
            <div className="PreferencesDetails p-4">
                <div className="row font-h4">
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Time Zone</h4>
                        <p className="mb-3"> <span className="col-black">(GMT-12:00) International Date Line West </span> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Time Format</h4>
                        <p className="mb-3"> <span className="col-black">12 hours</span> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Languages</h4>
                        <p className="mb-3"> <span className="col-black">English, Spanish </span> </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="col-grey m-0 p-0"> Loding Screen Display</h4>
                        <p className="mb-3"> <span className="col-black">----</span> </p>
                    </div>           
                </div>
            </div>
            <div className="editPreferences dd_none">
                <div className="row">
                            
                    <div className="col-12 col-md-6 ">
                        <div className="mb-3">
                            <label className="form-label">Time Zone</label>
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
                            <label className="form-label">Time Format</label>
                            <select className="form-select" name="timezone">
                                <option selected> Select Time Format</option>
                                <option value="12 hours">12 hours</option>
                                <option value="24 hours">24 hours</option>                                                    
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Languages</label>
                            <select className="form-select" name="Language">
                                <option selected> Select Language</option>                                                                                                                                                                    
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Loding Screen Display</label>
                            <select className="form-select" name="Language">
                                <option selected> Show Insirational quotes</option>                                                                                                                                                                    
                            </select>
                        </div>                
                    </div>
                    <div className="text-center col-12">
                        <hr/>
                        <button className="btn btn-primary clickmode me-1" data-show=".Preferences_btn, .PreferencesDetails" data-hide=".editPreferences"> <i className="zmdi zmdi-upload"></i> Save </button>
                        <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
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