import React from 'react'
import { useSelector } from 'react-redux'
import resultMapping from '../data/resultMapping'
import { Link, Navigate } from 'react-router-dom'

function Results() {
    const resultID = useSelector(state=> state.quiz.result)
    if(!resultID) {
        return <Navigate to = "/quiz" />
    }
    const diagnosis = resultMapping[resultID];
    if(!diagnosis){
        return (
            <div className='p-10 text-center'>
                <h2 className='text-xl text-red-600'>Result not found for the key: {resultID.label}</h2>
                <Link to={"/quiz"} className='underline'>Return to Quiz</Link>
            </div>
        )
    }
  return (
        <div className="max-w-3xl mx-auto p-10 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Assessment Complete</h2>

            <div className="bg-white border-2 border-blue-100 p-8 rounded-xl shadow-lg">
                <p className="text-gray-500 uppercase text-sm tracking-widest mb-2">Primary Dysfunction</p>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    {diagnosis.label}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Recommended: {diagnosis.plan}
                </p>

                {/* Video Embed */}
                <div className="mb-8 aspect-video w-full">
                    <iframe 
                        className="w-full h-64 rounded-lg"
                        src={diagnosis.video} 
                        title={diagnosis.label}
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Call to Action */}
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="font-semibold mb-4">We have a specialized rehab protocol for this:</p>
                    
                    {/* Note: Ensure diagnosis.planId exists in resultMapping if you want this link to work dynamically */}
                    <Link
                        to="/plans"
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-transform hover:scale-105"
                    >
                        View Recovery Plan
                    </Link>
                </div>
            </div>

            <div className="mt-8">
                <Link to="/quiz" className="text-gray-500 hover:text-gray-800 underline">
                    Retake Assessment
                </Link>
            </div>
        </div>
    )
}

export default Results
