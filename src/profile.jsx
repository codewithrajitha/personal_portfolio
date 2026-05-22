// import { useState, useEffect, useRef } from "react";

// /* ─────────────────────────────────────────
//    DATA
// ───────────────────────────────────────── */
// const ME = {
//   name: "Rajitha R",
//   role: "Software Developer",
//   email: "rajitharajan610@gmail.com",
//   phone: "+91 8606454877",
//   location: "Thiruvilwamala, Thrissur",
//   github: "https://github.com/codewithrajitha",
//   linkedin: "https://linkedin.com/in/rajitha-developer",
//   bio: "Software Developer specialising in Python, Django, and MERN stack. I build robust web applications, REST APIs, and backend systems — driven by a passion for clean architecture and efficient solutions.",
//   skills: [
//     { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js"] },
//     { label: "Backend",  items: ["Python", "Django", "Node.js", "Express.js", "REST API"] },
//     { label: "Database", items: ["MySQL", "MongoDB"] },
//     { label: "Mobile & More", items: ["Flutter", "Payment Gateways", "Maps API", "AI Integration"] },
//   ],
//   experience: [
//     {
//       title: "Software Associate",
//       subtitle: "Python / Django Developer",
//       company: "Regional Technologies",
//       period: "2025",
//       location: "Kochi, Ernakulam",
//       bullets: [
//         "Developed and maintained production web applications with Python & Django",
//         "Managed relational and document databases — MySQL & MongoDB",
//         "Contributed to full-stack features across the MERN stack",
//         "Mentored internship students and led academic project reviews",
//       ],
//     },
//   ],
//   training: [
//     {
//       title: "MERN Stack Development",
//       org: "Camerin Folks Pvt. Ltd",
//       period: "2024  ·  Kochi",
//       bullets: [
//         "Professional training in MongoDB, Express.js, React.js, Node.js",
//         "Built and deployed full-stack web applications end-to-end",
//         "Developed REST APIs and responsive, component-driven UIs",
//       ],
//     },
//   ],
//   education: [
//     { degree: "BSc. Computer Science", school: "College of Applied Science Chelakkara", year: "2021 – 2024", place: "Pazhayannur, Thrissur" },
//     { degree: "Higher Secondary",       school: "GHSS Pazhayannur",                    year: "2019 – 2021", place: "Pazhayannur, Thrissur" },
//     { degree: "High School (SSLC)",     school: "GVHSS Thiruvilwamala",                year: "2018 – 2019", place: "Thiruvilwamala, Thrissur" },
//   ],
//   languages: ["English", "Malayalam", "Tamil"],
// };

// /* palette */
// const C = {
//   navy:    "#0b1628",
//   navy2:   "#0f1f38",
//   navy3:   "#162540",
//   border:  "#1e3050",
//   gold:    "#c9a84c",
//   goldL:   "#e2c97e",
//   goldD:   "#9a7a30",
//   text:    "#e8edf5",
//   muted:   "#7a90b0",
//   dim:     "#3a5070",
// };

// /* ─────────────────────────────────────────
//    HOOKS
// ───────────────────────────────────────── */
// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [v, setV] = useState(false);
//   useEffect(() => {
//     const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold });
//     if (ref.current) io.observe(ref.current);
//     return () => io.disconnect();
//   }, []);
//   return [ref, v];
// }

// function Fade({ children, delay = 0, x = 0, y = 20 }) {
//   const [ref, v] = useInView();
//   return (
//     <div ref={ref} style={{
//       opacity: v ? 1 : 0,
//       transform: v ? "none" : `translate(${x}px,${y}px)`,
//       transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
//     }}>
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    NAV
// ───────────────────────────────────────── */
// const NAV_LINKS = ["About", "Skills", "Experience", "Education", "Contact"];

// function Nav() {
//   const [solid, setSolid] = useState(false);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const fn = () => setSolid(window.scrollY > 60);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);
//   return (
//     <header style={{
//       position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
//       height: 68,
//       background: solid ? `rgba(11,22,40,0.95)` : "transparent",
//       backdropFilter: solid ? "blur(16px)" : "none",
//       borderBottom: solid ? `1px solid ${C.border}` : "1px solid transparent",
//       transition: "all .3s",
//       display: "flex", alignItems: "center", justifyContent: "space-between",
//       padding: "0 60px",
//     }}>
//       {/* wordmark */}
//       <a href="#about" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 1 }}>
//         <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.text, letterSpacing: "-.02em" }}>Rajitha</span>
//         <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.gold }}>.</span>
//       </a>
//       {/* links */}
//       <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
//         {NAV_LINKS.map(l => (
//           <a key={l} href={`#${l.toLowerCase()}`}
//             style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 400, color: C.muted, textDecoration: "none", letterSpacing: ".06em", transition: "color .2s" }}
//             onMouseEnter={e => e.target.style.color = C.goldL}
//             onMouseLeave={e => e.target.style.color = C.muted}
//           >{l}</a>
//         ))}
//         <a href={`mailto:${ME.email}`} style={{
//           fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600,
//           color: C.navy, background: `linear-gradient(135deg, ${C.gold}, ${C.goldL})`,
//           padding: "8px 22px", borderRadius: 4, textDecoration: "none", letterSpacing: ".06em",
//         }}>HIRE ME</a>
//       </nav>
//     </header>
//   );
// }

