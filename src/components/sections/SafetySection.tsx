import Link from 'next/link'
import Image from 'next/image'

interface SafetySectionProps {
  description?: string
  theme?: 'orange' | 'blue' | 'green'
}

const THEME = {
  orange: {
    sectionBg:    '#FEF3EC',
    borderTop:    'none',
    borderBottom: 'none',
    iconBg:       'rgba(72,187,120,0.12)',
    iconStroke:   '#38A169',
    shieldFilter: 'none',
    badgeBg:      '#F0FAF0',
    badgeBorder:  '#84DC91',
    badgeColor:   '#276749',
  },
  blue: {
    sectionBg:    '#F0F9FD',
    borderTop:    '1px solid #BEE3F8',
    borderBottom: '1px solid #90CEF4',
    iconBg:       'rgba(48,130,207,0.12)',
    iconStroke:   '#3082CF',
    shieldFilter: 'brightness(0) saturate(100%) invert(39%) sepia(72%) saturate(600%) hue-rotate(185deg) brightness(95%) contrast(95%)',
    badgeBg:      '#f7fdff',
    badgeBorder:  '#bce2f8',
    badgeColor:   '#3082cf',
  },
  green: {
    sectionBg:    '#D7F4DB',
    borderTop:    '1px solid #84DC91',
    borderBottom: '1px solid #84DC91',
    iconBg:       'rgba(56,161,105,0.12)',
    iconStroke:   '#38A169',
    shieldFilter: 'brightness(0) saturate(100%) invert(42%) sepia(45%) saturate(700%) hue-rotate(110deg) brightness(95%) contrast(90%)',
    badgeBg:      '#F0FAF0',
    badgeBorder:  '#84DC91',
    badgeColor:   '#276749',
  },
}

const cards = [
  {
    label: 'COPPA Compliant',
    text: "Typing.com complies with the Children's Online Privacy Protection Act. Learners under 13 can use the platform with parental consent.",
  },
  {
    label: 'No Ads for PLUS Users',
    text: 'PLUS accounts are 100% ad-free. Free accounts display age-appropriate ads that never target users based on personal data.',
  },
  {
    label: 'No Data Sales',
    text: 'Typing.com never sells or shares personal data with third parties for advertising or commercial purposes.',
  },
  {
    label: 'Minimal Data Collection',
    text: "Accounts require only a username and password - no email required. The platform collects only what's necessary to deliver the service.",
  },
  {
    label: 'Data Deletion on Request',
    text: 'Parents and individuals can request deletion of data at any time by contacting support, or delete their own account from account settings.',
  },
]

