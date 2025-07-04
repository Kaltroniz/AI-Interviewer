import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { ArrowLeft, Calendar, Clock, Copy, List, ListCheck, Mail, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { toast } from 'sonner';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

function InterviewLink({interview_id,formData}) {
    const url=process.env.NEXT_PUBLIC_HOST_URL+'/'+interview_id
    const GetInterviewUrl=()=>{
        const url=process.env.NEXT_PUBLIC_HOST_URL+'/'+interview_id
        return url;
    }
    const onCopyLink=async()=>{
        await navigator.clipboard.writeText(url);
        toast('Link Copied')
    }
   const shareViaEmail = () => {
  const subject = "AI Recruiter Interview Link";
  const body = `Hi, I'd like to share this interview link with you:\n${url}`;
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
const shareViaTwitter = () => {
  const text = "Check out this AI Recruiter interview link!";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank');
};

const shareViaWhatsApp = () => {
  const message = `Hi, here's the AI Recruiter interview link:\n${url}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <Image src={'/check.png'} alt='check' width={50} height={50} />
        <h2 className='font-bold text-lg mt-4'>Your AI interview is ready</h2>
        <p className='mt-3'>Share this link with your candidates to start the interview process</p>
    
    <div className='w-full p-7 mt-6 rounded-xl bg-white'>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold'>Interview Link</h2>
            <h2 className='p-1 px-2 text-primary bg-blue-50 rounded-4xl'>valid for 30 days</h2>
            
        </div>
        <div className='mt-3 flex gap-3 items-center'>
                <Input defaultValue={GetInterviewUrl()} disabled={true}/>
                <Button onClick={()=>onCopyLink()}><Copy/> Copy Link</Button>
            </div>
            <hr className='my-7'/>
            <div className='flex gap-5'>
                <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Clock className='h-4 w-4'/>{formData?.duration}</h2>
                {/* <h2 className='text-sm text-gray-500 flex gap-2 items-center'><ListCheck className='h-4 w-4'/>{formData?.duration}</h2> */}
                {/* <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Calendar className='h-4 w-4'/>{formData?.duration}</h2> */}
            </div>
            <div className='mt-7 bg-white p-5 rounded-lg w-full'>
                <h2 className='font-bold'>Share Via</h2>
                <div className='flex gap-7 mt-2'>
                <Button onClick={() => shareViaEmail()}>
                <Mail className="mr-2" /> Email
                </Button>

                <Button onClick={() => shareViaTwitter()}>
                <FaXTwitter className="mr-2" /> X
                </Button>

                <Button onClick={() => shareViaWhatsApp()}>
                <FaWhatsapp className="mr-2" /> WhatsApp
                </Button>
            </div>
            </div>
    </div>
    <div className='flex w-full gap-5 justify-between mt-6'>
        <Link href={'/dashboard'}>
        <Button><ArrowLeft/>Back to Dashboard</Button>
        </Link>
        <Link href={'/dashboard/create-interview'}>
        <Button><Plus/>Create New Interview</Button>
        </Link>

    </div>
</div>
  )
}

export default InterviewLink