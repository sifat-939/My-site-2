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
} from "lucide-react";

// ==========================================
// 🌍 MULTI-LANGUAGE DATA (Nursing & Care Focused)
// ==========================================
const TRANSLATIONS = {
  en: {
    role: "Aspiring Nurse & Caregiver",
    tagline: "Empowering Lives through Compassionate Healthcare.",
    subTagline:
      "High-achieving academic graduate (GPA 5.00) with a background in Scouts and volunteering. Dedicated to bringing clinical discipline to Germany's health sector.",
    whyHire: "Why I am the Ideal Candidate",
    skills: "Competencies & Languages",
    hobbies: "Beyond the Lab",
    contact: "Contact Me",
    available: "Seeking Ausbildung 2026",
    nav: ["Profile", "Qualifications", "Interests", "Contact"],
  },
  de: {
    role: "Angehende Pflegefachkraft",
    tagline: "Leben durch mitfühlende Gesundheitsfürsorge stärken.",
    subTagline:
      "Leistungsstarker akademischer Absolvent (GPA 5,00) mit Erfahrung bei den Pfadfindern und im Ehrenamt. Engagiert für klinische Disziplin in Deutschland.",
    whyHire: "Warum ich der ideale Kandidat bin",
    skills: "Kompetenzen & Sprachen",
    hobbies: "Hobbys & Interessen",
    contact: "Kontakt",
    available: "Ausbildungsplatz 2026 gesucht",
    nav: ["Profil", "Qualifikationen", "Interessen", "Kontakt"],
  },
};

const USER_DATA = {
  profile: {
    name: "Sifat Ullah",
    location: "Dhaka, Bangladesh",
    avatarUrl: "/me.png",
  },
  highlights: [
    "Academic Excellence: Achieved GPA 5.00 in both HSC (Alim) & SSC (Dakhil).",
    "Leadership: Active background in Scouts and community volunteering.",
    "Resilience: Proven ability to maintain calm and perform under high pressure.",
    "Humanity: Deep-rooted passion for helping people and patient advocacy.",
  ],
  education: [
    {
      year: "2021 - 2022",
      title: "HSC (Alim Examination)",
      result: "GPA 5.00 (Golden)",
      org: "Islamic Studies Institute",
    },
    {
      year: "2019 - 2020",
      title: "SSC (Dakhil Examination)",
      result: "GPA 5.00",
      org: "Academic Board Dhaka",
    },
  ],
  languages: [
    {
      name: "German (Deutsch)",
      level: "Level A2 (Target B2)",
      percent: 45,
      color: "teal",
    },
    {
      name: "English",
      level: "Level B2 (Proficient)",
      percent: 80,
      color: "blue",
    },
  ],
  hobbies: [
    {
      name: "Reading",
      icon: <BookOpen size={18} />,
      desc: "Continuous Learning",
    },
    {
      name: "Traveling",
      icon: <Plane size={18} />,
      desc: "Exploring Cultures",
    },
    {
      name: "Exploring",
      icon: <Compass size={18} />,
      desc: "New Perspectives",
    },
    { name: "Learning", icon: <Brain size={18} />, desc: "Skill Acquisition" },
  ],
};

