import React from 'react'
import Link from "next/link";

function LeftSidebar() {
  return (
    <ul class="nav pt-2">  
    <li class="ps-4 active"><Link href="/employee/myProfile"><i class="zmdi zmdi-account"></i> My Profile</Link></li>                                         
    <li class="ps-4"><Link href="/employee/contacts"><i class="zmdi zmdi-account-box-mail"></i> Contacts</Link></li> 
    <li class="ps-4"><Link href="/employee/locations"><i class="zmdi zmdi-pin"></i> Locations</Link></li>  
    {/* <li class="ps-4"><Link href="/employee/teams"><i class="zmdi zmdi-accounts"></i> Teams</Link></li>      */}
    <li class="ps-4"><Link href="/employee/workSchedule"><i class="zmdi zmdi-calendar"></i> Work Schedule</Link></li>
    <li class="ps-4"><Link href="/employee/departmentsandDesignations"><i class="zmdi zmdi-city-alt"></i> Departments and Designations</Link></li>
    <li class="ps-4"><Link href="/employee/absenses"><i class="zmdi zmdi-timer-off"></i> Absenses</Link></li>     
    <li class="ps-4"><Link href="/employee/activity"><i class="zmdi zmdi-alarm"></i> Activity</Link></li> 
    <li class="ps-4"><Link href="/employee/passwordSettings"><i class="zmdi zmdi-lock-open"></i> Password Settings</Link></li> 
</ul>  
  )
}

export default LeftSidebar
