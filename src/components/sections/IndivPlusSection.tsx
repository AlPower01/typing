import Image from 'next/image'

const bottomFeatures = [
  {
    title: 'Beyond Typing Curriculum',
    desc: 'Test prep, creative writing and coding units',
    iconBg: '#FAB8B8',
  },
  {
    title: 'Unlimited Data Retention',
    desc: 'Maintain valuable historical data and progress',
    iconBg: '#F7D78D',
  },
  {
    title: 'PLUS Priority Support',
    desc: 'Priority phone and email support',
    iconBg: '#90CEF4',
  },
]

export default function IndivPlusSection() {
  return (
    <section
      id="plus"
      aria-label="Personal Plus"
      style={{ background: '#3082CF', padding: '64px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 36px' }}>

        {/* ── Badge ──────────────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(to bottom, #f7d78c, #f4ca66)',
            border: '1px solid #f1bc41',
            borderRadius: 999,
            padding: '8px 18px',
            fontSize: 13,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#614c19',
          }}>
            <Image src="/images/crown_icon.svg" alt="" width={14} height={14} aria-hidden />
            Personal Plus
          </div>
        </div>

        {/* ── Title ──────────────────────────────────────────────────────── */}
        <h2 style={{
          fontSize: 32,
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: 640,
          margin: '0 auto 32px',
        }} className="iplus-title">
          Everything in Free — plus the tools that keep you moving forward.
        </h2>

        {/* ── Top 2 cards ────────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }} className="iplus-top-row">

          {/* Ad-free Experience */}
          <div style={{
            flex: 1,
            background: '#2B6BB1',
            borderRadius: 20,
            minHeight: 240,
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          }} className="iplus-top-card">
            <div style={{
              flex: '0 0 45%',
              padding: '32px 0 32px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }} className="iplus-top-text">
              <h3 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, color: '#ffffff', marginBottom: 10 }} className="iplus-top-title">
                Ad-free Experience
              </h3>
              <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: 0 }} className="iplus-top-desc">
                Stay focused with an ad-free experience
              </p>
            </div>
            <div style={{ flex: 1, padding: '20px 28px', position: 'relative' }} className="iplus-top-img">
              <div style={{ position: 'relative', width: '100%', height: '100%' }} className="iplus-top-img-inner">
                <Image
                  src="/images/indiv_plus_ads.png"
                  alt=""
                  aria-hidden
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>

          {/* Grade Based Curricula */}
          <div style={{
            flex: 1,
            background: '#2B6BB1',
            borderRadius: 20,
            minHeight: 240,
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          }} className="iplus-top-card">
            <div style={{
              flex: '0 0 45%',
              padding: '32px 0 32px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }} className="iplus-top-text">
              <h3 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, color: '#ffffff', marginBottom: 10 }} className="iplus-top-title">
                Grade Based Curricula
              </h3>
              <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: 0 }} className="iplus-top-desc">
                K-12 &amp; Adult
              </p>
            </div>
            <div style={{ flex: 1, position: 'relative' }} className="iplus-top-img iplus-top-img--keys">
              <div style={{ position: 'relative', width: '100%', height: '100%' }} className="iplus-top-img-inner">
                <Image
                  src="/images/indiv_plus_keys.png"
                  alt=""
                  aria-hidden
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'right top' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom 3 cards ─────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }} className="iplus-bottom-row">
          {bottomFeatures.map((f) => (
            <div
              key={f.title}
              style={{
                flex: 1,
                background: '#2B6BB1',
                borderRadius: 20,
                padding: '28px 28px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 40,
              }}
              className="iplus-bottom-card"
            >
              <div style={{
                width: 48,
                height: 48,
                background: f.iconBg,
                borderRadius: 12,
                flexShrink: 0,
              }} className="iplus-icon" />
              <div className="iplus-text-group">
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#ffffff',
                  marginBottom: 6,
                }} className="iplus-card-title">
                  {f.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.8)',
                  margin: 0,
                }} className="iplus-card-desc">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ─────────────────────────────────────────────────── */}
        <div style={{
          background: '#2B6BB1',
          borderRadius: 20,
          padding: '0 40px',
          minHeight: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }} className="iplus-cta-bar">
          <p style={{
            fontSize: 26,
            fontWeight: 900,
            lineHeight: 1.3,
            color: '#ffffff',
            margin: 0,
          }} className="iplus-cta-text">
            Unlock your Typing Potential with{' '}
            <span style={{ color: '#FFCF46' }}>PLUS</span>
          </p>
          <a
            href="/signup"
            style={{
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(to top, #f4cb68, #f7d78b)',
              borderRadius: 16,
              padding: '14px 28px',
              fontSize: 16,
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#614c19',
              textDecoration: 'none',
              boxShadow: '0 5px 0 #d9a834',
              transition: 'transform 0.08s ease, box-shadow 0.08s ease',
              whiteSpace: 'nowrap',
            }}
            className="iplus-cta-btn"
          >
            <Image src="/images/crown_icon.svg" alt="" width={16} height={16} aria-hidden />
            Get PLUS Now
          </a>
        </div>

      </div>

      <style>{`
        .iplus-cta-btn:hover  { transform: translateY(3px); box-shadow: 0 2px 0 #d9a834 !important; }
        .iplus-cta-btn:active { transform: translateY(5px); box-shadow: 0 0 0 #d9a834 !important; }

        /* ── 1100px ───────────────────────────────────────────────────── */
        @media (max-width: 1100px) {
          .iplus-title      { font-size: 28px !important; }
          .iplus-top-title  { font-size: 22px !important; }
          .iplus-card-title { font-size: 18px !important; }
          .iplus-cta-text   { font-size: 22px !important; }
          .iplus-cta-bar    { padding: 0 28px !important; }
        }

        /* ── 860px ────────────────────────────────────────────────────── */
        @media (max-width: 860px) {
          .iplus-title       { font-size: 24px !important; }
          .iplus-top-title   { font-size: 20px !important; }
          .iplus-top-desc    { font-size: 15px !important; }
          .iplus-bottom-row  { flex-wrap: wrap !important; }
          .iplus-bottom-card { flex: 0 0 calc(50% - 8px) !important; }
          .iplus-card-title  { font-size: 18px !important; }
          .iplus-card-desc   { font-size: 14px !important; }
          .iplus-cta-bar     { padding: 28px 24px !important; min-height: auto !important; flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .iplus-cta-text    { font-size: 20px !important; }
          .iplus-cta-btn     { width: 100% !important; justify-content: center !important; }
        }

        /* ── 720px: stacked list ──────────────────────────────────────── */
        @media (max-width: 720px) {
          .iplus-top-row,
          .iplus-bottom-row    { flex-direction: column !important; gap: 10px !important; }

          .iplus-top-card,
          .iplus-bottom-card   {
            flex: none !important;
            width: 100% !important;
            min-height: 0 !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 16px !important;
            padding: 18px !important;
            border-radius: 14px !important;
          }

          .iplus-top-text      { flex: 1 !important; padding: 0 !important; order: 2; }
          .iplus-top-img       {
            order: 1; flex: 0 0 64px !important; width: 64px !important; height: 64px !important;
            min-height: 0 !important; padding: 6px !important; border-radius: 10px !important;
            background: rgba(255,255,255,0.12) !important; position: relative !important;
          }
          .iplus-top-img--keys { padding: 0 !important; }
          .iplus-top-img-inner { position: relative !important; width: 100% !important; height: 100% !important; }

          .iplus-icon          { width: 44px !important; height: 44px !important; border-radius: 10px !important; flex-shrink: 0 !important; }
          .iplus-bottom-card   { gap: 16px !important; }
          .iplus-text-group    { flex: 1 !important; }

          .iplus-title         { font-size: 20px !important; margin-bottom: 24px !important; }
          .iplus-top-title     { font-size: 18px !important; margin-bottom: 4px !important; }
          .iplus-top-desc      { font-size: 14px !important; }
          .iplus-card-title    { font-size: 16px !important; margin-bottom: 2px !important; }
          .iplus-card-desc     { font-size: 14px !important; }

          .iplus-cta-bar       { padding: 20px 18px !important; border-radius: 14px !important; }
          .iplus-cta-text      { font-size: 18px !important; }
          .iplus-cta-btn       { font-size: 14px !important; padding: 12px 18px !important; }
        }
      `}</style>
    </section>
  )
}
