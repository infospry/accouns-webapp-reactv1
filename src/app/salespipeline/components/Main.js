'use client'
import ApiEndPoints from "../../utils/ApiEndPoints";
import { getCookie } from 'cookies-next';
import { getData } from '../../services/apiservice';

import MdlViewDetail from "../model/MdlViewDetail";
import MdlAddStatus from "../model/MdlAddStatus";
import { get, post } from "../../services/api_axios_services";
import { useState ,useEffect } from 'react';

import Link from "next/link";

const Salespipeline = ({ salesList = [] }) => {
    const [statusList, setStatusList] = useState(salesList);
    const [lead_info, setLead_info] = useState([]);
    const [loader, setLoader] = useState(false);
    const viewLead = async (e, uid) => {
        e.preventDefault();
        let params = { "leads": { "u_id": uid }, "action": "sales-pipeline", "action_on": "leads_main", "request_for": "view-lead" };
        const resp = await get(params, ApiEndPoints.opportunity);
        if (resp.response_status === "OK") {
            setLead_info(resp.data.response.lead_info)
        }
    }
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



    return (
        <>
            <section className="content">
                <div className="body_scroll">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb">
                            <div className="pt-3 pl-3 pb-3">
                                <h2 className="font-bold">
                                    <i className="zmdi zmdi-format-line-spacing mr-1"></i>Sales Pipeline
                                </h2>
                            </div>
                            <div className="pagination-email">
                                <a href="#" className="btn btn-outlne-primary evt-leads-action" data-toggle="modal" data-target="#addstatus" data-action="sales-pipeline" data-request_for="add-new-status"><i className="zmdi zmdi-plus-circle-o-duplicate">&nbsp;</i><b>Add New Status</b></a>
                                <Link href={"/opportunities"}>
                                  List View
                                </Link>
                                <a href="#" className="btn btn-outline-secondary " onClick={refreshList} ><i className="zmdi zmdi-rotate-left">&nbsp;</i><b>Refresh</b></a>
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
                                                                                    data-status-id={status.status_id}
                                                                                    style={{ cursor: "pointer" }} title="Add new status">
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
                                                                                            data-toggle="modal" data-u_id={lead.lead_uid}
                                                                                            data-action="sales-pipeline" data-request_for="view-lead" data-target="#view_details">
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
            {/* <MdlAddStatus statusList={statusList} setStatusList={setStatusList} /> */}
               <div id="addstatus" className="modal right-quater md-one"  tabIndex="-1" data-backdrop="static" role="dialog" aria-labelledby="shortModal">
    <div className="modal-dialog ui-draggable ui-draggable-handle" role="document">
        <div className="modal-content" style={{height:"auto!important"}}>
            <div className="modal-header bg-blu-lite fixed-top">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                            <button id="btnSbmtStatus" onClick={addStatus} className="btn btn-primary evt-masters-actionn btn-lg" data-id="0" data-action="lead-status" data-request_for="create" data-type="pipeline"><i className="zmdi zmdi-upload">&nbsp;</i>Save</button>
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