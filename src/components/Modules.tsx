'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Apple, Dumbbell, Eye, Smile, Scissors, Zap, Brain, Target, MessageCircle, Shirt,
  ArrowUpRight, X, PlayCircle, Lock, CheckCircle2
} from 'lucide-react';
import CountUp from "react-countup";


// --- Data ---
const modules = [
  {
    id: 1,
    icon: Apple,
    title: 'Nutrition Protocol',
    description: 'Metabolic optimization for fat loss and skin clarity.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    span: 'md:col-span-2',
    lessons: 12,
    duration: 4.5
  },
  {
    id: 2,
    icon: Dumbbell,
    title: 'Aesthetics',
    description: 'Hypertrophy designed for the V-taper.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    span: 'md:col-span-1',
    lessons: 8,
    duration: 3.2
  },
  {
    id: 3,
    icon: Eye,
    title: 'Hunter Eyes',
    description: 'Soft tissue maximization techniques.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    span: 'md:col-span-1',
    lessons: 4,
    duration: 1.5
  },
  {
    id: 4,
    icon: Smile,
    title: 'Jawline',
    description: 'Masseter training & posture correction.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    span: 'md:col-span-1',
    lessons: 5,
    duration: 2
  },
  {
    id: 5,
    icon: Scissors,
    title: 'Grooming',
    description: 'Hair, skin, and beard maintenance.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    span: 'md:col-span-1',
    lessons: 6,
    duration: 2.1
  },
  {
    id: 6,
    icon: Zap,
    title: 'Hormones',
    description: 'Natural testosterone maximization.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    span: 'md:col-span-2',
    lessons: 10,
    duration: 5
  },
  {
    id: 7,
    icon: Brain,
    title: 'Mindset',
    description: 'Stoic frameworks for modern life.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    span: 'md:col-span-1',
    lessons: 7,
    duration: 3
  },
  {
    id: 8,
    icon: Target,
    title: 'Focus',
    description: 'Dopamine detox strategies.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    span: 'md:col-span-1',
    lessons: 5,
    duration: 2.5
  },
  {
    id: 9,
    icon: MessageCircle,
    title: 'Social',
    description: 'High-status communication skills.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    span: 'md:col-span-1',
    lessons: 9,
    duration: 4
  },
  {
    id: 10,
    icon: Shirt,
    title: 'Style',
    description: 'Wardrobe essentials for presence.',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    span: 'md:col-span-1',
    lessons: 6,
    duration: 2.2
  }
];

// --- Mock Chapter Data for the Side Menu ---
const mockChapters = [
  { title: "Introduction & Fundamentals", duration: "15 min", status: "unlocked" },
  { title: "The Science Behind The Method", duration: "25 min", status: "locked" },
  { title: "Daily Protocols & Routines", duration: "45 min", status: "locked" },
  { title: "Advanced Techniques", duration: "30 min", status: "locked" },
  { title: "Common Mistakes to Avoid", duration: "20 min", status: "locked" },
  { title: "Final Assessment", duration: "10 min", status: "locked" },
];

