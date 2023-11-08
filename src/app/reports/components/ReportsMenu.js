import Link from "next/link";
import { useEffect, useState } from "react";


const ReportsMenu = () => {
    // const [menus, setMenus] = useState([]);
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         var localStorageData = JSON.parse(localStorage.getItem(ns_util.navLocalStorageName));
    //         if (localStorageData !== undefined) {
    //             setMenus([localStorageData.response[1].modules[4]]);
    //         }
    //     }
    // }, [])
    return (
        <>
            <div className="mobile-left">
                <a className="btn btn-info btn-icon toggle-email-nav collapsed" data-toggle="collapse" href="#email-nav" role="button" aria-expanded="false" aria-controls="email-nav">
                    <span className="btn-label"><i className="zmdi zmdi-more"></i></span>
                </a>
            </div>
            <div className="inbox left pr-0 pt-3" id="email-nav">
                <div className="mail-side">
                    <ul className="nav pl-2 pr-2">
                        {/* {menus && menus.length > 0 &&
                            <li key={"-1"} ><Link href={"/" + ns_util.toLowerCase(menus[0].module_route)}><a><i className="zmdi zmdi-account-box-mail"></i>{menus[0].module_name}</a></Link></li>
                        }
                        {menus && menus.length > 0 && menus[0].sub_modules.map((menu, i) => (
                            <li key={i}><Link href={"/" + ns_util.toLowerCase(menu.module_route)}><a><i className={menu.icon}></i>{menu.module_name}</a></Link></li>
                        ))} */}
              
                <li><a href="/reports/loginsessions"><i class="zmdi zmdi-account"></i>Login Sessions</a></li><li><a href="/reports/scheduledleads"><i class="zmdi zmdi-alarm-check"></i>Scheduled Leads</a></li><li><a href="/reports/leadsbystatus"><i class="zmdi zmdi-info"></i>Leads By Status</a></li><li><a href="/reports/communication"><i class="zmdi zmdi-comment-text"></i>Communication</a></li>
                    </ul>
                </div>
            </div></>
    )
}
export default ReportsMenu;