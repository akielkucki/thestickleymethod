'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const benefits = [
  '10 comprehensive training modules',
  'Daily accountability check-ins',
  'Access to exclusive brotherhood',
  'Monthly cash prize competitions',
  'Live Q&A sessions with experts',
  'Lifetime access to all content'
];

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-sky-50/30 via-blue-50/20 to-indigo-50/15 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-300/35 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Box */}
          <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-12 overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-100/50 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-2xl" />

            <div className="relative">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-green-50 border border-red-200 rounded-full mb-6 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-semibold text-slate-700">Limited Spots Available</span>
              </motion.div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent">
                Ready to Transform Your Life?
              </h2>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Join thousands of men who've already taken control of their appearance and confidence. TSM 2.0 launches soon - secure your spot in the brotherhood today.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Join TSM Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                </button>

                <div className="text-slate-600 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/50" />
                    <span><strong className="text-slate-900">247 men</strong> joined this week</span>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-slate-200 text-center"
              >
                <p className="text-slate-600 text-sm">
                  30-day money-back guarantee • Secure payment • Instant access
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
