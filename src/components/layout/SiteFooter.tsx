import Image from 'next/image'

interface SiteFooterProps {
  tagline?: string
}

export default function SiteFooter({ tagline = 'Typing \u0026 Beyond for Classrooms, Schools and Districts' }: SiteFooterProps) {
  return (
    <footer style={{ background: '#2a4365', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) {
          .footer-wrap    { padding: 0 24px !important; }
          .footer-tagline { font-size: 28px !important; }
          .footer-nav     { gap: 32px !important; }
          .footer-col     { flex: 0 0 calc(50% - 16px) !important; }
          .footer-powered { flex: 0 0 100% !important; flex-direction: row !important; align-items: center !important; justify-content: flex-start !important; gap: 12px !important; }
          .footer-bottom  { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
        }
        @media (max-width: 480px) {
          .footer-tagline { font-size: 24px !important; }
          .footer-col     { flex: 0 0 100% !important; }
          .footer-powered { flex: 0 0 100% !important; }
        }
      `}</style>
      {/* Blobs */}
      <Image
        src="/images/footer_bottomleft.svg"
        alt=""
        aria-hidden
        width={560}
        height={400}
        style={{ position: 'absolute', left: -120, bottom: 0, width: 560, height: 'auto', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }}
      />
      <Image
        src="/images/footer_bottomright.svg"
        alt=""
        aria-hidden
        width={600}
        height={400}
        style={{ position: 'absolute', right: -140, bottom: 0, width: 600, height: 'auto', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }}
      />

      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 36px', position: 'relative', zIndex: 1 }} className="footer-wrap">
        {/* Top */}
        <div style={{ padding: '56px 0 48px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Image src="/images/typing_appicon.svg" alt="Typing.com" width={64} height={64} style={{ display: 'block' }} />
          <h2 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.2, color: '#ffffff', maxWidth: 680, margin: 0 }} className="footer-tagline">
            {tagline}
          </h2>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: 0 }} />

        {/* Nav columns */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 48, padding: '40px 0 48px', flexWrap: 'wrap' }} className="footer-nav">
          <div style={{ flex: 1, minWidth: 0 }} className="footer-col">
            <p style={{ fontSize: 20, fontWeight: 700, color: '#90cef4', lineHeight: 1.2, marginBottom: 16 }}>Learn Typing</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Typing for Educator', 'Typing for Homeschooling', 'Typing for Individual'].map(item => (
                <li key={item}><a href="#" style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textDecoration: 'none', lineHeight: 1.5 }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div style={{ flex: 1, minWidth: 0 }} className="footer-col">
            <p style={{ fontSize: 20, fontWeight: 700, color: '#90cef4', lineHeight: 1.2, marginBottom: 16 }}>Resources</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {["What's New", 'In the Press', 'Resources', 'Support'].map(item => (
                <li key={item}><a href="#" style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textDecoration: 'none', lineHeight: 1.5 }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div style={{ flex: 1, minWidth: 0 }} className="footer-col">
            <p style={{ fontSize: 20, fontWeight: 700, color: '#90cef4', lineHeight: 1.2, marginBottom: 16 }}>Company</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Proclamation 2024', 'Google for Education', 'Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}><a href="#" style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textDecoration: 'none', lineHeight: 1.5 }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div style={{ flex: 1, minWidth: 0 }} className="footer-col">
            <p style={{ fontSize: 20, fontWeight: 700, color: '#90cef4', lineHeight: 1.2, marginBottom: 16 }}>Our Apps</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Nitro Type', 'Reading.com', 'Teaching.com'].map(item => (
                <li key={item}><a href="#" style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textDecoration: 'none', lineHeight: 1.5 }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }} className="footer-powered">
            <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', opacity: 0.8 }}>Powered by:</p>
            <Image src="/images/teaching_logo1.svg" alt="Teaching.com" width={120} height={40} style={{ height: 40, width: 'auto', display: 'block' }} />
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: 0 }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0 24px' }} className="footer-bottom">
          <p style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', margin: 0 }}>2026 &copy; Teaching.com</p>
          <button
            aria-label="Change language"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: 999,
              padding: '8px 18px',
              background: 'none',
              color: '#ffffff',
              fontSize: 15,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            <Image src="/images/USflag.png" alt="" width={18} height={12} style={{ borderRadius: 2 }} />
            US English
          </button>
        </div>
      </div>
    </footer>
  )
}
