'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael R.',
    role: 'Member for 8 months',
    rating: 5,
    text: 'TSM changed my life. The accountability system kept me on track, and the brotherhood genuinely cares about your success. Lost 30lbs, cleared my skin, and gained confidence I never knew I had.',
    result: 'Lost 30lbs, Clear Skin'
  },
  {
    name: 'Brandon K.',
    role: 'Member for 6 months',
    rating: 5,
    text: 'Best investment I\'ve ever made. The modules are comprehensive, the community is supportive, and the results speak for themselves. Finally found a program that actually delivers.',
    result: 'Complete Transformation'
  },
  {
    name: 'Tyler S.',
    role: 'Member for 1 year',
    rating: 5,
    text: 'The Stickley Method isn\'t just about looks - it\'s a complete lifestyle upgrade. The mental health and charisma modules changed how I interact with the world. Worth every penny.',
    result: 'Improved Confidence'
  },
  {
    name: 'Jordan M.',
    role: 'Member for 4 months',
    rating: 5,
    text: 'I was skeptical at first, but the results are undeniable. The nutrition and fitness modules alone are worth the price. Add in the amazing community support and it\'s a no-brainer.',
    result: '15lbs Muscle Gain'
  },
  {
    name: 'Cameron L.',
    role: 'Member for 10 months',
    rating: 5,
    text: 'TSM has the most comprehensive looksmaxxing program I\'ve found. Every module is packed with actionable advice. The accountability partners pushed me harder than I ever pushed myself.',
    result: 'Jawline Definition'
  },
  {
    name: 'Derek P.',
    role: 'Member for 5 months',
    rating: 5,
    text: 'The brotherhood is real. These guys genuinely want to see you win. Between the challenges, voice calls, and daily support, I never felt alone in my journey. TSM delivers results.',
    result: 'Overall Glow Up'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50/20 via-sky-50/25 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-35">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full mb-6 shadow-sm"
          >
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-semibold text-slate-700">5-Star Reviews</span>
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent">
            What Our Members Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the brotherhood
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div className="relative h-full bg-white border-2 border-slate-200 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-sky-300 hover:shadow-xl shadow-md">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/30 group-hover:to-blue-50/30 transition-all duration-300" />

                <div className="relative">
                  {/* Quote icon */}
                  <div className="absolute -top-2 -left-2 opacity-10">
                    <Quote className="w-16 h-16 text-slate-400 fill-slate-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Result badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs font-semibold text-green-700">{testimonial.result}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-sky-100/30 to-transparent rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-slate-50 border-2 border-slate-200 rounded-full shadow-md">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div className="text-xs text-slate-600">Average Rating</div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-300" />
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-900">2,500+</div>
              <div className="text-xs text-slate-600">5-Star Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
