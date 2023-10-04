import React from 'react'
import Link from "next/link";

function LeftSidebar() {
  return (
    <ul className="nav pt-2">  
    <li className="ps-4 active"><Link href="/employee/myProfile"><i className="zmdi zmdi-account"></i> My Profile</Link></li>                                         
    <li className="ps-4"><Link href="/employee/contacts"><i className="zmdi zmdi-account-box-mail"></i> Contacts</Link></li> 
    <li className="ps-4"><Link href="/employee/locations"><i className="zmdi zmdi-pin"></i> Locations</Link></li>  
    {/* <li className="ps-4"><Link href="/employee/teams"><i className="zmdi zmdi-accounts"></i> Teams</Link></li>      */}
    <li className="ps-4"><Link href="/employee/workSchedule"><i className="zmdi zmdi-calendar"></i> Work Schedule</Link></li>
    <li className="ps-4"><Link href="/employee/departmentsandDesignations"><i className="zmdi zmdi-city-alt"></i> Departments and Designations</Link></li>
    <li className="ps-4"><Link href="/employee/absenses"><i className="zmdi zmdi-timer-off"></i> Absenses</Link></li>     
    <li className="ps-4"><Link href="/employee/activity"><i className="zmdi zmdi-alarm"></i> Activity</Link></li> 
    <li className="ps-4"><Link href="/employee/passwordSettings"><i className="zmdi zmdi-lock-open"></i> Password Settings</Link></li> 
</ul>  
  )
}

export default LeftSidebar
