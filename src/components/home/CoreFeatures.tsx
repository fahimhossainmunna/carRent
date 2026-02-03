"use client";

import { motion } from "framer-motion";
import { Code2, Users, MapPin, Award, Car } from "lucide-react";

const StatsGrid = () => {
  const stats = [
    {
      icon: <Code2 size={26} />,
      value: "240",
      title: "Yai Premium Cars",
      desc: "Great [+100%] Review last sling",
      additionalInfo: "Stove 100"
    },
    {
      icon: <Users size={26} />,
      value: "10",
      title: "Happy Clients k+",
      desc: "Great [+100%] Review last sling",
      additionalInfo: "Stove 200"
    },
    {
      icon: <MapPin size={26} />,
      value: "20",
      title: "Cities Covered +",
      desc: "Great [+100%] Review last sling",
      additionalInfo: "Stove 200"
    },
    {
      icon: <Award size={26} />,
      value: "40",
      title: "Year Excellenced +",
      desc: "Great [+100%] Review last sling",
      additionalInfo: "Stove 200"
    },
  ];

  const carStats = [
    {
      icon: <Car size={26} />,
      title: "6G-6xl Four-Seat White",
      year: "year 1",
      details: "To Its: Y 4 6131 0 F2755: LPORC3RRS 266 transition oil develop...State 233"
    },
    {
      icon: <Car size={26} />,
      title: "4G-6xl Four-Seat White",
      year: "year 0",
      details: "To Its: ] 4 Y 55 ) G 1 3198: LPORC3RRS 266 transition oil develop...State 233"
    },
    {
      icon: <Car size={26} />,
      title: "6G-6xl Tour-Stat2 White",
      year: "year 1",
      details: "Gray: 6 9 53 30 ) G 1 3198: LPORC3RRS 266 transition oil develop...State 233"
    },
    {
      icon: <Car size={26} />,
      title: "4G-4xl Tour-State White",
      year: "year 1",
      details: "To Its: [ 4 6 98 ) G 1 3 1299El: LPORC3RRS 266 transition oil develop...State 233"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
       <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Impact in Numbers
          </h2>
          <p className="text-slate-500 mt-2 max-w-xl">
            A snapshot of our growth, experience, and premium fleet.
          </p>
        </div>

        {/* First Row - Main Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                         rounded-3xl p-7 text-white shadow-xl hover:shadow-2xl 
                         transition-all duration-300 overflow-hidden border border-slate-700/50"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className="flex items-center justify-center h-14 w-14 
                                rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 
                                text-slate-900 mb-6 shadow-lg shadow-amber-500/30
                                group-hover:shadow-amber-500/50 group-hover:scale-110
                                transition-all duration-300">
                  {item.icon}
                </div>

                {/* Value with gradient text */}
                <h3 className="text-6xl font-black mb-2 bg-gradient-to-br from-white to-slate-300 
                               bg-clip-text text-transparent">
                  {item.value}
                </h3>

                {/* Title */}
                <p className="text-lg font-bold text-white mb-4 tracking-wide">
                  {item.title}
                </p>

                {/* Description */}
                <div className="space-y-1 pt-4 border-t border-slate-700/50">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.additionalInfo}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                              from-amber-500 via-orange-500 to-amber-500 
                              transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Second Row - Car Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carStats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 4) * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                         rounded-3xl p-7 text-white shadow-xl hover:shadow-2xl 
                         transition-all duration-300 overflow-hidden border border-slate-700/50"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center h-14 w-14 
                                rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 
                                text-slate-900 mb-6 shadow-lg shadow-amber-500/30
                                group-hover:shadow-amber-500/50 group-hover:scale-110
                                transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Year Label with badge style */}
                <div className="inline-flex items-center px-3 py-1 rounded-full 
                                bg-amber-500/20 border border-amber-500/30 mb-4">
                  <span className="text-sm text-amber-400 font-semibold">
                    ~{item.year}
                  </span>
                </div>

                {/* Details */}
                <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-slate-700/50">
                  {item.details}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                              from-amber-500 via-orange-500 to-amber-500 
                              transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;