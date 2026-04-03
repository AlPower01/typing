'use client'

import { useState } from 'react'
import StatsBar from '@/components/sections/StatsBar'
import FeaturesSection from '@/components/sections/FeaturesSection'
import CurriculumSection from '@/components/sections/CurriculumSection'

// ─── Layout helpers ──────────────────────────────────────────────────────────

function SgSection({ title, children, fullBleed }: { title: string; children: React.ReactNode; fullBleed?: boolean }) {
  return (
    <div style={{ marginBottom: 80 }}>
      {/* Section header — always inside the max-width wrap */}
      <div style={{ maxWidth: fullBleed ? 'none' : undefined }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#909398', whiteSpace: 'nowrap',
          }}>
            {title}
          </span>
          <div style={{ flex: 1, height: 1, background: '#EAEAEC' }} />
        </div>
      </div>
      {children}
    </div>
  )
}

function Showcase({
  children, muted, inset, style,
}: {
  children: React.ReactNode
  muted?: boolean
  inset?: boolean
  style?: React.CSSProperties
}) {
  return (
    <div style={{
      background: muted ? '#F8F9FA' : '#ffffff',
      border: '1px solid #EAEAEC',
      borderRadius: 16,
      padding: inset ? 0 : 40,
      overflow: inset ? 'hidden' : undefined,
      ...style,
    }}>
      {children}
    </div>
  )
}

function ComponentRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
      padding: '28px 0', borderBottom: '1px solid #EAEAEC',
    }}>
      <div style={{
        width: 160, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: '#909398', flexShrink: 0,
      }}>
        {label}
      </div>
      {children}
    </div>
  )
}

// ─── Color data ──────────────────────────────────────────────────────────────

const colorGroups = [
  {
    label: 'Blue',
    swatches: [
      { name: 'Blue 900', hex: '#2A4365' },
      { name: 'Blue 500', hex: '#3082CF' },
      { name: 'Blue 300', hex: '#64B4ED' },
      { name: 'Blue 200', hex: '#BEE3F8' },
      { name: 'Blue 100', hex: '#DAF0FB' },
      { name: 'Blue 50',  hex: '#F0F9FD' },
    ],
  },
  {
    label: 'Yellow',
    swatches: [
      { name: 'Yellow 500', hex: '#FFCF46' },
      { name: 'Yellow 700', hex: '#E5BA3F' },
    ],
  },
  {
    label: 'Green',
    swatches: [
      { name: 'Green 500', hex: '#58D06C' },
      { name: 'Green 300', hex: '#ACE7B6' },
      { name: 'Green 200', hex: '#D7F4DB' },
    ],
  },
  {
    label: 'Orange',
    swatches: [
      { name: 'Orange 500', hex: '#FAB889' },
      { name: 'Orange 200', hex: '#FCD9C0' },
      { name: 'Orange 100', hex: '#FEF3EC' },
    ],
  },
  {
    label: 'Red',
    swatches: [
      { name: 'Red 500', hex: '#FF857D' },
      { name: 'Red 200', hex: '#FAB8B8' },
      { name: 'Red 100', hex: '#FCE9E9' },
    ],
  },
  {
    label: 'Text & Neutrals',
    swatches: [
      { name: 'Text Black', hex: '#212731' },
      { name: 'Grey 700',   hex: '#63676E' },
      { name: 'Text Grey',  hex: '#797C81' },
      { name: 'Grey 500',   hex: '#909398' },
      { name: 'Grey 100',   hex: '#EAEAEC' },
      { name: 'White',      hex: '#FFFFFF' },
    ],
  },
]

// ─── Typography data ─────────────────────────────────────────────────────────