// /* ─────────────────────────────────────────
//    HERO
// ───────────────────────────────────────── */
// function Hero() {
//   const [v, setV] = useState(false);
//   useEffect(() => { setTimeout(() => setV(true), 120); }, []);
//   const t = (d) => ({ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(22px)", transition: `all .75s ease ${d}ms` });

//   return (
//     <section id="about" style={{
//       minHeight: "100vh", background: C.navy,
//       display: "flex", flexDirection: "column", justifyContent: "center",
//       padding: "100px 60px 80px", position: "relative", overflow: "hidden",
//     }}>
//       {/* grid lines */}
//       <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.border}33 1px, transparent 1px), linear-gradient(90deg, ${C.border}33 1px, transparent 1px)`, backgroundSize: "80px 80px", zIndex: 0 }} />
//       {/* glow */}
//       <div style={{ position: "absolute", top: "20%", left: "55%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${C.gold}18 0%, transparent 65%)`, zIndex: 0, pointerEvents: "none" }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", gap: 80, alignItems: "center", flexWrap: "wrap" }}>

//         {/* LEFT */}
//         <div style={{ flex: "1 1 420px" }}>
//           {/* eyebrow */}
//           <div style={{ ...t(0), display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
//             <div style={{ width: 40, height: 2, background: `linear-gradient(90deg,${C.gold},${C.goldL})` }} />
//             <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: C.gold, letterSpacing: ".2em", fontWeight: 600 }}>SOFTWARE DEVELOPER</span>
//           </div>

//           <h1 style={{ ...t(80), fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px,7vw,88px)", color: C.text, margin: "0 0 4px", lineHeight: .92, letterSpacing: "-.04em" }}>
//             RAJITHA
//           </h1>
//           <h1 style={{ ...t(130), fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px,7vw,88px)", margin: "0 0 36px", lineHeight: .92, letterSpacing: "-.04em", WebkitTextStroke: `2px ${C.gold}`, color: "transparent" }}>
//             R
//           </h1>

//           <p style={{ ...t(200), fontFamily: "'Outfit', sans-serif", fontSize: 16, color: C.muted, lineHeight: 1.85, maxWidth: 480, marginBottom: 40, fontWeight: 300 }}>
//             {ME.bio}
//           </p>

//           {/* contacts row */}
//           <div style={{ ...t(250), display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
//             {[["✦", ME.location], ["✉", ME.email], ["✆", ME.phone]].map(([ic, val]) => (
//               <span key={val} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, display: "flex", gap: 7, alignItems: "center" }}>
//                 <span style={{ color: C.gold, fontSize: 10 }}>{ic}</span>{val}
//               </span>
//             ))}
//           </div>

//           <div style={{ ...t(300), display: "flex", gap: 14, flexWrap: "wrap" }}>
//             <a href={`mailto:${ME.email}`} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: C.navy, background: `linear-gradient(135deg,${C.gold},${C.goldL})`, padding: "13px 30px", borderRadius: 4, textDecoration: "none", letterSpacing: ".08em" }}>GET IN TOUCH →</a>
//             <a href={ME.github} target="_blank" rel="noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: C.goldL, border: `1px solid ${C.dim}`, padding: "12px 24px", borderRadius: 4, textDecoration: "none", letterSpacing: ".08em", transition: "border-color .2s" }}>GITHUB ↗</a>
//             <a href={ME.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: C.goldL, border: `1px solid ${C.dim}`, padding: "12px 24px", borderRadius: 4, textDecoration: "none", letterSpacing: ".08em" }}>LINKEDIN ↗</a>
//           </div>
//         </div>

