import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* hero section */}
      <section className="mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight">
          Your Personal Clinical Assessment Companion
        </h1>

        <p className="text-lg text-blue-700 mt-4 max-w-2xl mx-auto leading-relaxed">
          A smart and simple tool to help users understand musculoskeletal issues
          and explore structured exercise plans designed with clinical accuracy.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/quiz"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
          >
            Start Clinical Quiz
          </Link>

          <Link
            to="/plans"
            className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-100 transition"
          >
            View Exercise Plans
          </Link>
        </div>
      </section>

      {/*features section*/}
      <section className="py-16 bg-white">
        <div className=" mx-auto px-6 grid md:grid-cols-3 gap-10">
          
          <div className="p-6 rounded-2xl shadow-sm border border-blue-100 bg-blue-50 text-center">
            <h3 className="text-2xl font-semibold text-blue-800">🩺 Clinical Quiz Engine</h3>
            <p className="text-blue-700 mt-2">
              Multi-step clinical assessment that maps symptoms to muscle and joint dysfunctions.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border border-blue-100 bg-blue-50 text-center">
            <h3 className="text-2xl font-semibold text-blue-800">📋 Personalized Plans</h3>
            <p className="text-blue-700 mt-2">
              Professionally structured 30-day plans for common musculoskeletal issues.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border border-blue-100 bg-blue-50 text-center">
            <h3 className="text-2xl font-semibold text-blue-800">🤝 Consultations</h3>
            <p className="text-blue-700 mt-2">
              Book sessions easily through Google Forms.
            </p>
          </div>

        </div>
      </section>

      {/*why section*/}
      <section className="py-20 text-center max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-800">Why This Platform?</h2>
        <p className="text-blue-700 mt-4 max-w-2xl mx-auto">
          Built for clarity, accuracy, and simplicity — ideal for university presentations and early MVPs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="p-6 rounded-xl shadow-sm bg-white border border-blue-100">
            <h4 className="text-xl font-semibold text-blue-800">✔ Instant Results</h4>
            <p className="text-blue-700 mt-2">Get clinically meaningful outcomes instantly.</p>
          </div>

          <div className="p-6 rounded-xl shadow-sm bg-white border border-blue-100">
            <h4 className="text-xl font-semibold text-blue-800">✔ Clean UI</h4>
            <p className="text-blue-700 mt-2">Minimal, modern, and professional layout.</p>
          </div>

          <div className="p-6 rounded-xl shadow-sm bg-white border border-blue-100">
            <h4 className="text-xl font-semibold text-blue-800">✔ No Login Needed</h4>
            <p className="text-blue-700 mt-2">Start instantly, zero friction.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-center text-white">
        <h2 className="text-4xl font-bold">Begin Your Assessment Today</h2>
        <p className="mt-3 text-blue-100">Quick • Simple • Effective</p>

        <Link
          to="/quiz"
          className="mt-6 inline-block bg-white text-blue-700 px-10 py-3 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Start Quiz
        </Link>
      </section>

    </div>
  );
}
