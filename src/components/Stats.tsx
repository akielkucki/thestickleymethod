'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Active Members',
    description: 'Growing brotherhood'
  },
  {
    icon: BookOpen,
    value: 10,
    suffix: '',
    label: 'Core Modules',
    description: 'Complete training'
  },
  {
    icon: Trophy,
    value: 10000,
    suffix: '+',
    label: 'Prize Pool',
    description: 'Cash rewards',
    prefix: '$'
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    description: 'Proven results'
  }
];

function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50/20 via-sky-50/30 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Join the Movement
          </h2>
          <p className="text-slate-600 text-lg">
            Thousands of men transforming their lives every day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 text-center overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/50 group-hover:to-blue-50/50 transition-all duration-300" />

                  {/* Icon */}
                  <div className="relative mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full border-2 border-sky-200">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>

                  {/* Counter */}
                  <div className="relative text-5xl font-bold mb-2 bg-gradient-to-br from-slate-900 to-sky-900 bg-clip-text text-transparent">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  {/* Label */}
                  <div className="relative text-xl font-semibold text-slate-800 mb-1">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="relative text-sm text-slate-500">
                    {stat.description}
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent group-hover:via-sky-500 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
