import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import plansData from '../data/plansData'
import emailjs from '@emailjs/browser'

function PlanDetail() {
    const { id } = useParams()
    const plan = plansData[id];

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [buyerInfo, setBuyerInfo] = useState({name: '', email: ''})
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
      setBuyerInfo({...buyerInfo, [e.target.name]: e.target.value})
    }

    const handlePurchase = (e) => {
      e.preventDefault()
      setStatus('sending')
      emailjs.send(
        import.meta.env.VITE_EMAILJS.SERVICE_ID,
        import.meta.env.VITE_EMAILJS.TEMPLATE_ID,
        {
          plan_name: plan.title,
          buyer_name: buyerInfo.name,
          buyer_email: buyerInfo.email,
          message: `New purchase request for ${plan.title}`
        },
        import.meta.env.VITE_EMAILJS.PUBLIC_ID
      )
      .then(() => {
        setStatus('success')
        setTimeout(() => {
          setIsModalOpen(false)
          setStatus(null)
          setBuyerInfo({name: '', email: ''})
        }, 2000);
      })
    }

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
    <div className='max-w-4xl mx-auto px-6 py-16 relative'>
      <div className='flex flex-col md:flex-grow justify-between items-center md:items-center mb-8 gap-4'>
    
        <div> 
          <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase'
          >{plan.category}
          </span>
          <h1 className='text-4xl font-extrabold text-blue-900 mt-3'>{plan.title}</h1>
        </div>
      <button 
      onClick={() => setIsModalOpen(true)}
      className='bg-green-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 hover:scale-105 transition-all'
      >Buy Now - Rs.4000</button>
      </div>

      <p className='text-xl text-gray-600 mb-10 leading-relaxed'>{plan.description}</p>

      {/* weekly breakdown*/}
      <h2 className='text-2xl font-bold text-gray-800 mb-6'> 4-Week Protocol</h2>
      <div className='space-y-4 mb-12'>
        {plan.weeks.map((week, index) => (
        <div key={index} className='bg-white p-5 rounded-xl border border-blue-100 shadow-sm flex items-center gap-4'>
          <div className='bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold flex-shrink-0'>
            {index + 1}
          </div>
          <p className='text-gray-700 font-medium'>{week.split(':')[1]?.trim() || week}</p>
        </div>
      ))}
      </div>

      {/* purchase modal*/}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative'>
            <button
            onClick={() => setIsModalOpen(false)}
            className='absolute top-4 righ-4 text-gray-400 hover:text-gray-600'
            > ✕ </button>

            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Unlock Full Access</h2>
            <p className='text-gray-500 mb-6'>Enter your details to receive the full {plan.title}.</p>

            {status === 'success' ? (
              <div className='text-center py-8'>
                <p className='text-green-600 text-xl font-bold mb-2'>Order Sent!</p>
                <p className='text-gray-500'>We Will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handlePurchase} className='flex flex-col gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Your Name</label>
                  <input
                  type="text"
                  name= "name"
                  required
                  value = {buyerInfo.name}
                  onChange={handleChange}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                  placeholder='Ahmed Raza'  
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Your Email</label>
                  <input 
                  type="email"
                  name= "email"
                  required
                  value={buyerInfo.email}
                  onChange={handleChange}
                  className='w-full borderborder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                  placeholder='ahmed@gmail.com'
                   />
                </div>
                <button
                  type='submit'
                  disabled={status==='sending'}
                  className='mt-2 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400'
                >
                  {status==='sending' ? 'Processing' : 'Confirm Purchase (Rs.4000)'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default PlanDetail
