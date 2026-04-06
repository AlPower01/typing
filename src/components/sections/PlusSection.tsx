import React from 'react'
import Image from 'next/image'

interface PlusRow {
  feature: string
  free: boolean
  plus: boolean
}

interface PlusSectionProps {
  rows: PlusRow[]
  showPricing?: boolean
}

const CheckFree = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-label="Included">
    <circle cx="16" cy="16" r="16" fill="white"/>
    <path d="M9 16.5l5 5 9-9" stroke="#3082CF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckPlus = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-label="Included">
    <circle cx="16" cy="16" r="16" fill="#F4CA66"/>
    <path d="M9 16.5l5 5 9-9" stroke="#3B5E2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Dash = () => (
  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18, fontWeight: 900, color: 'rgba(255,255,255,0.45)' }} aria-label="Not included">--</span>
)

export default function PlusSection({ rows, showPricing = true }: PlusSectionProps) {
  return (
    <section id="plus" style={{ background: '#3082CF', padding: '80px 0', position: 'relative', overflow: 'hidden' }} aria-label="School Plus pricing">

      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 36px' }}>
        {/* Intro */}
        <div style={{ maxWidth: 'min(640px, calc(100% - 461px))', marginBottom: 0, paddingBottom: 36 }} className="plus-intro">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(to right, #f7d78c, #f4ca66)', border: '1px solid #f1bc41',
            borderRadius: 999, padding: '8px 20px 8px 14px',
            fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '0.05em', color: '#614c19', marginBottom: 20,
          }}>
            <Image src="/images/crown_icon.svg" alt="" width={20} height={20} />
            School Plus
          </div>
          <h2 style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 38, fontWeight: 700, lineHeight: 1.2,
            color: '#ffffff', margin: '0 0 16px',
          }} className="plus-title">
            Everything in Free — plus the tools that make teaching measurable.
          </h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 20, fontWeight: 500, lineHeight: 1.7, color: '#ffffff', margin: 0 }} className="plus-desc">
            <strong>Core Typing is free.</strong> PLUS adds assignments, real-time tracking, auto-grading, no ads, and full Beyond Typing access.
          </p>
        </div>

        {/* Comparison grid */}
        <div
          role="table"
          aria-label="Free vs Plus plan comparison"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 210px 217px',
            marginTop: -111,
            marginBottom: 32,
            paddingRight: 34,
          }}
          className="plus-comparison"
        >
          {/* Glass panel */}
          <div
            aria-hidden
            style={{
              position: 'absolute', bottom: 40, left: 0, right: 0, top: 111,
              background: 'rgba(69,142,212,0.8)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 24,
              zIndex: 0,
              pointerEvents: 'none',
            }}
            className="plus-glass"
          />

          {/* Column headers */}
          <div role="columnheader" aria-label="Feature" style={{ position: 'relative', zIndex: 1, height: 111, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          <div role="columnheader" className="plus-free-col plus-free-header" style={{
            position: 'relative', zIndex: 1, height: 111,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginLeft: 20, background: '#2e6aa8', border: '2px solid #2b6bb1',
            borderBottom: '1px dashed rgba(255,255,255,0.3)', borderRadius: '32px 32px 0 0',
          }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 28, fontWeight: 700, color: '#ffffff' }} className="plus-th-label">FREE</span>
          </div>
          <div role="columnheader" aria-label="Plus plan" className="plus-plus-col plus-plus-header" style={{
            position: 'relative', zIndex: 1, height: 111,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginLeft: 27, background: 'linear-gradient(to right, #fcf2d8, #f9e4b3)',
            border: '1px solid #f1bc41', borderBottom: '1px dashed rgba(160,120,40,0.35)',
            borderRadius: '32px 32px 0 0',
          }}>
            <Image src="/images/crown_logo.svg" alt="PLUS" width={100} height={40} className="plus-logo-img" />
          </div>

          {/* Data rows */}
          {rows.map((row, i) => {
            const isFirst = i === 0
            const isLast = i === rows.length - 1
            return (
              <React.Fragment key={i}>
                <div
                  role="rowheader"
                  style={{
                    position: 'relative', zIndex: 1,
                    minHeight: 52, display: 'flex', alignItems: 'center',
                    fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, lineHeight: 1.3, color: '#ffffff',
                    borderTop: isFirst ? 'none' : '1px dashed rgba(255,255,255,0.3)',
                    padding: '10px 20px 10px 24px',
                  }}
                >
                  {row.feature}
                </div>
                <div
                  role="cell"
                  className="plus-free-col"
                  aria-label={row.free ? 'Free: included' : 'Free: not included'}
                  style={{
                    position: 'relative', zIndex: 1,
                    marginLeft: 20, minHeight: 52,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#2e6aa8',
                    borderTop: isFirst ? 'none' : '1px dashed rgba(255,255,255,0.3)',
                    borderLeft: '2px solid #2b6bb1', borderRight: '2px solid #2b6bb1',
                  }}
                >
                  {row.free ? <CheckFree /> : <Dash />}
                </div>
                <div
                  role="cell"
                  className="plus-plus-col"
                  aria-label={row.plus ? 'Plus: included' : 'Plus: not included'}
                  style={{
                    position: 'relative', zIndex: 1,
                    marginLeft: 27, minHeight: 52,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(to right, #fcf2d8, #f9e4b3)',
                    borderTop: isFirst ? 'none' : '1px dashed rgba(160,120,40,0.35)',
                    borderLeft: '1px solid #f1bc41', borderRight: '1px solid #f1bc41',
                  }}
                >
                  {row.plus ? <CheckPlus /> : <Dash />}
                </div>
              </React.Fragment>
            )
          })}

          {/* Lip row — extends FREE/PLUS caps below the glass panel */}
          <div aria-hidden style={{ position: 'relative', zIndex: 1, height: 40 }} />
          <div aria-hidden className="plus-free-col" style={{
            position: 'relative', zIndex: 1, height: 40, marginLeft: 20,
            background: '#2e6aa8',
            borderLeft: '2px solid #2b6bb1', borderRight: '2px solid #2b6bb1',
            borderBottom: '2px solid #2b6bb1',
            borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
          }} />
          <div aria-hidden className="plus-plus-col" style={{
            position: 'relative', zIndex: 1, height: 40, marginLeft: 27,
            background: 'linear-gradient(to right, #fcf2d8, #f9e4b3)',
            borderLeft: '1px solid #f1bc41', borderRight: '1px solid #f1bc41',
            borderBottom: '1px solid #f1bc41',
            borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
          }} />
        </div>

        {/* Mobile card layout — shown only at ≤640px */}
        <div className="plus-mobile-cards" style={{ marginBottom: 32 }}>
          {/* FREE / PLUS column labels */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, padding: '18px 16px 10px' }}>
            <span style={{ width: 44, textAlign: 'center', fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>FREE</span>
            <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}>
              <Image src="/images/crown_logo.svg" alt="PLUS" width={44} height={18} style={{ objectFit: 'contain' }} />
            </div>
          </div>
          {/* Feature rows */}
          {rows.map((row, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '14px 16px',
              borderTop: '1px dashed rgba(255,255,255,0.2)',
            }}>
              <span style={{ flex: 1, fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: '#ffffff', lineHeight: 1.45 }}>
                {row.feature}
              </span>
              <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                <div style={{ width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {row.free ? <CheckFree /> : <Dash />}
                </div>
                <div style={{ width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {row.plus ? <CheckPlus /> : <Dash />}
                </div>
              </div>
            </div>
          ))}
          {/* Bottom lip */}
          <div style={{ height: 16 }} />
        </div>

        {/* Get PLUS Now CTA — only shown when pricing card is hidden */}
        {!showPricing && <div style={{ marginBottom: 0 }}>
          <a
            href="/signup"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#ffcf46', color: '#2c5281',
              fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.04em',
              textDecoration: 'none', padding: '14px 32px',
              borderRadius: 18, boxShadow: '0 6px 0 #e5ba3f',
              transition: 'transform 0.08s ease, box-shadow 0.08s ease',
            }}
            className="plus-cta-primary"
          >
            <Image src="/images/crown_icon.svg" alt="" width={18} height={18} aria-hidden />
            Get PLUS Now
          </a>
        </div>}

        {/* Pricing CTA */}
        {showPricing && <div style={{
          background: 'rgba(44,82,129,0.5)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
          border: '2px solid #2b6bb1', borderRadius: 28, padding: '36px 40px 32px',
          textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
        }} className="plus-pricing">
          <Image src="/images/crown.svg" alt="" width={96} height={96} style={{ marginBottom: 16 }} />
          <p style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 32, fontWeight: 700, lineHeight: 1.2,
            color: '#ffffff', margin: '0 0 12px', maxWidth: 720,
          }} className="plus-pricing-headline">
            Pricing starts <span style={{ color: '#ffcf46' }}>$1.14/student</span> for large districts, bulk discounts
          </p>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, fontWeight: 500, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: '0 0 24px', maxWidth: 520 }} className="plus-pricing-sub">
            Get advanced reporting, classroom insights, and premium learning tools for your school or district.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }} className="plus-pricing-actions">
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.04em', textDecoration: 'none',
              padding: '14px 32px', borderRadius: 18,
              background: '#ffcf46', color: '#2c5281', boxShadow: '0 6px 0 #e5ba3f',
              transition: 'transform 0.08s ease, box-shadow 0.08s ease',
            }} className="plus-cta-primary">Generate Quote</a>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>OR</span>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.04em', textDecoration: 'none',
              padding: '14px 32px', borderRadius: 18,
              background: 'rgba(218,240,251,0.9)', color: '#2c5281', border: '1px solid #64b4ed',
              boxShadow: '0 6px 0 rgba(100,180,237,0.5)',
              transition: 'transform 0.08s ease, box-shadow 0.08s ease',
            }} className="plus-cta-secondary">Talk to Team</a>
          </div>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18, fontWeight: 500, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
            Alternatively, email our sales team: <a href="mailto:sales@typing.com" style={{ color: '#ffffff', fontWeight: 700, textDecoration: 'underline' }}>sales@typing.com</a>
          </p>
        </div>}
      </div>

      <style>{`
        .plus-cta-primary:hover { transform: translateY(3px); box-shadow: 0 3px 0 #e5ba3f !important; }
        .plus-cta-primary:active { transform: translateY(6px); box-shadow: 0 0 0 #e5ba3f !important; }
        .plus-cta-secondary:hover { transform: translateY(3px); box-shadow: 0 3px 0 rgba(100,180,237,0.5) !important; }
        .plus-cta-secondary:active { transform: translateY(6px); box-shadow: 0 0 0 rgba(100,180,237,0.5) !important; }
        @media (max-width: 1100px) {
          .plus-comparison { grid-template-columns: 1fr 160px 167px !important; padding-right: 0 !important; }
          .plus-th-label { font-size: 22px !important; }
          .plus-logo-img { width: 82px !important; }
        }

        /* Stack intro above table — prevents overlap at mid widths */
        @media (max-width: 960px) {
          .plus-intro { max-width: 100% !important; padding-bottom: 0 !important; margin-bottom: 32px !important; }
          .plus-comparison { margin-top: 0 !important; }
          .plus-glass { top: 111px !important; }
          .plus-title { font-size: 28px !important; }
          .plus-pricing-headline { font-size: 28px !important; }
        }

        /* Mobile card layout */
        .plus-mobile-cards { display: none; }

        @media (max-width: 768px) {
          .plus-title { font-size: 22px !important; }
          .plus-desc { font-size: 17px !important; }
          .plus-pricing { padding: 32px 24px 28px !important; }
          .plus-pricing-headline { font-size: 22px !important; }
          .plus-pricing-sub { font-size: 16px !important; }
          .plus-pricing-actions { flex-wrap: wrap !important; justify-content: center !important; }
          .plus-pricing-actions a { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 640px) {
          .plus-comparison  { display: none !important; }
          .plus-mobile-cards {
            display: block !important;
            background: rgba(69,142,212,0.72) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.25) !important;
            border-radius: 20px !important;
            overflow: hidden !important;
          }
        }
      `}</style>
    </section>
  )
}
