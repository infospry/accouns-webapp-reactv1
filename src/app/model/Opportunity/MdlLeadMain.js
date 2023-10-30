import { useEffect, useState, useReducer } from "react";
import { post } from "../../services/api_axios_services";
import ApiEndPoints from "../../utils/ApiEndPoints";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const MdlLeadMainEdit = ({ leadTypeList = [], CategoryList = [], CountryList = [], lead_detail, lead_settings }) => {
    const [formData, setFormData] = useReducer(formReducer, {})
    let { lead_type, lead_category_id, lead_channel_id
        , lead_name, lead_dob, lead_gender } = lead_detail;
    //const [title, setTitle] = useState();
    // const [name, setName] = useState();
    // const [formParameters, setFormParameters] = useState({
    //        name: '',
    //        company_name: ''
    //     });
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const IsUrlValid = (e) => {
        ns_util.IsUrlValid(e.target)
    }
    const submitLead = async (e) => {
        var strJsonString = ns_validations.leadsMainEdit(e.target);
        let name = `${formData.lead_name}`
        if (strJsonString !== false) {
            const resp = await post(strJsonString, ApiEndPoints.opportunity);
            if (resp.response_status === "OK") {
                ModalHide('#leadmain');
                alertmsg.msg("Message", resp.response_msg, "S");
            }
        }
    }
    useEffect(() => {
        setTimeout(() => {
            // lead_detail && lead_detail.lead_settings.map((section, i) => {
            //     section.fields.map((field, i) => {
            //         // ns_util.replace_html_in_element("#" + field.field_id, 'NA')
            //         $("#frmLeadDetails input[name=" + field.field_id + "]").val("");
            //         $("#frmLeadDetails textarea[name=" + field.field_id + "]").val("");
            //     })
            // })
            // lead_detail && lead_detail.length > 0 && lead_detail.lead_details.map((field, i) => {
            //     console.log(field)
            //     if (field.field_value !== ''){
            //         $("#frmLeadDetails input[name=" + field.field_id + "]").val(field.field_value);
            //         $("#frmLeadDetails textarea[name=" + field.field_id + "]").val(field.field_value);
            //     }
            //        // ns_util.replace_html_in_element("#" + field.field_id, field.field_value)
            //     else
            //         ns_util.replace_html_in_element("#" + field.field_id, 'NA')
            // })
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
    return (
        <>
            <div className="modal right-half md-one" id="leadmain" tabIndex="1" role="dialog" aria-labelledby="shortModal" data-backdrop="static">
                <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                    <div className="modal-content" style={{ height: "auto!important" }}>
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel2">
                                <b id="lead_header">Edit Lead</b>
                            </h4>
                        </div>
                        <div id="leadCreate" className="modal-body pr-0 pl-0 pb-0">
                            <span id="span_Orguid" style={{ display: "none" }}></span>
                            <div className="row  m-0">
                                <div className="col-md-12 pl-0 pr-0">
                                    <div className="loader"></div>
                                    <div className="tab-content p-0">
                                        <div role="tabpanel" className=" tab-pane in active" style={{ height: "91vh" }}>
                                            <div className="row m-0 justify-content-center mt-3">
                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header  pt-1 pl-2">
                                                            <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Lead Type<span className="col-red">*</span></h2>
                                                        </div>
                                                        <div className="body p-2 mb-2">
                                                            <div className="group_lead mb-0">
                                                                <select className="custom-select select_f lead-input" onChange={setFormData} defaultValue={lead_type} key={lead_detail !== false ? lead_detail.u_id : "0"} id="ddl_lead_typesEdit" data-val={lead_detail && lead_detail.lead_type} data-action="settings" data-request_for="select">
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
                                                        <div className="header  pt-1 pl-2">
                                                            <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Categories</h2>
                                                        </div>
                                                        <div className="body p-2 mb-2">
                                                            <div className="group_lead mb-0">
                                                                <select className="custom-select select_f lead-input" key={lead_detail !== false ? lead_detail.u_id : "0"} onChange={setFormData} defaultValue={lead_category_id} id="ddl_parent_catEdit">
                                                                    <option value="0">Choose Category</option>
                                                                    {CategoryList.map((cat, i) => (
                                                                        <option key={i} value={cat.cat_id}>{cat.cat_name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header pt-1 pl-2">
                                                            <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Channel </h2>
                                                        </div>
                                                        <div className="body p-2 mb-2">
                                                            <div className="group_lead mb-0">
                                                                <select className="custom-select select_f"  id="ddl_lead_channelEdit" key={lead_detail !== false ? lead_detail.u_id : "0"} onChange={setFormData} defaultValue={lead_detail && lead_detail.lead_channel_id}>
                                                                    <option value="0">Choose Lead Channel</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header pt-2 pl-2">
                                                            <h2><i className="zmdi zmdi-account-box-mail">&nbsp;</i>Basic Details</h2>
                                                        </div>
                                                        <div className="body p-2">
                                                            <div className="row">
                                                                <div className="col-md-6 disableform">
                                                                    <div className="group_lead">
                                                                        <div className="group_lead mb-0">
                                                                            <select className="custom-select select_f" id="ddl_titleEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_title : "0"}>
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
                                                                        <input className="input_text" name="lead_name" id="txt_lead_nameEdit" onChange={setFormData} defaultValue={lead_name} key={lead_detail !== false ? lead_detail.u_id : "0"} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Name<span>*</span></label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <div className="group_lead mb-0">
                                                                            <select className="custom-select select_f" name="lead_gender" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_gender} id="ddl_genderEdit">
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
                                                                        <input className="input_text datepicker" name="lead_dob" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} id="txt_dobEdit" defaultValue={lead_detail !== false ? lead_detail.lead_dob : ""} required="required" type="text" maxLength="10" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-account">&nbsp;</i>Date of Birth<span>*</span></label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_company_nameEdit" key={lead_detail !== false ? lead_detail.u_id : "0"} onChange={setFormData} defaultValue={lead_detail !== false ? lead_detail.lead_company_name : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-city">&nbsp;</i>Company Name<span>*</span></label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text allow-email-only" id="txt_lead_emailEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_email : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-email">&nbsp;</i>Email<span>*</span></label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text allow-numbers-only" id="txt_lead_mobileEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_mobile : ""} required="required" type="text" maxLength="11" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-smartphone-android">&nbsp;</i>Mobile</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text allow-numbers-only" id="txt_lead_phoneEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_phone : ""} required="required" type="text" maxLength="15" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-phone">&nbsp;</i>Telephone</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_lead_websiteEdit" required="required" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_website : ""} type="text" onKeyPress={IsUrlValid} autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-pin">&nbsp;</i>Website</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_lead_noteEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_note : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-comment-edit">&nbsp;</i>Note</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header pt-1 pl-2">
                                                            <h2><i className="zmdi zmdi-pin"></i> Address Details </h2>
                                                        </div>
                                                        <div className="body p-2">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_lead_addressEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_address : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-pin">&nbsp;</i>Address line</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_lead_cityEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_city : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-city">&nbsp;</i>City<span>*</span></label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_lead_countyEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_county : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-city-alt">&nbsp;</i>State/County</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_lead_pincodeEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_postcode : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-map">&nbsp;</i>Postcode<span>*</span></label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 disableform">
                                                                    <div className="group_lead">
                                                                        <select className="custom-select select_f" id="ddl_lead_countryEdit" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.lead_country : "0"} required="required" data-val={lead_detail && lead_detail.lead_country}>
                                                                            <option value="0">Choose Country</option>
                                                                            {CountryList.map((cntry, i) => (
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
                                                        <div className="header pt-1 pl-2">
                                                            <h2><i className="zmdi zmdi-pin">&nbsp;</i>Social Media Details</h2>
                                                        </div>
                                                        <div className="body p-2">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_facebook" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.facebook : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-facebook">&nbsp;</i>Facebook</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_twitter" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.twitter : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-instagram">&nbsp;</i>Twitter</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_instagram" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.instagram : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-instagram">&nbsp;</i>Instagram</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_youtube" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.youtube : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-youtube">&nbsp;</i>Youtube</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_linkdin" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.linkedin : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-linkedin">&nbsp;</i>Linkedin</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="group_lead">
                                                                        <input className="input_text" id="txt_pinterest" onChange={setFormData} key={lead_detail !== false ? lead_detail.u_id : "0"} defaultValue={lead_detail !== false ? lead_detail.pinterest : ""} required="required" type="text" autoComplete="off" />
                                                                        <label className="lablefilled"><i className="zmdi zmdi-pinterest">&nbsp;</i>Pinterest</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="row_dim">
                                                    <form id="frmLeadDetails">
                                                        <div className="col-md-12">
                                                            {lead_settings.length >= 0 && lead_settings.map((setting, i) => (
                                                                <div key={i} className="card bdr5 mt-0">
                                                                    {setting.status === "true" ? <>
                                                                        <div className="header pt-1 pl-2">
                                                                            <h2><i className={setting.cssClass ? setting.cssClass : ""}>&nbsp;</i>{setting.section}</h2>
                                                                        </div>
                                                                        <div className="body p-2">
                                                                            <div className="row">
                                                                                {setting.fields.map((field, j) => (
                                                                                    <div key={j} className="col-md-6">
                                                                                        {field.status === "true" ? <>
                                                                                            <div className="group_lead">
                                                                                                {field.type === 'textarea' ?
                                                                                                    <>
                                                                                                        <textarea className={"input_text inputField "} onChange={setFormData} key={field.field_id} data-mandatory={field.mandatory} data-field-label={field.field_label} data-id={field.field_id} id={field.field_id} name={field.field_id} required="required" autoComplete="off"></textarea>
                                                                                                        <label className="lablefilled"><i className={field.cssClass ? field.cssClass : ""}>&nbsp;</i>{field.field_label}</label>
                                                                                                    </>
                                                                                                    :
                                                                                                    <>
                                                                                                        <input key={field.field_id} onChange={setFormData} className={"input_text inputField " + (field.validation === "numeric" && " allow-numbers-only") + (field.type === "date" && " datepicker")} data-id={field.field_id} name={field.field_id} data-field-label={field.field_label} data-mandatory={field.mandatory} id={field.field_id} required="required" type="text" autoComplete="off" />
                                                                                                        <label className="lablefilled"><i className={field.cssClass ? field.cssClass : ""}>&nbsp;</i>{field.field_label}</label>
                                                                                                    </>
                                                                                                }
                                                                                                {datePicker()}
                                                                                            </div>
                                                                                        </> : <></>}
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                        : <></>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header pt-1 pl-2">
                                                            <h2><i className="zmdi zmdi-labels"></i> Custom Fields </h2>
                                                        </div>
                                                        <div className="body p-2">
                                                            <div id="table" className="table-editable">
                                                                <table id="tblCustomFieldsEdit" className="table">
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
                                                                            <td><span id="addmorefield" className="table-add btn btn-primary mb-4 evt-leads-action" data-action="leads" data-request_for="add-custom-fields" data-request_from="edit" data-cntr="0" data-toggle="tooltip" title="Add more">Add more+</span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="card bdr5 mt-0">
                                                        <div className="header pt-1 pl-2">
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
                                        <a id="btn_submit_lead" className="btn btn-primary btn-lg " onClick={submitLead} data-u_id={lead_detail !== false ? lead_detail.u_id : "0"} data-action="leads-main" data-request_for="update" data-action-type="lead">Update </a>
                                        <a id="btn_copytoClip" className="btn btn-primary btn-lg"><i className="zmdi zmdi-copy">&nbsp;</i>Copy to clipboard</a>
                                        <a className="btn btn-danger btn-lg" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</a>
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

export default MdlLeadMainEdit;