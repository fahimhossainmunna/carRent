"use client";

import { useState } from "react";
import { User, Mail, Lock, Car, ArrowRight, ShieldCheck, Phone, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    agreedToTerms: false
  });
  
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setFormData({ ...formData, password: pwd });
    
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    setPasswordStrength(strength);
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-yellow-500";
    if (passwordStrength === 3) return "bg-blue-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (passwordStrength <= 1) return "Weak";
    if (passwordStrength === 2) return "Fair";
    if (passwordStrength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100 flex items-center justify-center p-6 pt-20 pb-20 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-960 h-96 bg-amber-200/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        // Rounded-3xl kora hoyeche jeno beshi round na lage
        className="w-full max-w-[550px] bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[20px] border border-white/60 shadow-2xl shadow-slate-900/10 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative mx-auto mb-6 w-20 h-20"
          >
            <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-200/40">
              <Car className="h-10 w-10 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>
          
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2 uppercase">
            Join <span className="text-amber-500">Fleet</span>
          </h1>
          <p className="text-slate-500 font-semibold text-sm">Start your journey with premium car rentals</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-all" />
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Munna Hassan" 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 rounded-xl outline-none border-2 border-slate-100 focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-1">Phone</label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-all" />
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+880..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 rounded-xl outline-none border-2 border-slate-100 focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-all" />
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="munna@example.com" 
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 rounded-xl outline-none border-2 border-slate-100 focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-all" />
              <input 
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handlePasswordChange}
                placeholder="Create Password" 
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50/50 rounded-xl outline-none border-2 border-slate-100 focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-500 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2 mt-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        level <= passwordStrength ? getStrengthColor() : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Strength: <span className={passwordStrength >= 3 ? "text-green-600" : "text-amber-600"}>{getStrengthText()}</span>
                </p>
              </div>
            )}
          </div>

          <div className="flex items-start gap-3 p-4 bg-amber-50/50 rounded-2xl border border-amber-100 my-4">
            <input 
              type="checkbox" 
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
              className="mt-1 h-4 w-4 accent-amber-600 cursor-pointer" 
            />
            <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-wider">
              I agree to the <span className="text-amber-600 underline">Terms of Service</span> and privacy policy.
            </p>
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[3px] hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
          >
            Create Account <ShieldCheck className="h-4 w-4" />
          </button>
        </form>

        <p className="text-center mt-10 text-[11px] font-black uppercase tracking-widest text-slate-400">
          Already a member? <Link href="/login" className="text-amber-600 hover:text-slate-900 underline underline-offset-4 decoration-2">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
}