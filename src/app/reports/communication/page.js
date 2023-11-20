"use client"
import React from 'react';
import Header from '../../components/Header';
import Communication from './components/Communication'
import { Suspense } from 'react'
import Loading from '../../loading';
export default function Home() {
  return (
   <>
    <Suspense fallback={<Loading />}>
   <Header></Header>
   <Communication/></Suspense>
   </>
  )
}