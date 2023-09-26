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
                                <h2 className="font-bold mb-0"><i className="zmdi zmdi-account-alt me-1"></i>My Profile </h2>
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
                                <div class="inbox right rgtinbox sadow htg_auto"> 
                                    <div class="col-md-12 col-sm-12 p-0">
                                        <div class="pro">                                        
                                            <div class="dis-flex avt_bg mb-0">
                                                <div class="float-left img-area ">                                              
                                                    <img src="images/download.jpg" alt="" class="img-responsive rounded-circle img pict me-2"/>
                                                </div>
                                                <div class="float-left cont-area ms-2">
                                                    <div class="">
                                                        <p class="mb-2">
                                                            <span class="wd-16px"><i class="zmdi zmdi-account me-1"></i>Name</span>
                                                            <span>:</span>
                                                            <span id="" class="font-16 col-blue"><b>Nicole Pearson</b> [<b class="col-green font-13 ms-1">Active</b>]</span>
                                                        </p>                                                                              
                                                        <p class="mb-2">
                                                            <span class="wd-16px"><i class="zmdi zmdi-accounts me-1"></i> Designations  </span>
                                                            <span>:</span>
                                                            <span id="">Director</span>
                                                        </p>                
                                                        <p class="mb-2">
                                                            <span class="wd-16px"><i class="zmdi zmdi-pin me-1"></i>Location </span>
                                                            <span>:</span>
                                                            <span>California</span>
                                                        </p>
                                                        <p class="mb-2">
                                                            <span class="wd-16px"><i class="zmdi zmdi-calendar me-1"></i> A/c Create </span>
                                                            <span>:</span>
                                                            <span> 9/21/2018 </span>
                                                        </p>                                                       
                                                    </div>                      
                                                </div>
                                                <div class="float-right cont-area"> 
                                                    <p class="mb-2">
                                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary hover edt_pro1 float-right clickmode" data-hide=".pro" data-show=".show_pro">
                                                            <i class="zmdi zmdi-edit"></i> Edit
                                                        </a> 
                                                    </p>
                                                    <p class="mb-2">
                                                        <span class="wd-16px w-70px"><i class="zmdi zmdi-smartphone-android me-1"></i> Mobile</span>   <span>:</span>                                  
                                                        <span id="">  7123584758  <small class="col-green"> <i class="zmdi zmdi-check-all"> </i> Verified</small></span> 
                                                    </p>
                                                    <p class="mb-2">
                                                        <span class="wd-16px w-70px"><i class="zmdi zmdi-phone me-1"></i> Phone</span>   <span>:</span>                                  
                                                        <span id="">  73737  <small class="col-green"> <i class="zmdi zmdi-check-all"> </i> Verified</small></span> 
                                                    </p>
                                                    <p class="mb-2 mt-1">
                                                        <span class="wd-16px w-70px"><i class="zmdi zmdi-email me-1"></i> Email </span> <span>:</span>
                                                        <span id="">daniel.cook@gmail.com <small class="col-red"> <i class="zmdi zmdi-alert-triangle"> </i> Unerified</small></span>                                                                                       
                                                    </p>
                                                    <p class="mb-2">
                                                        <span class="wd-16px"><i class="zmdi zmdi-sign-in me-1"></i>Last Login </span>
                                                        <span>:</span>
                                                        <span class="col-grey">6/4/2019 12:59:43 PM</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="show_pro ddnone">
                                            <div class="bxsaddow h_4 mb-1">
                                                <h4>
                                                    <i class="zmdi zmdi-account"> </i> <b> Besic Info </b>                                                                                                                                                                        
                                                </h4>
                                                <div class="p-3 pe-4 ps-4 bdr1 h4show">                  
                                                    <div class="row">
                                                        <div class="col-md-4 col-lg-4 itempro text-center pt-3 mb-3 bdrrgtt">
                                                            <div class="form-group mb-1">
                                                                <div class="avatar-upload">
                                                                    <div class="avatar-edit">
                                                                        <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" disabled="disabled"/>                                                           
                                                                    </div>
                                                                    <div class="avatar-preview">
                                                                        <div id="imagePreview"style={{background:"url(images/user.png)"}}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group mb-2">
                                                                <a class="btn btn-primary btn-sm"><i class="zmdi zmdi-edit"></i></a>
                                                                <a class="btn btn-danger btn-sm"><i class="zmdi zmdi-delete"></i></a>
                                                            </div>
                                                        </div>                                                            
                                                        <div class="col-md-8 mt-3">
                                                            <div class="row">
                                                                
                                                                <div class="col-md-6 col-6 col-sm-6">                                                                        
                                                                    <div class="group_lead">
                                                                        <input type="text" id="" class="input_text" required="required"/>
                                                                        <label for="" class="lablefilled">Frist Name</label>
                                                                                                                
                                                                    </div> 
                                                                </div>
                                                                <div class="col-sm-6 col-md-6 col-6 ps-0">                                            
                                                                    <div class="group_lead">
                                                                        <input type="text" id="" class="input_text" required="required"/>
                                                                        <label for="" class="lablefilled">Last Name</label>
                                                                                                                
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-6 col-sm-6">                                                                        
                                                                    <div class="group_lead">
                                                                        <input type="text" id="" class="input_text" required="required"/>
                                                                        <label for="" class="lablefilled">Employee Id</label>
                                                                                                                
                                                                    </div> 
                                                                </div>
                                                                <div class="col-sm-6 col-md-6 col-6 ps-0">                                            
                                                                    <div class="group_lead">
                                                                        <input type="text" id="" class="input_text" required="required"/>
                                                                        <label for="" class="lablefilled">Designations</label>                                                                                                                    
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                        </div> 
                                                        <div class="col-12 col-sm-6 col-xl-4">                                            
                                                            <div class="group_lead">
                                                                <input type="text" id="Email" class="input_text" required="required"/>
                                                                <label for="Email" class="lablefilled"> Email </label>
                                                                                            
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-xl-4">                                           
                                                            <div class="group_lead">
                                                                <input type="text" id="Phone" class="input_text" required="required"/>
                                                                <label for="Phone" class="lablefilled"> Phone </label>                                                                                                    
                                                            </div>
                                                        </div> 
                                                        <div class="col-12 col-sm-6 col-xl-4">                                          
                                                            <div class="group_lead">
                                                                <input type="text" id="Mobile" class="input_text" required="required"/>
                                                                <label for="Mobile" class="lablefilled"> Mobile </label>                                                                                                        
                                                            </div> 
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-xl-4">                                           
                                                            <div class="group_lead">
                                                                <input type="text" id="" class="input_text" required="required"/>
                                                                <label for="" class="lablefilled">Location</label>                                                                                                            
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-xl-4">                                                            
                                                            <div class="group_lead">
                                                                <input type="text" id="" class="input_text" required="required"/>
                                                                <label for="" class="lablefilled"> Account Create Date </label>                                                                                                        
                                                            </div>                                                                
                                                        </div>
                                                        <div class="col-12 col-sm-6 col-xl-4">                                           
                                                            <div class="group_lead">
                                                                <input type="text" id="WebsiteLink" class="input_text" required="required"/>
                                                                <label for="WebsiteLink" class="lablefilled"> Website Link </label>                                                                                                            
                                                            </div>     
                                                        </div> 
                                                        <div class="col-md-12 col-12 col-sm-12 mb-3 mt-3">
                                                            <div class="form-check form-check-inline me-3">
                                                                <input type="radio" class="form-check-input" id="customRadio" name="example" value="customEx"/>
                                                                <label class="form-check-label" for="customRadio"><b>Active</b>    </label>
                                                            </div>
                                                            <div class="form-check form-check-inline ms-2">
                                                                <input type="radio" class="form-check-input" id="customRadio2" name="example" value="customEx"/>
                                                                <label class="form-check-label" for="customRadio2"><b>Inactive</b></label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12"> 
                                                            <hr/>                         
                                                            <div class="text-center">
                                                                <button class="btn btn-primary btn-lg clickmode btn-lg" data-show=".pro" data-hide=".show_pro" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                                                <button class="btn btn-danger clickmode btn-lg" data-show=".pro" data-hide=".show_pro" type="button" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                                                            </div>
                                                        </div>                                                         
                                                    </div>
                                                </div>
                                            </div>
                                        </div>        





                                        <div class="bxsaddow h_4 mb-1">
                                            <h4>
                                                <i class="zmdi zmdi-account"> </i> <b> Personal Statement </b>   
                                                <a href="javascript:void(0);" class="btn btn-sm btn-primary hvr clickmode" data-hide=".pstatement,.hvr" data-show=".pstatement_edit">
                                                    <i class="zmdi zmdi-edit"></i> Edit
                                                </a>                                                                                                                         
                                            </h4>
                                            <div class="p-3 pe-4 ps-4 bdr1 h4show">  
                                                <div class="pstatement">                                                    
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                                    survived not only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s with the release
                                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                                <div class="pstatement_edit ddnone"> 
                                                    <div class="row justify-content-center mt-4 mb-3">
                                                        <div class="col-lg-8">
                                                            <div class="group_lead">
                                                                <textarea required="required" class="input_text" id="Description"></textarea>
                                                                <label for="Description" class="lablefilled">Write Statement</label>                                           
                                                            </div>                                                                                  
                                                            <div class="text-center">
                                                                <button class="btn btn-primary btn-lg clickmode btn-lg" data-show=".pstatement,.hvr" data-hide=".pstatement_edit" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                                                <button class="btn btn-danger clickmode btn-lg" data-show=".pstatement,.hvr" data-hide=".pstatement_edit" type="button" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>    
                                            </div>
                                        </div>
                                        
                                        <div class="bxsaddow h_4 mb-0">
                                            <h4>
                                                <i class="zmdi zmdi-share"> </i> Social Profiles
                                                <a href="javascript:void(0);" class="btn btn-sm btn-primary hover  add-row">
                                                    <i class="zmdi zmdi-plus"></i> Add
                                                </a>
                                            </h4>
                                            <div class="p-3 bdr1 h4show">
                                                <div class="table-responsive clearfix">
                                                    <table class="table table-bordered" id="editableTable">
                                                        <thead>
                                                          <tr>
                                                            <th style={{width:"28px"}}>SN.</th>
                                                            <th>Profile Type</th>
                                                            <th>Profile link</th>
                                                            <th>--</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr data-id="1">
                                                            <td data-field="name" style={{width:"28px"}}>1</td>
                                                            <td data-field="name">Facebook</td>
                                                            <td data-field="birthday"> https://www.facebook.com/</td>                                                           
                                                            <td>
                                                              <a href="javascript:void(0);" class="btn btn-sm btn-outline-primary edit" title="Edit">
                                                                <i class="zmdi zmdi-edit"></i>
                                                              </a>
                                                              
                                                              <a href="javascript:void(0);" class="btn btn-sm btn-outline-danger edit" title="Delete">
                                                                <i class="zmdi zmdi-delete"></i>
                                                              </a>
                                                            </td>
                                                          </tr>
                                                       
                                                        </tbody>
                                                      </table>
                                                   
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="bxsaddow mb-0 h_4">
                                                <h4>
                                                    <i class="zmdi zmdi-city"> </i> <b>Work Address</b>                                                                                      
                                                </h4>
                                                <div class="p-3 pe-4 ps-4 bdr1 h4show">                                                   
                                                        <div class="row">
                                                            <div class="bxsaddow col-md-6 col-lg-6 col-xl-4 mb-2 ps-2 pe-2 h-4">
                                                                <h4>
                                                                    <i class="zmdi zmdi-city"> </i> City centre<span class="bbl-light ms-1">Main</span>                                                                            
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary hvr  clickmode" data-hide=".workshow,.hvr" data-show=".work_edit">
                                                                        <i class="zmdi zmdi-edit"></i> Edit
                                                                    </a>
                                                                </h4>
                                                                <div class="p-3 bdr1 h4show">
                                                                    <div class="workshow">
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
                                                                    <div class="work_edit ddnone">
                                                                        <div class="row">
                                                                            <div class="col-12 col-sm-12"> 
                                                                                
                                                                                <div class="group_lead">
                                                                                    <input type="text" id="" class="input_text" required="required"/>
                                                                                    <label for="" class="lablefilled">  Name</label>                                                                                           
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
                                                                                    <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                                                                    <label for="Address2" class="lablefilled"> Address </label>
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
                                                                                    <input type="text" id="txtzip2" class="input_text bglightblu" required="required"/>
                                                                                    <label for="txtzip2" class="lablefilled"> Zip Code</label>
                                                                                </div>
                                                                                <div class="group_lead">
                                                                                     <select id="txtCountry2" class="custom-select select_f bglightblu " required="required"><option value="">Country</option><option value="86">Afghanistan</option><option value="87">Albania</option><option value="88">Algeria</option><option value="89">American Samoa</option><option value="90">Andorra</option><option value="91">Angola</option><option value="92">Anguilla</option><option value="93">Antarctica</option><option value="94">Antigua and Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="8">Aruba</option><option value="9">Australia</option><option value="4">Austria</option><option value="10">Azerbaijan</option><option value="95">Bahrain</option><option value="12">Bangladesh</option><option value="96">Barbados</option><option value="13">Belarus</option><option value="14">Belgium</option><option value="15">Belize</option><option value="97">Benin</option><option value="16">Bermuda</option><option value="98">Bhutan</option><option value="17">Bolivia</option><option value="18">Bosnia and Herzegovina</option><option value="99">Botswana</option><option value="100">Bouvet Island</option><option value="19">Brazil</option><option value="101">British Indian Ocean Territory</option><option value="102">Brunei</option><option value="20">Bulgaria</option><option value="103">Burkina Faso</option><option value="104">Burundi</option><option value="105">Cambodia</option><option value="106">Cameroon</option><option value="2">Canada</option><option value="107">Cape Verde</option><option value="21">Cayman Islands</option><option value="108">Central African Republic</option><option value="109">Chad</option><option value="22">Chile</option><option value="23">China</option><option value="110">Christmas Island</option><option value="111">Cocos (Keeling) Islands</option><option value="24">Colombia</option><option value="112">Comoros</option><option value="113">Congo (Brazzaville)</option><option value="114">Cook Islands</option><option value="25">Costa Rica</option><option value="26">Croatia</option><option value="27">Cuba</option><option value="28">Cyprus</option><option value="29">Czech Republic</option><option value="30">Denmark</option><option value="116">Djibouti</option><option value="117">Dominica</option><option value="31">Dominican Republic</option><option value="32">Ecuador</option><option value="33">Egypt</option><option value="118">El Salvador</option><option value="119">Equatorial Guinea</option><option value="120">Eritrea</option><option value="121">Estonia</option><option value="122">Ethiopia</option><option value="123">Falkland Islands</option><option value="124">Faroe Islands</option><option value="170">Federated States of Micronesia</option><option value="125">Fiji</option><option value="34">Finland</option><option value="35">France</option><option value="126">French Guiana</option><option value="127">French Polynesia</option><option value="128">French Southern Territories</option><option value="129">Gabon</option><option value="36">Georgia</option><option value="3">Germany</option><option value="131">Ghana</option><option value="37">Gibraltar</option><option value="38">Greece</option><option value="132">Greenland</option><option value="133">Grenada</option><option value="134">Guadeloupe</option><option value="135">Guam</option><option value="39">Guatemala</option><option value="136">Guinea</option><option value="137">Guinea Bissau</option><option value="138">Guyana</option><option value="139">Haiti</option><option value="140">Heard and Mc Donald Islands</option><option value="141">Honduras</option><option value="40">Hong Kong S.A.R.</option><option value="41">Hungary</option><option value="142">Iceland</option><option value="42">India</option><option value="43">Indonesia</option><option value="143">Iran</option><option value="144">Iraq</option><option value="44">Ireland</option><option value="46">Italy</option><option value="115">Ivory Coast</option><option value="47">Jamaica</option><option value="48">Japan</option><option value="49">Jordan</option><option value="50">Kazakhstan</option><option value="145">Kenya</option><option value="146">Kiribati</option><option value="52">Kuwait</option><option value="148">Kyrgyzstan</option><option value="149">Laos</option><option value="150">Latvia</option><option value="151">Lebanon</option><option value="152">Lesotho</option><option value="153">Liberia</option><option value="154">Libya</option><option value="155">Liechtenstein</option><option value="156">Lithuania</option><option value="157">Luxembourg</option><option value="158">Macau S.A.R</option><option value="159">Macedonia</option><option value="160">Madagascar</option><option value="161">Malawi</option><option value="53">Malaysia</option><option value="162">Maldives</option><option value="163">Mali</option><option value="164">Malta</option><option value="165">Marshall Islands</option><option value="166">Martinique</option><option value="167">Mauritania</option><option value="168">Mauritius</option><option value="169">Mayotte</option><option value="54">Mexico</option><option value="171">Moldova</option><option value="172">Monaco</option><option value="173">Mongolia</option><option value="174">Montenegro</option><option value="175">Montserrat</option><option value="176">Morocco</option><option value="177">Mozambique</option><option value="178">Myanmar</option><option value="179">Namibia</option><option value="180">Nauru</option><option value="181">Nepal</option><option value="55">Netherlands</option><option value="182">Netherlands Antilles</option><option value="183">New Caledonia</option><option value="56">New Zealand</option><option value="184">Nicaragua</option><option value="185">Niger</option><option value="186">Nigeria</option><option value="187">Niue</option><option value="188">Norfolk Island</option><option value="51">North Korea</option><option value="189">Northern Mariana Islands</option><option value="57">Norway</option><option value="190">Oman</option><option value="58">Pakistan</option><option value="191">Palau</option><option value="192">Panama</option><option value="193">Papua New Guinea</option><option value="59">Paraguay</option><option value="60">Peru</option><option value="61">Philippines</option><option value="194">Pitcairn</option><option value="62">Poland</option><option value="63">Portugal</option><option value="64">Puerto Rico</option><option value="65">Qatar</option><option value="195">Reunion</option><option value="66">Romania</option><option value="67">Russia</option><option value="196">Rwanda</option><option value="197">Saint Kitts and Nevis</option><option value="198">Saint Lucia</option><option value="199">Saint Vincent and the Grenadines</option><option value="200">Samoa</option><option value="201">San Marino</option><option value="202">Sao Tome and Principe</option><option value="68">Saudi Arabia</option><option value="203">Senegal</option><option value="85">Serbia</option><option value="204">Seychelles</option><option value="205">Sierra Leone</option><option value="69">Singapore</option><option value="70">Slovakia</option><option value="71">Slovenia</option><option value="206">Solomon Islands</option><option value="207">Somalia</option><option value="72">South Africa</option><option value="208">South Georgia and the Islands</option><option value="147">South Korea</option><option value="73">Spain</option><option value="209">Sri Lanka</option><option value="210">St. Helena</option><option value="211">St. Pierre and Miquelon</option><option value="212">Sudan</option><option value="213">Suriname</option><option value="214">Svalbard and Jan Mayen Islands</option><option value="215">Swaziland</option><option value="74">Sweden</option><option value="5">Switzerland</option><option value="216">Syria</option><option value="75">Taiwan</option><option value="217">Tajikistan</option><option value="218">Tanzania</option><option value="76">Thailand</option><option value="11">The Bahamas</option><option value="130">The Gambia</option><option value="219">Togo</option><option value="220">Tokelau</option><option value="221">Tonga</option><option value="222">Trinidad and Tobago</option><option value="223">Tunisia</option><option value="77">Turkey</option><option value="224">Turkmenistan</option><option value="225">Turks and Caicos Islands</option><option value="226">Tuvalu</option><option value="227">Uganda</option><option value="78">Ukraine</option><option value="79">United Arab Emirates</option><option value="80">United Kingdom</option><option value="81">United States minor outlying islands</option><option value="1">United States of America</option><option value="232">United States Virgin Islands</option><option value="82">Uruguay</option><option value="83">Uzbekistan</option><option value="228">Vanuatu</option><option value="229">Vatican (Holy Sea)</option><option value="84">Venezuela</option><option value="230">Vietnam</option><option value="231">Virgin Islands (British)</option><option value="233">Wallis and Futuna Islands</option><option value="234">Western Sahara</option><option value="235">Yemen</option><option value="236">Zambia</option><option value="237">Zimbabwe</option>
                                                                                    </select>
                                                                                </div>                                                        
                                                                                
                                                                            </div>   
                                                                            <div class="col-md-12 col-12 col-sm-12 mb-3 mt-3">
                                                                                <div class="form-check form-check-inline me-3">
                                                                                    <input type="radio" class="form-check-input" id="Available" name="example" value="customEx"/>
                                                                                    <label class="form-check-label" for="Available"><b>Parking Available</b>    </label>
                                                                                </div>
                                                                                <div class="form-check form-check-inline ms-2">
                                                                                    <input type="radio" class="form-check-input" id="Unavailable" name="example" value="customEx"/>
                                                                                    <label class="form-check-label" for="Unavailable"><b>Parking Unavailable</b></label>
                                                                                </div>
                                                                            </div>                                                                         
                                                                            <div class="mb-5 col-md-12 text-center">  
                                                                                <hr class="m-0 mb-2"/>                               
                                                                                <button value="Submit" class="btn btn-primary clickmode" data-show=".workshow,.hvr" data-hide=".work_edit"><b>Save -&gt;</b></button>
                                                                                <button class="btn btn-outline-danger clickmode"data-show=".workshow,.hvr" data-hide=".work_edit"><b> Cancel</b></button>
                                                                            </div>                                                                            
                                                                                                                  
                                                                        </div>
                                                                    </div>


                                                                </div>
                
                                                            </div>
                                                            <div class="bxsaddow col-md-6  col-lg-6 col-xl-4 mb-2 ps-2 pe-2 h-4">
                                                                <h4>
                                                                    <i class="zmdi zmdi-city"> </i> Infospry-Delhi
                                                                    <a  href="javascript:void(0);" class="btn btn-sm btn-primary hvr" data-toggle="modal" data-target="#addeditlocation">
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
                                                            <div class="bxsaddow col-md-6  col-lg-6 col-xl-4 mb-2 ps-2 pe-2 h-4 work_add ddnone">
                                                                <h4>
                                                                    <i class="zmdi zmdi-city"> </i> Add Work Address                                                                     
                                                                </h4>
                                                                <div class="p-3 bdr1 h4show">
                                                                    <div class="row">
                                                                        <div class="col-12 col-sm-12"> 
                                                                            
                                                                            <div class="group_lead">
                                                                                <input type="text" id="" class="input_text" required="required"/>
                                                                                <label for="" class="lablefilled">  Name</label>                                                                                           
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
                                                                                <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                                                                <label for="Address2" class="lablefilled"> Address </label>
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
                                                                                <input type="text" id="txtzip2" class="input_text bglightblu" required="required"/>
                                                                                <label for="txtzip2" class="lablefilled"> Zip Code</label>
                                                                            </div>
                                                                            <div class="group_lead">
                                                                                 <select id="txtCountry2" class="custom-select select_f bglightblu " required="required"><option value="">Country</option><option value="86">Afghanistan</option><option value="87">Albania</option><option value="88">Algeria</option><option value="89">American Samoa</option><option value="90">Andorra</option><option value="91">Angola</option><option value="92">Anguilla</option><option value="93">Antarctica</option><option value="94">Antigua and Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="8">Aruba</option><option value="9">Australia</option><option value="4">Austria</option><option value="10">Azerbaijan</option><option value="95">Bahrain</option><option value="12">Bangladesh</option><option value="96">Barbados</option><option value="13">Belarus</option><option value="14">Belgium</option><option value="15">Belize</option><option value="97">Benin</option><option value="16">Bermuda</option><option value="98">Bhutan</option><option value="17">Bolivia</option><option value="18">Bosnia and Herzegovina</option><option value="99">Botswana</option><option value="100">Bouvet Island</option><option value="19">Brazil</option><option value="101">British Indian Ocean Territory</option><option value="102">Brunei</option><option value="20">Bulgaria</option><option value="103">Burkina Faso</option><option value="104">Burundi</option><option value="105">Cambodia</option><option value="106">Cameroon</option><option value="2">Canada</option><option value="107">Cape Verde</option><option value="21">Cayman Islands</option><option value="108">Central African Republic</option><option value="109">Chad</option><option value="22">Chile</option><option value="23">China</option><option value="110">Christmas Island</option><option value="111">Cocos (Keeling) Islands</option><option value="24">Colombia</option><option value="112">Comoros</option><option value="113">Congo (Brazzaville)</option><option value="114">Cook Islands</option><option value="25">Costa Rica</option><option value="26">Croatia</option><option value="27">Cuba</option><option value="28">Cyprus</option><option value="29">Czech Republic</option><option value="30">Denmark</option><option value="116">Djibouti</option><option value="117">Dominica</option><option value="31">Dominican Republic</option><option value="32">Ecuador</option><option value="33">Egypt</option><option value="118">El Salvador</option><option value="119">Equatorial Guinea</option><option value="120">Eritrea</option><option value="121">Estonia</option><option value="122">Ethiopia</option><option value="123">Falkland Islands</option><option value="124">Faroe Islands</option><option value="170">Federated States of Micronesia</option><option value="125">Fiji</option><option value="34">Finland</option><option value="35">France</option><option value="126">French Guiana</option><option value="127">French Polynesia</option><option value="128">French Southern Territories</option><option value="129">Gabon</option><option value="36">Georgia</option><option value="3">Germany</option><option value="131">Ghana</option><option value="37">Gibraltar</option><option value="38">Greece</option><option value="132">Greenland</option><option value="133">Grenada</option><option value="134">Guadeloupe</option><option value="135">Guam</option><option value="39">Guatemala</option><option value="136">Guinea</option><option value="137">Guinea Bissau</option><option value="138">Guyana</option><option value="139">Haiti</option><option value="140">Heard and Mc Donald Islands</option><option value="141">Honduras</option><option value="40">Hong Kong S.A.R.</option><option value="41">Hungary</option><option value="142">Iceland</option><option value="42">India</option><option value="43">Indonesia</option><option value="143">Iran</option><option value="144">Iraq</option><option value="44">Ireland</option><option value="46">Italy</option><option value="115">Ivory Coast</option><option value="47">Jamaica</option><option value="48">Japan</option><option value="49">Jordan</option><option value="50">Kazakhstan</option><option value="145">Kenya</option><option value="146">Kiribati</option><option value="52">Kuwait</option><option value="148">Kyrgyzstan</option><option value="149">Laos</option><option value="150">Latvia</option><option value="151">Lebanon</option><option value="152">Lesotho</option><option value="153">Liberia</option><option value="154">Libya</option><option value="155">Liechtenstein</option><option value="156">Lithuania</option><option value="157">Luxembourg</option><option value="158">Macau S.A.R</option><option value="159">Macedonia</option><option value="160">Madagascar</option><option value="161">Malawi</option><option value="53">Malaysia</option><option value="162">Maldives</option><option value="163">Mali</option><option value="164">Malta</option><option value="165">Marshall Islands</option><option value="166">Martinique</option><option value="167">Mauritania</option><option value="168">Mauritius</option><option value="169">Mayotte</option><option value="54">Mexico</option><option value="171">Moldova</option><option value="172">Monaco</option><option value="173">Mongolia</option><option value="174">Montenegro</option><option value="175">Montserrat</option><option value="176">Morocco</option><option value="177">Mozambique</option><option value="178">Myanmar</option><option value="179">Namibia</option><option value="180">Nauru</option><option value="181">Nepal</option><option value="55">Netherlands</option><option value="182">Netherlands Antilles</option><option value="183">New Caledonia</option><option value="56">New Zealand</option><option value="184">Nicaragua</option><option value="185">Niger</option><option value="186">Nigeria</option><option value="187">Niue</option><option value="188">Norfolk Island</option><option value="51">North Korea</option><option value="189">Northern Mariana Islands</option><option value="57">Norway</option><option value="190">Oman</option><option value="58">Pakistan</option><option value="191">Palau</option><option value="192">Panama</option><option value="193">Papua New Guinea</option><option value="59">Paraguay</option><option value="60">Peru</option><option value="61">Philippines</option><option value="194">Pitcairn</option><option value="62">Poland</option><option value="63">Portugal</option><option value="64">Puerto Rico</option><option value="65">Qatar</option><option value="195">Reunion</option><option value="66">Romania</option><option value="67">Russia</option><option value="196">Rwanda</option><option value="197">Saint Kitts and Nevis</option><option value="198">Saint Lucia</option><option value="199">Saint Vincent and the Grenadines</option><option value="200">Samoa</option><option value="201">San Marino</option><option value="202">Sao Tome and Principe</option><option value="68">Saudi Arabia</option><option value="203">Senegal</option><option value="85">Serbia</option><option value="204">Seychelles</option><option value="205">Sierra Leone</option><option value="69">Singapore</option><option value="70">Slovakia</option><option value="71">Slovenia</option><option value="206">Solomon Islands</option><option value="207">Somalia</option><option value="72">South Africa</option><option value="208">South Georgia and the Islands</option><option value="147">South Korea</option><option value="73">Spain</option><option value="209">Sri Lanka</option><option value="210">St. Helena</option><option value="211">St. Pierre and Miquelon</option><option value="212">Sudan</option><option value="213">Suriname</option><option value="214">Svalbard and Jan Mayen Islands</option><option value="215">Swaziland</option><option value="74">Sweden</option><option value="5">Switzerland</option><option value="216">Syria</option><option value="75">Taiwan</option><option value="217">Tajikistan</option><option value="218">Tanzania</option><option value="76">Thailand</option><option value="11">The Bahamas</option><option value="130">The Gambia</option><option value="219">Togo</option><option value="220">Tokelau</option><option value="221">Tonga</option><option value="222">Trinidad and Tobago</option><option value="223">Tunisia</option><option value="77">Turkey</option><option value="224">Turkmenistan</option><option value="225">Turks and Caicos Islands</option><option value="226">Tuvalu</option><option value="227">Uganda</option><option value="78">Ukraine</option><option value="79">United Arab Emirates</option><option value="80">United Kingdom</option><option value="81">United States minor outlying islands</option><option value="1">United States of America</option><option value="232">United States Virgin Islands</option><option value="82">Uruguay</option><option value="83">Uzbekistan</option><option value="228">Vanuatu</option><option value="229">Vatican (Holy Sea)</option><option value="84">Venezuela</option><option value="230">Vietnam</option><option value="231">Virgin Islands (British)</option><option value="233">Wallis and Futuna Islands</option><option value="234">Western Sahara</option><option value="235">Yemen</option><option value="236">Zambia</option><option value="237">Zimbabwe</option>
                                                                                </select>
                                                                            </div>                                                        
                                                                            
                                                                        </div>   
                                                                        <div class="col-md-12 col-12 col-sm-12 mb-3 mt-3">
                                                                            <div class="form-check form-check-inline me-3">
                                                                                <input type="radio" class="form-check-input" id="Available" name="example" value="customEx"/>
                                                                                <label class="form-check-label" for="Available"><b>Parking Available</b>    </label>
                                                                            </div>
                                                                            <div class="form-check form-check-inline ms-2">
                                                                                <input type="radio" class="form-check-input" id="Unavailable" name="example" value="customEx"/>
                                                                                <label class="form-check-label" for="Unavailable"><b>Parking Unavailable</b></label>
                                                                            </div>
                                                                        </div>                                                                         
                                                                        <div class="mb-5 col-md-12 text-center">  
                                                                            <hr class="m-0 mb-2"/>                               
                                                                            <button value="Submit" class="btn btn-primary clickmode"  data-show=".bg-add" data-hide=".work_add"><b>Save -&gt;</b></button>
                                                                            <button class="btn btn-outline-danger clickmode" data-show=".bg-add" data-hide=".work_add"><b> Cancel</b></button>
                                                                        </div>                                                                            
                                                                                                              
                                                                    </div>
                                                                </div>
                
                                                            </div>
                                                            <a href="javascript:void(0);" class="bxsaddow mb-2 ps-2 pe-2 bg-add col-md-6 col-lg-6 col-xl-4  clickmode" data-hide=".bg-add" data-show=".work_add">
                                                                    <b> + </b> Add More                                                                        
                                                            </a>
                                                        </div>

                                                </div>
                                        </div>
                                        
                                        <div class="bxsaddow mb-0 h_4">
                                            <h4>
                                                    <i class="zmdi zmdi-pin"> </i> Contact Address
                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary hover clickmode" data-hide=".hover" data-show=".addcontact">
                                                        <i class="zmdi zmdi-plus"></i> Add More
                                                    </a>                                                                                                
                                            </h4>
                                            <div class="p-3 pe-4 ps-4 bdr1 h4show">   
                                                <div class="addcontact ddnone">
                                                    <div class="row">
                                                        <div class="col-12 col-sm-12 col-lg-6">                                                             
                                                            <div class="group_lead">
                                                                <input type="text" id="" class="input_text bglightblu" required="required"/>
                                                                <label for="" class="lablefilled">  Name</label>                                                                                           
                                                            </div>                                       
                                                        </div>    
                                                        <div class="col-12 col-sm-12 col-lg-6">         
                                                            <div class="group_lead">
                                                                <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                                                <label for="Address2" class="lablefilled"> Address </label>
                                                            </div>
                                                        </div>    
                                                        <div class="col-12 col-sm-12 col-lg-6">   
                                                            <div class="group_lead">
                                                                <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                                                <label for="txtcity2" class="lablefilled"> Town / City</label>
                                                            </div>
                                                        </div>    
                                                        <div class="col-12 col-sm-12 col-lg-6">    
                                                            <div class="group_lead">
                                                                <input type="text" id="txtstate2" class="input_text bglightblu" required="required"/>
                                                                <label for="txtstate2" class="lablefilled"> State</label>
                                                            </div>
                                                        </div>    
                                                        <div class="col-12 col-sm-12 col-lg-6">    
                                                            <div class="group_lead">
                                                                <input type="text" id="txtzip2" class="input_text bglightblu" required="required"/>
                                                                <label for="txtzip2" class="lablefilled"> Zip Code</label>
                                                            </div>
                                                        </div>    
                                                        <div class="col-12 col-sm-12 col-lg-6">    
                                                            <div class="group_lead">
                                                                 <select id="txtCountry2" class="custom-select select_f bglightblu " required="required"><option value="">Country</option><option value="86">Afghanistan</option><option value="87">Albania</option><option value="88">Algeria</option><option value="89">American Samoa</option><option value="90">Andorra</option><option value="91">Angola</option><option value="92">Anguilla</option><option value="93">Antarctica</option><option value="94">Antigua and Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="8">Aruba</option><option value="9">Australia</option><option value="4">Austria</option><option value="10">Azerbaijan</option><option value="95">Bahrain</option><option value="12">Bangladesh</option><option value="96">Barbados</option><option value="13">Belarus</option><option value="14">Belgium</option><option value="15">Belize</option><option value="97">Benin</option><option value="16">Bermuda</option><option value="98">Bhutan</option><option value="17">Bolivia</option><option value="18">Bosnia and Herzegovina</option><option value="99">Botswana</option><option value="100">Bouvet Island</option><option value="19">Brazil</option><option value="101">British Indian Ocean Territory</option><option value="102">Brunei</option><option value="20">Bulgaria</option><option value="103">Burkina Faso</option><option value="104">Burundi</option><option value="105">Cambodia</option><option value="106">Cameroon</option><option value="2">Canada</option><option value="107">Cape Verde</option><option value="21">Cayman Islands</option><option value="108">Central African Republic</option><option value="109">Chad</option><option value="22">Chile</option><option value="23">China</option><option value="110">Christmas Island</option><option value="111">Cocos (Keeling) Islands</option><option value="24">Colombia</option><option value="112">Comoros</option><option value="113">Congo (Brazzaville)</option><option value="114">Cook Islands</option><option value="25">Costa Rica</option><option value="26">Croatia</option><option value="27">Cuba</option><option value="28">Cyprus</option><option value="29">Czech Republic</option><option value="30">Denmark</option><option value="116">Djibouti</option><option value="117">Dominica</option><option value="31">Dominican Republic</option><option value="32">Ecuador</option><option value="33">Egypt</option><option value="118">El Salvador</option><option value="119">Equatorial Guinea</option><option value="120">Eritrea</option><option value="121">Estonia</option><option value="122">Ethiopia</option><option value="123">Falkland Islands</option><option value="124">Faroe Islands</option><option value="170">Federated States of Micronesia</option><option value="125">Fiji</option><option value="34">Finland</option><option value="35">France</option><option value="126">French Guiana</option><option value="127">French Polynesia</option><option value="128">French Southern Territories</option><option value="129">Gabon</option><option value="36">Georgia</option><option value="3">Germany</option><option value="131">Ghana</option><option value="37">Gibraltar</option><option value="38">Greece</option><option value="132">Greenland</option><option value="133">Grenada</option><option value="134">Guadeloupe</option><option value="135">Guam</option><option value="39">Guatemala</option><option value="136">Guinea</option><option value="137">Guinea Bissau</option><option value="138">Guyana</option><option value="139">Haiti</option><option value="140">Heard and Mc Donald Islands</option><option value="141">Honduras</option><option value="40">Hong Kong S.A.R.</option><option value="41">Hungary</option><option value="142">Iceland</option><option value="42">India</option><option value="43">Indonesia</option><option value="143">Iran</option><option value="144">Iraq</option><option value="44">Ireland</option><option value="46">Italy</option><option value="115">Ivory Coast</option><option value="47">Jamaica</option><option value="48">Japan</option><option value="49">Jordan</option><option value="50">Kazakhstan</option><option value="145">Kenya</option><option value="146">Kiribati</option><option value="52">Kuwait</option><option value="148">Kyrgyzstan</option><option value="149">Laos</option><option value="150">Latvia</option><option value="151">Lebanon</option><option value="152">Lesotho</option><option value="153">Liberia</option><option value="154">Libya</option><option value="155">Liechtenstein</option><option value="156">Lithuania</option><option value="157">Luxembourg</option><option value="158">Macau S.A.R</option><option value="159">Macedonia</option><option value="160">Madagascar</option><option value="161">Malawi</option><option value="53">Malaysia</option><option value="162">Maldives</option><option value="163">Mali</option><option value="164">Malta</option><option value="165">Marshall Islands</option><option value="166">Martinique</option><option value="167">Mauritania</option><option value="168">Mauritius</option><option value="169">Mayotte</option><option value="54">Mexico</option><option value="171">Moldova</option><option value="172">Monaco</option><option value="173">Mongolia</option><option value="174">Montenegro</option><option value="175">Montserrat</option><option value="176">Morocco</option><option value="177">Mozambique</option><option value="178">Myanmar</option><option value="179">Namibia</option><option value="180">Nauru</option><option value="181">Nepal</option><option value="55">Netherlands</option><option value="182">Netherlands Antilles</option><option value="183">New Caledonia</option><option value="56">New Zealand</option><option value="184">Nicaragua</option><option value="185">Niger</option><option value="186">Nigeria</option><option value="187">Niue</option><option value="188">Norfolk Island</option><option value="51">North Korea</option><option value="189">Northern Mariana Islands</option><option value="57">Norway</option><option value="190">Oman</option><option value="58">Pakistan</option><option value="191">Palau</option><option value="192">Panama</option><option value="193">Papua New Guinea</option><option value="59">Paraguay</option><option value="60">Peru</option><option value="61">Philippines</option><option value="194">Pitcairn</option><option value="62">Poland</option><option value="63">Portugal</option><option value="64">Puerto Rico</option><option value="65">Qatar</option><option value="195">Reunion</option><option value="66">Romania</option><option value="67">Russia</option><option value="196">Rwanda</option><option value="197">Saint Kitts and Nevis</option><option value="198">Saint Lucia</option><option value="199">Saint Vincent and the Grenadines</option><option value="200">Samoa</option><option value="201">San Marino</option><option value="202">Sao Tome and Principe</option><option value="68">Saudi Arabia</option><option value="203">Senegal</option><option value="85">Serbia</option><option value="204">Seychelles</option><option value="205">Sierra Leone</option><option value="69">Singapore</option><option value="70">Slovakia</option><option value="71">Slovenia</option><option value="206">Solomon Islands</option><option value="207">Somalia</option><option value="72">South Africa</option><option value="208">South Georgia and the Islands</option><option value="147">South Korea</option><option value="73">Spain</option><option value="209">Sri Lanka</option><option value="210">St. Helena</option><option value="211">St. Pierre and Miquelon</option><option value="212">Sudan</option><option value="213">Suriname</option><option value="214">Svalbard and Jan Mayen Islands</option><option value="215">Swaziland</option><option value="74">Sweden</option><option value="5">Switzerland</option><option value="216">Syria</option><option value="75">Taiwan</option><option value="217">Tajikistan</option><option value="218">Tanzania</option><option value="76">Thailand</option><option value="11">The Bahamas</option><option value="130">The Gambia</option><option value="219">Togo</option><option value="220">Tokelau</option><option value="221">Tonga</option><option value="222">Trinidad and Tobago</option><option value="223">Tunisia</option><option value="77">Turkey</option><option value="224">Turkmenistan</option><option value="225">Turks and Caicos Islands</option><option value="226">Tuvalu</option><option value="227">Uganda</option><option value="78">Ukraine</option><option value="79">United Arab Emirates</option><option value="80">United Kingdom</option><option value="81">United States minor outlying islands</option><option value="1">United States of America</option><option value="232">United States Virgin Islands</option><option value="82">Uruguay</option><option value="83">Uzbekistan</option><option value="228">Vanuatu</option><option value="229">Vatican (Holy Sea)</option><option value="84">Venezuela</option><option value="230">Vietnam</option><option value="231">Virgin Islands (British)</option><option value="233">Wallis and Futuna Islands</option><option value="234">Western Sahara</option><option value="235">Yemen</option><option value="236">Zambia</option><option value="237">Zimbabwe</option>
                                                                </select>
                                                            </div> 
                                                        </div>   
                                                                                                                               
                                                        <div class="mb-5 col-md-12 text-center">  
                                                            <hr class="m-0 mb-2"/>                               
                                                            <button value="Submit" class="btn btn-primary clickmode" data-show=".hover" data-hide=".addcontact"><b>Save -&gt;</b></button>
                                                            <button class="btn btn-outline-danger clickmode" data-show=".hover" data-hide=".addcontact"><b> Cancel</b></button>
                                                        </div>                                                                            
                                                                                              
                                                    </div>
                                                </div>                                                
                                                <div class="row">
                                                    <div class="bxsaddow col-md-6 mb-2 ps-2 pe-2 h-4">
                                                        <h4>
                                                            <i class="zmdi zmdi-city"> </i> Address One <span class="bbl-light ms-1">Main</span>
                                                            <a href="javascript:void(0);" class="btn btn-sm btn-primary hvr clickmode" data-show=".contact_ondedit" data-hide=".contact_ond, .hvr">
                                                                <i class="zmdi zmdi-edit"></i> Edit
                                                            </a>                                      
                                                        </h4>
                                                        <div class="p-3 bdr1 h4show">
                                                            <div class="contact_ond">
                                                                <p class="mb-0">
                                                                    <span class="wd-16px">Address Line</span>
                                                                    <span>:</span>
                                                                    <span id="lblcontactaddress">Flat 1 St. Lawrence House</span>
                                                                </p>
                                                                <p class="mb-0">
                                                                    <span class="wd-16px">City &amp; County </span>
                                                                    <span>:</span>
                                                                    <span id="lblcontactcity"> Birmingham</span>,
                                                                    <span id="lblcontactcountry"> West Midlands</span>
                                                                </p>
                                                                <p class="mb-0">
                                                                    <span class="wd-16px">Postcode </span>
                                                                    <span>:</span>
                                                                    <span id="lblworkpostcode">b169nx</span>
                                                                </p>
                                                            </div>   
                                                            <div class="contact_ondedit ddnone">
                                                                <div class="row">
                                                                    <div class="col-12 col-sm-12"> 
                                                                        
                                                                        <div class="group_lead">
                                                                            <input type="text" id="" class="input_text bglightblu" required="required"/>
                                                                            <label for="" class="lablefilled">  Name</label>                                                                                           
                                                                        </div> 
                                                                        <div class="group_lead">
                                                                            <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                                                            <label for="Address2" class="lablefilled"> Address </label>
                                                                        </div>
                                                                    </div>  
                                                                    <div class="col-12 col-sm-12 col-lg-6">  
                                                                        <div class="group_lead">
                                                                            <input type="text" id="txtcity2" class="input_text bglightblu" required="required"/>
                                                                            <label for="txtcity2" class="lablefilled"> Town / City</label>
                                                                        </div>
                                                                    </div>  
                                                                    <div class="col-12 col-sm-12 col-lg-6">  
                                                                        <div class="group_lead">
                                                                            <input type="text" id="txtstate2" class="input_text bglightblu" required="required"/>
                                                                            <label for="txtstate2" class="lablefilled"> State</label>
                                                                        </div>
                                                                    </div>  
                                                                    <div class="col-12 col-sm-12 col-lg-6">     
                                                                        <div class="group_lead">
                                                                            <input type="text" id="txtzip2" class="input_text bglightblu" required="required"/>
                                                                            <label for="txtzip2" class="lablefilled"> Zip Code</label>
                                                                        </div>
                                                                    </div>  
                                                                    <div class="col-12 col-sm-12 col-lg-6">  
                                                                        <div class="group_lead">
                                                                             <select id="txtCountry2" class="custom-select select_f bglightblu " required="required"><option value="">Country</option><option value="86">Afghanistan</option><option value="87">Albania</option><option value="88">Algeria</option><option value="89">American Samoa</option><option value="90">Andorra</option><option value="91">Angola</option><option value="92">Anguilla</option><option value="93">Antarctica</option><option value="94">Antigua and Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="8">Aruba</option><option value="9">Australia</option><option value="4">Austria</option><option value="10">Azerbaijan</option><option value="95">Bahrain</option><option value="12">Bangladesh</option><option value="96">Barbados</option><option value="13">Belarus</option><option value="14">Belgium</option><option value="15">Belize</option><option value="97">Benin</option><option value="16">Bermuda</option><option value="98">Bhutan</option><option value="17">Bolivia</option><option value="18">Bosnia and Herzegovina</option><option value="99">Botswana</option><option value="100">Bouvet Island</option><option value="19">Brazil</option><option value="101">British Indian Ocean Territory</option><option value="102">Brunei</option><option value="20">Bulgaria</option><option value="103">Burkina Faso</option><option value="104">Burundi</option><option value="105">Cambodia</option><option value="106">Cameroon</option><option value="2">Canada</option><option value="107">Cape Verde</option><option value="21">Cayman Islands</option><option value="108">Central African Republic</option><option value="109">Chad</option><option value="22">Chile</option><option value="23">China</option><option value="110">Christmas Island</option><option value="111">Cocos (Keeling) Islands</option><option value="24">Colombia</option><option value="112">Comoros</option><option value="113">Congo (Brazzaville)</option><option value="114">Cook Islands</option><option value="25">Costa Rica</option><option value="26">Croatia</option><option value="27">Cuba</option><option value="28">Cyprus</option><option value="29">Czech Republic</option><option value="30">Denmark</option><option value="116">Djibouti</option><option value="117">Dominica</option><option value="31">Dominican Republic</option><option value="32">Ecuador</option><option value="33">Egypt</option><option value="118">El Salvador</option><option value="119">Equatorial Guinea</option><option value="120">Eritrea</option><option value="121">Estonia</option><option value="122">Ethiopia</option><option value="123">Falkland Islands</option><option value="124">Faroe Islands</option><option value="170">Federated States of Micronesia</option><option value="125">Fiji</option><option value="34">Finland</option><option value="35">France</option><option value="126">French Guiana</option><option value="127">French Polynesia</option><option value="128">French Southern Territories</option><option value="129">Gabon</option><option value="36">Georgia</option><option value="3">Germany</option><option value="131">Ghana</option><option value="37">Gibraltar</option><option value="38">Greece</option><option value="132">Greenland</option><option value="133">Grenada</option><option value="134">Guadeloupe</option><option value="135">Guam</option><option value="39">Guatemala</option><option value="136">Guinea</option><option value="137">Guinea Bissau</option><option value="138">Guyana</option><option value="139">Haiti</option><option value="140">Heard and Mc Donald Islands</option><option value="141">Honduras</option><option value="40">Hong Kong S.A.R.</option><option value="41">Hungary</option><option value="142">Iceland</option><option value="42">India</option><option value="43">Indonesia</option><option value="143">Iran</option><option value="144">Iraq</option><option value="44">Ireland</option><option value="46">Italy</option><option value="115">Ivory Coast</option><option value="47">Jamaica</option><option value="48">Japan</option><option value="49">Jordan</option><option value="50">Kazakhstan</option><option value="145">Kenya</option><option value="146">Kiribati</option><option value="52">Kuwait</option><option value="148">Kyrgyzstan</option><option value="149">Laos</option><option value="150">Latvia</option><option value="151">Lebanon</option><option value="152">Lesotho</option><option value="153">Liberia</option><option value="154">Libya</option><option value="155">Liechtenstein</option><option value="156">Lithuania</option><option value="157">Luxembourg</option><option value="158">Macau S.A.R</option><option value="159">Macedonia</option><option value="160">Madagascar</option><option value="161">Malawi</option><option value="53">Malaysia</option><option value="162">Maldives</option><option value="163">Mali</option><option value="164">Malta</option><option value="165">Marshall Islands</option><option value="166">Martinique</option><option value="167">Mauritania</option><option value="168">Mauritius</option><option value="169">Mayotte</option><option value="54">Mexico</option><option value="171">Moldova</option><option value="172">Monaco</option><option value="173">Mongolia</option><option value="174">Montenegro</option><option value="175">Montserrat</option><option value="176">Morocco</option><option value="177">Mozambique</option><option value="178">Myanmar</option><option value="179">Namibia</option><option value="180">Nauru</option><option value="181">Nepal</option><option value="55">Netherlands</option><option value="182">Netherlands Antilles</option><option value="183">New Caledonia</option><option value="56">New Zealand</option><option value="184">Nicaragua</option><option value="185">Niger</option><option value="186">Nigeria</option><option value="187">Niue</option><option value="188">Norfolk Island</option><option value="51">North Korea</option><option value="189">Northern Mariana Islands</option><option value="57">Norway</option><option value="190">Oman</option><option value="58">Pakistan</option><option value="191">Palau</option><option value="192">Panama</option><option value="193">Papua New Guinea</option><option value="59">Paraguay</option><option value="60">Peru</option><option value="61">Philippines</option><option value="194">Pitcairn</option><option value="62">Poland</option><option value="63">Portugal</option><option value="64">Puerto Rico</option><option value="65">Qatar</option><option value="195">Reunion</option><option value="66">Romania</option><option value="67">Russia</option><option value="196">Rwanda</option><option value="197">Saint Kitts and Nevis</option><option value="198">Saint Lucia</option><option value="199">Saint Vincent and the Grenadines</option><option value="200">Samoa</option><option value="201">San Marino</option><option value="202">Sao Tome and Principe</option><option value="68">Saudi Arabia</option><option value="203">Senegal</option><option value="85">Serbia</option><option value="204">Seychelles</option><option value="205">Sierra Leone</option><option value="69">Singapore</option><option value="70">Slovakia</option><option value="71">Slovenia</option><option value="206">Solomon Islands</option><option value="207">Somalia</option><option value="72">South Africa</option><option value="208">South Georgia and the Islands</option><option value="147">South Korea</option><option value="73">Spain</option><option value="209">Sri Lanka</option><option value="210">St. Helena</option><option value="211">St. Pierre and Miquelon</option><option value="212">Sudan</option><option value="213">Suriname</option><option value="214">Svalbard and Jan Mayen Islands</option><option value="215">Swaziland</option><option value="74">Sweden</option><option value="5">Switzerland</option><option value="216">Syria</option><option value="75">Taiwan</option><option value="217">Tajikistan</option><option value="218">Tanzania</option><option value="76">Thailand</option><option value="11">The Bahamas</option><option value="130">The Gambia</option><option value="219">Togo</option><option value="220">Tokelau</option><option value="221">Tonga</option><option value="222">Trinidad and Tobago</option><option value="223">Tunisia</option><option value="77">Turkey</option><option value="224">Turkmenistan</option><option value="225">Turks and Caicos Islands</option><option value="226">Tuvalu</option><option value="227">Uganda</option><option value="78">Ukraine</option><option value="79">United Arab Emirates</option><option value="80">United Kingdom</option><option value="81">United States minor outlying islands</option><option value="1">United States of America</option><option value="232">United States Virgin Islands</option><option value="82">Uruguay</option><option value="83">Uzbekistan</option><option value="228">Vanuatu</option><option value="229">Vatican (Holy Sea)</option><option value="84">Venezuela</option><option value="230">Vietnam</option><option value="231">Virgin Islands (British)</option><option value="233">Wallis and Futuna Islands</option><option value="234">Western Sahara</option><option value="235">Yemen</option><option value="236">Zambia</option><option value="237">Zimbabwe</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>   
                                                                                                                                          
                                                                    <div class="mb-5 col-md-12 text-center">  
                                                                        <hr class="m-0 mb-2"/>                               
                                                                        <button value="Submit" class="btn btn-primary clickmode"data-hide=".contact_ondedit" data-show=".contact_ond, .hvr"><b>Save -&gt;</b></button>
                                                                        <button class="btn btn-outline-danger clickmode"data-hide=".contact_ondedit" data-show=".contact_ond, .hvr"><b> Cancel</b></button>
                                                                    </div>                                
                                                                </div>
                                                            </div>                                                                     
                                                        </div>                                                                            
                                                    </div>
                                                    <div class="bxsaddow col-md-6 mb-2 ps-2 pe-2 h-4">
                                                        <h4>
                                                            <i class="zmdi zmdi-city"> </i> City centre 
                                                            <a href="javascript:void(0);" class="btn btn-sm btn-primary hvr">
                                                                <i class="zmdi zmdi-edit"></i> Edit
                                                            </a>                                      
                                                        </h4>
                                                        <div class="p-3 bdr1 h4show">
                                                            <p class="mb-0">
                                                                <span class="wd-16px">Address Line</span>
                                                                <span>:</span>
                                                                <span id="lblcontactaddress">Flat 1 St. Lawrence House</span>
                                                            </p>
                                                            <p class="mb-0">
                                                                <span class="wd-16px">City &amp; County </span>
                                                                <span>:</span>
                                                                <span id="lblcontactcity"> Birmingham</span>,
                                                                <span id="lblcontactcountry"> West Midlands</span>
                                                            </p>
                                                            <p class="mb-0">
                                                                <span class="wd-16px">Postcode </span>
                                                                <span>:</span>
                                                                <span id="lblworkpostcode">b169nx</span>
                                                            </p>                                                                        
                                                        </div>                                                                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="bxsaddow mb-0 h_4">
                                            <h4>
                                                <i class="zmdi zmdi-format-list-bulleted"> </i> Work History
                                                <a class="btn btn-sm btn-primary hover"href="javascript:void(0);">
                                                    <i class="zmdi zmdi-plus-square"></i> Add
                                                </a>
                                            </h4>
                                            <div class="bdr1 h4show">
                                                <div class="table-responsive clearfix">
                                                    <table class="table-bordered table">
                                                        <thead>
                                                            <tr>
                                                                <th  style={{width:"28px"}}>SN.</th>
                                                                <th>Speciality</th>
                                                                <th>Hospital/Employer</th>
                                                                <th>From Date</th>
                                                                <th>To Date</th>
                                                                <th>--</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tblexperience">
                                                            <tr>
                                                                
                                                                <td data-field='name' placeholder='Enter Profile Type'></td>
                                                                <td data-field='name' placeholder='Enter Profile Type'></td>
                                                                <td data-field='name' placeholder='Enter Profile Type'></td>
                                                                <td data-field='name' placeholder='Enter Profile Type'></td>
                                                                <td data-field='name' placeholder='Enter Profile Type'></td>
                                                                <td>
                                                                    <a class="btn btn-outline-primary btn-sm edithover">
                                                                        <i class="zmdi zmdi-save"></i>
                                                                    </a>
                                                                    <a class="btn btn-outline-danger btn-sm">
                                                                        <i class="zmdi zmdi-delete"></i>
                                                                    </a>
        
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>1</td>
                                                                <td>
                                                                    <span>
                                                                        <b>DG</b>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-brown">City hospital</span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-grey">16/11/2018</span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-blue">30/11/2018</span>
                                                                </td>
                                                                <td>
                                                                    <a class="btn btn-outline-primary btn-sm edithover">
                                                                        <i class="zmdi zmdi-edit"></i>
                                                                    </a>
                                                                    <a class="btn btn-outline-danger btn-sm">
                                                                        <i class="zmdi zmdi-delete"></i>
                                                                    </a>
        
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>
                                                                    <span>
                                                                        <b>Registrar/ Medicine</b>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-brown">New Cross Hospital, Wolverhampton</span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-grey">16/11/2018</span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-blue">30/11/2018</span>
                                                                </td>
                                                                <td>
                                                                    <a class="btn btn-outline-primary btn-sm edithover">
                                                                        <i class="zmdi zmdi-edit"></i>
                                                                    </a>
                                                                    <a class="btn btn-outline-danger btn-sm">
                                                                        <i class="zmdi zmdi-delete"></i>
                                                                    </a>
        
                                                                </td>
                                                            </tr>
        
                                                        </tbody>
                                                    </table>
                                                </div>
        
                                            </div>
                                            
                                         
                                        </div>

                                        <div class="bxsaddow mb-0 h_4">
                                            <h4>
                                                <i class="zmdi zmdi-book"> </i> Professional Qualification
                                                <a class="btn btn-sm btn-primary hover" href="javascript:void(0);" data-toggle="modal" data-target="#pr0fesionalqua">
                                                    <i class="zmdi zmdi-plus-square"></i> Add
                                                </a>
                                            </h4>
                                            <div class="bdr1 h4show editshow">
                                                <div class="table-responsive clearfix">
                                                    <table class="table-bordered table">
                                                        <thead>
                                                            <tr>
                                                                <th  style={{width:"28px"}}>SN.</th>
                                                                <th>Date Received </th>
                                                                <th>Qualification</th>
                                                                <th>Instution</th>
                                                                <th>--</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tblexperience">
                                                            <tr>
                                                                
                                                                <td data-field='name' placeholder='Enter Profile type'></td>
                                                                <td data-field='name' placeholder='Enter Profile type'></td>
                                                                <td data-field='name' placeholder='Enter Profile type'></td>
                                                                <td data-field='name' placeholder='Enter Profile type'></td>
                                                               
                                                                <td>
                                                                    <a class="btn btn-outline-primary btn-sm edithover">
                                                                        <i class="zmdi zmdi-save"></i>
                                                                    </a>
                                                                    <a class="btn btn-outline-danger btn-sm">
                                                                        <i class="zmdi zmdi-delete"></i>
                                                                    </a>
        
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span>
                                                                        <b>Date Received</b>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-blue">Qualification</span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-grey">Instution</span>
                                                                </td>
                                                                <td>
                                                                    <a class="btn btn-outline-primary btn-sm edithover">
                                                                        <i class="zmdi zmdi-edit"></i>
                                                                    </a>
                                                                    <a class="btn btn-outline-danger btn-sm">
                                                                        <i class="zmdi zmdi-delete"></i>
                                                                    </a>
        
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>
                                                                    <span>
                                                                        <b>Date Received</b>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span class="text-blue">Qualification</span>
                                                                </td>
                                                                <td>
                                                                    <span class="col-grey">Instution</span>
                                                                </td>
                                                                <td>
                                                                    <a class="btn btn-outline-primary btn-sm edithover">
                                                                        <i class="zmdi zmdi-edit"></i>
                                                                    </a>
                                                                    <a class="btn btn-outline-danger btn-sm">
                                                                        <i class="zmdi zmdi-delete"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
        
                                            </div>
                                            
                                            <div class="d_noneedit">
                                                <div class="table-responsive clearfix">
                                                    <table class="table-bordered table">
                                                        <thead>
                                                            <tr>
                                                                <th>Date Received </th>
                                                                <th>Qualification</th>
                                                                <th>Instution</th>
                                                                <th>--</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tblexperience">
                                                            <tr>
                                                                <td>
                                                                    <input class="form-control" placeholder="Date Received"/>
                                                                </td>
                                                                <td>
                                                                    <input class="form-control col-blue" placeholder="Qualification"/>
                                                                </td>
                                                                <td>
                                                                    <input class="form-control col-grey" placeholder="Instution"/>
                                                                </td>
                                                                <td>
                                                                    <a class="btn btn-outline-primary editupdate"> Save</a>
                                                                    <a class="btn btn-outline-danger">
                                                                        <i class="zmdi zmdi-delete"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="bxsaddow mb-0 h_4">
                                            <h4>
                                                <i class="zmdi zmdi-filter-list"> </i> Job preferences
                                                <a class="btn btn-sm btn-primary hover"href="javascript:void(0);" data-toggle="modal" data-target="#Jobpreferences">
                                                    <i class="zmdi zmdi-edit"></i> Edit
                                                </a>
                                            </h4>
                                            <div class="p-3 bdr1 h4show">
                                                <span class="badge badge-primary me-1">Face 2 Face</span>
                                                <span class="badge badge-primary me-1">On Call</span>
                                                <span class="badge badge-primary">Online</span>
                                            </div>                                                        
                                        </div>
                                        <div class="bxsaddow mb-0 h_4">
                                            <h4>
                                                <i class="zmdi zmdi-laptop"> </i> IT System
                                                <a class="btn btn-sm btn-primary hover"href="javascript:void(0);" data-toggle="modal" data-target="#ITSystem">
                                                    <i class="zmdi zmdi-edit"></i> Edit
                                                </a>
                                            </h4>
                                            <div class="p-3 bdr1 h4show">
                                                <div id="lblitsystem">
                                                    <span class="badge badge-light  me-1">Adastra</span>
                                                    <span class="badge badge-light  me-1">DGL</span>
                                                    <span class="badge badge-light  me-1">EMIS LV</span>
                                                    <span class="badge badge-light  me-1">EMIS web</span>
                                                    <span class="badge badge-light me-1">Microtest</span>
                                                    <span class="badge badge-light me-1">SystmOne</span>
                                                    <span class="badge badge-light me-1">Vision</span>
                                                </div>
                                            </div>                                                           
                                        </div>
                                        <div class="bxsaddow mb-0 h_4">
                                            <h4>
                                                <i class="zmdi zmdi-volume-up"> </i> Language
                                                <a class="btn btn-sm btn-primary hover clickmode"href="javascript:void(0);" data-hide=".langshow,.hover" data-show=".itsystedt">
                                                    <i class="zmdi zmdi-edit"></i> Edit
                                                </a>
                                            </h4>
                                            <div class="p-3 bdr1 h4show">
                                                <div id="lbllanguages" class="langshow">
                                                    <span class="badge badge-info me-1">Afrikaans</span>
                                                    <span class="badge badge-info me-1">Argentinian</span>
                                                    <span class="badge badge-info me-1">Basque</span>
                                                    <span class="badge badge-info me-1">Catalan</span>
                                                    <span class="badge badge-info me-1">Dutch</span>
                                                    <span class="badge badge-info me-1">English</span>
                                                    <span class="badge badge-info me-1">Finnish</span>
                                                    <span class="badge badge-info  me-1">French</span>
                                                </div>
                                                <div class="itsystedt ddnone">
                                                    <div class="row mt-3 clearfix">
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Adastra" type="checkbox"/>
                                                                    <label for="Adastra">
                                                                        Adastra
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="DGL" type="checkbox"/>
                                                                    <label for="DGL">
                                                                        DGL
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Docman" type="checkbox"/>
                                                                    <label for="Docman">
                                                                        Docman
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="EDISSYSTEM" type="checkbox"/>
                                                                    <label for="EDISSYSTEM">
                                                                        EDIS - A&amp;E SYSTEM
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="EMIS-LV" type="checkbox"/>
                                                                    <label for="EMIS-LV">
                                                                        EMIS LV
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="EMIS-PCS" type="checkbox"/>
                                                                    <label for="EMIS-PCS">
                                                                        EMIS PCS
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="EMISweb" type="checkbox"/>
                                                                    <label for="EMISweb">
                                                                        EMIS web
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Frontdesk" type="checkbox"/>
                                                                    <label for="Frontdesk">
                                                                        Frontdesk
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Infoslex" type="checkbox"/>
                                                                    <label for="Infoslex">
                                                                        Infoslex
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Microtest" type="checkbox"/>
                                                                    <label for="Microtest">
                                                                        Microtest
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Premiere" type="checkbox"/>
                                                                    <label for="Premiere">
                                                                        Premiere
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Synergy" type="checkbox"/>
                                                                    <label for="Synergy">
                                                                        Synergy
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="SystmOne" type="checkbox"/>
                                                                    <label for="SystmOne">
                                                                        SystmOne
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Torex" type="checkbox"/>
                                                                    <label for="Torex">
                                                                        Torex
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="checkbox">
                                                                    <input id="Vision" type="checkbox"/>
                                                                    <label for="Vision">
                                                                        Vision
                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    <div class="text-center col-lg-12 mt-3 mb-2"> 
                                                        <hr/>                                                                                 
                                                        <button value="Submit" class="btn btn-primary  btn-sm clickmode"  data-show=".langshow,.hover" data-hide=".itsystedt"><b>Save -&gt;</b></button>
                                                        <button class="btn btn-outline-danger btn-sm  clickmode" data-show=".langshow,.hover" data-hide=".itsystedt"><b> Cancel</b></button>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="bxsaddow mb-0 h_4">
                                                <h4>
                                                    <i class="zmdi zmdi-library"> </i> Additional Experience
                                                    <a class="btn btn-sm btn-primary hover"href="javascript:void(0);">
                                                        <i class="zmdi zmdi-plus-square"></i> Add
                                                    </a>
                                                </h4>
                                                <div class="bdr1 h4show editshow">
                                                    <div class="table-responsive clearfix">
                                                        <table class="table table-bordered" id="editableTable">
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:"28px"}}>SN.</th>
                                                                    <th>Experience</th>
                                                                    <th>Completed</th>
                                                                    <th>--</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="tblexperience">
                                                                <tr>
                                                                
                                                                    <td data-field='name' placeholder='Enter Profile type'></td>
                                                                    <td data-field='name' placeholder='Enter Profile type'></td>
                                                                    <td data-field='name' placeholder='Enter Profile type'></td>
                                                                  
                                                                   
                                                                    <td>
                                                                        <a class="btn btn-outline-primary btn-sm edithover">
                                                                            <i class="zmdi zmdi-save"></i>
                                                                        </a>
                                                                        <a class="btn btn-outline-danger btn-sm">
                                                                            <i class="zmdi zmdi-delete"></i>
                                                                        </a>
            
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>
                                                                        <span class="col-blue"> EXPERIENCE-111888</span>
                                                                    </td>
                                                                    <td>
                                                                        <span class="col-grey">
                                                                            <b>Experience-1 </b> Completed by candidate</span>
                                                                    </td>
                                                                    <td>
                                                                        <a class="btn btn-outline-primary btn-sm edithover">
                                                                            <i class="zmdi zmdi-edit"></i>
                                                                        </a>
                                                                        <a class="btn btn-outline-danger btn-sm">
                                                                            <i class="zmdi zmdi-delete"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>
                                                                        <span class="col-blue"> EXPERIENCE-18</span>
                                                                    </td>
                                                                    <td>
                                                                        <span class="col-grey">
                                                                            <b>Experience-8 </b> Completed by candidate</span>
                                                                    </td>
                                                                    <td>
                                                                        <a class="btn btn-outline-primary btn-sm edithover">
                                                                            <i class="zmdi zmdi-edit"></i>
                                                                        </a>
                                                                        <a class="btn btn-outline-danger btn-sm">
                                                                            <i class="zmdi zmdi-delete"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                
                                                
                                        </div>                                    
                                        
                                        <div class="bxsaddow mb-2 h_4">
                                            <h4>
                                                <i class="zmdi zmdi-notifications-active"> </i> Set notification preferences for Jobs,Invoices and Newsletters/Promotions
                                            </h4>
                                            <div class="p-3 bdr1 h4show">
                                                <p class="mb-1">
                                                    <b>Jobs Notifications</b>
                                                    <span class="col-grey">(Related to all Applied / Booked jobs)</span>
                                                </p>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="checkbox mb-0">
                                                            <input id="j-email" type="checkbox"/>
                                                            <label for="j-email">
                                                                Email
                                                            </label>
                                                        </div>
                                                        <div class="checkbox mb-0">
                                                            <input id="j-sma" type="checkbox"/>
                                                            <label for="j-sma">
                                                                SMS
                                                            </label>
                                                        </div>
                                                        <div class="checkbox mb-0">
                                                            <input id="j-mapp" type="checkbox"/>
                                                            <label for="j-mapp" class="col-brown">
                                                                Mobile App
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p class="mb-2 mt-3">
                                                    <b>Payments / Remittance Advices</b>
                                                    <span class="col-grey"></span>
                                                </p>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="checkbox mb-0">
                                                            <input id="g-email" type="checkbox"/>
                                                            <label for="g-email">
                                                                Email
                                                            </label>
                                                        </div>
                                                        <div class="checkbox mb-0">
                                                            <input id="g-sma" type="checkbox"/>
                                                            <label for="g-sma">
                                                                SMS
                                                            </label>
                                                        </div>
                                                        <div class="checkbox mb-0">
                                                            <input id="g-mapp" type="checkbox"/>
                                                            <label for="g-mapp" class="col-brown">
                                                                Mobile App
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p class="mb-2 mt-3">
                                                    <b> General Newsletters/Promotions </b>
                                                    <span class="col-grey"> (Related to New Jobs matching with your profile and other promotions)</span>
                                                </p>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="checkbox mb-0">
                                                            <input id="p-email" type="checkbox"/>
                                                            <label for="p-email">
                                                                Email
                                                            </label>
                                                        </div>
                                                        <div class="checkbox mb-0">
                                                            <input id="p-sma" type="checkbox"/>
                                                            <label for="p-sma">
                                                                SMS
                                                            </label>
                                                        </div>
                                                        <div class="checkbox mb-0">
                                                            <input id="p-mapp" type="checkbox"/>
                                                            <label for="p-mapp" class="col-brown">
                                                                Mobile App
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
        
                                                <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
                                                    <div class="checkbox mb-0">
                                                        <input id="t-agree" type="checkbox"/>
                                                        <label for="t-agree">
                                                            I agree with Terms & Conditions
                                                        </label>
                                                    </div>
                                                    <br/>
                                                    <div class="checkbox mb-0">
                                                        <input id="p-agree" type="checkbox"/>
                                                        <label for="p-agree">
                                                            I agree to this Privacy Policy
                                                        </label>
                                                    </div>
                                                    <div class="text-center">
                                                            <hr/>
                                                            <button type="submit" class="btn btn-primary "> Update</button>
                                                            <button type="submit" class="btn btn-outline-danger"> Cancel </button>
                                                    </div>
                                                </div>
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
            




        </>
    )
}

export default Main
