import React from 'react';
import { Suspense } from 'react'
// import Header from '../app/components/Header';
// import RightMenuSidebar from "../app/components/RightMenuSidebar"
// import LeftMenuSidebar from '../app/components/LeftMenuSidebar';
// import RightSidebar from'../app/components/RightSidebar';
import LogIn from '../app/login/components/LogIn'
import Loading from './loading';

// import styles from './page.module.css';


export default function Home() {
  return (
   <>
   {/* <Header></Header>
   <RightMenuSidebar></RightMenuSidebar>
   <LeftMenuSidebar/>
   <RightSidebar/> */}
   <Suspense fallback={<Loading />}>
   <LogIn/>
</Suspense>
  
   </>
  )
}
