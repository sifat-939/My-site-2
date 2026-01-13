import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  Twitter,
  Facebook,
  Youtube,
  Globe,
  Sparkles,
  Heart,
  Moon,
  Sun,
  Languages,
  Send,
  ShieldCheck,
  Activity,
  GraduationCap,
} from "lucide-react";

// ==========================================
// 🌍 STATIC DATA
// ==========================================
const STATIC_DATA = {
  name: "Sifat Ullah",
  domain: ".online",
  // 👇 প্রোফাইল ছবির জন্য আগের aa.png রাখা হয়েছে
  avatarUrl: "/aa.png",
  socials: {
    gmail: "mailto:sifatullah.contact@gmail.com",
    twitter: "https://twitter.com/sifatullah",
    facebook: "https://facebook.com/sifatullah",
    youtube: "https://youtube.com/@sifatullah",
  },
};

const CONTENT = {
  en: {
    nav: ["Profile", "Aspirations", "Journal", "Contact"],
    tagline: "Committed to starting my Nursing Ausbildung in Germany.",
    bio: "Focused on healthcare excellence, patient empathy, and cultural integration. Ready to relocate and contribute to the German medical system immediately.",
    whyHire: "Professional Core Values",
    skills: "Key Competencies",
    academic: "Academic Foundation",
    available: "Global Aspirant 2026",
    contactTitle: "Get in Touch",
    contactSub: "sifatullah.contact@gmail.com",
    form: {
      name: "Full Name",
      email: "Your Email Address",
      message: "Hello Sifat, I am interested in your profile for Ausbildung...",
      btn: "Send Application",
    },
    footer: "© 2026 Sifat Ullah. All Rights Reserved.",
    readMore: "Read Story",
    backBtn: "Back to Stories",
    highlights: [
      { text: "Unwavering commitment to patient-centered care and empathy." },
      {
        text: "Reliable team player with high resilience under medical pressure.",
      },
      {
        text: "Multilingual: Bridging communication gaps in healthcare environments.",
      },
      { text: "Dedicated to the highest standards of ethics and hygiene." },
    ],
    education: [
      {
        title: "HSC (Alim Examination)",
        result: "Highest Distinction",
        org: "Islamic Studies Institute",
        year: "2021-22",
      },
      {
        title: "SSC (Dakhil Examination)",
        result: "Highest Distinction",
        org: "Board Dhaka",
        year: "2019-20",
      },
    ],
    languages: [
      {
        name: "German (Deutsch)",
        level: "Level A2 (Intensive B2 Pursuit)",
        percent: 50,
      },
      {
        name: "English",
        level: "Level B2 (Fluent Communication)",
        percent: 85,
      },
      { name: "Bengali", level: "Native Proficiency", percent: 100 },
    ],
    journal: [
      {
        id: 1,
        category: "Medical",
        title: "The Philosophy of Care",
        excerpt:
          "Redefining what it means to be a caregiver in a modern hospital...",
        content:
          "Nursing is more than a profession; it's a commitment to human dignity.",
      },
      {
        id: 2,
        category: "Language",
        title: "Bridging Cultures",
        excerpt: "The impact of language mastery on clinical safety...",
        content: "Learning German is my bridge to professional excellence.",
      },
      {
        id: 3,
        category: "Ethics",
        title: "Ethics in Nursing",
        excerpt: "Why ethical foundations matter more than technical skills...",
        content: "Discipline and ethics form the backbone of healthcare.",
      },
    ],
  },
  de: {
    nav: ["Profil", "Qualifikationen", "Journal", "Kontakt"],
    tagline: "Motiviert für den Start meiner Pflegeausbildung in Deutschland.",
    bio: "Fokussiert auf exzellente Pflege, Patientenempathie und kulturelle Integration. Bereit für den Umzug und den sofortigen Einsatz.",
    whyHire: "Professionelle Kernwerte",
    skills: "Kernkompetenzen",
    academic: "Akademischer Werdegang",
    available: "Ausbildungsplatz 2026 gesucht",
    contactTitle: "Kontaktieren Sie mich",
    contactSub: "sifatullah.contact@gmail.com",
    form: {
      name: "Vollständiger Name",
      email: "Ihre E-Mail-Adresse",
      message: "Hallo Sifat, wir interessieren uns für Ihr Profil...",
      btn: "Bewerbung Senden",
    },
    footer: "© 2026 Sifat Ullah. Alle Rechte vorbehalten.",
    readMore: "Geschichte lesen",
    backBtn: "Zurück zum Journal",
    highlights: [
      { text: "Unerschütterliches Engagement für patientenzentrierte Pflege." },
      { text: "Zuverlässiger Teamplayer mit hoher Belastbarkeit." },
      { text: "Mehrsprachig: Überbrückung von Kommunikationslücken." },
      { text: "Verpflichtet zu höchsten Ethik- und Hygienestandards." },
    ],
    education: [
      {
        title: "HSC (Alim Prüfung)",
        result: "Mit Auszeichnung",
        org: "Institut für Islamische Studien",
        year: "2021-22",
      },
      {
        title: "SSC (Dakhil Prüfung)",
        result: "Mit Auszeichnung",
        org: "Bildungsboard Dhaka",
        year: "2019-20",
      },
    ],
    languages: [
      { name: "Deutsch", level: "Niveau A2 (Intensives B2 Ziel)", percent: 50 },
      { name: "Englisch", level: "Niveau B2", percent: 85 },
      { name: "Bengali", level: "Muttersprache", percent: 100 },
    ],
    journal: [
      {
        id: 1,
        category: "Medizin",
        title: "Die Philosophie der Pflege",
        excerpt: "Was es bedeutet, Pfleger zu sein...",
        content: "Pflege ist mehr als ein Beruf.",
      },
      {
        id: 2,
        category: "Sprache",
        title: "Kulturen verbinden",
        excerpt: "Der Einfluss von Sprachkenntnissen...",
        content: "Deutsch zu lernen ist meine Brücke.",
      },
      {
        id: 3,
        category: "Ethik",
        title: "Ethik in der Pflege",
        excerpt: "Ethische Grundlagen...",
        content: "Disziplin und Ethik bilden das Rückgrat.",
      },
    ],
  },
};

