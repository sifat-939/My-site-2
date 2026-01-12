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
  ArrowUpRight,
} from "lucide-react";

// ==========================================
// 🧠 THE SMART DATA LAYER (Edit this!)
// ==========================================
const USER_DATA = {
  profile: {
    name: "Sifat Ullah",
    role: "Aspiring Health Professional",
    tagline: "Medical Precision meets Human Empathy.",
    subTagline:
      "Bridging the gap between disciplined academic study and compassionate healthcare service.",
    location: "Dhaka, Bangladesh",
    availability: "Open for Ausbildung 2026",
    avatarInitial: "S",
    avatarUrl: "/me.png",
  },
  status: {
    label: "Current Mission",
    text: "Intensive German B1 Certification",
    progress: 65, // Percentage
  },
  skills: {
    languages: [
      { name: "German (Deutsch)", level: "A2/B1", percent: 45, color: "teal" },
      { name: "English", level: "C1 (Fluent)", percent: 90, color: "blue" },
    ],
    soft: [
      { name: "Discipline", icon: "Brain", desc: "Rigorous Routine" },
      { name: "Empathy", icon: "Heart", desc: "Patient-First Mindset" },
      { name: "Adaptability", icon: "Plane", desc: "Ready to Relocate" },
    ],
  },
  experience: [
    {
      year: "2024 - Present",
      role: "Intensive German Language Student",
      org: "Language Institute Dhaka",
      desc: "Full-time immersive learning. Focus on medical vocabulary and grammar.",
    },
    {
      year: "2018 - 2022",
      role: "Alim Examination Graduate",
      org: "Islamic Studies Institute",
      desc: "Graduated with distinction. Developed strong ethics, memorization skills, and community service experience.",
    },
  ],
  // 📝 JOURNAL ENGINE: Add new entries here to auto-update the site!
  journal: [
    {
      id: 1,
      title: "The Logic of German Grammar",
      category: "Language",
      date: "Oct 24, 2025",
      readTime: "4 min read",
      excerpt:
        "Why the case system (Kasus) isn't just a hurdle, but a precise tool for clarity. My breakdown of Dativ vs Akkusativ.",
      color: "teal",
    },
    {
      id: 2,
      title: "Atomic Habits for Students",
      category: "Productivity",
      date: "Nov 12, 2025",
      readTime: "6 min read",
      excerpt:
        "Applying James Clear's 1% rule to my vocabulary retention. How I memorized 500 medical terms in 30 days.",
      color: "blue",
    },
    {
      id: 3,
      title: "Why Nursing in Germany?",
      category: "Career Vision",
      date: "Dec 01, 2025",
      readTime: "3 min read",
      excerpt:
        "It's not just about a job. It's about joining a system that values human life. My motivation for the Health Sector.",
      color: "slate",
    },
    // Example of adding a new post:
    // {
    //   id: 4,
    //   title: "My First Week in Munich (Future)",
    //   category: "Travel",
    //   ...
    // }
  ],
  contact: {
    email: "ahmed.ali@example.com",
    linkedin: "linkedin.com/in/ahmedali",
  },
};

// ==========================================
// 🎨 UI COMPONENTS
// ==========================================

