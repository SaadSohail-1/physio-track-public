import React from "react";
import ConsultationForm from "../components/ConsultationForm";

export default function Consultation() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 tracking-tight">
        Request an Online Consultation
      </h1>

      <p className="mb-8 text-lg">
        Fill out the form below to talk to a physiotherapy student or receive guidance.
      </p>

      <ConsultationForm />
      
      <p className="text-sm text-gray-500 mt-6">
        *Physio30 does not replace professional medical diagnosis.
      </p>
    </div>
  );
}
