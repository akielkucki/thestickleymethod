'use client';

import {motion} from 'framer-motion';
import {ArrowRight, Snowflake, Star} from 'lucide-react';
import {useEffect, useState} from 'react';
import Image from "next/image";

interface SnowflakeType {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function Hero() {
  const [snowflakes, setSnowflakes] = useState<SnowflakeType[]>([]);

  useEffect(() => {
    const snow = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 18 + Math.random() * 12,
      size: 4 + Math.random() * 8
    }));
    setSnowflakes(snow);
  }, []);

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-cyan-50/30 to-white">
        {/* Subtle animated snowflakes */}
        {snowflakes.map((flake) => (
            <Snowflake
                key={flake.id}
                className="absolute text-cyan-200/40 pointer-events-none"
                style={{
                  left: `${flake.left}%`,
                  top: '-5vh',
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  animation: `snowfall ${flake.duration}s linear infinite`,
                  animationDelay: `${flake.delay}s`
                }}
            />
        ))}

        {/* Minimal background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-cyan-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
            >
              {/* Sale Badge - Clean pill style */}
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
              >
              <span className="inline-flex flex-col items-start gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-cyan-200/50 shadow-sm">
                <div className="flex items-center gap-3">
  {/* Stars Container */}
                  <div className="flex gap-0.5">
    {Array.of(1, 2, 3, 4, 5).map((_, i) => (
        <motion.span
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }} // Sped up delay slightly
        >
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </motion.span>
    ))}
  </div>

                  {/* Text - distinct from stars */}
                  <span className="text-sm font-medium text-slate-600">
    Trusted by <span className="text-slate-900 font-bold">100+ members</span>
  </span>
</div>
              </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-slate-900">TRANSFORM</span>
                  <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  YOUR LOOKS
                </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-slate-600 text-lg leading-relaxed max-w-lg"
              >
                No more guessing, wasting time, or starting over.{' '}
                <span className="font-semibold text-slate-800">Get instant access</span> to the proven system helping guys sharpen their face, fix their skin, and build a body that turns heads.
              </motion.p>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-slate-500 font-medium text-sm tracking-wide"
              >
                Spots are limited.
              </motion.p>

              {/* CTA Buttons - Clean, matching style */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                {/* Primary CTA */}
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5">
                <span className="flex items-center justify-center gap-2">
                  JOIN THE STICKLEY METHOD
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                </button>

                {/* Secondary CTA */}
                <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300">
                  TSM 2.0 INBOUND
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Video */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
            >
              <div className="relative">
                {/* Subtle corner accents */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-2xl" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-blue-400/40 rounded-bl-2xl" />

                {/* Christmas hat */}
                <Image
                    width={48}
                    height={48}
                    src="/hat.avif"
                    alt="Christmas hat"
                    className="absolute -top-6 -left-2 w-14 h-14 z-20 drop-shadow-lg"
                />

                {/* Video container - Clean, no overlay */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-white/80 bg-white">
                  <iframe
                      width="100%"
                      height="400"
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
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-white rounded-full shadow-lg border border-slate-100"
                >
                <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                  The Stickley Method
                </span>
                </motion.div>
              </div>
            </motion.div>
          </div>


        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-5vh) rotate(0deg);
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
          }
        }
      `}</style>
      </section>
  );
}