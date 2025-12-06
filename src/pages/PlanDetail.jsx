import React from 'react'
import { useParams, Link } from 'react-router-dom'
import plansData from '../data/plansData'

function PlanDetail() {
    const { id } = useParams()
    const plan = plansData[id];

    if(!plan){
      return (
        <div className='max-w-3xl mx-auto px-6 py-16 text-center'>
          <h1 className='text-3xl font-bold text-red-600 mb-4'>Plan Not Found</h1>
          <p className='mb-6 text-gray-700'>
            Sorry, the plan you are looking for is not available.
          </p>
          <Link to='/plans'
          className='px-5 py-2 bg-blue-700 text-white rounded-lg hover:blue-800 transition'>
            Go Back to Plans
          </Link>
        </div>
      )
    }

  return (
    <div className='max-w-4xl mx-auto px-6 py-16'>
      <h1 className='text-4xl font-extrabold text-blue-800 mb-6'>{plan.title}</h1>
      <p className='text-gray-700 mb-8'>{plan.description}</p>

      <h2 className='text-2xl font-semibold text-blue-700 mb-4'>Weekly Breakdown</h2>
      <div className='space-y-4'>
        {plan.weeks.map((week, index) => (
          <div 
          key={index}
          className='bg-blue-50 rounded-lg shadow p-5 border-l-4 border-blue-700'
          >
            <span className='font-semibold'>Week {index +1}: </span> {week.split(':')[1].trim()}
          </div>
        ))}
      </div>

      <div className="mt-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Video Guide</h3>
      <div className="w-full h-96">
        <iframe
            src= {plan.video.link}
            title= {plan.name}
            allowFullScreen
            className="rounded-lg shadow-md w-full h-full"
          />
        </div>
      </div>

      <div className='mt-10 text-center'>
        <Link
        to="/consultation"
        className='inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition'
        >
          Book a consultation
        </Link>
      </div>
      
    </div>
  )
}

export default PlanDetail
