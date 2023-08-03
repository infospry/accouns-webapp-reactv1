 
 import { Suspense } from 'react'
 import HeaderNav from "./HeaderNav";
 import Loading from '../loading';

const Header = () =>{
    return (

        <>        
        <Suspense fallback={<Loading />}>
        <HeaderNav></HeaderNav>
        </Suspense>
        </>
    );
};
export default Header;