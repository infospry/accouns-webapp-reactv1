
import React from 'react';
import Header from '../components/Header';
import Main from './components/Main'
import { Suspense } from 'react'
import Loading from '../loading';
export default function Home() {
  return (
   <>
    <Suspense fallback={<Loading />}>
   <Header></Header>
   <Main/></Suspense>
   </>
  )
}