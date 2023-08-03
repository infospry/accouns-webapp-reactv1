import React from 'react';
import { Suspense } from 'react'
import Header from '@/app/components/Header';
import RightMenuSidebar from '@/app/components/RightMenuSidebar';
import LeftMenuSidebar from '@/app/components/LeftMenuSidebar';
import RightSidebar from '@/app/components/RightSidebar';
import Main from './components/Main';
import Loading from '@/app/loading';

export default function Home() {
  return (
   <>
   
   <Header></Header>
   <RightMenuSidebar></RightMenuSidebar>
   <LeftMenuSidebar/>
   <RightSidebar/>
   <Suspense fallback={<Loading />}>
    <Main/>
    </Suspense> 
   </>
  )
}
