"use client"
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import InterviewDetailContainer from './_components/InterviewDetailContainer';
import CandidateList from './_components/CandidateList';

function InterviewDetail() {
    const {interview_id}=useParams();
    const {user}=useUser();
    const [InterviewDetail,setInterviewDetail]=useState();
    useEffect(() => {
  if (user && interview_id) {
    GetInterviewDetail();
  }
}, [user, interview_id]);

    const GetInterviewDetail=async()=>{
        const result=await supabase.from('Interviews')
                .select('jobPosition, duration,jobDescription,type,questionList,interview_id,created_at,interview-feedback(userEmail,userName,feedback,created_at,recommended)')
               .eq('userEmail', user?.email)
                .order('id', { ascending: false })
                
               const interview = result.data.find(item => item.interview_id === interview_id);

    if (interview) {
        setInterviewDetail(interview);
        console.log(interview);
    } else {
        console.warn('No interview found with that ID.');
    }
                console.log(InterviewDetail)
    }
  return (
  <div className='mt-5'>
    <h2 className='font-bold text-2xl'>InterviewDetail</h2>
    <InterviewDetailContainer interviewDetail={InterviewDetail}/>
    {InterviewDetail?.['interview-feedback'] && (
      <CandidateList CandidateList={InterviewDetail['interview-feedback']}/>
    )}
  </div>
  
)

}

export default InterviewDetail
