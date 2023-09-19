
import React from 'react';
import Header from '../components/Header';
import RightMenuSidebar from "../components/RightMenuSidebar"
import LeftMenuSidebar from '../components/LeftMenuSidebar';
import RightSidebar from'../components/RightSidebar';
import Main from './components/Main'

export default function Home() {
  return (
   <>
   <Header></Header>
   {/* <RightMenuSidebar></RightMenuSidebar> */}
   {/* <LeftMenuSidebar/> */}
   {/* <RightSidebar/> */}
   <Main/>
   </>
  )
}
