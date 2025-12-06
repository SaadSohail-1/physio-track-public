import React from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    id: 'back',
    title: "Back Recovery Plan",
    description: "Targeted exercises to relieve back pain and strengthen your core",
    color: "bg-blue-100"
  },
  {
    id: "shoulder",
    title: "Shoulder Recovery Plan",
    description: "Structured program to improve mobility and strengthen shoulder muscles.",
    color: "bg-blue-200",
  },
  {
    id: "knee",
    title: "Knee Recovery Plan",
    description: "Plan to support knee stability and reduce joint pain.",
    color: "bg-blue-300",
  },
  {
    id: "hip",
    title: "Hip Recovery Plan",
    description: "Exercises to improve hip strength and mobility.",
    color: "bg-blue-400",
  },
]

function Plans() {
  return (
    <div className='max-w-5xl mx-auto px-6 py-16'>
      <h1 className='text-4xl font-extrabold text-blue-800 mb-8 text-center'>
        30-Day Recovery Plans
      </h1>

      <div className='grid md:grid-cols-2 gap-8'>
      {plans.map((plan) => (
        <div key={plan.id}
        className={`p-6 rounded-xl shadow-md ${plan.color} hover:shadow-lg transition`}>
          <h2 className='text-2xl font-semibold mb-3'>{plan.title}</h2>
          <p className='mb-4 text-gray-700'>{plan.description}</p>
          <Link to={`/plans/${plan.id}`}
          className='inline-block px-5 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition'>
            View Plan
          </Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Plans
