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
      <>
       </>
  )
}

export default MdlAddStatus