import React from 'react'
import Link from "next/link";
function LeftSidebar() {
    return (
        <>
            <div className="mail-side">
                <ul id="ulSettingNav_Placeholder" className="nav">
                    <li id="liprofile" className="pl-4 ClsSettingNav" title="My Profile"> <Link
                        href="settings/myProfile"><i className="fa fa-user"></i> My Profile</Link> </li>

                    <li id="liprofile" className="pl-4 ClsSettingNav" title="Users"> <Link
                        href="/Users"><i className="fa fa-users"></i> Users</Link> </li>


                    <li id="liprofile" className="pl-4 ClsSettingNav"
                        title="Password &amp; Security(2FA)"> <Link href="changePassword"><i
                            className="fa fa-unlock-alt"></i> Password &amp; Security(2FA)</Link> </li>
                </ul>
            </div>

        </>
    )
}

export default LeftSidebar
