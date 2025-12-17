'use client';

import { motion } from 'framer-motion';
import { Apple, Dumbbell, Eye, Smile, Scissors, Zap, Brain, Target, MessageCircle, Shirt, ChevronRight } from 'lucide-react';

const modules = [
  {
    icon: Apple,
    title: 'Nutrition',
    description: 'Diet optimization for fat loss, clear skin, and sustained energy',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Dumbbell,
    title: 'Health & Fitness',
    description: 'Workout structure designed for an aesthetic, powerful physique',
    color: 'from-sky-500 to-blue-600'
  },
  {
    icon: Eye,
    title: 'Eye Area',
    description: 'Advanced techniques to enhance and optimize your eye appearance',
    color: 'from-cyan-500 to-teal-600'
  },
  {
    icon: Smile,
    title: 'Jaw',
    description: 'Proven methods for jawline enhancement and definition',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Scissors,
    title: 'Beard',
    description: 'Complete grooming guide and natural growth strategies',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: Zap,
    title: 'Testosterone',
    description: 'Natural hormone optimization for peak masculine performance',
    color: 'from-red-500 to-rose-600'
  },
  {
    icon: Brain,
    title: 'Mental Health',
    description: 'Build clarity, reduce anxiety, and sharpen mental focus',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: Target,
    title: 'Accountability',
    description: 'Daily check-ins and peer support systems for consistency',
    color: 'from-sky-500 to-cyan-600'
  },
  {
    icon: MessageCircle,
    title: 'Charisma',
    description: 'Master communication skills and commanding presence',
    color: 'from-blue-500 to-sky-600'
  },
  {
    icon: Shirt,
    title: 'Fashion',
    description: 'Build a powerful wardrobe that enhances masculine style',
    color: 'from-slate-500 to-gray-600'
  }
];

export default function Modules() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50/20 to-sky-50/30">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6 shadow-sm"
          >
            <span className="text-sm font-semibold text-slate-700">Complete Training System</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent">
            What You'll Master
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            10 comprehensive modules covering every aspect of male appearance optimization and self-improvement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative"
              >
                <div className="relative h-full bg-white border-2 border-slate-200 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-sky-300 hover:shadow-xl shadow-md">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/30 group-hover:to-blue-50/30 transition-all duration-300" />

                  {/* Icon container */}
                  <div className="relative mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl shadow-md`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-900 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {module.description}
                    </p>

                    {/* Learn more link */}
                    <div className="flex items-center gap-1 text-sky-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-100/30 to-transparent rounded-bl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              Access All Modules Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
