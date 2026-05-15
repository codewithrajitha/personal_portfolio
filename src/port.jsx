import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════
   PALETTE
═══════════════════════════════════════ */
const C = {
  bg:       "#ffffff",
  bg2:      "#f8fafc",
  bg3:      "#f1f5f9",
  panel:    "#ffffff",
  border:   "#e2e8f0",
  gold:     "#c9a84c",
  goldL:    "#e8c96e",
  goldD:    "#9a7a30",
  goldPale: "#fdf6e7",
  text:     "#0f172a",
  muted:    "#475569",
  dim:      "#94a3b8",
  accent:   "#1e40af",
};

/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
const ME = {
  name: "Rajitha R",
  role: "Software Developer",
  email: "rajitharajan610@gmail.com",
  phone: "+91 8606454877",
  location: "Thiruvilwamala, Thrissur",
  github: "https://github.com/codewithrajitha",
  linkedin: "https://linkedin.com/in/rajitha-developer",
  bio: "Software Developer specialising in Python, Django, and MERN stack. I build robust web applications, REST APIs, and backend systems — driven by a passion for clean architecture and efficient solutions.",
  skills: [
    { label: "Frontend",      items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js"],                    pct: 85 },
    { label: "Backend",       items: ["Python", "Django", "Node.js", "Express.js", "REST API"],           pct: 90 },
    { label: "Database",      items: ["MySQL", "MongoDB"],                                                pct: 80 },
    { label: "Mobile & More", items: ["Flutter", "Payment Gateways", "Maps API", "AI Integration"],      pct: 70 },
  ],
  experience: [
    {
      title: "Software Associate",
    //   subtitle: "Python / Django Developer",
      company: "Regional Technologies",
      period: "2025",
      location: "Kochi, Ernakulam",
      bullets: [
        "Developed and maintained production web applications with Python & Django",
        "Managed relational and document databases — MySQL & MongoDB",
        "Contributed to full-stack features across the MERN stack",
        "Mentored internship students and led academic project reviews",
      ],
    },
  ],
  training: [
    {
      title: "MERN Stack Development",
      org: "Camerin Folks Pvt. Ltd",
      period: "2024  ·  Kochi",
      bullets: [
        "Professional training in MongoDB, Express.js, React.js, Node.js",
        "Built and deployed full-stack web applications end-to-end",
        "Developed REST APIs and responsive, component-driven UIs",
      ],
    },
  ],
  education: [
    { degree: "BSc. Computer Science", school: "College of Applied Science Chelakkara", year: "2021 – 2024", place: "Pazhayannur, Thrissur" },
    { degree: "Higher Secondary",       school: "GHSS Pazhayannur",                    year: "2019 – 2021", place: "Pazhayannur, Thrissur" },
    { degree: "High School (SSLC)",     school: "GVHSS Thiruvilwamala",                year: "2018 – 2019", place: "Thiruvilwamala, Thrissur" },
  ],
  languages: [
    { name: "English",   pct: 95 },
    { name: "Malayalam", pct: 100 },
    { name: "Tamil",     pct: 75 },
  ],
  stats: [
    { value: "1+",  label: "Years Experience", icon: "⚡" },
    { value: "10+", label: "Projects Built",   icon: "🚀" },
    { value: "5+",  label: "Technologies",     icon: "🛠" },
    { value: "3",   label: "Languages",        icon: "🌐" },
  ],
};

/* ═══════════════════════════════════════
   GLOBAL CSS
═══════════════════════════════════════ */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

@keyframes float-slow  { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(3deg)} }
@keyframes float-med   { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(-4deg)} }
@keyframes spin-slow   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes spin-rev    { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
@keyframes pulse-gold  { 0%,100%{opacity:.25} 50%{opacity:.55} }
@keyframes shimmer     { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
@keyframes bar-fill    { from{width:0} to{width:var(--w)} }
@keyframes bounce-in   { 0%{transform:scale(0.7);opacity:0} 70%{transform:scale(1.05)} 100%{transform:scale(1);opacity:1} }
@keyframes particle    { 0%{transform:translateY(0) translateX(0);opacity:.7} 100%{transform:translateY(-120px) translateX(var(--dx));opacity:0} }
@keyframes line-draw   { from{stroke-dashoffset:1000} to{stroke-dashoffset:0} }
@keyframes fade-up     { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }

.nav-link:hover         { color: #c9a84c !important; }
.skill-tag:hover        { background: #fdf6e7 !important; border-color: #c9a84c88 !important; color: #9a7a30 !important; transform: translateY(-2px); }
.stat-card:hover        { transform: translateY(-6px) scale(1.03); box-shadow: 0 20px 50px rgba(201,168,76,0.2) !important; }
.exp-card:hover         { box-shadow: 0 12px 40px rgba(201,168,76,0.15) !important; border-color: #c9a84c66 !important; }
.edu-row:hover          { background: #fdf6e7 !important; }
.cta-btn:hover          { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(201,168,76,0.4) !important; }
.ghost-btn:hover        { background: #fdf6e7 !important; border-color: #c9a84c !important; color: #9a7a30 !important; }
.contact-pill:hover     { border-color: #c9a84c !important; color: #c9a84c !important; }

::-webkit-scrollbar       { width: 5px; }
::-webkit-scrollbar-track { background: #f8fafc; }
::-webkit-scrollbar-thumb { background: #c9a84c55; border-radius: 3px; }
`;

/* ═══════════════════════════════════════
   HOOKS
═══════════════════════════════════════ */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, v];
}

function Fade({ children, delay = 0, y = 28 }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : `translateY(${y}px)`, transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════
   PARTICLES (hero bg)
═══════════════════════════════════════ */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 8,
    dur: 3 + Math.random() * 4,
    delay: Math.random() * 4,
    dx: (Math.random() - 0.5) * 60,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute",
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.gold}, ${C.goldD})`,
          opacity: 0,
          "--dx": `${p.dx}px`,
          animation: `particle ${p.dur}s ${p.delay}s ease-out infinite`,
        }} />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   DECORATIVE SVG RINGS (hero right)
═══════════════════════════════════════ */
function HeroRings() {
  return (
    <div style={{ position: "absolute", right: "-60px", top: "50%", transform: "translateY(-50%)", width: 520, height: 520, pointerEvents: "none", zIndex: 0 }}>
      {/* outer ring */}
      <svg viewBox="0 0 520 520" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", animation: "spin-slow 40s linear infinite" }}>
        <circle cx="260" cy="260" r="240" fill="none" stroke={C.gold} strokeWidth="1" strokeDasharray="12 18" opacity=".3" />
      </svg>
      {/* middle ring */}
      <svg viewBox="0 0 520 520" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", animation: "spin-rev 28s linear infinite" }}>
        <circle cx="260" cy="260" r="185" fill="none" stroke={C.gold} strokeWidth="1.5" strokeDasharray="4 20" opacity=".25" />
        {[0, 60, 120, 180, 240, 300].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const cx = 260 + 185 * Math.cos(rad);
          const cy = 260 + 185 * Math.sin(rad);
          return <circle key={deg} cx={cx} cy={cy} r="5" fill={C.gold} opacity=".5" />;
        })}
      </svg>
      {/* inner pulse */}
      <svg viewBox="0 0 520 520" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", animation: "pulse-gold 3s ease-in-out infinite" }}>
        <circle cx="260" cy="260" r="120" fill={`${C.gold}08`} stroke={C.gold} strokeWidth="1" opacity=".4" />
      </svg>
      {/* avatar circle bg */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 200, height: 200, borderRadius: "50%", background: `linear-gradient(135deg, ${C.goldPale}, #fff)`, border: `3px solid ${C.gold}55`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 60px ${C.gold}30, 0 20px 60px rgba(0,0,0,0.08)` }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 56, color: C.gold, letterSpacing: "-.04em" }}>RR</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   NAV
═══════════════════════════════════════ */
function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(window.scrollY > 60); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 60px", background: solid ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: solid ? "blur(20px)" : "none", borderBottom: solid ? `1px solid ${C.border}` : "none", transition: "all .35s" }}>
      <a href="#about" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.text, letterSpacing: "-.02em" }}>Rajitha</span>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.gold }}>.</span>
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {["About","Skills","Experience","Education","Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, textDecoration: "none", letterSpacing: ".06em", transition: "color .2s" }}>{l}</a>
        ))}
        <a href={`mailto:${ME.email}`} className="cta-btn" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, color: "#fff", background: `linear-gradient(135deg, ${C.gold}, ${C.goldL})`, padding: "8px 22px", borderRadius: 100, textDecoration: "none", letterSpacing: ".06em", transition: "all .2s", boxShadow: `0 4px 14px ${C.gold}44` }}>HIRE ME</a>
      </nav>
    </header>
  );
}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
function Hero() {
  const [v, setV] = useState(false);
  useEffect(() => { setTimeout(() => setV(true), 100); }, []);
  const t = (d) => ({ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: `all .8s ease ${d}ms` });

  return (
    <section id="about" style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", padding: "100px 60px 80px", position: "relative", overflow: "hidden" }}>

      {/* bg mesh */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 20% 50%, ${C.gold}0a 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${C.goldPale} 0%, transparent 45%), radial-gradient(circle at 60% 80%, #e0f0ff18 0%, transparent 40%)`, zIndex: 0 }} />
      {/* dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, ${C.border} 1px, transparent 1px)`, backgroundSize: "36px 36px", opacity: .5, zIndex: 0 }} />

      <Particles />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap" }}>

        {/* LEFT */}
        <div style={{ flex: "1 1 400px" }}>
          {/* badge */}
          <div style={{ ...t(0), display: "inline-flex", alignItems: "center", gap: 10, background: C.goldPale, border: `1px solid ${C.gold}55`, borderRadius: 100, padding: "7px 18px", marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.green || C.goldD, animation: "pulse-gold 2s infinite" }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.goldD, fontWeight: 600, letterSpacing: ".1em" }}>AVAILABLE FOR WORK</span>
          </div>

          <h1 style={{ ...t(80), fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px,7vw,82px)", color: C.text, lineHeight: .9, letterSpacing: "-.04em", marginBottom: 6 }}>RAJITHA</h1>
          <div style={{ ...t(130), display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px,7vw,82px)", lineHeight: .9, letterSpacing: "-.04em", WebkitTextStroke: `2.5px ${C.gold}`, color: "transparent" }}>R</h1>
            <div style={{ flex: 1, height: 3, background: `linear-gradient(90deg, ${C.gold}, transparent)`, borderRadius: 2 }} />
          </div>

          <div style={{ ...t(160), display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldL})`, borderRadius: 6, padding: "6px 14px" }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: ".12em" }}>SOFTWARE DEVELOPER</span>
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.muted }}>Python · Django · MERN</div>
          </div>

          <p style={{ ...t(200), fontFamily: "'Outfit', sans-serif", fontSize: 16, color: C.muted, lineHeight: 1.85, maxWidth: 460, marginBottom: 32, fontWeight: 300 }}>{ME.bio}</p>

          {/* contact chips */}
          <div style={{ ...t(240), display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
            {[{ icon: "📍", val: ME.location }, { icon: "✉️", val: ME.email }, { icon: "📞", val: ME.phone }].map(({ icon, val }) => (
              <span key={val} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.muted, background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 100, padding: "5px 14px" }}>
                <span>{icon}</span>{val}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ ...t(280), display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={`mailto:${ME.email}`} className="cta-btn" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: "#fff", background: `linear-gradient(135deg, ${C.gold}, ${C.goldL})`, padding: "13px 30px", borderRadius: 100, textDecoration: "none", letterSpacing: ".06em", boxShadow: `0 6px 20px ${C.gold}44`, transition: "all .2s" }}>
              GET IN TOUCH →
            </a>
            <a href={ME.github} target="_blank" rel="noreferrer" className="ghost-btn" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: C.muted, border: `1.5px solid ${C.border}`, padding: "12px 24px", borderRadius: 100, textDecoration: "none", letterSpacing: ".06em", transition: "all .2s" }}>GitHub ↗</a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" className="ghost-btn" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: C.muted, border: `1.5px solid ${C.border}`, padding: "12px 24px", borderRadius: 100, textDecoration: "none", letterSpacing: ".06em", transition: "all .2s" }}>LinkedIn ↗</a>
          </div>
        </div>

        {/* RIGHT — decorative rings + card */}
        <div style={{ ...t(160), position: "relative", flex: "0 0 auto", width: 520, height: 480 }}>
          <HeroRings />
          {/* floating info card */}
          <div style={{ position: "absolute", bottom: 10, left: 0, background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "16px 20px", boxShadow: "0 12px 40px rgba(0,0,0,0.08)", animation: "float-med 5s ease-in-out infinite", minWidth: 180 }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: C.muted, marginBottom: 4 }}>Top Skills</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["Python","React","Django"].map(s => (
                <span key={s} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: C.goldD, background: C.goldPale, border: `1px solid ${C.gold}44`, padding: "2px 8px", borderRadius: 4, fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
          {/* floating exp badge */}
          <div style={{ position: "absolute", top: 40, right: 20, background: `linear-gradient(135deg, ${C.gold}, ${C.goldL})`, borderRadius: 16, padding: "14px 18px", boxShadow: `0 12px 30px ${C.gold}44`, animation: "float-slow 6s ease-in-out infinite", textAlign: "center" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff" }}>1+</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.85)", letterSpacing: ".08em" }}>YRS EXP</div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: .5 }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: C.muted, letterSpacing: ".1em" }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: `linear-gradient(${C.gold}, transparent)` }} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   STATS BAND
═══════════════════════════════════════ */
function StatsBand() {
  return (
    <div style={{ background: `linear-gradient(135deg, ${C.text}, #1e293b)`, padding: "40px 60px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
        {ME.stats.map((s, i) => (
          <Fade key={s.label} delay={i * 80}>
            <div className="stat-card" style={{ textAlign: "center", transition: "all .3s", cursor: "default" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 38, color: C.gold, letterSpacing: "-.04em", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#94a3b8", letterSpacing: ".1em", marginTop: 4 }}>{s.label.toUpperCase()}</div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SKILLS
═══════════════════════════════════════ */
function SkillBar({ label, pct, items, delay, color }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, padding: "26px 24px", transition: "all .3s" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: C.text }}>{label}</span>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.gold, fontWeight: 600, opacity: v ? 1 : 0, transition: "opacity .5s ease 0.8s" }}>{pct}%</span>
      </div>
      {/* bar */}
      <div style={{ height: 6, background: C.bg3, borderRadius: 100, marginBottom: 16, overflow: "hidden" }}>
        <div style={{ height: "100%", width: v ? `${pct}%` : "0%", background: `linear-gradient(90deg, ${C.goldD}, ${C.gold}, ${C.goldL})`, borderRadius: 100, transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`, boxShadow: `0 0 10px ${C.gold}66` }} />
      </div>
      {/* pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {items.map(it => (
          <span key={it} className="skill-tag" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: C.muted, background: C.bg2, border: `1px solid ${C.border}`, padding: "4px 11px", borderRadius: 6, cursor: "default", transition: "all .2s" }}>{it}</span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ background: C.bg2, padding: "100px 60px", position: "relative", overflow: "hidden" }}>
      {/* bg decoration */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${C.gold}0f, transparent)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(circle, ${C.gold}0a, transparent)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Fade><Label>Skills</Label></Fade>
        <Fade delay={60}>
          <h2 style={H2S}>Technical <GoldStroke>Expertise</GoldStroke></h2>
        </Fade>

        {/* radar/visual  */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 16 }}>
          {ME.skills.map((s, i) => (
            <Fade key={s.label} delay={i * 90}>
              <SkillBar label={s.label} items={s.items} pct={s.pct} delay={i * 100} />
            </Fade>
          ))}
        </div>

        {/* tech logos row */}
        <Fade delay={300}>
          <div style={{ marginTop: 48, padding: "28px 32px", background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            {[
              { label: "Python",  bg: "#3776ab22", color: "#3776ab" },
              { label: "Django",  bg: "#09230622", color: "#092306" },
              { label: "React",   bg: "#61dafb22", color: "#0ea5e9" },
              { label: "Node.js", bg: "#33993322", color: "#339933" },
              { label: "MongoDB", bg: "#47a24822", color: "#47a248" },
              { label: "MySQL",   bg: "#00758f22", color: "#00758f" },
              { label: "Flutter", bg: "#54c5f822", color: "#0468d7" },
            ].map(t => (
              <div key={t.label} style={{ background: t.bg, border: `1px solid ${t.color}44`, borderRadius: 10, padding: "8px 18px", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, color: t.color }}>
                {t.label}
              </div>
            ))}
          </div>
        </Fade>

        {/* language proficiency */}
        <Fade delay={350}>
          <div style={{ marginTop: 20, padding: "28px 32px", background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16 }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 20, letterSpacing: ".05em" }}>LANGUAGE PROFICIENCY</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ME.languages.map((lang, i) => (
                <LangBar key={lang.name} lang={lang} delay={i * 80} />
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function LangBar({ lang, delay }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, minWidth: 80 }}>{lang.name}</span>
      <div style={{ flex: 1, height: 5, background: C.bg3, borderRadius: 100, overflow: "hidden" }}>
        <div style={{ height: "100%", width: v ? `${lang.pct}%` : "0%", background: `linear-gradient(90deg, ${C.goldD}, ${C.goldL})`, borderRadius: 100, transition: `width 1s ease ${delay}ms` }} />
      </div>
      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.dim, minWidth: 32 }}>{lang.pct}%</span>
    </div>
  );
}

/* ═══════════════════════════════════════
   EXPERIENCE — Timeline
═══════════════════════════════════════ */
function Experience() {
  return (
    <section id="experience" style={{ background: C.bg, padding: "100px 60px", position: "relative" }}>
      {/* decorative vertical line left */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(${C.gold}00, ${C.gold}33, ${C.gold}00)` }} />

      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Fade><Label>Experience</Label></Fade>
        <Fade delay={60}><h2 style={H2S}>Professional <GoldStroke>Journey</GoldStroke></h2></Fade>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 48 }}>
          {/* vertical axis */}
          <div style={{ position: "absolute", left: 16, top: 8, bottom: 0, width: 2, background: `linear-gradient(${C.gold}, ${C.border})` }} />

          {ME.experience.map((e, i) => (
            <Fade key={i} delay={100}>
              <div style={{ position: "relative", marginBottom: 32 }}>
                {/* dot */}
                <div style={{ position: "absolute", left: -40, top: 20, width: 16, height: 16, borderRadius: "50%", background: C.gold, border: `3px solid #fff`, boxShadow: `0 0 0 4px ${C.gold}44`, zIndex: 1 }} />

                <div className="exp-card" style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", transition: "all .3s", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                  {/* header */}
                  <div style={{ background: `linear-gradient(135deg, ${C.goldPale}, #fff)`, padding: "22px 32px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: `linear-gradient(135deg,${C.goldD},${C.gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💼</div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 19, color: C.text }}>{e.title}</h3>
                      </div>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, marginLeft: 46 }}>{e.subtitle} · <span style={{ color: C.gold, fontWeight: 600 }}>{e.company}</span></p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.goldD, background: C.goldPale, border: `1px solid ${C.gold}44`, padding: "5px 16px", borderRadius: 100, display: "block", marginBottom: 4 }}>{e.period}</span>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: C.dim }}>📍 {e.location}</span>
                    </div>
                  </div>
                  {/* bullets */}
                  <div style={{ padding: "22px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {e.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ))}

          {/* Training */}
          {ME.training.map((c, i) => (
            <Fade key={i} delay={180}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: -40, top: 20, width: 16, height: 16, borderRadius: "50%", background: "#fff", border: `2px solid ${C.gold}`, boxShadow: `0 0 0 4px ${C.gold}22`, zIndex: 1 }} />
                <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.gold}`, borderRadius: "0 12px 12px 0", padding: "22px 28px", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 16 }}>🎓</span>
                        <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{c.title}</h4>
                      </div>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.muted, marginLeft: 24 }}>{c.org}</p>
                    </div>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.gold }}>{c.period}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginLeft: 24 }}>
                    {c.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: C.gold, fontSize: 8, marginTop: 5, flexShrink: 0 }}>◆</span>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   EDUCATION
═══════════════════════════════════════ */
function Education() {
  return (
    <section id="education" style={{ background: C.bg2, padding: "100px 60px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Fade><Label>Education</Label></Fade>
        <Fade delay={60}><h2 style={H2S}>Academic <GoldStroke>Background</GoldStroke></h2></Fade>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ME.education.map((e, i) => (
            <Fade key={i} delay={i * 90}>
              <div className="edu-row" style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 28px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", transition: "all .25s", cursor: "default" }}>
                {/* number circle */}
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: i === 0 ? `linear-gradient(135deg,${C.goldD},${C.gold})` : C.bg3, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: i === 0 ? `0 6px 20px ${C.gold}44` : "none" }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: i === 0 ? "#fff" : C.dim }}>0{i + 1}</span>
                </div>
                {/* icon */}
                <div style={{ width: 40, height: 40, background: i === 0 ? C.goldPale : C.bg3, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {i === 0 ? "🎓" : i === 1 ? "📚" : "🏫"}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 3 }}>{e.degree}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted }}>{e.school}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, color: i === 0 ? C.gold : C.muted }}>{e.year}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: C.dim }}>📍 {e.place}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CONTACT
═══════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" style={{ background: C.bg, padding: "110px 60px", position: "relative", overflow: "hidden" }}>
      {/* decorative SVG */}
      <svg style={{ position: "absolute", top: 0, left: 0, right: 0, width: "100%", height: 8, display: "block" }}>
        <defs><linearGradient id="gline" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="transparent" /><stop offset="50%" stopColor={C.gold} /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
        <rect width="100%" height="3" fill="url(#gline)" />
      </svg>

      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse, ${C.gold}0a 0%, transparent 65%)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <Fade><Label center>Contact</Label></Fade>
        <Fade delay={60}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", color: C.text, lineHeight: 1.0, letterSpacing: "-.04em", margin: "12px 0 16px" }}>
            LET'S BUILD<br /><span style={{ WebkitTextStroke: `2.5px ${C.gold}`, color: "transparent" }}>TOGETHER</span>
          </h2>
        </Fade>
        <Fade delay={100}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: C.muted, marginBottom: 44, maxWidth: 440, margin: "0 auto 44px", lineHeight: 1.75 }}>
            Open to full-time roles, freelance projects, and collaborations. Let's create something remarkable.
          </p>
        </Fade>
        <Fade delay={140}>
          <a href={`mailto:${ME.email}`} className="cta-btn" style={{ display: "inline-block", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(15px,2.5vw,20px)", color: "#fff", background: `linear-gradient(135deg,${C.goldD},${C.gold},${C.goldL})`, padding: "16px 40px", borderRadius: 100, textDecoration: "none", marginBottom: 48, boxShadow: `0 8px 30px ${C.gold}55`, transition: "all .2s", letterSpacing: ".02em" }}>
            ✉ SEND ME A MESSAGE
          </a>
        </Fade>
        <Fade delay={180}>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {[["🐱 GitHub", ME.github], ["💼 LinkedIn", ME.linkedin], ["📞 Call", `tel:${ME.phone}`]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-pill"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, border: `1.5px solid ${C.border}`, padding: "10px 22px", borderRadius: 100, textDecoration: "none", letterSpacing: ".04em", transition: "all .2s" }}>
                {label}
              </a>
            ))}
          </div>
        </Fade>
      </div>

      {/* footer */}
      <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 80, paddingTop: 28, textAlign: "center" }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: C.dim }}>© 2025 Rajitha R · Designed & Built with React · <span style={{ color: C.gold }}>♥</span></p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   ATOMS
═══════════════════════════════════════ */
const H2S = { fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px,4.5vw,52px)", color: C.text, margin: "10px 0 44px", lineHeight: 1.0, letterSpacing: "-.04em" };

function Label({ children, center }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, justifyContent: center ? "center" : "flex-start" }}>
      <div style={{ width: 28, height: 2, background: `linear-gradient(90deg,${C.gold},${C.goldL})`, borderRadius: 2 }} />
      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: C.gold, letterSpacing: ".2em", fontWeight: 600 }}>{children.toUpperCase()}</span>
      <div style={{ width: 28, height: 2, background: `linear-gradient(90deg,${C.goldL},transparent)`, borderRadius: 2 }} />
    </div>
  );
}

function GoldStroke({ children }) {
  return <span style={{ WebkitTextStroke: `2px ${C.gold}`, color: "transparent" }}>{children}</span>;
}

/* ═══════════════════════════════════════
   ROOT
═══════════════════════════════════════ */
export default function Portfolio() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <StatsBand />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}