const typeSpecs: { label: string; detail: string; style: React.CSSProperties; text: string }[] = [
  {
    label: 'Hero Title',
    detail: '58px · Bold 700\nLine height 1.1',
    style: { fontSize: 58, fontWeight: 700, lineHeight: 1.1, color: '#212731' },
    text: 'An engaging, motivating experience that builds real typing skills.',
  },
  {
    label: 'Section Title',
    detail: '38px · Bold 700\nLine height 1.2',
    style: { fontSize: 38, fontWeight: 700, lineHeight: 1.2, color: '#212731' },
    text: 'An engaging, motivating experience that builds real typing skills.',
  },
  {
    label: 'Content Title',
    detail: '28px · Bold 700\nLine height 1.2',
    style: { fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: '#212731' },
    text: 'An engaging, motivating experience that builds real typing skills.',
  },
  {
    label: 'Paragraph Bold',
    detail: '20px · ExtraBold 800\nLine height 1.2',
    style: { fontSize: 20, fontWeight: 800, lineHeight: 1.2, color: '#212731' },
    text: 'Talk to Team',
  },
  {
    label: 'Large Paragraph',
    detail: '20px · Medium 500\nLine height 34px',
    style: { fontSize: 20, fontWeight: 500, lineHeight: '34px', color: '#212731' },
    text: 'Core Learning Path: Guides students from Pre-Keyboarding through Learn the Keys, Punctuation & Advanced Keys, and Cross-Curricular Typing with grade-appropriate content.',
  },
  {
    label: 'Regular Paragraph',
    detail: '16px · Medium 500',
    style: { fontSize: 16, fontWeight: 500, color: '#212731' },
    text: 'Core Learning Path: Guides students from Pre-Keyboarding through Learn the Keys, Punctuation & Advanced Keys, and Cross-Curricular Typing with grade-appropriate content.',
  },
  {
    label: 'Small Paragraph',
    detail: '14px · Medium 500',
    style: { fontSize: 14, fontWeight: 500, color: '#212731' },
    text: 'Custom Lessons: Allow teachers to create their own typed content, reinforcing vocabulary and concepts from any subject area. Over 500,000 created by educators.',
  },
]

// ─── Real component data (mirrors educator/page.tsx) ─────────────────────────

const statsData = {
  tagline: 'Preparing students for the future.',
  stats: [
    { number: '39 million+', label: 'Students' },
    { number: '677,000+',    label: 'Teachers' },
    { number: 'Since 2005',  label: 'Trusted in schools' },
    { number: '500,000+',    label: 'Lessons created by educators' },
  ],
}

const studentTabs = [
  { label: 'Engaging Lessons' },
  { label: 'Typing Tests & Benchmarks' },
  { label: 'Adaptive Curriculum' },
  { label: 'Fun Typing Games' },
]

const studentPanels = [
  {
    title: 'Hundreds of interactive, step-by-step lessons',
    desc: 'From home row basics to advanced speed drills, structured lessons guide every student through the keyboard with instant feedback and clear progression.',
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Interactive typing lesson interface',
  },
  {
    title: 'Built-in typing tests with real WPM tracking',
    desc: 'Students take timed tests to measure speed and accuracy. Clear benchmarks set personal goals and let educators track progress across the class.',
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Typing test and benchmark results',
  },
  {
    title: 'A curriculum that adjusts to every learner',
    desc: "The platform automatically adapts lesson difficulty based on each student's performance, keeping them challenged without feeling overwhelmed.",
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Adaptive curriculum overview',
  },
  {
    title: 'Games that make practice genuinely fun',
    desc: "Reinforce skills with arcade-style typing games that feel more like play than practice. Students build speed without even realising they're learning.",
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Fun typing games',
  },
]

