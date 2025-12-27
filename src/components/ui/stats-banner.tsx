"use client";
import { motion } from 'motion/react';
import React from 'react';
import {NumberTicker} from "@/components/ui/number-ticker";
import {ArrowRight} from "lucide-react";

const StatsBanner = () => {
    return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-24 max-w-4xl mx-auto"
    >
        {/* Stats container with frosted glass effect */}
        <div className="relative rounded-2xl overflow-hidden">
            {/* Background image with proper overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/ice.jpg)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/60 via-blue-600/60 to-cyan-600/60" />

            {/* Subtle frost pattern overlay */}
            <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: 'url(/frostpattern.jpg)',
                    backgroundSize: '300px'
                }}
            />

            {/* Stats content */}
            <div className="relative px-8 py-10 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center text-white">
                    {/* Stat 1 */}
                    <div className="space-y-1">
                        <div className="text-4xl md:text-5xl font-black tracking-tight">
                            <NumberTicker value={7737} className="text-white" />
                            <span className="text-cyan-200">+</span>
                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-cyan-100">
                            Members Have Joined
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="space-y-1">
                        <div className="text-4xl md:text-5xl font-black tracking-tight">
                            <NumberTicker value={54} className="text-white" />
                            <span className="text-cyan-200">+</span>
                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-cyan-100">
                            Modules
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="space-y-1">
                        <div className="text-4xl md:text-5xl font-black tracking-tight">
                            <span>$</span>
                            <NumberTicker value={33268} className="text-white" />
                            <span className="text-cyan-200">+</span>
                        </div>
                        <div className="text-sm font-medium uppercase tracking-wider text-cyan-100">
                            Worth of Prizes
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom CTA - Matching primary button style, larger */}
        <div className="flex justify-center mt-10">
            <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5">
              <span className="flex items-center justify-center gap-2">
                Join The Stickley Method
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
        </div>
    </motion.div>
    );
};

export default StatsBanner;