const floatTransition = { type: "spring", stiffness: 400, damping: 17 };
const hoverEffect = { y: -5, scale: 1.02 };
const tapEffect = { scale: 0.95 };
const HIGHLIGHT_ICONS = [
  <Heart size={18} />,
  <Activity size={18} />,
  <Globe size={18} />,
  <ShieldCheck size={18} />,
];

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState("en");
  const [selectedJournal, setSelectedJournal] = useState(null);
  const t = CONTENT[lang];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-1000 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      } flex items-center justify-center p-4 relative overflow-hidden`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <motion.button
          whileHover={hoverEffect}
          whileTap={tapEffect}
          transition={floatTransition}
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="p-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-xl text-cyan-500 font-bold"
        >
          {lang === "en" ? "DE" : "EN"}
        </motion.button>
        <motion.button
          whileHover={hoverEffect}
          whileTap={tapEffect}
          transition={floatTransition}
          onClick={() => setIsDark(!isDark)}
          className="p-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-xl text-cyan-500"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>

      <motion.div
        layout
        className={`relative z-10 w-full max-w-5xl h-[90vh] md:h-[800px] backdrop-blur-3xl border rounded-[40px] flex flex-col shadow-2xl overflow-hidden transition-all duration-700 ${
          isDark
            ? "bg-slate-900/40 border-slate-800"
            : "bg-white/60 border-white/80"
        }`}
      >
        <header className="pt-8 flex flex-col items-center shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <Globe className="text-cyan-500" size={24} />
            <h2 className="text-xl font-black tracking-tighter uppercase">
              {STATIC_DATA.name}
              <span className="text-cyan-500">{STATIC_DATA.domain}</span>
            </h2>
          </motion.div>
          <nav className="flex bg-black/5 dark:bg-white/5 p-1 rounded-2xl border border-white/10 gap-1 mb-6">
            {["home", "portfolio", "journal", "contact"].map((id, i) => (
              <motion.button
                key={id}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => {
                  setActiveTab(id);
                  setSelectedJournal(null);
                }}
                className={`px-4 md:px-6 py-2 rounded-xl text-[10px] md:text-xs font-black tracking-widest transition-all relative uppercase ${
                  activeTab === id ? "text-white" : "text-slate-500"
                }`}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-cyan-600 rounded-xl shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.nav[i]}</span>
              </motion.button>
            ))}
          </nav>
        </header>

        <main className="flex-grow p-6 md:p-12 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <HomeView key="home" t={t} isDark={isDark} />
            )}
            {activeTab === "portfolio" && (
              <PortfolioView key="portfolio" t={t} isDark={isDark} />
            )}
            {activeTab === "journal" &&
              (selectedJournal ? (
                <JournalDetail
                  post={selectedJournal}
                  onBack={() => setSelectedJournal(null)}
                  isDark={isDark}
                  t={t}
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
        <footer className="p-6 text-center text-[10px] font-bold opacity-30 tracking-widest uppercase">
          {t.available} — {t.footer}
        </footer>
      </motion.div>
    </div>
  );
};

// ==========================================
// 📱 HOME VIEW (With Intense Blue Aura)
// ==========================================
const HomeView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="h-full flex flex-col items-center justify-center text-center gap-6"
  >
    <div className="relative">
      {/* Intense Glowing Aura - Inspired by your provided reference image */}
      <div className="absolute inset-[-30px] bg-blue-600 rounded-full blur-[60px] opacity-50 animate-pulse" />
      <div className="absolute inset-[-10px] bg-cyan-400 rounded-full blur-[25px] opacity-30" />

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-visible flex items-center justify-center"
      >
        {/* Glowing Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(37,99,235,0.6)]" />

        <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-4 border-white/10">
          <img
            src={STATIC_DATA.avatarUrl}
            alt={STATIC_DATA.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
    <div className="max-w-xl space-y-4 z-20">
      <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter drop-shadow-md text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
        {t.tagline}
      </h1>
      <p className="text-sm md:text-base font-medium opacity-60 max-w-md mx-auto leading-relaxed">
        {t.bio}
      </p>
    </div>
  </motion.div>
);

const PortfolioView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-12 pb-10"
  >
    <div
      className={`p-8 rounded-[32px] border ${
        isDark
          ? "bg-white/5 border-white/5"
          : "bg-blue-50/40 border-blue-100/50"
      }`}
    >
      <h3 className="text-lg font-black mb-6 flex items-center gap-3 tracking-tight">
        <Sparkles className="text-cyan-500" size={20} /> {t.whyHire}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {t.highlights.map((point, i) => (
          <motion.div
            key={i}
            whileHover={hoverEffect}
            className="flex gap-4 items-center p-4 bg-white/50 dark:bg-black/20 rounded-2xl border border-white/20 hover:border-cyan-500/30 group"
          >
            <div className="p-2 bg-cyan-500/10 text-cyan-500 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors">
              {HIGHLIGHT_ICONS[i]}
            </div>
            <span className="text-sm font-bold opacity-70">{point.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 flex items-center gap-2">
          <GraduationCap size={14} /> {t.academic}
        </h3>
        {t.education.map((edu, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 5 }}
            className="pl-6 border-l-2 border-cyan-500/20 relative py-2"
          >
            <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-cyan-500" />
            <h4 className="font-black text-sm">{edu.title}</h4>
            <p className="text-xs font-bold text-cyan-600 mt-1">
              {edu.result}{" "}
              <span className="opacity-40 font-medium ml-2">[{edu.year}]</span>
            </p>
          </motion.div>
        ))}
      </div>
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 flex items-center gap-2">
          <Languages size={14} /> {t.skills}
        </h3>
        {t.languages.map((lang, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between font-black text-[10px] uppercase tracking-wider">
              <span>{lang.name}</span>
              <span className="text-cyan-500">{lang.level}</span>
            </div>
            <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${lang.percent}%` }}
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                transition={{ duration: 1.5, ease: "easeOut" }}
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
    {t.journal.map((post) => (
      <motion.div
        key={post.id}
        whileHover={hoverEffect}
        onClick={() => onSelect(post)}
        className={`p-6 rounded-[24px] border cursor-pointer group flex flex-col gap-4 transition-all ${
          isDark
            ? "bg-white/5 border-white/5 hover:bg-blue-500/10"
            : "bg-white border-slate-100 hover:shadow-2xl"
        }`}
      >
        <span className="text-[9px] font-black px-2.5 py-1 bg-cyan-500/10 text-cyan-600 rounded-lg uppercase tracking-[0.15em] w-max">
          {post.category}
        </span>
        <h4 className="font-black text-lg group-hover:text-cyan-500 transition-colors leading-tight">
          {post.title}
        </h4>
        <p className="text-xs opacity-50 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-[10px] font-black text-cyan-500 mt-auto uppercase tracking-widest pt-4">
          {t.readMore} <ArrowRight size={12} />
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const JournalDetail = ({ post, onBack, isDark, t }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="space-y-6 max-w-2xl mx-auto pb-10"
  >
    <motion.button
      whileHover={{ x: -5 }}
      onClick={onBack}
      className="flex items-center gap-2 text-xs font-black text-cyan-500 mb-8 uppercase tracking-widest"
    >
      <ArrowLeft size={14} /> {t.backBtn}
    </motion.button>
    <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
      {post.title}
    </h2>
    <div className="h-1.5 w-16 bg-cyan-500 rounded-full mb-8" />
    <p className="text-base md:text-lg leading-relaxed font-medium opacity-80">
      {post.content}
    </p>
  </motion.div>
);

const ContactView = ({ t, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-md mx-auto pb-10"
  >
    <div className="text-center mb-10">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-[20px] flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/20"
      >
        <Mail size={24} />
      </motion.div>
      <h2 className="text-3xl font-black tracking-tight">{t.contactTitle}</h2>
      <p className="text-xs font-bold opacity-40 uppercase tracking-widest mt-2">
        {t.contactSub}
      </p>
    </div>
    <div className="flex justify-center gap-4 mb-10">
      <SocialBtn
        href={STATIC_DATA.socials.gmail}
        icon={<Mail size={20} />}
        color="hover:bg-red-500"
      />
      <SocialBtn
        href={STATIC_DATA.socials.twitter}
        icon={<Twitter size={20} />}
        color="hover:bg-sky-500"
      />
      <SocialBtn
        href={STATIC_DATA.socials.facebook}
        icon={<Facebook size={20} />}
        color="hover:bg-blue-600"
      />
      <SocialBtn
        href={STATIC_DATA.socials.youtube}
        icon={<Youtube size={20} />}
        color="hover:bg-red-600"
      />
    </div>
    <form
      action="https://formspree.io/f/xreeglpw"
      method="POST"
      className="space-y-3"
    >
      <input
        name="name"
        type="text"
        required
        placeholder={t.form.name}
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-cyan-500/30 font-bold transition-all text-sm ${
          isDark
            ? "bg-slate-800/50 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      />
      <input
        name="email"
        type="email"
        required
        placeholder={t.form.email}
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-cyan-500/30 font-bold transition-all text-sm ${
          isDark
            ? "bg-slate-800/50 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      />
      <textarea
        name="message"
        required
        placeholder={t.form.message}
        rows="3"
        className={`w-full p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-cyan-500/30 font-bold transition-all text-sm ${
          isDark
            ? "bg-slate-800/50 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      />
      <motion.button
        type="submit"
        whileHover={hoverEffect}
        whileTap={tapEffect}
        className="w-full bg-cyan-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-cyan-500/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
      >
        {t.form.btn} <Send size={16} />
      </motion.button>
    </form>
  </motion.div>
);

const SocialBtn = ({ href, icon, color }) => (
  <motion.a
    whileHover={hoverEffect}
    whileTap={tapEffect}
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`p-3.5 bg-slate-500/10 text-slate-500 rounded-xl border border-white/5 transition-all ${color} hover:text-white shadow-sm`}
  >
    {icon}
  </motion.a>
);

export default App;
