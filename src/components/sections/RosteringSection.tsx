import Link from 'next/link'

// ── Inline SVG brand marks ────────────────────────────────────────────────────
const GoogleMark = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const GoogleClassroomMark = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="5" fill="#0F9D58"/>
    <circle cx="16" cy="12.5" r="3" fill="white"/>
    <path d="M9 22c0-3.31 3.13-6 7-6s7 2.69 7 6" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="7.5" cy="13.5" r="2" fill="rgba(255,255,255,0.65)"/>
    <path d="M4 21c0-2.21 1.57-4 3.5-4 .67 0 1.3.2 1.83.54" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    <circle cx="24.5" cy="13.5" r="2" fill="rgba(255,255,255,0.65)"/>
    <path d="M28 21c0-2.21-1.57-4-3.5-4-.67 0-1.3.2-1.83.54" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
  </svg>
)

const CleverMark = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="5" fill="#4274F6"/>
    <path d="M20.5 11.5a6 6 0 1 0 0 9M20.5 16h-8" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
  </svg>
)

const ClassLinkMark = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="5" fill="#00ADE6"/>
    <path d="M11 16a5 5 0 0 0 5 5h2a5 5 0 0 0 0-10h-2" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M21 16a5 5 0 0 0-5-5h-2a5 5 0 0 0 0 10h2" stroke="rgba(255,255,255,0.4)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
  </svg>
)

const MicrosoftMark = () => (
  <svg viewBox="0 0 28 28" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <rect x="1"  y="1"  width="12" height="12" rx="1" fill="#F25022"/>
    <rect x="15" y="1"  width="12" height="12" rx="1" fill="#7FBA00"/>
    <rect x="1"  y="15" width="12" height="12" rx="1" fill="#00A4EF"/>
    <rect x="15" y="15" width="12" height="12" rx="1" fill="#FFB900"/>
  </svg>
)

const SchoologyMark = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="5" fill="#0770B8"/>
    <path d="M8 12c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8z" stroke="white" strokeWidth="1.8" fill="none"/>
    <line x1="12" y1="10" x2="12" y2="22" stroke="white" strokeWidth="1.6"/>
    <line x1="8"  y1="15" x2="24" y2="15" stroke="white" strokeWidth="1.6"/>
  </svg>
)

const PROVIDERS = [
  { name: 'Google',              Mark: GoogleMark },
  { name: 'Google Classroom',    Mark: GoogleClassroomMark },
  { name: 'Clever',              Mark: CleverMark },
  { name: 'ClassLink',           Mark: ClassLinkMark },
  { name: 'Microsoft Education', Mark: MicrosoftMark },
  { name: 'Schoology',           Mark: SchoologyMark },
]