//         {/* RIGHT — card */}
//         <div style={{ ...t(180), flex: "0 0 auto" }}>
//           <div style={{ width: 280, background: C.navy2, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px ${C.gold}22` }}>
//             {/* top gold bar */}
//             <div style={{ height: 4, background: `linear-gradient(90deg,${C.goldD},${C.gold},${C.goldL})` }} />
//             <div style={{ padding: "28px 28px 24px" }}>
//               {/* avatar */}
//               <div style={{ width: 72, height: 72, borderRadius: 8, background: `linear-gradient(135deg,${C.goldD},${C.gold})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, color: C.navy, letterSpacing: "-.03em" }}>RR</div>
//               <p style={{ margin: "0 0 2px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{ME.name}</p>
//               <p style={{ margin: "0 0 20px", fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.muted }}>{ME.role}</p>

//               <div style={{ height: 1, background: C.border, marginBottom: 20 }} />

//               {/* stats */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", marginBottom: 20 }}>
//                 {[["1+", "Yrs Exp"], ["10+", "Projects"], ["3", "Languages"]].map(([v, l], i) => (
//                   <div key={l} style={{ textAlign: "center", borderLeft: i > 0 ? `1px solid ${C.border}` : "none", paddingTop: 4 }}>
//                     <p style={{ margin: "0 0 2px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: C.gold }}>{v}</p>
//                     <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 10, color: C.muted, letterSpacing: ".06em" }}>{l}</p>
//                   </div>
//                 ))}
//               </div>

//               <div style={{ height: 1, background: C.border, marginBottom: 16 }} />

//               {/* stack chips */}
//               <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
//                 {["Python", "Django", "React", "Node.js", "MongoDB"].map(t => (
//                   <span key={t} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: C.gold, background: `${C.gold}18`, border: `1px solid ${C.gold}40`, padding: "3px 10px", borderRadius: 3, letterSpacing: ".06em" }}>{t}</span>
//                 ))}
//               </div>

//               <div style={{ height: 1, background: C.border, margin: "16px 0" }} />

//               {/* languages */}
//               <div style={{ display: "flex", gap: 8 }}>
//                 {ME.languages.map(l => (
//                   <span key={l} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: C.muted, background: C.navy3, border: `1px solid ${C.border}`, padding: "3px 10px", borderRadius: 3 }}>{l}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* bottom divider */}
//       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.border}, transparent)` }} />
//     </section>
//   );
// }

// /* ─────────────────────────────────────────
//    SKILLS
// ───────────────────────────────────────── */
// function Skills() {
//   return (
//     <section id="skills" style={{ background: C.navy2, padding: "96px 60px" }}>
//       <div style={inner}>
//         <Fade><Eyebrow>Skills</Eyebrow></Fade>
//         <Fade delay={60}><H2>Technical<br /><Accent>Expertise</Accent></H2></Fade>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 1, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
//           {ME.skills.map((s, i) => (
//             <Fade key={s.label} delay={i * 80}>
//               <div style={{ background: C.navy, padding: "28px 24px", borderRight: `1px solid ${C.border}` }}>
//                 <p style={{ margin: "0 0 4px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: C.gold, letterSpacing: ".1em" }}>0{i + 1}</p>
//                 <p style={{ margin: "0 0 18px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{s.label}</p>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
//                   {s.items.map(it => (
//                     <span key={it} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.muted, background: C.navy3, border: `1px solid ${C.border}`, padding: "5px 12px", borderRadius: 4 }}>{it}</span>
//                   ))}
//                 </div>
//               </div>
//             </Fade>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─────────────────────────────────────────
//    EXPERIENCE
// ───────────────────────────────────────── */
// function Experience() {
//   return (
//     <section id="experience" style={{ background: C.navy, padding: "96px 60px" }}>
//       <div style={inner}>
//         <Fade><Eyebrow>Experience</Eyebrow></Fade>
//         <Fade delay={60}><H2>Professional<br /><Accent>Journey</Accent></H2></Fade>

//         {ME.experience.map((e, i) => (
//           <Fade key={i} delay={100}>
//             <div style={{ border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
//               {/* header strip */}
//               <div style={{ background: C.navy2, padding: "22px 32px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, alignItems: "center", borderBottom: `1px solid ${C.border}` }}>
//                 <div>
//                   <h3 style={{ margin: "0 0 4px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: C.text }}>{e.title}</h3>
//                   <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: C.muted }}>{e.subtitle} &nbsp;·&nbsp; <span style={{ color: C.gold }}>{e.company}</span></p>
//                 </div>
//                 <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.gold, background: `${C.gold}18`, border: `1px solid ${C.gold}40`, padding: "5px 16px", borderRadius: 4, letterSpacing: ".06em" }}>
//                   {e.period} &nbsp;·&nbsp; {e.location}
//                 </span>
//               </div>
//               {/* bullets */}
//               <div style={{ padding: "24px 32px" }}>
//                 {e.bullets.map((b, j) => (
//                   <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
//                     <span style={{ color: C.gold, fontSize: 10, marginTop: 5, flexShrink: 0 }}>◆</span>
//                     <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{b}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Fade>
//         ))}

