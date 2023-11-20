"use client"
import React from 'react';
import Header from '../../components/Header';
import ScheduledLeads from './components/scheduledleads'
import { Suspense } from 'react'
import Loading from '../../loading';
export default function Home() {
  return (
   <>
    <Suspense fallback={<Loading />}>
   <Header></Header>
   <ScheduledLeads/></Suspense>
   </>
  )
}