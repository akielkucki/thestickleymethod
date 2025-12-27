'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, ShieldCheck } from 'lucide-react';

const benefits = [
  'Full Training Curriculum',
  'Daily Accountability Protocols',
  'Private Brotherhood Access',
  '$10k Monthly Prize Pool',
  'Weekly Expert Masterclasses',
  'Lifetime Updates Included'
];

export default function FinalCTA() {
  return (
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="max-w-5xl mx-auto"
          >
            {/* Main Dark Card */}
            <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 isolate">

              {/* Top Spotlight Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] -mt-40 pointer-events-none" />

              {/* Subtle Texture */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-soft-light"></div>

              <div className="relative flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">TSM 2.0 Launching Soon</span>
                </motion.div>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
                  Stop watching from <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500">
                  the sidelines.
                </span>
                </h2>

                <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
                  You've seen the results. You know what's possible. The only thing standing between you and your potential is a decision.
                </p>

                {/* Benefits Grid - Glass Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12 text-left">
                  {benefits.map((benefit, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (index * 0.1) }}
                          className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-slate-300 font-medium">{benefit}</span>
                      </motion.div>
                  ))}
                </div>

                {/* Action Area */}
                <div className="flex flex-col items-center gap-6 w-full max-w-md">

                  {/* Primary Button */}
                  <button className="group relative w-full py-5 bg-white text-slate-900 font-bold text-xl rounded-2xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <span className="flex items-center justify-center gap-2 relative z-10">
                     Secure Your Spot
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </span>
                  </button>

                  {/* Social Proof Text */}
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">
                            {/* Using a placeholder for avatar images */}
                            <img
                                src={`https://i.pravatar.cc/100?img=${i + 15}`}
                                alt="User"
                                className="w-full h-full rounded-full object-cover opacity-80"
                            />
                          </div>
                      ))}
                    </div>
                    <div className="flex flex-col text-left leading-none gap-1">
                      <span className="text-slate-300 font-bold">247 men joined</span>
                      <span className="text-xs text-slate-500">in the last 48 hours</span>
                    </div>
                  </div>

                </div>

                {/* Guarantee Footer */}
                <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                  <span className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
                  <div>Secure SSL Payment</div>
                  <span className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
                  <div>Instant Access</div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Tailwind Config for Shimmer Animation */}
        <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
      </section>
  );
}