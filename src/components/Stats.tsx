'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, TrendingUp } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import CountUp from "react-countup";

// Using a slightly more refined color palette for the icons
const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Active Members',
    description: 'Growing brotherhood',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: BookOpen,
    value: 10,
    suffix: '',
    label: 'Core Modules',
    description: 'Complete training',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    icon: Trophy,
    value: 10000,
    suffix: '+',
    label: 'Prize Pool',
    description: 'Cash rewards',
    prefix: '$',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    description: 'Proven results',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  }
];

export default function Stats() {
  return (
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle Grid Background instead of blobs for a tech/pro feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Soft Vignette to fade grid at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
              Join the Movement
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We are building the most effective brotherhood on the planet.
              Here are the numbers that back up our mission.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                  <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                  >
                    <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">

                      {/* Icon Container - Soft Squircle */}
                      <div className={`mb-6 p-4 rounded-2xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>

                      {/* Counter */}
                      <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                        <CountUp
                            end={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                        />
                      </div>

                      {/* Label */}
                      <div className="text-base font-semibold text-slate-700 mb-1">
                        {stat.label}
                      </div>

                      {/* Description */}
                      <div className="text-sm text-slate-400 font-medium">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>
      </section>
  );
}