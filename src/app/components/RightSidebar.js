
import Link from "next/link";
const RightSidebar = () =>{
    return (

        <>
        <aside id="rightsidebar" className="right-sidebar">
        <ul class="nav nav-tabs sm">
            <li className="nav-item">
                <Link className="nav-link active" data-toggle="tab" href="/setting">
                    <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" data-toggle="tab" href="/">
                    <i className="zmdi zmdi-comments"></i>
                </Link>
            </li>
        </ul>
       
    </aside>
        </>
    );
};
export default RightSidebar;