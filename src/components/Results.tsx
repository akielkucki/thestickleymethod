'use client';

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { TrendingUp, Eye, Smile, Droplet, Dumbbell, ArrowRight, Star, GripVertical } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// --- Data ---
const categories = [
  { id: 'all', label: 'All Results', icon: TrendingUp },
  { id: 'jawline', label: 'Jawline', icon: Smile },
  { id: 'physique', label: 'Physique', icon: Dumbbell },
];

const results = [
  {
    id: 1,
    category: 'physique',
    name: 'Marcus T.',
    timeframe: '6 months',
    description: 'Dropped 15% body fat while adding lean mass. The nutrition protocol is a cheat code.',
    rating: 5,
    // Using placeholder images from Unsplash for realism
    before: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'jawline',
    name: 'Ryan K.',
    timeframe: '12 weeks',
    description: 'My face shape completely changed. Friends didn\'t recognize me.',
    rating: 5,
    before: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'physique',
    name: 'David S.',
    timeframe: '8 months',
    description: 'From skinny-fat to shredded. The accountability group kept me in the game.',
    rating: 5,
    before: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=500&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=500&auto=format&fit=crop'
  }
];

// --- Comparison Card Component ---
function ComparisonCard({ result }: { result: any }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
      <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
      >
        {/* Slider Area */}
        <div
            ref={containerRef}
            className="relative h-80 w-full cursor-ew-resize overflow-hidden"
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
              if (!containerRef.current) return;
              const rect = containerRef.current.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
              setSliderPosition((x / rect.width) * 100);
            }}
        >
          {/* AFTER Image (Background) */}
          <img src={result.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
            AFTER
          </div>

          {/* BEFORE Image (Foreground - Clipped) */}
          <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img src={result.before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
              BEFORE
            </div>
          </div>

          {/* Slider Handle Line */}
          <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-400">
              <GripVertical className="w-4 h-4" />
            </div>
          </div>

          {/* Instructions (Fade out on interaction) */}
          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur text-white text-xs px-3 py-1 rounded-full transition-opacity duration-300 pointer-events-none ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
            Slide to compare
          </div>
        </div>

        {/* Info Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">{result.name}</h3>
              <p className="text-sm text-slate-500 font-medium">Timeframe: <span className="text-slate-900">{result.timeframe}</span></p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            "{result.description}"
          </p>

          <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="h-2 w-2 bg-blue-600 rounded-full" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Member</span>
          </div>
        </div>
      </motion.div>
  );
}

export default function Results() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResults = results.filter(
      (result) => activeCategory === 'all' || result.category === activeCategory
  );

  return (
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Proven Outcomes
            </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                Real Results. No Fluff.
              </h2>
              <p className="text-lg text-slate-500">
                Drag the slider to see the transformation. These are verified results from men who followed the protocol.
              </p>
            </motion.div>

            {/* Segmented Filter Control */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm inline-flex flex-wrap gap-1"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 z-10 ${
                            isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900'
                        }`}
                    >
                      {isActive && (
                          <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-slate-900 rounded-lg -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                      )}
                      {category.label}
                    </button>
                );
              })}
            </motion.div>
          </div>

          {/* Masonry Grid */}
          <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredResults.map((result) => (
                  <ComparisonCard key={result.id} result={result} />
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/30">
              Join 5,000+ Men Getting Results
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
  );
}