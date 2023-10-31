"use client"
import Loading from '@/app/components/Loading';

import { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';
import { getData } from '../../services/apiservice';
import ApiEndPoints from "../../utils/ApiEndPoints";
import Account from './Account'
import Business from './Business'
import Users from './Users'
import LogoAndTheme from './LogoAndTheme'
import EmailNotifications from './EmailNotifications'
import EmailTemplates from './EmailTemplates'
import Security from './Security'



import Image from 'next/image'

function Main() {    
    const [accountData, setAccount] = useState([]);    
    useEffect(() => {        
        getAccount();   
    }, []);

    const getAccount = async () => {
        var offset = 0;
        var params = {"action":"account-info","action_on":"organization","request_for":"get","route":"Settings/GeneralInformation"};
        const lang = getCookie('signin_token');
        const response = await getData(params, lang, ApiEndPoints.organizationApi);
         const obj =response;
        if (obj.response_status === "OK")
        
        { 

            setAccount(obj.data.response[0].account_info);
            
        }        

    }   
    
return (
<>
    <section className="content">
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="p-2">
                        <h2 className="font-bold mb-0">Settings </h2>
                    </div>                   
                </div>
            </div>
          
            <div className="scroll_bar">
            <div className="p-4 text-center" style={{background:"#f2f2fa"}}>
            <div className="avatar-upload mt-1" style={{maxWidth:"100px"}}>
                    <div className="avatar-edit">
                        <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                        <label for="imageUpload"></label>
                    </div>
                    <div className="avatar-preview">
                        <div className="proTitle" id="imagePreview" style={{backgroundColor:"#eee"}}>LD</div>
                    </div>
                </div>
                {accountData && accountData.length > 0 && accountData.map((item, i) => (
                <h2 className="font-weight-bold mt-3 mb-0"key={i}>  {item.account_name}  </h2> 
                ))}                 
            </div>  
                <div className="booktab d-flex justify-content-center align-items-center bdrbtm">
                    <div className="">
                        <ul className="nav nav-tabs nav-justified p-0">
                            <li className="nav-item">
                                <a className="nav-link padnav font-16 clickmode active" data-show=".account"
                                    data-hide=".invoice,.users,.business,.theme,.notifications,.templates,.security" href="javascript:void(0);"><i
                                        className="zmdi zmdi-account"></i>
                                    <span className="d-none_small"> Account </span> </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".invoice,.users,.account,.theme,.notifications,.templates,.security"
                                    data-show=".business" href="javascript:void(0);"><i className="zmdi zmdi-case-check"></i>
                                    <span className="d-none_small"> Business </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".invoice,.account,.business,.theme,.notifications,.templates,.security"
                                    data-show=".users" href="javascript:void(0);"><i className="zmdi zmdi-account-box-mail"></i>
                                    <span className="d-none_small"> Users </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".users,.account,.business,.theme,.notifications,.templates,.security"
                                    data-show=".invoice" href="javascript:void(0);"><i className="zmdi zmdi-account-box-mail"></i>
                                    <span className="d-none_small"> Invoice </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".invoice,.users,.account,.business,.notifications,.templates,.security"
                                    data-show=".theme" href="javascript:void(0);"><i className="zmdi zmdi-widgets"></i>
                                    <span className="d-none_small"> Logo & Theme </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".invoice,.users,.account,.theme,.business,.templates,.security"
                                    data-show=".notifications" href="javascript:void(0);"><i className="zmdi zmdi-notifications"></i>
                                    <span className="d-none_small"> Email Notifications </span> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".invoice,.users,.account,.theme,.notifications,.business,.security"
                                    data-show=".templates" href="javascript:void(0);"><i className="zmdi zmdi-email"></i>
                                    <span className="d-none_small"> Email Templates </span> </a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link padnav font-16  clickmode" data-hide=".invoice,.users,.account,.theme,.business,.notifications,.templates"
                                    data-show=".security" href="javascript:void(0);"><i className="zmdi zmdi-shield-check"></i>
                                    <span className="d-none_small"> Security </span> </a>
                            </li>                            
                        </ul>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-12 mt-3 lb">
                            <div className='account p-3'>
                               <Account accountData={accountData} />
                            </div>
                            <div className='business pe-3 pb-4 dd_none'>
                               <Business />
                            </div>
                            <div className='users p-0 dd_none'>
                                <Users/>
                            </div>
                            <div className='theme p-0 dd_none'>
                                <LogoAndTheme/>
                            </div>
                            <div className='notifications abbs p-4 dd_none'>
                               <EmailNotifications/>
                            </div>
                            <div className='templates abbs p-4 dd_none'>
                                <EmailTemplates/>
                            </div>
                            <div className='security abbs p-4 dd_none'>
                               <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                    <Security/>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="modal right-quater md-one" id="two-step" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header bg-blu-lite fixed-top">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title" id="myModalLabel2">
                        <b> <i className="zmdi zmdi-shield-security"></i> Turn on two-step authentication</b>
                    </h4>
                </div>
                <div className="modal-body pr-0 pl-0 pb-0 contbody">  
                    <div className="p-3">                                            
                        <p><b>Select an authentication methd for your account.</b></p>
                        <hr/>
                        <div className="form-check">
                            <input type="radio" id="customRadio1" name="customRadio" className="form-check-input"style={{height:'1em'}}/>
                            <label className="form-check-label" for="customRadio1">
                                <h4 className="mb-0"><strong>Authenticator app</strong></h4>
                                <p className="mb-0">Use an app to generate an authentication code when you log in.</p>
                            </label>
                        </div>
                            <hr/>
                        <div className="form-check">
                            <input type="radio" id="customRadio2" name="customRadio" className="form-check-input"style={{height:'1em'}}/>
                            <label className="form-check-label" for="customRadio2">
                                <h4 className="mb-0"><strong>Security key</strong></h4>
                                <p className="mb-0">Use a compatible security key like a fingerprint reader or USB key when you log in.</p>
                            </label>
                        </div>
                            <hr/>
                        <div className="form-check ">
                            <input type="radio" id="customRadio3" name="customRadio" className="form-check-input"style={{height:'1em'}}/>
                            <label className="form-check-label" for="customRadio3">
                                <h4 className="mb-0"><strong>SMS delivery</strong></h4>
                                <p className="mb-0">Receive an SMS/text message with an authentication code when you log in.</p>
                            </label>
                        </div>                       
                    </div>
                </div>
                <div className="model-footer">
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="text-center">
                                <button className="btn btn-primary clickmode me-1" data-show="." data-hide="" type="button"> <i className="zmdi zmdi-upload"></i> Save </button>
                                <button className="btn btn-danger" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
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