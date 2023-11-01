"use client"
import React from 'react'
import Link from "next/link";
import { useState ,useEffect } from 'react';
import { getUserList } from "../../services/dropdownServices";
import ApiEndPoints from "../../utils/ApiEndPoints";
import { getCookie } from 'cookies-next';
import { getData } from '../../services/apiservice';

function Main() {
    //#region Variables

    const [leads, setLeads] = useState([]);
    const [opportunities, setOpportunities] = useState([]);
    const [industry_info, setIndustry_info] = useState([]);    
    const [activities, setActivities] = useState([]);  

    //#endregion
   
    //#region Function Call
    useEffect(() => {      
        getDashboard();
    }, []);

    const getDashboard = async () => {
        var params = { "action": "dashboard", "action_on": "organization", "request_for": "get", "route": "dashboard/Index" };
        const lang = getCookie('signin_token');
        const response = await getData(params, lang, ApiEndPoints.dashboard);
        const obj = response;
        if (obj.response_status === "OK") {
            setLeads(obj.data.response[5].lead_info[0]);
            setOpportunities(obj.data.response[1].opp_info);
            setActivities(obj.data.response[2].activity_info);
            setIndustry_info(obj.data.response[3].industry_info);
        }
    }    
    //#endregion
    
    return (
        <section className="content">
            <div className="body_scroll">
                <div className="scrolfx">
                    <div style={{ paddingTop: "12px", paddingLeft:'20px' }} className="booktab d-flex justify-content-between align-items-center bdrb">
                        <div className="pt-3 pl-3 pb-3 ml-2">
                            <h2 className="font-bold"><i className="zmdi zmdi-view-dashboard mr-1"></i>Dashboard </h2>
                        </div>
                    
                    </div>
                </div>
                <div className="contactlist scroll_bar">
                    <div className="container-fluid">
                        <div className="row mt-3">
                            {/* Top Opportunities */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                <div className="card bdr5 mb-1">
                                    <div className="header pt-2 pl-2">
                                        <h2 className="col-black"><i className="ti ti-stats-up"></i> Top Opportunities</h2>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-sm-6 col-xl-6 items pr-0">
                                        <div className="card bdr5 mt-0">

                                            <div className="header">
                                                <h2><i className="zmdi zmdi-view-dashboard"></i> Leads<br /><small>Unread Lead</small> </h2>
                                                <ul className="header-dropdown">
                                                    <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="j#">Action</a></li>
                                                            <li><a href="#">Another action</a></li>
                                                            <li><a href="#">Something else</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="body pt-1 pb-2">
                                                <div className="icon-small">
                                                    <div className="w_icon cyan">{leads.total_leads}</div><h4>Leads</h4>
                                                </div>
                                                <div className="state_w1 mb-1 mt-1 ml-3">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h4 className="mt-1"><span className="badge badge-info mr-1 font-15 bold"> {leads.total_unread_leads} </span> <span className="font-15"> Unread Leads</span> </h4>
                                                        </div>
                                                        <div>
                                                        <Link href={"/opportunities"} className="btn btn-brimary float-right text-right font-14 btnnn mt-2">
                                                           View →
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-xl-6 items pl-1">
                                        <div className="card bdr5 mt-0">
                                            <div className="header">
                                                <h2><i className="zmdi zmdi-view-dashboard"></i> Response<br /><small>Unread Messages</small> </h2>
                                                <ul className="header-dropdown">
                                                    <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#">Action</a></li>
                                                            <li><a href="#">Another action</a></li>
                                                            <li><a href="#">Something else</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="body pt-1 pb-2">
                                                <div className="icon-small">
                                                    <div className="w_icon cyan">0</div><h4>Response</h4>

                                                </div>
                                                <div className="state_w1 mb-1 mt-1 ml-3">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h4 className="mt-1"><span className="badge badge-light mr-1 font-15 bold"> 0 </span> <span className="font-15"> Unread Messages </span> </h4>
                                                        </div>
                                                        <div>
                                                            <Link href={"/activities"} className="btn btn-brimary float-right text-right font-14 btnnn mt-2">
                                                          View →
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Opportunities by Industry */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                <div className="card bdr5 mb-1">
                                    <div className="header pt-2 pl-2">
                                        <h2 className="col-black"><i className="ti ti-layout-accordion-list"></i> Top Opportunities by Industry</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 items">
                                        <div className="card bdr5 pb-1">
                                            <div className="table-responsive">
                                                <table className="table  rwd-table btdr_none mb-0" id="sortable">
                                                    <thead>
                                                        <tr className="font_btd">
                                                            <th className="pt-3 pb-3">Industy</th>
                                                            <th>Leads</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {industry_info && industry_info.map((i_info,i)=>(
                                                        <tr key={i} className="">
                                                            <td className="pt-3 pb-3"> Not Available </td>
                                                            <td> 0 </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            {/* Recent Opportunities */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                <div className="card bdr5 mb-1">
                                    <div className="header pl-2 pt-2">
                                        <h2 className="col-black"><i className="zmdi zmdi-sign-in"></i> Recent Opportunities </h2>
                                    </div>
                                </div>
                                <div className="card bdr5">
                                    <div className="body p-0">
                                        <div className="table-responsive">
                                            <div className="table-responsive">
                                                <table className="table  rwd-table btdr_none mb-0" id="sortable">
                                                    <thead>
                                                        <tr className="font_btd">
                                                            <th className=""> Name</th>
                                                            <th> Email</th>
                                                            <th> Mobile </th>
                                                            <th> Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                         
                                                    {opportunities && opportunities.map((opp_info,i)=>(
                                                        <tr key={i} className="">
                                                            <td className="pt-3 pb-3"> {opp_info.lead_name} </td>
                                                            <td> {opp_info.lead_email} </td>
                                                            <td> {opp_info.lead_mobile} </td>
                                                            <td><span className="badge badge-pill badge-info"><b>{opp_info.lead_type_name}</b></span></td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Activities  */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                <div className="card bdr5 mb-1">
                                    <div className="header pl-2 pt-2">
                                        <h2 className="col-black"><i className="zmdi zmdi-square-down"></i> Activity </h2>
                                    </div>
                                </div>
                                <div className="card bdr5">
                                    <div className="body mb-0 p-0">
                                        <div className="body">
                                            <ul className="row list-unstyled c_review">
                                            {activities && activities.map((act_info,i)=>(
                                                <li key={i} className="col-12">
                                                    <div className="avatar">
                                                        <span className="cbptmicon">{act_info.user_name.charAt(0).toUpperCase()}</span>
                                                    </div>
                                                    <div className="comment-action">
                                                        <h6 className="c_name">{act_info.user_name}</h6>
                                                        <p className="c_msg m-b-0">${act_info.entity_type} | {act_info.entity_section} </p>
                                                        <p className="c_msg m-b-0"><span className="col-grey">${act_info.entity_type === 'LEAD' ? '#Lead no' : '#Org no'}{act_info.entity_id}-&nbsp; </span>{act_info.action_desc}</p>
                                                        <div>
                                                        <span className="badge badge-info">{act_info.action_type}
                                                            
                                                        </span>
                                                          <span className="comment-date float-sm-right" style={{marginTop:'-10px'}} >{act_info.action_date}&nbsp;{act_info.action_time}</span>

                                                  </div>
                                                    </div>
                                                </li>
                                            ))}
                                            </ul>
                                              
                                            <p className="mb-0 text-left pt-3 pl-2 mb-5">
                                                <a href="/activities" className="btn btn-brimary font-14 btnnn text-center">View →</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main

// import ApiEndPoints from '@/app/utils/ApiEndPoints';
// import { getCookie } from 'cookies-next';
// import { getData } from '@/app/services/apiservice';
// import Link from 'next/link';

// const Main = ({ data = [] }) => {
//     console.log(data);
//     return (<>
//         <section className="content">
//             {/* <div className="body_scroll">
//                 <div className="scrolfx">
//                     <div style={{ paddingTop: "12px" }} className="booktab d-flex justify-content-between align-items-center bdrb">
//                         <div className="pt-3 pl-3 pb-3">
//                             <h2 className="font-bold"><i className="zmdi zmdi-view-dashboard mr-1"></i>Dashboard </h2>
//                         </div>
//                         <div className="pagination-email">
//                             <div className="btn-group bdrr dnone-mob pr-0">
//                                 <button className="btn btn-outline-primary dropdown-toggle pr-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
//                                     <span className="col-grey mr-1">Last 7 Days</span>
//                                     <b>Jun 7 - 13,2019</b>
//                                 </button>
//                                 <div className="dropdown-menu">
//                                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#">
//                                         <i className="zmdi zmdi-calendar"></i>
//                                         <b>Jun 7 - 13,2019</b>
//                                     </a>
//                                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#">
//                                         <i className="zmdi zmdi-calendar"></i>
//                                         <b>Jun 8 - 14,2019</b>
//                                     </a>
//                                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#">
//                                         <i className="zmdi zmdi-calendar"></i>
//                                         <b>Jun 9 - 18,2019</b>
//                                     </a>
//                                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#">
//                                         <i className="zmdi zmdi-calendar"></i>
//                                         <b>Jun 10 - 19,2019</b>
//                                     </a>
//                                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#">
//                                         <i className="zmdi zmdi-calendar"></i>
//                                         <b>Jun 11 - 29,2019</b>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="contactlist scroll_bar">
//                     <div className="container-fluid">
//                         <div className="row mt-3">
//                             <div className="col-12 col-sm-12 col-md-12 col-lg-7">
//                                 <div className="card bdr5 mb-1">
//                                     <div className="header pt-2 pl-2">
//                                         <h2 className="col-black"><i className="ti ti-stats-up"></i> Top Opportunities</h2>
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-12 col-sm-6 col-xl-6 items pr-0">
//                                         <div className="card bdr5 mt-0">
//                                             <div className="header">
//                                                 <h2><i className="zmdi zmdi-view-dashboard"></i> Leads<br /><small>Unread Lead</small> </h2>
//                                                 <ul className="header-dropdown">
//                                                     <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
//                                                         <ul className="dropdown-menu dropdown-menu-right">
//                                                             <li><a href="j#">Action</a></li>
//                                                             <li><a href="#">Another action</a></li>
//                                                             <li><a href="#">Something else</a></li>
//                                                         </ul>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                             <div className="body pt-1 pb-2">
//                                                 <div className="icon-small">
//                                                     <div className="w_icon cyan">{data && data.data.response[5].lead_info[0].total_leads}</div><h4>Leads</h4>
//                                                 </div>
//                                                 <div className="state_w1 mb-1 mt-1 ml-3">
//                                                     <div className="d-flex justify-content-between">
//                                                         <div>
//                                                             <h4 className="mt-1"><span className="badge badge-info mr-1 font-15 bold"> {data && data.data.response[5].lead_info[0].total_unread_leads} </span> <span className="font-15"> Unread Leads</span> </h4>
//                                                         </div>
//                                                         <div>
//                                                         <Link href={"/opportunities"}>
//                                                             <a className="btn btn-brimary float-right text-right font-14 btnnn mt-2">View →</a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-12 col-sm-6 col-xl-6 items pl-1">
//                                         <div className="card bdr5 mt-0">
//                                             <div className="header">
//                                                 <h2><i className="zmdi zmdi-view-dashboard"></i> Response<br /><small>Unread Messages</small> </h2>
//                                                 <ul className="header-dropdown">
//                                                     <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more-vert"></i> </a>
//                                                         <ul className="dropdown-menu dropdown-menu-right">
//                                                             <li><a href="#">Action</a></li>
//                                                             <li><a href="#">Another action</a></li>
//                                                             <li><a href="#">Something else</a></li>
//                                                         </ul>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                             <div className="body pt-1 pb-2">
//                                                 <div className="icon-small">
//                                                     <div className="w_icon cyan">1</div><h4>Response</h4>

//                                                 </div>
//                                                 <div className="state_w1 mb-1 mt-1 ml-3">
//                                                     <div className="d-flex justify-content-between">
//                                                         <div>
//                                                             <h4 className="mt-1"><span className="badge badge-light mr-1 font-15 bold"> 0 </span> <span className="font-15"> Unread Messages </span> </h4>
//                                                         </div>
//                                                         <div>
//                                                             <Link href={"/activities"}>
//                                                             <a className="btn btn-brimary float-right text-right font-14 btnnn mt-2">View →</a>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className="col-12 col-sm-12 col-md-12 col-lg-5">
//                                 <div className="card bdr5 mb-1">
//                                     <div className="header pt-2 pl-2">
//                                         <h2 className="col-black"><i className="ti ti-layout-accordion-list"></i> Top Opportunities by Industry</h2>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-12 items">
//                                         <div className="card bdr5 pb-1">
//                                             <div className="table-responsive">
//                                                 <table className="table  rwd-table btdr_none mb-0" id="sortable">
//                                                     <thead>
//                                                         <tr className="font_btd">
//                                                             <th className="pt-3 pb-3">Industy</th>
//                                                             <th>Leads</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                     {data && data.data.response[3].industry_info.map((i_info,i)=>(
//                                                         <tr key={i} className="">
//                                                             <td className="pt-3 pb-3"> IT </td>
//                                                             <td> 50 </td>
//                                                         </tr>
//                                                     ))}
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-12 col-sm-12 col-md-12 col-lg-7">
//                                 <div className="card bdr5 mb-1">
//                                     <div className="header pl-2 pt-2">
//                                         <h2 className="col-black"><i className="zmdi zmdi-sign-in"></i> Recent Opportunities </h2>
//                                     </div>
//                                 </div>
//                                 <div className="card bdr5">
//                                     <div className="body p-0">
//                                         <div className="table-responsive">
//                                             <div className="table-responsive">
//                                                 <table className="table  rwd-table btdr_none mb-0" id="sortable">
//                                                     <thead>
//                                                         <tr className="font_btd">
//                                                             <th className=""> Name</th>
//                                                             <th> Email</th>
//                                                             <th> Mobile </th>
//                                                             <th> Type</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                     {data && data.data.response[1].opp_info.map((opp_info,i)=>(
//                                                         <tr key={i} className="">
//                                                             <td className="pt-3 pb-3"> {opp_info.lead_name} </td>
//                                                             <td> {opp_info.lead_email} </td>
//                                                             <td> {opp_info.lead_mobile} </td>
//                                                             <td><span className="badge badge-pill badge-info"><b>{opp_info.lead_type_name}</b></span></td>
//                                                         </tr>
//                                                     ))}
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-sm-12 col-md-12 col-lg-5">
//                                 <div className="card bdr5 mb-1">
//                                     <div className="header pl-2 pt-2">
//                                         <h2 className="col-black"><i className="zmdi zmdi-square-down"></i> Activity </h2>
//                                     </div>
//                                 </div>
//                                 <div className="card bdr5">
//                                     <div className="body mb-0 p-0">
//                                         <div className="body">
//                                             <ul className="row list-unstyled c_review">
//                                             {data && data.data.response[2].activity_info.map((act_info,i)=>(
//                                                 <li key={i} className="col-12">
//                                                     <div className="avatar">
//                                                         <span className="cbptmicon">{act_info.user_name.charAt(0).toUpperCase()}</span>
//                                                     </div>
//                                                     <div className="comment-action">
//                                                         <h6 className="c_name">{act_info.user_name}</h6>
//                                                         <p className="c_msg m-b-0">${act_info.entity_type} | {act_info.entity_section} </p>
//                                                         <p className="c_msg m-b-0"><span className="col-grey">${act_info.entity_type==='LEAD'?'#Lead no':'#Org no'}{act_info.entity_id}-&nbsp; </span>{act_info.action_desc}</p>
//                                                         <div className="badge badge-info">{act_info.action_type}</div>

//                                                         <small className="comment-date float-sm-right">{act_info.action_date}&nbsp;${act_info.action_time}</small>
//                                                     </div>
//                                                 </li>
//                                             ))}
//                                             </ul>
//                                             <p className="mb-0 text-left pt-3 pl-2">
//                                                 <a href="#" className="btn btn-brimary font-14 btnnn text-center">View →</a>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </section>
//     </>
//     )
// }


// export const getServerSideProps = async ({ req, res }) => {
//     try {
//         var params = { "action": "dashboard", "action_on": "organization", "request_for": "get", "route": "dashboard/Index" };
//         const lang = req.cookies['signin_token'];
//         console.log(req);
//         console.log(lang)
//         if((lang==="''") ||(lang===undefined)){
//             res.writeHead(302,{Location:"/login"})
//             res.end()
//         }
//         const response= await getData(params,lang,ApiEndPoints.dashboard)
//         const stringifiedData = JSON.stringify(response);
     
//         const dashData = JSON.parse(stringifiedData);
//         //   console.log(dashData);
//         return {
//             props:
//             {
//                 data: JSON.parse(dashData)
//             }         
//         }
//     } catch (err) {       
//         return {
//             props: null          
//         }
//     }
// }


// export default Main;
 