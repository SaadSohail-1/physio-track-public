import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

function ConsultationForm() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  if (state.succeeded) {
      return (
        <p className='text-blue-600 text-lg'>
            Thanks for submitting! We'll get back to you soon.<br />
            <Link 
            className='text-gray-400 underline text-sm'
            to={"/"}>Go to home</Link>
        </p>
      )
  }

  return (
    <form onSubmit={handleSubmit}
    className="space-y-6 bg-white p-8 rounded-xl shadow-md border border-gray-200">
      
    {/* name */}
    <div>
        <label htmlFor="name"
        className='block text-sm font-medium text-gray-700'>Name</label>
        <input 
        type="text"
        id='name'
        name='name'
        placeholder='Your Name'
        required
        className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
        />
    </div>

    {/* email */}
    <div>
        <label 
        htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
        <input 
        type="email"
        id='email'
        name='email'
        placeholder='abc@gmail.com'
        className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
        />
        <ValidationError prefix='email' field='email' errors={state.errors} />
    </div>

    {/* type of pain */}
    <div>
        <label 
        htmlFor="painType" className='block text=sm font-medium text-gray-700'>Type of Pain</label>
        <select
        name="painType" 
        id="painType" 
        required 
        className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'>
            <option value="">Select</option>
            <option value="Back">Back</option>
            <option value="Shoulder">Shoulder</option>
            <option value="Knee">Knee</option>
            <option value="Hip">Hip</option>
        </select>
    </div>

    {/* short desc */}
    <div>
        <label 
        htmlFor="message" className='block text-sm font-medium text-gray-700'>Short Description</label>
        <textarea 
        name="message" 
        id="message"
        rows="4"
        placeholder='Describe your pain or concerns...'
        required
        className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
        ></textarea>
        <ValidationError prefix='message' field='message' errors={state.errors} />
    </div>

    {/* preferred time */}
    <div>
        <label 
        htmlFor="preferredTime" className='block text-sm font-medium text-gray-700'>Preferred Time (Optional)</label>
        <input 
        type="preferredTime"
        id='preferredTime'
        name='preferredTime'
        placeholder='e.g., 3PM, 24 Dec'
        className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
        />
    </div>

      <button 
      type="submit" 
      disabled={state.submitting} 
      className='w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition'>
        Submit
      </button>
    </form>
  );
}

export default ConsultationForm;