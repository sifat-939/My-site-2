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
  ArrowUpRight,
  Moon,
  Sun,
  Languages,
  Award,
  CheckCircle,
} from "lucide-react";

// ==========================================
// 🌍 MULTI-LANGUAGE DATA LAYER
// ==========================================
const TRANSLATIONS = {
  en: {
    role: "Health Professional Candidate",
    tagline: "Bridging Clinical Excellence with Compassionate Care.",
    subTagline:
      "A results-driven academic graduate and dedicated linguist committed to advancing the German healthcare sector through medical precision.",
    whyHire: "Why Consider Me?",
    milestones: "Professional Milestones",
    skills: "Competencies & Languages",
    contact: "Contact Me",
    available: "Ready for Ausbildung 2026",
    nav: ["Profile", "Portfolio", "Journal", "Contact"],
  },
  de: {
    role: "Angehende Pflegefachkraft",
    tagline: "Klinische Exzellenz trifft auf menschliche Empathie.",
    subTagline:
      "Ein zielorientierter akademischer Absolvent, der sich durch medizinische Präzision für den deutschen Gesundheitssektor einsetzt.",
    whyHire: "Warum ich?",
    milestones: "Beruflicher Werdegang",
    skills: "Kompetenzen & Sprachen",
    contact: "Kontaktieren Sie mich",
    available: "Bereit für Ausbildung 2026",
    nav: ["Profil", "Portfolio", "Journal", "Kontakt"],
  },
};

const USER_DATA = {
  profile: {
    name: "Sifat Ullah",
    location: "Dhaka, Bangladesh",
    avatarUrl: "/me.png",
    email: "sifat@example.com",
    linkedin: "linkedin.com/in/sifatullah",
  },
  professionalPoints: [
    "Graduated with Distinction in Alim Examinations (Strong ethical foundation).",
    "Targeting Goethe-Zertifikat B1 with intensive daily 10-hour immersion.",
    "Proven empathy through consistent community and social service.",
    "Exceptional adaptability to international standards and medical protocols.",
  ],
  experience: [
    {
      year: "2024 - Present",
      role: "Intensive German Language Student",
      org: "Medical German Immersion Program",
      desc: "Focusing on healthcare terminology, patient communication, and professional ethics in a German context.",
    },
    {
      year: "2018 - 2022",
      role: "Alim Honors Graduate",
      org: "Islamic Studies & Ethics Institute",
      desc: "Developed high-level discipline, memorization skills, and a deep sense of social responsibility.",
    },
  ],
  skills: [
    { name: "German (Deutsch)", level: "B1 (In Progress)", percent: 65 },
    { name: "English", level: "C1 Advanced", percent: 90 },
  ],
};

// ==========================================
// 🎨 UI COMPONENTS
// ==========================================

const AuroraBackground = ({ isDark }) => (
  <div
    className={`fixed inset-0 z-0 overflow-hidden transition-colors duration-700 ${
      isDark ? "bg-slate-950" : "bg-slate-50"
    }`}
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
      transition={{ duration: 20, repeat: Infinity }}
      className={`absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${
        isDark ? "bg-teal-900" : "bg-teal-200"
      }`}
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
      transition={{ duration: 25, repeat: Infinity, delay: 2 }}
      className={`absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${
        isDark ? "bg-blue-900" : "bg-blue-200"
      }`}
    />
  </div>
);

