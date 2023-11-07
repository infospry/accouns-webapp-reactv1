'use client'
import ApiEndPoints from "../../utils/ApiEndPoints";
import MdlViewDetail from "../model/MdlViewDetail";
import MdlAddStatus from "../model/MdlAddStatus";
import { getUserList } from "../../services/dropdownServices";
import { get, post } from "../../services/api_axios_services";
import { useState, useEffect, useRef, useReducer } from 'react';
import { getCookie } from 'cookies-next';
import { getData } from '../../services/apiservice';

const Salespipeline = ({ salesList = [] }) => {
    const [statusList, setStatusList] = useState(salesList);
    const [lead_info, setLead_info] = useState([]);
    const [loader, setLoader] = useState(false);    
    
       const viewLead = async (e, uid) => {
        e.preventDefault();
        let params = { "leads": { "u_id": uid }, "action": "sales-pipeline", "action_on": "leads_main", "request_for": "view-lead" };
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            setLead_info(resp.data.response.lead_info);          
        }
    }
//#region Create New Lead
const [leadTypeList, setLeadTypeList] = useState([]);
const [categoryList, setCategoryList] = useState([]);
const [countryList, setCountryList] = useState([]);
const [chanelList, setChanelList] = useState([]); 
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



    const deleteStatus = async (e, status) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this?")) {
            let params = {
                "leads": { "status_id": status.status_id },
                "action": "sales-pipeline", "action_on": "leads_main", "request_for": "delete"
            };
            const resp = await post(params, ApiEndPoints.opportunity);
            if (resp.response_status === "OK") {
                alertmsg.msg("Message", "Status has been deleted successfully", "S");
                setStatusList(statusList.filter((s) => s.status_id !== status.status_id))
            }
            else { 
                 alertmsg.msg("Message",resp.response_msg, "e");
            }
        }

    }
    const refreshList = async (e) => {
        var params = { "action": "sales-pipeline", "action_on": "leads_main", "request_for": "select", "route": "SalesPipeline", "previous": "0", "next": "5" };
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            setStatusList(resp.data.response.lead_status)
        }
    }
    useEffect(() => {
        getLeadsData();
          getDropdownData();
    }, []);
    
 const getLeadsData = async () => {
      var params = { "action": "sales-pipeline", "action_on": "leads_main", "request_for": "select", "route": "SalesPipeline", "previous": "0", "next": "5" };
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            setStatusList(resp.data.response.lead_status)
        }
    }
    