// ==========================================
// 🚀 MAIN APPLICATION WITH 3D VIBE
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
      {/* 3D Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Navigation & Controls */}
      <div className="fixed top-8 right-8 z-50 flex gap-4">
        <button
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:scale-110 transition-all text-teal-500"
        >
          <Languages size={20} />
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:scale-110 transition-all"
        >
          {isDark ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-slate-600" />
          )}
        </button>
      </div>

      {/* Main Glass Morphic 3D Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        className={`relative z-10 w-full max-w-5xl min-h-[85vh] backdrop-blur-3xl border rounded-[48px] flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 ${
          isDark
            ? "bg-slate-900/40 border-slate-800"
            : "bg-white/40 border-white/60"
        }`}
      >
        <header className="pt-12 flex flex-col items-center">
          <motion.h2
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-black tracking-tighter cursor-default"
          >
            {USER_DATA.profile.name}
            <span className="text-teal-500">.</span>
          </motion.h2>
          <div className="mt-8 flex bg-black/5 dark:bg-white/5 p-2 rounded-3xl border border-white/10">
            {["home", "portfolio", "journal", "contact"].map((id, i) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all relative ${
                  activeTab === id ? "text-white" : "text-slate-500"
                }`}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="nav3d"
                    className="absolute inset-0 bg-teal-500 shadow-xl rounded-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.nav[i]}</span>
              </button>
            ))}
          </div>
        </header>

        <main className="flex-grow p-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HomeView key="home" t={t} />}
            {activeTab === "portfolio" && (
              <PortfolioView key="portfolio" t={t} isDark={isDark} />
            )}
            {activeTab === "journal" && (
              <InterestView key="interest" t={t} isDark={isDark} />
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
// 🏠 SUB-COMPONENTS
// ==========================================

const HomeView = ({ t }) => {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 500], [0, 100]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center gap-8 py-10"
    >
      <motion.div style={{ y: yImg }} className="relative group">
        <div className="absolute inset-0 bg-teal-400 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative w-56 h-56 rounded-full border-8 border-white dark:border-slate-800 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
          <img
            src={USER_DATA.profile.avatarUrl}
            alt="Sifat"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <div className="max-w-2xl">
        <h4 className="text-teal-500 font-black tracking-widest text-xs mb-4 uppercase">
          {t.role}
        </h4>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          {t.tagline}
        </h1>
        <p className="text-lg opacity-70 font-medium leading-relaxed">
          {t.subTagline}
        </p>
      </div>
    </motion.div>
  );
};

const PortfolioView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="space-y-12"
  >
    {/* Why Me - 3D Card */}
    <div
      className={`p-10 rounded-[40px] border shadow-inner ${
        isDark ? "bg-white/5 border-white/5" : "bg-teal-50/50 border-teal-100"
      }`}
    >
      <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
        <Stethoscope className="text-teal-500" /> {t.whyHire}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {USER_DATA.highlights.map((point, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 10 }}
            className="flex gap-4 items-start p-4 bg-white/40 dark:bg-black/20 rounded-2xl border border-white/40"
          >
            <CheckCircle className="text-teal-500 mt-1 shrink-0" size={20} />
            <span className="text-sm font-bold opacity-80">{point}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Education Timeline */}
      <div className="space-y-8">
        <h3 className="text-xs font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
          <Award size={16} /> Academic Excellence
        </h3>
        <div className="relative border-l-4 border-teal-500/20 ml-4 space-y-10 pl-8">
          {USER_DATA.education.map((edu, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[40px] top-1 w-5 h-5 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 shadow-lg" />
              <span className="text-[10px] font-black text-teal-500">
                {edu.year}
              </span>
              <h4 className="text-lg font-black">{edu.title}</h4>
              <p className="text-sm font-bold text-teal-600">{edu.result}</p>
              <p className="text-xs opacity-60 font-medium">{edu.org}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Language Proficiency */}
      <div className="space-y-8">
        <h3 className="text-xs font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
          <Globe size={16} /> {t.skills}
        </h3>
        <div className="space-y-8">
          {USER_DATA.languages.map((lang, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between font-black text-sm">
                <span>{lang.name}</span>
                <span className="text-teal-500">{lang.level}</span>
              </div>
              <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.percent}%` }}
                  transition={{ duration: 2 }}
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

const InterestView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="py-10"
  >
    <h3 className="text-3xl font-black text-center mb-12">{t.hobbies}</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {USER_DATA.hobbies.map((hobby, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, rotateY: 15 }}
          className={`p-8 rounded-[32px] border flex flex-col items-center text-center gap-4 transition-all ${
            isDark
              ? "bg-white/5 border-white/10 hover:bg-teal-500/10"
              : "bg-white border-slate-100 hover:shadow-2xl"
          }`}
        >
          <div className="p-4 bg-teal-500/10 text-teal-500 rounded-2xl">
            {hobby.icon}
          </div>
          <h4 className="font-black text-sm">{hobby.name}</h4>
          <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest">
            {hobby.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ContactView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="max-w-md mx-auto py-10"
  >
    <div className="text-center mb-10">
      <div className="w-20 h-20 bg-teal-500 text-white rounded-[32px] flex items-center justify-center mx-auto mb-6 rotate-12 shadow-2xl shadow-teal-500/30">
        <Mail size={32} />
      </div>
      <h2 className="text-4xl font-black">{t.contact}</h2>
    </div>
    <form className="space-y-5">
      <input
        type="text"
        placeholder="Full Name"
        className={`w-full p-5 rounded-3xl border outline-none focus:ring-4 focus:ring-teal-500/20 transition-all font-bold ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      />
      <input
        type="email"
        placeholder="Email Address"
        className={`w-full p-5 rounded-3xl border outline-none focus:ring-4 focus:ring-teal-500/20 transition-all font-bold ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      />
      <textarea
        placeholder="Tell me about the opportunity..."
        rows="4"
        className={`w-full p-5 rounded-3xl border outline-none focus:ring-4 focus:ring-teal-500/20 transition-all font-bold ${
          isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      />
      <button className="w-full bg-teal-500 text-white font-black py-5 rounded-3xl shadow-2xl shadow-teal-500/30 hover:translate-y-[-4px] active:translate-y-[0] transition-all text-lg">
        Send Message
      </button>
    </form>
  </motion.div>
);

export default App;
