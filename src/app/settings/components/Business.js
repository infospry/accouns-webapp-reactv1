"use client"
import React from 'react'


function Business({ businessData=[] }) {
    console.log(businessData);
    const businessAddress=[];
    const  businessPreferenceData=[];
//  alert( JSON.stringify(businessData));
  return (
    <>
        <div className="bussinessDetails dd_none"> 
       
            <div className='row justify-content-start'>
                <div className="col-lg-6">
                    <div className="saddow_box mb-3">
                        <h2 className="font-bold  font-18"> Business Information</h2>
                        <hr/>
                        <div className="row">                    
                        <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Organization Name<span>*</span></label>
                                    <input type="text" id="org_name" className="form-control" placeholder="Enter organization name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Company registration Number/Id</label>
                                    <input type="text" id="company_id" className="form-control" placeholder="Enter Company registration Number/Id" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">                                                
                                    <label  className="form-label">Industry<span>*</span></label>
                                    <select id="ddl_industry" className="form-select" required="required" autocomplete="off">                                 <option value="0">Select Industry</option>                                                                    <option value="1">Aerospace</option>                                                                  <option value="2">Agriculture</option>                                                                  <option value="3">Chemical</option>                                                                  <option value="4">Computer</option>                                                                  <option value="5">Construction</option>                                                                  <option value="6">Defense</option>                                                                  <option value="7">Education</option>                                                                  <option value="8">Energy</option>                                                                  <option value="9">Fishing</option>                                                                  <option value="10">Pharmaceutical</option>                                                                  <option value="11">Timber</option>                                                                 </select>           
                                </div>
                            </div>  
                            <div className="col-12 col-md-6">
                                <div className="mb-3">                                                
                                    <label for="business_email" className="form-label">Organization Email address<span>*</span></label>
                                    <input type="email" className="form-control mb-3" id="business_email" placeholder="name@example.com"/>
                                    
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Organization Phone Number</label>
                                    <input type="text"id="business_phone" className="form-control mb-3" placeholder="Enter Phone Number" />
                                
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">                                                
                                    <label  className="form-label">Website</label>
                                    <input type="text"id="web_url" className="form-control mb-3" placeholder="Enter website" />
                                </div>
                            </div> 
                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">Company Description</label>
                                    <textarea id="desc" className="form-control"placeholder="Enter company description" ></textarea>
                                </div>
                            </div>
                            
                        </div>
                    </div> 
                    <div className="saddow_box mb-3">
                        <div className="row">
                        <div className="col-12"> <h2 className="font-bold  font-18"> Address Information </h2>
                        <hr/>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Address Line 1<span>*</span></label>
                                <input type="text" className="form-control mb-3" placeholder="Enter address line 1" />
                                
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Address Line 2</label>
                                <input type="text" className="form-control mb-3" placeholder="Enter address line 2" />
                                
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">State<span>*</span></label>
                                <input type="text" className="form-control mb-3" placeholder="Enter state" />
                                
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">City<span>*</span></label>
                                <input type="text" className="form-control mb-3" placeholder="Enter city" />
                                
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Country<span>*</span></label>
                                <select name="country" className="form-select"  id="country">
                                    <option value="0" label="Select a country ... " selected="selected">Select a country ... </option>
                                    <optgroup id="country-optgroup-Africa" label="Africa">
                                        <option value="DZ" label="Algeria">Algeria</option>
                                        <option value="AO" label="Angola">Angola</option>
                                        <option value="BJ" label="Benin">Benin</option>
                                        <option value="BW" label="Botswana">Botswana</option>
                                        <option value="BF" label="Burkina Faso">Burkina Faso</option>
                                        <option value="BI" label="Burundi">Burundi</option>
                                        <option value="CM" label="Cameroon">Cameroon</option>
                                        <option value="CV" label="Cape Verde">Cape Verde</option>
                                        <option value="CF" label="Central African Republic">Central African Republic</option>
                                        <option value="TD" label="Chad">Chad</option>
                                        <option value="KM" label="Comoros">Comoros</option>
                                        <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
                                        <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
                                        <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
                                        <option value="DJ" label="Djibouti">Djibouti</option>
                                        <option value="EG" label="Egypt">Egypt</option>
                                        <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="ER" label="Eritrea">Eritrea</option>
                                        <option value="ET" label="Ethiopia">Ethiopia</option>
                                        <option value="GA" label="Gabon">Gabon</option>
                                        <option value="GM" label="Gambia">Gambia</option>
                                        <option value="GH" label="Ghana">Ghana</option>
                                        <option value="GN" label="Guinea">Guinea</option>
                                        <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="KE" label="Kenya">Kenya</option>
                                        <option value="LS" label="Lesotho">Lesotho</option>
                                        <option value="LR" label="Liberia">Liberia</option>
                                        <option value="LY" label="Libya">Libya</option>
                                        <option value="MG" label="Madagascar">Madagascar</option>
                                        <option value="MW" label="Malawi">Malawi</option>
                                        <option value="ML" label="Mali">Mali</option>
                                        <option value="MR" label="Mauritania">Mauritania</option>
                                        <option value="MU" label="Mauritius">Mauritius</option>
                                        <option value="YT" label="Mayotte">Mayotte</option>
                                        <option value="MA" label="Morocco">Morocco</option>
                                        <option value="MZ" label="Mozambique">Mozambique</option>
                                        <option value="NA" label="Namibia">Namibia</option>
                                        <option value="NE" label="Niger">Niger</option>
                                        <option value="NG" label="Nigeria">Nigeria</option>
                                        <option value="RW" label="Rwanda">Rwanda</option>
                                        <option value="RE" label="Réunion">Réunion</option>
                                        <option value="SH" label="Saint Helena">Saint Helena</option>
                                        <option value="SN" label="Senegal">Senegal</option>
                                        <option value="SC" label="Seychelles">Seychelles</option>
                                        <option value="SL" label="Sierra Leone">Sierra Leone</option>
                                        <option value="SO" label="Somalia">Somalia</option>
                                        <option value="ZA" label="South Africa">South Africa</option>
                                        <option value="SD" label="Sudan">Sudan</option>
                                        <option value="SZ" label="Swaziland">Swaziland</option>
                                        <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                        <option value="TZ" label="Tanzania">Tanzania</option>
                                        <option value="TG" label="Togo">Togo</option>
                                        <option value="TN" label="Tunisia">Tunisia</option>
                                        <option value="UG" label="Uganda">Uganda</option>
                                        <option value="EH" label="Western Sahara">Western Sahara</option>
                                        <option value="ZM" label="Zambia">Zambia</option>
                                        <option value="ZW" label="Zimbabwe">Zimbabwe</option>
                                    </optgroup>
                                    <optgroup id="country-optgroup-Americas" label="Americas">
                                        <option value="AI" label="Anguilla">Anguilla</option>
                                        <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="AR" label="Argentina">Argentina</option>
                                        <option value="AW" label="Aruba">Aruba</option>
                                        <option value="BS" label="Bahamas">Bahamas</option>
                                        <option value="BB" label="Barbados">Barbados</option>
                                        <option value="BZ" label="Belize">Belize</option>
                                        <option value="BM" label="Bermuda">Bermuda</option>
                                        <option value="BO" label="Bolivia">Bolivia</option>
                                        <option value="BR" label="Brazil">Brazil</option>
                                        <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
                                        <option value="CA" label="Canada">Canada</option>
                                        <option value="KY" label="Cayman Islands">Cayman Islands</option>
                                        <option value="CL" label="Chile">Chile</option>
                                        <option value="CO" label="Colombia">Colombia</option>
                                        <option value="CR" label="Costa Rica">Costa Rica</option>
                                        <option value="CU" label="Cuba">Cuba</option>
                                        <option value="DM" label="Dominica">Dominica</option>
                                        <option value="DO" label="Dominican Republic">Dominican Republic</option>
                                        <option value="EC" label="Ecuador">Ecuador</option>
                                        <option value="SV" label="El Salvador">El Salvador</option>
                                        <option value="FK" label="Falkland Islands">Falkland Islands</option>
                                        <option value="GF" label="French Guiana">French Guiana</option>
                                        <option value="GL" label="Greenland">Greenland</option>
                                        <option value="GD" label="Grenada">Grenada</option>
                                        <option value="GP" label="Guadeloupe">Guadeloupe</option>
                                        <option value="GT" label="Guatemala">Guatemala</option>
                                        <option value="GY" label="Guyana">Guyana</option>
                                        <option value="HT" label="Haiti">Haiti</option>
                                        <option value="HN" label="Honduras">Honduras</option>
                                        <option value="JM" label="Jamaica">Jamaica</option>
                                        <option value="MQ" label="Martinique">Martinique</option>
                                        <option value="MX" label="Mexico">Mexico</option>
                                        <option value="MS" label="Montserrat">Montserrat</option>
                                        <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>
                                        <option value="NI" label="Nicaragua">Nicaragua</option>
                                        <option value="PA" label="Panama">Panama</option>
                                        <option value="PY" label="Paraguay">Paraguay</option>
                                        <option value="PE" label="Peru">Peru</option>
                                        <option value="PR" label="Puerto Rico">Puerto Rico</option>
                                        <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
                                        <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="LC" label="Saint Lucia">Saint Lucia</option>
                                        <option value="MF" label="Saint Martin">Saint Martin</option>
                                        <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                        <option value="SR" label="Suriname">Suriname</option>
                                        <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                        <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                        <option value="US" label="United States">United States</option>
                                        <option value="UY" label="Uruguay">Uruguay</option>
                                        <option value="VE" label="Venezuela">Venezuela</option>
                                    </optgroup>
                                    <optgroup id="country-optgroup-Asia" label="Asia">
                                        <option value="AF" label="Afghanistan">Afghanistan</option>
                                        <option value="AM" label="Armenia">Armenia</option>
                                        <option value="AZ" label="Azerbaijan">Azerbaijan</option>
                                        <option value="BH" label="Bahrain">Bahrain</option>
                                        <option value="BD" label="Bangladesh">Bangladesh</option>
                                        <option value="BT" label="Bhutan">Bhutan</option>
                                        <option value="BN" label="Brunei">Brunei</option>
                                        <option value="KH" label="Cambodia">Cambodia</option>
                                        <option value="CN" label="China">China</option>
                                        <option value="GE" label="Georgia">Georgia</option>
                                        <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
                                        <option value="IN" label="India">India</option>
                                        <option value="ID" label="Indonesia">Indonesia</option>
                                        <option value="IR" label="Iran">Iran</option>
                                        <option value="IQ" label="Iraq">Iraq</option>
                                        <option value="IL" label="Israel">Israel</option>
                                        <option value="JP" label="Japan">Japan</option>
                                        <option value="JO" label="Jordan">Jordan</option>
                                        <option value="KZ" label="Kazakhstan">Kazakhstan</option>
                                        <option value="KW" label="Kuwait">Kuwait</option>
                                        <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="LA" label="Laos">Laos</option>
                                        <option value="LB" label="Lebanon">Lebanon</option>
                                        <option value="MO" label="Macau SAR China">Macau SAR China</option>
                                        <option value="MY" label="Malaysia">Malaysia</option>
                                        <option value="MV" label="Maldives">Maldives</option>
                                        <option value="MN" label="Mongolia">Mongolia</option>
                                        <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
                                        <option value="NP" label="Nepal">Nepal</option>
                                        <option value="NT" label="Neutral Zone">Neutral Zone</option>
                                        <option value="KP" label="North Korea">North Korea</option>
                                        <option value="OM" label="Oman">Oman</option>
                                        <option value="PK" label="Pakistan">Pakistan</option>
                                        <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
                                        <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
                                        <option value="PH" label="Philippines">Philippines</option>
                                        <option value="QA" label="Qatar">Qatar</option>
                                        <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
                                        <option value="SG" label="Singapore">Singapore</option>
                                        <option value="KR" label="South Korea">South Korea</option>
                                        <option value="LK" label="Sri Lanka">Sri Lanka</option>
                                        <option value="SY" label="Syria">Syria</option>
                                        <option value="TW" label="Taiwan">Taiwan</option>
                                        <option value="TJ" label="Tajikistan">Tajikistan</option>
                                        <option value="TH" label="Thailand">Thailand</option>
                                        <option value="TL" label="Timor-Leste">Timor-Leste</option>
                                        <option value="TR" label="Turkey">Turkey</option>
                                        <option value="TM" label="Turkmenistan">Turkmenistan</option>
                                        <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
                                        <option value="UZ" label="Uzbekistan">Uzbekistan</option>
                                        <option value="VN" label="Vietnam">Vietnam</option>
                                        <option value="YE" label="Yemen">Yemen</option>
                                    </optgroup>
                                    <optgroup id="country-optgroup-Europe" label="Europe">
                                        <option value="AL" label="Albania">Albania</option>
                                        <option value="AD" label="Andorra">Andorra</option>
                                        <option value="AT" label="Austria">Austria</option>
                                        <option value="BY" label="Belarus">Belarus</option>
                                        <option value="BE" label="Belgium">Belgium</option>
                                        <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="BG" label="Bulgaria">Bulgaria</option>
                                        <option value="HR" label="Croatia">Croatia</option>
                                        <option value="CY" label="Cyprus">Cyprus</option>
                                        <option value="CZ" label="Czech Republic">Czech Republic</option>
                                        <option value="DK" label="Denmark">Denmark</option>
                                        <option value="DD" label="East Germany">East Germany</option>
                                        <option value="EE" label="Estonia">Estonia</option>
                                        <option value="FO" label="Faroe Islands">Faroe Islands</option>
                                        <option value="FI" label="Finland">Finland</option>
                                        <option value="FR" label="France">France</option>
                                        <option value="DE" label="Germany">Germany</option>
                                        <option value="GI" label="Gibraltar">Gibraltar</option>
                                        <option value="GR" label="Greece">Greece</option>
                                        <option value="GG" label="Guernsey">Guernsey</option>
                                        <option value="HU" label="Hungary">Hungary</option>
                                        <option value="IS" label="Iceland">Iceland</option>
                                        <option value="IE" label="Ireland">Ireland</option>
                                        <option value="IM" label="Isle of Man">Isle of Man</option>
                                        <option value="IT" label="Italy">Italy</option>
                                        <option value="JE" label="Jersey">Jersey</option>
                                        <option value="LV" label="Latvia">Latvia</option>
                                        <option value="LI" label="Liechtenstein">Liechtenstein</option>
                                        <option value="LT" label="Lithuania">Lithuania</option>
                                        <option value="LU" label="Luxembourg">Luxembourg</option>
                                        <option value="MK" label="Macedonia">Macedonia</option>
                                        <option value="MT" label="Malta">Malta</option>
                                        <option value="FX" label="Metropolitan France">Metropolitan France</option>
                                        <option value="MD" label="Moldova">Moldova</option>
                                        <option value="MC" label="Monaco">Monaco</option>
                                        <option value="ME" label="Montenegro">Montenegro</option>
                                        <option value="NL" label="Netherlands">Netherlands</option>
                                        <option value="NO" label="Norway">Norway</option>
                                        <option value="PL" label="Poland">Poland</option>
                                        <option value="PT" label="Portugal">Portugal</option>
                                        <option value="RO" label="Romania">Romania</option>
                                        <option value="RU" label="Russia">Russia</option>
                                        <option value="SM" label="San Marino">San Marino</option>
                                        <option value="RS" label="Serbia">Serbia</option>
                                        <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>
                                        <option value="SK" label="Slovakia">Slovakia</option>
                                        <option value="SI" label="Slovenia">Slovenia</option>
                                        <option value="ES" label="Spain">Spain</option>
                                        <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option value="SE" label="Sweden">Sweden</option>
                                        <option value="CH" label="Switzerland">Switzerland</option>
                                        <option value="UA" label="Ukraine">Ukraine</option>
                                        <option value="SU" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
                                        <option value="GB" label="United Kingdom">United Kingdom</option>
                                        <option value="VA" label="Vatican City">Vatican City</option>
                                        <option value="AX" label="Åland Islands">Åland Islands</option>
                                    </optgroup>
                                    <optgroup id="country-optgroup-Oceania" label="Oceania">
                                        <option value="AS" label="American Samoa">American Samoa</option>
                                        <option value="AQ" label="Antarctica">Antarctica</option>
                                        <option value="AU" label="Australia">Australia</option>
                                        <option value="BV" label="Bouvet Island">Bouvet Island</option>
                                        <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="CX" label="Christmas Island">Christmas Island</option>
                                        <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
                                        <option value="CK" label="Cook Islands">Cook Islands</option>
                                        <option value="FJ" label="Fiji">Fiji</option>
                                        <option value="PF" label="French Polynesia">French Polynesia</option>
                                        <option value="TF" label="French Southern Territories">French Southern Territories</option>
                                        <option value="GU" label="Guam">Guam</option>
                                        <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                        <option value="KI" label="Kiribati">Kiribati</option>
                                        <option value="MH" label="Marshall Islands">Marshall Islands</option>
                                        <option value="FM" label="Micronesia">Micronesia</option>
                                        <option value="NR" label="Nauru">Nauru</option>
                                        <option value="NC" label="New Caledonia">New Caledonia</option>
                                        <option value="NZ" label="New Zealand">New Zealand</option>
                                        <option value="NU" label="Niue">Niue</option>
                                        <option value="NF" label="Norfolk Island">Norfolk Island</option>
                                        <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="PW" label="Palau">Palau</option>
                                        <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
                                        <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>
                                        <option value="WS" label="Samoa">Samoa</option>
                                        <option value="SB" label="Solomon Islands">Solomon Islands</option>
                                        <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                        <option value="TK" label="Tokelau">Tokelau</option>
                                        <option value="TO" label="Tonga">Tonga</option>
                                        <option value="TV" label="Tuvalu">Tuvalu</option>
                                        <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
                                        <option value="VU" label="Vanuatu">Vanuatu</option>
                                        <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
                                    </optgroup>
                                </select>

                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Postcode<span>*</span></label>
                                <input type="text" className="form-control mb-3" placeholder="Enter postcode" />
                                
                            </div>
                        </div>
                        
                        </div>
                    </div>                   
                </div>
                <div className="col-lg-6 saddow_box">
                    <div className="">
                        <h2 className="font-bold font-18"> Preferences</h2>
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

export default Business
