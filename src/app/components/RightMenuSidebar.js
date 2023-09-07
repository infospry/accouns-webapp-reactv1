
import Link from "next/link";
const RightMenuSidebar = () =>{
    return (

        <>
       <div class="navbar-right mt60">
        <ul class="navbar-nav">
            <li class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button">
                    <i class="zmdi zmdi-notifications"></i>
                    <div class="notify">
                        <span class="heartbit"></span>
                        <span class="point"></span>
                    </div>
                </a>
                <ul class="dropdown-menu slideUp2">
                    <li class="header">Notifications</li>
                    <li class="body">
                        <ul class="menu list-unstyled">
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-blue">
                                        <i class="zmdi zmdi-account"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>8 New Members joined</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 14 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-amber">
                                        <i class="zmdi zmdi-shopping-cart"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>4 Sales made</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 22 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-red">
                                        <i class="zmdi zmdi-delete"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>Nancy Doe</b> Deleted account</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-green">
                                        <i class="zmdi zmdi-edit"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>Nancy</b> Changed name</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 2 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-grey">
                                        <i class="zmdi zmdi-comment-text"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>John</b> Commented your post</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 4 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-purple">
                                        <i class="zmdi zmdi-refresh"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>John</b> Updated status</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-light-blue">
                                        <i class="zmdi zmdi-settings"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>Settings Updated</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> Yesterday </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="footer">
                        <a href="mail-inbox.html">View All Notifications</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button">
                    <i class="zmdi zmdi-email-open"></i>
                </a>
                <ul class="dropdown-menu slideUp2">
                    <li class="header">Massages</li>
                    <li class="body">
                        <ul class="menu list-unstyled">
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-blue">
                                        <i class="zmdi zmdi-account"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>8 New Members joined</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 14 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-amber">
                                        <i class="zmdi zmdi-shopping-cart"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>4 Sales made</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 22 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-red">
                                        <i class="zmdi zmdi-delete"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>Nancy Doe</b> Deleted account</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-green">
                                        <i class="zmdi zmdi-edit"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>Nancy</b> Changed name</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 2 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-grey">
                                        <i class="zmdi zmdi-comment-text"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>John</b> Commented your post</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 4 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-purple">
                                        <i class="zmdi zmdi-refresh"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>
                                            <b>John</b> Updated status</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mail-single.html">
                                    <div class="icon-circle bg-light-blue">
                                        <i class="zmdi zmdi-settings"></i>
                                    </div>
                                    <div class="menu-info">
                                        <h4>Settings Updated</h4>
                                        <p>
                                            <i class="zmdi zmdi-time"></i> Yesterday </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="footer">
                        <a href="mail-inbox.html">View All Notifications</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button">
                    <i class="zmdi zmdi-help"></i>
                </a>
                <ul class="dropdown-menu slideUp2">
                    <li class="header">Help & Support</li>
                    <li class="body">
                        <ul class="menu list-unstyled">
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="menu-info">
                                        <h4>Help & Support</h4>
                                        <p>Have questions? Find answers here!</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="menu-info">
                                        <h4>Whats new in Invoice?</h4>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="menu-info">
                                        <h4>Webinars</h4>
                                        <p>Register for upcoming webinars.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="menu-info">
                                        <h4>Request a feature</h4>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="menu-info">
                                        <h4>Need help?</h4>
                                        <p> We’re just an email away.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="footer">
                        <a href="javascript:void(0);">View All Notifications</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle" title="Master Settings" data-toggle="dropdown" role="button">
                    <i class="zmdi zmdi-settings"></i>
                </a>
                <ul class="dropdown-menu slideUp2">
                    <li class="body">
                        <ul class="menu list-unstyled">
                            <li class="header">Master Settings</li>
                            <li>
                                <a href="Modules.html" title="Setting Module"> Modules</a>
                                <a href="Country.html">Country</a>
                                <a href="State.html">State</a>      
                                <a href="City.html">City</a> 
                                <a href="Location.html">Location </a> 
                                <a href="ManageCategories.html"> Categories</a>
                            </li>                       
                        </ul>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="sign-in.html" class="mega-menu" title="Sign Out">
                    <i class="zmdi zmdi-power"></i>
                </a>
            </li>
        </ul>
    </div>
        </>
    );
};
export default RightMenuSidebar;