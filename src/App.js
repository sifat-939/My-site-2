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
} from "lucide-react";

// ==========================================
// 🌍 MULTI-LANGUAGE DATA LAYER
// ==========================================
const TRANSLATIONS = {
  en: {
    role: "Aspiring Health Professional",
    tagline: "Medical Precision meets Human Empathy.",
    subTagline:
      "Bridging the gap between disciplined academic study and compassionate healthcare service.",
    mission: "Current Mission",
    skills: "Skills & Languages",
    contact: "Let's Connect",
    cv: "Curriculum Vitae",
    available: "Available for Ausbildung 2026",
    nav: ["Profile", "Portfolio", "Journal", "Contact"],
  },
  de: {
    role: "Angehender Gesundheitsexperte",
    tagline: "Medizinische Präzision trifft auf menschliche Empathie.",
    subTagline:
      "Die Lücke zwischen diszipliniertem akademischem Studium und mitfühlender Gesundheitsversorgung schließen.",
    mission: "Aktuelle Mission",
    skills: "Fähigkeiten & Sprachen",
    contact: "Lass uns সংযোগ (Connect)",
    cv: "Lebenslauf",
    available: "Bereit für Ausbildung 2026",
    nav: ["Profil", "Portfolio", "Journal", "Kontakt"],
  },
};

const USER_DATA = {
  profile: {
    name: "Sifat Ullah",
    location: "Dhaka, Bangladesh",
    avatarUrl: "/me.png", // নিশ্চিত করুন এই নামে ছবি আপলোড করা আছে
    linkedin: "linkedin.com/in/sifatullah",
    email: "sifat@example.com",
  },
  status: {
    text: "Intensive German B1 Certification",
    progress: 65,
  },
};

// ==========================================
// 🎨 UI ENGINE COMPONENTS
// ==========================================

const AuroraBackground = ({ isDark }) => (
  <div
    className={`fixed inset-0 z-0 overflow-hidden transition-colors duration-700 ${
      isDark ? "bg-slate-950" : "bg-slate-50"
    }`}
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 20, repeat: Infinity }}
      className={`absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen opacity-30 ${
        isDark ? "bg-teal-900" : "bg-teal-200"
      }`}
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 50, 0] }}
      transition={{ duration: 25, repeat: Infinity, delay: 2 }}
      className={`absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] mix-blend-screen opacity-30 ${
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

      {/* Control Buttons: Theme & Language */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <button
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg hover:scale-110 transition-transform"
        >
          <Languages
            size={20}
            className={isDark ? "text-teal-400" : "text-teal-600"}
          />
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
        {/* Header & Nav */}
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
                    className="absolute inset-0 bg-teal-500 rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{t.nav[i]}</span>
              </button>
            ))}
          </nav>
        </header>

        <main className="flex-grow p-6 overflow-hidden">
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
// 🏠 SUB-VIEWS (Home, Portfolio, Contact)
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
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full shadow-xl border border-teal-500/20 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
            {t.available}
          </span>
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
    className="space-y-8"
  >
    <div className="flex justify-between items-center border-b border-white/10 pb-4">
      <h2 className="text-2xl font-black">{t.cv}</h2>
      <button className="flex items-center gap-2 text-xs font-bold bg-teal-500 text-white px-4 py-2 rounded-lg">
        <Download size={14} /> PDF
      </button>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div
        className={`p-6 rounded-3xl border ${
          isDark ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"
        }`}
      >
        <h3 className="text-sm font-bold text-teal-500 uppercase mb-6 flex items-center gap-2">
          <Globe size={16} /> {t.skills}
        </h3>
        <div className="space-y-6">
          <SkillBar label="German (Deutsch)" level="B1" progress={65} />
          <SkillBar label="English" level="Fluent" progress={90} />
        </div>
      </div>
      <div className="space-y-4">
        <div className="p-6 bg-teal-500/10 rounded-3xl border border-teal-500/20">
          <h4 className="font-bold text-teal-600 mb-2">{t.mission}</h4>
          <p className="text-sm font-medium">{USER_DATA.status.text}</p>
          <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              className="h-full bg-teal-500"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillBar = ({ label, level, progress }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold opacity-70">
      <span>{label}</span>
      <span>{level}</span>
    </div>
    <div className="h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        className="h-full bg-teal-500 shadow-[0_0_10px_teal]"
        transition={{ duration: 1.5 }}
      />
    </div>
  </div>
);

const ContactView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-md mx-auto py-10"
  >
    <div className="text-center space-y-4 mb-8">
      <div className="w-16 h-16 bg-teal-500 text-white rounded-3xl flex items-center justify-center mx-auto rotate-12 shadow-xl shadow-teal-500/20">
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
      <button className="w-full bg-teal-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
        Send Message
      </button>
    </form>
  </motion.div>
);

export default App;
