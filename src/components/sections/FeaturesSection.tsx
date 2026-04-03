'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Bullet {
  html: string
}

interface Panel {
  title: string
  desc: string
  ctaText: string
  ctaHref: string
  imgSrc: string
  imgAlt: string
  bullets?: Bullet[]
}

interface FeaturesTab {
  label: string
}

type Theme = 'orange' | 'blue' | 'green'

// Only the section background changes per theme — everything else is always blue
const SECTION_BG: Record<Theme, string> = {
  orange: '#FEF3EC',
  blue:   '#EBF8FF',
  green:  '#D7F4DB',
}

interface FeaturesSectionProps {
  variant: 'student' | 'teacher'
  theme?: Theme
  badge: string
  title: string
  tabs: FeaturesTab[]
  panels: Panel[]
}

const Chevron = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
    <path d="M3 6l5 5 5-5" stroke="#3082CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function FeaturesSection({ variant, theme = 'blue', badge, title, tabs, panels }: FeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <section
      aria-label={variant === 'student' ? 'Student features' : 'Teacher and admin features'}
      style={{
        background: SECTION_BG[theme],
        borderTop: '1px solid #90CEF4',
        position: 'relative',
        overflow: 'hidden',
        padding: '72px 0',
        marginTop: variant === 'student' ? 56 : 0,
        ['--features-cta-shadow' as string]: '#90CEF4',
      } as React.CSSProperties}
      className="features-section"
    >
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#F7FDFF',
            border: '1px solid #BCE2F8',
            borderRadius: 999,
            padding: '10px 24px',
            color: '#3082CF',
            fontWeight: 800,
            fontSize: 14,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            marginBottom: 20,
          }}>
            {badge}
          </div>
          <h2 style={{
            fontSize: 38,
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#212731',
            maxWidth: 818,
            margin: '0 auto',
          }} className="features-title">
            {title}
          </h2>
        </div>

        {/* Card */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #90CEF4',
          borderRadius: 24,
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}>

          {/* Mobile dropdown — inside card, hidden on desktop */}
          <div style={{ position: 'relative', padding: '16px 16px 0' }} className="features-dropdown-wrap">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#F7FDFF',
                border: '1px solid #90CEF4',
                borderRadius: dropdownOpen ? '10px 10px 0 0' : 10,
                padding: '10px 14px',
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: '#212731',
                cursor: 'pointer',
              }}
              className="features-dropdown-btn"
            >
              <span style={{ color: '#3082CF', fontWeight: 800 }}>{tabs[activeTab].label}</span>
              <Chevron open={dropdownOpen} />
            </button>
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: '#ffffff',
                border: '1px solid #90CEF4',
                borderTop: 'none',
                borderRadius: '0 0 10px 10px',
                zIndex: 50,
                overflow: 'hidden',
                boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
              }}>
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveTab(i); setDropdownOpen(false) }}
                    style={{
                      width: '100%',
                      display: 'block',
                      padding: '11px 14px',
                      textAlign: 'left',
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 14,
                      fontWeight: activeTab === i ? 800 : 600,
                      color: activeTab === i ? '#ffffff' : '#212731',
                      background: activeTab === i ? '#3082CF' : 'transparent',
                      border: 'none',
                      borderTop: i === 0 ? 'none' : '1px solid #EBF8FF',
                      cursor: 'pointer',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Spacer below dropdown so card border shows beneath it */}
          <div className="features-dropdown-spacer" style={{ height: 0 }} />

          {/* Tab bar — hidden on mobile, replaced by dropdown above */}
          <div
            role="tablist"
            aria-label={variant === 'student' ? 'Feature categories' : 'Teacher feature categories'}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              padding: '16px 20px',
              background: 'rgba(235,247,253,0.3)',
              borderBottom: '1px solid #90CEF4',
              minHeight: 73,
            }}
            className="features-tablist"
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  padding: '0 18px',
                  borderRadius: 8,
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 16,
                  fontWeight: activeTab === i ? 800 : 700,
                  color: activeTab === i ? '#ffffff' : '#909398',
                  background: activeTab === i ? '#3082CF' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s, background 0.15s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panels */}
          {panels.map((panel, i) => (
            <div
              key={i}
              role="tabpanel"
              style={{
                display: activeTab === i ? 'flex' : 'none',
                width: '100%',
                flexDirection: 'row',
                minHeight: variant === 'student' ? 520 : 440,
              }}
              className="features-panel"
            >
              {/* Left — text + CTA */}
              <div
                style={{
                  flex: '0 0 50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '48px 40px 48px 56px',
                }}
                className="features-panel-left"
              >
                <h3 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: '#212731', marginBottom: 16 }} className="features-panel-title">
                  {panel.title}
                </h3>
                <p style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.7, color: '#797C81', marginBottom: 16 }} className="features-panel-desc">
                  {panel.desc}
                </p>
                {panel.bullets && panel.bullets.length > 0 && (
                  <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {panel.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, lineHeight: 1.55, color: '#212731', fontWeight: 500 }}
                      >
                        <span style={{ color: '#3082CF', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                        <span dangerouslySetInnerHTML={{ __html: b.html }} />
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={panel.ctaHref}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                    background: '#DAF0FB',
                    color: '#2C5281',
                    border: '1px solid #64B4ED',
                    borderRadius: 18,
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 900,
                    fontSize: 16,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    padding: '14px 32px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 0 #90CEF4',
                    transition: 'transform 0.08s ease, box-shadow 0.08s ease',
                  }}
                  className="features-cta"
                >
                  {panel.ctaText}
                </a>
              </div>

              {/* Right — image panel */}
              <div
                style={{
                  flex: 1,
                  borderRadius: '12px 0 0 0',
                  overflow: 'hidden',
                  padding: '24px 24px 24px 0',
                }}
                className="features-panel-right"
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src="/images/feature_dummy.png"
                    alt={panel.imgAlt}
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-cta:hover  { transform: translateY(3px); box-shadow: 0 3px 0 var(--features-cta-shadow) !important; }
        .features-cta:active { transform: translateY(6px); box-shadow: 0 0 0 var(--features-cta-shadow) !important; }

        /* Default: show tab bar, hide mobile dropdown */
        .features-dropdown-wrap { display: none; }

        @media (max-width: 640px) {
          .features-dropdown-wrap { display: block; padding-bottom: 16px !important; }
          .features-tablist       { display: none !important; }
        }

        @media (max-width: 1100px) {
          .features-title       { font-size: 32px !important; }
          .features-panel-left  { padding: 40px 36px 40px 40px !important; }
          .features-panel-desc  { font-size: 18px !important; }
        }
        /* Shrink tabs to stay on one line as long as possible */
        @media (max-width: 1100px) {
          .features-tablist button { font-size: 14px !important; padding: 0 10px !important; height: 36px !important; }
        }
        /* Once wrapping is inevitable, restore readable size */
        @media (max-width: 760px) {
          .features-tablist button { font-size: 16px !important; padding: 0 14px !important; height: 40px !important; }
        }
        @media (max-width: 860px) {
          .features-section      { padding: 56px 0 !important; }
          .features-panel        { flex-direction: column !important; min-height: auto !important; }
          .features-panel-left   { flex: none !important; padding: 36px 32px !important; }
          .features-panel-right  { flex: none !important; border-left: none !important; border-top: 1px solid #90CEF4 !important; border-radius: 0 !important; height: 260px !important; position: relative !important; padding: 20px !important; }
          .features-panel-right > div { height: 100% !important; }
          .features-title        { font-size: 28px !important; }
        }
        @media (max-width: 600px) {
          .features-section      { padding: 48px 0 !important; }
          .features-title        { font-size: 24px !important; }
          .features-panel-title  { font-size: 22px !important; }
          .features-panel-desc   { font-size: 16px !important; }
          .features-panel-left   { padding: 28px 20px !important; }
          .features-panel-right  { height: 220px !important; padding: 16px !important; }
        }
      `}</style>
    </section>
  )
}
