import ReportsMenu from "../../components/ReportsMenu"
import Head from 'next/head';
import { useEffect, useState } from "react";
import ApiEndPoints from "../../../utils/ApiEndPoints";
import { get } from "../../../services/api_axios_services";
import { getData } from "../../../services/apiservice";

const selectdateRange = (e) => {
    daterange();
}
const LoginSessions = ({ login_sessions = [] }) => {
    const [sessionList, setSessionList] = useState(login_sessions);
    const [loader, setLoader] = useState(false);
    const[searchInput,setSearchInput]=useState();
    const loadMoreSessions = async (e) => {
        setLoader(true)
        e.preventDefault();
        var dateRange1 = $('#txt_daterange').val();
        console.log(searchInput)
        console.log(dateRange1.split('-')[0].trim())
        let frmDt="";
        let toDt="";
        if (dateRange1 !==""){
            frmDt=dateRange1.split('-')[0].trim()
            toDt=dateRange1.split('-')[1].trim()
        }
        ns_util.replace_html_in_element("#btnloadMoreLoginSessions", 'Loading...<i class="fa fa-spinner fa-pulse"></i>')
        let offset = sessionList[sessionList.length - 1].ROWNUMBER;
        let total_count = sessionList[sessionList.length - 1].total_count;
        if (offset < total_count) {
            var params = {"str_search": searchInput, "from_date": frmDt, "to_date": toDt, "action": "login-sessions", "request_for": "select", "route": "Reports/LoginSessions", "previous": offset, "next": "10" };
            const response = await get(params, ApiEndPoints.ReportsApi)
            setSessionList([...sessionList, ...response.data.response.report]);
            setLoader(false)
        }
    }
    const refreshList=async(e)=>{
        setLoader(true)
        setSearchInput("");
        $('#txt_daterange').val('');
        e.preventDefault();
        var params = { "action": "login-sessions", "request_for": "select", "route": "Reports/LoginSessions", "previous": "0", "next": "10" };
        const resp = await get(params, ApiEndPoints.ReportsApi);
        if (resp.response_status === "OK") {
            setSessionList(resp.data.response.report)
            setLoader(false)
        }
    }
    const searchSession=async(e)=>{
        setLoader(true)
        e.preventDefault();
        var dateRange1 = $('#txt_daterange').val();
        let frmDt="";
        let toDt="";
        if (dateRange1 !== "") {
            frmDt=dateRange1.split('-')[0].trim()
            toDt=dateRange1.split('-')[1].trim()
        }
        
        var params = {"str_search": searchInput, "from_date": frmDt, "to_date": toDt, "action": "login-sessions", "request_for": "select", "route": "Reports/LoginSessions", "previous": "0", "next": "10" };
            const response = await get(params, ApiEndPoints.ReportsApi)
            if(response.data.response.report !=='')
            setSessionList(response.data.response.report);
            else{
                setSessionList([])
            }
            setLoader(false)
    }
    useEffect(() => {
        if (sessionList !== undefined) {
            if (sessionList.length > 0) {
                // ns_util.trigger_click("#lead_"+leads[0].u_id)
                let offset = sessionList[sessionList.length - 1].ROWNUMBER;
                let total_count = sessionList[sessionList.length - 1].total_count;
                
                if (offset < total_count) {
                    ns_util.replace_html_in_element("#btnloadMoreLoginSessions", "Load more")
                    ns_util.show_element("#btnloadMoreLoginSessions");
                }
                else {
                    ns_util.hide_element("#btnloadMoreLoginSessions");
                }
            }
            else {
                ns_util.hide_element("#btnloadMoreLoginSessions");
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
                                <h2 className="font-bold"><i className="zmdi zmdi-trending-up">&nbsp;</i>Login Sessions</h2>
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
                                                     onChange={(e)=>setSearchInput(e.target.value)} value={searchInput}
                                                       className="form-control" placeholder="Search by user" autoComplete="off" />&nbsp;<input id="txt_daterange" type="text" className="form-control daterange" 
                                                        onFocus={selectdateRange} placeholder="Search by date range" />
                                                        <div class="input-group-append"><a id="btnSearch" class="input-group-text btn-outline-secondary " onClick={searchSession} data-action="login-sessions" data-request-for="filter">Search</a></div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="bdbdtn">
                                            <div class="btn-group"><button class="btn btn-outline-primary "onClick={refreshList} data-action="login-sessions"  type="button"> <i className="zmdi zmdi-rotate-left"></i><span>Refresh</span></button></div>
                                        </div>
                                    </div>
                                    {loader && <span>Loading...</span>}
                                    <div className="p-2">
                                        <div className="card bdr5 p-1">
                                        <div className="table-responsive">
                                                <table className="table table-hover rwd-table btdr_none mb-0" id="sortable">
                                                    <thead className="dnone-mob">
                                                        <tr className="font_btd">
                                                            <th>#</th>
                                                            <th className="pt-3 pb-3">Session Type</th>
                                                            <th>Session Date</th>
                                                            <th>Session Time</th>
                                                            <th>User Name</th>
                                                            <th>Browser Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {sessionList.map((session, i) => (
                                                              sessionList !==""?
                                                            <tr key={i}>
                                                                <td>{i + 1}</td>
                                                                <td className="pt-3 pb-3 bold">{session.session_type}</td>
                                                                <td className="col-grey">{session.session_date}</td>
                                                                <td className="col-grey">{session.session_time}</td>
                                                                <td>{session.user_name}</td>
                                                                <td>{session.browser_name}</td>
                                                            </tr>
                                                             :<tr>
                                                                <td colSpan="6"><center><span style={{ color: "red" }}>Sorry! no record found!</span></center></td>
                                                             </tr>
                                                        ))}
                                                       
                                                    </tbody>
                                                </table>

                                                <div className="text-center">
                                                    <a id="btnloadMoreLoginSessions" onClick={loadMoreSessions} className="btn btn-outline-primary mt-3 mb-4 evt-reports-actionnn" style={{ display: "none" }} data-action="login-sessions" data-request-for="load-more" data-cnt="${count}" data-previous="${previous}"><b className="col-blue">Load More</b> →</a>
                                                </div>
                                            </div>
                                            {sessionList.length < 1 &&
                                                <div className="text-center pt-2 pb-4 pl-4 mt-5">
                                                    <h5><span style={{ color: "red" }}>Sorry! no record found!</span></h5>
                                                </div>
                                            }


                                        </div>
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
        //login sessions data
        var params = { "action": "login-sessions", "request_for": "select", "route": "Reports/LoginSessions", "previous": "0", "next": "10" };
        const lang = req.cookies['signin_token']
        if ((lang === "''") || (lang === undefined)) {
            res.writeHead(302, { Location: "/login" })
            res.end()
        }
        const response = await getData(params, lang, ApiEndPoints.ReportsApi)

        return {
            props: {
                login_sessions: JSON.parse(response).data.response.report !== "" ? JSON.parse(response).data.response.report : [],
            },
        }
    } catch (err) {
        // Handle error
        return {
            props: null
        }
    }
}
export default LoginSessions;