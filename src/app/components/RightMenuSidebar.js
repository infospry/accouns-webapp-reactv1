
import Link from "next/link";
const RightMenuSidebar = () =>{
    return (

        <>
        <div className="navbar-right mt-1">
        <ul className="navbar-nav">
            <li>

                <Link href="https://empapp.thestaffport.com/Account/MessageCenter" className="mega-menu cls-send-message"
                    data-action="custom-msg" data-tippy="" data-original-title="Send Custom Message">
                    <i className="zmdi zmdi-email"></i>
                </Link>

            </li>
            <li>
                <Link href="/" id="btnsignout" className="mega-menu" data-tippy="" data-original-title="Sign Out">
                    <i className="zmdi zmdi-power"></i>
                </Link>
            </li>
        </ul>
    </div>
        </>
    );
};
export default RightMenuSidebar;