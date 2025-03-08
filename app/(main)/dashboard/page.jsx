import { getUserOnBoardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function DashBoard() {

    const {isOnboarded} = await getUserOnBoardingStatus();
  
    if(!isOnboarded){
      redirect('/onboarding');
    }

  return (
    <div>
    this is my dashboard page
    </div>
  )
}
