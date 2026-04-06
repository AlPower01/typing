'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Bullet {
  html: string
}

interface AccordionItem {
  label: string
  text: string
}

interface Panel {
  title: string
  desc?: string
  ctaText?: string
  ctaHref?: string
  imgSrc: string
  imgAlt: string
  bullets?: Bullet[]
  accordionItems?: AccordionItem[]
  paragraphs?: string[]
}

interface FeaturesTab {
  label: string
}

type Theme = 'orange' | 'blue' | 'green'

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
  subtitle?: string
  tabs: FeaturesTab[]
  panels: Panel[]
}

const Chevron = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
    <path d="M3 6l5 5 5-5" stroke="#3082CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function FeaturesSection({ variant, theme = 'blue', badge, title, subtitle, tabs, panels }: FeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0)

  const handleTabChange = (i: number) => {
    setActiveTab(i)
    setOpenAccordionIndex(0)
    setDropdownOpen(false)
  }

  const handleAccordionClick = (ai: number) => {
    setOpenAccordionIndex(openAccordionIndex === ai ? -1 : ai)
  }

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
            margin: subtitle ? '0 auto 16px' : '0 auto',
          }} className="features-title">
            {title}
          </h2>
          {subtitle && (
            <p style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#63676e',
              lineHeight: 1.7,
              maxWidth: 680,
              margin: '0 auto',
            }}>
              {subtitle}
            </p>
          )}
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

          {/* Mobile dropdown */}
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
                    onClick={() => handleTabChange(i)}
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
          <div className="features-dropdown-spacer" style={{ height: 0 }} />

          {/* Tab bar */}
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
                onClick={() => handleTabChange(i)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 36,
                  padding: '0 14px',
                  borderRadius: 8,
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 15,
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
              {/* Left */}
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
                <h3 style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2, color: '#212731', marginBottom: 16 }} className="features-panel-title">
                  {panel.title}
                </h3>

                {/* Accordion items (student panels) */}
                {panel.accordionItems && (
                  <div style={{ display: 'flex', flexDirection: 'column', margin: '4px 0 0' }}>
                    {panel.accordionItems.map((item, ai) => (
                      <div
                        key={ai}
                        style={{
                          borderBottom: '1px solid #EAEAEC',
                          ...(ai === 0 ? { borderTop: '1px solid #EAEAEC' } : {}),
                        }}
                      >
                        <button
                          aria-expanded={openAccordionIndex === ai}
                          onClick={() => handleAccordionClick(ai)}
                          className="features-accordion-btn"
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 12,
                            padding: '13px 0',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: "'Nunito', sans-serif",
                            fontSize: 18,
                            fontWeight: 700,
                            color: '#3082CF',
                            textAlign: 'left',
                          }}
                        >
                          {item.label}
                          <span style={{
                            fontSize: 22,
                            fontWeight: 400,
                            color: '#3082CF',
                            lineHeight: 1,
                            flexShrink: 0,
                            display: 'inline-block',
                            width: 20,
                            textAlign: 'center',
                          }}>
                            {openAccordionIndex === ai ? '−' : '+'}
                          </span>
                        </button>
                        <div style={{
                          display: 'grid',
                          gridTemplateRows: openAccordionIndex === ai ? '1fr' : '0fr',
                          transition: 'grid-template-rows 0.25s ease',
                        }}>
                          <div style={{ overflow: 'hidden' }}>
                            <p style={{
                              padding: '2px 0 14px',
                              fontSize: 16,
                              fontWeight: 500,
                              color: '#63676E',
                              lineHeight: 1.65,
                              margin: 0,
                            }}>
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Plain paragraphs (panels 3 & 6) */}
                {panel.paragraphs && (
                  <div>
                    {panel.paragraphs.map((para, pi) => (
                      <p key={pi} style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#63676E',
                        lineHeight: 1.7,
                        marginBottom: 16,
                        margin: pi < panel.paragraphs!.length - 1 ? '0 0 16px' : 0,
                      }}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* Regular desc (teacher panels) */}
                {panel.desc && (
                  <p style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.7, color: '#797C81', marginBottom: 16 }} className="features-panel-desc">
                    {panel.desc}
                  </p>
                )}

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

                {panel.ctaText && panel.ctaHref && (
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
                )}
              </div>

              {/* Right — image */}
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

        .features-accordion-btn:hover { color: #1a5fa8 !important; }

        .features-dropdown-wrap { display: none; }

        @media (max-width: 640px) {
          .features-dropdown-wrap { display: block; padding-bottom: 16px !important; }
          .features-tablist       { display: none !important; }
        }

        @media (max-width: 1100px) {
          .features-title       { font-size: 32px !important; }
          .features-panel-left  { padding: 40px 36px 40px 40px !important; }
          .features-panel-desc  { font-size: 18px !important; }
          .features-tablist button { padding: 0 10px !important; }
        }
        @media (max-width: 860px) {
          .features-section      { padding: 56px 0 !important; }
          .features-panel        { flex-direction: column !important; min-height: auto !important; }
          .features-panel-left   { flex: none !important; padding: 36px 32px !important; }
          .features-panel-right  { flex: none !important; border-left: none !important; border-top: 1px solid #90CEF4 !important; border-radius: 0 !important; height: 260px !important; position: relative !important; padding: 20px !important; }
          .features-panel-right > div { height: 100% !important; }
          .features-title        { font-size: 28px !important; }
          .features-tablist button { padding: 0 8px !important; }
        }
        @media (max-width: 600px) {
          .features-section      { padding: 48px 0 !important; }
          .features-title        { font-size: 24px !important; }
          .features-panel-title  { font-size: 20px !important; }
          .features-panel-desc   { font-size: 16px !important; }
          .features-panel-left   { padding: 28px 20px !important; }
          .features-panel-right  { height: 220px !important; padding: 16px !important; }
        }
      `}</style>
    </section>
  )
}
