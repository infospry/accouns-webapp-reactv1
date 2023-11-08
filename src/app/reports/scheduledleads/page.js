"use client"
import React from 'react';
import Header from '../../components/Header';
import LoginSessions from './components/LoginSessions'
import { Suspense } from 'react'
import Loading from '../../loading';
export default function Home() {
  return (
   <>
    <Suspense fallback={<Loading />}>
   <Header></Header>
   <LoginSessions/></Suspense>
   </>
  )
}