//         {/* Training */}
//         <Fade delay={160}>
//           <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: C.text, margin: "40px 0 20px", letterSpacing: "-.02em" }}>Courses & Training</p>
//         </Fade>
//         {ME.training.map((c, i) => (
//           <Fade key={i} delay={200}>
//             <div style={{ border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.gold}`, borderRadius: "0 8px 8px 0", background: C.navy2, padding: "24px 28px", marginBottom: 16 }}>
//               <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
//                 <div>
//                   <h4 style={{ margin: "0 0 4px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{c.title}</h4>
//                   <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.muted }}>{c.org}</p>
//                 </div>
//                 <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.gold }}>{c.period}</span>
//               </div>
//               {c.bullets.map((b, j) => (
//                 <div key={j} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
//                   <span style={{ color: C.gold, fontSize: 9, marginTop: 6, flexShrink: 0 }}>◆</span>
//                   <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{b}</span>
//                 </div>
//               ))}
//             </div>
//           </Fade>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ─────────────────────────────────────────
//    EDUCATION
// ───────────────────────────────────────── */
// function Education() {
//   return (
//     <section id="education" style={{ background: C.navy2, padding: "96px 60px" }}>
//       <div style={inner}>
//         <Fade><Eyebrow>Education</Eyebrow></Fade>
//         <Fade delay={60}><H2>Academic<br /><Accent>Background</Accent></H2></Fade>
//         <div style={{ display: "flex", flexDirection: "column", gap: 1, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
//           {ME.education.map((e, i) => (
//             <Fade key={i} delay={i * 80}>
//               <div style={{ background: C.navy, padding: "24px 32px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", borderBottom: i < ME.education.length - 1 ? `1px solid ${C.border}` : "none" }}>
//                 <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, color: i === 0 ? C.gold : C.dim, minWidth: 36 }}>0{i + 1}</div>
//                 <div style={{ flex: 1 }}>
//                   <p style={{ margin: "0 0 3px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{e.degree}</p>
//                   <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: C.muted }}>{e.school}</p>
//                 </div>
//                 <div style={{ textAlign: "right" }}>
//                   <p style={{ margin: "0 0 2px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, color: C.gold }}>{e.year}</p>
//                   <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 11, color: C.dim }}>📍 {e.place}</p>
//                 </div>
//               </div>
//             </Fade>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─────────────────────────────────────────
//    CONTACT
// ───────────────────────────────────────── */
// function Contact() {
//   return (
//     <section id="contact" style={{ background: C.navy, padding: "96px 60px", position: "relative", overflow: "hidden" }}>
//       {/* glow */}
//       <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse, ${C.gold}10 0%, transparent 70%)`, pointerEvents: "none" }} />
//       <div style={{ ...inner, textAlign: "center", position: "relative", zIndex: 1 }}>
//         <Fade><Eyebrow>Contact</Eyebrow></Fade>
//         <Fade delay={60}>
//           <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,64px)", color: C.text, margin: "12px auto 16px", maxWidth: 560, lineHeight: 1, letterSpacing: "-.04em" }}>
//             LET'S BUILD<br /><span style={{ WebkitTextStroke: `2px ${C.gold}`, color: "transparent" }}>TOGETHER</span>
//           </h2>
//         </Fade>
//         <Fade delay={100}>
//           <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: C.muted, marginBottom: 44, fontWeight: 300 }}>Open to full-time roles, freelance projects, and collaborations.</p>
//         </Fade>
//         <Fade delay={140}>
//           <a href={`mailto:${ME.email}`} style={{ display: "inline-block", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(16px,2.5vw,24px)", color: C.gold, textDecoration: "none", letterSpacing: "-.01em", marginBottom: 52, borderBottom: `1px solid ${C.goldD}`, paddingBottom: 6 }}>
//             {ME.email}
//           </a>
//         </Fade>
//         <Fade delay={180}>
//           <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
//             {[["GITHUB ↗", ME.github], ["LINKEDIN ↗", ME.linkedin], [`+91 8606454877`, `tel:+918606454877`]].map(([label, href]) => (
//               <a key={label} href={href} target="_blank" rel="noreferrer"
//                 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, color: C.muted, border: `1px solid ${C.border}`, padding: "11px 24px", borderRadius: 4, textDecoration: "none", letterSpacing: ".1em", transition: "all .2s" }}
//                 onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.borderColor = C.dim; }}
//                 onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}
//               >{label}</a>
//             ))}
//           </div>
//         </Fade>

