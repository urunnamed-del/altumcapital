"use client";
import AltumLogo from "../components/AltumLogo";
import NetworkBG from "../components/NetworkBG";
import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Brain, Globe2, Twitter, Linkedin } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-black text-white">
      <NetworkBG />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-2xl p-6">
        <div className="flex justify-center mb-6">
          <AltumLogo className="w-16 h-16" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Altum Capital</h1>
        <p className="text-lg text-gray-300 mb-8">Your trusted partner in crypto investing. Unlock opportunities in digital assets.</p>
        <div className="flex justify-center gap-4">
          <a href="https://twitter.com" className="hover:text-blue-400"><Twitter /></a>
          <a href="https://linkedin.com" className="hover:text-blue-400"><Linkedin /></a>
        </div>
      </motion.div>
    </main>
  );
}