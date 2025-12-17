'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Snowflake, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Image from "next/image";

interface Snowflake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function Hero() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const snow = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 3 + Math.random() * 6
    }));
    setSnowflakes(snow);
  }, []);

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-100/40 to-blue-50">
        {/* Animated snowflakes */}
        {snowflakes.map((flake) => (
            <Snowflake
                key={flake.id}
                className="absolute text-cyan-300/30"
                style={{
                  left: `${flake.left}%`,
                  top: '-10vh',
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  animation: `snowfall ${flake.duration}s linear infinite`,
                  animationDelay: `${flake.delay}s`
                }}
            />
        ))}

        {/* Decorative mountain/ice formations - left side */}
        <div className="absolute left-0 bottom-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M0,200 L50,100 L100,150 L150,80 L200,200 Z" fill="currentColor" className="text-slate-400" />
          </svg>
        </div>

        {/* Decorative mountain/ice formations - right side */}
        <div className="absolute right-0 bottom-0 w-96 h-96 opacity-10 scale-x-[-1]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M0,200 L50,120 L100,160 L150,90 L200,200 Z" fill="currentColor" className="text-slate-400" />
          </svg>
        </div>

        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
              {/* Christmas Sale Badge */}
              <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="inline-block"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-green-500 rounded-lg blur opacity-30 animate-pulse" />
                  <div className="relative px-6 py-2 bg-white border-2 border-red-300 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                    <span className="text-red-600 font-black text-xs tracking-widest uppercase">
                      NEW
                    </span>
                      <span className="text-slate-700 font-bold text-sm">CHRISTMAS SALE</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
                  <span className="block text-slate-900">TRANSFORM</span>
                  <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  YOUR LOOKS
                </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-slate-600 text-lg leading-relaxed max-w-xl"
              >
                No more guessing, wasting time, or starting over.{' '}
                <span className="font-semibold text-slate-800">Get instant access</span> to the proven system helping guys sharpen their face, fix their skin, and build a body that turns heads.
              </motion.p>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-slate-700 font-semibold"
              >
                Spots are limited.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button className="group relative px-8 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative flex items-center gap-2 z-10">
                  JOIN THE STICKLEY METHOD
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </motion.div>

              {/* TSM 2.0 Badge */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="inline-block"
              >
                <div className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold text-xl tracking-wider">
                  TSM 2.0 INBOUND
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Video */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
            >
              <div className="relative group">
                {/* Decorative elements around video */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-cyan-500 rounded-tr-3xl opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-blue-500 rounded-bl-3xl opacity-50" />

                {/* Christmas hat decoration */}
                <Image width={40} height={40} src={"/hat.avif"} alt={"hat"} className={"absolute -top-4 -left-4 w-16 h-16 z-10"}/>

                {/* Video container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 pointer-events-none z-10" />
                  <iframe
                      width="100%"
                      height="500"
                      src="https://www.youtube.com/embed/8g08QC1gHhk"
                      title="How The Stickley Method Is Actually Transforming Lives"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full aspect-video"
                  />
                </div>

                {/* Video label */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-200"
                >
                <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                  The Stickley Method
                </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Banner */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-20 max-w-5xl mx-auto"
          >
            {/* Drip effect top */}
            <div className="relative h-12 mb-[-2px]">
              <svg viewBox="0 0 1200 60" className="w-full h-full" preserveAspectRatio="none">
                <path
                    d="M0,0 L0,20 Q100,40 200,20 T400,20 T600,20 T800,20 T1000,20 T1200,20 L1200,0 Z"
                    fill="currentColor"
                    className="text-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ fill: 'url(#gradient)' }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                {/* Stat 1 */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-black">
                    <CountUp end={7737} separator="," />+
                  </div>
                  <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-90">
                    Members Have Joined
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-black">
                    <CountUp end={54} />+
                  </div>
                  <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-90">
                    Modules
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-black">
                    $<CountUp end={33268} separator="," />+
                  </div>
                  <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-90">
                    Worth of Prizes
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-center mt-8 space-y-4"
            >
              <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-600 text-white font-bold text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative flex items-center gap-3 z-10">
                JOIN THE STICKLEY METHOD
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="flex items-center justify-center gap-2 text-cyan-600">
                <Check className="w-5 h-5" />
                <span className="text-sm font-semibold">Access 70+ looksmaxxing modules</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

        <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
      `}</style>
      </section>
  );
}