//         <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${C.border},transparent)`, margin: "64px 0 32px" }} />
//         <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: C.dim, letterSpacing: ".08em" }}>© 2025 RAJITHA R · BUILT WITH REACT</p>
//       </div>
//     </section>
//   );
// }

// /* ─────────────────────────────────────────
//    ATOMS
// ───────────────────────────────────────── */
// const inner = { maxWidth: 960, margin: "0 auto" };

// function Eyebrow({ children }) {
//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
//       <div style={{ width: 32, height: 2, background: `linear-gradient(90deg,${C.gold},${C.goldL})` }} />
//       <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: C.gold, letterSpacing: ".2em", fontWeight: 600 }}>{children.toUpperCase()}</span>
//     </div>
//   );
// }

// function H2({ children }) {
//   return <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(32px,4.5vw,52px)", color: C.text, margin: "0 0 44px", lineHeight: 1.0, letterSpacing: "-.04em" }}>{children}</h2>;
// }

// function Accent({ children }) {
//   return <span style={{ WebkitTextStroke: `2px ${C.gold}`, color: "transparent" }}>{children}</span>;
// }

// /* ─────────────────────────────────────────
//    ROOT
// ───────────────────────────────────────── */
// export default function Portfolio() {
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap";
//     document.head.appendChild(link);
//   }, []);

//   return (
//     <div style={{ background: C.navy, color: C.text, overflowX: "hidden" }}>
//       <Nav />
//       <Hero />
//       <Skills />
//       <Experience />
//       <Education />
//       <Contact />
//     </div>
//   );
// }





import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
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
    { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js"] },
    { label: "Backend", items: ["Python", "Django", "Node.js", "Express.js", "REST API"] },
    { label: "Database", items: ["MySQL", "MongoDB"] },
    { label: "Mobile & More", items: ["Flutter", "Payment Gateways", "Maps API", "AI Integration"] },
  ],
  experience: [
    {
      title: "Software Associate",
      subtitle: "Python / Django Developer",
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
      period: "2024 · Kochi",
      bullets: [
        "Professional training in MongoDB, Express.js, React.js, Node.js",
        "Built and deployed full-stack web applications end-to-end",
        "Developed REST APIs and responsive, component-driven UIs",
      ],
    },
  ],
  education: [
    { degree: "BSc. Computer Science", school: "College of Applied Science Chelakkara", year: "2021 – 2024", place: "Pazhayannur, Thrissur" },
    { degree: "Higher Secondary", school: "GHSS Pazhayannur", year: "2019 – 2021", place: "Pazhayannur, Thrissur" },
    { degree: "High School (SSLC)", school: "GVHSS Thiruvilwamala", year: "2018 – 2019", place: "Thiruvilwamala, Thrissur" },
  ],
  languages: ["English", "Malayalam", "Tamil"],
};

/* palette */
const C = {
  navy: "#0b1628",
  navy2: "#0f1f38",
  navy3: "#162540",
  border: "#1e3050",
  gold: "#c9a84c",
  goldL: "#e2c97e",
  goldD: "#9a7a30",
  text: "#e8edf5",
  muted: "#7a90b0",
  dim: "#3a5070",
};

/* ─────────────────────────────────────────
   HOOKS
───────────────────────────────────────── */
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

