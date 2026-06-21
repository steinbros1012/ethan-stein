'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Mail, ChevronDown } from 'lucide-react'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

// ─── Fade-in wrapper ────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Section label ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.28em] text-gold/70 mb-4">
      {children}
    </p>
  )
}

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-24 md:my-32" />
  )
}

export default function Page() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-black/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <span className="font-heading text-lg font-medium tracking-wide text-foreground">
            Ethan Stein
          </span>
          <div className="hidden md:flex items-center gap-8">
            {['Experience', 'About', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200 gold-link"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="https://www.linkedin.com/in/ethan-stein1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </motion.nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,120,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,120,42,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(168,120,42,0.08),transparent_65%)] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5 mb-8"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-gold/80">
                  Open to Summer 2027 Opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-6xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-[-0.02em] text-foreground mb-8"
              >
                Ethan<br />
                <span className="italic text-gold">Stein</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="text-lg text-muted leading-relaxed max-w-md mb-10"
              >
                Finance student at UNC Wilmington. Currently on the Performance & Analysis team at ThermoFisher Scientific. SGA Treasurer overseeing $600K+ in student funding. Founder of BuildSiteCo.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.36 }}
                className="flex flex-wrap gap-6 mb-10"
              >
                {[
                  { value: '4.0', label: 'GPA' },
                  { value: '$600K+', label: 'Budget Managed' },
                  { value: '4×', label: "Chancellor's List" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-heading text-3xl font-medium text-gold">{stat.value}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.44 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="https://www.linkedin.com/in/ethan-stein1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-background px-6 py-2.5 text-sm font-medium hover:bg-gold/90 transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:es2631@uncw.edu"
                  className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-black/[0.04] text-foreground/80 px-6 py-2.5 text-sm font-medium hover:border-gold/40 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  es2631@uncw.edu
                </a>
              </motion.div>
            </div>

            {/* Right — headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Gold ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold/40 via-gold/10 to-transparent blur-sm" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-gold/20">
                  <Image
                    src="/headshot.png"
                    alt="Ethan Stein"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── EXPERIENCE ──────────────────────────────────────────────────── */}
        <section id="experience" className="py-8">
          <FadeIn>
            <SectionLabel>Work Experience</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-16">
              Where I&apos;ve worked.
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {/* ThermoFisher */}
            <FadeIn delay={0.1}>
              <div className="group rounded-2xl border border-black/[0.07] bg-surface p-7 md:p-9 hover:border-gold/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-gold/60">Current</span>
                      <span className="h-px w-8 bg-gold/30" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                      ThermoFisher Scientific
                    </h3>
                    <p className="text-muted mt-1">Finance Intern, Performance &amp; Analysis</p>
                  </div>
                  <span className="text-sm text-muted/70 shrink-0">Summer 2026</span>
                </div>
                <ul className="space-y-3 text-foreground/75 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Own recurring deliverables on the Operations Finance P&amp;A team, including weekly and monthly Accounts Receivable Aging Reports previously managed by full-time employees</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Cleaning up and reorganizing the Financial Management System (FMS) to improve data accuracy and reporting efficiency across the team</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Developing a comprehensive ChatGPT training module for all incoming ThermoFisher employees, selected as a high-impact project from the internship cohort</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Building advanced Excel proficiency across financial modeling, data cleanup, and cross-functional analysis</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* SGA */}
            <FadeIn delay={0.15}>
              <div className="group rounded-2xl border border-black/[0.07] bg-surface p-7 md:p-9 hover:border-gold/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-gold/60">Leadership</span>
                      <span className="h-px w-8 bg-gold/30" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                      UNC Wilmington Student Government
                    </h3>
                    <p className="text-muted mt-1">Treasurer (Incoming) · Deputy Treasurer · Sophomore Class President · Honors College Senator</p>
                  </div>
                  <span className="text-sm text-muted/70 shrink-0">2024 – Present</span>
                </div>
                <ul className="space-y-3 text-foreground/75 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Selected to join the Executive Board as Treasurer for junior year, overseeing $600,000+ in annual student fee funding across all registered organizations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>As Deputy Treasurer, chaired the Appropriations Committee, evaluating $150,000+ in funding requests and directing $100,000+ in approved allocations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Applied cost-benefit analysis and fiscal responsibility principles to each funding proposal, balancing mission alignment with projected student impact</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Served as Sophomore Class President, representing 3,000+ students and advocating for class-wide interests across SGA committees</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Began in SGA freshman year as Honors College Senator before moving into elected and appointed leadership roles</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* BuildSiteCo */}
            <FadeIn delay={0.2}>
              <div className="group rounded-2xl border border-black/[0.07] bg-surface p-7 md:p-9 hover:border-gold/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-gold/60">Entrepreneur</span>
                      <span className="h-px w-8 bg-gold/30" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                      BuildSiteCo
                    </h3>
                    <p className="text-muted mt-1">Founder</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                    <span className="text-sm text-muted/70">2025 – Present</span>
                    <a
                      href="https://buildsiteco.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold transition-colors"
                    >
                      buildsiteco.com <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                <ul className="space-y-3 text-foreground/75 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Founded a web design business building premium websites for small businesses, generating $2,000+ in revenue from real clients while maintaining a full academic and leadership schedule</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Delivered complete sites (design, development, SEO, and hosting) using Next.js, Tailwind CSS, and Vercel for businesses including contractors, event studios, and nonprofits</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0">·</span>
                    <span>Built and deployed an AI-powered lead generation pipeline using OpenAI GPT-4 and Supabase to automate client prospecting and outreach</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ── ABOUT ───────────────────────────────────────────────────────── */}
        <section id="about" className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <SectionLabel>About</SectionLabel>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-8">
                The pattern has always been the same.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-foreground/72 leading-relaxed pt-8 lg:pt-16">
                <p>
                  I played lacrosse through high school, finished as a captain, and we won the state championship my senior year. College has been pretty similar in terms of how I approach things.
                </p>
                <p>
                  Freshman year I joined SGA as an Honors College Senator. Sophomore year I was elected Class President and then became Deputy Treasurer, where I chaired the Appropriations Committee. This coming fall I move into the Treasurer role on the Executive Board, overseeing $600K+ in student fee funding. At ThermoFisher this summer I have been taking on real deliverables, not just observing.
                </p>
                <p>
                  Finance is where I want to build a career. I like working with numbers, I like understanding how businesses actually operate, and I want to be involved in decisions that matter. Investment banking and corporate finance are where I am focused.
                </p>
                <p className="text-foreground font-medium">
                  I am actively looking for summer 2027 internships. If you think there could be a fit, reach out.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ── EDUCATION ───────────────────────────────────────────────────── */}
        <section id="education" className="py-8">
          <FadeIn>
            <SectionLabel>Education</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-16">
              Academic record.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-black/[0.07] bg-surface p-7 h-full">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-medium text-foreground">UNC Wilmington</h3>
                    <p className="text-muted mt-1 text-sm">B.S. Business Administration · Finance</p>
                    <p className="text-muted/60 text-sm">Honors College · Expected May 2028</p>
                  </div>
                  <span className="font-heading text-3xl font-medium text-gold">4.0</span>
                </div>
                <div className="space-y-2">
                  {[
                    "Chancellor's List — 4 consecutive semesters",
                    'Honors College — selective program for academic excellence',
                    'Microsoft Excel Expert Certified',
                    'Student Finance Association (SFA)',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-foreground/65">
                      <span className="text-gold/60 shrink-0">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-black/[0.07] bg-surface p-7 h-full">
                <h3 className="font-heading text-xl font-medium text-foreground mb-6">Skills &amp; Tools</h3>
                <div className="space-y-5">
                  {[
                    {
                      category: 'Financial Analysis',
                      items: ['FP&A', 'AR/AP Reporting', 'Budget Management', 'Cost-Benefit Analysis'],
                    },
                    {
                      category: 'Technology',
                      items: ['Microsoft Excel (Expert Certified)', 'Financial Management Systems', 'AI Tools & Automation', 'Web Development'],
                    },
                    {
                      category: 'Leadership',
                      items: ['Committee Management', 'Budget Oversight', 'Cross-functional Collaboration', 'Public Speaking'],
                    },
                  ].map((group) => (
                    <div key={group.category}>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-gold/60 mb-2">{group.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-black/8 bg-black/[0.04] px-3 py-1 text-xs text-foreground/65"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ── CONTACT ─────────────────────────────────────────────────────── */}
        <section id="contact" className="py-8 pb-32">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 max-w-2xl">
              Let&apos;s connect.
            </h2>
            <p className="text-foreground/60 max-w-md mb-12 leading-relaxed">
              I&apos;m actively exploring summer 2027 internship opportunities in investment banking and corporate finance. Open to conversations, referrals, and networking.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/ethan-stein1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-gold/25 bg-gold/8 px-8 py-5 text-foreground hover:border-gold/50 hover:bg-gold/12 transition-all duration-200 group"
              >
                <LinkedinIcon className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <p className="text-xs text-muted">linkedin.com/in/ethan-stein1</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted ml-auto group-hover:text-gold transition-colors" />
              </a>
              <a
                href="mailto:es2631@uncw.edu"
                className="inline-flex items-center gap-3 rounded-2xl border border-black/8 bg-surface px-8 py-5 text-foreground hover:border-black/16 transition-all duration-200 group"
              >
                <Mail className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-muted">es2631@uncw.edu</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted ml-auto group-hover:text-gold transition-colors" />
              </a>
            </div>
          </FadeIn>
        </section>

      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-black/[0.06] py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-sm text-muted">Ethan Stein</span>
          <span className="text-xs text-muted/50">Finance · UNCW Class of 2028</span>
          <span className="text-xs text-muted/40">ethanstein.com</span>
        </div>
      </footer>
    </main>
  )
}