export default function Modules() {
  const [selectedModule, setSelectedModule] = useState<any>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (selectedModule) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedModule]);

  return (
      <section className="relative py-24 bg-slate-50 overflow-hidden min-h-screen">

        {/* --- Main Content Grid --- */}
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            The Curriculum
          </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
              Total Optimization System
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Click on any module to view the detailed syllabus and curriculum structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                  <motion.div
                      key={module.id}
                      layoutId={`card-${module.id}`}
                      onClick={() => setSelectedModule(module)}
                      className={`${module.span} group relative h-full cursor-pointer`}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-slate-300 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl ${module.bg} ${module.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
                      </div>
                      <div className="mt-auto">
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                          <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3" /> {module.lessons} Lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- Side Menu (Drawer) --- */}
        <AnimatePresence>
          {selectedModule && (() => {
            // 1. Prepare the text data
            const fullDescription = `${selectedModule.description} This module covers the foundational principles required to master this area of your life.`;
            const words = fullDescription.split(" ");

            // 2. Define animation timing constants
            const WORD_STAGGER = 0.02; // Speed of each word appearing
            const TEXT_START_DELAY = 0.3; // Wait for drawer to slide in
            const TEXT_DURATION = words.length * WORD_STAGGER;

            // 3. Calculate when the "Next" elements should start
            const CONTENT_START_DELAY = TEXT_START_DELAY + TEXT_DURATION + 0.2;

            return (
                <>
                  {/* Backdrop */}
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelectedModule(null)}
                      className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
                  />

                  {/* Slide-over Panel */}
                  <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-white shadow-2xl z-50 flex flex-col"
                  >
                    {/* Header */}
                    <div className="relative px-8 pt-8 pb-6 border-b border-slate-100 bg-white z-10">
                      <button
                          onClick={() => setSelectedModule(null)}
                          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-6 h-6" />
                      </button>

                      {/* Icon & Title (Animate in first) */}
                      <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                      >
                        <div className={`inline-flex p-3 rounded-xl ${selectedModule.bg} ${selectedModule.color} mb-6`}>
                          <selectedModule.icon className="w-8 h-8" />
                        </div>

                        <motion.h2 layoutId={`title-${selectedModule.id}`} className="text-3xl font-bold text-slate-900 mb-2">
                          {selectedModule.title}
                        </motion.h2>
                      </motion.div>

                      {/* Word-by-Word Description */}
                      <p className="text-slate-500 text-lg leading-relaxed flex flex-wrap">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, filter: 'blur(4px)', y: 5 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{
                                  delay: TEXT_START_DELAY + (i * WORD_STAGGER),
                                  duration: 0.3
                                }}
                                className="mr-1.5" // margin-right for spacing between words
                            >
                              {word}
                            </motion.span>
                        ))}
                      </p>

                      {/* Stats Row - Waits for text to finish */}
                      <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: CONTENT_START_DELAY, duration: 0.4 }}
                          className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-100"
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lessons</span>
                          <span className="text-lg font-bold text-slate-900">
                  <CountUp end={selectedModule.lessons} /> Videos
                </span>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Time</span>
                          <span className="text-lg font-bold text-slate-900">
                  {/* Assuming parsing logic or CountUp handles the string, otherwise keep raw value */}
                            {selectedModule.duration}
                </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Scrollable Content - Cascades in after Stats */}
                    <motion.div
                        className="flex-1 overflow-y-auto p-8 bg-slate-50/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: CONTENT_START_DELAY + 0.5, duration: 0.4 }}
                    >
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                        Syllabus
                      </h3>
                      <div className="space-y-3">
                        {mockChapters.map((chapter, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: CONTENT_START_DELAY + 0.2 + (i * 0.05) }} // Stagger internal items
                                className={`flex items-center justify-between p-4 rounded-xl border ${
                                    i === 0
                                        ? 'bg-white border-slate-200 shadow-sm'
                                        : 'bg-slate-50 border-transparent opacity-75'
                                }`}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    i === 0 ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'
                                }`}>
                                  {i + 1}
                                </div>
                                <div>
                                  <h4 className={`font-semibold ${i === 0 ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {chapter.title}
                                  </h4>
                                  <span className="text-xs text-slate-400 font-medium">Video • {chapter.duration}</span>
                                </div>
                              </div>
                              <div>
                                {i === 0 ? (
                                    <PlayCircle className="w-5 h-5 text-blue-600" />
                                ) : (
                                    <Lock className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                            </motion.div>
                        ))}
                      </div>

                      {/* Key Outcomes List */}
                      <motion.div
                          className="mt-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: CONTENT_START_DELAY + 0.6 }}
                      >
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                          Key Outcomes
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Master the fundamental techniques",
                            "Avoid common beginner mistakes",
                            "Develop a personalized routine"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-slate-600">{item}</span>
                              </li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>

                    {/* Fixed Footer - Slides up last */}
                    <motion.div
                        className="p-6 border-t border-slate-200 bg-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: CONTENT_START_DELAY + 0.5, type: "spring" }}
                    >
                      <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
                        Start Module
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </motion.div>

                  </motion.div>
                </>
            );
          })()}
        </AnimatePresence>
      </section>
  );
}