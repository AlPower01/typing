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
      style={{ background: '#3082CF', padding: '80px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Badge ──────────────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(to bottom, #f7d78c, #f4ca66)',
            border: '1px solid #f1bc41',
            borderRadius: 999,
            padding: '10px 20px',
            fontSize: 15,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#614c19',
          }}>
            <Image src="/images/crown_icon.svg" alt="" width={16} height={16} aria-hidden />
            Personal Plus
          </div>
        </div>

        {/* ── Title ──────────────────────────────────────────────────────── */}
        <h2 style={{
          fontSize: 38,
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: 715,
          margin: '0 auto 48px',
        }} className="iplus-title">
          Everything in Free — plus the tools that keep you moving forward.
        </h2>

        {/* ── Top 2 cards ────────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 24 }} className="iplus-top-row">

          {/* Ad-free Experience */}
          <div style={{
            flex: 1,
            background: '#2B6BB1',
            borderRadius: 24,
            minHeight: 324,
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          }} className="iplus-top-card">
            <div style={{
              flex: '0 0 45%',
              padding: '40px 0 40px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }} className="iplus-top-text">
              <h3 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.2, color: '#ffffff', marginBottom: 12 }} className="iplus-top-title">
                Ad-free Experience
              </h3>
              <p style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', margin: 0 }} className="iplus-top-desc">
                Stay focused with an ad-free experience
              </p>
            </div>
            <div style={{ flex: 1, padding: '28px 36px', position: 'relative' }} className="iplus-top-img">
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
            borderRadius: 24,
            minHeight: 324,
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          }} className="iplus-top-card">
            <div style={{
              flex: '0 0 45%',
              padding: '40px 0 40px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }} className="iplus-top-text">
              <h3 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.2, color: '#ffffff', marginBottom: 12 }} className="iplus-top-title">
                Grade Based Curricula
              </h3>
              <p style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', margin: 0 }} className="iplus-top-desc">
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
        <div style={{ display: 'flex', gap: 24, marginBottom: 24 }} className="iplus-bottom-row">
          {bottomFeatures.map((f) => (
            <div
              key={f.title}
              style={{
                flex: 1,
                background: '#2B6BB1',
                borderRadius: 24,
                padding: '32px 32px 36px',
                height: 324,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              className="iplus-bottom-card"
            >
              <div style={{
                width: 64,
                height: 64,
                background: f.iconBg,
                borderRadius: 16,
                flexShrink: 0,
              }} className="iplus-icon" />
              <div className="iplus-text-group">
                <h3 style={{
                  fontSize: 28,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#ffffff',
                  marginBottom: 8,
                }} className="iplus-card-title">
                  {f.title}
                </h3>
                <p style={{
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.85)',
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
          borderRadius: 24,
          padding: '0 48px',
          minHeight: 148,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }} className="iplus-cta-bar">
          <p style={{
            fontSize: 38,
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
              gap: 10,
              background: 'linear-gradient(to top, #f4cb68, #f7d78b)',
              borderRadius: 18,
              padding: '18px 36px',
              fontSize: 18,
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#614c19',
              textDecoration: 'none',
              boxShadow: '0 6px 0 #d9a834',
              transition: 'transform 0.08s ease, box-shadow 0.08s ease',
              whiteSpace: 'nowrap',
            }}
            className="iplus-cta-btn"
          >
            <Image src="/images/crown_icon.svg" alt="" width={18} height={18} aria-hidden />
            Get PLUS Now
          </a>
        </div>

      </div>

      <style>{`
        .iplus-cta-btn:hover  { transform: translateY(3px); box-shadow: 0 3px 0 #d9a834 !important; }
        .iplus-cta-btn:active { transform: translateY(6px); box-shadow: 0 0 0 #d9a834 !important; }

        /* ── 1100px: scale down type ─────────────────────────────────── */
        @media (max-width: 1100px) {
          .iplus-title     { font-size: 32px !important; }
          .iplus-top-title { font-size: 32px !important; }
          .iplus-card-title { font-size: 24px !important; }
          .iplus-cta-text  { font-size: 30px !important; }
          .iplus-cta-bar   { padding: 0 32px !important; }
        }

        /* ── 860px: 2-col top row side-by-side (shrink), 2-col bottom ── */
        @media (max-width: 860px) {
          .iplus-title       { font-size: 26px !important; }
          .iplus-top-title   { font-size: 26px !important; }
          .iplus-top-desc    { font-size: 16px !important; }
          .iplus-bottom-row  { flex-wrap: wrap !important; }
          .iplus-bottom-card { flex: 0 0 calc(50% - 12px) !important; height: 260px !important; }
          .iplus-card-title  { font-size: 22px !important; }
          .iplus-card-desc   { font-size: 17px !important; }
          .iplus-cta-bar     { padding: 36px 28px !important; min-height: auto !important; flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .iplus-cta-text    { font-size: 24px !important; }
          .iplus-cta-btn     { width: 100% !important; justify-content: center !important; }
        }

        /* ── 720px: all 5 cards → vertical list with icon on left ────── */
        @media (max-width: 720px) {
          .iplus-top-row,
          .iplus-bottom-row    { flex-direction: column !important; gap: 12px !important; }

          /* Shared list-card reset */
          .iplus-top-card,
          .iplus-bottom-card   {
            flex: none !important;
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 20px !important;
            padding: 20px !important;
            border-radius: 16px !important;
          }

          /* Top cards: image moves left as small icon */
          .iplus-top-text      {
            flex: 1 !important;
            padding: 0 !important;
            justify-content: center !important;
            order: 2;
          }
          .iplus-top-img       {
            order: 1;
            flex: 0 0 72px !important;
            width: 72px !important;
            height: 72px !important;
            min-height: 0 !important;
            padding: 8px !important;
            border-radius: 12px !important;
            background: rgba(255,255,255,0.12) !important;
            position: relative !important;
          }
          /* Keys card: no extra padding — image fills the square */
          .iplus-top-img--keys { padding: 0 !important; }
          .iplus-top-img-inner {
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
          }

          /* Bottom cards: icon stays left, text right */
          .iplus-icon          {
            width: 52px !important;
            height: 52px !important;
            border-radius: 12px !important;
            flex-shrink: 0 !important;
            margin-bottom: 0 !important;
          }
          .iplus-text-group    { flex: 1 !important; }

          /* Type sizes */
          .iplus-title         { font-size: 22px !important; margin-bottom: 28px !important; }
          .iplus-top-title     { font-size: 20px !important; margin-bottom: 6px !important; }
          .iplus-top-desc      { font-size: 15px !important; line-height: 1.5 !important; }
          .iplus-card-title    { font-size: 18px !important; margin-bottom: 4px !important; }
          .iplus-card-desc     { font-size: 15px !important; line-height: 1.4 !important; }

          /* CTA */
          .iplus-cta-bar       { padding: 24px 20px !important; border-radius: 16px !important; }
          .iplus-cta-text      { font-size: 20px !important; }
          .iplus-cta-btn       { font-size: 14px !important; padding: 14px 20px !important; }
        }
      `}</style>
    </section>
  )
}
