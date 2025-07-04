import { QUESTION_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {

    const {jobPosition,jobDescription,duration,type}=await req.json();
    const FINAL_PROMPT=QUESTION_PROMPT.replace('{{jobTitle}}',jobPosition)
        .replace('{{jobDescription}}',jobDescription)
        .replace('{{duration}}',duration)
        .replace('{{type}}',type)
    

    try{

    const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY,
  
})

const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324:free",
    messages: [
      { role: "user", content: FINAL_PROMPT }
    ],
    
  })
  console.log(completion.choices[0].message)
  return NextResponse.json(completion.choices[0].message)
}
catch(e){
    console.log(process.env.OPEN_ROUTER_API_KEY)
    console.log(e)
    return NextResponse.json(e)
}   
}