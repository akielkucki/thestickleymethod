'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import {Marquee} from "@/components/ui/marquee";


const testimonials = [
    {
        name: 'Michael R.',
        role: 'Member for 8 months',
        text: 'TSM changed my life. The accountability system kept me on track. Lost 30lbs and gained confidence I never knew I had.',
        initials: 'MR',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        name: 'Brandon K.',
        role: 'Member for 6 months',
        text: 'Best investment I\'ve ever made. Finally found a program that actually delivers results.',
        initials: 'BK',
        gradient: 'from-indigo-500 to-purple-500'
    },
    {
        name: 'Tyler S.',
        role: 'Member for 1 year',
        text: 'The mental health and charisma modules changed how I interact with the world. Worth every penny.',
        initials: 'TS',
        gradient: 'from-emerald-500 to-teal-500'
    },
    {
        name: 'Jordan M.',
        role: 'Member for 4 months',
        text: 'I was skeptical at first, but the results are undeniable. The nutrition modules alone are worth the price.',
        initials: 'JM',
        gradient: 'from-orange-500 to-amber-500'
    },
    {
        name: 'Cameron L.',
        role: 'Member for 10 months',
        text: 'Every module is packed with actionable advice. The accountability partners pushed me harder than I ever pushed myself.',
        initials: 'CL',
        gradient: 'from-pink-500 to-rose-500'
    },
    {
        name: 'Derek P.',
        role: 'Member for 5 months',
        text: 'The brotherhood is real. These guys genuinely want to see you win. I never felt alone in my journey.',
        initials: 'DP',
        gradient: 'from-sky-500 to-indigo-500'
    }
];

const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => (
    <div className="w-[350px] bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-blue-200 transition-all duration-300 mx-3 flex flex-col h-full cursor-default">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                <CheckCircle2 className="w-3 h-3" />
                VERIFIED
            </div>
        </div>

        {/* Content */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
            "{data.text}"
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                {data.initials}
            </div>
            <div>
                <div className="font-bold text-slate-900 text-sm">{data.name}</div>
                <div className="text-xs text-slate-500">{data.role}</div>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
                        <div className="flex -space-x-1">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-4 h-4 rounded-full bg-yellow-400 border border-white" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-slate-700">Loved by 2,500+ Members</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                        Don't just take our word for it.
                    </h2>
                    <p className="text-lg text-slate-500">
                        Join thousands of men who have transformed their physique, mindset, and lifestyle.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Section */}
            <div className="relative flex flex-col gap-6">
                {/* Row 1 */}
                <Marquee pauseOnHover className="[--duration:40s]">
                    {testimonials.map((item, idx) => (
                        <TestimonialCard key={`row1-${idx}`} data={item} />
                    ))}
                </Marquee>

                {/* Row 2 (Reverse) */}
                <Marquee pauseOnHover reverse className="[--duration:40s]">
                    {testimonials.map((item, idx) => (
                        <TestimonialCard key={`row2-${idx}`} data={item} />
                    ))}
                </Marquee>

                {/* Gradient Masks (Fade edges) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-50 dark:from-background" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-50 dark:from-background" />
            </div>

            {/* Bottom Trust Indicators */}
            <div className="container mx-auto px-4 mt-16">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {[{brand: 'Trustpilot', color: '#00d65d'},{brand: 'Google Reviews', color: '#FF4444'}, {brand: 'Product Hunt', color: '#F4DD12'}].map((brand) => (
                        <motion.span key={brand.brand} className={`text-xl font-bold text-slate-400 transition-all duration-200 flex items-center gap-2`} whileHover={{ color: brand.color, fill: brand.color }} whileTap={{ scale: 0.9 }}>
              <Star className={`w-5 h-5 fill-[${brand.color}]`} /> {brand.brand}
            </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}