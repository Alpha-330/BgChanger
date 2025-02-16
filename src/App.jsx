import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("pink")

  return (
    <div className='w-full h-screen duration-700' style={{ backgroundColor: color }}>
      <div><h1 className='text-3xl font-bold mb-4'>Background Changer</h1></div>
      <div className='flex flex-wrap fixed bottom-12  justify-center gap-3 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl'><button onClick={()=>setColor("red")} className='bg-red-600 outline-none px-4 py-1 rounded-full text-white shadow-lg'>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl'><button onClick={()=>setColor("blue")} className=' bg-blue-500 outline-none px-4 py-1 rounded-full text-white shadow-lg'>Blue</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl'><button onClick={()=>setColor("green")} className='bg-green-500 outline-none px-4 py-1 rounded-full text-white shadow-lg'>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl'><button onClick={()=>setColor("yellow")} className='bg-yellow-500 outline-none px-4 py-1 rounded-full text-white shadow-lg'>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
