import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">

      {/* --- Hero Section --- */}
      <section className="mx-auto px-6 py-24 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight mb-6">
          Your Personal <br />
          <span className="text-blue-600">Clinical Assessment</span> Companion
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          A smart and simple tool to help you understand musculoskeletal issues
          and explore structured exercise plans designed with clinical accuracy.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/quiz"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-200/50 transition-all transform hover:-translate-y-0.5"
          >
            Start Clinical Quiz
          </Link>

          <Link
            to="/plans"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold border border-blue-200 shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-all"
          >
            View Exercise Plans
          </Link>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Clinical Quiz Engine</h3>
              <p className="text-slate-600 leading-relaxed">
                Multi-step clinical assessment that maps symptoms to muscle and joint dysfunctions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Personalized Plans</h3>
              <p className="text-slate-600 leading-relaxed">
                Professionally structured 30-day plans tailored for common musculoskeletal issues.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Expert Consultations</h3>
              <p className="text-slate-600 leading-relaxed">
                Need more help? Book professional sessions easily through our integrated forms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Why Section --- */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why This Platform?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
            Built for clarity, accuracy, and simplicity — ideal for rapid assessment and recovery.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Instant Results", desc: "Get clinically meaningful outcomes instantly.", icon: "⚡" },
              { title: "Clean UI", desc: "Minimal, modern, and professional layout.", icon: "✨" },
              { title: "No Login Needed", desc: "Start instantly, zero friction.", icon: "🔓" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-blue-700 text-center text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to fix your pain?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Take the quiz in less than 2 minutes and get your recovery plan.
          </p>

          <Link
            to="/quiz"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition shadow-xl transform hover:scale-105 duration-200"
          >
            Start Assessment Now
          </Link>
        </div>
      </section>

    </div>
  );
}