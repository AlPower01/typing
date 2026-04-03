'use client'

import { useState } from 'react'
import Image from 'next/image'

interface LessonCard {
  name: string
  grade: string
}

interface CurriculumSection {
  id: string
  label: string
  subtitle: string
  lessons: LessonCard[]
}

interface CurriculumSectionProps {
  sections: CurriculumSection[]
}

const PlayIcon = () => (
  <svg className="flex-shrink-0 w-8 h-8" viewBox="0 0 31 31" fill="none" aria-hidden="true">
    <circle cx="15.5" cy="15.5" r="15.5" fill="#DAF0FB"/>
    <path d="M13 10.5L22 15.5L13 20.5Z" fill="#3082CF"/>
  </svg>
)

const CurriculumChevron = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
    <path d="M3 6l5 5 5-5" stroke="#3082CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function CurriculumSection({ sections }: CurriculumSectionProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [navDropdownOpen, setNavDropdownOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalLesson, setModalLesson] = useState<LessonCard | null>(null)

  const openModal = (lesson: LessonCard) => {
    setModalLesson(lesson)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <section
      className="curriculum-section"
      style={{ position: 'relative', background: '#2A4365', overflow: 'hidden', padding: '72px 0' }}
      aria-labelledby="curriculum-title"
    >
      <Image
        src="/images/dashed_line.svg"
        alt=""
        aria-hidden
        width={340}
        height={200}
        style={{ position: 'absolute', bottom: 0, right: 0, width: 340, height: 'auto', opacity: 0.25, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16, gap: 24 }}
          className="curriculum-header"
        >
          <h2
            id="curriculum-title"
            style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.2, color: '#ffffff', maxWidth: 720, marginBottom: 24 }}
            className="curriculum-title"
          >
            Over <span style={{ color: '#64B4ED' }}>10,000</span> lessons with over{' '}
            <span style={{ color: '#64B4ED' }}>500,000</span> lessons created by educators like you.
          </h2>
          <Image
            src="/images/bundle.png"
            alt=""
            aria-hidden
            width={420}
            height={280}
            style={{ flexShrink: 0, width: 420, height: 'auto', alignSelf: 'flex-end', display: 'block', position: 'relative', zIndex: 2, marginBottom: -16 }}
            className="curriculum-deco"
          />
        </div>

        {/* Body */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }} className="curriculum-body">
          {/* Sidebar */}
          <div style={{ flex: '0 0 272px' }} className="curriculum-sidebar">
            <p style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: '#64B4ED', marginBottom: 12 }}>
              Curriculum Sections
            </p>
            <ul
              role="tablist"
              aria-label="Curriculum sections"
              style={{ listStyle: 'none', margin: 0, padding: 0, borderLeft: '1px solid rgba(144,206,244,0.3)' }}
              className="curriculum-nav"
            >
              {sections.map((section, i) => (
                <li
                  key={section.id}
                  role="tab"
                  aria-selected={activeSection === i}
                  tabIndex={activeSection === i ? 0 : -1}
                  onClick={() => setActiveSection(i)}
                  style={{
                    position: 'relative',
                    height: 52,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    fontSize: 16,
                    fontWeight: activeSection === i ? 700 : 500,
                    color: activeSection === i ? '#ffffff' : '#F5FDFF',
                    cursor: 'pointer',
                    borderRadius: '0 4px 4px 0',
                    transition: 'background 0.15s',
                    userSelect: 'none',
                  }}
                  className={`curriculum-nav-item ${activeSection === i ? 'is-active' : ''}`}
                >
                  {activeSection === i && (
                    <span
                      aria-hidden
                      style={{
                        position: 'absolute',
                        left: -1,
                        top: 0,
                        bottom: 0,
                        width: 10,
                        background: '#3082CF',
                        borderRadius: '0 4px 4px 0',
                      }}
                    />
                  )}
                  {section.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Panel */}
          <div style={{ flex: 1, position: 'relative', paddingBottom: 6, minWidth: 0 }}>
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 6,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#DAF0FB',
                border: '1px solid #64B4ED',
                borderRadius: 24,
              }}
            />
            <div
              style={{
                position: 'relative',
                background: '#F5FDFF',
                border: '1px solid #64B4ED',
                borderRadius: 24,
                padding: 32,
                minHeight: 651,
              }}
              className="curriculum-panel"
            >
              {/* Mobile dropdown — inside panel, hidden on desktop */}
              <div style={{ position: 'relative', marginBottom: 20 }} className="curriculum-dropdown-wrap">
                <button
                  onClick={() => setNavDropdownOpen(!navDropdownOpen)}
                  aria-expanded={navDropdownOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#ffffff',
                    border: '1px solid #64B4ED',
                    borderRadius: navDropdownOpen ? '12px 12px 0 0' : 12,
                    padding: '14px 20px',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#212731',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: '#3082CF', fontWeight: 800 }}>{sections[activeSection].label}</span>
                  <CurriculumChevron open={navDropdownOpen} />
                </button>
                {navDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#ffffff',
                    border: '1px solid #64B4ED',
                    borderTop: 'none',
                    borderRadius: '0 0 12px 12px',
                    zIndex: 50,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                  }}>
                    {sections.map((section, i) => (
                      <button
                        key={section.id}
                        onClick={() => { setActiveSection(i); setNavDropdownOpen(false) }}
                        style={{
                          width: '100%',
                          display: 'block',
                          padding: '13px 20px',
                          textAlign: 'left',
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: 16,
                          fontWeight: activeSection === i ? 800 : 600,
                          color: activeSection === i ? '#ffffff' : '#212731',
                          background: activeSection === i ? '#3082CF' : 'transparent',
                          border: 'none',
                          borderTop: i === 0 ? 'none' : '1px solid #EBF8FF',
                          cursor: 'pointer',
                        }}
                      >
                        {section.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {sections.map((section, i) => (
                <div key={section.id} style={{ display: activeSection === i ? 'block' : 'none' }}>
                  <p style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.7, color: '#212731', marginBottom: 24 }} className="curriculum-subtitle">
                    {section.subtitle}
                  </p>
                  <div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}
                    className="curriculum-grid"
                  >
                    {section.lessons.map((lesson, li) => (
                      <button
                        key={li}
                        onClick={() => openModal(lesson)}
                        style={{
                          background: '#ffffff',
                          border: '1px solid rgba(100, 180, 237, 0.75)',
                          borderRadius: 8,
                          padding: '14px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          minHeight: 88,
                          cursor: 'pointer',
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'border-color 0.15s',
                          fontFamily: "'Nunito', sans-serif",
                          textAlign: 'left',
                          width: '100%',
                        }}
                        className="lesson-card"
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 16, fontWeight: 700, color: '#212731', lineHeight: 1.3, marginBottom: 4 }}>
                            {lesson.name}
                          </div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: '#3082CF' }}>
                            {lesson.grade}
                          </div>
                        </div>
                        <PlayIcon />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lessonModalTitle"
        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(26, 40, 60, 0.55)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          opacity: modalOpen ? 1 : 0,
          pointerEvents: modalOpen ? 'all' : 'none',
          transition: 'opacity 0.2s ease',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: 20,
            width: '100%',
            maxWidth: 560,
            boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
            overflow: 'hidden',
            transform: modalOpen ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.98)',
            transition: 'transform 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '24px 24px 16px', gap: 12 }}>
            <div>
              <div id="lessonModalTitle" style={{ fontSize: 22, fontWeight: 800, color: '#212731', lineHeight: 1.25 }}>
                {modalLesson?.name}
              </div>
              <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#3082CF', background: '#DAF0FB', borderRadius: 20, padding: '3px 10px', marginTop: 6 }}>
                {modalLesson?.grade}
              </span>
            </div>
            <button
              aria-label="Close preview"
              onClick={closeModal}
              style={{
                flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: '#EAEAEC',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', border: 'none', transition: 'background 0.15s',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="#63676E" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div style={{
            margin: '0 24px', background: '#F0F9FD', border: '1px solid #BEE3F8', borderRadius: 12,
            height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: '#909398',
          }}>
            <div style={{ width: 52, height: 52, background: '#DAF0FB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#BEE3F8"/>
                <path d="M10 8L17 12L10 16V8Z" fill="#3082CF"/>
              </svg>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#909398' }}>Lesson preview coming soon</span>
          </div>
          <div style={{ padding: '20px 24px 24px', display: 'flex', gap: 10 }}>
            <button style={{ flex: 1, height: 44, borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', border: 'none', background: '#DAF0FB', color: '#3082CF', fontFamily: "'Nunito', sans-serif" }}>
              Learn More
            </button>
            <button style={{ flex: 1, height: 44, borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', border: 'none', background: '#3082CF', color: '#ffffff', fontFamily: "'Nunito', sans-serif" }}>
              Assign to Class →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .lesson-card:hover { border-color: rgba(100, 180, 237, 1) !important; }
        .curriculum-nav-item:hover { color: #64B4ED !important; }

        /* Default: show sidebar, hide mobile dropdown */
        .curriculum-dropdown-wrap { display: none; }
        .curriculum-panel         { overflow: visible; }

        @media (max-width: 1100px) {
          .curriculum-title { font-size: 32px !important; }
          .curriculum-sidebar { flex: 0 0 200px !important; }
          .curriculum-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .curriculum-deco { width: 280px !important; }
        }
        @media (max-width: 860px) {
          .curriculum-section { padding: 56px 0 !important; }
          .curriculum-header { flex-direction: column !important; align-items: flex-start !important; gap: 0 !important; }
          .curriculum-deco { display: none !important; }
          .curriculum-body { flex-direction: column !important; gap: 24px !important; }
          .curriculum-sidebar { flex: none !important; width: 100% !important; }
          .curriculum-nav { border-left: none !important; display: flex !important; flex-wrap: wrap !important; gap: 6px !important; padding-top: 12px !important; }
          .curriculum-nav-item { height: auto !important; padding: 7px 16px !important; border-radius: 20px !important; border: 1px solid rgba(144,206,244,0.3) !important; }
          .curriculum-nav-item.is-active { background: #3082CF !important; border-color: #3082CF !important; color: #ffffff !important; }
        }
        @media (max-width: 640px) {
          .curriculum-dropdown-wrap { display: block; }
          .curriculum-sidebar       { display: none !important; }
          .curriculum-panel         { overflow: visible !important; }
        }
        @media (max-width: 600px) {
          .curriculum-title { font-size: 26px !important; }
          .curriculum-grid { grid-template-columns: 1fr 1fr !important; }
          .curriculum-panel { padding: 20px 16px !important; min-height: 0 !important; }
          .curriculum-subtitle { font-size: 16px !important; }
        }
        @media (max-width: 480px) {
          .curriculum-title { font-size: 22px !important; }
          .curriculum-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
