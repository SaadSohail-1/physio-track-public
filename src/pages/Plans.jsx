import React from 'react'
import { Link } from 'react-router-dom'
import plansData from '../data/plansData'

function Plans() {
  const plansList = Object.values(plansData)
  return (
    <div className='max-w-5xl mx-auto px-6 py-16'>
      <h1 className='text-4xl font-extrabold text-blue-800 mb-8 text-center'>
        Recovery Plans
      </h1>
      <p className='text-center text-gray-600 mb-12'>
        Browse our specialized rehabilitation plans.</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {plansList.map((plan) => (
        <div key={plan.id}
        className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-blue-50 transition-all flex flex-col justify-between'>
          <div>
            <span className='inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mb-3'>{plan.category}</span>
            <h2 className='text-2xl font-semibold mb-3'>{plan.title}</h2>
            <p className='mb-4 text-gray-700'>{plan.description}</p>
          </div>
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
