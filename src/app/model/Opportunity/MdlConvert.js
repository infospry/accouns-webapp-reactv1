import { getFromContactApi } from "../../services/api_axios_services";
import ApiEndPoints from "../../utils/ApiEndPoints";
const MdlConvert=({lead_detail,users})=>{
    const ConvertLead=async()=>{
        let strJsonString = {
            "salutation": $('#spnSalutation').text(),
            "fname": $('#spnName').text(),
            "lname": "",
            "comp_name": $('#spnCompanyName').text(),
            "display_name": lead_detail !==false && lead_detail.lead_name,
            "contact_email": lead_detail !==false && lead_detail.lead_email,
            "website": lead_detail !==false && lead_detail.lead_website,
            "Phone_Work": lead_detail !==false && lead_detail.lead_phone,
            "mobile": lead_detail !==false && lead_detail.lead_mobile,
            "contact_type": "C",
        };
        console.log(JSON.stringify(strJsonString))
        const resp = await getFromContactApi(strJsonString,ApiEndPoints.contactApi);
        if (resp.response_status === "OK") {
            console.log(resp.data.response)
        }
    }
    return (<>
        <div className="modal fade mdds" id="convert" tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true" data-backdrop="static">
    <div className="modal-dialog ui-draggable ui-draggable-handle modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title text-center" id="exampleModalLongTitle"><b>Convert Lead</b></h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body p-4">
                <p className="mb-1">
                    <span className="wd-12px"> Salutation</span>
                    <span>:</span>
                    <span id="spnSalutation">{lead_detail !==false && lead_detail.lead_title}</span>
                </p>
                <p className="mb-1">
                    <span className="wd-12px"> Name</span>
                    <span>:</span>
                    <span id="spnName">{lead_detail !==false && lead_detail.lead_name}</span>
                </p>
                <p className="mb-1">
                    <span className="wd-12px"> Company Name</span>
                    <span>:</span>
                    <span id="spnCompanyName">{lead_detail !==false && lead_detail.lead_company_name}</span>
                </p>
                <p className="mb-1">
                    <span className="wd-12px">Display Name</span>
                    <span>:</span>
                    <span>{lead_detail !==false && lead_detail.lead_name}</span>
                </p>
                <p className="mb-1">
                    <span className="wd-12px"> Contact Email</span>
                    <span>:</span>
                    <span>{lead_detail !==false && lead_detail.lead_email}</span>
                </p>
                <p className="mb-1">
                    <span className="wd-12px"> Website</span>
                    <span>:</span>
                    <span>{lead_detail !==false && lead_detail.lead_website}</span>
                </p>
                <p className="mb-1">
                    <span className="wd-12px"> Phone</span>
                    <span>:</span>
                    <span>{lead_detail !==false && lead_detail.lead_phone}</span>
                </p>
                <p className="mb-1">
                    <span className="wd-12px"> Mobile</span>
                    <span>:</span>
                    <span>{lead_detail !==false && lead_detail.lead_mobile}</span>
                </p>
                <p><b>Owner of the records: </b></p>
                <div className="group_lead mb-0">
                    <select className="custom-select select_f userId" id="ddl_owner">
                        <option value="0">Choose User</option>
                        {users && users.map((user,i)=>(
                            <option key={i} value={user.user_id}>{user.user_name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="modal-footer">
                <div className="text-center">
                    <button onClick={ConvertLead} className="btn btn-primary" > <i className="zmdi zmdi-swap"></i> Convert </button>
                    <button className="btn btn-danger" data-dismiss="modal" type="button"><i className="zmdi zmdi-rotate-left"></i> Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </>)
}
export default MdlConvert