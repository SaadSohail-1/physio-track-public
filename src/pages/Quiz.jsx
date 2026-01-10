import React from 'react'
import { Link } from 'react-router-dom'

function Quiz() {

  const parts = [
    {
      title: "Neck & Cervical",
      id: "neck",
      desc: "Stiffness, headaches, or looking down."
    },
    {
      title: "Upper Extremity",
      id: "upper-extremity",
      desc: "Shoulder, elbow, wrist, and hand."
    },
    {
      title: "Back & Spine",
      id: "back",
      desc: "Upper back, lower back, and sciatica."
    },
    {
      title: "Pelvic & Hips",
      id: "pelvic",
      desc: "Hip joint, groin, and gluteal pain."
    },
    {
      title: "Lower Extremity",
      id: "lower-extremity",
      desc: "Knee, ankle, foot, and calves."
    }
  ]

  return (
    <div className='min-h-screen w-full bg-gray-50 py-20 px-6 font-sans'>
      
      {/* Header */}
      <div className='max-w-3xl mx-auto mb-16'>
        <h2 className='text-blue-600 font-bold tracking-widest uppercase text-xs mb-3'>
          Physio Assessment
        </h2>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight'>
          Select your pain point.
        </h1>
        <div className='w-20 h-1 bg-blue-600 mt-6 rounded-full'></div>
      </div>

      {/* Grid Layout */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {parts.map((part, index) => (
          <Link 
            key={part.id} 
            to={`/quiz/${part.id}`}
            className='group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-64'
          >

            {/* Content */}
            <div className='relative z-10'>
              <h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2'>
                {part.title}
              </h3>
              <p className='text-gray-500 font-medium leading-relaxed'>
                {part.desc}
              </p>
            </div>

            {/* "Button" Link Visual */}
            <div className='relative z-10 mt-auto pt-6 flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition:transform duration-300'>
              Start Assessment <span className='ml-2 text-xl'>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Quiz