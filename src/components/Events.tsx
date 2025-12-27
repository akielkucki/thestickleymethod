'use client';

import { motion } from 'framer-motion';
import { Calendar, Trophy, MessageCircle, Video, Mic, Gift, Clock, ArrowRight, Sparkles } from 'lucide-react';

const events = [
  {
    date: 'Dec 18',
    weekday: 'Mon',
    time: '8:00 PM EST',
    title: 'Jawline Challenge Finale',
    type: 'Competition',
    prize: '$500',
    icon: Trophy,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    status: 'completed'
  },
  {
    date: 'Dec 20',
    weekday: 'Wed',
    time: '7:00 PM EST',
    title: 'Nutrition Q&A Session',
    type: 'Live Session',
    icon: MessageCircle,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    status: 'upcoming' // This is the "Next Up" event
  },
  {
    date: 'Dec 22',
    weekday: 'Fri',
    time: '6:00 PM EST',
    title: 'Style & Fashion Roundtable',
    type: 'Voice Chat',
    icon: Mic,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    status: 'future'
  },
  {
    date: 'Dec 24',
    weekday: 'Sun',
    time: 'All Day',
    title: 'Christmas Transformation',
    type: 'Major Event',
    prize: '$1000',
    icon: Gift,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    status: 'future'
  },
  {
    date: 'Dec 26',
    weekday: 'Tue',
    time: '8:00 PM EST',
    title: 'Weekly Progress Review',
    type: 'Video Call',
    icon: Video,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    status: 'future'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Events() {
  return (
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Community Calendar
            </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
                Upcoming Events
              </h2>
              <p className="text-slate-500 text-lg">
                Don't miss out. Live workshops, Q&As, and competitions happening this week.
              </p>
            </motion.div>

            {/* Prize Pool Widget */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-slate-900 text-white p-4 rounded-2xl shadow-xl shadow-slate-900/10"
            >
              <div className="p-3 bg-white/10 rounded-xl">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Monthly Prize Pool
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  $10,000
                </div>
              </div>
            </motion.div>
          </div>

          {/* List Layout */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
          >
            {events.map((event, index) => {
              const Icon = event.icon;
              const isNext = event.status === 'upcoming';

              return (
                  <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group relative"
                  >
                    {/* Connector Line (Design flourish) */}
                    {index !== events.length - 1 && (
                        <div className="absolute left-[3.5rem] top-16 bottom-[-2rem] w-px bg-slate-100 group-hover:bg-slate-200 transition-colors z-0 md:block hidden" />
                    )}

                    <div
                        className={`relative flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl border transition-all duration-300 ${
                            isNext
                                ? 'bg-white border-blue-200 shadow-lg shadow-blue-900/5 ring-1 ring-blue-100'
                                : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-md'
                        }`}
                    >
                      {/* Status Indicator for "Next Up" */}
                      {isNext && (
                          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                            LIVE SOON
                          </div>
                      )}

                      {/* Date Block */}
                      <div className="flex md:flex-col items-center md:justify-center gap-2 md:gap-0 min-w-[80px] z-10">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">
                      {event.weekday}
                    </span>
                        <span className={`text-2xl md:text-3xl font-bold ${isNext ? 'text-blue-600' : 'text-slate-900'}`}>
                      {event.date.split(' ')[1]}
                    </span>
                      </div>

                      {/* Icon */}
                      <div className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full ${event.bg} ${event.color} z-10 shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {/* Mobile Icon */}
                          <Icon className={`w-4 h-4 md:hidden ${event.color}`} />
                          <span className={`text-xs font-bold uppercase tracking-wider ${isNext ? 'text-blue-600' : 'text-slate-500'}`}>
                        {event.type}
                      </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>

                          {event.prize && (
                              <div className="flex items-center gap-1.5 text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-md">
                                <Trophy className="w-3.5 h-3.5" />
                                Prize: {event.prize}
                              </div>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-4 md:mt-0">
                        <button className={`flex items-center gap-2 text-sm font-bold transition-all ${
                            isNext
                                ? 'bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20'
                                : 'text-slate-400 group-hover:text-slate-900'
                        }`}>
                          {isNext ? 'Join Now' : 'Remind Me'}
                          {isNext ? <ArrowRight className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
                        </button>
                      </div>

                    </div>
                  </motion.div>
              );
            })}
          </motion.div>

          {/* Footer Link */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
          >
            <button className="text-slate-500 hover:text-slate-900 font-medium text-sm flex items-center justify-center gap-2 mx-auto transition-colors">
              View full calendar
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
  );
}