// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import netflix from "../assets/netflix.jpeg"
import canva from "../assets/canva.jpeg"
import spotify from "../assets/spotify.jpeg"
import tiktok from "../assets/tiktok.jpeg"

export default function FreeCashLanding() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Get <span className="text-green-400">Paid</span> for Apps, Games & Surveys
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Earn money online by testing apps, playing games, and answering surveys. 
          Withdraw easily through PayPal, crypto, or gift cards.
        </p>
        <motion.a
          href="#signup"
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 hover:bg-green-600 text-lg font-semibold px-8 py-4 rounded-2xl shadow-lg"
        >
          Start Earning Now
        </motion.a>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 px-6 bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by Top Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
             <img src={netflix} alt="Netflix"  className="mx-auto h-12"/>
             <img src={tiktok} alt="TikTok"  className="mx-auto h-12"/>
             <img src={canva} alt="Canva"  className="mx-auto h-12"/>
             <img src={spotify} alt="Spotify"  className="mx-auto h-12"/>
        </div>
      </section>

      {/* Why FreeCash */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose FreeCash?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Earn up to $3,000 per offer",
            "15,000+ offers available anytime",
            "Fast cashouts via PayPal & crypto",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
            >
              <CheckCircle className="text-green-400 w-10 h-10 mx-auto mb-4" />
              <p className="text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Sign Up", desc: "Create your free account in under 2 minutes." },
            { step: "2", title: "Complete Offers", desc: "Try apps, play games, or take surveys." },
            { step: "3", title: "Cash Out", desc: "Withdraw to PayPal, crypto, or gift cards instantly." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg"
            >
              <h3 className="text-green-400 text-4xl font-bold mb-2">{item.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="signup" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
        <p className="text-gray-300 mb-8">Join thousands of users already cashing out daily.</p>
        <motion.a
          href="YOUR_AFFILIATE_LINK_HERE"
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 hover:bg-green-600 text-xl font-semibold px-10 py-5 rounded-2xl shadow-lg"
        >
          Sign Up & Start Earning
        </motion.a>
      </section>
    </div>
  );
}
