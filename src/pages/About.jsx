import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-5xl mx-auto px-6 py-20 text-slate-700">
        
        {/* --- Hero Section --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 tracking-tight">
            About PhysioTrack
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-slate-600">
            PhysioTrack is a simplified physiotherapy guidance platform designed to help 
            individuals recover from common musculoskeletal issues through structured 
            <span className="font-semibold text-blue-600"> 30-day exercise programs</span>.
          </p>
        </div>

        {/* --- Mission Card --- */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg shadow-blue-100 border border-blue-100 mb-12 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            Why PhysioTrack?
          </h2>
          <p className="leading-7 text-lg text-slate-600">
            Many people experience back pain, shoulder tightness, knee instability, or hip 
            mobility problems but never seek proper guidance. <span className="font-semibold text-blue-700">PhysioTrack solves this</span> by offering 
            a clinically-inspired self-assessment quiz that identifies the most likely issue 
            and provides a recovery plan tailored specifically to the result.
          </p>
        </div>

        {/* --- Grid Layout for Features & Audience --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Left Column: Our Approach */}
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-400 pb-2">
              Our Approach
            </h2>
            <ul className="space-y-4">
              {[
                "Clinically-inspired diagnostic quiz",
                "Structured 30-day recovery plans",
                "Simple explanations (No medical jargon)",
                "Consultation request option",
                "100% Online & No App Needed"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 bg-blue-500 p-1 rounded-full text-xs">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Who Is This For? */}
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-blue-50 border border-slate-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b border-blue-100 pb-2">
              Who Is This For?
            </h2>
            <p className="mb-4 text-slate-600">
              Ideal for students, desk-workers, athletes, or anyone experiencing:
            </p>
            <ul className="space-y-3">
              {[
                "Persistent Back Pain",
                "Shoulder Discomfort",
                "Knee Instability",
                "Hip Mobility Issues",
                "General Weakness"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Footer Disclaimer --- */}
        <div className="border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-400 italic">
            Disclaimer: PhysioTrack does not replace clinical diagnosis. It is an academic MVP designed for 
            informational purposes only.
          </p>
        </div>

      </div>
    </div>
  );
}