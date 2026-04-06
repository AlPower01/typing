'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isEducator = pathname.startsWith('/educator')
  const isIndividual = pathname.startsWith('/individual')
  const isHomeschool = pathname.startsWith('/homeschool')

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches)
  }, [])

  useEffect(() => {
    if (isHome) return
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Element
      if (!target.closest('.persona-wrap')) {
        setDropdownOpen(false)
      }
      if (!target.closest('.nav-root')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 90
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16
      window.scrollTo({ top, behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const isInnerPage = isEducator || isIndividual || isHomeschool

  const navStyle: React.CSSProperties = isHome
    ? { position: 'relative', background: 'transparent', boxShadow: 'none' }
    : {
        position: 'sticky',
        top: 0,
        background: '#ffffff',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.2s ease',
      }

  return (
    <header
      className="nav-root w-full z-[1000]"
      style={navStyle}
    >
      <nav
        style={{
          maxWidth: 1368,
          margin: '0 auto',
          height: 90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 36px',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Typing.com home" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
          <Image src="/images/Logo.svg" alt="typing.com" width={174} height={38} style={{ display: 'block', objectFit: 'contain', objectPosition: 'left center' }} />
        </Link>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen) }}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
          }}
          className="hamburger-btn"
        >
          <span style={{
            display: 'block', width: 24, height: 2, background: '#212731', borderRadius: 2,
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
          }} />
          <span style={{
            display: 'block', width: 24, height: 2, background: '#212731', borderRadius: 2,
            opacity: menuOpen ? 0 : 1,
            transition: 'transform 0.25s ease, opacity 0.25s ease',
          }} />
          <span style={{
            display: 'block', width: 24, height: 2, background: '#212731', borderRadius: 2,
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
          }} />
        </button>

        {/* Menu */}
        <div
          className="site-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {/* Persona dropdown - hidden on home */}
          {isInnerPage && (
            <>
              <div
                className="persona-wrap"
                style={{ position: 'relative', flexShrink: 0 }}
                onMouseEnter={!isTouch ? () => {
                  if (closeTimer.current) clearTimeout(closeTimer.current)
                  setDropdownOpen(true)
                } : undefined}
                onMouseLeave={!isTouch ? () => {
                  closeTimer.current = setTimeout(() => setDropdownOpen(false), 120)
                } : undefined}
              >
                <button
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen) }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    color: '#212731',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>
                    <span style={{ color: '#212731', fontWeight: 600 }}>TYPING FOR </span>
                    <span style={{ color: '#3082CF', fontWeight: 800 }}>
                      {isIndividual ? 'INDIVIDUALS' : isHomeschool ? 'HOMESCHOOLERS' : 'EDUCATORS'}
                    </span>
                  </span>
                  <svg
                    width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"
                    style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', color: '#3082CF' }}
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 20px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 437,
                      background: '#ffffff',
                      borderRadius: 16,
                      boxShadow: '0px 1px 14px 0px rgba(0,0,0,0.12)',
                      zIndex: 200,
                    }}
                    role="dialog"
                    aria-label="Choose your audience"
                  >
                    {/* Caret */}
                    <div style={{
                      position: 'absolute', top: -9, left: '50%', transform: 'translateX(-50%)',
                      width: 0, height: 0,
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderBottom: '10px solid #ffffff',
                      filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.08))',
                      zIndex: 1,
                    }} aria-hidden="true" />

                    <Link href="/educator" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 24px', textDecoration: 'none', color: 'inherit', borderRadius: '16px 16px 0 0' }}
                      className="persona-row-hover"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Image src="/images/educator_illo.svg" alt="" width={64} height={64} style={{ borderRadius: 12, objectFit: 'contain', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#212731', marginBottom: 2 }}>Educators</p>
                        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 500, color: '#63676e', lineHeight: 1.5 }}>From classrooms to districts, keyboarding and Beyond Typing.</p>
                      </div>
                    </Link>

                    <div style={{ height: 1, background: '#EAEAEC' }} aria-hidden="true" />

                    <Link href="/homeschool" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 24px', textDecoration: 'none', color: 'inherit' }}
                      className="persona-row-hover"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Image src="/images/homeschool_illo.svg" alt="" width={64} height={64} style={{ borderRadius: 12, objectFit: 'contain', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#212731', marginBottom: 2 }}>Homeschoolers</p>
                        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 500, color: '#63676e', lineHeight: 1.5 }}>Flexible at-home typing paths and parent visibility.</p>
                      </div>
                    </Link>

                    <div style={{ height: 1, background: '#EAEAEC' }} aria-hidden="true" />

                    <Link href="/individual" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 24px', textDecoration: 'none', color: 'inherit', borderRadius: '0 0 16px 16px' }}
                      className="persona-row-hover"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Image src="/images/individual_illo.svg" alt="" width={64} height={64} style={{ borderRadius: 12, objectFit: 'contain', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#212731', marginBottom: 2 }}>Individuals</p>
                        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 500, color: '#63676e', lineHeight: 1.5 }}>Self-paced practice for one-off typers and personal goals.</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="nav-divider" style={{ width: 1, height: 24, background: '#EAEAEC', margin: '0 28px', flexShrink: 0 }} aria-hidden="true" />
            </>
          )}

          {/* Page-specific anchor links — hidden below 1101px */}
          {isInnerPage && (
            <>
              <ul className="nav-anchor-links" style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  { href: '#features',   label: 'Features' },
                  { href: '#curriculum', label: 'Curriculum' },
                  { href: '#plus',       label: 'Plus' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleAnchorClick(e, href)}
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        color: '#212731',
                        textDecoration: 'none',
                      }}
                      className="nav-link-hover"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="nav-anchor-divider" style={{ width: 1, height: 24, background: '#EAEAEC', margin: '0 28px', flexShrink: 0 }} aria-hidden="true" />
            </>
          )}

          {/* Actions */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a
              href="/login"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: '#3082CF',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              className="nav-login-hover"
            >
              Log In
            </a>
            <a
              href="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFCF46',
                color: '#2A4365',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                fontSize: 14,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                padding: '11px 28px',
                borderRadius: 18,
                textDecoration: 'none',
                boxShadow: '0 6px 0 #E5BA3F',
                transition: 'transform 0.08s ease, box-shadow 0.08s ease',
              }}
              className="cta-btn-hover"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        /* ── Hover / active states ───────────────────────────────────────── */
        .nav-link-hover:hover { color: #3082CF !important; }
        .nav-login-hover:hover { color: #1a5fa8 !important; }
        .cta-btn-hover:hover  { transform: translateY(3px); box-shadow: 0 3px 0 #E5BA3F !important; }
        .cta-btn-hover:active { transform: translateY(6px); box-shadow: 0 0 0 #E5BA3F !important; }
        .persona-row-hover:hover { background: #f7fdff; }

        /* ── Mid (769–1100px): hide anchor links, keep persona + actions ── */
        @media (min-width: 769px) and (max-width: 1100px) {
          .nav-anchor-links   { display: none !important; }
          .nav-anchor-divider { display: none !important; }
        }

        /* ── Mobile (≤768px): show hamburger, collapse menu into panel ──── */
        @media (max-width: 768px) {
          .hamburger-btn { display: flex !important; }
          nav {
            height: 68px !important;
            padding: 0 20px !important;
            position: relative !important;
          }
          .site-menu {
            display: ${menuOpen ? 'flex' : 'none'} !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            position: absolute !important;
            top: 68px !important;
            left: 0 !important;
            right: 0 !important;
            background: #ffffff !important;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
            padding: 20px 20px 28px !important;
            border-top: 1px solid #EAEAEC !important;
            overflow-y: auto !important;
            max-height: calc(100vh - 68px) !important;
            z-index: 999 !important;
            gap: 0 !important;
          }
          /* Persona wrap full-width in mobile panel */
          .persona-wrap { width: 100% !important; }
          /* Stack dividers as horizontal rules in panel */
          .nav-divider,
          .nav-anchor-divider {
            display: block !important;
            width: 100% !important;
            height: 1px !important;
            margin: 12px 0 !important;
          }
          /* Show anchor links vertically in panel */
          .nav-anchor-links {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0 !important;
            width: 100% !important;
          }
          .nav-anchor-links li { width: 100%; }
          .nav-anchor-links a {
            display: block !important;
            padding: 12px 0 !important;
            font-size: 15px !important;
          }
          /* Stack actions */
          .nav-actions {
            flex-direction: column !important;
            align-items: flex-start !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .nav-actions a { width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }
        }
      `}</style>
    </header>
  )
}
