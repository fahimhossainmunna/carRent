"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      desc: "Every rental is protected by premium insurance for your complete peace of mind.",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      icon: Zap,
      title: "Fast Booking",
      desc: "Rent your favorite car in less than 2 minutes with our instant booking process.",
      gradient: "from-amber-400 to-yellow-300",
    },
    {
      icon: HeartHandshake,
      title: "Best Price",
      desc: "We guarantee the most competitive rates for both luxury and budget cars.",
      gradient: "from-orange-600 to-orange-400",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our dedicated team is always here to assist you anytime, anywhere.",
      gradient: "from-yellow-400 to-amber-500",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #111827 0%, #1b2032 50%, #141b2d 100%)" }}>
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#f59e0b" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#f97316" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-18"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5" style={{ background: "rgba(245,158,11,0.12)", borderColor: "rgba(245,158,11,0.25)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f59e0b" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f59e0b" }}>Our Services</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Why Choose{" "}
            <span style={{ color: "#f59e0b" }}>CarRent</span>
            {" "}For Your Journey?
          </h2>
          <p className="text-base font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
            We deliver more than just a car — we deliver an experience.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ willChange: "transform" }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className="relative h-full rounded-2xl p-7 transition-all duration-300 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ border: "1px solid rgba(245,158,11,0.35)" }}
                  />

                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}
                  />

                  {/* Subtle inner glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: "radial-gradient(ellipse at top, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
                  />

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ background: "rgba(245,158,11,0.1)" }}
                  >
                    <Icon
                      className="h-6 w-6 transition-colors duration-300"
                      style={{ color: "#f59e0b" }}
                    />
                    {/* Icon glow */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(245,158,11,0.15)", filter: "blur(4px)" }}
                    />
                  </div>

                  {/* Text */}
                  <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {service.desc}
                  </p>

                  {/* Bottom number — subtle index */}
                  <div
                    className="absolute bottom-5 right-6 text-5xl font-black opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-300 select-none"
                    style={{ color: "#fff" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;