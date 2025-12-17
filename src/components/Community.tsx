'use client';

import { motion } from 'framer-motion';
import { Users, Shield, Handshake, MessageSquare, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Brotherhood',
    description: 'Join a community of ambitious men dedicated to self-improvement and mutual support'
  },
  {
    icon: Shield,
    title: 'Accountability',
    description: 'Daily check-ins and accountability partners to keep you on track towards your goals'
  },
  {
    icon: Handshake,
    title: 'Support Network',
    description: 'Get advice, share wins, and learn from men at different stages of their journey'
  },
  {
    icon: MessageSquare,
    title: 'Active Discussion',
    description: '24/7 community engagement with real-time feedback and expert guidance'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Share your transformation and celebrate milestones with the brotherhood'
  },
  {
    icon: Award,
    title: 'Competitions',
    description: 'Monthly challenges with cash prizes and recognition for top performers'
  }
];

export default function Community() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-sky-50/20 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-slate-700">Exclusive Community</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
              More Than Just Training
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              The Stickley Method isn't just a program—it's a brotherhood. When you join TSM, you become part of an elite community of men who hold each other accountable and push each other to be better every single day.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">Real Results, Real People</h4>
                  <p className="text-slate-600">Verified transformations from members who've been where you are</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">No Judgment Zone</h4>
                  <p className="text-slate-600">A safe space to share struggles and celebrate victories</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">Expert Guidance</h4>
                  <p className="text-slate-600">Direct access to experienced coaches and mentors</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Join the Brotherhood
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative bg-white border-2 border-slate-200 rounded-xl p-6 h-full transition-all duration-300 hover:border-sky-300 hover:shadow-lg shadow-sm">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/30 group-hover:to-blue-50/30 transition-all duration-300 rounded-xl" />

                    <div className="relative">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg border-2 border-sky-200 mb-4">
                        <Icon className="w-6 h-6 text-sky-600" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-900 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom testimonial strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-slate-50 border-2 border-slate-200 rounded-full shadow-md">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-sm"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-slate-600">
              <span className="font-bold text-slate-900">5,000+ members</span> have already joined
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
