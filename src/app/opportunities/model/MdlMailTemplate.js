'use client'
import { useEffect, useState } from "react"
import { get, post } from "../../services/api_axios_services";
import ApiEndPoints from "../../utils/ApiEndPoints";

const MdlMailTemplate = ({ status_master_list = [], template = [], templateList = [], setTemplateList }) => {
    const [default_status, setDefault_status] = useState(parseInt(template.default_status) === 1 ? true : false);
    const [enable_mail_notify, setEnable_mail_notify] = useState(parseInt(template.email_notification_status) === 1 ? true : false);
    const [internal_recipient_status, setinternal_recipient_status] = useState(parseInt(template.internal_recipient_status) === 1 ? true : false);
    const [admin_email_status, setadmin_email_status] = useState(parseInt(template.admin_email_status) === 1 ? true : false);
    const [custom_email_status, setcustom_email_status] = useState(parseInt(template.custom_email_status) === 1 ? true : false);
    const [custom_email, setcustom_email] = useState(template.custom_email === "" ? "" : template.custom_email);

    const handleSubmit = async (e) => {
        var strJsonString = ns_validations.mailTemplate(e.target);
        let row_num = 0;
        if (templateList.length > 0)
            row_num = templateList[templateList.length - 1].row_num;
        if (strJsonString !== false) {
            const resp = await post(strJsonString, ApiEndPoints.dashboard);
            if (resp.response_status === "OK") 
            {
                alertmsg.msg("Message", resp.response_msg, "S");
                ModalHide('#modalMailTemplate');
                if(templateList.length>0){
                let u_id = "0";
                if ($(e.target).attr('data-uid') === "0") { u_id = resp.data.response.u_id; row_num = row_num + 1 }
                else {
                    u_id = $(e.target).attr('data-uid');
                }

                var updatedTemp = {
                    "row_num": row_num,
                    "u_id": template.u_id,
                    "template_group": template.template_group,
                    "template_name": $("#txt_template_name").val().trim(),
                    "template_subject": $("#txt_subject").val().trim(),
                    "template_body": $('#template_body').summernote('code'),
                    "status_name": $("#ddl_statusMaster option:selected").text(),
                    "status_id": $("#ddl_statusMaster option:selected").val(),
                    "status": 1,
                    "default_status": default_status === true ? 1 : 0,
                };
                if ($(e.target).attr('data-uid') === "0")
                    setTemplateList([updatedTemp, ...templateList])
                else {
                    const tempListClone = [...templateList];
                    var index = tempListClone.map(function (x) { return x.u_id; }).indexOf(template.u_id);
                    tempListClone[index] = { ...updatedTemp };
                    setTemplateList(tempListClone);
                }
            }
            }
            else {
                alertmsg.msg("Message", resp.response_msg, "E");
            }
        }

    }
    return (
        <>
            <div className="modal right-half md-one" id="modalMailTemplate" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="shortModal">
                <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
                    <div className="modal-content" style={{ height: "auto!important" }}>
                        <div className="modal-header bg-blu-lite fixed-top">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">
                                <b id="templateHeader"><i className="zmdi zmdi-plus-circle-o-duplicate"></i>Add Mail Template</b>
                            </h4>
                        </div>
                        <div className="modal-body pr-0 pl-0 pb-0">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane in active">
                                    <div className="row clearfix m-0">
                                        <div className="col-12 col-md-6 col-lg-7 pt-4">
                                            <div className="form-group">
                                                <label className=""><b>Template Name</b></label>
                                                <input type="text" id="txt_template_name" defaultValue={template.template_name} className="form-control" required="required" autoComplete="off" />
                                            </div>
                                            <div className="form-group">
                                                <label className="">Template keyword</label>
                                                <input type="text" id="txt_template_keyword_new" defaultValue={template.template_keyword} className="form-control" />
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <label>Email type</label>
                                                    <select id="ddl_emailType" className="form-control">
                                                        <option value="HTML">HTML</option>
                                                        <option value="PLAIN">PLAIN</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <label>Status</label>
                                                    <select id="ddl_statusMaster" className="form-control" key={template.u_id !== '' ? template.u_id : "0"} defaultValue={template.status_id || '0'} data-val="0">
                                                        <option value="0">Choose Status</option>
                                                        {status_master_list.map((list, i) => (
                                                            <option key={i} value={list.status_id} style={{ color: list.color_code }}>{list.status_name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Subject </label>
                                                <input type="text" id="txt_subject" className="form-control" defaultValue={template.template_subject} required="required" autoComplete="off" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor=""><i className="zmdi zmdi-file col-grey">&nbsp;</i> Template Structure </label>
                                                <textarea id="template_body" className="summernote-editor" name="Services" defaultValue={template.template_body} ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-5" style={{ background: "#f9f9f9", borderLeft: "1px solid #ddd", height: "92vh" }}>
                                            <div className="p-3 col-black">
                                                <h3 className="mt-0 mb-0"><b>Preview</b></h3>
                                                <hr />
                                                <p id="preview_mailBody"></p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 mt-2">
                                            <h5>Insert placeholder:</h5>
                                            <div id="keyword_placeholder"></div>
                                            <p className="col-grey mt-2">Insert candidate name, Job title, Job location or company name. Placeholders will automatically update between candidates.</p>
                                        </div>
                                        <div className="col-12 col-sm-12" id="keyword_placeholder"></div>
                                        <div className="col-12 col-sm-12">
                                            <p className="col-grey mt-3"></p>
                                        </div>
                                        <div className="col-12 col-sm-3 checkbox">
                                            <input id="chk_defaultTmpl" type="checkbox" onChange={(e) => setDefault_status(!default_status)} defaultChecked={parseInt(template.default_status) === 1 ? true : false} value={default_status} key={template.u_id !== '' ? template.u_id : "0"} />
                                            <label htmlFor="chk_defaultTmpl" className="pl-0"><b>Set as default template</b></label>
                                        </div>
                                        <div className="col-12 col-sm-9 checkbox">
                                            <input className="evt-org-settings" onChange={(e) => setEnable_mail_notify(!enable_mail_notify)} defaultChecked={template.email_notification_status === 0 ? false : true} value={enable_mail_notify} key={template.u_id !== '' ? template.u_id : "0"} id="chk_emailnotify" type="checkbox" data-action="mail-template" data-request-for="show-email-chk" />
                                            <label htmlFor="chk_emailnotify" className="pl-0"><b>Enable this email notification</b></label>
                                        </div>
                                        <div className="col-12 col-sm-3 checkbox divemail" style={{ display: "none" }}>
                                            <input id="chk_internal" type="checkbox" name="chkemail" onChange={(e) => setinternal_recipient_status(!internal_recipient_status)} defaultChecked={template.internal_recipient_status === 0 ? false : true} value={internal_recipient_status} key={template.u_id !== '' ? template.u_id : "0"} />
                                            <label htmlFor="chk_internal" className="pl-0"><b>Internal Recipient</b></label>
                                        </div>
                                        <div className="col-12 col-sm-3 checkbox divemail" style={{ display: "none" }}>
                                            <input id="chk_admin" type="checkbox" name="chkemail" onChange={(e) => setadmin_email_status(!admin_email_status)} defaultChecked={template.admin_email_status === 0 ? false : true} value={admin_email_status} key={template.u_id !== '' ? template.u_id : "0"} />
                                            <label htmlFor="chk_admin" className="pl-0"><b>Admin Email</b></label>
                                        </div>
                                        <div className="col-12 col-sm-3 checkbox divemail" style={{ display: "none" }}>
                                            <input className="evt-org-settings" id="chk_custom" type="checkbox" onChange={(e) => setcustom_email_status(!custom_email_status)} defaultChecked={template.custom_email_status === 0 ? false : true} value={custom_email_status} key={template.u_id !== '' ? template.u_id : "0"} data-action="mail-template" data-request-for="show-recipient" name="chkemail" />
                                            <label htmlFor="chk_custom" className="pl-0"><b>Custom Email</b></label>
                                        </div>
                                        <div className="col-12 col-sm-3 checkbox divemail" style={{ display: "none" }}>
                                            <input className="evt-org-settings" id="chk_all" type="checkbox" onChange={(e) => setEnable_mail_notify(!enable_mail_notify)} defaultChecked={template.email_notification_status === 0 ? false : true} value={enable_mail_notify} key={template.u_id !== '' ? template.u_id : "0"} data-action="mail-template" data-request-for="all-recipient" name="chkemail" />
                                            <label htmlFor="chk_all" className="pl-0"><b>All Recipient(s)</b></label>
                                        </div>
                                        <div className="col-12 col-sm-6 divRecipient" style={{ display: "none" }}>
                                            <div className="form-group">
                                                <input type="text" id="txt_recipient" className="form-control" defaultValue={template.custom_email} value={custom_email} onChange={(e) => setcustom_email(e.value)} key={template.u_id !== '' ? template.u_id : "0"} required="required" placeholder="Enter recipient(s) email" autoComplete="off" />
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
                                        <a id="btnSbmtMailTemp" className="btn btn-primary btn-lg evt-leads-actionnn" onClick={handleSubmit} data-uid="0" data-action="mail-template" ><i className="zmdi zmdi-upload"></i> Save </a>
                                        <a className="btn btn-danger btn-lg" data-dismiss="modal" aria-label="Close"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</a>
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

export default MdlMailTemplate