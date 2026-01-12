import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Stethoscope,
  BookOpen,
  Plane,
  User,
  Mail,
  ArrowLeft,
  ArrowRight,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
  Globe,
  Sparkles,
  Heart,
  Brain,
  Award,
  CheckCircle,
  Moon,
  Sun,
  Languages,
  Compass,
  Coffee,
  Send,
} from "lucide-react";

// ==========================================
// 🌍 ULTIMATE DATA LAYER (Updated with your Links)
// ==========================================
const TRANSLATIONS = {
  en: {
    role: "Aspiring Nurse & Caregiver",
    tagline: "Precision with Heart.",
    whyHire: "Why I am the Ideal Candidate",
    skills: "Competencies",
    journal: "My Journal",
    contact: "Get in Touch",
    available: "Seeking Ausbildung 2026",
    nav: ["Profile", "Portfolio", "Journal", "Contact"],
  },
  de: {
    role: "Angehende Pflegefachkraft",
    tagline: "Präzision mit Herz.",
    whyHire: "Warum ich?",
    skills: "Kompetenzen",
    journal: "Mein Journal",
    contact: "Kontakt",
    available: "Ausbildungsplatz 2026 gesucht",
    nav: ["Profil", "Portfolio", "Journal", "Kontakt"],
  },
};

const USER_DATA = {
  profile: {
    name: "Sifat Ullah",
    avatarUrl: "/me.png",
    socials: {
      gmail: "mailto:sifatullah.real@gmail.com",
      twitter: "https://twitter.com/sifatullah",
      facebook: "https://facebook.com/sifatullah",
      youtube: "https://youtube.com/@sifatullah",
    },
  },
  highlights: [
    "Academic: GPA 5.00 in HSC/Alim & SSC/Dakhil.",
    "Leadership: Scout background & community volunteering.",
    "Resilience: Proven ability to perform under high pressure.",
    "Humanity: Deep passion for helping people and patient care.",
  ],
  education: [
    {
      year: "2021-22",
      title: "HSC (Alim Examination)",
      result: "GPA 5.00",
      org: "Islamic Studies Institute",
    },
    {
      year: "2019-20",
      title: "SSC (Dakhil Examination)",
      result: "GPA 5.00",
      org: "Board Dhaka",
    },
  ],
  languages: [
    { name: "German (Deutsch)", level: "Level A2 (Target B2)", percent: 45 },
    { name: "English", level: "Level B2 (Proficient)", percent: 80 },
  ],
  journal: [
    {
      id: 1,
      title: "The Heart of Caregiving",
      date: "Jan 13, 2026",
      category: "Medical",
      content:
        "Nursing is not just about medicine; it's about human connection. My journey in Scouts taught me that empathy is the strongest tool in any crisis.",
      excerpt: "The fundamental importance of empathy in patient recovery...",
    },
    {
      id: 2,
      title: "Language as a Bridge",
      date: "Dec 28, 2025",
      category: "Language",
      content:
        "Moving from A2 to B2 German is a challenge I embrace daily. Communication is key to safety in the medical sector.",
      excerpt: "Mastering medical vocabulary for professional integration...",
    },
    {
      id: 3,
      title: "Scout Values in Nursing",
      date: "Nov 15, 2025",
      category: "Life",
      content:
        "Being prepared, disciplined, and helpful—these Scout laws are the foundation of my professional work ethic as a future nurse.",
      excerpt: "How volunteering shaped my professional work ethic...",
    },
  ],
};

