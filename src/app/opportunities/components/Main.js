"use client"
import React from 'react'
import Link from "next/link";
import { useState ,useEffect, useRef  } from 'react';
import { getUserList } from "../../services/dropdownServices";
import ApiEndPoints from "../../utils/ApiEndPoints";
import { getCookie } from 'cookies-next';
import { getData } from '../../services/apiservice';

import Loading from '@/app/components/Loading'
import Image from 'next/image';
import Details from './Details';
import Document from './Document';
import Note from './Note';
import Activity from './Activity';
import Messages from "./Messages";


    const Main = ({ data = [], pageData = [], leadTypeList = [], CategoryList = [], CountryList = [] }) => {
    const ref = useRef([]);

    const [leads, setLeads] = useState(pageData && pageData);
    const [loader, setLoader] = useState(false);
    const [user_list, setUser_list] = useState([]);
    // const [leads, setLeads] = useState([]);


    // const [loader, setLoader] = useState(false);
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contact, setContact] = useState({});
    const [lead_uid, setLead_uid] = useState();
    const [lead_activity, setLead_activity] = useState([]);
    const [lead_settings, setLead_settings] = useState([]);

    useEffect(() => {
        getUsersList();
        getLeads();
    }, []);

    const getUsersList = async () => {
        const resp = await getUserList();
        if (resp.response_status === "OK") {
            alert(resp.data.response.users);
            console.log(resp.data.response.users);
            setUser_list(resp.data.response.users)
        }
    }    

    const getLeads = async () => {
        var offset = 0;
        var params = { "leads": { "title": "0", "lead_type": "0", "lead_note": "", "status_id": "0", "from_date": "", "to_date": "", "delete_status": "0", "archieve_status": "0" }, "action": "leads", "action_on": "leads_main", "request_for": "load-more", "previous": offset, "next": 10 };
        const lang = getCookie('signin_token');
        const response = await getData(params, lang, ApiEndPoints.opportunity);
        const obj =response;// JSON.parse(response);
        console.log(obj.data.response.leads_list);
        if (obj.response_status === "OK") {          
            setLeads(obj.data.response.leads_list);
        }        
    }
    

    const loadMore = async (e) => {
        e.preventDefault();
        ns_util.replace_html_in_element("#btnLoadMore", 'Loading...<i className="fa fa-spinner fa-pulse"></i>')
        let offset = leads[leads.length - 1].ROWNUMBER;
        let total_count = leads[leads.length - 1].total_count;
        if (offset < total_count) {
            var params = { "leads": { "title": "0", "lead_type": "0", "lead_note": "", "status_id": "0", "from_date": "", "to_date": "", "delete_status": "0", "archieve_status": "0" }, "action": "leads", "action_on": "leads_main", "request_for": "load-more", "previous": offset, "next": 10 };
            const lang = getCookie('signin_token');
            const response = await getData(params, lang, ApiEndPoints.opportunity)
            setLeads([...leads, ...response.data.response.leads_list]);
        }
    }
    const trigger_click = async (i, uid) => {
        setLead_uid(uid);
        setLoading(true);
        var params = { "leads": { "u_id": uid }, "action": "leads", "action_on": "leads_main", "request_for": "select", "previous": 0, "next": 1 }
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            ns_util.remove_css_class_from_class(".nav-link", "active")
            ns_util.add_css_class("#a_general", "active")
            ns_util.remove_css_class_from_class(".opp-tab", "in active show")
            ns_util.add_css_class("#general", "in active show")
            setRes(resp.data.response)
            setContact(resp.data.response[0].leads[0]);
            setTimeout(() => {
                resp.data.response && resp.data.response.length > 0 && resp.data.response[0].leads[0].lead_settings
                    .map((section, i) => {
                        section.fields.map((field, i) => {
                            ns_util.replace_html_in_element("#" + field.field_id, 'NA')
                        })
                    })
                resp.data.response && resp.data.response.length > 0 && resp.data.response[0].leads[0].lead_details !=="" && resp.data.response[0].leads[0].lead_details.map((field, i) => {
                    if (field.field_value !== '')
                        ns_util.replace_html_in_element("#" + field.field_id, field.field_value)
                    else
                        ns_util.replace_html_in_element("#" + field.field_id, 'NA')
                })
            }, 1000);
            setLoading(false);
        }

    }
    useEffect(() => {
        setTimeout(() => {
            if (ref.current.length > 0) {
                if (ref.current[0] !== null)
                    ref.current[0].click();
            }

        }, 400);
        if (leads !== undefined) {
            if (leads.length > 0) {
                // ns_util.trigger_click("#lead_"+leads[0].u_id)
                let offset = leads[leads.length - 1].ROWNUMBER;
                let total_count = leads[leads.length - 1].total_count;
                if (offset < total_count) {
                    setLoader(false);
                    ns_util.replace_html_in_element("#btnLoadMore", "Load more")
                    ns_util.show_element("#btnLoadMore");
                }
                else {
                    setLoader(false);
                    ns_util.hide_element("#btnLoadMore");
                }
            }
        }
        else {
            setLoader(false);
        }

    }, [leads]);
    const load_activity = async () => {
        var params = { "leads": { "u_id": lead_uid }, "action": "lead-activity", "action_on": "leads_main", "request_for": "select", "previous": 0, "next": 10 }
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            setLead_activity(resp.data.response.activity_info)
        }
    }
   
    //show lead on edit modal
    const showLead = async (e) => {
        var params = { "leads": { "lead_type": $(e.target).attr('data-lead-type') }, "action": "settings", "action_on": "leads_main", "request_for": "select" }
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            setLead_settings(resp.data.response)
        }
        setTimeout(() => {
            contact && contact.lead_details.map((field, i) => {
                if (field.field_value !== '') {
                    $("#frmLeadDetails input[name=" + field.field_id + "]").val(field.field_value);
                    $("#frmLeadDetails textarea[name=" + field.field_id + "]").val(field.field_value);
                }
                else
                    $("#frmLeadDetails input[name=" + field.field_id + "]").val("");
            })
        }, 3000)
    }
    const deleteLead = async (e, lead) => {
        let u_id = $(e.target).attr('data-u_id');
        // const leadsClone=[...leads];
        // const index=leadsClone.indexOf(lead);
        // var filteredArray = leadsClone.filter(function (element) { 
        //     return element.u_id === u_id;
        // });
        // console.log(filteredArray)

        var action = $(e.target).attr("data-action"), action_on = "leads_main", RequestFor = $(e.target).attr("data-request_for");

        let strJsonString = {
            "leads": { "u_id": $(e.target).attr('data-u_id') },
            "action": action,
            "action_on": action_on,
            "request_for": RequestFor
        };
        if ($(e.target).attr('data-lead-status') == 1) { // validate active leads
            alertmsg.msg("Message", "Active lead can not be deleted.", "E");
            return false;
        }
        if (confirm("Are you sure you want to delete this lead?")) {
            if (u_id !== 0) {
                const resp = await post(strJsonString, ApiEndPoints.opportunity);
                console.log(resp)
                if (resp.response_status === "OK") {
                    setLeads(leads.filter((l) => l.u_id !== u_id))
                }
                //ns_leads.post(JSON.stringify(strJsonString), event);//calling post api here
            }
        }
    }
    const selectdateRange = () => {
        daterange();
    }
    const searchLead = async (e) => {
        console.log(e.target)
        var strJsonString = "", next = 1, previous = 0;
        var action = $(e.target).attr("data-action"), action_on = "leads_main", RequestFor = $(e.target).attr("data-request_for");
        var fromDate = "", toDate = "";
        var dateRange = $('#txt_daterange').val();
        if (dateRange != '') {
            fromDate = dateRange.split('-')[0].trim();
            toDate = dateRange.split('-')[1].trim();
        }
        var title = $('#ddl_tag_placeholder').val();
        var leadType = $('#ddl_searchLeadType').val();
        var strSearch = $('#txt_search').val().trim();
        var leadNote = $('#ddl_searchCallStatus').val();
        var leadStatus = $('#ddl_searchLeadStatus').val();
        if (title > 0 || leadType > 0 || leadStatus > 0 || strSearch.length > 0 || leadNote != '' || dateRange != '') {
            strJsonString = {
                "leads": {
                    "title": title, "lead_type": leadType, "lead_note": leadNote, "status_id": leadStatus,
                    "str_search": strSearch, "from_date": fromDate, "to_date": toDate,
                    "delete_status": $(event).attr('data-delete-status'),
                    "archieve_status": $(event).attr('data-archieve-status')
                },
                "action": action,
                "action_on": action_on,
                "request_for": 'select-all',
                "previous": previous,
                "next": next
            };
            const resp = await get(strJsonString, ApiEndPoints.opportunity);
            if (resp.response_status === "OK") {
                if (resp.data.response.leads_list !== '')
                    setLeads(resp.data.response.leads_list)
                else {
                    setLeads([])
                    setLeads([])
                    setContact({})
                    setRes([])
                    setLead_activity([])
                }
            }
        }
    }
    const refreshLeads = async (e) => {
        console.log(e.target)
        var strJsonString = "", next = 1, previous = 0;
        var action = $(e.target).attr("data-action"), action_on = "leads_main", RequestFor = $(e.target).attr("data-request_for");
        $('.head_btn').hide();
        $('#txt_search,#txt_daterange,#ddl_searchCallStatus').val('');
        $('#ddl_tag_placeholder,#ddl_searchLeadType,#ddl_searchLeadStatus').val('0');
        $('#btnSearchLead').attr({ 'data-delete-status': '0', 'data-archieve-status': '0' });
        strJsonString = { "request_for": "select-all", "action": action, "action_on": action_on, "previous": previous, "next": next };
        const resp = await get(strJsonString, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            if (resp.data.response.leads_list !== '')
                setLeads(resp.data.response.leads_list)
        }
    }
    const getArchieveLeades=async(e)=>{
        e.preventDefault();
        var strJsonString = "", next = 1, previous = 0;
        $('#btnSearchLead').attr({ 'data-delete-status': '0', 'data-archieve-status': '1' });
        strJsonString = {"leads":{"archieve_status":1},"action":"leads","action_on":"leads_main","request_for":"select-all","previous":previous,"next":next}
        const resp = await get(strJsonString, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            if (resp.data.response.leads_list !== '')
                setLeads(resp.data.response.leads_list)
        }
    }
    const getBin=async(e)=>{
        e.preventDefault();
        var strJsonString = "", next = 1, previous = 0;
        $('#btnSearchLead').attr({ 'data-delete-status': '1', 'data-archieve-status': '0' });
        strJsonString = { "leads": { "delete_status": 1 }, "action":"leads","action_on":"leads_main","request_for":"select-all", "previous": previous, "next": next }
        const resp = await get(strJsonString, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            if (resp.data.response.leads_list !== '')
                setLeads(resp.data.response.leads_list)
        }
    }
    return (
    <>

    <section className="content">
        <div className="body_scroll">
            <div className="scrolfx">
                <div className="booktab d-flex justify-content-between align-items-center bdrbtm">
                    <div className="p-2">
                        <h2 className="font-bold mb-0">Opporrunites </h2>
                    </div>
                    <div className="pe-2">
                        <button className="btn  btn-outline-primary me-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i className="ti ti-filter"></i>
                        </button>
                            <div className="btn-group head_btn me-1" style={{ display: "none" }}>
                                <div className="dropdown me-1">
                                    <a className="dropdown-toggle btn btn-outline-primary btn-menu clmnbtn" data-toggle="dropdown" role="button">
                                        <i className="zmdi zmdi-label"></i><span>Tag as</span>
                                    </a>
                                    <ul className="dropdown-menu clmn">
                                        <li className="header lststl">
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="txt_label" placeholder="Create..." autoComplete="off" />
                                            </div>
                                        </li>
                                        <div id="tag_placeholder"></div>
                                        <li className="list-group-item">
                                            <a id="btn_createtag" className="btn btn-primary btn-sm w-48 evt-tag" data-action="tag" data-request_for="create"><i className="zmdi zmdi-label-alt">&nbsp;</i><span>Create</span></a>
                                            <a id="btn_applytag" className="btn btn-primary btn-sm w-48 evt-tag" data-id="0" data-action="tag" data-request_for="lead-tag-create"><i className="zmdi zmdi-label-alt">&nbsp;</i><span>Apply</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <a id="btn_archieve" className="btn btn-outline-primary evt-leads-action" data-id="0" data-action="leads" data-request_for="add-to-archieve"> <i className="zmdi zmdi-archive"></i><span>Archive</span></a>
                            </div>
                            <a href="#" className="btn btn-success me-1" data-bs-toggle="modal" data-bs-target="#addNewOpper"><i
                                className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</a> 
                        <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#leadmainAdd"><i
                                className="zmdi zmdi-plus-circle-o-duplicate"></i> Create New</a>
                        <div className="btn-group ms-1">
                            <button className="btn btn-outline-primary  dropdown-toggle font-w" type="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">More</button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item evt-leads-main" data-toggle="modal" data-target="#modalimport" data-action="leads-main" data-request_for="import-popup"> <i className="zmdi zmdi-download">&nbsp;</i>Import</a>
                                        <a className="dropdown-item"><i className="zmdi zmdi-archive">&nbsp;</i>Archieve</a>
                                        <a className="dropdown-item"><i className="zmdi zmdi-delete">&nbsp;</i>Trash</a>
                                <a className="dropdown-item" data-action="leads" data-request_for="refresh" type="button"> <i data-action="leads" data-request_for="refresh" className="zmdi zmdi-rotate-left"></i><span data-action="leads" data-request_for="refresh"> Refresh</span></a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className='Lodingbox'>
                <Loading />
            </div> */}

            <div className="contactlist">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 p-0 bg-white bdrrgtt">
                            <div className="hgt80 formobile">
                            {leads && leads.length > 0 && leads.map((item , index) => (
                                        <div key={index} id={"div_" + item.u_id} className="position-relative">
                                            <div className="checkbox chk_absult">
                                                <input className="all_slct evt-leads-action" id={"chk_" + item.u_id} type="checkbox" data-action="tag" data-request_for="show-tag" />
                                                <label htmlFor={"chk_" + item.u_id} className="pl-0">&nbsp;</label>
                                            </div>
                                            <a onClick={(e) => { trigger_click(index, item.u_id) }} ref={element => {
                                                ref.current[index] = element;
                                            }} id={"lead_" + item.u_id} className={item.ROWNUMBER === 1 ? item.ROWNUMBER + " active1strow media d-flex border p-3 mb-0 nav__link mb-0 bdrlftcol clickmode" : item.ROWNUMBER + "  media d-flex border p-3 mb-0 nav__link bdrlftcol clickmode"} data-hide=".fone" data-show=".one" >
                                                <div className="media-body  d-block text-start ms-3">
                                                    <h5>{item.lead_company_name}
                                                        <span className={item.is_favourite == 1 ? "zmdi zmdi-favorite col-blue float-right" : "zmdi zmdi-favorite-outline col-blue float-right"} title={item.is_favourite == 1 ? "Set as favourite lead" : "Remove from favourite lead"} ></span></h5>
                                                    <p className="mb-2">{item.lead_type_name}</p>
                                                    <p id={"clstatus_" + item.u_id} className="lable_show">
                                                        {item.call_status && item.call_status.map((call, index) => (
                                                            <span key={index} className="badge badge-primary">{call.lead_note}</span>
                                                        ))}
                                                    </p>
                                                    <p className="mb-2"><i className="zmdi zmdi-city-alt"></i> {item.lead_city},{item.lead_postcode} <span className="float-right col-grey"> {item.lead_day_diff}</span></p>

                                                    <p className="lable_show">
                                                        {item.lead_tags && item.lead_tags.map((tag, index) => (
                                                            <span key={index} className="badge badge-primary">{tag.title}</span>
                                                        ))}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                                            
                                <div className="text-center">
                                <button  onClick={loadMore} id="btnLoadMore" style={{ display: "none" }}  className="btn btn-outline-primary mt-3 mb-4"><b className="col-blue">Load More</b> →</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-9 p-0 bg-white">
                            <div className="hgtt88 contbody one add_remove">
                                <div className="media bder11 p-4 mb-0"style={{borderLeft:"0px",borderRight:"0px"}}>
                                    <div className="media-body ptag">
                                        <a href="#" className="btn cross_remove">x</a>
                                        {loading ? <span>Loading...</span> : <>
                                                {res && res.length > 0 ? <>
                                                    <h5>
                                                        {res && res.length > 0 && res[0].leads[0].lead_company_name}
                                                        <span className="float-right  d-none d-lg-block ">
                                                            <a className="btn btn btn-primary evt-leads-action  ml-1" style={{ backgroundColor: "#0B8054" }} data-toggle="modal" data-target="#contact" data-mobile={res && res.length > 0 && res[0].leads[0].lead_mobile} data-phone={res && res.length > 0 && res[0].leads[0].lead_phone} data-action="notes" data-request_for="answers-list"><i className="zmdi zmdi-phone"></i> Call</a>
                                                            <a className="btn btn btn-primary evt-leads-action  ml-1" style={{ backgroundColor: "#0893A2" }} data-email={res && res.length > 0 && res[0].leads[0].lead_email} data-mobile={res && res.length > 0 && res[0].leads[0].lead_mobile} data-action="message" data-request_for="open" data-toggle="modal" data-target="#emailsend"><i className="zmdi zmdi-email-open">&nbsp;</i>Send Mail</a>
                                                            <div className="btn-group ml,mmm.klmlk,,,,,,,-1">/
                                                                <a id="btn_lead_statuses" className="btn btn-primary dropdown-toggle" data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="zmdi zmdi-alert-polygon">&nbsp;</i>
                                                                    <span className="d-none_small">{res && res.length > 0 && res[0].leads[0].lead_status_update !== "" ? res[0].leads[0].lead_status_update : "Status"}</span></a>
                                                                <div id="ddl_lead_statuses" className="dropdown-menu">
                                                                    {res && res.length > 0 && res[0].leads[0].status_master_list.map((stats, i) => (
                                                                        stats.status_type === "button" ?
                                                                            <a key={i} id={"ddlMenu-" + stats.status_id} style={{ color: stats.color_code }} className="dropdown-item evt-leads-action" data-type={stats.status_type} data-id={stats.status_id} data-action="leads" data-request_for="action-type" data-action-type="lead">{stats.status_name}</a>
                                                                            :
                                                                            <a key={i} id={"ddlMenu-" + stats.status_id} style={{ color: stats.color_code }} className="dropdown-item evt-leads-action" data-toggle="modal" data-target="#lead_statuses" data-type={stats.status_type} data-id={stats.status_id} data-action="leads" data-request_for="action-type">{stats.status_name}</a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <a className="btn btn btn-primary evt-leads-action ml-1" data-email={res && res.length > 0 && res[0].leads[0].lead_email} data-phone={res && res.length > 0 && res[0].leads[0].lead_phone} data-lead-name={res && res.length > 0 && res[0].leads[0].lead_name} data-action="schedule" data-request_for="open" data-toggle="modal" data-target="#schedule"><i className="zmdi zmdi-alarm-check">&nbsp;</i>Schedule</a>
                                                            {res && res.length > 0 && res[0].leads[0].org_user_type === 'A' ?
                                                                <a href="#" className="btn btn btn-outline-primary evt-leads-action ml-1" onClick={getUsersList} data-toggle="modal" data-target="#convert"><i className="zmdi zmdi-swap"></i> <span className="d-none_small"><b>Convert</b> </span></a> : <></>
                                                            }

                                                            <div className="btn-group">
                                                                <button className="btn btn-outline-primary dropdown-toggle ml-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                    Action
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    {res && res.length > 0 && res[0].leads[0].delete_status === 0 ?
                                                                        <>
                                                                            <a className="dropdown-item evt-leads-action" data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-lead-type={res && res.length > 0 && res[0].leads[0].lead_type} onClick={(e) => showLead(e)} data-toggle="modal" data-target="#leadmain" ><i className="zmdi zmdi-edit">&nbsp;</i>Edit</a>
                                                                            <a className="dropdown-item " onClick={(e) => deleteLead(e, res && res.length > 0 && res[0].leads[0])} data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-delete-status={res && res.length > 0 && res[0].leads[0].delete_status} data-archieve-status={res && res.length > 0 && res[0].leads[0].archieve_status} data-action="leads" data-request_for="delete" data-toggle="tooltip" title="Move to bin"><i className="zmdi zmdi-delete">&nbsp;</i>Delete</a>
                                                                        </>
                                                                        : res && res.length > 0 && res[0].leads[0].org_user_type === 'A' ?
                                                                            <a className="dropdown-item " onClick={deleteLead} data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-lead-status={res && res.length > 0 && res[0].leads[0].lead_status} data-delete-status={res && res.length > 0 && res[0].leads[0].delete_status} data-archieve-status={res && res.length > 0 && res[0].leads[0].archieve_status} data-action="leads" data-request_for="delete" data-toggle="tooltip" title="Permanent delete this record"><i className="zmdi zmdi-close">&nbsp;</i>Delete</a>
                                                                            : <></>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </h5>
                                                </> : <></>}

                                                
                                                <p className="mb-1">{res && res.length > 0 && res[0].leads[0].lead_type_name} {res && res.length > 0 ? <>| </> : <></>}
                                                    <span className="col-black">{res && res.length > 0 && res[0].leads[0].cat_name}</span>
                                                </p>
                                                <p className="mb-1">
                                                    {res && res.length > 0 ? <><i className="zmdi zmdi-city-alt"></i></> : <></>} {res && res.length > 0 && res[0].leads[0].lead_city} {res && res.length > 0 && "," + res[0].leads[0].lead_postcode
                                                    }
                                                </p>
                                                <p className="mb-1">
                                                    {res && res.length > 0 ? <><i className="zmdi zmdi-whatsapp"></i></> : <></>}
                                                    {res && res.length > 0 && res[0].leads[0].lead_mobile}   </p>
                                                <p className="mb-1">
                                                    {res && res.length > 0 ? <><i className="zmdi zmdi-phone"></i></> : <></>}
                                                    {res && res.length > 0 && res[0].leads[0].lead_phone}
                                                    {/* <small className="col-green">  Verified</small>   */}
                                                    {res && res.length > 0 ? <>
                                                        <small className={res && res.length > 0 && res[0].leads[0].mobile_status === 1 ? "col-green" : "col-red"}>{res && res.length > 0 && res[0].leads[0].mobile_status === 1 ? " Verified" : " Unverified"}</small>
                                                    </>
                                                        : <></>}
                                                </p>
                                                {res && res.length > 0 ? <>
                                                    <p className="mb-1"><i className="zmdi zmdi-email-open"></i> <span id="">{res && res.length > 0 && res[0].leads[0].lead_email}</span> <small className={res && res.length > 0 && res[0].leads[0].email_status === 1 ? "col-green" : "col-red"}>  {res && res.length > 0 && res[0].leads[0].email_status === 1 ? " Verified" : " Unverified"}</small> <span className="float-right col-grey"> Respond 1yr ago</span></p>
                                                </>
                                                    : <></>}

                                            </>}
                                        <div class="row">
                                            <div class="col-md-6 mb-2">
                                                <div class="d-flex justify-content-start align-items-center">    
                                                    <div class="css-3sr5s988 me-2"><span class="css-19k1nij">GR</span></div>
                                                    <div>
                                                        <h5>Graham Ridwik</h5>
                                                        <p class="mt-0 mb-0">Web Design | E-commerce</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <p className="mb-1">
                                                    <span className="float-right col-grey"> Respond 1yr ago</span></p>
                                            </div>
                                            <div class="col-md-6 col-lg-4">                                               
                                                <p className="mb-1"><a href="#"><i className="zmdi zmdi-phone"></i> 9973373851 </a><small className="col-green">
                                                Verified</small> </p>
                                                <p className="mb-1"><a href="#"><i className="zmdi zmdi-email-open"></i> <span id="">
                                                solutions.topicccano@gmail.com</span></a> <small className="col-green"> Verified</small>
                                                </p>

                                            </div>
                                            <div class="col-md-6 col-lg-4">                                                
                                                <p className="mb-1"><i className="zmdi zmdi-city-alt"></i> Lisburn, BT27 </p>
                                                <p className="mb-0">
                                                    <a href="#" className="btn btn-outline-primary btn-sm"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#" className="btn btn-outline-primary btn-sm me-1 ms-1"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#" className="btn btn-outline-primary btn-sm"><i className="zmdi zmdi-linkedin"></i></a>
                                                    <a href="#" className="btn btn-outline-primary btn-sm ms-1"><i className="zmdi zmdi-whatsapp"></i></a> 
                                                </p>
                                            </div>
                                            
                                            <div class="col-md-12 col-lg-4  mt-1"> 
                                                <div className="d-none d-lg-block float-right">
                                                    <a href="#" className="btn btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#emailsend" title="Send Email"><i className="zmdi zmdi-email-open"></i></a>
                                                    <a href="#" className="btn btn btn-primary ms-1 me-1" data-bs-toggle="modal"
                                                        data-bs-target="#Schedule"title="Schedule"><i className="zmdi zmdi-alarm-check"></i> <span
                                                            className="d-none_small"> Schedule</span></a>
                                                
                                                    <div className="btn-group">
                                                        <button className="btn btn-outline-primary  dropdown-toggle" type="button"
                                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i
                                                                className="zmdi zmdi-alert-polygon"></i> <span className="d-none_small">
                                                                Status</span></button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">1st attempt</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt"> 2nd attempt</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">3rd attempt</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">4th attempt</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">Interested</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">Very Interested</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">Call Later</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">Not Interested</a>
                                                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#fristattempt">Fake Lead</a>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn btn btn-outline-primary ms-1" data-bs-toggle="modal"
                                                        data-bs-target="#convert"title="Convert"><i className="zmdi zmdi-swap"></i> </a>
                                                </div>
                                            </div>
                                        </div>                                       
                                        
                                        <div className="mb-1 d-lg-none">
                                            <a href="#" className="btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#emailsend"><i
                                                    className="zmdi zmdi-email-open"></i> <span className="d-none_small">Send
                                                    Email</span></a>
                                            <a href="#" className="btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#Schedule"><i
                                                    className="zmdi zmdi-alarm-check"></i> <span className="d-none_small">
                                                    Schedule</span></a>
                                            <a href="#" className="btn btn btn-primary"><i className="zmdi zmdi-favorite-outline"></i> <span
                                                    className="d-none_small">Save</span></a>
                                            <div className="btn-group">
                                                <button className="btn btn-primary  dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i
                                                        className="zmdi zmdi-alert-polygon"></i> <span className="d-none_small">
                                                        Status</span></button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">1st attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt"> 2nd attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">3rd attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">4th attempt</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Interested</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Very Interested</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Call Later</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Not Interested</a>
                                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#fristattempt">Fake Lead</a>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn btn-outline-primary" data-bs-toggle="modal"
                                                data-bs-target="#convert"><i className="zmdi zmdi-swap"></i> <span
                                                    className="d-none_small"><b>Convert</b> </span></a>

                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bgblulgt bfix">
                                    <ul className="nav nav-tabs nav-justified p-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-bs-toggle="tab" href="#leaddetails"><i
                                                    className="zmdi zmdi-info"></i> <span className="d-none_small"> Lead Details</span> </a>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#mydoc"> <i className="zmdi zmdi-file-text"></i>
                                                <span className="d-none_small"> My Doc </span> </a>
                                        </li>
                                        

                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#Messages"><i
                                                    className="zmdi zmdi-email-open"></i> <span className="d-none_small"> Messages</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#mynote"><i
                                                    className="zmdi zmdi-comment-edit"></i> <span className="d-none_small">Note </span> </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " data-bs-toggle="tab" href="#Activity"><i
                                                    className="zmdi zmdi-calendar-note"></i> <span className="d-none_small"> Activity
                                                </span></a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="tab-content pt-2 pb-2 ps-2 pe-2">
                                
                                    <div role="tabpanel" className=" tab-pane pb-5 in active" id="leaddetails">
                                        <Details/>
                                    </div>
                                    <div role="tabpanel" className=" tab-pane" id="mydoc">
                                        <Document/> 
                                    </div>
                                    <div role="tabpanel" className="tab-pane comntsection" id="mynote">
                                        <Note/> 
                                    </div>
                                    <div role="tabpanel" class=" tab-pane" id="Activity">  
                                        <Activity/>
                                    </div>
                                    <div role="tabpanel" class=" tab-pane" id="Messages">  
                                        <Messages/>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="hgtt88 contbody ddnone fone">
                                <div className="media bder11 p-4 mb-0" style={{borderLeft:"0px",borderRight:"0px"}}>
                                    <div className="media-body ptag">
                                        <div class="row">
                                            <div class="col-md-6 mb-2">
                                                <div class="d-flex justify-content-start align-items-center">    
                                                    <div class="css-3sr5s988 me-2"><span class="css-19k1nij">GR</span></div>
                                                    <div>
                                                        <h5>Graham Ridwik</h5>
                                                        <p class="mt-0 mb-0">Web Design | E-commerce</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <p className="mb-1">
                                                    <span className="float-right col-grey"> Respond 1yr ago</span></p>
                                            </div>
                                            <div class="col-md-6 col-lg-4">                                               
                                                <p className="mb-1"><a href="#"><i className="zmdi zmdi-phone"></i> 9973373851 </a><small className="col-green">
                                                Verified</small> </p>
                                                <p className="mb-1"><a href="#"><i className="zmdi zmdi-email-open"></i> <span id="">
                                                solutions.topicccano@gmail.com</span></a> <small className="col-green"> Verified</small>
                                                </p>

                                            </div>
                                            <div class="col-md-6 col-lg-4">                                                
                                                <p className="mb-1"><i className="zmdi zmdi-city-alt"></i> Lisburn, BT27 </p>
                                                <p className="mb-0">
                                                    <a href="#" className="btn btn-outline-primary btn-sm"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#" className="btn btn-outline-primary btn-sm me-1 ms-1"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#" className="btn btn-outline-primary btn-sm"><i className="zmdi zmdi-linkedin"></i></a>
                                                    <a href="#" className="btn btn-outline-primary btn-sm ms-1"><i className="zmdi zmdi-whatsapp"></i></a> 
                                                </p>
                                            </div>
                                            <div class="col-md-12 col-lg-4"> 
                                                <div className="d-none d-lg-block float-right">
                                                    <a href="#" className="btn btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#contact"><i className="zmdi zmdi-phone"></i> Contact</a>
                                                    <a href="#" className="btn btn btn-primary ms-1 me-1" data-bs-toggle="modal"
                                                        data-bs-target="#emailsend"title=" Send Email"><i className="zmdi zmdi-email-open"></i></a>
                                                    <a href="#" className="btn btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#smssend"title=" Send Sms"><i className="zmdi zmdi-comment-text"></i></a>
                                                    <a href="#" className="btn btn btn-outline-danger ms-1"><i
                                                            className="zmdi zmdi-notifications-off"></i> Not Interested</a>
                                                            
                                                    
                                                </div>
                                            </div>    
                                        </div>
                                 
                                       
                                    </div>
                                </div>
                                <div className="">
                                    <div className="p-3">
                                        <h4 className="mb-0 mt-0">Details</h4>
                                        <hr />
                                        <p className="col-blue"><b>1. What type of organisation is this for? Do you already have a logo?
                                                No I do not have a logo</b></p>
                                        <p className="mb-3 ms-3"><b>Bussiness</b></p>

                                        <p className="col-blue"><b>2. Do you already have a logo?</b></p>
                                        <p className="mb-3 ms-3"><b> No I do not have a logo</b></p>

                                        <p className="col-blue"><b>3. How many logo design are you looking for?</b></p>
                                        <p className="mb-3 ms-3"><b>2 Designs</b></p>

                                        <p className="col-blue"><b>4. How soon would you like the project to begin?</b></p>
                                        <p className="mb-3 ms-3"><b> Less than two weeks</b></p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    </section>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr className="m-0"/>
        <div className="offcanvas-body">
            <select id="ddl_tag_placeholder" className="custom-select form-select mb-2">
                <option value="0">All Tags</option>
                {/* {data && data.data.response[0].lead_tags !== '' && data.data.response[0].lead_tags.map((tag, i) => (
                    <option key={i} value={tag.tag_id}>{tag.title}</option>
                ))} */}
            </select>
            <select id="ddl_searchLeadType" className="custom-select form-select mb-2">
                <option value="0">All Lead Type</option>
                {data && data.data && data.data.response[1].lead_types.map((type, i) => (
                    <option key={i} value={type.id}>{type.lead_type_name}</option>
                ))}
            </select>
            <select id="ddl_searchCallStatus" className="custom-select form-select mb-2">
                <option value="">All Call</option>
                {data && data.data && data.data.response[2].call_status.map((status, i) => (
                    <option key={i} >{status.message}</option>
                ))}
            </select>
            <select id="ddl_searchLeadStatus" className="custom-select form-select mb-2">
                <option value="">All Lead Status</option>
                {data && data.data && data.data.response[3].lead_statuses.map((lstatus, i) => (
                    <option key={i} style={{ color: lstatus.color_code }} value={lstatus.status_id}>{lstatus.status_name}</option>
                ))}
            </select>
            <input type="text" id="txt_search" className="form-control mb-2" placeholder="Search by contact details" autoComplete="off" />
            <input id="txt_daterange" type="text" className="form-control daterange" onFocus={selectdateRange} placeholder="Search by date range" />
            <div className="">
                <hr/>
                <a id="btnSearchLead" className="btn btn-primary" onClick={searchLead} data-action="leads" data-request_for="filter" data-delete-status="0" data-archieve-status="0">Apply</a>
            </div>                   
        </div>
    </div>    
    
    </>
    )
}
export const getServerSideProps = async ({ req, res }) => {
    try {
        //opportunity data
        var params = { "action": "leads", "action_on": "leads_main", "request_for": "select-all", "route": "opportunities", "previous": "0", "next": "10" };
        const lang = req.cookies['signin_token']
        if ((lang === "''") || (lang === undefined)) {
            res.writeHead(302, { Location: "/login" })
            res.end()
        }
        const response = await getData(params, lang, ApiEndPoints.opportunity)
        const stringifiedData = JSON.stringify(response);
        const oppData = JSON.parse(stringifiedData);
        //get ddl
        var params1 = { "action": "filter-ddl", "action_on": "leads_main", "request_for": "" };
        const response1 = await getData(params1, lang, ApiEndPoints.opportunity)
        const stringifiedData1 = JSON.stringify(response1);
        const ddlData = JSON.parse(stringifiedData1);
        //get lead tpe list
        var paramsleadType = { "action": "lead-types" };
        const respLeadType = await getData(paramsleadType, lang, ApiEndPoints.dropdownApi)
        //get categories list
        var paramsCategory = { "action": "category", "request_for": "parent" };
        const respCategory = await getData(paramsCategory, lang, ApiEndPoints.dropdownApi)
        //get channel list
        var paramsChannel = { "action": "lead-channel" };
        const respChannel = await getData(paramsChannel, lang, ApiEndPoints.dropdownApi)
        //get channel list
        var paramsCountry = { "action": "location", "request_for": "country-list" };
        const respCountry = await getData(paramsCountry, lang, ApiEndPoints.dropdownApi)

        return {
            props: {
                pageData: JSON.parse(oppData).response_status === "OK" ? JSON.parse(oppData).data.response.leads_list : [],
                data: JSON.parse(ddlData),
                leadTypeList: JSON.parse(respLeadType).data.response.lead_types,
                CategoryList: JSON.parse(respCategory).data.response.category_info,
                CountryList: JSON.parse(respCountry).data.response.country_list,
                // ChannelList: JSON.parse(respChannel).data.response.category_info,
            },
        }
    } catch (err) {
        // Handle error
        return {
            props: null
            // redirect: {
            //     destination: '/login',
            //     statusCode: 307
            // }
        }
    }
}
export default Main
