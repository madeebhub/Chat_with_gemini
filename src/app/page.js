'use client';

import { useState } from 'react';
import Head from 'next/head';
import ChatInterface from '../components/ChatInterface';
import { GoogleGenAI } from '@google/genai';
import Header from '@/components/Header';
export default function Home() {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY });

  return (
    <>
      <Head>
        <title>DeepSeek Chat</title>
      </Head>
      <Header />
      <div className="min-h-screen mx-5 bg-gray-50 p-4 flex justify-between">
        <div className="sidebar h-[85vh] w-[18%] rounded-b-xl bg-gradient-to-b from-blue-600 to-blue-400 text-white p-4 shadow-lg font-serif">
          <h2 className="text-2xl font-bold mb-4 border-b border-white pb-2">🤖 Gemini AI Chatbot</h2>
          <p className="text-sm leading-6">
            Welcome to our intelligent assistant powered by <span className="font-semibold">Google Gemini</span> – a state-of-the-art AI chatbot seamlessly integrated into our website.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
            <li>Ask anything – get instant, reliable answers 24/7.</li>
            <li>Adapts to your preferences and custom website instructions.</li>
            <li>Improves user experience through smart interaction.</li>
            <li>Reduces support costs and increases efficiency.</li>
            <li>Engages users with dynamic and conversational replies.</li>
          </ul>
          <p className="mt-4 text-sm">
            Our goal is to enhance user engagement and streamline communication by leveraging the power of AI. Whether you're browsing, learning, or seeking help — Gemini AI is here to assist.
          </p>
        </div>

        <div className='chatbot w-[80vw] h-[80vh]'>
          <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">Chat With Gemini</h1>
          <ChatInterface apiKey={apiKey} />
        </div>
      </div>
    </>
  );
}