// 1. Aurora Background Engine
const AuroraBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-slate-50 pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-[120px] mix-blend-multiply"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        x: [0, -30, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 40, 0],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5,
      }}
      className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply"
    />

    {/* Floating 3D Shapes */}
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-32 right-32 w-24 h-24 border border-white/40 rounded-full blur-[1px] opacity-60"
    />
    <motion.div
      animate={{ y: [0, 30, 0], rotate: [0, -45, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-32 left-32 w-16 h-16 border border-teal-300/30 rounded-xl rotate-45 blur-[1px] opacity-60"
    />
  </div>
);

// 2. Glass Container
const GlassContainer = ({ children, className = "" }) => (
  <div
    className={`
    relative bg-white/60 backdrop-blur-2xl border border-white/50 
    shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl
    ${className}
  `}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl pointer-events-none" />
    {children}
  </div>
);

// 3. 3D Button
const Button3D = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-[0_4px_14px_0_rgba(20,184,166,0.39)] hover:shadow-[0_6px_20px_rgba(20,184,166,0.23)] hover:bg-[rgba(20,184,166,0.9)]",
    secondary:
      "bg-white text-slate-700 border border-slate-100 shadow-[0_4px_14px_0_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:text-teal-600",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

// 4. Navigation Pill
const NavPill = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "home", label: "Profile" },
    { id: "portfolio", label: "Portfolio" },
    { id: "journal", label: "Journal" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white/40 shadow-sm flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${
                activeTab === tab.id
                  ? "text-slate-800"
                  : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-100"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 🚀 VIEW COMPONENTS
// ==========================================
// VIEW: HOME
const HomeView = () => {
  // স্ক্রল পজিশন ট্র্যাক করার জন্য
  const { scrollY } = useScroll();

  // প্যারালাক্স লজিক: স্ক্রল করলে ছবি এবং টেক্সট আলাদা গতিতে নড়বে
  const yText = useTransform(scrollY, [0, 500], [0, -80]);
  const yImage = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center gap-10 py-16 px-6 overflow-hidden">
      {/* আপনার প্রোফাইল ছবি (প্যারালাক্স ইফেক্ট সহ) */}
      <motion.div
        style={{ y: yImage, opacity: opacity }}
        className="relative z-0"
      >
        {/* ছবির পেছনের হালকা গ্লো (Glow) */}
        <div className="absolute inset-0 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse" />

        {/* মেইন প্রোফাইল ছবি */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full border-8 border-white shadow-2xl overflow-hidden">
          <img
            src={USER_DATA.profile.avatarUrl}
            alt={USER_DATA.profile.name}
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* ছোট ফ্লোটিং ব্যাজ */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-4 -right-2 bg-white px-4 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2"
        >
          <div className="h-2 w-2 bg-green-500 rounded-full animate-ping" />
          <span className="text-[10px] font-black text-slate-700 uppercase">
            Live Now
          </span>
        </motion.div>
      </motion.div>

      {/* টেক্সট সেকশন (ছবির বিপরীতে প্যারালাক্স হবে) */}
      <motion.div style={{ y: yText }} className="text-center space-y-4 z-10">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          {USER_DATA.profile.tagline}
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto">
          {USER_DATA.profile.subTagline}
        </p>
      </motion.div>
    </div>
  );
};

// VIEW: PORTFOLIO (CV)
const PortfolioView = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-10 py-4 px-4 md:px-12"
  >
    {/* Header */}
    <div className="flex justify-between items-end border-b border-slate-100 pb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Curriculum Vitae</h2>
        <p className="text-slate-500 text-sm">
          Professional Profile for Recruiters
        </p>
      </div>
      <Button3D
        variant="secondary"
        className="hidden md:flex !py-2 !px-4 text-xs"
      >
        <Download size={14} /> Download PDF
      </Button3D>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* LEFT: Skills */}
      <div className="space-y-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Globe size={16} /> Language Proficiency
        </h3>

        <div className="space-y-6">
          {USER_DATA.skills.languages.map((lang, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between mb-2 text-sm font-bold text-slate-700">
                <span>{lang.name}</span>
                <span className={`text-${lang.color}-600`}>{lang.level}</span>
              </div>
              {/* 3D Progress Bar Container */}
              <div className="h-5 bg-slate-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] p-1">
                {/* Glowing Tube */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.percent}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${
                    lang.percent > 50
                      ? "from-teal-400 to-cyan-500"
                      : "from-slate-400 to-slate-500"
                  } shadow-[0_0_12px_rgba(20,184,166,0.4)] relative`}
                >
                  <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 pt-4">
          <User size={16} /> Soft Skills
        </h3>
        <div className="grid gap-3">
          {USER_DATA.skills.soft.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white hover:bg-white hover:shadow-md transition-all"
            >
              <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                {skill.icon === "Brain" && <Brain size={16} />}
                {skill.icon === "Heart" && <Heart size={16} />}
                {skill.icon === "Plane" && <Plane size={16} />}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{skill.name}</p>
                <p className="text-xs text-slate-500">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Timeline */}
      <div className="space-y-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <BookOpen size={16} /> Education & Journey
        </h3>
        <div className="relative border-l-2 border-slate-200 ml-3 space-y-10 pl-8 pb-4">
          {USER_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-white bg-slate-200 group-hover:bg-teal-500 group-hover:scale-110 transition-all shadow-sm"></div>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded mb-2 inline-block">
                {exp.year}
              </span>
              <h4 className="text-lg font-bold text-slate-900">{exp.role}</h4>
              <p className="text-sm font-semibold text-slate-500 mb-2">
                {exp.org}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Block */}
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 italic text-slate-600 text-sm relative">
          <span className="absolute top-4 left-4 text-4xl text-slate-200 font-serif leading-none">
            “
          </span>
          <p className="relative z-10 px-4">
            The discipline learned in religious studies and the empathy required
            for community service are the exact pillars needed for exceptional
            patient care.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// VIEW: JOURNAL (Dynamic Mapping)
const JournalView = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="py-4 px-4"
  >
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold text-slate-800">My Journal</h2>
      <p className="text-slate-500 text-sm">
        Thoughts on Language, Productivity & Future.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {USER_DATA.journal.map((post) => (
        <motion.div
          key={post.id}
          whileHover={{ y: -5 }}
          className="group relative flex flex-col h-full bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          {/* Color Strip */}
          <div className={`h-1.5 w-full bg-${post.color}-500`}></div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <span
                className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-${post.color}-50 text-${post.color}-700`}
              >
                {post.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar size={10} /> {post.date}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-teal-700 transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
              <span className="text-xs text-slate-400 font-medium">
                {post.readTime}
              </span>
              <button
                className={`text-sm font-bold text-${post.color}-600 flex items-center gap-1 group-hover:gap-2 transition-all`}
              >
                Read <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// VIEW: CONTACT
const ContactView = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="py-8 px-4 max-w-lg mx-auto"
  >
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
        <Mail size={24} className="text-teal-600" />
      </div>
      <h2 className="text-2xl font-bold text-slate-800">Let's Connect</h2>
      <p className="text-slate-500 text-sm mt-2">
        Ready to discuss Ausbildung opportunities or collaborations.
      </p>
    </div>

    <form className="space-y-4 bg-white/50 p-6 rounded-2xl border border-white">
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1 block">
          Name
        </label>
        <input
          type="text"
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium text-slate-800"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1 block">
          Email
        </label>
        <input
          type="email"
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium text-slate-800"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1 block">
          Message
        </label>
        <textarea
          rows="3"
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium text-slate-800"
        ></textarea>
      </div>
      <Button3D className="w-full">Send Message</Button3D>
    </form>

    <div className="mt-8 pt-6 border-t border-slate-200/50 flex justify-center gap-6">
      <a
        href={`https://${USER_DATA.contact.linkedin}`}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors"
      >
        <Linkedin size={18} /> LinkedIn
      </a>
      <a
        href={`mailto:${USER_DATA.contact.email}`}
        className="flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold text-sm transition-colors"
      >
        <Mail size={18} /> Email
      </a>
    </div>
  </motion.div>
);

// ==========================================
// 🚀 MAIN APP SHELL
// ==========================================
const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 1. Ambient Background */}
      <AuroraBackground />

      {/* 2. Main Floating Container */}
      <GlassContainer className="w-full max-w-5xl min-h-[85vh] md:min-h-[600px] flex flex-col relative z-10 animate-fade-in-up">
        {/* Navigation Header */}
        <header className="pt-8 px-6 md:px-12 flex flex-col items-center">
          <div
            className="text-xl font-extrabold tracking-tight text-slate-900 mb-6 cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            {USER_DATA.profile.name}
            <span className="text-teal-500">.</span>
          </div>
          <NavPill activeTab={activeTab} setActiveTab={setActiveTab} />
        </header>

        {/* Dynamic Content Area */}
        <main className="flex-grow relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HomeView key="home" />}
            {activeTab === "portfolio" && <PortfolioView key="portfolio" />}
            {activeTab === "journal" && <JournalView key="journal" />}
            {activeTab === "contact" && <ContactView key="contact" />}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-xs text-slate-400 font-medium">
          &copy; 2026 {USER_DATA.profile.name}. Precision & Care.
        </footer>
      </GlassContainer>
    </div>
  );
};

export default App;