const HIGHLIGHTS = [
  'Single sign-on with Google or Microsoft accounts',
  'Automatic roster syncing for classes and students',
  'No manual account creation or spreadsheets',
  'Works on Chromebooks, laptops, and desktops',
  'Secure, privacy-first authentication and data handling',
  'District-ready rollout with centralized oversight',
]

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="10" cy="10" r="10" fill="#3082CF" fillOpacity="0.1"/>
    <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#3082CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ marginLeft: 6, flexShrink: 0 }}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function RosteringSection() {
  return (
    <section
      id="rostering"
      aria-label="Rostering and sync"
      style={{
        background: '#F0F9FD',
        borderTop: '1px solid #90CEF4',
        borderBottom: '1px solid #BEE3F8',
        padding: '88px 0 80px',
      }}
    >
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 36px' }} className="rostering-wrap">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '8px 20px',
            background: '#f7fdff', border: '1px solid #bce2f8', borderRadius: 222,
            fontSize: 13, fontWeight: 800, color: '#3082cf',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            marginBottom: 20,
          }}>
            Rostering &amp; Sync
          </span>
          <h2 style={{
            fontSize: 38, fontWeight: 800, color: '#212731',
            lineHeight: 1.2, margin: '0 auto 16px', maxWidth: 640,
          }} className="rostering-h2">
            Set Up in Minutes. No IT Headaches.
          </h2>
          <p style={{
            fontSize: 18, fontWeight: 500, color: '#63676e',
            lineHeight: 1.7, margin: '0 auto', maxWidth: 740,
          }} className="rostering-sub">
            Typing.com works with the platforms your school already uses. Enable single
            sign&#8209;on and roster syncing to get classes running fast — without manual
            account creation.
          </p>
        </div>

        {/* ── Body: 50 / 50 ───────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 72, alignItems: 'flex-start' }} className="rostering-body">

          {/* ── Left: integration grid ──────────────────────────────────── */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>

            <p style={{
              fontSize: 11, fontWeight: 800, color: '#8fa3b1',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              marginBottom: 18,
            }}>
              Supports SSO + Roster Syncing With:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14,
            }} className="rostering-grid">
              {PROVIDERS.map(({ name, Mark }) => (
                <div
                  key={name}
                  className="provider-card"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #d4eaf8',
                    borderRadius: 16,
                    boxShadow: '0 2px 8px rgba(48,130,207,0.08)',
                    padding: '22px 16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: 48, height: 48,
                    background: '#f4faff',
                    border: '1px solid #e4f0fb',
                    borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Mark />
                  </div>
                  <span style={{
                    fontSize: 13, fontWeight: 700, color: '#3a4a58',
                    textAlign: 'center', lineHeight: 1.35,
                  }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ── Divider ─────────────────────────────────────────────────── */}
          <div aria-hidden style={{
            width: 1,
            alignSelf: 'stretch',
            background: 'linear-gradient(to bottom, transparent, #bce2f8 20%, #bce2f8 80%, transparent)',
            flexShrink: 0,
          }} className="rostering-divider" />

          {/* ── Right: setup highlights (no card) ───────────────────────── */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>

            <p style={{
              fontSize: 11, fontWeight: 800, color: '#8fa3b1',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              marginBottom: 18,
            }}>
              Setup Highlights
            </p>

            <ul style={{
              listStyle: 'none', padding: 0, margin: '0 0 36px',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              {HIGHLIGHTS.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckIcon />
                  <span style={{
                    fontSize: 16, fontWeight: 500,
                    color: '#212731', lineHeight: 1.6,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link
                href="/signup"
                className="rostering-cta-primary"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 16, fontWeight: 900,
                  textTransform: 'uppercase', letterSpacing: '0.04em',
                  textDecoration: 'none',
                  padding: '13px 28px', borderRadius: 18,
                  background: '#3082cf',
                  color: '#ffffff',
                  boxShadow: '0 6px 0 #1a5fa8',
                  transition: 'transform 0.08s ease, box-shadow 0.08s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                Sign Up with SSO
              </Link>
              <Link
                href="/contact"
                className="rostering-cta-link"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  color: '#3082cf', fontWeight: 700, fontSize: 15,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Talk to our team <ArrowRight />
              </Link>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .provider-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(48,130,207,0.14) !important;
          border-color: #90CEF4 !important;
        }
        .rostering-cta-primary:hover  { transform: translateY(3px); box-shadow: 0 3px 0 #1a5fa8 !important; }
        .rostering-cta-primary:active { transform: translateY(6px); box-shadow: 0 0   0 #1a5fa8 !important; }
        .rostering-cta-link:hover { opacity: 0.75; }

        @media (max-width: 1024px) {
          .rostering-body  { gap: 48px !important; }
          .rostering-divider { display: none !important; }
        }
        @media (max-width: 860px) {
          .rostering-body  { flex-direction: column !important; gap: 48px !important; }
          .rostering-divider { display: none !important; }
        }
        @media (max-width: 600px) {
          .rostering-wrap { padding: 0 20px !important; }
          .rostering-h2   { font-size: 28px !important; }
          .rostering-sub  { font-size: 16px !important; }
          .rostering-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
