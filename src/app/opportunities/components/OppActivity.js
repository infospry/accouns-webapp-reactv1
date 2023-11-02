import { useEffect,useState } from "react";
import { get } from "../../services/api_axios_services";
import ApiEndPoints from "../../utils/ApiEndPoints";

const OppActivity = ({ lead_activity,setLead_activity,lead_uid }) => {
    const [loader, setLoader] = useState(false);
    const loadMoreActivity = async(e) => {
        e.preventDefault();
        ns_util.replace_html_in_element("#btnLoadMoreActivity", 'Loading...<i class="fa fa-spinner fa-pulse"></i>')
        let offset = lead_activity[lead_activity.length - 1].ROWNUMBER;
        let total_count = lead_activity[lead_activity.length - 1].total_count;
        if (offset < total_count) {
            var params = {"leads":{"u_id":lead_uid},"action":"lead-activity","action_on":"leads_main","request_for":"select","previous":offset,"next":10}
            const response = await get(params,ApiEndPoints.opportunity)
            setLead_activity([...lead_activity, ...response.data.response.activity_info]);
        }
    }
    useEffect(()=>{
        if (lead_activity !== undefined) {
            if (lead_activity.length > 0) {
                // ns_util.trigger_click("#lead_"+leads[0].u_id)
                let offset = lead_activity[lead_activity.length - 1].ROWNUMBER;
                let total_count = lead_activity[lead_activity.length - 1].total_count;
                if (offset < total_count) {
                    setLoader(false);
                    ns_util.replace_html_in_element("#btnLoadMoreActivity", "Load more")
                    ns_util.show_element("#btnLoadMoreActivity");
                }
                else {
                    setLoader(false);
                    ns_util.hide_element("#btnLoadMoreActivity");
                }
            }
        }
        else {
            setLoader(false);
        }
    })
    return (
        <>
            <div role="tabpanel" className=" tab-pane opp-tab" id="Activity">
                <ul className="cbp_tmtimeline ml-4 mt-4 p-4">
                    {lead_activity && lead_activity !== undefined && lead_activity.map((act, i) => (
                        <li key={i}>
                            <div className="cbp_tmicon"><img src="images/download.jpg" /></div>
                            <div className="cbp_tmlabel">
                                <div className="cbp_tmtime">
                                    <span>{act.action_date}</span> <span></span>
                                </div>
                                <h5><a href="#">{act.user_name}</a> <span></span></h5>
                                <a className="evt-leads-action" data-u_id={act.lead_uid} data-action="lead-activity" data-request_for="filter">
                                    <p>{act.entity_type} | {act.entity_section}</p>
                                    <p>
                                        <span className="col-grey">{act.entity_type === 'LEAD' ? "#Lead no" : "#Org no"} {act.entity_id}</span>
                                        <span className="bold">- </span>{act.action_desc !== '' ? act.action_desc : act.msg_desc}
                                    </p>
                                </a>
                            </div>

                            {/* <div className="sub-chat">
                                <div className="cbptmicon"> AJ </div>
                                <div className="cbp_tmlabel mrgn-lft-145">
                                    <div className="cbp_tmtime">
                                        <span>2019-11-04 03:45AM</span> <span>Today</span>
                                    </div>
                                    <h5><a href="#">Job Meeting</a></h5>
                                    <a className="trash"><i className="zmdi zmdi-delete"></i></a>
                                    <p>You have a meeting at <strong>Laborator Office</strong> Today.  Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                </div>
                            </div> */}
                            <a className="mrg_l80" data-toggle="collapse" data-target={"#divcollapse-" + act.id}>Add Comment</a>
                            <div className="comment-area collapse" id={"divcollapse-" + act.id}>
                                <div className="form-group">
                                    <div className="form-line">
                                        <textarea rows="4" id={"txt_comment-" + act.id} className="form-control no-resize" placeholder="Enter comment here..."></textarea>
                                    </div>
                                </div>
                                <hr />
                                <a className="btn btn-primary waves-effect waves-light evt-leads-action" data-activity-id={act.id} data-action="comments" data-request_for="create">Submit</a>
                                <a className="btn btn-outline-danger waves-effect waves-light evt-leads-action" data-activity-id={act.id} data-action="comments" data-request_for="cancel">Cancel</a>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="p-4" style={{ marginLeft: "69px" }}>
                    <a id="btnLoadMoreActivity" className="btn btn-outline-primary mt-3 mb-4 " style={{display:"none"}} onClick={loadMoreActivity} ><b className="col-blue">Load More</b> →</a>
                </div>
            </div>
        </>
    )
}
export default OppActivity;