// ==========================================
// 🚀 SUPER POLISHED 3D APPLICATION
// ==========================================

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [selectedJournal, setSelectedJournal] = useState(null);
  const t = TRANSLATIONS[lang];

  return (
    <div
      className={`min-h-screen font-sans transition-all duration-700 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      } flex items-center justify-center p-4 relative overflow-hidden`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="fixed top-8 right-8 z-50 flex gap-4">
        <button
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="p-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-xl hover:scale-110 active:scale-95 text-teal-500"
        >
          <Languages size={20} />
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all"
        >
          {isDark ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-slate-600" />
          )}
        </button>
      </div>

      <motion.div
        className={`relative z-10 w-full max-w-5xl h-[90vh] md:h-[800px] backdrop-blur-3xl border rounded-[48px] flex flex-col shadow-2xl overflow-hidden transition-all duration-700 ${
          isDark
            ? "bg-slate-900/40 border-slate-800"
            : "bg-white/50 border-white/60"
        }`}
      >
        <header className="pt-10 flex flex-col items-center shrink-0">
          <motion.h2
            whileHover={{ letterSpacing: "0.1em" }}
            className="text-2xl font-black tracking-tighter cursor-default"
          >
            {USER_DATA.profile.name}
            <span className="text-teal-500">.</span>
          </motion.h2>
          <div className="mt-8 flex bg-black/5 dark:bg-white/5 p-1.5 rounded-[24px] border border-white/10 gap-1">
            {["home", "portfolio", "journal", "contact"].map((id, i) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  setSelectedJournal(null);
                }}
                className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all relative ${
                  activeTab === id ? "text-white" : "text-slate-500"
                }`}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="nav3d"
                    className="absolute inset-0 bg-teal-500 rounded-2xl shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{t.nav[i]}</span>
              </button>
            ))}
          </div>
        </header>

        <main className="flex-grow p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HomeView key="home" t={t} />}
            {activeTab === "portfolio" && (
              <PortfolioView key="portfolio" t={t} isDark={isDark} />
            )}
            {activeTab === "journal" &&
              (selectedJournal ? (
                <JournalDetail
                  post={selectedJournal}
                  onBack={() => setSelectedJournal(null)}
                  isDark={isDark}
                />
              ) : (
                <JournalView
                  key="journal"
                  t={t}
                  isDark={isDark}
                  onSelect={setSelectedJournal}
                />
              ))}
            {activeTab === "contact" && (
              <ContactView key="contact" t={t} isDark={isDark} />
            )}
          </AnimatePresence>
        </main>
      </motion.div>
    </div>
  );
};

const HomeView = ({ t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="h-full flex flex-col items-center justify-center text-center gap-10"
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-teal-500 rounded-full blur-[80px] opacity-10 animate-pulse" />
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-[8px] border-white dark:border-slate-800 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <img
          src={USER_DATA.profile.avatarUrl}
          alt="Sifat"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="max-w-2xl space-y-4">
      <h4 className="text-teal-500 font-black tracking-widest text-[10px] uppercase">
        {t.role}
      </h4>
      <h1 className="text-5xl md:text-7xl font-black leading-none">
        {t.tagline}
      </h1>
    </div>
  </motion.div>
);

const PortfolioView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-12"
  >
    <div
      className={`p-8 rounded-[40px] border ${
        isDark ? "bg-white/5 border-white/5" : "bg-teal-50/40 border-teal-100"
      }`}
    >
      <h3 className="text-xl font-black mb-8 flex items-center gap-3">
        <Sparkles className="text-teal-500" /> {t.whyHire}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {USER_DATA.highlights.map((point, i) => (
          <div
            key={i}
            className="flex gap-4 items-center p-4 bg-white/40 dark:bg-black/20 rounded-2xl border border-white/30 transition-all hover:translate-x-2"
          >
            <CheckCircle className="text-teal-500 shrink-0" size={18} />
            <span className="text-sm font-bold opacity-70">{point}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
          <Award size={14} /> Academic Records
        </h3>
        {USER_DATA.education.map((edu, i) => (
          <div key={i} className="pl-6 border-l-2 border-teal-500/20 relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-teal-500 border-2 border-white dark:border-slate-900 shadow-[0_0_10px_teal]" />
            <h4 className="font-black">{edu.title}</h4>
            <p className="text-sm font-bold text-teal-600">
              {edu.result}{" "}
              <span className="opacity-40 font-medium">({edu.year})</span>
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">
          {t.skills}
        </h3>
        {USER_DATA.languages.map((lang, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between font-black text-xs">
              <span>{lang.name}</span>
              <span className="text-teal-500">{lang.level}</span>
            </div>
            <div className="h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${lang.percent}%` }}
                className="h-full bg-teal-500"
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const JournalView = ({ t, isDark, onSelect }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    {USER_DATA.journal.map((post) => (
      <motion.div
        key={post.id}
        whileHover={{ y: -8, rotateY: 10, scale: 1.02 }}
        onClick={() => onSelect(post)}
        className={`p-6 rounded-[32px] border cursor-pointer group flex flex-col gap-4 transition-all ${
          isDark
            ? "bg-white/5 border-white/5 hover:bg-teal-500/10"
            : "bg-white border-slate-100 hover:shadow-2xl"
        }`}
      >
        <span className="text-[10px] font-black px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full uppercase w-max tracking-widest">
          {post.category}
        </span>
        <h4 className="font-black text-lg group-hover:text-teal-500 transition-colors leading-tight">
          {post.title}
        </h4>
        <p className="text-sm opacity-60 line-clamp-2">{post.excerpt}</p>
        <button className="flex items-center gap-2 text-xs font-black text-teal-500 mt-auto">
          Open Journal <ArrowRight size={14} />
        </button>
      </motion.div>
    ))}
  </motion.div>
);