const addStatus=async(e)=>{
        let  strJsonString = ns_validatios.masters(e.target);
        let statusObj=JSON.parse(strJsonString);
        const resp = await post(strJsonString, ApiEndPoints.MastersApi);
               
                if (resp.response_status === "OK") {
                    let statusObject={
                        "color_code":statusObj.lead_status.color_code,
                        "create_date": new Date().toLocaleDateString('en-CA'),
                        "sort_order":statusObj.lead_status.sort_order,
                        "status_id": 0,
                        "status_name":statusObj.lead_status.status_name,
                        "total_leads":0
                    }
                    setStatusList([statusObject,...statusList])
                    ModalHide('#addstatus');
                    alertmsg.msg("Message", resp.response_msg, "S");
                }
                else if (resp.response_status === "FAILED") {
                    alertmsg.msg("Message", resp.response_msg, "E");
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



    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="pt-2 ps-2 pb-2">
                                <h2 className="font-bold">
                                    <i className="zmdi zmdi-format-line-spacing mr-1"></i>Sales Pipeline
                                </h2>
                            </div>
                            <div className="pagination-email">                        

                                <a href="/opportunities" className="me-4">
                                  <i className="zmdi zmdi-widgets mr-1">&nbsp;</i>List View <i class="zmdi zmdi-arrow-right-top"></i>
                                </a>                              
                                  <a className="btn btn-outline-primary me-1" onClick={refreshList} data-action="leads" data-request_for="refresh"><i
                                    className="zmdi zmdi-refresh"></i> Refresh</a>


                                  <a href="#" className="btn btn-success me-2 evt-leads-action" data-bs-toggle="modal" data-bs-target="#addstatus" data-action="sales-pipeline" data-request_for="add-new-status"><i className="zmdi zmdi-plus-circle-o-duplicate">&nbsp;</i><b>Add New Status</b></a>
                            </div>
                        </div>
                    </div>

                    

                    <div className="contactlist scroll_bar">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="table-responsive pipelien">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        {statusList.map((status, i) => (
                                                            <td key={i}>
                                                                <div className="verti_scroll">
                                                                    <div className="card bdr5 mb-1">
                                                                        <div className="header pl-2 pt-0 pb-0 d-flex justify-content-between">
                                                                            <div>
                                                                                <h2 style={{ color: status.color_code }}>{status.status_name}</h2>
                                                                                <p className="col-grey pl-0">
                                                                                    <span id={"count-" + status.status_id}>{status.total_leads}</span> deals</p>
                                                                            </div>
                                                                            <div className="flwid_72 float-right text-right">
                                                                                <button
                                                                                    class="evt-leads-action"
                                                                                    data-action="leads" data-request_for="add-new" data-action-type="pipeline"
                                                                                    data-status-id={status.status_id}
                                                                                    style={{ cursor: "pointer" }} title="Add new status"data-bs-toggle="modal" data-bs-target="#addNewOpper">
                                                                                    <i className="zmdi zmdi-plus-circle-o-duplicate"></i>
                                                                                </button>
                                                                                <button id={"btndel-" + status.status_id} onClick={(e) => deleteStatus(e, status)}

                                                                                    style={{ cursor: "pointer" }} title="Delete">
                                                                                    <i className="zmdi zmdi-delete"></i></button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="body mb-0 p-0">
                                                                            <ul id={"ul-" + status.status_id}
                                                                                className="list-unstyled c_review float-left connected-sortable droppable-area"
                                                                                style={{ height: "500px" }}>

                                                                                <div id={"sp_lead_placeholder-" + status.status_id}>
                                                                                    {status.leads !== undefined && status.leads.map((lead, j) => (
                                                                                        <li key={j} id={"li-" + lead.lead_uid} onClick={(e) => viewLead(e, lead.lead_uid)} className="evt-leads-actionnn"
                                                                                            data-bs-toggle="modal" data-u_id={lead.lead_uid}
                                                                                            data-action="sales-pipeline" data-request_for="view-lead" data-bs-target="#view_details">
                                                                                            <div className="comment-action">
                                                                                                <h6 className="c_name">{lead.lead_company_name}</h6>
                                                                                                <p className="c_msg col-grey">{lead.lead_type_name} | {lead.cat_name}</p>
                                                                                            </div>
                                                                                        </li>
                                                                                    ))}
                                                                                </div>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flwid mt-2 dnnone">
                                                                        <a id={"lm-" + status.status_id}
                                                                            className="btn btn-primary btn-sm evt-leads-action"
                                                                            data-status-id={status.status_id} data-action="sales-pipeline"
                                                                            data-request_for="load-more" data-cnt="{count}" data-previous="{previous}">Load More...</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MdlViewDetail lead_info={lead_info.length > 0 && lead_info} />           

            <MdlAddStatus statusList={statusList} setStatusList={setStatusList} />
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
                                        
                                    {/* <a id="btn_copytoClip" className="btn btn-primary btn-lg me-1"><i className="zmdi zmdi-copy" style={{margin:'0 15px'}}>&nbsp;</i>Copy to clipboard</a> */}
                                    <a className="btn btn-outline-danger btn-lg" data-bs-dismiss="modal"><i className="zmdi zmdi-close">&nbsp;</i>Close</a>
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

// export const getServerSideProps = async ({ req, res }) => {
//     ""
//     try {
//         var params = { "action": "sales-pipeline", "action_on": "leads_main", "request_for": "select", "route": "SalesPipeline", "previous": "0", "next": "5" };
//         const lang = req.cookies['signin_token']
//         if ((lang === "''") || (lang === undefined)) {
//             res.writeHead(302, { Location: "/login" })
//             res.end()
//         }
//         const response = await getData(params, lang, ApiEndPoints.opportunity)

//         return {
//             props: {
//                 salesList: JSON.parse(response).data.response.lead_status !== "" ? JSON.parse(response).data.response.lead_status : [],
//             },
//         }
//     } catch (err) {
//         // Handle error
//         return {
//             props: null
//         }
//     }
// }
export default Salespipeline