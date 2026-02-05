"use client";

import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  Car,
  Award,
  MapPin,
  Sparkles,
  Trophy,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Custom hook for animated counter
const useCounter = (
  end: number,
  duration: number = 2000,
  shouldStart: boolean = false,
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

// Counter component
const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) => {
  const [hasStarted, setHasStarted] = useState(false);

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const count = useCounter(numericValue, 2000, hasStarted);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
    >
      {count}
      {value.includes("+") ? "+" : ""}
      {suffix}
    </motion.div>
  );
};

const AboutPage = () => {
  const stats = [
    { label: "Elite Vehicles", value: "200+", icon: Car },
    { label: "Happy Clients", value: "15k+", icon: Users },
    { label: "Premium Awards", value: "24", icon: Award },
    { label: "Cities Covered", value: "12", icon: MapPin },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Industry Leader",
      desc: "Bangladesh's #1 Premium Car Rental Service",
    },
    {
      icon: Globe,
      title: "Global Standards",
      desc: "International quality with local expertise",
    },
    {
      icon: Sparkles,
      title: "Luxury Redefined",
      desc: "Setting new benchmarks in premium mobility",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 1. Hero Section - Premium Gradient Design */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-500/30"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-[10px] font-black text-amber-400 uppercase tracking-[3px]">
                Premium Car Rental Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Driving Excellence <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Since 2026
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Bangladesh's most prestigious luxury car rental service,
              delivering unparalleled experiences with world-class vehicles and
              exceptional service.
            </motion.p>

            {/* Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 pt-8"
            >
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10"
                >
                  <item.icon className="h-5 w-5 text-amber-400" />
                  <span className="text-white font-bold text-sm">
                    {item.title}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </section>

      {/* 2. Vision Section - Enhanced with Luxury Elements */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-2xl shadow-slate-900/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10"></div>
                <Image
                  src="/images/cars/audi2.png"
                  alt="Premium Car"
                  fill
                  className="object-cover hover:scale-105 transition duration-1000"
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-12 -right-12 bg-gradient-to-br from-amber-500 to-amber-600 p-12 rounded-[50px] hidden md:block shadow-2xl shadow-amber-500/30"
              >
                <p className="text-6xl font-black text-white tracking-tighter">
                  10+
                </p>
                <p className="text-xs font-black text-white/90 uppercase tracking-[3px] mt-2">
                  Years Excellence
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900/10 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-10"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-[2px]">
                    Our Vision
                  </span>
                </div>

                <h3 className="text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                  Redefining the <br />
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    Luxury Experience
                  </span>
                </h3>

                <p className="text-slate-600 text-xl leading-relaxed font-medium">
                  Munna, amader vision holo Bangladesh-e gari rent korar
                  process-ke ekdom seamless ebong premium kora. Amra shudhu gari
                  rent dei na, amra ekta high-end lifestyle provide kori jeta
                  match kore international standards.
                </p>
              </div>

              {/* Premium Features List */}
              <div className="space-y-5">
                {[
                  "Widest Range of Premium & Supercars",
                  "24/7 VIP Concierge Support",
                  "Fully Insured & Maintained Fleet",
                  "Flexible Booking & Express Delivery",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-white transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-2xl group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300 shadow-lg shadow-amber-100 group-hover:shadow-amber-200">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-800 font-black uppercase tracking-tight text-base group-hover:text-amber-600 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-500 shadow-xl shadow-slate-900/20 hover:shadow-amber-500/30"
              >
                Explore Our Fleet
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Stats Grid - Premium Minimalist Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <p className="text-[11px] font-black text-amber-600 uppercase tracking-[4px]">
              By The Numbers
            </p>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tight">
              Our Success Story
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl text-center space-y-5 transition-all duration-500 group border border-slate-100 hover:border-amber-100 hover:shadow-xl hover:shadow-amber-100/50"
              >
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30 group-hover:shadow-xl group-hover:shadow-amber-500/40 transition-all duration-500 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-5xl font-black text-slate-900 tracking-tight mb-2">
                    <AnimatedCounter value={stat.value} />
                  </h4>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[2px]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Section - Matching Reference Design */}
      <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 mb-20"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-amber-500/20">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[3px]">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Why <span className="text-amber-500">CarRent</span> For
              <br />
              Stands Apart
            </h3>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Stands Apart We don't just rent cars—we deliver an elite
              experience that sets the standard for luxury mobility in <span className="text-amber-500">Bnagladesh.</span>
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Safe & Secure",
                desc: "Every rental is protected by premium insurance for your complete peace of mind.",
              },
              {
                icon: Zap,
                title: "Fast Booking",
                desc: "Rent your favorite car in less than 2 minutes with our instant booking process.",
              },
              {
                icon: Award,
                title: "Best Price",
                desc: "We guarantee the most competitive rates for both luxury and budget cars.",
              },
              //Why CARRENT
              //  in Bangladesh.
              {
                icon: Users,
                title: "24/7 Support",
                desc: "Our dedicated team is always here to assist you anytime, anywhere.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, borderColor: "rgb(245 158 11)" }}
                className="relative p-8 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden group transition-all duration-500 text-left hover:bg-slate-800/60"
              >
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  {/* Icon */}
                  <div className="bg-slate-700/50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-slate-700 transition-all duration-300">
                    <card.icon className="h-6 w-6 text-amber-500" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white">{card.title}</h4>

                  {/* Description */}
                  <p className="text-slate-400 text-sm font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Background Number */}
                <div className="absolute bottom-4 right-4 text-8xl font-black text-white/[0.02] leading-none select-none">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section - Premium Finale */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-amber-50 to-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <h3 className="text-5xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter leading-tight">
              Ready to Experience <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Luxury on Wheels?
              </span>
            </h3>

            <p className="text-slate-600 text-xl leading-relaxed">
              Join thousands of satisfied clients who trust CARRENT for their
              premium mobility needs.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-12 py-6 rounded-full font-black uppercase text-base tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40"
            >
              Book Your Car Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