const curriculumSections = [
  {
    id: 'keyboarding',
    label: 'Keyboarding',
    subtitle: 'Core touch-typing instruction from first key reaches through advanced fluency.',
    lessons: [
      { name: 'Pre-Keyboarding',           grade: 'K-6' },
      { name: 'Learn the Keys',             grade: 'K-12 – Adults' },
      { name: 'Punctuation & Numbers',      grade: '1-3' },
      { name: 'Punctuation & Advanced Keys',grade: '4-12 + Adult' },
      { name: 'Personalized Practice',      grade: 'K-12 – Adults' },
      { name: 'Typing Tests',               grade: 'K-12 – Adults' },
      { name: 'Numeric Keypad / 10-Key',    grade: 'Adult + Core' },
      { name: 'Dvorak Keyboard',            grade: 'Core' },
    ],
  },
  {
    id: 'cross-curricular',
    label: 'Cross-Curricular',
    subtitle: 'Reinforce academic vocabulary and skills across every subject area.',
    lessons: [
      { name: 'Science Vocabulary', grade: 'K-12' },
      { name: 'Math Terminology',   grade: '3-12' },
      { name: 'Social Studies',     grade: 'K-8' },
      { name: 'ELA Practice',       grade: 'K-12' },
      { name: 'World Languages',    grade: '4-12' },
      { name: 'STEM Essentials',    grade: '6-12' },
    ],
  },
  {
    id: 'digital-citizenship',
    label: 'Digital Citizenship',
    subtitle: 'Teach students to navigate the digital world safely and responsibly.',
    lessons: [
      { name: 'Online Safety',        grade: 'K-12' },
      { name: 'Privacy & Security',   grade: '4-12' },
      { name: 'Cyberbullying',        grade: 'K-8' },
      { name: 'Digital Footprint',    grade: '6-12' },
      { name: 'Screen Time Balance',  grade: 'K-6' },
      { name: 'Copyright & Fair Use', grade: '6-12' },
    ],
  },
  {
    id: 'ai-literacy',
    label: 'AI Literacy',
    subtitle: 'Build foundational knowledge and critical thinking skills around artificial intelligence.',
    lessons: [
      { name: 'What is AI?',        grade: 'K-6' },
      { name: 'AI in Daily Life',   grade: '4-12' },
      { name: 'Responsible AI Use', grade: '6-12' },
      { name: 'Prompt Engineering', grade: '8-12' },
      { name: 'AI Ethics',          grade: '8-12' },
      { name: 'AI & Future Careers',grade: '6-12' },
    ],
  },
  {
    id: 'computer-applications',
    label: 'Computer Applications',
    subtitle: 'Practical software skills students and adults use every day.',
    lessons: [
      { name: 'Word Processing',     grade: 'K-12' },
      { name: 'Spreadsheets',        grade: '4-12' },
      { name: 'Presentations',       grade: 'K-12' },
      { name: 'Email Etiquette',     grade: '4-12' },
      { name: 'File Management',     grade: 'K-8' },
      { name: 'Collaboration Tools', grade: '6-12' },
    ],
  },
]

// ─── Play icon ───────────────────────────────────────────────────────────────

