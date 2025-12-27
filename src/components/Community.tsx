'use client';

import { motion } from 'framer-motion';
import { Users, Shield, Handshake, MessageSquare, TrendingUp, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Brotherhood',
    description: 'Join a vetted circle of ambitious men dedicated to mutual growth.'
  },
  {
    icon: Shield,
    title: 'Accountability',
    description: 'Daily protocols and partners to ensure you never drift off course.'
  },
  {
    icon: Handshake,
    title: 'Network',
    description: 'Access to men at different stages, from beginners to 7-figure mentors.'
  },
  {
    icon: MessageSquare,
    title: 'War Room',
    description: '24/7 engagement with real-time tactical feedback and guidance.'
  },
  {
    icon: TrendingUp,
    title: 'Tracking',
    description: 'Data-driven progress monitoring to visualize your transformation.'
  },
  {
    icon: Award,
    title: 'Competition',
    description: 'Monthly challenges with cash prizes to spark your competitive drive.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Community() {
  return (
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        {/* Background: Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left side - Content (Spans 5 columns) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Members Only</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight leading-[1.1]">
                  Iron sharpens <br />
                  <span className="text-blue-600">Iron.</span>
                </h2>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  The Stickley Method isn't just a course; it's an ecosystem.
                  You become part of an elite network that holds you to a higher standard.
                </p>

                {/* Checklist */}
                <div className="space-y-5 mb-10">
                  {[
                    { title: "Real Results", desc: "Verified transformations, no fluff." },
                    { title: "Zero Judgment", desc: "A safe space to share struggles." },
                    { title: "Expert Access", desc: "Direct line to coaches & mentors." }
                  ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-semibold text-base">{item.title}</h4>
                          <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                      </div>
                  ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all duration-300"
                >
                  Apply for Access
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Social Proof - Mini */}
                <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-[url('https://i.pravatar.cc/100?img=${i + 10}')] bg-cover`} />
                    ))}
                  </div>
                  <p>Joined by <span className="font-bold text-slate-900">5,000+ men</span></p>
                </div>
              </motion.div>
            </div>

            {/* Right side - Features Grid (Spans 7 columns) */}
            <div className="lg:col-span-7">
              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                      <motion.div
                          key={feature.title}
                          variants={itemVariants}
                          className="group"
                      >
                        <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 relative overflow-hidden">
                          {/* Subtle accent gradient on hover */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform duration-500 scale-0 group-hover:scale-100 opacity-50" />

                          <div className="relative">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-slate-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                              <Icon className="w-5 h-5" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
}