function Fade({ children, delay = 0, x = 0, y = 20 }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "none" : `translate(${x}px,${y}px)`,
      transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   ENHANCED CUSTOM CURSOR
───────────────────────────────────────── */
function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let particles = [];

    const createParticle = (x, y, isClick = false) => {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.width = isClick ? '5px' : '4px';
      p.style.height = isClick ? '5px' : '4px';
      p.style.background = C.gold;
      p.style.borderRadius = '50%';
      p.style.pointerEvents = 'none';
      p.style.zIndex = '9998';
      p.style.opacity = isClick ? '0.9' : '0.5';
      p.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(p);
      particles.push(p);

      const scale = isClick ? 2.5 : 1.2;
      setTimeout(() => {
        p.style.transition = isClick ? 'all 0.6s ease' : 'all 0.9s ease';
        p.style.opacity = '0';
        p.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }, 20);

      setTimeout(() => {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, 1000);
    };

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }

      // Light trail
      if (Math.random() > 0.65) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform += ' scale(0.6)';
      }
      // Click burst effect
      for (let i = 0; i < 12; i++) {
        setTimeout(() => createParticle(e.clientX, e.clientY, true), i * 25);
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        const current = cursorRef.current.style.transform;
        cursorRef.current.style.transform = current.replace(' scale(0.6)', '');
      }
    };

    const handleHover = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '62px';
        cursorRef.current.style.height = '62px';
        cursorRef.current.style.borderColor = C.gold;
        cursorRef.current.style.opacity = '0.8';
        cursorRef.current.style.boxShadow = `0 0 30px ${C.gold}60`;
      }
    };

    const handleLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '50px';
        cursorRef.current.style.height = '50px';
        cursorRef.current.style.borderColor = C.goldL;
        cursorRef.current.style.opacity = '0.45';
        cursorRef.current.style.boxShadow = `0 0 15px ${C.gold}30`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactive = document.querySelectorAll('a, button');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    const showCursor = () => {
      if (cursorRef.current) cursorRef.current.style.display = 'block';
    };
    window.addEventListener('mousemove', showCursor, { once: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '50px',
          height: '50px',
          border: `2px solid ${C.goldL}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.45,
          mixBlendMode: 'difference',
          transition: 'all 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
          display: 'none',
          boxShadow: `0 0 20px ${C.gold}40`,
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '9px',
          height: '9px',
          background: C.gold,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'transform 0.07s ease',
          boxShadow: `0 0 10px ${C.gold}`,
        }}
      />
    </>
  );
}

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
const NAV_LINKS = ["About", "Skills", "Experience", "Education", "Contact"];

function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 68,
      background: solid ? `rgba(11,22,40,0.95)` : "transparent",
      backdropFilter: solid ? "blur(16px)" : "none",
      borderBottom: solid ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all .3s",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 60px",
    }}>
      <a href="#about" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 1 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.text, letterSpacing: "-.02em" }}>Rajitha</span>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.gold }}>.</span>
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 400, color: C.muted, textDecoration: "none", letterSpacing: ".06em", transition: "color .2s" }}
            onMouseEnter={e => e.target.style.color = C.goldL}
            onMouseLeave={e => e.target.style.color = C.muted}
          >{l}</a>
        ))}
        <a href={`mailto:${ME.email}`} style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600,
          color: C.navy, background: `linear-gradient(135deg, ${C.gold}, ${C.goldL})`,
          padding: "8px 22px", borderRadius: 4, textDecoration: "none", letterSpacing: ".06em",
        }}>HIRE ME</a>
      </nav>
    </header>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  const [v, setV] = useState(false);
  useEffect(() => { setTimeout(() => setV(true), 120); }, []);
  const t = (d) => ({ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(22px)", transition: `all .75s ease ${d}ms` });

  return (
    <section id="about" style={{
      minHeight: "100vh", background: C.navy,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "100px 60px 80px", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${C.border}33 1px, transparent 1px), linear-gradient(90deg, ${C.border}33 1px, transparent 1px)`, backgroundSize: "80px 80px", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20%", left: "55%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${C.gold}18 0%, transparent 65%)`, zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", gap: 80, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 420px" }}>
          <div style={{ ...t(0), display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 40, height: 2, background: `linear-gradient(90deg,${C.gold},${C.goldL})` }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: C.gold, letterSpacing: ".2em", fontWeight: 600 }}>SOFTWARE DEVELOPER</span>
          </div>
          <h1 style={{ ...t(80), fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px,7vw,88px)", color: C.text, margin: "0 0 4px", lineHeight: .92, letterSpacing: "-.04em" }}>
            RAJITHA
          </h1>
          <h1 style={{ ...t(130), fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px,7vw,88px)", margin: "0 0 36px", lineHeight: .92, letterSpacing: "-.04em", WebkitTextStroke: `2px ${C.gold}`, color: "transparent" }}>
            R
          </h1>
          <p style={{ ...t(200), fontFamily: "'Outfit', sans-serif", fontSize: 16, color: C.muted, lineHeight: 1.85, maxWidth: 480, marginBottom: 40, fontWeight: 300 }}>
            {ME.bio}
          </p>
          <div style={{ ...t(250), display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
            {[["✦", ME.location], ["✉", ME.email], ["✆", ME.phone]].map(([ic, val]) => (
              <span key={val} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: C.muted, display: "flex", gap: 7, alignItems: "center" }}>
                <span style={{ color: C.gold, fontSize: 10 }}>{ic}</span>{val}
              </span>
            ))}
          </div>
          <div style={{ ...t(300), display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={`mailto:${ME.email}`} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: C.navy, background: `linear-gradient(135deg,${C.gold},${C.goldL})`, padding: "13px 30px", borderRadius: 4, textDecoration: "none", letterSpacing: ".08em" }}>GET IN TOUCH →</a>
            <a href={ME.github} target="_blank" rel="noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: C.goldL, border: `1px solid ${C.dim}`, padding: "12px 24px", borderRadius: 4, textDecoration: "none", letterSpacing: ".08em", transition: "border-color .2s" }}>GITHUB ↗</a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, color: C.goldL, border: `1px solid ${C.dim}`, padding: "12px 24px", borderRadius: 4, textDecoration: "none", letterSpacing: ".08em" }}>LINKEDIN ↗</a>
          </div>
        </div>

        <div style={{ ...t(180), flex: "0 0 auto" }}>
          <div style={{ width: 280, background: C.navy2, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px ${C.gold}22` }}>
            <div style={{ height: 4, background: `linear-gradient(90deg,${C.goldD},${C.gold},${C.goldL})` }} />
            <div style={{ padding: "28px 28px 24px" }}>
              <div style={{ width: 72, height: 72, borderRadius: 8, background: `linear-gradient(135deg,${C.goldD},${C.gold})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, color: C.navy, letterSpacing: "-.03em" }}>RR</div>
              <p style={{ margin: "0 0 2px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{ME.name}</p>
              <p style={{ margin: "0 0 20px", fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.muted }}>{ME.role}</p>
              <div style={{ height: 1, background: C.border, marginBottom: 20 }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", marginBottom: 20 }}>
                {[["1+", "Yrs Exp"], ["10+", "Projects"], ["3", "Languages"]].map(([v, l], i) => (
                  <div key={l} style={{ textAlign: "center", borderLeft: i > 0 ? `1px solid ${C.border}` : "none", paddingTop: 4 }}>
                    <p style={{ margin: "0 0 2px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: C.gold }}>{v}</p>
                    <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 10, color: C.muted, letterSpacing: ".06em" }}>{l}</p>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: C.border, marginBottom: 16 }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Python", "Django", "React", "Node.js", "MongoDB"].map(t => (
                  <span key={t} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: C.gold, background: `${C.gold}18`, border: `1px solid ${C.gold}40`, padding: "3px 10px", borderRadius: 3, letterSpacing: ".06em" }}>{t}</span>
                ))}
              </div>
              <div style={{ height: 1, background: C.border, margin: "16px 0" }} />
              <div style={{ display: "flex", gap: 8 }}>
                {ME.languages.map(l => (
                  <span key={l} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: C.muted, background: C.navy3, border: `1px solid ${C.border}`, padding: "3px 10px", borderRadius: 3 }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.border}, transparent)` }} />
    </section>
  );
}

