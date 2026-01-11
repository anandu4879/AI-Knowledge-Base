import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-indigo-600 tracking-tighter">AI-Base</div>
        <div className="space-x-8 hidden md:flex font-medium text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 font-medium text-gray-700 hover:text-indigo-600">Login</Link>
          <Link to="/register" className="px-5 py-2.5 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-32 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
          New: AI-Powered Search v2.0
        </span>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          Your personal <span className="text-indigo-600">AI Knowledge Base</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Upload your documents, notes, and links. Our AI organizes everything so you can find insights in seconds. Built for researchers, students, and creators.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register" className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95">
            Start Building for Free
          </Link>
          <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all">
            View Live Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Powerful tools to help you manage your information without the headache.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Smart Search", desc: "Find anything across all your files using natural language queries.", icon: "🔍" },
              { title: "Auto-Tagging", desc: "Our AI automatically categorizes your content by topic and intent.", icon: "🏷️" },
              { title: "Secure Storage", desc: "Enterprise-grade encryption for all your sensitive data.", icon: "🛡️" }
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="p-8 rounded-3xl border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-black mb-4">$0 <span className="text-lg font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✅ Up to 50 documents</li>
                <li>✅ Basic AI search</li>
                <li>✅ 1 User account</li>
              </ul>
              <Link to="/register" className="block text-center py-3 border border-gray-900 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition">
                Choose Free
              </Link>
            </div>
            {/* Pro Plan */}
            <div className="p-8 rounded-3xl border-2 border-indigo-600 relative bg-white shadow-2xl">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-black mb-4">$19 <span className="text-lg font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✅ Unlimited documents</li>
                <li>✅ Advanced AI context engine</li>
                <li>✅ Priority Support</li>
              </ul>
              <Link to="/register" className="block text-center py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                Go Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-8 text-center text-gray-500 text-sm">
        © 2026 AI-Base Inc. All rights reserved.
      </footer>
    </div>
  );
}