const JournalDetail = ({ post, onBack, isDark }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    className="space-y-6 max-w-3xl mx-auto"
  >
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-sm font-black text-teal-500 mb-6 hover:translate-x-[-4px] transition-transform"
    >
      <ArrowLeft size={16} /> Go Back
    </button>
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-black px-4 py-1.5 bg-teal-500/10 text-teal-600 rounded-full uppercase tracking-widest">
        {post.category}
      </span>
      <p className="text-xs font-bold opacity-40 uppercase">{post.date}</p>
    </div>
    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
      {post.title}
    </h2>
    <div className={`h-1 w-20 bg-teal-500 rounded-full mb-8`}></div>
    <p
      className={`text-lg md:text-xl leading-relaxed font-medium ${
        isDark ? "text-slate-300" : "text-slate-700"
      }`}
    >
      {post.content}
    </p>
  </motion.div>
);

const ContactView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-md mx-auto"
  >
    <div className="text-center mb-10">
      <div className="w-16 h-16 bg-teal-500 text-white rounded-[24px] flex items-center justify-center mx-auto mb-4 rotate-6 shadow-xl shadow-teal-500/20">
        <Mail size={24} />
      </div>
      <h2 className="text-3xl font-black">{t.contact}</h2>
    </div>
    <div className="flex justify-center gap-6 mb-12">
      <motion.a
        whileHover={{ y: -5 }}
        href={USER_DATA.profile.socials.gmail}
        className="p-4 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/10 hover:bg-red-500 hover:text-white transition-all"
      >
        <Mail size={24} />
      </motion.a>
      <motion.a
        whileHover={{ y: -5 }}
        href={USER_DATA.profile.socials.twitter}
        target="_blank"
        className="p-4 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/10 hover:bg-blue-400 hover:text-white transition-all"
      >
        <Twitter size={24} />
      </motion.a>
      <motion.a
        whileHover={{ y: -5 }}
        href={USER_DATA.profile.socials.facebook}
        target="_blank"
        className="p-4 bg-blue-600/10 text-blue-600 rounded-2xl border border-blue-600/10 hover:bg-blue-600 hover:text-white transition-all"
      >
        <Facebook size={24} />
      </motion.a>
      <motion.a
        whileHover={{ y: -5 }}
        href={USER_DATA.profile.socials.youtube}
        target="_blank"
        className="p-4 bg-red-600/10 text-red-600 rounded-2xl border border-red-600/10 hover:bg-red-600 hover:text-white transition-all"
      >
        <Youtube size={24} />
      </motion.a>
    </div>
    <form
      action="https://formspree.io/f/xreeglpw"
      method="POST"
      className="space-y-4"
    >
      <input
        name="name"
        type="text"
        required
        placeholder="Full Name"
        className={`w-full p-5 rounded-3xl border outline-none focus:ring-4 focus:ring-teal-500/20 font-bold transition-all ${
          isDark
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-100 shadow-sm"
        }`}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className={`w-full p-5 rounded-3xl border outline-none focus:ring-4 focus:ring-teal-500/20 font-bold transition-all ${
          isDark
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-100 shadow-sm"
        }`}
      />
      <textarea
        name="message"
        required
        placeholder="Tell me about the Ausbildung opportunity..."
        rows="4"
        className={`w-full p-5 rounded-3xl border outline-none focus:ring-4 focus:ring-teal-500/20 font-bold transition-all ${
          isDark
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-100 shadow-sm"
        }`}
      />
      <button
        type="submit"
        className="w-full bg-teal-500 text-white font-black py-5 rounded-3xl shadow-2xl shadow-teal-500/30 hover:translate-y-[-4px] active:translate-y-0 transition-all flex items-center justify-center gap-2 text-lg"
      >
        Send Message <Send size={20} />
      </button>
    </form>
  </motion.div>
);

export default App;
