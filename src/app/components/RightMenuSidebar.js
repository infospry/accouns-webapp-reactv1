
import React from 'react';
import Link from "next/link";
const RightMenuSidebar = () =>{
    return (

        <>
       <div className="navbar-right mt60">
        <ul className="navbar-nav">
            <li className="dropdown">
                <a href={{ void: 0 }} className="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button">
                    <i className="zmdi zmdi-notifications"></i>                   
                </a>
                <ul className="dropdown-menu slideUp2">
                    <li className="header">Notifications</li>
                    <li className="body">
                        <ul className="menu list-unstyled">
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-blue">
                                        <i className="zmdi zmdi-account"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>8 New Members joined</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 14 mins ago </p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-red">
                                        <i className="zmdi zmdi-delete"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>Nancy Doe</b> Deleted account</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-green">
                                        <i className="zmdi zmdi-edit"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>Nancy</b> Changed name</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 2 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-grey">
                                        <i className="zmdi zmdi-comment-text"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>John</b> Commented your post</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 4 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-purple">
                                        <i className="zmdi zmdi-refresh"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>
                                            <b>John</b> Updated status</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <div className="icon-circle bg-light-blue">
                                        <i className="zmdi zmdi-settings"></i>
                                    </div>
                                    <div className="menu-info">
                                        <h4>Settings Updated</h4>
                                        <p>
                                            <i className="zmdi zmdi-time"></i> Yesterday </p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="footer">
                        <Link href="/">View All Notifications</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="mega-menu" href="/setting">
                    <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="mega-menu"href="/">
                    <i className="zmdi zmdi-email-open"></i>
                </Link>
            </li>      
            
            <li>
                <Link href="/sign-in" className="mega-menu" title="Sign Out">
                    <i className="zmdi zmdi-power"></i>
                </Link>
            </li>
        </ul>
    </div>
        </>
    );
};
export default RightMenuSidebar;