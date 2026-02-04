"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Car, ArrowRight, Github, Chrome, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100 flex items-center justify-center p-6 pt-15 pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-960 h-96 bg-amber-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[480px] bg-white/80 backdrop-blur-xl p-12 rounded-3xl border border-white/60 shadow-2xl shadow-slate-900/10 relative z-10"
      >
        {/* Logo Section with Animation */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative mx-auto mb-6 w-20 h-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl blur-md opacity-60 animate-pulse" />
            <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-amber-200/40">
              <Car className="h-10 w-10 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-black text-slate-900 tracking-tight mb-2"
          >
            Welcome <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Back</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 font-semibold text-sm"
          >
            Log in to access your premium dashboard
          </motion.p>
        </div>

        <form className="space-y-6">
          {/* Email Input */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <label className="text-xs font-bold text-slate-600 ml-1 block">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-all duration-300" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 rounded-xl outline-none border-2 border-slate-100 focus:border-amber-500 focus:bg-white transition-all duration-300 text-sm font-medium text-slate-700 placeholder:text-slate-400" 
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold text-slate-600">Password</label>
              <Link href="#" className="text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors">
                Forgot Password?
              </Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-all duration-300" />
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full pl-12 pr-12 py-4 bg-slate-50/50 rounded-xl outline-none border-2 border-slate-100 focus:border-amber-500 focus:bg-white transition-all duration-300 text-sm font-medium text-slate-700 placeholder:text-slate-400" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </motion.div>

          {/* Remember Me */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center"
          >
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500 focus:ring-offset-0"
            />
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-slate-600">
              Keep me signed in
            </label>
          </motion.div>

          {/* Sign In Button */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-amber-500/30 flex items-center justify-center gap-3 group"
          >
            Sign In to Dashboard 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200"></span>
          </div>
          <span className="relative bg-white px-4 text-xs font-semibold text-slate-400">
            Or continue with
          </span>
        </div>

        {/* Social Login */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 py-4 bg-white rounded-xl border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-300 font-semibold text-sm text-slate-700 shadow-sm hover:shadow-md"
          >
            <Chrome className="h-5 w-5 text-slate-600" /> Google
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 py-4 bg-white rounded-xl border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-300 font-semibold text-sm text-slate-700 shadow-sm hover:shadow-md"
          >
            <Github className="h-5 w-5 text-slate-600" /> Github
          </motion.button>
        </motion.div>

        {/* Sign Up Link */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-sm font-medium text-slate-600"
        >
          Don't have an account?{" "}
          <Link href="/register" className="text-amber-600 font-bold hover:text-amber-700 underline underline-offset-4 decoration-2 decoration-amber-500/30 hover:decoration-amber-500/60 transition-all">
            Create Account
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}