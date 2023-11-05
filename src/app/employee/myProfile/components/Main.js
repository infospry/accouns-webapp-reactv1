"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import LeftSidebar from '../../components/LeftSidebar';

function Main() {
   
    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="p-2">
                                <h2 className="font-bold mb-0">My Profile </h2>
                            </div>
                            <div className="pe-2 d-flex">
                                                            
                            </div>
                        </div>
                    </div>
                    {/* <<<<<<<<<<<< */}
                    <div className=" contactlist scroll_bar">
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-12 p-0">                        
                            <div className="d-flex">
                                <div className="mobile-left">
                                    <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-bs-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                        <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                                    </a>
                                </div>
                                <div className="inbox left pe-0 me-0 lftfxd" id="email-nav">                                        
                                    <div className="mail-side"> 
                                       <LeftSidebar/>                                       
                                    </div>
                                </div>                               
                                <div className="inbox right rgtinbox htg_auto"> 
                                    <div className="col-md-12 col-sm-12 p-0 font-h4">
                                      


<div className="row justify-content-center">
    <div className="col-lg-8">
        <div class="d-flex justify-content-start align-items-center mt-4">    
            <div class="css-3sr5s9 me-2"><span class="css-19k1nij">NP</span></div>
            <div>
            <h2 class="mb-0">Nicole Pearson</h2>
            <p>Let employers know that you are available to start working as soon as possible.</p>
            </div>
        </div>
        <a class="css-es7v8c css-z4q3yd pro clickmode" data-hide=".pro" data-show=".show_pro" href="javascript:void(0);">
            <div class="css-ra8ckx d-flex justify-content-center align-items-top" style={{alignItems:" flex-start"}}>
                <div class="css-1waj6v4 eu4oa1w0">
                    <div class="row justify-content-center align-items-top">
                        <div className="col-lg-6">                                                    
                            <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-account me-1"></i>Name</h4>
                            <p className="mb-2"> <span className="col-black"><b>Nicole Pearson</b> [<b className="col-green font-13 ms-1">Active</b>] </span> </p>
                            
                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-accounts me-1"></i> Designations </h4>
                            <p className="mb-2"> <span className="col-black">Director</span> </p>

                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-pin me-1"></i>Location </h4>
                            <p className="mb-2"> <span className="col-black">California</span> </p>

                        </div>
                        <div className="col-lg-6">
                            
                            <h4 className="col-grey m-0 p-0"> <i className="zmdi zmdi-smartphone-android me-1"></i> Mobile</h4>
                            <p className="mb-2"> <span className="col-black">7123584758  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>
                            
                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-phone me-1"></i> Phone </h4>
                            <p className="mb-2"> <span className="col-black">73737  <small className="col-green"> <i className="zmdi zmdi-check-all"> </i> Verified</small></span> </p>

                            <h4 className="col-grey m-0 p-0"><i className="zmdi zmdi-email me-1"></i> Email</h4>
                            <p className="mb-2"> <span className="col-black">daniel.cook@gmail.com <small className="col-red"> <i className="zmdi zmdi-alert-triangle"> </i> Unerified</small></span> </p>

                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-169u4i0 mt-3">
                    <path
                        d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                    ></path>
                </svg>
            </div>
        </a>

        <div className="show_pro ddnone"> 
            <div className="css-es7v8c css-z4q3yd">
                <div className="css-ra8ckx d-block">            
                    <div className="row">
                        <div className="col-md-4 col-lg-4 itempro text-center pt-3 mb-3 bdrrgtt">
                            <div className="form-group mb-1">
                                <div className="avatar-upload">
                                    <div className="avatar-edit">
                                        <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" disabled="disabled"/>                                                           
                                    </div>
                                    <div className="avatar-preview">
                                        <div id="imagePreview"style={{background:"url(images/user.png)"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-group mb-2">
                                <a className="btn btn-primary btn-sm"><i className="zmdi zmdi-edit"></i></a>
                                <a className="btn btn-danger btn-sm"><i className="zmdi zmdi-delete"></i></a>
                            </div>
                        </div>                                                            
                        <div className="col-md-8 mt-3">
                            <div className="row">
                                
                                <div className="col-md-6 col-6 col-sm-6">                                                                        
                                    <div className="group_lead">
                                        <input type="text" id="" className="input_text" required="required"/>
                                        <label for="" className="lablefilled">Frist Name</label>
                                                                                
                                    </div> 
                                </div>
                                <div className="col-sm-6 col-md-6 col-6 ps-0">                                            
                                    <div className="group_lead">
                                        <input type="text" id="" className="input_text" required="required"/>
                                        <label for="" className="lablefilled">Last Name</label>
                                                                                
                                    </div>
                                </div>
                                <div className="col-md-6 col-6 col-sm-6">                                                                        
                                    <div className="group_lead">
                                        <input type="text" id="" className="input_text" required="required"/>
                                        <label for="" className="lablefilled">Employee Id</label>
                                                                                
                                    </div> 
                                </div>
                                <div className="col-sm-6 col-md-6 col-6 ps-0">                                            
                                    <div className="group_lead">
                                        <input type="text" id="" className="input_text" required="required"/>
                                        <label for="" className="lablefilled">Designations</label>                                                                                                                    
                                    </div>
                                </div>
                            </div>  
                        </div> 
                        <div className="col-12 col-sm-6 col-xl-4">                                            
                            <div className="group_lead">
                                <input type="text" id="Email" className="input_text" required="required"/>
                                <label for="Email" className="lablefilled"> Email </label>
                                                            
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">                                           
                            <div className="group_lead">
                                <input type="text" id="Phone" className="input_text" required="required"/>
                                <label for="Phone" className="lablefilled"> Phone </label>                                                                                                    
                            </div>
                        </div> 
                        <div className="col-12 col-sm-6 col-xl-4">                                          
                            <div className="group_lead">
                                <input type="text" id="Mobile" className="input_text" required="required"/>
                                <label for="Mobile" className="lablefilled"> Mobile </label>                                                                                                        
                            </div> 
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">                                           
                            <div className="group_lead">
                                <input type="text" id="" className="input_text" required="required"/>
                                <label for="" className="lablefilled">Location</label>                                                                                                            
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">                                                            
                            <div className="group_lead">
                                <input type="text" id="" className="input_text" required="required"/>
                                <label for="" className="lablefilled"> Account Create Date </label>                                                                                                        
                            </div>                                                                
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">                                           
                            <div className="group_lead">
                                <input type="text" id="WebsiteLink" className="input_text" required="required"/>
                                <label for="WebsiteLink" className="lablefilled"> Website Link </label>                                                                                                            
                            </div>     
                        </div> 
                        <div className="col-md-12 col-12 col-sm-12 mb-3 mt-2 text-start">
                            <div className="form-check form-check-inline me-3">
                                <input type="radio" className="form-check-input" id="customRadio" name="example" value="customEx"/>
                                <label className="form-check-label" for="customRadio"><b>Active</b>    </label>
                            </div>
                            <div className="form-check form-check-inline ms-2">
                                <input type="radio" className="form-check-input" id="customRadio2" name="example" value="customEx"/>
                                <label className="form-check-label" for="customRadio2"><b>Inactive</b></label>
                            </div>
                        </div>
                        <div className="col-md-12"> 
                            <hr/>                         
                            <div className="text-center">
                                <button className="btn btn-primary clickmode" data-show=".pro" data-hide=".show_pro" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                                <button className="btn btn-danger clickmode ms-1" data-show=".pro" data-hide=".show_pro" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>                                                         
                    </div>
                                                                
                </div>
            </div>
        </div>
        
        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".pstatement">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Personal Statement</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0"><path d="M13 4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V11H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v6.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h6.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V4.5z"></path></svg>

            </div>
        </a>
        <div className="pstatement ddnone">
            <div className="css-es7v8c d-flex justify-content-between align-items-top">
                <div className="css-ra8ckx">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <a class="css-3rgpo7 clickmode" href="javascript:void(0);" data-hide=".pstatement" data-show=".pstatement_edit">
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0">
                        <path
                            d="M20.706 7.042a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zm-2.898 2.9l-9.705 9.71a.5.5 0 01-.218.128l-4.246 1.2a.5.5 0 01-.618-.616l1.209-4.24a.5.5 0 01.127-.216l9.7-9.716 3.75 3.75z"
                        ></path>
                    </svg>
                </a>

            </div>
        </div>
        <div className="pstatement_edit ddnone"> 
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">            
                    <div className="group_lead">
                        <textarea required="required" className="input_text" id="Description"></textarea>
                        <label for="Description" className="lablefilled">Write Statement</label>                                           
                    </div>                                                                                  
                    <div className="text-start">
                        <button className="btn btn-primary clickmode" data-show=".pstatement,.hvr" data-hide=".pstatement_edit" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                        <button className="btn btn-danger clickmode ms-1" data-show=".pstatement,.hvr" data-hide=".pstatement_edit" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                    </div>                    
                </div>
            </div>
        </div>

        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".s_profile">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt">Social Profiles</h3>
                    <span className="css-jcj5hu">Highlight your Social Profiles.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b"><path d="M13 4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V11H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v6.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h6.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V4.5z"></path></svg>
            </div>
        </a>
        <div className="s_profile ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">
                    <div className="table-responsive clearfix">
                        <table className="table table-bordered w-100">
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
                                    <td data-field="birthday"> <input type="text" className="form-control none_border"placeholder="https://www.facebook.com/"/></td>                                                           
                                    <td>
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-primary edit me-1" title="Edit">
                                        <i className="zmdi zmdi-edit"></i>
                                        </a>                                    
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-danger edit" title="Delete">
                                        <i className="zmdi zmdi-delete"></i>
                                        </a>
                                    </td>
                                </tr>                            
                            </tbody>
                        </table>                        
                    </div>
                </div>
                

            </div>
        </div>
        
        <a className="css-es7v8c clickmode" href="javascript:void(0);" data-hide=".workshow" data-show=".work_edit">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Work Address</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0"><path d="M13 4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V11H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v6.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h6.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V4.5z"></path></svg>
            </div>
        </a>
        <div className="workshow ddnone">
            <div className="css-es7v8c d-flex justify-content-between align-items-top">
                <div className="css-ra8ckx text-start d-block">
                    <div class="row justify-content-center align-items-top">
                        <div className="col-lg-6">   
                            <h4 className="col-grey m-0 p-0">Hospital Name </h4>
                            <p className="mb-2"> <span className="col-black">City centre</span> </p>

                            <h4 className="col-grey m-0 p-0">Address </h4>
                            <p className="mb-2"> <span className="col-black">Birmingham C I B A Building</span> </p>

                            <h4 className="col-grey m-0 p-0"> Email</h4>
                            <p className="mb-2"> <span className="col-black">daniel.cook@gmail.com </span> </p>

                        </div>
                        <div className="col-lg-6">
                            
                            <h4 className="col-grey m-0 p-0"> Mobile</h4>
                            <p className="mb-2"> <span className="col-black">Not Available</span> </p>
                            
                            <h4 className="col-grey m-0 p-0"> Onsite Parking </h4>
                            <p className="mb-2"> <span className="col-black">Available </span> </p>

                           
                        </div>
                    </div>
                </div>
                <a class="css-3rgpo7 clickmode" href="javascript:void(0);" data-hide=".workshow" data-show=".work_edit">
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0">
                        <path
                            d="M20.706 7.042a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zm-2.898 2.9l-9.705 9.71a.5.5 0 01-.218.128l-4.246 1.2a.5.5 0 01-.618-.616l1.209-4.24a.5.5 0 01.127-.216l9.7-9.716 3.75 3.75z"
                        ></path>
                    </svg>
                </a>

            </div>
        </div>
        <div className="work_edit ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">                               
                        <div className="row">
                            <div className="col-12 col-lg-6"> 
                                
                                <div className="group_lead">
                                    <input type="text" id="" className="input_text" required="required"/>
                                    <label for="" className="lablefilled">  Name</label>                                                                                           
                                </div>                                        
                            </div>  
                            <div className="col-12 col-lg-6">   
                                <div className="group_lead">
                                    <input type="text" id="" className="input_text" required="required"/>
                                    <label for="" className="lablefilled"> Email</label>                                    
                                </div>
                            </div>  
                            <div className="col-12 col-lg-6">     
                                <div className="group_lead">
                                    <input type="text" id="" className="input_text" required="required"/>
                                    <label for="" className="lablefilled"> Mobile</label>
                                    
                                </div> 

                            </div>  
                            <div className="col-12 col-lg-6">          
                                <div className="group_lead">
                                    <input type="text" id="txtcity2" className="input_text bglightblu" required="required"/>
                                    <label for="Address2" className="lablefilled"> Address </label>
                                </div>
                                </div>  
                            <div className="col-12 col-lg-6">     
                                <div className="group_lead">
                                    <input type="text" id="txtcity2" className="input_text bglightblu" required="required"/>
                                    <label for="txtcity2" className="lablefilled"> Town / City</label>
                                </div>
                                </div>  
                            <div className="col-12 col-lg-6">     
                                <div className="group_lead">
                                    <input type="text" id="txtstate2" className="input_text bglightblu" required="required"/>
                                    <label for="txtstate2" className="lablefilled"> State</label>
                                </div>
                                </div>  
                            <div className="col-12 col-lg-6">     
                                <div className="group_lead">
                                    <input type="text" id="txtzip2" className="input_text bglightblu" required="required"/>
                                    <label for="txtzip2" className="lablefilled"> Zip Code</label>
                                </div>
                                </div>  
                            <div className="col-12 col-lg-6"> 
                                <div className="group_lead">
                                        <select id="txtCountry2" className="custom-select select_f bglightblu " required="required"><option value="">Country</option><option value="86">Afghanistan</option><option value="87">Albania</option><option value="88">Algeria</option><option value="89">American Samoa</option><option value="90">Andorra</option><option value="91">Angola</option><option value="92">Anguilla</option><option value="93">Antarctica</option><option value="94">Antigua and Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="8">Aruba</option><option value="9">Australia</option><option value="4">Austria</option><option value="10">Azerbaijan</option><option value="95">Bahrain</option><option value="12">Bangladesh</option><option value="96">Barbados</option><option value="13">Belarus</option><option value="14">Belgium</option><option value="15">Belize</option><option value="97">Benin</option><option value="16">Bermuda</option><option value="98">Bhutan</option><option value="17">Bolivia</option><option value="18">Bosnia and Herzegovina</option><option value="99">Botswana</option><option value="100">Bouvet Island</option><option value="19">Brazil</option><option value="101">British Indian Ocean Territory</option><option value="102">Brunei</option><option value="20">Bulgaria</option><option value="103">Burkina Faso</option><option value="104">Burundi</option><option value="105">Cambodia</option><option value="106">Cameroon</option><option value="2">Canada</option><option value="107">Cape Verde</option><option value="21">Cayman Islands</option><option value="108">Central African Republic</option><option value="109">Chad</option><option value="22">Chile</option><option value="23">China</option><option value="110">Christmas Island</option><option value="111">Cocos (Keeling) Islands</option><option value="24">Colombia</option><option value="112">Comoros</option><option value="113">Congo (Brazzaville)</option><option value="114">Cook Islands</option><option value="25">Costa Rica</option><option value="26">Croatia</option><option value="27">Cuba</option><option value="28">Cyprus</option><option value="29">Czech Republic</option><option value="30">Denmark</option><option value="116">Djibouti</option><option value="117">Dominica</option><option value="31">Dominican Republic</option><option value="32">Ecuador</option><option value="33">Egypt</option><option value="118">El Salvador</option><option value="119">Equatorial Guinea</option><option value="120">Eritrea</option><option value="121">Estonia</option><option value="122">Ethiopia</option><option value="123">Falkland Islands</option><option value="124">Faroe Islands</option><option value="170">Federated States of Micronesia</option><option value="125">Fiji</option><option value="34">Finland</option><option value="35">France</option><option value="126">French Guiana</option><option value="127">French Polynesia</option><option value="128">French Southern Territories</option><option value="129">Gabon</option><option value="36">Georgia</option><option value="3">Germany</option><option value="131">Ghana</option><option value="37">Gibraltar</option><option value="38">Greece</option><option value="132">Greenland</option><option value="133">Grenada</option><option value="134">Guadeloupe</option><option value="135">Guam</option><option value="39">Guatemala</option><option value="136">Guinea</option><option value="137">Guinea Bissau</option><option value="138">Guyana</option><option value="139">Haiti</option><option value="140">Heard and Mc Donald Islands</option><option value="141">Honduras</option><option value="40">Hong Kong S.A.R.</option><option value="41">Hungary</option><option value="142">Iceland</option><option value="42">India</option><option value="43">Indonesia</option><option value="143">Iran</option><option value="144">Iraq</option><option value="44">Ireland</option><option value="46">Italy</option><option value="115">Ivory Coast</option><option value="47">Jamaica</option><option value="48">Japan</option><option value="49">Jordan</option><option value="50">Kazakhstan</option><option value="145">Kenya</option><option value="146">Kiribati</option><option value="52">Kuwait</option><option value="148">Kyrgyzstan</option><option value="149">Laos</option><option value="150">Latvia</option><option value="151">Lebanon</option><option value="152">Lesotho</option><option value="153">Liberia</option><option value="154">Libya</option><option value="155">Liechtenstein</option><option value="156">Lithuania</option><option value="157">Luxembourg</option><option value="158">Macau S.A.R</option><option value="159">Macedonia</option><option value="160">Madagascar</option><option value="161">Malawi</option><option value="53">Malaysia</option><option value="162">Maldives</option><option value="163">Mali</option><option value="164">Malta</option><option value="165">Marshall Islands</option><option value="166">Martinique</option><option value="167">Mauritania</option><option value="168">Mauritius</option><option value="169">Mayotte</option><option value="54">Mexico</option><option value="171">Moldova</option><option value="172">Monaco</option><option value="173">Mongolia</option><option value="174">Montenegro</option><option value="175">Montserrat</option><option value="176">Morocco</option><option value="177">Mozambique</option><option value="178">Myanmar</option><option value="179">Namibia</option><option value="180">Nauru</option><option value="181">Nepal</option><option value="55">Netherlands</option><option value="182">Netherlands Antilles</option><option value="183">New Caledonia</option><option value="56">New Zealand</option><option value="184">Nicaragua</option><option value="185">Niger</option><option value="186">Nigeria</option><option value="187">Niue</option><option value="188">Norfolk Island</option><option value="51">North Korea</option><option value="189">Northern Mariana Islands</option><option value="57">Norway</option><option value="190">Oman</option><option value="58">Pakistan</option><option value="191">Palau</option><option value="192">Panama</option><option value="193">Papua New Guinea</option><option value="59">Paraguay</option><option value="60">Peru</option><option value="61">Philippines</option><option value="194">Pitcairn</option><option value="62">Poland</option><option value="63">Portugal</option><option value="64">Puerto Rico</option><option value="65">Qatar</option><option value="195">Reunion</option><option value="66">Romania</option><option value="67">Russia</option><option value="196">Rwanda</option><option value="197">Saint Kitts and Nevis</option><option value="198">Saint Lucia</option><option value="199">Saint Vincent and the Grenadines</option><option value="200">Samoa</option><option value="201">San Marino</option><option value="202">Sao Tome and Principe</option><option value="68">Saudi Arabia</option><option value="203">Senegal</option><option value="85">Serbia</option><option value="204">Seychelles</option><option value="205">Sierra Leone</option><option value="69">Singapore</option><option value="70">Slovakia</option><option value="71">Slovenia</option><option value="206">Solomon Islands</option><option value="207">Somalia</option><option value="72">South Africa</option><option value="208">South Georgia and the Islands</option><option value="147">South Korea</option><option value="73">Spain</option><option value="209">Sri Lanka</option><option value="210">St. Helena</option><option value="211">St. Pierre and Miquelon</option><option value="212">Sudan</option><option value="213">Suriname</option><option value="214">Svalbard and Jan Mayen Islands</option><option value="215">Swaziland</option><option value="74">Sweden</option><option value="5">Switzerland</option><option value="216">Syria</option><option value="75">Taiwan</option><option value="217">Tajikistan</option><option value="218">Tanzania</option><option value="76">Thailand</option><option value="11">The Bahamas</option><option value="130">The Gambia</option><option value="219">Togo</option><option value="220">Tokelau</option><option value="221">Tonga</option><option value="222">Trinidad and Tobago</option><option value="223">Tunisia</option><option value="77">Turkey</option><option value="224">Turkmenistan</option><option value="225">Turks and Caicos Islands</option><option value="226">Tuvalu</option><option value="227">Uganda</option><option value="78">Ukraine</option><option value="79">United Arab Emirates</option><option value="80">United Kingdom</option><option value="81">United States minor outlying islands</option><option value="1">United States of America</option><option value="232">United States Virgin Islands</option><option value="82">Uruguay</option><option value="83">Uzbekistan</option><option value="228">Vanuatu</option><option value="229">Vatican (Holy Sea)</option><option value="84">Venezuela</option><option value="230">Vietnam</option><option value="231">Virgin Islands (British)</option><option value="233">Wallis and Futuna Islands</option><option value="234">Western Sahara</option><option value="235">Yemen</option><option value="236">Zambia</option><option value="237">Zimbabwe</option>
                                    </select>
                                </div>                                                        
                                
                            </div>   
                            <div className="col-lg-6 col-12 col-sm-12 mb-3 mt-3 text-start">
                                <div className="form-check form-check-inline me-3">
                                    <input type="radio" className="form-check-input" id="Available" name="example" value="customEx"/>
                                    <label className="form-check-label" for="Available"><b>Parking Available</b>    </label>
                                </div>
                                <div className="form-check form-check-inline ms-2">
                                    <input type="radio" className="form-check-input" id="Unavailable" name="example" value="customEx"/>
                                    <label className="form-check-label" for="Unavailable"><b>Parking Unavailable</b></label>
                                </div>
                            </div>                                                                         
                            <div className="mb-5 col-md-12 text-center">  
                                <hr className="m-0 mb-2"/>                               
                                <button value="Submit" className="btn btn-primary clickmode me-1" data-show=".workshow,.hvr" data-hide=".work_edit"><b>Save -&gt;</b></button>
                                <button className="btn btn-outline-danger clickmode"data-show=".workshow,.hvr" data-hide=".work_edit"><b> Cancel</b></button>
                            </div>                                                                            
                                                                    
                        </div>   
                </div>
            </div>
        </div>

        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".contact_ondedit" data-hide=".contact_ond">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Contact Address</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0"><path d="M13 4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V11H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v6.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h6.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V4.5z"></path></svg>
            </div>
        </a>
        <div className="contact_ond ddnone">
            <div className="css-es7v8c d-flex justify-content-between align-items-top">
                <div className="css-ra8ckx text-start d-block">
                    <div class="row justify-content-center align-items-top">
                        <div className="col-lg-6">   
                            <h4 className="col-grey m-0 p-0">Address Line</h4>
                            <p className="mb-2"> <span className="col-black">Flat 1 St. Lawrence House</span> </p>

                            <h4 className="col-grey m-0 p-0">City &amp; County </h4>
                            <p className="mb-2"> <span className="col-black"><span id="lblcontactcity"> Birmingham</span>, <span id="lblcontactcountry"> West Midlands</span></span> </p>

                            <h4 className="col-grey m-0 p-0"> Email</h4>
                            <p className="mb-2"> <span className="col-black">daniel.cook@gmail.com </span> </p>
                        </div>                       
                    
                        <div className="col-lg-6">                            
                            <h4 className="col-grey m-0 p-0"> Postcode</h4>
                            <p className="mb-2"> <span className="col-black">b169nx</span> </p>                                                       
                        </div>
                    </div>
                </div>
                <a class="css-3rgpo7 clickmode" href="javascript:void(0);"data-show=".contact_ondedit" data-hide=".contact_ond">
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0">
                        <path
                            d="M20.706 7.042a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zm-2.898 2.9l-9.705 9.71a.5.5 0 01-.218.128l-4.246 1.2a.5.5 0 01-.618-.616l1.209-4.24a.5.5 0 01.127-.216l9.7-9.716 3.75 3.75z"
                        ></path>
                    </svg>
                </a>

            </div>
        </div>
        <div className="contact_ondedit ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">                               
                    
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-6">                                                             
                                <div className="group_lead">
                                    <input type="text" id="" className="input_text bglightblu" required="required"/>
                                    <label for="" className="lablefilled">  Name</label>                                                                                           
                                </div>                                       
                            </div>    
                            <div className="col-12 col-sm-12 col-lg-6">         
                                <div className="group_lead">
                                    <input type="text" id="txtcity2" className="input_text bglightblu" required="required"/>
                                    <label for="Address2" className="lablefilled"> Address </label>
                                </div>
                            </div>    
                            <div className="col-12 col-sm-12 col-lg-6">   
                                <div className="group_lead">
                                    <input type="text" id="txtcity2" className="input_text bglightblu" required="required"/>
                                    <label for="txtcity2" className="lablefilled"> Town / City</label>
                                </div>
                            </div>    
                            <div className="col-12 col-sm-12 col-lg-6">    
                                <div className="group_lead">
                                    <input type="text" id="txtstate2" className="input_text bglightblu" required="required"/>
                                    <label for="txtstate2" className="lablefilled"> State</label>
                                </div>
                            </div>    
                            <div className="col-12 col-sm-12 col-lg-6">    
                                <div className="group_lead">
                                    <input type="text" id="txtzip2" className="input_text bglightblu" required="required"/>
                                    <label for="txtzip2" className="lablefilled"> Zip Code</label>
                                </div>
                            </div>    
                            <div className="col-12 col-sm-12 col-lg-6">    
                                <div className="group_lead">
                                        <select id="txtCountry2" className="custom-select select_f bglightblu " required="required"><option value="">Country</option><option value="86">Afghanistan</option><option value="87">Albania</option><option value="88">Algeria</option><option value="89">American Samoa</option><option value="90">Andorra</option><option value="91">Angola</option><option value="92">Anguilla</option><option value="93">Antarctica</option><option value="94">Antigua and Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="8">Aruba</option><option value="9">Australia</option><option value="4">Austria</option><option value="10">Azerbaijan</option><option value="95">Bahrain</option><option value="12">Bangladesh</option><option value="96">Barbados</option><option value="13">Belarus</option><option value="14">Belgium</option><option value="15">Belize</option><option value="97">Benin</option><option value="16">Bermuda</option><option value="98">Bhutan</option><option value="17">Bolivia</option><option value="18">Bosnia and Herzegovina</option><option value="99">Botswana</option><option value="100">Bouvet Island</option><option value="19">Brazil</option><option value="101">British Indian Ocean Territory</option><option value="102">Brunei</option><option value="20">Bulgaria</option><option value="103">Burkina Faso</option><option value="104">Burundi</option><option value="105">Cambodia</option><option value="106">Cameroon</option><option value="2">Canada</option><option value="107">Cape Verde</option><option value="21">Cayman Islands</option><option value="108">Central African Republic</option><option value="109">Chad</option><option value="22">Chile</option><option value="23">China</option><option value="110">Christmas Island</option><option value="111">Cocos (Keeling) Islands</option><option value="24">Colombia</option><option value="112">Comoros</option><option value="113">Congo (Brazzaville)</option><option value="114">Cook Islands</option><option value="25">Costa Rica</option><option value="26">Croatia</option><option value="27">Cuba</option><option value="28">Cyprus</option><option value="29">Czech Republic</option><option value="30">Denmark</option><option value="116">Djibouti</option><option value="117">Dominica</option><option value="31">Dominican Republic</option><option value="32">Ecuador</option><option value="33">Egypt</option><option value="118">El Salvador</option><option value="119">Equatorial Guinea</option><option value="120">Eritrea</option><option value="121">Estonia</option><option value="122">Ethiopia</option><option value="123">Falkland Islands</option><option value="124">Faroe Islands</option><option value="170">Federated States of Micronesia</option><option value="125">Fiji</option><option value="34">Finland</option><option value="35">France</option><option value="126">French Guiana</option><option value="127">French Polynesia</option><option value="128">French Southern Territories</option><option value="129">Gabon</option><option value="36">Georgia</option><option value="3">Germany</option><option value="131">Ghana</option><option value="37">Gibraltar</option><option value="38">Greece</option><option value="132">Greenland</option><option value="133">Grenada</option><option value="134">Guadeloupe</option><option value="135">Guam</option><option value="39">Guatemala</option><option value="136">Guinea</option><option value="137">Guinea Bissau</option><option value="138">Guyana</option><option value="139">Haiti</option><option value="140">Heard and Mc Donald Islands</option><option value="141">Honduras</option><option value="40">Hong Kong S.A.R.</option><option value="41">Hungary</option><option value="142">Iceland</option><option value="42">India</option><option value="43">Indonesia</option><option value="143">Iran</option><option value="144">Iraq</option><option value="44">Ireland</option><option value="46">Italy</option><option value="115">Ivory Coast</option><option value="47">Jamaica</option><option value="48">Japan</option><option value="49">Jordan</option><option value="50">Kazakhstan</option><option value="145">Kenya</option><option value="146">Kiribati</option><option value="52">Kuwait</option><option value="148">Kyrgyzstan</option><option value="149">Laos</option><option value="150">Latvia</option><option value="151">Lebanon</option><option value="152">Lesotho</option><option value="153">Liberia</option><option value="154">Libya</option><option value="155">Liechtenstein</option><option value="156">Lithuania</option><option value="157">Luxembourg</option><option value="158">Macau S.A.R</option><option value="159">Macedonia</option><option value="160">Madagascar</option><option value="161">Malawi</option><option value="53">Malaysia</option><option value="162">Maldives</option><option value="163">Mali</option><option value="164">Malta</option><option value="165">Marshall Islands</option><option value="166">Martinique</option><option value="167">Mauritania</option><option value="168">Mauritius</option><option value="169">Mayotte</option><option value="54">Mexico</option><option value="171">Moldova</option><option value="172">Monaco</option><option value="173">Mongolia</option><option value="174">Montenegro</option><option value="175">Montserrat</option><option value="176">Morocco</option><option value="177">Mozambique</option><option value="178">Myanmar</option><option value="179">Namibia</option><option value="180">Nauru</option><option value="181">Nepal</option><option value="55">Netherlands</option><option value="182">Netherlands Antilles</option><option value="183">New Caledonia</option><option value="56">New Zealand</option><option value="184">Nicaragua</option><option value="185">Niger</option><option value="186">Nigeria</option><option value="187">Niue</option><option value="188">Norfolk Island</option><option value="51">North Korea</option><option value="189">Northern Mariana Islands</option><option value="57">Norway</option><option value="190">Oman</option><option value="58">Pakistan</option><option value="191">Palau</option><option value="192">Panama</option><option value="193">Papua New Guinea</option><option value="59">Paraguay</option><option value="60">Peru</option><option value="61">Philippines</option><option value="194">Pitcairn</option><option value="62">Poland</option><option value="63">Portugal</option><option value="64">Puerto Rico</option><option value="65">Qatar</option><option value="195">Reunion</option><option value="66">Romania</option><option value="67">Russia</option><option value="196">Rwanda</option><option value="197">Saint Kitts and Nevis</option><option value="198">Saint Lucia</option><option value="199">Saint Vincent and the Grenadines</option><option value="200">Samoa</option><option value="201">San Marino</option><option value="202">Sao Tome and Principe</option><option value="68">Saudi Arabia</option><option value="203">Senegal</option><option value="85">Serbia</option><option value="204">Seychelles</option><option value="205">Sierra Leone</option><option value="69">Singapore</option><option value="70">Slovakia</option><option value="71">Slovenia</option><option value="206">Solomon Islands</option><option value="207">Somalia</option><option value="72">South Africa</option><option value="208">South Georgia and the Islands</option><option value="147">South Korea</option><option value="73">Spain</option><option value="209">Sri Lanka</option><option value="210">St. Helena</option><option value="211">St. Pierre and Miquelon</option><option value="212">Sudan</option><option value="213">Suriname</option><option value="214">Svalbard and Jan Mayen Islands</option><option value="215">Swaziland</option><option value="74">Sweden</option><option value="5">Switzerland</option><option value="216">Syria</option><option value="75">Taiwan</option><option value="217">Tajikistan</option><option value="218">Tanzania</option><option value="76">Thailand</option><option value="11">The Bahamas</option><option value="130">The Gambia</option><option value="219">Togo</option><option value="220">Tokelau</option><option value="221">Tonga</option><option value="222">Trinidad and Tobago</option><option value="223">Tunisia</option><option value="77">Turkey</option><option value="224">Turkmenistan</option><option value="225">Turks and Caicos Islands</option><option value="226">Tuvalu</option><option value="227">Uganda</option><option value="78">Ukraine</option><option value="79">United Arab Emirates</option><option value="80">United Kingdom</option><option value="81">United States minor outlying islands</option><option value="1">United States of America</option><option value="232">United States Virgin Islands</option><option value="82">Uruguay</option><option value="83">Uzbekistan</option><option value="228">Vanuatu</option><option value="229">Vatican (Holy Sea)</option><option value="84">Venezuela</option><option value="230">Vietnam</option><option value="231">Virgin Islands (British)</option><option value="233">Wallis and Futuna Islands</option><option value="234">Western Sahara</option><option value="235">Yemen</option><option value="236">Zambia</option><option value="237">Zimbabwe</option>
                                    </select>
                                </div> 
                            </div>   
                                                                                                    
                            <div className="mb-5 col-md-12 text-center">  
                                <hr className="m-0 mb-2"/>                               
                                <button value="Submit" className="btn btn-primary clickmode"data-hide=".contact_ondedit" data-show=".contact_ond"><b>Save -&gt;</b></button>
                                <button className="btn btn-outline-danger clickmode"data-hide=".contact_ondedit" data-show=".contact_ond"><b> Cancel</b></button>
                            </div>                                                                            
                                                                    
                        </div>
  
                </div>
            </div>
        </div>

        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".work_p">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Work History</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                    <path
                        d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                    ></path>
                </svg>
            </div>
        </a>
        <div className="work_p ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">                               
                    
                    <div className="table-responsive clearfix">
                        <table className="table-bordered table">
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
                                    
                                    <td>1</td>
                                    <td>
                                        <span>
                                            <b>DG</b>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="col-brown">City hospital</span>
                                    </td>
                                    <td>
                                        <span className="col-grey">16/11/2018</span>
                                    </td>
                                    <td>
                                        <span className="col-blue">30/11/2018</span>
                                    </td>
                                    <td>
                                        <a className="btn btn-outline-primary btn-sm me-1">
                                            <i className="zmdi zmdi-edit"></i>
                                        </a>
                                        <a className="btn btn-outline-danger btn-sm">
                                            <i className="zmdi zmdi-delete"></i>
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
                                        <span className="col-brown">New Cross Hospital, Wolverhampton</span>
                                    </td>
                                    <td>
                                        <span className="col-grey">16/11/2018</span>
                                    </td>
                                    <td>
                                        <span className="col-blue">30/11/2018</span>
                                    </td>
                                    <td>
                                        <a className="btn btn-outline-primary btn-sm me-1">
                                            <i className="zmdi zmdi-edit"></i>
                                        </a>
                                        <a className="btn btn-outline-danger btn-sm">
                                            <i className="zmdi zmdi-delete"></i>
                                        </a>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
  
                </div>
            </div>
        </div>



        
        <a className="css-es7v8c clickmode" href="javascript:void(0);"data-hide=".proffessional"   data-show=".proffessional_edit">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Professional Qualification</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0"><path d="M13 4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V11H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v6.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h6.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V4.5z"></path></svg>
            </div>
        </a>

        <div className="proffessional_edit ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">                               
                    
                    
                        <div className="table-responsive clearfix">
                            <table className="table-bordered table">
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
                                            <input className="form-control" placeholder="Date Received"/>
                                        </td>
                                        <td>
                                            <input className="form-control col-blue" placeholder="Qualification"/>
                                        </td>
                                        <td>
                                            <input className="form-control col-grey" placeholder="Instution"/>
                                        </td>
                                        <td>
                                            <a className="btn btn-outline-primary me-1 clickmode" data-show=".proffessional"  data-hide=".proffessional_edit"> Save</a>
                                            <a className="btn btn-outline-danger clickmode"data-hide=".proffessional, .proffessional_edit">
                                                <i className="zmdi zmdi-delete"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    
  
                </div>
            </div>
        </div>
        <div className="proffessional ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">  
                    <div className="table-responsive clearfix">
                            <table className="table-bordered table">
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
                                        
                                        <td data-field='name'className="form-control none_border" placeholder='Enter Profile type'></td>
                                        <td data-field='name'className="form-control none_border" placeholder='Enter Profile type'></td>
                                        <td data-field='name'v placeholder='Enter Profile type'></td>
                                        <td data-field='name'className="form-control none_border" placeholder='Enter Profile type'></td>
                                        
                                        <td>
                                            <a className="btn btn-outline-primary btn-sm me-1">
                                                <i className="zmdi zmdi-save"></i>
                                            </a>
                                            <a className="btn btn-outline-danger btn-sm">
                                                <i className="zmdi zmdi-delete"></i>
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
                                            <span className="text-blue">Qualification</span>
                                        </td>
                                        <td>
                                            <span className="col-grey">Instution</span>
                                        </td>
                                        <td>
                                            <a className="btn btn-outline-primary btn-sm edithover">
                                                <i className="zmdi zmdi-edit"></i>
                                            </a>
                                            <a className="btn btn-outline-danger btn-sm">
                                                <i className="zmdi zmdi-delete"></i>
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
                                            <span className="text-blue">Qualification</span>
                                        </td>
                                        <td>
                                            <span className="col-grey">Instution</span>
                                        </td>
                                        <td>
                                            <a className="btn btn-outline-primary btn-sm me-1">
                                                <i className="zmdi zmdi-edit"></i>
                                            </a>
                                            <a className="btn btn-outline-danger btn-sm">
                                                <i className="zmdi zmdi-delete"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>

        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".JB">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Job preferences</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                    <path
                        d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                    ></path>
                </svg>
            </div>
        </a>

        <div className="JB ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block text-start">  
                    <span className="badge badge-primary me-1">Face 2 Face</span>
                    <span className="badge badge-primary me-1">On Call</span>
                    <span className="badge badge-primary">Online</span>
                </div>
            </div>
        </div>


        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".itsystem">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> IT System</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                    <path
                        d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                    ></path>
                </svg>
            </div>
        </a>

        <div className="itsystem ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block text-start">  
                    <div id="lblitsystem">
                        <span className="badge badge-light  me-1">Adastra</span>
                        <span className="badge badge-light  me-1">DGL</span>
                        <span className="badge badge-light  me-1">EMIS LV</span>
                        <span className="badge badge-light  me-1">EMIS web</span>
                        <span className="badge badge-light me-1">Microtest</span>
                        <span className="badge badge-light me-1">SystmOne</span>
                        <span className="badge badge-light me-1">Vision</span>
                    </div>
                </div>
            </div>
        </div>



        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".Language_E">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Language</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                    <path
                        d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                    ></path>
                </svg>
            </div>
        </a>

        <div className="Language ddnone">
            <div className="css-es7v8c d-flex justify-content-between align-items-top">
                <div className="css-ra8ckx text-start d-block">
                    <div id="lbllanguages" className="langshow text-start">
                        <span className="badge badge-info me-1">Afrikaans</span>
                        <span className="badge badge-info me-1">Argentinian</span>
                        <span className="badge badge-info me-1">Basque</span>
                        <span className="badge badge-info me-1">Catalan</span>
                        <span className="badge badge-info me-1">Dutch</span>
                        <span className="badge badge-info me-1">English</span>
                        <span className="badge badge-info me-1">Finnish</span>
                        <span className="badge badge-info  me-1">French</span>
                    </div>
                </div>
                <a class="css-3rgpo7 clickmode" href="javascript:void(0);" data-hide=".Language" data-show=".Language_E">
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="css-1f4rn1b eac13zx0">
                        <path
                            d="M20.706 7.042a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zm-2.898 2.9l-9.705 9.71a.5.5 0 01-.218.128l-4.246 1.2a.5.5 0 01-.618-.616l1.209-4.24a.5.5 0 01.127-.216l9.7-9.716 3.75 3.75z"
                        ></path>
                    </svg>
                </a>

            </div>
        </div>
        <div className="Language_E ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block">                               
                    <div className="row mt-3 clearfix text-start">
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Adastra" type="checkbox"/>
                                <label for="Adastra">
                                    Adastra
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="DGL" type="checkbox"/>
                                <label for="DGL">
                                    DGL
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Docman" type="checkbox"/>
                                <label for="Docman">
                                    Docman
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="EDISSYSTEM" type="checkbox"/>
                                <label for="EDISSYSTEM">
                                    EDIS - A&amp;E SYSTEM
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="EMIS-LV" type="checkbox"/>
                                <label for="EMIS-LV">
                                    EMIS LV
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="EMIS-PCS" type="checkbox"/>
                                <label for="EMIS-PCS">
                                    EMIS PCS
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="EMISweb" type="checkbox"/>
                                <label for="EMISweb">
                                    EMIS web
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Frontdesk" type="checkbox"/>
                                <label for="Frontdesk">
                                    Frontdesk
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Infoslex" type="checkbox"/>
                                <label for="Infoslex">
                                    Infoslex
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Microtest" type="checkbox"/>
                                <label for="Microtest">
                                    Microtest
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Premiere" type="checkbox"/>
                                <label for="Premiere">
                                    Premiere
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Synergy" type="checkbox"/>
                                <label for="Synergy">
                                    Synergy
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="SystmOne" type="checkbox"/>
                                <label for="SystmOne">
                                    SystmOne
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Torex" type="checkbox"/>
                                <label for="Torex">
                                    Torex
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkbox">
                                <input id="Vision" type="checkbox"/>
                                <label for="Vision">
                                    Vision
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="text-center mt-3 mb-2"> 
                        <hr/>                                                                                 
                        <button value="Submit" className="btn btn-primary me-1 btn-sm clickmode" data-show=".Language" data-hide=".Language_E"><b>Save -&gt;</b></button>
                        <button className="btn btn-outline-danger btn-sm  clickmode"  data-show=".Language" data-hide=".Language_E"><b> Cancel</b></button>
                    </div> 
                </div>
            </div>
        </div>

        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".Additional">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Additional Experience</h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                    <path
                        d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                    ></path>
                </svg>
            </div>
        </a>
        <div className="Additional ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block text-start">  
                    <div class="table-responsive clearfix">
                        <table class="table table-bordered" id="editableTable">
                            <thead>
                                <tr style={{cursor:"pointer"}}>
                                    <th style={{width:"28px"}}>SN.</th>
                                    <th>Experience</th>
                                    <th>Completed</th>
                                    <th>--</th>
                                </tr>
                            </thead>
                            <tbody id="tblexperience">
                                {/* <tr style={{cursor:"pointer"}}>
                                    <td className="form-control none_border" placeholder="Enter Profile Type"></td>
                                    <td className="form-control none_border" placeholder="Enter Profile Type"></td>
                                    <td className="form-control none_border" placeholder="Enter Profile Type"></td>
                                    <td>
                                        <a class="btn btn-outline-primary btn-sm me-1">
                                            <i class="zmdi zmdi-save"></i>
                                        </a>
                                        <a class="btn btn-outline-danger btn-sm">
                                            <i class="zmdi zmdi-delete"></i>
                                        </a>
                                    </td>
                                </tr> */}
                                <tr style={{cursor:"pointer"}}>
                                    <td>1</td>
                                    <td>
                                        <span class="col-blue"> EXPERIENCE-111888</span>
                                    </td>
                                    <td>
                                        <span class="col-grey">
                                            <b>Experience-1 </b> Completed by candidate</span>
                                    </td>
                                    <td>
                                        <a class="btn btn-outline-primary btn-sm me-1">
                                            <i class="zmdi zmdi-edit"></i>
                                        </a>
                                        <a class="btn btn-outline-danger btn-sm">
                                            <i class="zmdi zmdi-delete"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr style={{cursor:"pointer"}}>
                                    <td>2</td>
                                    <td>
                                        <span class="col-blue"> EXPERIENCE-18</span>
                                    </td>
                                    <td>
                                        <span class="col-grey">
                                            <b>Experience-8 </b> Completed by candidate</span>
                                    </td>
                                    <td>
                                        <a class="btn btn-outline-primary btn-sm me-1">
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
        </div>


        <a className="css-es7v8c clickmode" href="javascript:void(0);"  data-show=".notification">
            <div className="css-ra8ckx">
                <div className="css-1waj6v4">
                    <h3 className="css-tixvpt"> Set notification preferences for Jobs,Invoices and Newsletters/Promotions </h3>
                    <span className="css-jcj5hu">Highlight your  Personal Statement.</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="css-169u4i0">
                    <path
                        d="M9.888 5.998a.506.506 0 00-.716-.008l-.707.707a.506.506 0 00.01.716L13.06 12l-4.587 4.587c-.2.2-.204.521-.009.716l.707.707a.507.507 0 00.717-.009l5.647-5.648c.1-.1.148-.233.144-.366a.492.492 0 00-.144-.34v-.001a.611.611 0 00-.009-.009L9.888 5.998z"
                    ></path>
                </svg>
            </div>
        </a>
        <div className="notification ddnone">
            <div className="css-es7v8c">
                <div className="css-ra8ckx d-block text-start">                               
            <p><b>Jobs Notifications</b>
                <span className="col-grey">(Related to all Applied / Booked jobs)</span>
            </p>
<ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="checkbox mb-0">
            <input id="j-email" type="checkbox"/>
            <label for="j-email">
                Email
            </label>
        </div>
        <div className="checkbox mb-0">
            <input id="j-sma" type="checkbox"/>
            <label for="j-sma">
                SMS
            </label>
        </div>
        <div className="checkbox mb-0">
            <input id="j-mapp" type="checkbox"/>
            <label for="j-mapp" className="col-brown">
                Mobile App
            </label>
        </div>
    </li>
</ul>
<p className="mb-2 mt-3">
    <b>Payments / Remittance Advices</b>
    <span className="col-grey"></span>
</p>
<ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="checkbox mb-0">
            <input id="g-email" type="checkbox"/>
            <label for="g-email">
                Email
            </label>
        </div>
        <div className="checkbox mb-0">
            <input id="g-sma" type="checkbox"/>
            <label for="g-sma">
                SMS
            </label>
        </div>
        <div className="checkbox mb-0">
            <input id="g-mapp" type="checkbox"/>
            <label for="g-mapp" className="col-brown">
                Mobile App
            </label>
        </div>
    </li>
</ul>
<p className="mb-2 mt-3">
    <b> General Newsletters/Promotions </b>
    <span className="col-grey"> (Related to New Jobs matching with your profile and other promotions)</span>
</p>
<ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="checkbox mb-0">
            <input id="p-email" type="checkbox"/>
            <label for="p-email">
                Email
            </label>
        </div>
        <div className="checkbox mb-0">
            <input id="p-sma" type="checkbox"/>
            <label for="p-sma">
                SMS
            </label>
        </div>
        <div className="checkbox mb-0">
            <input id="p-mapp" type="checkbox"/>
            <label for="p-mapp" className="col-brown">
                Mobile App
            </label>
        </div>
    </li>
</ul>

<div className="col-lg-12 col-md-12 col-sm-12 mt-3">
    <div className="checkbox mb-0">
        <input id="t-agree" type="checkbox"/>
        <label for="t-agree">
            I agree with Terms & Conditions
        </label>
    </div>
    <br/>
    <div className="checkbox mb-0">
        <input id="p-agree" type="checkbox"/>
        <label for="p-agree">
            I agree to this Privacy Policy
        </label>
    </div>
    <div className="text-center">
            <hr/>
            <button type="submit" className="btn btn-primary me-1"> Update</button>
            <button type="submit" className="btn btn-outline-danger"> Cancel </button>
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
