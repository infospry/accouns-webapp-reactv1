import { useEffect, useState, useReducer } from "react";
import { post } from "../../services/api_axios_services";
import ApiEndPoints from "../../utils/ApiEndPoints";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}
const MdlAddLead = ({ leadTypeList = [], CategoryList = [], CountryList = [] }) => {
    const [formData, setFormData] = useReducer(formReducer, {})
    const IsUrlValid = (e) => {
        ns_util.IsUrlValid(e.target)
    }
    const submitLead = async (e) => {
        var strJsonString = ns_validations.leadsMain(e.target);
        console.log(strJsonString)
        let name = `${formData.lead_name}`
        if (strJsonString !== false) {
            const resp = await post(strJsonString, ApiEndPoints.opportunity);
            if (resp.response_status === "OK") {
                ModalHide('#leadmainAdd');
                alertmsg.msg("Message", resp.response_msg, "S");
            }
        }
    }
    return (
        <div className="modal right-half md-one" id="leadmainAdd" tabIndex="1" role="dialog" aria-labelledby="shortModal">
            <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                <div className="modal-content" style={{ height: "auto!important" }}>
                    <div className="modal-header bg-blu-lite fixed-top">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" >
                            <b id="lead_header">Add Lead</b>
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
                                                    <div className="header  pt-1 pl-2">
                                                        <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Categories</h2>
                                                    </div>
                                                    <div className="body p-2 mb-2">
                                                        <div className="group_lead mb-0">
                                                            <select className="custom-select select_f lead-input" onChange={setFormData} id="ddl_parent_cat">
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
                                                            <select className="custom-select select_f" defaultValue={"0"} id="ddl_lead_channel" onChange={setFormData} >
                                                                <option value="0" >Choose Lead Channel</option>
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
                                                                    <input className="input_text datepicker" name="lead_dob" onChange={setFormData} id="txt_dob" required="required" type="text" maxLength="10" autoComplete="off" />
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
                                                    <div className="header pt-1 pl-2">
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
                                                    <div className="header pt-1 pl-2">
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
                                    <a id="btn_submit_lead" className="btn btn-primary btn-lg " onClick={submitLead} data-u_id={"0"} data-action="leads-main" data-request_for="create" data-action-type="lead"><i className="zmdi zmdi-upload">&nbsp;</i>Save </a>
                                    <a id="btn_copytoClip" className="btn btn-primary btn-lg"><i className="zmdi zmdi-copy">&nbsp;</i>Copy to clipboard</a>
                                    <a className="btn btn-danger btn-lg" data-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MdlAddLead