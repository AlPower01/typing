'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface AccessCard {
  iconSrc: string
  title: string
  desc: string
}

interface AccessibilitySectionProps {
  cards: AccessCard[]
}

export default function AccessibilitySection({ cards }: AccessibilitySectionProps) {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const getVisible = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 600) return 1
    if (window.innerWidth <= 900) return 2
    return 3
  }

  const maxIndex = cards.length - getVisible()

  const update = (idx: number) => {
    const track = trackRef.current
    if (!track) return
    const cardEls = Array.from(track.querySelectorAll('.access-card-item')) as HTMLElement[]
    if (cardEls.length === 0) return
    const gap = 24
    const cardWidth = cardEls[0].offsetWidth
    track.style.transform = `translateX(-${idx * (cardWidth + gap)}px)`
  }

  useEffect(() => {
    update(current)
  }, [current])

  useEffect(() => {
    const handler = () => {
      const visible = getVisible()
      const max = cards.length - visible
      const clamped = Math.min(current, Math.max(0, max))
      setCurrent(clamped)
      update(clamped)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [current, cards.length])

  const WcagBadge = () => (
    <div aria-label="WCAG 2.2 AA Certified" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', top: -14, left: -14, width: 46, height: 46,
        background: '#58d06c', border: '2.5px solid #30c549', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }} aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M5 11.5L9 15.5L17 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div style={{ background: '#3082cf', borderRadius: '12px 12px 0 0', padding: '18px 44px 16px', textAlign: 'center' }}>
        <span style={{ display: 'block', fontSize: 27, fontWeight: 900, color: '#fff', letterSpacing: 1.6, lineHeight: 1 }}>WCAG 2.2 AA</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #3082cf', borderTop: 'none', borderRadius: '0 0 12px 12px', padding: '11px 44px', textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.48)', letterSpacing: 5, textTransform: 'uppercase' }}>
        Certification
      </div>
    </div>
  )

  return (
    <section id="accessibility" style={{ padding: '88px 0 80px', background: '#ffffff', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 48px' }} className="access-wrap">
        <div style={{ marginBottom: 52 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '8px 20px',
            background: '#f7fdff', border: '1px solid #bce2f8', borderRadius: 222,
            fontSize: 13, fontWeight: 800, color: '#3082cf', textTransform: 'uppercase', letterSpacing: '0.08em',
            marginBottom: 18,
          }}>
            Accessibility
          </span>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: '#212731', lineHeight: 1.2, marginBottom: 0 }} className="access-title">
            Built for every learner.
          </h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
            <p style={{ fontSize: 18, fontWeight: 500, color: '#63676e', lineHeight: 1.7, maxWidth: 480, flex: '0 1 auto', minWidth: 200 }}>
              Typing.com is WCAG 2.2 AA certified and designed to support learners of all abilities and diverse learning needs.
            </p>
            <div className="wcag-desktop" style={{ marginLeft: 'auto', flexShrink: 0 }}>
              <WcagBadge />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div style={{ overflow: 'visible' }}>
        <div style={{ overflow: 'visible' }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: 24,
              paddingLeft: 'max(48px, calc((100vw - 1368px) / 2 + 48px))',
              transition: 'transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform',
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="access-card-item"
                style={{
                  flexShrink: 0,
                  width: 'calc((100vw - max(48px, calc((100vw - 1368px) / 2 + 48px)) - 132px) / 3)',
                  background: '#f7fdff',
                  border: '1px solid #64b4ed',
                  borderRadius: 24,
                  boxShadow: '0px 6px 0px 0px rgba(144,206,244,0.6)',
                  padding: '32px 28px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{
                  width: 56, height: 56, background: 'rgba(48,130,207,0.08)',
                  borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Image src={`/${card.iconSrc}`} alt="" aria-hidden width={34} height={34} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#212731', lineHeight: 1.3, margin: 0 }}>{card.title}</h3>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#63676e', lineHeight: 1.6, flex: 1, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 32 }}>
          <div className="wcag-mobile" style={{ display: 'none' }}>
            <WcagBadge />
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 12 }} aria-label="Carousel navigation">
            <button
              aria-label="Previous cards"
              disabled={current === 0}
              onClick={() => { if (current > 0) { const n = current - 1; setCurrent(n); update(n) } }}
              style={{
                width: 48, height: 48, borderRadius: '50%', border: 'none',
                background: '#3082cf', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                opacity: current === 0 ? 0.32 : 1, transition: 'opacity 0.2s, background 0.2s',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="11 4 6 9 11 14"/>
              </svg>
            </button>
            <button
              aria-label="Next cards"
              disabled={current >= maxIndex}
              onClick={() => {
                const visible = getVisible()
                const max = cards.length - visible
                if (current < max) { const n = current + 1; setCurrent(n); update(n) }
              }}
              style={{
                width: 48, height: 48, borderRadius: '50%', border: 'none',
                background: '#3082cf', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: current >= maxIndex ? 'not-allowed' : 'pointer',
                opacity: current >= maxIndex ? 0.32 : 1, transition: 'opacity 0.2s, background 0.2s',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="7 4 12 9 7 14"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .access-card-item { width: calc((100vw - 48px - 88px) / 2) !important; }
        }
        @media (max-width: 600px) {
          .access-title { font-size: 28px !important; }
          .wcag-desktop { margin-left: 0 !important; }
          .wcag-mobile { display: none !important; }
          .access-card-item { width: calc(100vw - 68px) !important; padding: 24px 20px !important; }
          .access-wrap { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  )
}
