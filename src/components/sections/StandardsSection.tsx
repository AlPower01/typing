'use client'

import { useState } from 'react'
import Link from 'next/link'

interface StandardsItem {
  label: string
  text: string
}

const ITEMS: StandardsItem[] = [
  {
    label: 'ISTE & Common Core',
    text: 'National standards coverage for every classroom, regardless of state.',
  },
  {
    label: '11 State-Specific Alignments',
    text: 'Downloadable correlation documents for Arizona, Alaska, Florida, Idaho, Indiana, Minnesota, Nebraska, New Jersey, Oklahoma, South Carolina, and Virginia.',
  },
  {
    label: 'Dedicated Curricula for Texas & New York',
    text: 'Custom-built curriculum for Texas Proclamation 2024 (100% TEKS-aligned, grades K–6) and New York state standards.',
  },
  {
    label: 'Standards Viewer in the Portal',
    text: 'Faculty can view exactly how each lesson aligns to specific state standards from within the teacher portal — no need to cross-reference external documents.',
  },
  {
    label: 'Scope & Sequence Downloads',
    text: 'Access ready-made planning documents for curriculum mapping and administrator review.',
  },
]

export default function StandardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="standards"
      aria-label="Standards alignment"
      style={{ background: '#ffffff', borderTop: '1px solid #EAEAEC', padding: '88px 0 80px' }}
    >
      <div
        style={{ maxWidth: 1368, margin: '0 auto', padding: '0 48px', display: 'flex', gap: 80, alignItems: 'flex-start' }}
        className="standards-wrap"
      >

        {/* ── Left: label / title / subtitle / CTA ─────────────────────── */}
        <div style={{ flex: '0 0 420px' }} className="standards-left">
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '8px 20px',
            background: '#f7fdff', border: '1px solid #bce2f8', borderRadius: 222,
            fontSize: 13, fontWeight: 800, color: '#3082cf',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            marginBottom: 20,
          }}>
            Standards
          </span>

          <h2 style={{
            fontSize: 38, fontWeight: 800, color: '#212731',
            lineHeight: 1.2, margin: '0 0 20px',
          }} className="standards-h2">
            Aligned to the standards your state already requires.
          </h2>

          <p style={{
            fontSize: 17, fontWeight: 500, color: '#63676e',
            lineHeight: 1.75, margin: '0 0 36px',
          }} className="standards-sub">
            Typing.com maps its curriculum to state and national standards so you can meet
            compliance requirements without bolting on a separate resource. View alignment
            details directly from the teacher portal — grade by grade, standard by standard.
          </p>

          <Link
            href="/standards"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 16, fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.04em',
              textDecoration: 'none',
              padding: '13px 28px', borderRadius: 18,
              background: '#3082cf', color: '#ffffff',
              boxShadow: '0 6px 0 #1a5fa8',
              transition: 'transform 0.08s ease, box-shadow 0.08s ease',
            }}
            className="standards-cta"
          >
            View Standards Alignment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ── Right: accordion ─────────────────────────────────────────── */}
        <div style={{ flex: '1 1 0', minWidth: 0 }} className="standards-right">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  style={{
                    background: '#f7fdff',
                    border: `1px solid ${isOpen ? '#90CEF4' : '#daeeff'}`,
                    borderRadius: 14,
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <button
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', gap: 16,
                      padding: '0 24px 0 28px', minHeight: 68,
                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    }}
                    className="standards-btn"
                  >
                    <span style={{
                      fontSize: 18, fontWeight: 700, color: '#3082cf', lineHeight: 1.3,
                    }} className="standards-label">
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0, width: 30, height: 30,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 26, fontWeight: 900, color: '#3082cf', lineHeight: 1,
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.25s ease',
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    role="region"
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.28s ease',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{
                        padding: '0 28px 22px',
                        fontSize: 16, fontWeight: 500, color: '#63676e',
                        lineHeight: 1.7, margin: 0,
                      }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <style>{`
        .standards-cta:hover  { transform: translateY(3px); box-shadow: 0 3px 0 #1a5fa8 !important; }
        .standards-cta:active { transform: translateY(6px); box-shadow: 0 0   0 #1a5fa8 !important; }
        .standards-btn:hover .standards-label { color: #1a5fa8 !important; }
        @media (max-width: 1024px) {
          .standards-left  { flex: 0 0 360px !important; }
          .standards-wrap  { gap: 56px !important; }
        }
        @media (max-width: 860px) {
          .standards-wrap  { flex-direction: column !important; gap: 40px !important; }
          .standards-left  { flex: none !important; width: 100% !important; }
        }
        @media (max-width: 600px) {
          .standards-wrap  { padding: 0 20px !important; }
          .standards-h2    { font-size: 28px !important; }
          .standards-sub   { font-size: 16px !important; }
          .standards-btn   { min-height: 58px !important; padding: 0 18px 0 20px !important; }
        }
      `}</style>
    </section>
  )
}
