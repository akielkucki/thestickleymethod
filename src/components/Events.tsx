'use client';

import { motion } from 'framer-motion';
import { Calendar, Trophy, MessageCircle, Video, Mic, Gift, Clock } from 'lucide-react';

const events = [
  {
    date: 'Dec 18',
    time: '8:00 PM EST',
    title: 'Jawline Challenge Finale',
    type: 'Competition',
    prize: '$500',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    date: 'Dec 20',
    time: '7:00 PM EST',
    title: 'Nutrition Q&A Session',
    type: 'Live Session',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-600'
  },
  {
    date: 'Dec 22',
    time: '6:00 PM EST',
    title: 'Voice Call: Style & Fashion',
    type: 'Voice Chat',
    icon: Mic,
    color: 'from-purple-500 to-violet-600'
  },
  {
    date: 'Dec 24',
    time: 'All Day',
    title: 'Christmas Transformation Contest',
    type: 'Competition',
    prize: '$1000',
    icon: Gift,
    color: 'from-red-500 to-rose-600'
  },
  {
    date: 'Dec 26',
    time: '8:00 PM EST',
    title: 'Weekly Progress Review',
    type: 'Video Call',
    icon: Video,
    color: 'from-sky-500 to-blue-600'
  },
  {
    date: 'Dec 28',
    time: '7:00 PM EST',
    title: 'Beard Growth Workshop',
    type: 'Workshop',
    icon: MessageCircle,
    color: 'from-amber-500 to-orange-600'
  },
  {
    date: 'Dec 30',
    time: '9:00 PM EST',
    title: 'Year-End Glow Up Challenge',
    type: 'Competition',
    prize: '$750',
    icon: Trophy,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    date: 'Dec 31',
    time: '11:00 PM EST',
    title: 'New Year Kickoff Event',
    type: 'Special Event',
    icon: Gift,
    color: 'from-indigo-500 to-purple-600'
  }
];

export default function Events() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-sky-50/25 via-white to-blue-50/20">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-35">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-slate-700">December 2024</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join live sessions, compete in challenges, and win cash prizes throughout the month
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="group relative"
                >
                  <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-sky-300 hover:shadow-xl shadow-md">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/30 group-hover:to-blue-50/30 transition-all duration-300" />

                    <div className="relative flex gap-4">
                      {/* Date */}
                      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-blue-100 border-2 border-sky-200 rounded-xl px-4 py-3 min-w-[80px]">
                        <span className="text-2xl font-bold text-slate-900">{event.date.split(' ')[1]}</span>
                        <span className="text-xs text-slate-600 uppercase font-medium">{event.date.split(' ')[0]}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Type badge & Icon */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-sky-600 uppercase tracking-wide">
                            {event.type}
                          </span>
                          <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${event.color} rounded-lg shadow-sm`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-900 transition-colors">
                          {event.title}
                        </h3>

                        {/* Time & Prize */}
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-slate-600">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          {event.prize && (
                            <div className="flex items-center gap-1 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                              <Trophy className="w-3 h-3 text-yellow-600" />
                              <span className="font-bold text-yellow-700">{event.prize}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-100/30 to-transparent rounded-bl-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-md">
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
                <span className="text-2xl font-bold text-slate-900">$10,000+</span>
              </div>
              <p className="text-slate-600">
                Total prize pool for December competitions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
