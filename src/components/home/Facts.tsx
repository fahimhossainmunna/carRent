"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { Car, Users, MapPin, Award, Sparkles } from "lucide-react";

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { stiffness: 50, damping: 25 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Facts = () => {
  const stats = [
    { 
      icon: <Car size={32} />, 
      val: 240, 
      label: "Premium Cars", 
      suffix: "+",
      gradient: "from-amber-400 to-orange-500"
    },
    { 
      icon: <Users size={32} />, 
      val: 10, 
      label: "Happy Clients", 
      suffix: "k+",
      gradient: "from-blue-400 to-cyan-500"
    },
    { 
      icon: <MapPin size={32} />, 
      val: 20, 
      label: "Cities Covered", 
      suffix: "+",
      gradient: "from-purple-400 to-pink-500"
    },
    { 
      icon: <Award size={32} />, 
      val: 12, 
      label: "Year Excellence", 
      suffix: "+",
      gradient: "from-emerald-400 to-teal-500"
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
              <Sparkles size={16} className="text-amber-600" />
              <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">
                Our Achievements
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Our Journey in{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              The numbers speak for our commitment to quality and customer satisfaction across every milestone.
            </p>
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-2 w-40 bg-gradient-to-r from-amber-500 to-orange-500 hidden lg:block mb-6 rounded-full shadow-lg shadow-amber-500/50"
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                              p-10 rounded-[2.5rem] relative overflow-hidden 
                              shadow-2xl hover:shadow-amber-500/20 
                              transition-all duration-700 border border-slate-700/50
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700">
                
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl`} />
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-xl opacity-50`} />
                </div>

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon Container with Gradient */}
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} 
                                flex items-center justify-center mb-8 
                                shadow-lg group-hover:shadow-2xl group-hover:shadow-amber-500/50
                                transition-all duration-500`}
                  >
                    <div className="text-white scale-110">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Counter Section */}
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-1">
                      <h4 className="text-6xl font-black bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent tracking-tighter">
                        <Counter value={item.val} />
                      </h4>
                      <span className={`text-4xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.suffix}
                      </span>
                    </div>
                    
                    <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-transparent rounded-full 
                                    group-hover:w-24 transition-all duration-500" />
                    
                    <p className="text-slate-400 group-hover:text-amber-100 
                                  font-bold uppercase text-xs tracking-[0.2em] 
                                  transition-colors duration-500 pt-2">
                      {item.label}
                    </p>
                  </div>
                </div>

                {/* Large Background Icon */}
                <div className="absolute -right-8 -bottom-8 text-white/[0.03] 
                                group-hover:text-white/[0.08] transition-all duration-700 
                                group-hover:scale-110 group-hover:rotate-12">
                  <div className="scale-[5]">
                    {item.icon}
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-1000 ease-in-out
                                bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                skew-x-12" />
              </div>

              {/* Floating Particles on Hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} blur-sm`}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient} blur-sm`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20 h-1 w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"
        />
      </div>
    </section>
  );
};

export default Facts;