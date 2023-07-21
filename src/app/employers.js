import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import RightMenuSidebar from "../components/RightMenuSidebar"
import LeftMenuSidebar from '../components/LeftMenuSidebar';
import RightSidebar from'../components/RightSidebar';
import Main from '../components/Employers/Main'

import styles from './page.module.css';

export default function Employers() {
  return (
   <>
   <Header></Header>
   <RightMenuSidebar></RightMenuSidebar>
   <LeftMenuSidebar/>
   <RightSidebar/>
   <Main/>
   </>
  )
}