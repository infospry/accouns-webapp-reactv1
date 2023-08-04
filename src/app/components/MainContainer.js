
import Link from "next/link";
import Dashboard from "./Dashboard";

const MainContainer = () =>{

   

    return (

        <>
        <section className="content">
        <div className="body_scroll">
            <div className="container-fluid">
                <div className="row clearfix">
                
<Dashboard></Dashboard>

                </div>
            </div>
        </div>
    </section>
        </>
    );
};
export default MainContainer;