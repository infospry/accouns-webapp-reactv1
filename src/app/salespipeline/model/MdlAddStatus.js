"use client"
import ApiEndPoints from "../../utils/ApiEndPoints";
import { post } from "../../services/api_axios_services";

const MdlAddStatus = ({ statusList, setStatusList }) => {
    

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
  return (
         <><div className="modal right-quater md-one" id="addstatus" tabIndex="-1" data-backdrop="static" role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">
                    <b id="header_status">Add New Status</b>
                </h4>
            </div>
            <div className="modal-body pr-0 pl-0 pb-0">
                <div className="tab-content">
                    <div role="tabpanel" className=" tab-pane in active">
                        <div className="row m-0">
                            <div className="col-12 col-sm-12">
                                <div className="group_lead mt-4">
                                    <input type="text" id="txt_name" className="input_text" required="required" autoComplete="off" />
                                    <label className="lablefilled">Name</label>
                                </div>
                                <div className="group_lead mt-4">
                                    <select className="custom-select select_f" id="ddl_type">
                                        <option value="">Choose Type</option>
                                        <option value="input">Input</option>
                                        <option value="button">Button</option>
                                        <option value="date">Date</option>
                                    </select>
                                </div>
                                <div className="group_lead mt-0">
                                    <input type="color" id="colorpicker" className="input_text" name="color" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" defaultValue="#bada55" required="required" />
                                    <label className="lablefilled">Pick a Color</label>
                                </div>
                                <div className="group_lead">
                                    <input type="text" className="input_text" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" defaultValue="#bada55" id="hexcolor" disabled="disabled" />
                                </div>
                                <div className="group_lead mt-4">
                                    <input type="text" id="txt_sort_order" className="input_text allow-numbers-only" required="required" autoComplete="off" />
                                    <label className="lablefilled">Sort Order</label>
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
                            <button id="btnSbmtStatus" onClick={addStatus} className="btn btn-primary evt-masters-actionn me-1" data-id="0" data-action="lead-status" data-request_for="create" data-type="pipeline"><i className="zmdi zmdi-upload">&nbsp;</i>Save</button>
                            <a className="btn btn-danger" data-bs-dismiss="modal"><i className="zmdi zmdi-rotate-left">&nbsp;</i>Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>
  )
}

export default MdlAddStatus