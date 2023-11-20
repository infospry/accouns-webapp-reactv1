import ReportsMenu from "../../components/ReportsMenu"
import Head from 'next/head';
import { useEffect, useState } from "react";
import ApiEndPoints from "../../../utils/ApiEndPoints";
import { get } from "../../../services/api_axios_services";
import { getData } from "../../../services/apiservice";


const LeadsByStatus = ({ leadStatus_detail = [] }) => {
    const [loader, setLoader] = useState(false);
    const [leadStatus, setLeadStatus] = useState(leadStatus_detail);
    const[searchInput,setSearchInput]=useState();
    const [statusList,setStatusList]=useState([]);
    const selectdateRange = (e) => {
        daterange();
    }
    const listLeads= async(e)=>{
        setLoader(true)
        e.preventDefault();
        var dateRange = $('#txt_daterangeLeadsbyStatus').val();
        let frmDt="";
        let toDt="";
        if (dateRange !== "") {
            frmDt=dateRange.split('-')[0].trim()
            toDt=dateRange.split('-')[1].trim()
        }
        console.log(e.target)
        let params={"from_date":frmDt,"to_date":toDt,"str_search":"","lead_note":$(e.target).attr('data-lead-note'),"action":$(e.target).attr('data-action'),"request_for":$(e.target).attr('data-request-for'),"previous":0,"next":10}
        const resp = await get(params, ApiEndPoints.ReportsApi);
        if (resp.response_status === "OK") {
            setStatusList(resp.data.response.leads)
            setLoader(false)
        }
    }
    
    const loadMoreLeads = async (e) => {
        setLoader(true)
        e.preventDefault();
        var dateRange1 = $('#txt_daterangeLeadsbyStatus').val();
        let frmDt="";
        let toDt="";
        if (dateRange1 !==""){
            frmDt=dateRange1.split('-')[0].trim()
            toDt=dateRange1.split('-')[1].trim()
        }
        ns_util.replace_html_in_element("#btnloadMoreLeadByStatus", 'Loading...<i class="fa fa-spinner fa-pulse"></i>')
        let offset = statusList[statusList.length - 1].ROWNUMBER;
        let total_count = statusList[statusList.length - 1].total_count;
        if (offset < total_count) {
            var params = {"str_search": searchInput, "from_date": frmDt, "to_date": toDt, "action": $(e.target).attr('data-action'), "request_for":$(e.target).attr('data-request-for'), "previous": offset, "next": "10" };
            const response = await get(params, ApiEndPoints.ReportsApi)
            setStatusList([...statusList, ...response.data.response.leads]);
            setLoader(false)
        }
    }
    const searchLeadsStatus=async(e)=>{
        setLoader(true)
        e.preventDefault();
        var dateRange1 = $('#txt_daterangeLeadsbyStatus').val();
        let frmDt="";
        let toDt="";
        if (dateRange1 !== "") {
            frmDt=dateRange1.split('-')[0].trim()
            toDt=dateRange1.split('-')[1].trim()
        }
        
        var params ={"str_search":searchInput,"from_date":frmDt,"to_date":toDt,"action":"status-leads","request_for":"count","previous":0,"next":10};
            const response = await get(params, ApiEndPoints.ReportsApi)
            console.log(response)
            if(response.data.response.status_count !=='')
            setLeadStatus(response.data.response.status_count);
            else
            setLeadStatus([]);

            setLoader(false)
    }
    const refreshStatusList=async(e)=>{
        setLoader(true)
        setSearchInput("");
        $('#txt_daterangeLeadsbyStatus').val('');
        e.preventDefault();
        var params = {"action":"status-leads","request_for":"count","previous":0,"next":10};
        const resp = await get(params, ApiEndPoints.ReportsApi);
        if(resp.data.response.status_count !=='')
        {
            setLeadStatus(resp.data.response.status_count)
            setLoader(false)
        }
    }
    useEffect(() => {
        if (statusList !== undefined) {
            if (statusList.length > 0) {
                let offset = statusList[statusList.length - 1].ROWNUMBER;
                let total_count = statusList[statusList.length - 1].total_count;
                if (offset < total_count) {
                    ns_util.replace_html_in_element("#btnloadMoreLeadByStatus", "Load more")
                    ns_util.show_element("#btnloadMoreLeadByStatus");
                }
                else {
                    ns_util.hide_element("#btnloadMoreLeadByStatus");
                }
            }
            else {
                ns_util.hide_element("#btnloadMoreLeadByStatus");
            }
        }
        else {
            setLoader(false);
        }
    })
    return (
     <>
           
            <section className="content">
                <div className="loader"></div>
                <div className="body_scroll ">
                    <div className="scrolfx">
                        <div className="booktab d-flex justify-content-between align-items-center bdrb p-2">
                            <div className="">
                                <h2 className="font-bold"><i className="zmdi zmdi-trending-up">&nbsp;</i>Lead by Status</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex ps-0 pe-0">
                                <div className="mobile-left">
                                    <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                                        <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                                    </a>
                                </div>
                                <ReportsMenu />
                                <div className="inbox right mt-0">
                                   
                                    <div class="bdrb d-flex justify-content-between align-items-center p-2" style={{borderTop:"0px"}}>
                                        <div class="bdbdtn">
                                            <div class="btn-group mt-0 bdrl hidden-xs">
                                                <div class="input-group"><input type="text" id="txt_userinput"
                                                     onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} defaultValue={searchInput}
                                                    className="form-control" placeholder="Search by user" autoComplete="off" />&nbsp;
                                                    <input id="txt_daterangeLeadsbyStatus" type="text" className="form-control daterange" placeholder="Search by date range" onFocus={selectdateRange} />&nbsp;
                                                    <div className="input-group-append">
                                                        <a id="btnSearch" onClick={searchLeadsStatus} className="input-group-text btn-outline-info evt-reports-actionnn" data-action="status-leads" data-request-for="filter">Search</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="bdbdtn">
                                            <div class="btn-group"><button type="button" className="btn btn-outline-primary dropdown-toggle dr-breakout-btn mb-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert"></i> Action <span className="caret"></span></button>
                                                <ul className="dropdown-menu dr-breakout">
                                                    <li className="btn btn-outline-primary evt-reports-actionnn" onClick={refreshStatusList}  type="button" data-action="status-leads" data-request-for="refresh"> <i className="zmdi zmdi-rotate-left"></i><span>Refresh</span></li>
                                                </ul></div>
                                        </div>
                                    </div>
                                    {loader && <span>Loading...</span>}
                                    <div className="body mb-1 p-3">
                                        {console.log(leadStatus)}
                                        {/* {leadStatus !== undefined && leadStatus.length>0 ? */}
                                            <div className="container-fluid">
                                                    <div className="row">
                                                    {leadStatus !==undefined && leadStatus.map((status,i)=>(
                                                    <div key={i} className="col-12 col-md-6 col-lg-2 col-xs-3 items">
                                                        <div className="card bdr5 mt-0">
                                                            <div className="header pt-2 pl-2">
                                                                <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>{status.lead_note}<br /></h2>
                                                            </div>
                                                            <div className="body pt-1 pb-0">
                                                                <div className="icon-small">
                                                                    <div className="w_icon cyan">{status.callback_count}</div><h4>{status.lead_note}</h4>
                                                                </div>
                                                                <div className="state_w1 mb-1 mt-0 ml-3">
                                                                    <div className="d-flex justify-content-between">
                                                                        <div>
                                                                            <a className="btn btn-brimary float-right text-right font-14 btnnn mt-2 evt-reports-actionn" onClick={(e)=>listLeads(e)} data-action="status-leads" data-request-for="leads-list" data-lead-note={status.lead_note}>View →</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))}
                                                    <div className="col-12 col-md-6 col-lg-4 col-xs-3 items">
                                                        <div className="card bdr5 mt-0">
                                                            <div className="header pt-2 pl-2">
                                                                <h2><i className="zmdi zmdi-view-dashboard">&nbsp;</i>Total<br /></h2>
                                                            </div>
                                                            <div className="body pt-1 pb-0">
                                                                <div className="icon-small">
                                                                    <div className="w_icon cyan">{leadStatus.length >0 && leadStatus[0].total_count}</div><h4>Leads</h4>
                                                                </div>
                                                                <div className="state_w1 mb-1 mt-0 ml-3">
                                                                    <div className="d-flex justify-content-between">
                                                                        <div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* //     : <div class="text-center pt-2 pb-4 pl-4 mt-5">
                                        //         <h5><span style="color:red">Sorry! no record found!</span></h5>
                                        //     </div>
                                        // } */}
                                        <h5 className="text-center"><b id="mheader"></b></h5>
                                        <div className="card bdr5 p-1 mt-2">
                                            <div className="table-responsive mt-2">
                                                <table className="table rwd-table mb-0" id="sortable">
                                                    <thead className="">
                                                        <tr className="font_btd">
                                                            <th>#</th>
                                                            <th className="pt-3 pb-3">Lead Name</th>
                                                            <th>Company Name</th>
                                                            <th>Email</th>
                                                            <th>City</th>
                                                            <th>User Name</th>
                                                            <th>Added Date & Time</th>
                                                            <th>Action Date & Time</th>
                                                            <th>Elapsed Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {console.log(statusList)}
                                                        {statusList.length>0 && statusList.map((sts,i)=>(
                                                            statusList !==""?
                                                        <tr key={i}>
                                                            <td className="bold">{i+1}</td>
                                                            <td className="pt-3 pb-3">{sts.lead_name.toUpperCase()}</td>
                                                            <td>{sts.lead_company_name}</td>
                                                            <td>{sts.lead_email}</td>
                                                            <td>{sts.lead_city}</td>
                                                            <td>{sts.user_name}</td>
                                                            <td className="col-grey">{sts.create_date} {sts.create_time}</td>
                                                            <td className="col-grey">{sts.status_date} {sts.status_time}</td>
                                                            <td className="bg-info"><span className="text-white">{sts.datetime_diff}</span></td>
                                                        </tr>
                                                         :<tr>
                                                         <td colSpan="9"><span style={{ color: "red" }}>Sorry! no record found!</span></td>
                                                      </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <div className="text-center">
                                                    <a id="btnloadMoreLeadByStatus"  onClick={loadMoreLeads} style={{ display: "none" }} data-action="status-leads" data-request-for="load-more"  className="btn btn-outline-primary mt-3 mb-4" ><b className="col-blue">Load More</b> →</a>
                                                </div>
                                            </div>
                                        </div>
                                        <span style={{ display: "none" }} id="span_filtersattr" data-lead-note="" data-fromdate="" data-todate="" data-user=""></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    try {
        //led by status data
        var params = { "action": "status-leads", "request_for": "count", "route": "Reports/LeadsByStatus" };
        const lang = req.cookies['signin_token']
        if ((lang === "''") || (lang === undefined)) {
            res.writeHead(302, { Location: "/login" })
            res.end()
        }
        const response = await getData(params, lang, ApiEndPoints.ReportsApi)

        return {
            props: {
                leadStatus_detail: JSON.parse(response).response_status === "OK" ? JSON.parse(response).data.response.status_count : '[]',
            },
        }
    } catch (err) {
        // Handle error
        return {
            props: null
        }
    }
}
export default LeadsByStatus