# 🧠 AI-Powered Recruitment Assistant
[![Built With Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Backend-Supabase-green?logo=supabase)](https://supabase.com/)
[![OpenRouter](https://img.shields.io/badge/AI-OpenRouter-orange)](https://openrouter.ai/)
[![Vapi](https://img.shields.io/badge/Voice-Vapi-purple)](https://www.vapi.ai/)

An end-to-end full-stack AI interview assistant built with **Next.js**, **React**, **Tailwind CSS**, and **Supabase**. This SaaS-style platform allows recruiters to:

- ✅ Generate AI-driven interview questions
- 🎤 Conduct real-time voice-based interviews via **Vapi**
- 📄 Automatically generate structured AI feedback post-interview

---

## 🔗 Live Demo
(Deployed on render)
🌐 [Click here to try the app](https://ai-interviewer-3-3e6p.onrender.com/auth)

---

## 🚀 Features

### 🤖 AI Interview Question Generator
- Input job role, description, duration, and interview type (technical/behavioural).
- Generates a tailored set of interview questions using OpenRouter AI models (e.g., Llama, Gemini, Deepseek).

### 🎙️ Real-time Voice Interviews
- Conduct interviews using **Vapi** voice AI agent.
- Natural two-way conversations with support for listening, repetition, and hints.
- Tracks call events (start, end, response time) for UI feedback and logging.

### 📊 AI-Generated Feedback
- Summarises candidate performance post-interview.
- Includes ratings, strengths, weaknesses, and hiring recommendations.
- Uses prompt-engineered requests to OpenRouter for consistent outputs.


### 🔐 Authentication and Backend
- Google authentication via **Supabase Auth**
- Backend storage using **Supabase PostgreSQL**
- Real-time updates and secure API access
- Clean database schema with interviews, users, and feedback relations

---

## 🧱 Tech Stack

| Frontend       | Backend         | AI & Voice         |
|----------------|-----------------|--------------------|
| Next.js        | Supabase        | OpenRouter (AI)    |
| React          | Supabase DB     | Vapi (Voice AI)    |
| Tailwind CSS v4| Supabase Auth   |                    |
| Shadcn UI      |                 |                    |

---

## 📷 Screenshots

| Landing Page        | Interview Questions     | Voice Interview        |
|---------------------|-------------------------|------------------------|
| ![Landing](https://github.com/user-attachments/assets/508bed9a-ea82-481a-8a31-397cd17dea76)| ![Questions](https://github.com/user-attachments/assets/bc55ae57-dde5-40b8-a653-e1b7d046b5cc)| ![Interview](https://github.com/user-attachments/assets/8bb0ea4d-4faa-489c-b13e-6158490fb382)|



---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-recruiter-assistant.git
cd ai-recruiter-assistant
```
