"use client"
import React from 'react'
import Link from "next/link";
import { useState ,useEffect, useRef, useReducer  } from 'react';
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
import { get, post } from "../../services/api_axios_services";
import MdlLeadMainEdit from '../model/MdlLeadMain';
import OppActivity from './OppActivity';
import menuImage from "../../images/menu-dots-vertical.svg";


const Main = ({ data = [], pageData = [], CategoryList = [] }) => {
        //, leadTypeList = [], CategoryList = [], CountryList = [] 
    const ref = useRef([]);

//#region Create New Lead

    const [answer_list, setAnswerList] = useState([]);
    const formReducer = (state, event) => {
        return {
            ...state,
            [event.target.name]: event.target.value
        }
    }
    const [formData, setFormData] = useReducer(formReducer, {})
    
    const IsUrlValid = (e) => {
        ns_util.IsUrlValid(e.target)
    }
    const submitLead = async (e) => {
        var params = ns_validations.leadsMain(e.target);
        // console.log(strJsonString)        
        // let name = `${formData.lead_name}`
        if (params !== false) {
            const resp = await post(params, ApiEndPoints.opportunity);
            if (resp.response_status === "OK") {
               
                ModalHide('#addNewOpper');
                alertmsg.msg("Message", resp.response_msg, "S");
                getLeads();
            }
            else {
                alertmsg.msg("Message", resp.response_msg, "e");
            }
        }
    }

    //#endregion
    
    //#region Edit Exsiting Lead    
     const [lead_detail, setlead_detail] = useState([]);
    let { lead_type, lead_category_id, lead_channel_id, lead_name, lead_dob, lead_gender } = lead_detail;
    
    useEffect(() => {        
       
        setTimeout(() => {              
            //fill custom fields
            lead_detail && lead_detail.lead_custom_fields_json !== '' && lead_detail.lead_custom_fields_json.map((field, i) => {
                if (i === 0) {
                    $('#txt_field0').val(field.field);
                    $('#txt_label0').val(field.label);
                }
                else {
                    var cntr = i;
                    var newRow = "<tr class='trCustomFields leadcfdtr' data-counter=" + cntr + ">" +
                        "<td>" +
                        "<div class='group_lead'>" +
                        "<input class='input_text' id='txt_field" + cntr + "' required = 'required' type = 'text' value=" + field.field + ">" +
                        "<label class='lablefilled'> Custom Fields</label>" +
                        "</div>" +
                        "</td>" +
                        "<td>" +
                        "<div class='group_lead'>" +
                        "<input class='input_text' id='txt_label" + cntr + "' required='required' type='text' value=" + field.label + ">" +
                        "<label class='lablefilled'> Label</label>" +
                        "  </div>" +
                        "</td>" +
                        "<td>" +
                        "<span class='table-remove btn btn-danger evt-leads-action' data-action='leads' data-request_for='delete-custom-fields' data-toggle='tooltip' title='Delete this row'><i class='zmdi zmdi-delete'></i></span>" +
                        "</td></tr>";
                    $("#tblCustomFields").append(newRow);
                    $('#addmorefield').attr('data-cntr', cntr);
                }
            })
            // if(lead_detail){
            //     setName(lead_detail.lead_name)
            // }

        }, 3000);
    }, []);
   //#endregion
        
    const [leadTypeList, setLeadTypeList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [chanelList, setChanelList] = useState([]);    
    const [lead_tags, setLead_tags] = useState([]);
    const [call_status, setCall_status] = useState([]);
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
        getDropdownData();
        getLeads();
    }, []);

    const getUsersList = async () => {
        const resp = await getUserList();
        if (resp.response_status === "OK") {
            // alert(resp.data.response.users);
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
        if (obj.response_status === "OK") {          
            setLeads(obj.data.response.leads_list);             
        }        
        }
        
    const getDropdownData = async () => {
        const lang = getCookie('signin_token');
        //get lead tpe list
        var paramsleadType = { "action": "lead-types" };
        const respLeadType = await getData(paramsleadType, lang, ApiEndPoints.dropdownApi);
        setLeadTypeList(respLeadType.data.response.lead_types);
           
        //get categories list
        var paramsCategory = { "action": "category", "request_for": "parent" };
        const respCategory = await getData(paramsCategory, lang, ApiEndPoints.dropdownApi);
        setCategoryList(respCategory.data.response.category_info);

          
        //get channel list
        var paramsCountry = { "action": "location", "request_for": "country-list" };
        const respCountry = await getData(paramsCountry, lang, ApiEndPoints.dropdownApi);
        setCountryList(respCountry.data.response.country_list);

        //get channel list
        var paramsChannel = { "action": "lead-channel" };
        const respChannel = await getData(paramsChannel, lang, ApiEndPoints.dropdownApi);
       
        if (respChannel.response_status === "OK") {
            setChanelList(respChannel.data.response.lead_channel);
        }        
        
        
        //get lead_tags and call_status
        var paramsFIllDropdown = { "action": "filter-ddl", "action_on": "leads_main", "request_for": "" };      
        const respDdl = await getData(paramsFIllDropdown, lang, ApiEndPoints.opportunity);  
        if (respDdl.response_status === "OK") {         
            setLead_tags(respDdl.data.response[0].lead_tags);
            setCall_status(respDdl.data.response[2].call_status);   
            setAnswerList(respDdl.data.response[2].call_status);   
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
            setRes(resp.data.response);
            setlead_detail(resp.data.response);
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
                    alertmsg.msg("Message", resp.response_msg, "s");
                    setLeads(leads.filter((l) => l.u_id !== u_id));
                }
                else { 
                   alertmsg.msg("Message", resp.response_msg, "E");

                }
                //ns_leads.post(JSON.stringify(strJsonString), event);//calling post api here
            }
        }
    }
    const selectdateRange = () => {
        daterange();
        timeZone();
    }
    const searchLead = async (e) => {
       
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
        var strJsonString = "", next = 10, previous = 0;
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
        var strJsonString = "", next = 10, previous = 0;
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
        var strJsonString = "", next = 10, previous = 0;
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
                <div className="booktab bdrbtm">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 pt-2 pb-2">
                            <div className="ps-2 d-flex justify-content-between align-items-center">
                                <h2 className="font-bold mb-0">Opporrunites </h2>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle pe-0"style={{boder:"0px"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Image src={menuImage} alt="user" width={"5"} height={"21"} />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" onClick={getArchieveLeades}><i className="zmdi zmdi-archive">&nbsp;</i>Show Archieve</a></li>
                                        <li><a className="dropdown-item" onClick={getBin}><i className="zmdi zmdi-delete">&nbsp;</i>Show Trash</a></li>
                                        <li><a className="dropdown-item evt-leads-main"data-bs-toggle="modal"  data-bs-target="#modalimport" data-action="leads-main" data-request_for="import-popup"> <i className="zmdi zmdi-download">&nbsp;</i>Import</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-9 text-end">
                           <div className="pe-2">
                           <button className="btn  btn-outline-primary me-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <i className="ti ti-filter"></i>
                            </button>
                                <div className="btn-group head_btn me-1" style={{ display: "none" }}>
                                    <div className="dropdown me-1">
                                        <a className="dropdown-toggle btn btn-outline-primary btn-menu clmnbtn" data-bs-toggle="dropdown" role="button">
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
                                    <a className="btn btn-outline-primary me-1" onClick={refreshLeads} data-action="leads" data-request_for="refresh"><i
                                    className="zmdi zmdi-refresh"></i> Refresh</a>
                                
                                
                                <a href="#" className="btn btn-success me-1" data-bs-toggle="modal" data-bs-target="#addNewOpper"><i
                                    className="zmdi zmdi-plus-circle-o-duplicate"></i> Create Lead</a> 
                            
        
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
                                        <span id="span_leaduid" style={{ display: "none" }}>
                                        {res && res.length > 0 && res[0].leads[0].u_id}</span>

                            {leads && leads.length > 0 && leads.map((item , index) => (
                                        <div key={index} id={"div_" + item.u_id} className="position-relative">
                                            <div className="checkbox chk_absult">
                                                <input className="all_slct evt-leads-action" id={"chk_" + item.u_id} type="checkbox" data-action="tag" data-request_for="show-tag" />
                                                <label htmlFor={"chk_" + item.u_id} className="ps-0">&nbsp;</label>
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
                        <div className="col-12 col-sm-8 col-md-8 col-lg-9 p-0 bg-white ">
                            <div className="hgtt88 contbody one add_remove">
                                <div className="media bder11 p-4 mb-0"style={{borderLeft:"0px",borderRight:"0px"}}>
                                    <div className="media-body ptag"  style={{minHeight:'140px'}}>
                                        <a href="#" className="btn cross_remove">x</a>
                                            {loading ? <span>Loading...<img src='/spin.gif' alt='.' /> </span> : <>
                                                {res && res.length > 0 ? <>
                                                    <h5>
                                                        {res && res.length > 0 && res[0].leads[0].lead_company_name}
                                                        <span className="float-right  d-none d-lg-block ">
                                                            <a className="btn btn btn-primary evt-leads-action  ms-1" style={{ backgroundColor: "#0B8054" }} data-bs-toggle="modal" data-bs-target="#contact" data-mobile={res && res.length > 0 && res[0].leads[0].lead_mobile} data-phone={res && res.length > 0 && res[0].leads[0].lead_phone} data-action="notes" data-request_for="answers-list"><i className="zmdi zmdi-phone"></i> Call</a>
                                                            <a className="btn btn btn-primary evt-leads-action  ms-1" style={{ backgroundColor: "#0893A2" }} data-email={res && res.length > 0 && res[0].leads[0].lead_email} data-mobile={res && res.length > 0 && res[0].leads[0].lead_mobile} data-action="message" data-request_for="open" data-bs-toggle="modal"  data-bs-target="#emailsend"><i className="zmdi zmdi-email-open">&nbsp;</i>Send Mail</a>
                                                            <div className="btn-group ms-1">
                                                                <a id="btn_lead_statuses" className="btn btn-primary dropdown-toggle" data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="zmdi zmdi-alert-polygon">&nbsp;</i>
                                                                    <span className="d-none_small">{res && res.length > 0 && res[0].leads[0].lead_status_update !== "" ? res[0].leads[0].lead_status_update : "Status"}</span></a>
                                                                <div id="ddl_lead_statuses" className="dropdown-menu">
                                                                    {res && res.length > 0 && res[0].leads[0].status_master_list.map((stats, i) => (
                                                                        stats.status_type === "button" ?
                                                                            <a key={i} id={"ddlMenu-" + stats.status_id} style={{ color: stats.color_code }} className="dropdown-item evt-leads-action" data-type={stats.status_type} data-id={stats.status_id} data-action="leads" data-request_for="action-type" data-action-type="lead">{stats.status_name}</a>
                                                                            :
                                                                            <a key={i} id={"ddlMenu-" + stats.status_id} style={{ color: stats.color_code }} className="dropdown-item evt-leads-action" data-bs-toggle="modal" data-bs-target="#lead_statuses" data-type={stats.status_type} data-id={stats.status_id} data-action="leads" data-request_for="action-type">{stats.status_name}</a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <a className="btn btn btn-primary evt-leads-action ms-1" data-email={res && res.length > 0 && res[0].leads[0].lead_email} data-phone={res && res.length > 0 && res[0].leads[0].lead_phone} data-lead-name={res && res.length > 0 && res[0].leads[0].lead_name} data-action="schedule" data-request_for="open" data-bs-toggle="modal"  data-bs-target="#schedule"><i className="zmdi zmdi-alarm-check">&nbsp;</i>Schedule</a>
                                                            {res && res.length > 0 && res[0].leads[0].org_user_type === 'A' ?
                                                                <a href="#" className="btn btn btn-outline-primary evt-leads-action ms-1" onClick={getUsersList} data-bs-toggle="modal"  data-bs-target="#convert"><i className="zmdi zmdi-swap"></i> <span className="d-none_small"><b>Convert</b> </span></a> : <></>
                                                            }

                                                            <div className="btn-group">
                                                                <button className="btn btn-outline-primary dropdown-toggle ms-1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                    Action
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    {res && res.length > 0 && res[0].leads[0].delete_status === 0 ?
                                                                        <>
                                                                            <a className="dropdown-item evt-leads-action" data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-lead-type={res && res.length > 0 && res[0].leads[0].lead_type} onClick={(e) => showLead(e)} data-bs-toggle="modal"  data-bs-target="#leadmain" ><i className="zmdi zmdi-edit">&nbsp;</i>Edit</a>
                                                                            <a className="dropdown-item " onClick={(e) => deleteLead(e, res && res.length > 0 && res[0].leads[0])} data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-delete-status={res && res.length > 0 && res[0].leads[0].delete_status} data-archieve-status={res && res.length > 0 && res[0].leads[0].archieve_status} data-action="leads" data-request_for="delete" data-bs-toggle="tooltip" title="Move to bin"><i className="zmdi zmdi-delete">&nbsp;</i>Delete</a>
                                                                        </>
                                                                        : res && res.length > 0 && res[0].leads[0].org_user_type === 'A' ?
                                                                            <a className="dropdown-item " onClick={deleteLead} data-u_id={res && res.length > 0 && res[0].leads[0].u_id} data-lead-status={res && res.length > 0 && res[0].leads[0].lead_status} data-delete-status={res && res.length > 0 && res[0].leads[0].delete_status} data-archieve-status={res && res.length > 0 && res[0].leads[0].archieve_status} data-action="leads" data-request_for="delete" data-bs-toggle="tooltip" title="Permanent delete this record"><i className="zmdi zmdi-close">&nbsp;</i>Delete</a>
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
                                                        {res && res.length > 0 ? 
                                                        <><i className="zmdi zmdi-whatsapp col-green" style={{marginRight:'5px'}}></i>
                                                        </> : <> Not Available</>}
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
                                                        <p className="mb-1"><i className="zmdi zmdi-email-open"></i> <span id="">{res && res.length > 0 && res[0].leads[0].lead_email}</span> <small className={res && res.length > 0 && res[0].leads[0].email_status === 1 ? "col-green" : "col-red"}>  {res && res.length > 0 && res[0].leads[0].email_status === 1 ? " Verified" : " Unverified"}</small>
                                                        <span className="float-right col-grey">{res && res.length > 0 && "," + res[0].leads[0].lead_day_diff
                                                    }</span></p>
                                                </>
                                                    : <></>}

                                            </>}
                                       
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
                                            <a className="nav-link " data-bs-toggle="tab" onClick={load_activity}  href="#Activity"><i
                                                    className="zmdi zmdi-calendar-note"></i> <span className="d-none_small"> Activity
                                                </span></a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="tab-content pt-2 pb-2 ps-2 pe-2">
                                
                                    <div role="tabpanel" className=" tab-pane pb-5 in active" id="leaddetails">
                                        <Details res={res && res} contact={contact && contact} />
                                    </div>
                                    <div role="tabpanel" className=" tab-pane" id="mydoc">
                                        <Document/> 
                                    </div>
                                    <div role="tabpanel" className="tab-pane comntsection" id="mynote">
                                        <Note/> 
                                    </div>
                                    <div role="tabpanel" class=" tab-pane" id="Activity">  
                                                <Activity res={res && res} contact={contact && contact} />
                                                
                                                {lead_activity ?
                                            <OppActivity lead_activity={lead_activity && lead_activity} setLead_activity={setLead_activity} lead_uid={lead_uid} />
                                            : <></>}
                                    </div>
                                    <div role="tabpanel" class=" tab-pane" id="Messages">  
                                        <Messages/>
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
                {lead_tags && lead_tags !== '' && lead_tags.map((tag, i) => (
                    <option key={i} value={tag.tag_id}>{tag.title}</option>
                ))}
            </select>
            <select id="ddl_searchLeadType" className="custom-select form-select mb-2">
                        <option value="0">All Lead Type</option>
                        {leadTypeList.map((lead, i) => (
                            <option key={i} value={lead.id}>{lead.lead_type_name}</option>
                        ))}
            </select>
            <select id="ddl_searchCallStatus" className="custom-select form-select mb-2">
                <option value="">All Call</option>
                {call_status && call_status.length > 0 && call_status.map((status, i) => (
                    <option key={i} >{status.message}</option>
                ))}
            </select>
            <select id="ddl_searchLeadStatus" className="custom-select form-select mb-2">
                <option value="">All Lead Status</option>
        {res && res.length > 0 && res[0].leads[0].status_master_list.map((lstatus, i) => (
                    <option key={i} style={{ color: lstatus.color_code }} value={lstatus.status_id}>{lstatus.status_name}</option>
                ))}
            </select>
            <input type="text" id="txt_search" className="form-control mb-2" placeholder="Search by contact details" autoComplete="off" />
            <input id="txt_daterange" type="text" className="form-control daterange" onFocus={selectdateRange} placeholder="Search by date range" />
            <div className="">
                        <hr />
                        <div className='row'>
                            <div className='col-6'>
                        <a id="btnSearchLead" className="btn btn-primary d-block" onClick={searchLead} data-action="leads" data-request_for="filter" data-delete-status="0" data-archieve-status="0"><i className='zmdi zmdi-search me-1'></i> Search</a>
                            </div>
                            <div  className='col-6'>
                            <a id="btnSearchLead" className="btn btn-outline-danger d-block" onClick={searchLead} data-action="leads" data-request_for="filter" data-delete-status="0" data-archieve-status="0" data-bs-dismiss="offcanvas"><i className='zmdi zmdi-close me-2'></i>Cancel</a>
                            </div>
                            </div>
            </div>                   
        </div>
    </div>    
    
    {/* Create New Lead */}
    <div class="modal right-half md-one" id="addNewOpper" tabindex="1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document" style={{maxWidth:"840px"}}>
        
                <div className="modal-content" style={{ height: "auto!important" }}>
                    <div className="modal-header bg-blu-lite fixed-top">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" >
                            <b id="lead_header">Add Lead</b>
                        </h4>
                    </div>
                    <div id="leadCreate" className="modal-body pe-0 ps-0 pb-0">
                        <span id="span_Orguid" style={{ display: "none" }}></span>
                        <div className="row  m-0">
                            <div className="col-md-12 ps-0 pe-0">
                                <div className="loader"></div>
                                <div className="tab-content p-0">
                                    <div role="tabpanel" className=" tab-pane in active" style={{ height: "91vh" }}>
                                        <div className="row m-0 justify-content-center mt-3">
                                            <div className="col-md-4 col-lg-4">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header  pt-1 ps-2">
                                                        <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Lead Type<span className="col-red">*</span></h2>
                                                    </div>
                                                    <div className="body p-2 mb-2">
                                                        <div className="group_lead mb-0">
                                                            <select className="custom-select select_f lead-input" onChange={setFormData} id="ddl_lead_types" data-action="settings" data-request_for="select">
                                                                <option value="0">Choose Lead Type</option>
                                                                {leadTypeList.map((lead, i) => (
                                                                    <option key={i} value={lead.id}>{lead.lead_type_name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-lg-4">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header  pt-1 ps-2">
                                                        <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Categories</h2>
                                                    </div>
                                                    <div className="body p-2 mb-2">
                                                        <div className="group_lead mb-0">
                                                            <select className="custom-select select_f lead-input" onChange={setFormData} id="ddl_parent_cat">
                                                                <option value="0">Choose Category</option>
                                                                {categoryList.map((cat, i) => (
                                                                    <option key={i} value={cat.cat_id}>{cat.cat_name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-lg-4">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header pt-1 ps-2">
                                                        <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Channel </h2>
                                                    </div>
                                                    <div className="body p-2 mb-2">
                                                        <div className="group_lead mb-0">
                                                            <select className="custom-select select_f" defaultValue={"0"} id="ddl_lead_channel" onChange={setFormData} >
                                                                    <option value="0" >Choose Lead Channel</option>
                                                                       {chanelList.map((chanel, i) => (
                                                                    <option key={i} value={chanel.channel_id}>{chanel.channel_name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header pt-2 ps-2">
                                                        <h2><i className="zmdi zmdi-account-box-mail">&nbsp;</i>Basic Details</h2>
                                                    </div>
                                                    <div className="body p-2">
                                                        <div className="row">
                                                            <div className="col-md-6 disableform">
                                                                <div className="group_lead">
                                                                    <div className="group_lead mb-0">
                                                                        <select className="custom-select select_f" id="ddl_title" onChange={setFormData} >
                                                                            <option value="0">Select</option>
                                                                            <option value="Mr">Mr</option>
                                                                            <option value="Mrs">Mrs</option>
                                                                            <option value="Ms">Ms</option>
                                                                            <option value="Miss">Miss</option>
                                                                        </select>
                                                                        <label className="lablefilled">Title<span>*</span></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" name="lead_name" id="txt_lead_name" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Name<span>*</span></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <div className="group_lead mb-0">
                                                                        <select className="custom-select select_f" name="lead_gender" onChange={setFormData} id="ddl_gender">
                                                                            <option value="0">Gender</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Female">Female</option>
                                                                            <option value="Other">Other</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                           <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text datepicker date start" name="lead_dob" onChange={setFormData} id="txt_dob" required="required" type="text" maxLength="10" autoComplete="off"  />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Date of Birth<span>*</span></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_company_name" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-city">&nbsp;</i>Company Name<span>*</span></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text allow-email-only" id="txt_lead_email" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-email">&nbsp;</i>Email<span>*</span></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text allow-numbers-only" id="txt_lead_mobile" onChange={setFormData} required="required" type="text" maxLength="11" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-smartphone-android">&nbsp;</i>Mobile</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text allow-numbers-only" id="txt_lead_phone" onChange={setFormData} required="required" type="text" maxLength="15" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-phone">&nbsp;</i>Telephone</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_lead_website" required="required" onChange={setFormData} type="text" onKeyPress={IsUrlValid} autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-pin">&nbsp;</i>Website</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_lead_note" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-comment-edit">&nbsp;</i>Note</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header pt-1 ps-2">
                                                        <h2><i className="zmdi zmdi-pin"></i> Address Details </h2>
                                                    </div>
                                                    <div className="body p-2">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_lead_address" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-pin">&nbsp;</i>Address line</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_lead_city" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-city">&nbsp;</i>City<span>*</span></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_lead_county" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-city-alt">&nbsp;</i>State/County</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_lead_pincode" onChange={setFormData} required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-map">&nbsp;</i>Postcode<span>*</span></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 disableform">
                                                                <div className="group_lead">
                                                                    <select className="custom-select select_f" id="ddl_lead_country" onChange={setFormData} required="required" >
                                                                        <option value="0">Choose Country</option>
                                                                        {countryList.map((cntry, i) => (
                                                                            <option key={i} value={cntry.country_id}>{cntry.country_name}</option>
                                                                        ))}
                                                                    </select>
                                                                    <label htmlFor="" className="lablefilled">Country<span>*</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header pt-1 ps-2">
                                                        <h2><i className="zmdi zmdi-pin">&nbsp;</i>Social Media Details</h2>
                                                    </div>
                                                    <div className="body p-2">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_facebook" required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-facebook">&nbsp;</i>Facebook</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_twitter" required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-instagram">&nbsp;</i>Twitter</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_instagram" required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-instagram">&nbsp;</i>Instagram</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_youtube" required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-youtube">&nbsp;</i>Youtube</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_linkdin" required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-linkedin">&nbsp;</i>Linkedin</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="group_lead">
                                                                    <input className="input_text" id="txt_pinterest" required="required" type="text" autoComplete="off" />
                                                                    <label className="lablefilled"><i className="zmdi zmdi-pinterest">&nbsp;</i>Pinterest</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header pt-1 ps-2">
                                                        <h2><i className="zmdi zmdi-labels"></i> Custom Fields </h2>
                                                    </div>
                                                    <div className="body p-2">
                                                        <div id="table" className="table-editable">
                                                            <table id="tblCustomFields" className="table">
                                                                <tbody>
                                                                    <tr className="trCustomFields" data-counter="0">
                                                                        <td>
                                                                            <div className="group_lead">
                                                                                <input className="input_text" id="txt_field0" name="" required="required" type="text" autoComplete="off" />
                                                                                <label className="lablefilled"> Custom Fields</label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="group_lead">
                                                                                <input className="input_text" id="txt_label0" name="" required="required" type="text" autoComplete="off" />
                                                                                <label className="lablefilled"> Label</label>
                                                                            </div>
                                                                        </td>
                                                                        <td><span id="addmorefield" className="table-add btn btn-primary mb-4 evt-leads-action" data-action="leads" data-request_for="add-custom-fields" data-cntr="0" data-toggle="tooltip" title="Add more">Add more+</span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <div className="card bdr5 mt-0">
                                                    <div className="header pt-1 ps-2">
                                                        <h2><i className="zmdi zmdi-labels"></i> Tags / Keywords</h2>
                                                    </div>
                                                    <div className="body p-2">
                                                        <div className="group_lead">
                                                            <input className="input_text" id="" name="Services" required="required" type="text" autoComplete="off" />
                                                            <label className="lablefilled" style={{ top: "-10px", fontSize: "12px" }}><i className="zmdi zmdi-label-alt"></i> Keywords</label>
                                                        </div>
                                                        <div id="master_keywords_placeholder"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a id="btn_submit_leadform" className="btn btn-primary" style={{ display: "none" }}>Submit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="model-footer">
                        <div className="row m-0">
                            <div className="col-md-12">
                                <div className="text-center">
                                        <a id="btn_submit_lead" className="btn btn-primary btn-lg me-1" onClick={submitLead} data-u_id={"0"} data-action="leads-main" data-request_for="create" data-action-type="lead"><i className="zmdi zmdi-floppy">&nbsp;</i>Save </a>
                                        
                                    <a id="btn_copytoClip" className="btn btn-primary btn-lg me-1"><i className="zmdi zmdi-copy" style={{margin:'0 15px'}}>&nbsp;</i>Copy to clipboard</a>
                                    <a className="btn btn-outline-danger btn-lg" data-bs-dismiss="modal"><i className="zmdi zmdi-close">&nbsp;</i>Close</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

   {/* Edit Existing Lead */}   
            <MdlLeadMainEdit leadTypeList={leadTypeList} CategoryList={categoryList} chanelList={chanelList} CountryList={countryList} lead_detail={res && res.length > 0 && res[0].leads[0]} lead_settings={lead_settings && lead_settings} />
        
            
            



 {/* convert Lead */}   
            
    <div class="modal fade mdds" id="convert" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center" id="exampleModalLongTitle"><b>Convert Lead</b></h4>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
                <p class="mb-1"> 
                    <span class="wd-12px"> Create New Account</span>
                    <span>:</span>
                    <span id="">Ross and River Inc   </span>
                </p>
                <p class="mb-1"> 
                    <span class="wd-12px"> Create New Contact</span>
                    <span>:</span>
                    <span id="">Judi Murdock  </span>
                </p>
                
                <div class="form-check mt-3 mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Create a new Deal for this Account.
                    </label>
                </div>
                <p><b>Owner of the records: </b></p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="" id="records" name="name"/>
                    <span class="input-group-text"><i class="zmdi zmdi-search"></i></span>
                </div>
               
            </div>
            <div class="modal-footer">             
                <div class="text-center">
                    <button class="btn btn-primary me-1" data-bs-dismiss="modal" type="button"> <i class="zmdi zmdi-swap"></i> Convert </button>
                    <button class="btn btn-danger" data-bs-dismiss="modal" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                </div>
            </div>
          </div>
        </div>
    </div>
    {/* <!-- :::::::2-16-2020;;;;;;; add model status section              -->      */}
    <div class="modal fade mdds" id="fristattempt" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center" id="exampleModalLongTitle"><b>1st attempt</b></h4>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
                <div class="alert alert-primary mb-4" role="alert">
                This is a primary alert—check it out!
              </div>             

                <div class="form-group">
                    <p> Lable Here</p>
                    <input type="text" id="" class="form-control" placeholder=""/>
                </div>
                <div class="form-group">
                    <p> Date</p>
                    <input type="text" id="" class="form-control" placeholder="DD/MM/YYYY"/>
                </div>
                <div class="form-group">
                   <p> Comments</p>
                <textarea  class="form-control"></textarea>
                </div>
            </div>
            <div class="modal-footer">             
                <div class="text-center">
                    <button class="btn btn-primary me-1" data-bs-dismiss="modal" type="button"> <i class="zmdi zmdi-upload"></i> Update </button>
                    <button class="btn btn-danger" data-bs-dismiss="modal" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                </div>
            </div>
          </div>
        </div>
    </div>
 



{/* send Email */}

    <div class="modal right-half md-one" id="emailsend" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-bs-toggle="modal" data-bs-target="#delete">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-email-open"></i>Send Email</b>
                    </h4>
                </div>
                <div class="modal-body pe-0 ps-0 contbody">
                    <div class="row  m-0">
                        <div id="side_lft" class="span0">
                            <div class="pt-2">
                                <h4 class="mt-1">Create Template <a  href="#" class="btn btn-danger btn-sm float-right text-righ trig-cross" type="button"> <i class="zmdi zmdi-close"></i></a></h4>
                                <hr/>
                                <div class="sidelft">
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Apply on company site</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Commute </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Initial message</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Rejection note </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert"> Remote interview  </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Request more info </a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Still interested?</a>
                                <a class="btn btn-outline-primary btn-block mt-2 font-16 bold clickmode" data-show=".alert">Temporary remote job</a>
                            </div>
                            </div> 
                        </div>
                        <div id="side_rgt" class="col-md-12 ps-0 pe-0 f8f8f8bg">
                            <div class="tab-content p-0">
                                <div role="tabpanel" class=" tab-pane in active">
                                    <div class="row m-0">
                                        <div class="col-md-12 p-0">
                                            <div class="f8f8f8bg">
                                                <div class="card mb-0 p-2 f8f8f8bg">
                                                    <div class="body mb-2">
                                                        <div class="group_lead">
                                                            <input type="text" class="input_text" id="" required="required"/>
                                                            <label for="" class="lablefilled">To</label>                                           
                                                        </div> 
                                                        <div class="group_lead mb-0">
                                                            <input type="text" class="input_text" id="" required="required"/>
                                                            <label for="" class="lablefilled">Subject</label>                                           
                                                        </div>  
                                                    </div>
                                                    <div class="body mb-2">
                                                        <a class="btn btn-primary trig-add"href="#"><i class="zmdi zmdi-file"></i> <strong>Templates</strong></a>   
                                                        <a class="btn btn-primary ms-1" type="button"data-bs-toggle="modal" data-bs-target="#savetemp" href="#"><i class="zmdi zmdi-save"></i> <strong>Save as Template</strong></a>                                                        
                                                        <a  href="#" class="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target="#Schedule"><i class="zmdi zmdi-alarm-check"></i> <strong>Schedule</strong></a>
                                                        <a  href="#" class="btn btn-danger ms-2 float-right" type="button"data-bs-toggle="modal" data-bs-target="#delete"> <i class="zmdi zmdi-close"></i></a>                                                       
                                                    </div>
                                                    <div class="body">
                                                        <div class="summernote">
                                                            Hello there,
                                                            <br/>
                                                            <p>The toolbar can be customized and it also supports various callbacks such
                                                                as
                                                                <code>oninit</code>,
                                                                <code>onfocus</code>,
                                                                <code>onpaste</code> and many more.</p>
                                                            <p>Please try
                                                                <b>paste some texts</b> here</p>

                                                                <div class="alert alert-secondary ddnone" role="alert">
                                                                    <b class="col-blue bold">Apply on company site</b>
                                                                    This is a secondary alert—check it out!
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
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">
                            <div class="text-center">
                                <button class="btn btn-primary clickmode me-1" data-show="." data-hide="" type="button">  Send </button>
                                <button class="btn btn-danger" type="button"data-bs-toggle="modal" data-bs-target="#delete"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Message ?</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-center">
                <div class="p-4">
                    <p>Are you sure you want to discard this message?<br/>
                        Your message will not be saved.
                        </p>
                        <div class="text-center">
                            <button class="btn btn-primary me-1 btn-sm" data-bs-dismiss="modal">  Discard </button>
                            <button class="btn btn-danger btn-sm" data-bs-dismiss="modal"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                        </div>
                </div>   
            </div>
            
          </div>
        </div>
    </div>
    <div class="modal right-half md-one" id="savetemp" tabindex="-1" role="dialog" aria-labelledby="shortModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite fixed-top">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Template</b>
                    </h4>
                </div>
                <div class="modal-body pe-0 ps-0 pb-0">  
                    <div class="row  m-0">  
                        <div class="col-12 col-md-6 col-lg-7 pt-4">
                            <div class="group_lead">
                                <input type="text" id="" class="input_text" required="required"/>
                                <label for="" class="lablefilled"> Templet Name<span>*</span> </label>                                           
                            </div> 
                            
                            <div class="group_lead">
                                <textarea required="required" id="Message"></textarea>
                                <label for="Message" class="lablefilled">Message</label>                                          
                            </div>
                            <h5>Insert placeholder:</h5> 
                            {/* <a class="btn btn-outline-secondary m-1">{CANDIDATE_FIRST_NAME}</a>    
                            <a class="btn btn-outline-secondary m-1">{CANDIDATE_NAME}</a>    
                            <a class="btn btn-outline-secondary m-1">{JOB_TITLE}</a>    
                            <a class="btn btn-outline-secondary m-1">{JOB_LOCATION}</a>    
                            <a class="btn btn-outline-secondary m-1">{COMPANY_NAME}</a>   */}
                            <p class="col-grey mt-3">Insert candidate name, Job title, Job location or company name. Placeholders will automatically update between candidates.</p>                
                        </div> 
                        <div class="col-12 col-md-6 col-lg-5" style={{background:"#f9f9f9",borderLeft:'1px solid #ddd',height:"86vh" }}>
                            <div class="p-3 col-black">
                                <h3 class="mt-0 mb-0"><b>Preview</b></h3>
                                <hr/>                                        
                                <h6>Hello,</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>                                        
                            </div>                              
                        </div>            
                    </div>                   
                </div>
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                                <button class="btn btn-primary  me-1 clickmode" data-show=".contactlist, .showthing, .nxtprv" data-hide=".md-one, .hdbox, .modal-backdrop" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* scheduled */}
<div className="modal right-half md-one" id="schedule" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2">
                    <b> <i className="zmdi zmdi-alarm-check"></i> Schedule</b>
                </h4>
            </div>
            <div className="modal-body pe-0 ps-0 contbody">
                <div className="row  m-0">
                    <div className="col-md-12 ps-0 pe-0">
                        <div className="tab-content p-0">
                            <div role="tabpanel" className="tab-pane in active">
                                {/* <div id="lead-details" className="media border p-4 mb-0"></div> */}
                                <div id="lead-details" className="media border p-4 mb-0">
                                    <div className="media-body ptag">
                                        {res && res.length > 0 ? <>
                                            <h5>{res && res.length > 0 && res[0].leads[0].lead_company_name}</h5>
                                        </> : <></>}
                                        <p className="mb-1">{res && res.length > 0 && res[0].leads[0].lead_type_name}
                                            {res && res.length > 0 ? <>| </> : <></>}
                                            <span className="col-black">{res && res.length > 0 &&
                                                res[0].leads[0].cat_name}</span>
                                        </p>
                                        {res && res.length > 0 ? <>
                                            <p className="mb-1"><i className="zmdi zmdi-email-open"></i> <span
                                                    id="">{res && res.length > 0 && res[0].leads[0].lead_email}</span>
                                                <small className={res && res.length> 0 && res[0].leads[0].email_status
                                                    === 1 ? "col-green" : "col-red"}> {res && res.length > 0 &&
                                                    res[0].leads[0].email_status === 1 ? " Verified" : "Unverified"}</small>
                                            </p>
                                        </>
                                        : <></>}

                                        <p className="mb-1">
                                            {res && res.length > 0 ? <><i className="zmdi zmdi-city-alt"></i></> : <></>
                                            } {res && res.length > 0 && res[0].leads[0].lead_city} {res && res.length >
                                            0 && "," + res[0].leads[0].lead_postcode
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-3 pb-2 ps-4 pe-4">
                                    <h4 className="mb-0">Application</h4>
                                    <hr />
                                    <div className="row mb-2">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Time zone</strong></label>
                                                <select id="ddlTimeZone" name="ddlTimeZone" onFocus={selectdateRange}
                                                    className="form-control timezone">
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Meeting with Person</strong></label>
                                                <input type="text" className="form-control" id="txt_MeetingWithPerson"
                                                    autoComplete="off" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row msrow mb-2" data-counter="0">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Date</strong></label>
                                                <input type="text" className=" form-control datepicker hasDatepicker" id="txt_date0"
                                                    autoComplete="off" placeholder="dd/mm/yyyy" maxLength="10" />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-5 pe-0">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>Start Time</strong></label>
                                                <input type="text" id="txt_starttime0"
                                                    className="form-control timepicker" autoComplete="off"
                                                    placeholder="hh:mm" maxLength="5" />
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-1 col-sm-1 ps-0 pe-0 pt-4 mt-1 text-center">
                                            <strong>to</strong> </div>
                                        <div className="col-md-2 col-sm-5 ps-0">
                                            <div className="form-group">
                                                <label htmlFor=""><strong>End Time</strong></label>
                                                <input type="text" id="txt_endtime0"
                                                    className="form-control timepicker end-time" data-counter="0"
                                                    autoComplete="off" placeholder="hh:mm" maxLength="5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="addmore_placeholder"></div>
                                    <p><a id="btn_lsAddmore"
                                            className="btn btn-primary bgtn-sm evt-leads-action mt-3 mb-2"
                                            data-action="schedule" data-request_for="add-more" data-counter="0"><i
                                                className="zmdi zmdi-plus-circle-o-duplicate"></i> Suggest multiple
                                            times</a></p>
                                    <h5 className="mb-2 mt-4"><b>Schedule Type</b></h5>
                                    <div className="d-flex ps-3">

                                        <div className="form-check btn btn-outline-primary">
                                            <input type="radio" className="form-check-input evt-leads-action" id="video"
                                                name="meeting-type" defaultValue="Video" data-action="schedule"
                                                data-request_for="show-hide" />
                                            <label className="form-check-label"
                                                htmlFor="video"><strong>Video</strong></label>
                                        </div>

                                        <div className="form-check btn btn-outline-primary ms-4 me-4">
                                            <input type="radio" className="form-check-input evt-leads-action" id="phone"
                                                name="meeting-type" defaultValue="Phone" data-action="schedule"
                                                data-request_for="show-hide" />
                                            <label className="form-check-label"
                                                htmlFor="phone"><strong>Phone</strong></label>
                                        </div>

                                        <div className="form-check btn btn-outline-primary">
                                            <input type="radio" className="form-check-input evt-leads-action"
                                                id="in-person" name="meeting-type" defaultValue="In-person"
                                                data-action="schedule" data-request_for="show-hide" />
                                            <label className="form-check-label"
                                                htmlFor="in-person"><strong>In-person</strong></label>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-2 mt-3"><b>Video conference link</b></h5>
                                        <div className="form-check mb-3 video-section">
                                            <input type="radio" className="form-check-input evt-leads-action"
                                                defaultChecked="checked" id="link_internal" name="link-type"
                                                defaultValue="Internal" data-action="schedule"
                                                data-request_for="link-type" />
                                            <label className="form-check-label" htmlFor="link_internal">
                                                <strong>Use Indeed video conferencing</strong><span
                                                    className="bbl-light ms-1 col-green">Recommended</span> <br />
                                                <span className="col-grey">
                                                    No need to download software or import your own links,
                                                    <strong>We will send a video conference link</strong> to you and
                                                    your candidate when your interview is confirmed.
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-3 video-section">
                                            <input type="radio" className="form-check-input evt-leads-action"
                                                id="link_external" name="link-type" defaultValue="External"
                                                data-action="schedule" data-request_for="link-type" />
                                            <label className="form-check-label" htmlFor="link_external"><strong>Use
                                                    third-party video conferencing service</strong> <br /> <span
                                                    className="col-grey">Paste your third-party video conferencing
                                                    links.</span></label>
                                        </div>
                                        <div id="external-link" className="ddnone">
                                            <div className="group_lead">
                                                <input className="input_text" id="txt_ExternalLink" required="required"
                                                    type="text" autoComplete="off" />
                                                <label className="lablefilled">External Link</label>
                                            </div>
                                        </div>
                                        <div className="group_lead mt-4 phone-section ddnone">
                                            <input className="input_text allow-numbers-only" id="txt_Phone"
                                                required="required" type="text" maxLength="15" autoComplete="off" />
                                            <label className="lablefilled">Phone number <i
                                                    className="zmdi zmdi-info col-blue"></i></label>
                                        </div>
                                        <div className="group_lead mt-4 inperson-section ddnone">
                                            <input className="input_text" id="txt_Address" required="required"
                                                type="text" autoComplete="off" />
                                            <label className="lablefilled">Address</label>
                                        </div>
                                        <div className="group_lead">
                                            <label htmlFor="Message">Message</label>
                                            <textarea required="required" id="msgBody"
                                                className="summernote-editor"></textarea>
                                            <span id="spanSubject" style={{display:"none"}}></span>
                                        </div>
                                        <div className="group_lead" id="additional">
                                            <input className="input_text" id="txt_Email" required="required"
                                                autoComplete="off" type="text" />
                                            <label className="lablefilled">Add additional emails</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="model-footer">
                <div className="row m-0">
                    <div className="col-md-12">
                        <div className="text-center comment-video">
                            <a id="btnSendInvitation" className="btn btn-primary  evt-leads-action"
                                data-action="schedule" data-request_for="create">Send video invitation</a>
                            <button className="btn btn-danger ms-1" type="button" data-bs-dismiss="modal"><i
                                    className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    <div class="modal right-quater md-one" id="smssend" tabindex="-1" role="dialog" aria-labelledby="addpage">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="myModalLabel2"> <b> <i class="zmdi zmdi-email-open"></i>Send SMS</b> </h4>
                </div>
                <div class="modal-body pe-0 ps-0 pb-0 contbody">  
                    <div class="row  m-0">                                 
                        <div class="col-sm-12 mt-3">
                            <div class="group_lead">
                                <input type="number" class="input_text" id="" required="required"/>
                                <label for="" class="lablefilled">Contact Number</label>                                           
                            </div>                                                
                        </div>
                        <div class="col-sm-12">
                            <div class="group_lead">
                                <textarea required="required" id="smss"></textarea>
                                <label for="smss" class="lablefilled"> Write Massage</label>                                                          
                            </div>                                               
                        </div>                                
                    </div>             
                </div>  
                <div class="model-footer">
                    <div class="row m-0">
                        <div class="col-md-12">                          
                            <div class="text-center">
                                <button class="btn btn-primary clickmode me-1" type="button"> Send</button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>           
    </div>
    {/* Import */}
    <div className="modal right-half md-one" id="modalimport" tabIndex="1" role="dialog" aria-labelledby="shortModal" data-backdrop="static">
        <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
            <div className="modal-content" style={{ height: "auto!important" }}>
                <div className="modal-header bg-blu-lite fixed-top">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title"><b>Import CSV File</b></h4>
                </div>
                <div className="modal-body pe-0 ps-0 pb-0">
                    <div className="row  m-0">
                        <div className="col-md-12 ps-0 pe-0">
                            <div className="loader"></div>
                            <div className="tab-content p-0">
                                <div role="tabpanel" className=" tab-pane in active" id="" style={{ height: "91vh" }}>
                                    <div className="row m-0 justify-content-center">
                                        <div className="col-md-6 mt-3 divupload">
                                            <input type="file" id="csvfile" className="form-control" multiple="" />
                                        </div>
                                        <div className="col-md-2 mt-3 divupload">
                                            <a className="btn btn-primary evt-leads-main" data-action="leads-main" data-request_for="import-csv"><i className="zmdi zmdi-upload">&nbsp;</i>Upload</a>
                                        </div>
                                        <div className="col-md-4 mt-3 divupload">
                                            <small className="col-blue" id="spnCsvRowCount"></small>
                                        </div>
                                        <div className="col-md-6 mt-3 csvddl disableform" style={{ display: "none" }}>
                                            <div className="group_lead">
                                                <select className="custom-select select_f" defaultValue={"0"} id="ddl_leadtype_csv">
                                                    <option value="0" >Choose Lead Type</option>
                                                    {leadTypeList.map((lead, i) => (
                                                        <option key={i} value={lead.id}>{lead.lead_type_name}</option>
                                                    ))}
                                                </select>
                                                <label className="lablefilled">Lead Type<span>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3 csvddl disableform" style={{ display: "none" }}>
                                            <div className="group_lead">
                                                <select className="custom-select select_f" defaultValue={"0"} id="ddl_category_csv">
                                                    <option value="0" >Choose Category</option>
                                                    {CategoryList.map((cat, i) => (
                                                        <option key={i} value={cat.cat_id}>{cat.cat_name}</option>
                                                    ))}
                                                </select>
                                                <label className="lablefilled">Category</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 csvddl" style={{ display: "none" }}>
                                            <div className="group_lead form-check custom-checkbox">
                                                <input type="checkbox" id="chk_override" className="form-check-input" />
                                                <label className="form-check-label font-18" htmlFor="chk_override"> <b> Override the existing record </b></label>
                                            </div>
                                        </div>
                                        <div id="csv_ddl_placeholder" className="col-md-6"></div>
                                        <div id="dbfields_placeholder" className="col-md-6"></div>
                                        <div id="csv_tbl_placeholder" className="col-md-12 mt-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="model-footer">
                    <div className="text-center">
                        <a id="btnvwsbmt" className="btn btn-primary evt-leads-main" data-action="leads-main" data-request_for="view-csv">View</a>
                        <a id="btncnclcsv" className="btn btn-danger ms-1 me-1" data-bs-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Close</a>
                        <a id="btnbckcsv" className="btn btn-primary evt-leads-main" data-action="leads-main" data-request_for="back"><i className="zmdi zmdi-arrow-left">&nbsp;</i>Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade mdds" id="contact" role="dialog" aria-labelledby="ModalCenterTitle" tabIndex="-1" aria-hidden="true" data-backdrop="static">
        <div className="modal-dialog ui-draggable ui-draggable-handle modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title text-center" id="exampleModalLongTitle"><b>Contact</b></h4>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body pt-1">
                    <div id="clsection" className="dd-content text-center p-3">
                        <p id="telMobNo_placeholder"></p>
                        <div>
                            <b>
                                Did they answer?
                            </b>
                            <p>We'll save your answer as a note and notify the candidate</p>
                        </div>
                        <span id="spanLeadEmail" style={{ display: "none" }}></span>
                        <p><a className="btn btn-outline-primary btn-lg evt-leads-action" data-action="notes" data-request_for="call-back" style={{ width: "300px" }} data-message="Call Back">Call Back</a></p>
                        <div id="answers_placeholder">
                            {answer_list.map((ans, i) => (
                                <p key={i}><a className="btn btn-outline-primary btn-lg evt-leads-action" data-action="notes" data-request_for="create" data-type="ncallback" style={{ width: "300px", cursor: "pointer" }} data-message={ans.message}>{ans.message}</a></p>
                            ))}
                        </div>
                    </div>
                    <div id="cfsection" className="disableform" style={{ display: "none" }}>
                        <div className="group_lead mt-3">
                            <input type="text" id="call_label" className="input_text" required="required" autoComplete="off" value="Call Back" disabled="disabled" />
                            <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Label</label>
                        </div>
                        <div className="group_lead">
                            <input type="text" id="person_name" className="input_text" required="required" autoComplete="off" />
                            <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Person Name<span>*</span></label>
                        </div>
                        <div className="row">
                            <div className="col-6 pe-0">
                                <p>From</p>
                                <div className="row">
                                    <div className="col pe-0">
                                        <div className="group_lead  mb-1">
                                            <input type="text" id="cb_start_date" className="input_text datepicker" required="required" autoComplete="off" maxLength="10" />
                                            <label className="lablefilled"><i className="zmdi zmdi-calendar">&nbsp;</i>Date<span>*</span></label>
                                        </div>
                                    </div>
                                    <div className="col ps-1">
                                        <div className="group_lead  mb-1">
                                            <input type="text" id="cb_start_time" className="input_text timepicker " required="required" autoComplete="off" maxLength="5" />
                                            <label className="lablefilled"><i className="zmdi zmdi-time">&nbsp;</i>Time<span>*</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ps-1">
                                <p>To</p>
                                <div className="row">
                                    <div className="col pe-0">
                                        <div className="group_lead mb-1">
                                            <input type="text" id="cb_end_date" className="input_text datepicker " required="required" autoComplete="off" maxLength="10" />
                                            <label className="lablefilled"><i className="zmdi zmdi-calendar">&nbsp;</i>Date<span>*</span></label>
                                        </div>
                                    </div>
                                    <div className="col ps-1">
                                        <div className="group_lead  mb-1">
                                            <input type="text" id="cb_end_time" className="input_text timepicker" required="required" autoComplete="off" maxLength="5" />
                                            <label className="lablefilled"><i className="zmdi zmdi-time">&nbsp;</i>Time<span>*</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3"><small>Eg:- Date(dd/mm/yyyy), Time(hh:mm)</small></div>
                        </div>
                        <div className="text-center pt-0">
                            <a className="btn btn-primary btn-sm evt-leads-action me-1" data-action="notes" data-request_for="create" data-type="callback"><i className="zmdi zmdi-upload">&nbsp;</i>Submit</a>
                            <a className="btn btn-danger btn-sm evt-leads-action" data-action="notes" data-request_for="cancel-call"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</a>
                        </div>
                    </div>
                </div>
                <div className="modal-footer mt-2">
                    <div className="text-center">
                        <button className="btn btn-danger" data-bs-dismiss="modal" type="button"><i className="zmdi zmdi-rotate-left"></i> Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal right-quater md-one" id="addmydoc" tabindex="-1" aria-labelledby="shortModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-blu-lite">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel2">
                        <b> <i class="zmdi zmdi-plus-circle-o-duplicate"></i> Add Edit New Document</b>
                    </h4>
                </div>
                <div class="modal-body ps-0 pe-0 pb-0">  
                    <div class="tab-content pt-2 pb-2 ps-2 pe-2">                                            
                        <div role="tabpanel" class=" tab-pane in active">                      
                            <div class="row m-0">
                                <div class="col-md-12 Uploadimg">
                                    <form method="post" action="#" id="#">                      
                                        <div class="form-group files mt-2">
                                        <label><b>Upload Your File/Image </b></label>
                                        <input type="file" class="form-control mt-3" multiple=""/>
                                        </div>
                                        <p class="col-grey font-11">Select Media(jpg, png, pdf allowed - upto 6 Mb)</p> 
                                    </form> 
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">Document Name</label>                                           
                                    </div> 
                                    <div class="group_lead">
                                        <input type="url" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">File Url</label>                                           
                                    </div> 
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">Document Type</label>                                           
                                    </div> 
                                    <div class="group_lead">
                                        <input type="text" id="" class="input_text" required="required" />                                           
                                        <label for="" class="lablefilled">Date</label>                                           
                                    </div>
                                    <div class="group_lead">
                                        <textarea required="required" class="input_text" id="Description"></textarea>
                                        <label for="Description" class="lablefilled">Description</label>                                           
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
                                <button class="btn btn-primary me-1 clickmode" data-show=".doclist" data-hide=".md-one, .addmydocbtn, .modal-backdrop" type="button"> <i class="zmdi zmdi-upload"></i> Save </button>
                                <button class="btn btn-danger" type="button"><i class="zmdi zmdi-rotate-left"></i> Cancel</button>
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
