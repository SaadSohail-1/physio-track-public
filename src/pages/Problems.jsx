import React from "react";

const problems = [
  {
    title: "Back Pain",
    items: [
      "Low back pain (muscle strain, disc irritation, poor posture)",
      "Upper & mid back pain from prolonged sitting",
      "Sciatica and nerve-related pain",
    ],
  },
  {
    title: "Neck & Shoulder Problems",
    items: [
      "Neck stiffness and screen-related strain",
      "Rotator cuff injuries",
      "Frozen shoulder and impingement",
      "Tension headaches",
    ],
  },
  {
    title: "Hip, Knee & Ankle Pain",
    items: [
      "Hip bursitis and muscle imbalance",
      "Knee pain (ACL strain, patellofemoral pain, arthritis)",
      "Ankle sprains and plantar fasciitis",
    ],
  },
  {
    title: "Arm, Elbow & Hand Issues",
    items: [
      "Tennis and golfer’s elbow",
      "Wrist overuse injuries",
      "Carpal tunnel syndrome",
      "Grip weakness and numbness",
    ],
  },
  {
    title: "Postural & Movement Dysfunction",
    items: [
      "Rounded shoulders and forward head posture",
      "Muscle imbalance due to sedentary lifestyle",
      "Poor lifting and movement mechanics",
    ],
  },
  {
    title: "Sports Injuries",
    items: [
      "Muscle strains and ligament sprains",
      "Tendon overload injuries",
      "Return-to-sport rehabilitation",
    ],
  },
  {
    title: "Balance & Falls Prevention",
    items: [
      "Reduced balance and coordination",
      "Fall anxiety",
      "Age-related stability issues",
    ],
  },
  {
    title: "Chronic Pain Management",
    items: [
      "Persistent joint or muscle pain",
      "Overuse injuries",
      "Pain-related movement avoidance",
    ],
  },
];

function Problems() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Common Problems We Treat
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          PhysioTrack helps individuals recover from pain, injuries, and movement
          dysfunction using evidence-based physiotherapy and personalized
          recovery programs.
        </p>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {problem.title}
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
              {problem.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-12 bg-gray-50 border rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          When to Seek Professional Help
        </h3>
        <p className="text-gray-600 text-sm">
          If your pain is severe, worsening, associated with numbness or weakness,
          caused by trauma, or does not improve within 2–3 weeks, a professional
          assessment is strongly recommended.
        </p>
      </div>
    </section>
  );
}

export default Problems
