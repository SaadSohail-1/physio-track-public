import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700">
      
      {/* page Header */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">About Physio30</h1>

      {/* physio30 intro */}
      <p className="text-lg leading-relaxed mb-10 max-w-3xl">
        Physio30 is a simplified physiotherapy guidance platform designed to help 
        individuals recover from common musculoskeletal issues through structured  
        30-day exercise programs. Our goal is to make recovery accessible, 
        understandable, and personalized without the need for an in-person clinical visit.
      </p>

      {/* why section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-10 border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Why Physio30?
        </h2>
        <p className="leading-relaxed">
          Many people experience back pain, shoulder tightness, knee instability, or hip 
          mobility problems but never seek proper guidance. Physio30 solves this by offering 
          a clinically-inspired self-assessment quiz that identifies the most likely issue 
          and provides a recovery plan tailored to the result.
        </p>
      </div>

      {/* diff approach section */}
      <div className="bg-white p-8 rounded-xl shadow-md mb-10 border">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          What Makes Our Approach Different?
        </h2>
        <ul className="space-y-3 list-disc ml-6">
          <li>Clinically-inspired diagnostic quiz</li>
          <li>Structured 30-day recovery plans for common problems</li>
          <li>Simple explanations written for non-medical users</li>
          <li>Consultation request option for personalized help</li>
          <li>Completely online, no app installation needed</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Who Is This For?
        </h2>
        <p className="leading-relaxed">
          Physio30 is ideal for students, desk-workers, athletes, or anyone experiencing:
        </p>
        <ul className="space-y-2 list-disc ml-6 mt-3">
          <li>Back pain</li>
          <li>Shoulder discomfort</li>
          <li>Knee instability</li>
          <li>Hip mobility issues</li>
          <li>Weakness during movement</li>
        </ul>
      </div>

      {/* Final note */}
      <p className="text-sm text-gray-500 mt-10">
        Disclaimer: Physio30 does not replace clinical diagnosis. It is an academic MVP designed for 
        informational purposes only.
      </p>
    </div>
  );
}
