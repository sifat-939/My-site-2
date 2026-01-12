import React, { useState, useEffect } from "react";
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
  ArrowRight,
  Linkedin,
  Download,
  Globe,
  Sparkles,
  Heart,
  Brain,
  Calendar,
  Award,
  CheckCircle,
  Moon,
  Sun,
  Languages,
  Compass,
  Coffee,
  MessageSquare,
} from "lucide-react";

// ==========================================
// 🌍 PROFESSIONAL DATA LAYER (Nursing & Scout Focused)
// ==========================================
const TRANSLATIONS = {
  en: {
    role: "Aspiring Nurse & Caregiver",
    tagline: "Precision with Heart.",
    subTagline:
      "GPA 5.00 graduate with a Scout's discipline. Committed to excellence in Germany's healthcare sector.",
    whyHire: "Why I am the Ideal Candidate",
    skills: "Competencies",
    journal: "My Journal",
    contact: "Contact",
    available: "Seeking Ausbildung 2026",
    nav: ["Profile", "Portfolio", "Journal", "Contact"],
  },
  de: {
    role: "Angehende Pflegefachkraft",
    tagline: "Präzision mit Herz.",
    subTagline:
      "GPA 5,00 Absolvent mit Pfadfinder-Disziplin. Verpflichtet zu exzellenter Gesundheitsfürsorge in Deutschland.",
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
    location: "Dhaka, Bangladesh",
    avatarUrl: "/me.png",
  },
  highlights: [
    "Academic: GPA 5.00 (Golden) in HSC/Alim & SSC/Dakhil.",
    "Leadership: Extensive background in Scouts and social volunteering.",
    "Resilience: High-stress endurance with a patient-first mindset.",
    "Ethics: Strong moral values shaped by community service.",
  ],
  education: [
    {
      year: "2021 - 2022",
      title: "HSC (Alim)",
      result: "GPA 5.00",
      org: "Islamic Studies Institute",
    },
    {
      year: "2019 - 2020",
      title: "SSC (Dakhil)",
      result: "GPA 5.00",
      org: "Board Dhaka",
    },
  ],
  languages: [
    { name: "German (Deutsch)", level: "Level A2 (Aiming B2)", percent: 45 },
    { name: "English", level: "Level B2 (Proficient)", percent: 80 },
  ],
  journal: [
    {
      id: 1,
      title: "Nursing Ethics 101",
      date: "Jan 2026",
      category: "Medical",
      excerpt: "The fundamental importance of empathy in patient recovery.",
    },
    {
      id: 2,
      title: "German Language Journey",
      date: "Dec 2025",
      category: "Language",
      excerpt: "Mastering medical vocabulary for professional integration.",
    },
    {
      id: 3,
      title: "Scout Discipline",
      date: "Nov 2025",
      category: "Life",
      excerpt: "How volunteering shaped my professional work ethic.",
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
  const t = TRANSLATIONS[lang];

  return (
    <div
      className={`min-h-screen font-sans transition-all duration-700 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      } flex items-center justify-center p-4 relative overflow-hidden`}
    >
      {/* 3D Aurora Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{ rotate: 360, x: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Persistent Controls */}
      <div className="fixed top-8 right-8 z-50 flex gap-4">
        <button
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="p-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all text-teal-500"
        >
          <Languages size={20} />
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all"
        >
          {isDark ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-slate-600" />
          )}
        </button>
      </div>

      {/* Main Container - 3D Polished */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative z-10 w-full max-w-5xl h-[90vh] md:h-[800px] backdrop-blur-3xl border rounded-[48px] flex flex-col shadow-2xl transition-all duration-700 ${
          isDark
            ? "bg-slate-900/40 border-slate-800"
            : "bg-white/50 border-white/60"
        }`}
      >
        <header className="pt-10 flex flex-col items-center shrink-0">
          <motion.h2
            whileHover={{ letterSpacing: "0.1em" }}
            className="text-2xl font-black tracking-tighter transition-all"
          >
            {USER_DATA.profile.name}
            <span className="text-teal-500">.</span>
          </motion.h2>
          <div className="mt-8 flex bg-black/5 dark:bg-white/5 p-1.5 rounded-[24px] border border-white/10 gap-1">
            {["home", "portfolio", "journal", "contact"].map((id, i) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all relative ${
                  activeTab === id
                    ? "text-white shadow-lg"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 bg-teal-500 rounded-2xl"
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
            {activeTab === "journal" && (
              <JournalView key="journal" t={t} isDark={isDark} />
            )}
            {activeTab === "contact" && (
              <ContactView key="contact" t={t} isDark={isDark} />
            )}
          </AnimatePresence>
        </main>
      </motion.div>
    </div>
  );
};

// ==========================================
// 🏠 SUB-VIEWS
// ==========================================

const HomeView = ({ t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="h-full flex flex-col items-center justify-center text-center gap-10"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-teal-500 rounded-full blur-[80px] opacity-10 animate-pulse" />
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-[8px] border-white dark:border-slate-800 shadow-2xl overflow-hidden">
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
      <h1 className="text-5xl md:text-7xl font-black tracking-tight">
        {t.tagline}
      </h1>
      <p className="text-base md:text-lg opacity-60 font-medium leading-relaxed max-w-lg mx-auto">
        {t.subTagline}
      </p>
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
      className={`p-10 rounded-[40px] border shadow-inner ${
        isDark ? "bg-white/5 border-white/5" : "bg-teal-50/40 border-teal-100"
      }`}
    >
      <h3 className="text-xl font-black mb-8 flex items-center gap-3">
        <Sparkles className="text-teal-500" /> {t.whyHire}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {USER_DATA.highlights.map((point, i) => (
          <div
            key={i}
            className="flex gap-4 items-center p-4 bg-white/40 dark:bg-black/20 rounded-2xl border border-white/30"
          >
            <CheckCircle className="text-teal-500 shrink-0" size={18} />
            <span className="text-sm font-bold opacity-70">{point}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">
          Education Excellence
        </h3>
        <div className="space-y-8 border-l-2 border-teal-500/20 ml-2 pl-6">
          {USER_DATA.education.map((edu, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-teal-500 shadow-lg shadow-teal-500/50" />
              <h4 className="font-black">{edu.title}</h4>
              <p className="text-sm font-bold text-teal-600">
                {edu.result}{" "}
                <span className="text-slate-400 text-xs">// {edu.year}</span>
              </p>
              <p className="text-[10px] opacity-40 font-bold uppercase mt-1">
                {edu.org}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40">
          {t.skills}
        </h3>
        <div className="space-y-8">
          {USER_DATA.languages.map((lang, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between font-black text-xs">
                <span>{lang.name}</span>
                <span className="text-teal-500">{lang.level}</span>
              </div>
              <div className="h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.percent}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-teal-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const JournalView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="space-y-8"
  >
    <h3 className="text-center text-3xl font-black mb-10">{t.journal}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {USER_DATA.journal.map((post) => (
        <motion.div
          key={post.id}
          whileHover={{ y: -8 }}
          className={`p-6 rounded-[32px] border flex flex-col gap-4 ${
            isDark
              ? "bg-white/5 border-white/5 hover:bg-teal-500/10"
              : "bg-white border-slate-100 hover:shadow-2xl"
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-[10px] opacity-40 font-bold uppercase">
              {post.date}
            </span>
          </div>
          <h4 className="font-black text-lg">{post.title}</h4>
          <p className="text-sm opacity-60 line-clamp-2">{post.excerpt}</p>
          <button className="flex items-center gap-2 text-xs font-black text-teal-500 mt-auto">
            Read More <ArrowRight size={14} />
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ContactView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-md mx-auto py-6"
  >
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-teal-500 text-white rounded-[24px] flex items-center justify-center mx-auto mb-4 rotate-6 shadow-xl shadow-teal-500/20">
        <Mail size={24} />
      </div>
      <h2 className="text-3xl font-black">{t.contact}</h2>
    </div>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-teal-500/20 transition-all font-bold ${
          isDark
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-100 shadow-sm"
        }`}
      />
      <input
        type="email"
        placeholder="Email"
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-teal-500/20 transition-all font-bold ${
          isDark
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-100 shadow-sm"
        }`}
      />
      <textarea
        placeholder="Your Message"
        rows="3"
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-teal-500/20 transition-all font-bold ${
          isDark
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-100 shadow-sm"
        }`}
      />
      <button className="w-full bg-teal-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-teal-500/20 hover:translate-y-[-2px] active:translate-y-0 transition-all">
        Send Message
      </button>
    </form>
  </motion.div>
);

export default App;
