import React from 'react'
import { OnBoardingForm } from './_components/OnBoardingForm';
import { industryData } from '@/data/industryData';
import { getUserOnBoardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';

const OnBoardingFile = async() => {

  // check if user is already onboard 
  const {isOnboarded} = await getUserOnBoardingStatus();

  if(isOnboarded){
    redirect('/dashboard');
  }

  return (
    <main>
      <OnBoardingForm industryData={industryData}/>
    </main>
  )
}

export default OnBoardingFile;
