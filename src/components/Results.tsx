'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Eye, Smile, Droplet, Dumbbell, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'Overall', icon: TrendingUp },
  { id: 'jawline', label: 'Jawline', icon: Smile },
  { id: 'eyes', label: 'Eyes', icon: Eye },
  { id: 'skin', label: 'Skin', icon: Droplet },
  { id: 'physique', label: 'Physique', icon: Dumbbell }
];

const results = [
  {
    id: 1,
    category: 'all',
    name: 'Marcus T.',
    timeframe: '6 months',
    description: 'Complete transformation'
  },
  {
    id: 2,
    category: 'jawline',
    name: 'Ryan K.',
    timeframe: '4 months',
    description: 'Jawline definition achieved'
  },
  {
    id: 3,
    category: 'eyes',
    name: 'David S.',
    timeframe: '3 months',
    description: 'Eye area enhancement'
  },
  {
    id: 4,
    category: 'skin',
    name: 'Alex M.',
    timeframe: '2 months',
    description: 'Clear skin journey'
  },
  {
    id: 5,
    category: 'physique',
    name: 'James L.',
    timeframe: '8 months',
    description: 'Full body transformation'
  },
  {
    id: 6,
    category: 'all',
    name: 'Chris B.',
    timeframe: '5 months',
    description: 'Life-changing results'
  }
];

export default function Results() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResults = results.filter(
    (result) => activeCategory === 'all' || result.category === activeCategory
  );

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/15 to-sky-50/20">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-35">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full mb-6 shadow-sm"
          >
            <span className="text-sm font-semibold text-slate-700">Proven Transformations</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent">
            Real Results From Real Men
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See the incredible transformations achieved by TSM members
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-sky-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 shadow-md">
                {/* Image placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  {/* Before/After split overlay */}
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                      <span className="text-slate-700 font-bold text-xl">BEFORE</span>
                    </div>
                    <div className="w-px bg-sky-500" />
                    <div className="flex-1 bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center">
                      <span className="text-sky-900 font-bold text-xl">AFTER</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                        {result.name}
                      </h3>
                      <p className="text-slate-600 text-sm">{result.timeframe}</p>
                    </div>
                    <div className="px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{result.description}</p>

                  <button className="flex items-center gap-1 text-sky-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>View full story</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Top badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-sm">
                  VERIFIED
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6 text-lg">Ready to write your transformation story?</p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              Start Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
