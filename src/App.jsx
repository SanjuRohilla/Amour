import React from 'react';
import { useState, useEffect,useRef} from 'react'
import logo from './assets/logo.svg';
import Vapi from '@vapi-ai/web';

function App() {
  const [count, setCount] = useState(0)

  const vapiRef = useRef(null);

  useEffect(() => {
    vapiRef.current = new Vapi({
      apiKey: '1d119e02-7ec3-4f24-967f-1e25ccba7240', // 🌟 Replace this!
    });

    vapiRef.current.on('conversationStarted', () => {
      console.log('🎙️ Conversation started!');
    });
  }, []);

  const handleStart = () => {
    if (vapiRef.current) {
      vapiRef.current.start({
        assistant: 'e203058e-ea4c-4731-9fb0-316015952c5d', // 🌟 Replace this!
      });
    }
  };
  return (
    <>
    <nav className="flex items-center px-4 py-2 ">
      <img src={logo} alt="Amour logo" className="w-10 h-10" />
      <h1 className="text-3xl font-sans text-zinc-950">Amour</h1>
    </nav>
    <div className='flex flex-col items-center gap-7'>
    <div className='flex  flex-row justify-around gap-6 mt-10 justify-self-center'>
      <div className='h-80 w-100 bg-amber-600'></div>
      <div className='h-80 w-100 bg-amber-600'></div>
    </div>
    <button className='justify-self-center text-amber-50 bg-green-500 px-6 py-2 rounded-lg'        
    onClick={handleStart}
     >Call</button>
    </div>
    </>
  )
}


export default App