export default function SafetySection({
  description = "Typing.com is built for families, which means privacy isn't an afterthought - it's the foundation. We never sell data. We never share it with advertisers.",
  theme = 'orange',
}: SafetySectionProps) {
  const t = THEME[theme]

  return (
    <section
      id="safety"
      style={{ background: t.sectionBg, borderTop: t.borderTop, borderBottom: t.borderBottom, padding: '88px 0 80px' }}
      className="safety-section"
    >
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 36px' }} className="safety-wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 72 }} className="safety-inner">

          {/* ── Left illustration ─────────────────────────────────────────── */}
          <div style={{ flex: '0 0 480px', position: 'relative', height: 500 }} className="safety-left">
            <Image
              src="/images/shield_safety.svg"
              alt=""
              aria-hidden
              width={340}
              height={400}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '62%', height: 'auto', pointerEvents: 'none', userSelect: 'none',
                filter: t.shieldFilter,
              }}
            />

            {/* Card 1 */}
            <div className="safety-float-card" style={{
              position: 'absolute', top: 80, left: 0,
              background: '#ffffff', borderRadius: 16,
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
              padding: '14px 18px', display: 'flex', alignItems: 'flex-start',
              gap: 12, maxWidth: 248, zIndex: 2,
            }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, background: t.iconBg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke={t.iconStroke} strokeWidth="1.6" fill="none"/>
                  <circle cx="7" cy="9" r="2" stroke={t.iconStroke} strokeWidth="1.5" fill="none"/>
                  <path d="M4 14c0-1.657 1.343-2 3-2s3 .343 3 2" stroke={t.iconStroke} strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="12" y1="8" x2="16" y2="8" stroke={t.iconStroke} strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="12" y1="11" x2="15" y2="11" stroke={t.iconStroke} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#212731', lineHeight: 1.55, margin: 0 }}>
                Personally Identifiable Information (PII) is never required to use Typing.com.
              </p>
            </div>

            {/* Card 2 */}
            <div className="safety-float-card safety-card-2" style={{
              position: 'absolute', top: 200, right: 0,
              background: '#ffffff', borderRadius: 16,
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
              padding: '14px 18px', display: 'flex', alignItems: 'flex-start',
              gap: 12, maxWidth: 248, zIndex: 2,
            }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, background: t.iconBg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="5" y="9" width="10" height="8" rx="2" stroke={t.iconStroke} strokeWidth="1.6" fill="none"/>
                  <path d="M7 9V6.5a3 3 0 0 1 6 0V9" stroke={t.iconStroke} strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="10" cy="13" r="1.2" fill={t.iconStroke}/>
                </svg>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#212731', lineHeight: 1.55, margin: 0 }}>
                All communication within Typing.com is TLS encrypted.
              </p>
            </div>

            {/* Card 3 */}
            <div className="safety-float-card" style={{
              position: 'absolute', top: 330, left: 10,
              background: '#ffffff', borderRadius: 16,
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
              padding: '14px 18px', display: 'flex', alignItems: 'flex-start',
              gap: 12, maxWidth: 248, zIndex: 2,
            }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, background: t.iconBg, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L3.5 5v5c0 3.87 2.78 7.5 6.5 8 3.72-.5 6.5-4.13 6.5-8V5L10 2z" stroke={t.iconStroke} strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
                  <path d="M7 10l2 2 4-4" stroke={t.iconStroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#212731', lineHeight: 1.55, margin: 0 }}>
                Typing.com never shares or sells any data, ever.
              </p>
            </div>
          </div>

          {/* ── Right: header + cards ─────────────────────────────────────── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              background: t.badgeBg, border: `1px solid ${t.badgeBorder}`, borderRadius: 999,
              padding: '8px 20px', color: t.badgeColor, fontWeight: 800, fontSize: 13,
              textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16,
            }}>
              Safety &amp; Privacy
            </span>
            <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.2, color: '#212731', marginBottom: 12 }} className="safety-title">
              Your data stays protected. Always.
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.7, color: '#63676e', marginBottom: 24 }} className="safety-sub">
              {description}
            </p>

            {/* Bullet list */}
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cards.map((card) => (
                <li key={card.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: t.iconStroke, fontWeight: 700, flexShrink: 0, marginTop: 2, fontSize: 16 }}>→</span>
                  <p style={{ fontSize: 15, fontWeight: 500, color: '#3d4451', lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ fontWeight: 700, color: '#212731' }}>{card.label}:</strong>{' '}
                    {card.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Privacy policy text link */}
            <Link
              href="/privacy"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 24,
                fontSize: 15, fontWeight: 700,
                color: t.badgeColor,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              Read our full Privacy Policy →
            </Link>
          </div>
        </div>

        {/* ── Trust badges ─────────────────────────────────────────────────── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 56, flexWrap: 'wrap', marginTop: 72, paddingTop: 52,
          borderTop: '1px solid rgba(0,0,0,0.07)',
        }} className="safety-badges">
          {[
            { src: '/images/ssl1.png',     alt: 'SSL Secure' },
            { src: '/images/pentest1.png', alt: 'Penetration Test Verified' },
            { src: '/images/edtech1.png',  alt: '1EdTech Certified' },
            { src: '/images/google1.png',  alt: 'Google for Education Partner' },
          ].map(b => (
            <Image
              key={b.src}
              src={b.src}
              alt={b.alt}
              width={140}
              height={88}
              style={{ height: 88, width: 'auto', objectFit: 'contain', display: 'block' }}
              className="safety-badge-img"
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .safety-left  { flex: 0 0 400px !important; }
          .safety-inner { gap: 48px !important; }
        }
        @media (max-width: 860px) {
          .safety-section { padding: 64px 0 60px !important; }
          .safety-wrap    { padding: 0 24px !important; }
          .safety-inner   { flex-direction: column !important; gap: 0 !important; }
          .safety-left    { display: none !important; }
          .safety-title   { font-size: 28px !important; }
          .safety-badges  { gap: 36px !important; margin-top: 52px !important; }
          .safety-badge-img { height: 70px !important; }
        }
        @media (max-width: 600px) {
          .safety-section { padding: 56px 0 52px !important; }
          .safety-wrap    { padding: 0 20px !important; }
          .safety-title   { font-size: 24px !important; }
          .safety-sub     { font-size: 15px !important; }
          .safety-cards   { grid-template-columns: 1fr !important; }
          .safety-badges  { gap: 20px !important; margin-top: 40px !important; padding-top: 36px !important; }
          .safety-badge-img { height: 52px !important; }
        }
      `}</style>
    </section>
  )
}
