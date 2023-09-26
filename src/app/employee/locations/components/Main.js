"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import LeftSidebar from '../../components/LeftSidebar';

function Main() {
    const customStyles = {
        borderLeft: '1px solid rgb(221, 221, 221)',
        height: '100vh',
    };



    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-pin me-1"></i>Locations </h2>
                            </div>
                            <div className="pe-2 d-flex">
                                                            
                            </div>
                        </div>
                    </div>
                    {/* <<<<<<<<<<<< */}
                    <div class=" contactlist scroll_bar">
                        <div class="container-fluid">
                            <div class="row clearfix">
                                <div class="col-12 p-0">                        
                                    <div class="d-flex">
                                        <div class="mobile-left">
                                            <a class="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                                <span class="btn-label"><i class="zmdi zmdi-more"></i></span>
                                            </a>
                                        </div>
                                        <div class="inbox left pe-0 me-0 lftfxd" id="email-nav">                                        
                                            <div class="mail-side"> 
                                            <LeftSidebar/>                                       
                                            </div>
                                        </div>                               
                                        
                                        
                                    </div>
                                    <div class="inbox right rgtinbox  htg_auto"> 
                                        <div class="i_action d-flex justify-content-between align-items-center bdrt0 p-1">
                                            <div class="">
                                                <div class="checkbox mb-0">
                                                    <input id="all-l" type="checkbox"/>
                                                    <label for="all-l" class="bold">
                                                            <b> Select All Location</b>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="pagination-email">
                                                <div class="btn-group">                       
                                                    <a href="#" class="btn btn btn-success" data-toggle="modal" data-target="#addeditlocation"><i class="zmdi zmdi-pin"></i> Add Location</a>
                                                                        
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div class="row m-0">
                                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div class="bxsaddow h_4 mt-3">
                                                    <h4>
                                                        <span class="checkbox">
                                                            <input id="l" type="checkbox"/>
                                                            <label for="l">
                                                                    <i class="zmdi zmdi-city"> </i> City centre (Default)
                                                            </label>
                                                        </span>
                                                    
                                                        <span class="bubl-light ml-2">Main</span>
                                                        <a class="btn btn-sm btn-primary hvr" data-toggle="modal" data-target="#addeditlocation">
                                                            <i class="zmdi zmdi-edit"></i> Edit
                                                        </a>
                                                    </h4>
                                                    <div class="p-3 bdr1 h4show">
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Hospital Name</span>
                                                            <span>:</span>
                                                            <span id="lblworkhospital">City centre</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Address</span>
                                                            <span>:</span>
                                                            <span id="lblworkaddress">Birmingham C I B A Building</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Contact No. </span>
                                                            <span>:</span>
                                                            <span id="lblworkpostcode" class="col-red">Not Available</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Email </span>
                                                            <span>:</span>
                                                            <span id="lblworkpostcode" class="col-red">Not Available</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Onsite Parking</span>
                                                            <span>:</span>
                                                            <span id="lblworkpostcode" class="col-green">Available</span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div class="bxsaddow h_4 mt-3">
                                                    <h4>
                                                        <span class="checkbox">
                                                            <input id="q" type="checkbox"/>
                                                            <label for="q">
                                                                    <i class="zmdi zmdi-city"> </i> Delhi City Center
                                                            </label>
                                                        </span>
                                                        <a class="btn btn-sm btn-primary hvr" data-toggle="modal" data-target="#addeditlocation">
                                                            <i class="zmdi zmdi-edit"></i> Edit
                                                        </a>
                                                    </h4>
                                                    <div class="p-3 bdr1 h4show">
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Hospital Name</span>
                                                            <span>:</span>
                                                            <span id="lblworkhospital">City centre</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Address</span>
                                                            <span>:</span>
                                                            <span id="lblworkaddress">C I B A Building, West Midlands</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Contact No. </span>
                                                            <span>:</span>
                                                            <span id="lblworkpostcode" class="">4654564564</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Email </span>
                                                            <span>:</span>
                                                            <span id="lblworkpostcode" class="col-red">Not Available</span>
                                                        </p>
                                                        <p class="mb-1">
                                                            <span class="wd-16px">Onsite Parking</span>
                                                            <span>:</span>
                                                            <span id="lblworkpostcode" class="col-green">Available</span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            
                                        
                                        </div>
                                    </div>              
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <<<<<<<<<< */}
                </div>
            </section>
            

            <div class="modal right-half md-one" id="addeditlocation" tabindex="-1" role="dialog" aria-labelledby="shortModal" aria-hidden="true">
        <div class="modal-dialog ui-draggable ui-draggable-handle" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-pin"></i> Add Edit Location</b>
                    </h4>
                </div>
                <div class="modal-body pr-0 pl-0 pb-0 contbody">  
                    <div class="tab-content">                                            
                        <div role="tabpanel" class="tab-pane in active">                             
                            <div class="pagediv mt-4">
                                <div class="row m-0">                                            
                                    <div class="col-12 col-sm-6">                                          
                                        <h3 class="font-18 mb-3"><i class="zmdi zmdi-city-alt"></i><b> Location Information</b></h3>   
                                        <div class="group_lead">
                                            <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                            <label for="Address2" class="lablefilled"> Location </label>
                                        </div> 
                                        
                                        <div class="row"> 
                                            <div class="col-8 col-sm-8">
                                                <div class="group_lead">
                                                    <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                                    <label for="Address2" class="lablefilled"> Pincode </label>
                                                </div> 
                                            </div> 
                                            <div class="col-4 col-sm-4">                                   
                                                <button class="btn btn-outline-primary btn-block hig50" type="button" data-toggle="modal" data-target="#addunit">Add</button>
                                            </div>
                                        </div>

                                        <div class="group_lead">
                                            <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                            <label for="Address2" class="lablefilled"> Address Line 1 </label>
                                        </div>
                                       
                                        <div class="group_lead">
                                            <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                            <label for="txtcity2" class="lablefilled"> Town / City</label>
                                        </div>
                                        <div class="group_lead">
                                            <input type="text" id="txtstate2" class="input_text bglightblu" required="required"/>
                                            <label for="txtstate2" class="lablefilled"> State</label>
                                        </div>
                                        
                                       
                                        <div class="group_lead">
                                             <select id="txtCountry2" class="custom-select select_f bglightblu " required="required"><option value="">Country</option><option value="86">Afghanistan</option><option value="87">Albania</option><option value="88">Algeria</option><option value="89">American Samoa</option><option value="90">Andorra</option><option value="91">Angola</option><option value="92">Anguilla</option><option value="93">Antarctica</option><option value="94">Antigua and Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="8">Aruba</option><option value="9">Australia</option><option value="4">Austria</option><option value="10">Azerbaijan</option><option value="95">Bahrain</option><option value="12">Bangladesh</option><option value="96">Barbados</option><option value="13">Belarus</option><option value="14">Belgium</option><option value="15">Belize</option><option value="97">Benin</option><option value="16">Bermuda</option><option value="98">Bhutan</option><option value="17">Bolivia</option><option value="18">Bosnia and Herzegovina</option><option value="99">Botswana</option><option value="100">Bouvet Island</option><option value="19">Brazil</option><option value="101">British Indian Ocean Territory</option><option value="102">Brunei</option><option value="20">Bulgaria</option><option value="103">Burkina Faso</option><option value="104">Burundi</option><option value="105">Cambodia</option><option value="106">Cameroon</option><option value="2">Canada</option><option value="107">Cape Verde</option><option value="21">Cayman Islands</option><option value="108">Central African Republic</option><option value="109">Chad</option><option value="22">Chile</option><option value="23">China</option><option value="110">Christmas Island</option><option value="111">Cocos (Keeling) Islands</option><option value="24">Colombia</option><option value="112">Comoros</option><option value="113">Congo (Brazzaville)</option><option value="114">Cook Islands</option><option value="25">Costa Rica</option><option value="26">Croatia</option><option value="27">Cuba</option><option value="28">Cyprus</option><option value="29">Czech Republic</option><option value="30">Denmark</option><option value="116">Djibouti</option><option value="117">Dominica</option><option value="31">Dominican Republic</option><option value="32">Ecuador</option><option value="33">Egypt</option><option value="118">El Salvador</option><option value="119">Equatorial Guinea</option><option value="120">Eritrea</option><option value="121">Estonia</option><option value="122">Ethiopia</option><option value="123">Falkland Islands</option><option value="124">Faroe Islands</option><option value="170">Federated States of Micronesia</option><option value="125">Fiji</option><option value="34">Finland</option><option value="35">France</option><option value="126">French Guiana</option><option value="127">French Polynesia</option><option value="128">French Southern Territories</option><option value="129">Gabon</option><option value="36">Georgia</option><option value="3">Germany</option><option value="131">Ghana</option><option value="37">Gibraltar</option><option value="38">Greece</option><option value="132">Greenland</option><option value="133">Grenada</option><option value="134">Guadeloupe</option><option value="135">Guam</option><option value="39">Guatemala</option><option value="136">Guinea</option><option value="137">Guinea Bissau</option><option value="138">Guyana</option><option value="139">Haiti</option><option value="140">Heard and Mc Donald Islands</option><option value="141">Honduras</option><option value="40">Hong Kong S.A.R.</option><option value="41">Hungary</option><option value="142">Iceland</option><option value="42">India</option><option value="43">Indonesia</option><option value="143">Iran</option><option value="144">Iraq</option><option value="44">Ireland</option><option value="46">Italy</option><option value="115">Ivory Coast</option><option value="47">Jamaica</option><option value="48">Japan</option><option value="49">Jordan</option><option value="50">Kazakhstan</option><option value="145">Kenya</option><option value="146">Kiribati</option><option value="52">Kuwait</option><option value="148">Kyrgyzstan</option><option value="149">Laos</option><option value="150">Latvia</option><option value="151">Lebanon</option><option value="152">Lesotho</option><option value="153">Liberia</option><option value="154">Libya</option><option value="155">Liechtenstein</option><option value="156">Lithuania</option><option value="157">Luxembourg</option><option value="158">Macau S.A.R</option><option value="159">Macedonia</option><option value="160">Madagascar</option><option value="161">Malawi</option><option value="53">Malaysia</option><option value="162">Maldives</option><option value="163">Mali</option><option value="164">Malta</option><option value="165">Marshall Islands</option><option value="166">Martinique</option><option value="167">Mauritania</option><option value="168">Mauritius</option><option value="169">Mayotte</option><option value="54">Mexico</option><option value="171">Moldova</option><option value="172">Monaco</option><option value="173">Mongolia</option><option value="174">Montenegro</option><option value="175">Montserrat</option><option value="176">Morocco</option><option value="177">Mozambique</option><option value="178">Myanmar</option><option value="179">Namibia</option><option value="180">Nauru</option><option value="181">Nepal</option><option value="55">Netherlands</option><option value="182">Netherlands Antilles</option><option value="183">New Caledonia</option><option value="56">New Zealand</option><option value="184">Nicaragua</option><option value="185">Niger</option><option value="186">Nigeria</option><option value="187">Niue</option><option value="188">Norfolk Island</option><option value="51">North Korea</option><option value="189">Northern Mariana Islands</option><option value="57">Norway</option><option value="190">Oman</option><option value="58">Pakistan</option><option value="191">Palau</option><option value="192">Panama</option><option value="193">Papua New Guinea</option><option value="59">Paraguay</option><option value="60">Peru</option><option value="61">Philippines</option><option value="194">Pitcairn</option><option value="62">Poland</option><option value="63">Portugal</option><option value="64">Puerto Rico</option><option value="65">Qatar</option><option value="195">Reunion</option><option value="66">Romania</option><option value="67">Russia</option><option value="196">Rwanda</option><option value="197">Saint Kitts and Nevis</option><option value="198">Saint Lucia</option><option value="199">Saint Vincent and the Grenadines</option><option value="200">Samoa</option><option value="201">San Marino</option><option value="202">Sao Tome and Principe</option><option value="68">Saudi Arabia</option><option value="203">Senegal</option><option value="85">Serbia</option><option value="204">Seychelles</option><option value="205">Sierra Leone</option><option value="69">Singapore</option><option value="70">Slovakia</option><option value="71">Slovenia</option><option value="206">Solomon Islands</option><option value="207">Somalia</option><option value="72">South Africa</option><option value="208">South Georgia and the Islands</option><option value="147">South Korea</option><option value="73">Spain</option><option value="209">Sri Lanka</option><option value="210">St. Helena</option><option value="211">St. Pierre and Miquelon</option><option value="212">Sudan</option><option value="213">Suriname</option><option value="214">Svalbard and Jan Mayen Islands</option><option value="215">Swaziland</option><option value="74">Sweden</option><option value="5">Switzerland</option><option value="216">Syria</option><option value="75">Taiwan</option><option value="217">Tajikistan</option><option value="218">Tanzania</option><option value="76">Thailand</option><option value="11">The Bahamas</option><option value="130">The Gambia</option><option value="219">Togo</option><option value="220">Tokelau</option><option value="221">Tonga</option><option value="222">Trinidad and Tobago</option><option value="223">Tunisia</option><option value="77">Turkey</option><option value="224">Turkmenistan</option><option value="225">Turks and Caicos Islands</option><option value="226">Tuvalu</option><option value="227">Uganda</option><option value="78">Ukraine</option><option value="79">United Arab Emirates</option><option value="80">United Kingdom</option><option value="81">United States minor outlying islands</option><option value="1">United States of America</option><option value="232">United States Virgin Islands</option><option value="82">Uruguay</option><option value="83">Uzbekistan</option><option value="228">Vanuatu</option><option value="229">Vatican (Holy Sea)</option><option value="84">Venezuela</option><option value="230">Vietnam</option><option value="231">Virgin Islands (British)</option><option value="233">Wallis and Futuna Islands</option><option value="234">Western Sahara</option><option value="235">Yemen</option><option value="236">Zambia</option><option value="237">Zimbabwe</option>
                                            </select>
                                        </div>                                                        
                                        
                                    </div> 
                                    <div class="col-12 col-sm-6">   
                                        <h3 class="font-18 mb-3"><i class="zmdi zmdi-info"></i><b> Primary Contacts </b></h3>
                                    
                                        
                                        <div class="group_lead">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled"> Contact Person</label>                                              
                                        </div>                                         
                                        <div class="group_lead">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled"> Degination</label>                                              
                                        </div>  
                                        <div class="group_lead">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled"> Email</label>                                              
                                        </div>
                                        <div class="group_lead">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled"> Mobile</label>                                               
                                        </div>
                                        <div class="group_lead">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled"> Phone</label>                                               
                                        </div>
                                        
                                        <div class="group_lead">
                                            <input type="text" id="" class="input_text" required="required"/>
                                            <label for="" class="lablefilled"> Fax</label>                                                          
                                        </div>
                                        
                                    </div>
                                      
                                    <div class="col-md-4 col-lg-2">
                                        <div class="form-group">
                                            <label>Billing Address
                                                <span> *</span>
                                            </label>
                                            <br/>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm">
                                                    Main
                                                </button>
                                                <button type="button" class="btn btn-outline-primary  btn-sm">
                                                    Self
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-2">
                                        <div class="form-group">
                                            <label>Onsite Parking
                                                <span> *</span>
                                            </label>
                                            <br/>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm">
                                                    Available
                                                </button>
                                                <button type="button" class="btn btn-outline-primary btn-sm">
                                                    NA
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-2">
                                        <div class="form-group">
                                            <label>IT System
                                                <span> *</span>
                                            </label><br/>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm">
                                                    Required
                                                </button>
                                                <button type="button" class="btn btn-outline-primary btn-sm">
                                                    Not
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                                                     
                                </div> 
                            </div>                                                                                                                                                                        
                        </div>
                    </div>                   
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                                <button class="btn btn-primary btn-lg clickmode btn-lg" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger btn-lg" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        </>
    )
}

export default Main
