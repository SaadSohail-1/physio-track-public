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
    if (!diagnosis) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center p-10 bg-gray-50'>
                <h2 className='text-2xl text-red-600 font-bold mb-4'>Diagnosis Not Found</h2>
                <p className="text-gray-600 mb-6">Error Code: {resultID}</p>
                <Link to={"/quiz"} className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                    Return to Quiz
                </Link>
            </div>
        )
    }
  return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6">
                    Assessment Complete
                </h2>

                <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-3xl shadow-xl">
                    
                    {/* Diagnosis Title */}
                    <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-3">
                        Primary Clinical Impression
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
                        {diagnosis.label}
                    </h1>

                    {/* Description / Plan Name */}
                    <div className="bg-blue-50 text-blue-800 p-4 rounded-xl mb-10 inline-block font-medium">
                        {diagnosis.plan}
                    </div>

                    {/* Video Embed */}
                    <div className="mb-10 w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <iframe 
                            className="w-full h-full"
                            src={diagnosis.video} 
                            title={diagnosis.label}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* ACTION AREA */}
                    <div className="border-t border-gray-100 pt-10">
                        <p className="text-gray-600 mb-6 text-lg">
                            We have generated a specific 30-day protocol for this condition.
                        </p>
                        
                        {/* DYNAMIC LINK: Goes to /plans/adhesive_capsulitis */}
                        <Link
                            to={`/plans/${resultID}`}
                            className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            View Recovery Protocol →
                        </Link>
                    </div>
                </div>

                {/* Retake Link */}
                <div className="mt-12">
                    <Link to="/quiz" className="text-gray-400 hover:text-gray-600 font-medium underline transition-colors">
                        Retake Assessment
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Results
