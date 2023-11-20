"use client"
import React from 'react';
import Header from '../../components/Header';
import LeadsByStatus from './components/LeadsByStatus'
import { Suspense } from 'react'
import Loading from '../../loading';
export default function Home() {
  return (
   <>
    <Suspense fallback={<Loading />}>
   <Header></Header>
   <LeadsByStatus/></Suspense>
   </>
  )
}