function PlayIcon() {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="15.5" cy="15.5" r="15.5" fill="#DAF0FB"/>
      <path d="M13 10.5L22 15.5L13 20.5Z" fill="#3082CF"/>
    </svg>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function StyleguidePage() {
  const [activeSimpleTab, setActiveSimpleTab] = useState(0)

  return (
    <>
      <style>{`
        /* Override body background for this page only */
        body { background: #F4F6F8 !important; }

        /* Buttons */
        .sg-btn {
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 18px; font-family: 'Nunito', sans-serif;
          font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
          cursor: pointer; border: none;
        }
        .sg-btn-primary {
          background: #FFCF46; color: #2A4365;
          font-size: 16px; padding: 12px 32px;
          box-shadow: 0 6px 0 #E5BA3F;
        }
        .sg-btn-primary:hover  { transform: translateY(3px); box-shadow: 0 3px 0 #E5BA3F; }
        .sg-btn-primary:active { transform: translateY(6px); box-shadow: 0 0 0 #E5BA3F; }
        .sg-btn-primary-lg { font-size: 20px; padding: 18px 44px; border-radius: 20px; }
        .sg-btn-secondary {
          background: #DAF0FB; color: #2A4365;
          font-size: 16px; padding: 12px 32px;
          border: 1px solid #64B4ED;
          box-shadow: 0 6px 0 rgba(144,206,244,0.6);
        }
        .sg-btn-secondary:hover  { transform: translateY(3px); box-shadow: 0 3px 0 rgba(144,206,244,0.6); }
        .sg-btn-secondary:active { transform: translateY(6px); box-shadow: 0 0 0 rgba(144,206,244,0.6); }
        .sg-btn:disabled { opacity: 0.45; pointer-events: none; }

        /* Text link */
        .sg-text-link {
          color: #3082CF; font-size: 16px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.04em;
          border-bottom: 2px solid transparent; transition: border-color 0.15s;
          text-decoration: none;
        }
        .sg-text-link:hover { border-color: #3082CF; }

        /* Labels */
        .sg-label-section {
          display: inline-flex; align-items: center;
          background: #F7FDFF; border: 1px solid #BCE2F8;
          border-radius: 999px; padding: 10px 24px;
          color: #3082CF; font-weight: 800; font-size: 14px;
          text-transform: uppercase; letter-spacing: 0.04em;
        }
        .sg-label-pill {
          display: inline-flex; align-items: center;
          background: #F7FDFF; border: 1px solid #BCE2F8;
          border-radius: 999px; box-shadow: 0 5px 0 rgba(144,206,244,0.5);
          padding: 8px 20px; color: #3082CF; font-weight: 800;
          font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* Simple tabs */
        .sg-tab {
          padding: 10px 20px; font-family: 'Nunito', sans-serif;
          font-weight: 900; font-size: 16px; text-transform: capitalize;
          color: #909398; border-radius: 8px;
          transition: background 0.15s, color 0.15s;
          cursor: pointer; border: none; background: none;
        }
        .sg-tab:hover:not(.sg-tab-active) { background: #EAEAEC; color: #212731; }
        .sg-tab-active { background: #3082CF; color: #ffffff; }

        /* Persona dropdown hover */
        .sg-persona-item:hover { background: #F0F9FD; }

        /* Curriculum lesson card */
        .sg-lesson-card {
          background: #ffffff; border: 1px solid rgba(100,180,237,0.75);
          border-radius: 8px; padding: 14px 16px;
          display: flex; align-items: center; gap: 12px;
          min-height: 88px; cursor: pointer; text-decoration: none;
          color: inherit; transition: border-color 0.15s;
        }
        .sg-lesson-card:hover { border-color: rgba(100,180,237,1); }

        /* Curriculum sidebar nav */
        .sg-nav { list-style: none; margin: 0; padding: 0; border-left: 1px solid rgba(144,206,244,0.3); }
        .sg-nav__item {
          position: relative; height: 52px; display: flex; align-items: center;
          padding: 0 16px; font-size: 16px; font-weight: 500;
          color: #F5FDFF; cursor: pointer; border-radius: 0 4px 4px 0;
          transition: background 0.15s; user-select: none;
        }
        .sg-nav__item:hover { color: #64B4ED; }
        .sg-nav__item--active { color: #ffffff; font-weight: 700; }
        .sg-nav__item--active::before {
          content: ''; position: absolute; left: -1px; top: 0; bottom: 0;
          width: 10px; background: #3082CF; border-radius: 0 4px 4px 0;
        }

        /* Lesson modal CTAs */
        .sg-modal-cta {
          flex: 1; height: 44px; border-radius: 8px; font-size: 15px;
          font-weight: 700; cursor: pointer; border: none;
          transition: opacity 0.15s; font-family: 'Nunito', sans-serif;
        }
        .sg-modal-cta:hover { opacity: 0.88; }
        .sg-modal-cta--primary   { background: #3082CF; color: #ffffff; }
        .sg-modal-cta--secondary { background: #DAF0FB; color: #3082CF; }

        /* Strip top margin from FeaturesSection when inside showcase */
        .sg-features-wrap .features-section { margin-top: 0 !important; }

        /* Remove the last component row's bottom border */
        .sg-rows > div:last-child { border-bottom: none !important; }
        .sg-type-rows > div:last-child { border-bottom: none !important; }
      `}</style>

      <div style={{ background: '#F4F6F8', minHeight: '100vh' }}>

        {/* ── Page Header ──────────────────────────────────────────── */}
        <div style={{ background: '#212731', padding: '56px 40px' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#909398', marginBottom: 14 }}>
              Typing.com
            </p>
            <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, color: '#ffffff', marginBottom: 12, fontFamily: "'Nunito', sans-serif" }}>
              Design System
            </h1>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#797C81' }}>
              Typography · Colors · UI Components
            </p>
          </div>
        </div>

        {/* ── Wrap ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 40px' }}>

          {/* ── Colors ─────────────────────────────────────────────── */}
          <SgSection title="Colors">
            <Showcase>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                {colorGroups.map((group) => (
                  <div key={group.label}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#909398', marginBottom: 14 }}>
                      {group.label}
                    </p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      {group.swatches.map((s) => (
                        <div key={s.name} style={{ width: 106 }}>
                          <div style={{ height: 76, borderRadius: 10, background: s.hex, border: '1px solid rgba(0,0,0,0.07)', marginBottom: 10 }} />
                          <div style={{ fontSize: 12, fontWeight: 700, color: '#212731' }}>{s.name}</div>
                          <div style={{ fontSize: 11, color: '#909398', marginTop: 2 }}>{s.hex}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Showcase>
          </SgSection>

          {/* ── Typography ─────────────────────────────────────────── */}
          <SgSection title="Typography — Nunito">
            <Showcase>
              <div className="sg-type-rows" style={{ display: 'flex', flexDirection: 'column' }}>
                {typeSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40,
                      alignItems: 'start', padding: '32px 0', borderBottom: '1px solid #EAEAEC',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#212731', marginBottom: 4 }}>
                        {spec.label}
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 500, color: '#909398', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                        {spec.detail}
                      </div>
                    </div>
                    <div style={spec.style}>{spec.text}</div>
                  </div>
                ))}
                {/* Text Link row */}
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, alignItems: 'start', padding: '32px 0' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#212731', marginBottom: 4 }}>
                      Text Link
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: '#909398', lineHeight: 1.6 }}>
                      {'16px · Bold 700\nUppercase'}
                    </div>
                  </div>
                  <div><a href="#" className="sg-text-link">Talk to Team</a></div>
                </div>
              </div>
            </Showcase>
          </SgSection>

          {/* ── Buttons ────────────────────────────────────────────── */}
          <SgSection title="Buttons">
            <Showcase>
              <div className="sg-rows">
                <ComponentRow label="Primary · Medium">
                  <button className="sg-btn sg-btn-primary">Get Started</button>
                  <button className="sg-btn sg-btn-primary" disabled>Disabled</button>
                </ComponentRow>
                <ComponentRow label="Primary · Large">
                  <button className="sg-btn sg-btn-primary sg-btn-primary-lg">Sign Up Now</button>
                </ComponentRow>
                <ComponentRow label="Secondary">
                  <button className="sg-btn sg-btn-secondary">Learn More</button>
                  <button className="sg-btn sg-btn-secondary" disabled>Disabled</button>
                </ComponentRow>
                <ComponentRow label="Text Link">
                  <a href="#" className="sg-text-link">Talk to Team</a>
                </ComponentRow>
              </div>
            </Showcase>
          </SgSection>

          {/* ── Labels ─────────────────────────────────────────────── */}
          <SgSection title="Labels">
            <Showcase>
              <div className="sg-rows">
                <ComponentRow label="Section Label">
                  <span className="sg-label-section">Section Label</span>
                </ComponentRow>
                <ComponentRow label="Feature Pill">
                  <span className="sg-label-pill">Student Features</span>
                  <span className="sg-label-pill">Teacher Tools</span>
                  <span className="sg-label-pill">AI Literacy</span>
                </ComponentRow>
              </div>
            </Showcase>
          </SgSection>

          {/* ── Tabs ───────────────────────────────────────────────── */}
          <SgSection title="Tabs">
            <Showcase>
              <div className="sg-rows">
                <ComponentRow label="Tab Bar">
                  <div style={{ display: 'inline-flex', gap: 4 }}>
                    {['Engaging Lessons', 'Typing Tests & Benchmarks', 'Coding'].map((label, i) => (
                      <button
                        key={label}
                        className={`sg-tab${activeSimpleTab === i ? ' sg-tab-active' : ''}`}
                        onClick={() => setActiveSimpleTab(i)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </ComponentRow>
              </div>
            </Showcase>
          </SgSection>

          {/* ── Persona Dropdown ───────────────────────────────────── */}
          <SgSection title="Persona Dropdown">
            <Showcase muted style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#909398', marginBottom: 16 }}>
                  Dropdown (open)
                </p>
                <div style={{ background: '#ffffff', borderRadius: 12, boxShadow: '0 1px 14px rgba(0,0,0,0.1)', width: 420, overflow: 'hidden' }}>
                  {[
                    { label: 'Educators',     desc: 'From classrooms to districts, keyboarding and Beyond Typing.', iconBg: '#DAF0FB' },
                    { label: 'Homeschoolers', desc: 'Flexible at-home typing paths and parent visibility.',         iconBg: '#D7F4DB' },
                    { label: 'Individuals',   desc: 'Self-paced practice for one-off typers and personal goals.',  iconBg: '#FCD9C0' },
                  ].map((item, i, arr) => (
                    <div
                      key={item.label}
                      className="sg-persona-item"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px',
                        borderBottom: i < arr.length - 1 ? '1px solid #EAEAEC' : 'none',
                        transition: 'background 0.12s', cursor: 'default',
                      }}
                    >
                      <div style={{ width: 52, height: 52, borderRadius: '50%', background: item.iconBg, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, textTransform: 'uppercase', color: '#212731', marginBottom: 4, letterSpacing: '0.02em' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: '#63676E', lineHeight: 1.45 }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Showcase>
          </SgSection>

        </div>{/* /wrap — close before full-bleed sections */}

        {/* ── Stats Bar — real StatsBar component ──────────────────── */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#909398', whiteSpace: 'nowrap' }}>
                Stats Bar
              </span>
              <div style={{ flex: 1, height: 1, background: '#EAEAEC' }} />
            </div>
          </div>
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ background: '#ffffff', border: '1px solid #EAEAEC', borderRadius: 16, overflow: 'hidden' }}>
              <StatsBar tagline={statsData.tagline} stats={statsData.stats} />
            </div>
          </div>
        </div>

        {/* ── Feature Tab Panel — real FeaturesSection component ────── */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#909398', whiteSpace: 'nowrap' }}>
                Feature Tab Panel
              </span>
              <div style={{ flex: 1, height: 1, background: '#EAEAEC' }} />
            </div>
          </div>
          <div className="sg-features-wrap">
            <FeaturesSection
              variant="student"
              badge="Student Features"
              title="An engaging, motivating experience that builds real typing skills."
              tabs={studentTabs}
              panels={studentPanels}
            />
          </div>
        </div>

        {/* ── Curriculum — real CurriculumSection component ─────────── */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#909398', whiteSpace: 'nowrap' }}>
                Curriculum Section
              </span>
              <div style={{ flex: 1, height: 1, background: '#EAEAEC' }} />
            </div>
          </div>
          <CurriculumSection sections={curriculumSections} />
        </div>

        {/* ── Resume max-width wrap for remaining sections ──────────── */}
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 40px 64px' }}>

          {/* ── Curriculum Lesson Card (atomic) ──────────────────────── */}
          <SgSection title="Curriculum Lesson Card">
            <Showcase style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {[
                { name: 'Pre-Keyboarding',             grade: 'K-6' },
                { name: 'Punctuation & Advanced Keys', grade: '4-12 + Adult' },
                { name: 'Numeric Keypad / 10-Key',     grade: 'Adult + Core' },
              ].map((card) => (
                <a key={card.name} href="#" className="sg-lesson-card" style={{ width: 240 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#212731', lineHeight: 1.3, marginBottom: 4 }}>
                      {card.name}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#3082CF' }}>{card.grade}</div>
                  </div>
                  <PlayIcon />
                </a>
              ))}
            </Showcase>
          </SgSection>

          {/* ── Curriculum Sidebar Nav (atomic) ──────────────────────── */}
          <SgSection title="Curriculum Sidebar Nav">
            <div style={{ background: '#2A4365', border: '1px solid #EAEAEC', borderRadius: 16, padding: '16px 0', overflow: 'hidden' }}>
              <ul className="sg-nav" style={{ width: 260 }}>
                {['Keyboarding', 'Cross-Curricular', 'Digital Citizenship', 'AI Literacy', 'Computer Applications'].map((item, i) => (
                  <li key={item} className={`sg-nav__item${i === 0 ? ' sg-nav__item--active' : ''}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SgSection>

          {/* ── Lesson Preview Modal ──────────────────────────────────── */}
          <SgSection title="Lesson Preview Modal">
            <Showcase muted style={{ display: 'flex', justifyContent: 'center', padding: '48px 40px' }}>
              <div style={{ background: '#ffffff', borderRadius: 20, width: '100%', maxWidth: 560, boxShadow: '0 24px 64px rgba(0,0,0,0.18)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '24px 24px 16px', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#212731', lineHeight: 1.25 }}>Pre-Keyboarding</div>
                    <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#3082CF', background: '#DAF0FB', borderRadius: 20, padding: '3px 10px', marginTop: 6 }}>K-6</span>
                  </div>
                  <button style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: '#EAEAEC', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none' }} aria-label="Close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1L13 13M13 1L1 13" stroke="#63676E" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <div style={{ margin: '0 24px', background: '#F0F9FD', border: '1px solid #BEE3F8', borderRadius: 12, height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  <div style={{ width: 52, height: 52, background: '#DAF0FB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#BEE3F8"/>
                      <path d="M10 8L17 12L10 16V8Z" fill="#3082CF"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#909398' }}>Lesson preview coming soon</span>
                </div>
                <div style={{ padding: '20px 24px 24px', display: 'flex', gap: 10 }}>
                  <button className="sg-modal-cta sg-modal-cta--secondary">Learn More</button>
                  <button className="sg-modal-cta sg-modal-cta--primary">Assign to Class →</button>
                </div>
              </div>
            </Showcase>
          </SgSection>

        </div>{/* /resume wrap */}
      </div>
    </>
  )
}