// ==========================================
// 🚀 MAIN APPLICATION
// ==========================================

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");
  const t = TRANSLATIONS[lang];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        isDark ? "text-slate-100" : "text-slate-900"
      } flex items-center justify-center p-4 relative overflow-hidden`}
    >
      <AuroraBackground isDark={isDark} />

      {/* Controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <button
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg hover:scale-110 transition-transform"
        >
          <Languages size={20} className="text-teal-500" />
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg hover:scale-110 transition-transform"
        >
          {isDark ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-slate-700" />
          )}
        </button>
      </div>

      <div
        className={`relative z-10 w-full max-w-5xl min-h-[85vh] backdrop-blur-2xl border rounded-[40px] flex flex-col shadow-2xl transition-all duration-500 ${
          isDark
            ? "bg-slate-900/60 border-slate-800"
            : "bg-white/60 border-white/50"
        }`}
      >
        <header className="pt-10 px-6 flex flex-col items-center">
          <h2 className="text-2xl font-black tracking-tighter mb-6">
            {USER_DATA.profile.name}
            <span className="text-teal-500">.</span>
          </h2>
          <nav className="flex bg-black/5 dark:bg-white/5 p-1.5 rounded-full border border-white/10 gap-1">
            {["home", "portfolio", "journal", "contact"].map((id, i) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all relative ${
                  activeTab === id ? "text-white" : "text-slate-500"
                }`}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="nav"
                    className="absolute inset-0 bg-teal-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{t.nav[i]}</span>
              </button>
            ))}
          </nav>
        </header>

        <main className="flex-grow p-6 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HomeView key="home" t={t} />}
            {activeTab === "portfolio" && (
              <PortfolioView key="portfolio" t={t} isDark={isDark} />
            )}
            {activeTab === "contact" && (
              <ContactView key="contact" t={t} isDark={isDark} />
            )}
          </AnimatePresence>
        </main>

        <footer className="py-6 text-center text-[10px] font-bold uppercase tracking-widest opacity-40">
          &copy; 2026 {USER_DATA.profile.name} // {t.available}
        </footer>
      </div>
    </div>
  );
};

// ==========================================
// 🏠 SUB-VIEWS
// ==========================================

const HomeView = ({ t }) => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 80]);
  const yText = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col items-center justify-center text-center gap-10"
    >
      <motion.div style={{ y: yImage }} className="relative">
        <div className="absolute inset-0 bg-teal-500 rounded-full blur-[60px] opacity-20 animate-pulse" />
        <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-[6px] border-white shadow-2xl overflow-hidden">
          <img
            src={USER_DATA.profile.avatarUrl}
            alt="Me"
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </motion.div>

      <motion.div style={{ y: yText }} className="max-w-2xl space-y-4">
        <h3 className="text-teal-500 font-bold uppercase tracking-[0.3em] text-xs">
          {t.role}
        </h3>
        <h1 className="text-4xl md:text-6xl font-black leading-[1.1]">
          {t.tagline}
        </h1>
        <p className="text-slate-500 font-medium text-lg leading-relaxed">
          {t.subTagline}
        </p>
      </motion.div>
    </motion.div>
  );
};

const PortfolioView = ({ t, isDark }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="space-y-12 py-4"
  >
    {/* Digital CV Section: Why Hire Me */}
    <div
      className={`p-8 rounded-[32px] border ${
        isDark
          ? "bg-teal-500/5 border-teal-500/10"
          : "bg-teal-50 border-teal-100"
      }`}
    >
      <h3 className="text-xl font-black mb-6 flex items-center gap-3">
        <Award className="text-teal-500" /> {t.whyHire}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {USER_DATA.professionalPoints.map((point, i) => (
          <div key={i} className="flex gap-3 text-sm font-medium">
            <CheckCircle size={18} className="text-teal-500 shrink-0" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h3 className="text-sm font-black uppercase text-slate-400 flex items-center gap-2">
          <Languages size={16} /> {t.skills}
        </h3>
        {USER_DATA.skills.map((skill, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.percent}%` }}
                className="h-full bg-teal-500"
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-sm font-black uppercase text-slate-400 flex items-center gap-2">
          <BookOpen size={16} /> {t.milestones}
        </h3>
        <div className="space-y-6 relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 pl-6">
          {USER_DATA.experience.map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-[10px] font-black text-teal-500">
                {exp.year}
              </span>
              <h4 className="font-bold text-sm">{exp.role}</h4>
              <p className="text-[11px] opacity-60 font-bold mb-1">{exp.org}</p>
              <p className="text-xs opacity-80">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-md mx-auto py-10"
  >
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-12 shadow-xl">
        <Mail size={28} />
      </div>
      <h2 className="text-3xl font-black">{t.contact}</h2>
    </div>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      />
      <input
        type="email"
        placeholder="Email"
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      />
      <textarea
        placeholder="Message"
        rows="4"
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      />
      <button className="w-full bg-teal-500 text-white font-black py-4 rounded-2xl shadow-xl hover:scale-[1.02] transition-all">
        Send Message
      </button>
    </form>
  </motion.div>
);

export default App;
