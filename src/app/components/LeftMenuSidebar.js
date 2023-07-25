import Link from "next/link";
function LeftMenuSidebar() {

    return(
        <>
             <aside id="leftsidebar" className="sidebar">
        <div className="menu cls-sidebarnavmenu">
            <div className="slimScrollDiv">
                <ul id="UserNav_Placeholder" className="list">
                    <li title="Dashboard"> <Link href="/dashboard"> <i
                                className="fa fa-desktop"></i> <span>Dashboard</span> </Link> </li>
                    <li title="Employees"> <Link href="/employers"> <i
                                className="fa fa-user"></i> <span>Employers</span> </Link> </li>
                    <li title="Employees"> <Link href="/Candidates" data-count="0"> <i
                                className="fa fa-users"></i> <span>Candidates</span> </Link> </li>

                                <li title="Manage Jobs"> <Link href="javascript:void(0);"
                                    className="menu-toggle waves-effect waves-block toggled"> <i className="fa fa-briefcase"></i>
                                    <span>Manage Jobs</span> </Link>
                                <ul className="ml-menu">
                                    <li><Link className="clsCallPage"
                                            href="/Jobs/bookedJobs">Booked Jobs</Link></li>
                                    <li><Link className="clsCallPage" href="/Jobs/openJobs">Open  Jobs</Link></li>
                                </ul>
                            </li>
                    <li title="Finance"> <Link href="javascript:void(0);"
                        className="menu-toggle waves-effect waves-block"> <i className="fa fa-gbp"></i>
                        <span>Finance</span> </Link>

                </li>
                <li title="Reports"> <Link href="javascript:void(0);"
                        className="menu-toggle waves-effect waves-block"> <i className="fa fa-list"></i>
                        <span>Reports</span> </Link>

                </li>
                    <li title="Settings"> <Link href="/settings/myProfile" data-count="15"> <i
                                className="fa fa-cog"></i> <span>Settings</span> </Link> </li>
                    <li title="Messages"> <Link href="MessageCenter"
                            data-count="0"> <i className="fa fa-envelope"></i> <span>Messages</span> </Link> </li>

                </ul>
                
            </div>
        </div>
    </aside>
        </>
    )
    
}
export default LeftMenuSidebar;