/* Skills, Experience, Education, Contact components (same as your original) */
function Skills() {
  const inner = { maxWidth: 960, margin: "0 auto" };
  return (
    <section id="skills" style={{ background: C.navy2, padding: "96px 60px" }}>
      <div style={inner}>
        <Fade><Eyebrow>Skills</Eyebrow></Fade>
        <Fade delay={60}><H2>Technical<br /><Accent>Expertise</Accent></H2></Fade>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 1, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
          {ME.skills.map((s, i) => (
            <Fade key={s.label} delay={i * 80}>
              <div style={{ background: C.navy, padding: "28px 24px", borderRight: `1px solid ${C.border}` }}>
                <p style={{ margin: "0 0 4px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: C.gold, letterSpacing: ".1em" }}>0{i + 1}</p>
                <p style={{ margin: "0 0 18px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{s.label}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {s.items.map(it => (
                    <span key={it} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.muted, background: C.navy3, border: `1px solid ${C.border}`, padding: "5px 12px", borderRadius: 4 }}>{it}</span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const inner = { maxWidth: 960, margin: "0 auto" };
  return (
    <section id="experience" style={{ background: C.navy, padding: "96px 60px" }}>
      <div style={inner}>
        <Fade><Eyebrow>Experience</Eyebrow></Fade>
        <Fade delay={60}><H2>Professional<br /><Accent>Journey</Accent></H2></Fade>
        {ME.experience.map((e, i) => (
          <Fade key={i} delay={100}>
            <div style={{ border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
              <div style={{ background: C.navy2, padding: "22px 32px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, alignItems: "center", borderBottom: `1px solid ${C.border}` }}>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: C.text }}>{e.title}</h3>
                  <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: C.muted }}>{e.subtitle} &nbsp;·&nbsp; <span style={{ color: C.gold }}>{e.company}</span></p>
                </div>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.gold, background: `${C.gold}18`, border: `1px solid ${C.gold}40`, padding: "5px 16px", borderRadius: 4, letterSpacing: ".06em" }}>
                  {e.period} &nbsp;·&nbsp; {e.location}
                </span>
              </div>
              <div style={{ padding: "24px 32px" }}>
                {e.bullets.map((b, j) => (
                  <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ color: C.gold, fontSize: 10, marginTop: 5, flexShrink: 0 }}>◆</span>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        ))}
        <Fade delay={160}>
          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: C.text, margin: "40px 0 20px", letterSpacing: "-.02em" }}>Courses & Training</p>
        </Fade>
        {ME.training.map((c, i) => (
          <Fade key={i} delay={200}>
            <div style={{ border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.gold}`, borderRadius: "0 8px 8px 0", background: C.navy2, padding: "24px 28px", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                <div>
                  <h4 style={{ margin: "0 0 4px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{c.title}</h4>
                  <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.muted }}>{c.org}</p>
                </div>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: C.gold }}>{c.period}</span>
              </div>
              {c.bullets.map((b, j) => (
                <div key={j} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: C.gold, fontSize: 9, marginTop: 6, flexShrink: 0 }}>◆</span>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{b}</span>
                </div>
              ))}
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const inner = { maxWidth: 960, margin: "0 auto" };
  return (
    <section id="education" style={{ background: C.navy2, padding: "96px 60px" }}>
      <div style={inner}>
        <Fade><Eyebrow>Education</Eyebrow></Fade>
        <Fade delay={60}><H2>Academic<br /><Accent>Background</Accent></H2></Fade>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
          {ME.education.map((e, i) => (
            <Fade key={i} delay={i * 80}>
              <div style={{ background: C.navy, padding: "24px 32px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", borderBottom: i < ME.education.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, color: i === 0 ? C.gold : C.dim, minWidth: 36 }}>0{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: "0 0 3px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: C.text }}>{e.degree}</p>
                  <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: C.muted }}>{e.school}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: "0 0 2px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, color: C.gold }}>{e.year}</p>
                  <p style={{ margin: 0, fontFamily: "'Outfit',sans-serif", fontSize: 11, color: C.dim }}>📍 {e.place}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const inner = { maxWidth: 960, margin: "0 auto" };
  return (
    <section id="contact" style={{ background: C.navy, padding: "96px 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse, ${C.gold}10 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ ...inner, textAlign: "center", position: "relative", zIndex: 1 }}>
        <Fade><Eyebrow>Contact</Eyebrow></Fade>
        <Fade delay={60}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,64px)", color: C.text, margin: "12px auto 16px", maxWidth: 560, lineHeight: 1, letterSpacing: "-.04em" }}>
            LET'S BUILD<br /><span style={{ WebkitTextStroke: `2px ${C.gold}`, color: "transparent" }}>TOGETHER</span>
          </h2>
        </Fade>
        <Fade delay={100}>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: C.muted, marginBottom: 44, fontWeight: 300 }}>Open to full-time roles, freelance projects, and collaborations.</p>
        </Fade>
        <Fade delay={140}>
          <a href={`mailto:${ME.email}`} style={{ display: "inline-block", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(16px,2.5vw,24px)", color: C.gold, textDecoration: "none", letterSpacing: "-.01em", marginBottom: 52, borderBottom: `1px solid ${C.goldD}`, paddingBottom: 6 }}>
            {ME.email}
          </a>
        </Fade>
        <Fade delay={180}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {[["GITHUB ↗", ME.github], ["LINKEDIN ↗", ME.linkedin], [`+91 8606454877`, `tel:+918606454877`]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, color: C.muted, border: `1px solid ${C.border}`, padding: "11px 24px", borderRadius: 4, textDecoration: "none", letterSpacing: ".1em", transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.borderColor = C.dim; }}
                onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}
              >{label}</a>
            ))}
          </div>
        </Fade>
        <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${C.border},transparent)`, margin: "64px 0 32px" }} />
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: C.dim, letterSpacing: ".08em" }}>© 2025 RAJITHA R · BUILT WITH REACT</p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ATOMS
───────────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <div style={{ width: 32, height: 2, background: `linear-gradient(90deg,${C.gold},${C.goldL})` }} />
      <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: C.gold, letterSpacing: ".2em", fontWeight: 600 }}>{children.toUpperCase()}</span>
    </div>
  );
}

function H2({ children }) {
  return <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(32px,4.5vw,52px)", color: C.text, margin: "0 0 44px", lineHeight: 1.0, letterSpacing: "-.04em" }}>{children}</h2>;
}

function Accent({ children }) {
  return <span style={{ WebkitTextStroke: `2px ${C.gold}`, color: "transparent" }}>{children}</span>;
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function Portfolio() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ background: C.navy, color: C.text, overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <CustomCursor />
    </div>
  );
}