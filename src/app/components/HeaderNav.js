import Link from "next/link";
import Image from "next/image";


const HeaderNav = () => {
    return (

        <>

<nav className="navbar navbar-dark d-flex justify-content-between align-items-center bg-dark mb-0">
        <div className="">
            <div className="navbar-brand mr-4 pr-0  float-left d-flex">
                <button className="btn-menu ls-toggle-btn" data-status="o" type="button">
                    <i className="zmdi zmdi-menu"></i>
                </button>
                <Link href="/">
                    <img src="logo.png" alt="W e l c o m e"/>
                </Link>
            </div>
            <ul className="navbar-nav mr-4 pr-3 bdrr float-left ">
                <li className="dropdown nav-item"></li>
            </ul>
            <div className="col-black mr-3 float-left mtop">
                <h2 className="col-white">Dashboard <span className="col-grey f-13 hdnone"></span> </h2>
            </div>
        </div>
        <form className="form-inline smd_none">
        </form>
        <div>
            <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn ml-3 mr-2 smd_none"
                data-status="c" type="button">
                <i className="zmdi zmdi-arrow-right"></i>
            </button>
            <ul className="navbar-nav ml-2 pl-3 bdrl floatmargint">
                <li className="dropdown nav-item smd_none">
                    <Link href="#" className="nav-link dropdown-toggle cls-get-CriticalActivity"
                        type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <i className="fa fa-bullhorn">&nbsp;</i><span
                            id="spanTotalCriticalActivityUnread"
                            className="badge badge-warning  spanTotalCriticalActivityUnread"></span>

                    </Link>
                    <ul className="dropdown-menu notification-ui_dd slideUp2">
                        <li className="header font-16 font-bold d-flex justify-content-between text-transform">
                            <div>Critical Activities</div>
                            <div>
                                <span className="str-grey cls-vw-log-top" data-action="readall">
                                    <img src="images/notification.png"/>
                                </span>
                            </div>
                        </li>
                        <li className="body">
                            <ul id="TopCriticalActivity_Placeholder" className="menu list-unstyled"></ul>
                        </li>
                        <li className="footer text-center">
                            <Link href="https://empapp.thestaffport.com/Events" className="col-blue">View All</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown nav-item smd_none">
                    <Link href="#" className="nav-link dropdown-toggle cls-get-conversation" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <i className="fa fa-comments-o">&nbsp;</i><span id="spanTotalConversationUnread"
                            className="badge badge-success spanTotalConversationUnread"></span>
                    </Link>
                    <ul className="dropdown-menu notification-ui_dd slideUp2">
                        <li className="header font-16 font-bold d-flex justify-content-between text-transform">
                            <div><i className="fa fa-comments-o font-18">&nbsp;</i>Job Chats</div>
                            <div>

                            </div>
                        </li>
                        <li className="body">
                            <ul id="TopConversation_Placeholder" className="menu list-unstyled"></ul>
                        </li>
                        <li className="footer text-center">

                        </li>
                    </ul>
                </li>
                <li className="dropdown nav-item smd_none">
                    <Link href="#" className="nav-link dropdown-toggle cls-get-notification" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <i className="zmdi zmdi-notifications">&nbsp;</i><span id="spanTotalNofificationUnread"
                            className="badge badge-success spanTotalNofificationUnread"></span>
                    </Link>
                    <ul className="dropdown-menu notification-ui_dd slideUp2">
                        <li className="header font-16 font-bold d-flex justify-content-between text-transform">
                            <div>NOTIFICATIONS</div>
                            <div>
                                <span className="str-grey cls-vw-msg-top" data-action="readall">
                                    <img src="images/notification.png"/>
                                </span>
                            </div>
                        </li>
                        <li className="body">
                            <ul id="TopNotifications_Placeholder" className="menu list-unstyled"></ul>
                        </li>
                        <li className="footer text-center">
                            <Link href="https://empapp.thestaffport.com/Account/MessageCenter" className="col-blue">View All
                                Notifications</Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item bdrl smd_none hidden-sm-down">
                    <Link className="nav-link text-right" href="https://empapp.thestaffport.com/Settings/Profile">
                        <span className="float-left lngth font-11 dd_none">
                            <b id="spanprofile-name">Healthcare Demo</b><br/>
                            <span id="spanprofile-email"></span>
                        </span>
                        <span className="EmployeeAvatar" data-tippy="" data-original-title="Healthcare Demo">H</span>
                    </Link>
                </li>
               
            </ul>
        </div>

    </nav>
            
        </>
    )
}
export default HeaderNav;