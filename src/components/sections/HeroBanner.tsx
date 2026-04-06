import Image from 'next/image'

interface HeroBannerProps {
  bgColor: string
  textColor?: string
  blobLeft?: string
  blobLeftAnchor?: 'top' | 'bottom'
  blobRight?: string
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  heroImg?: string
  heroImgWidth?: string
  heroAlt?: string
}

export default function HeroBanner({
  bgColor,
  textColor = '#212731',
  blobLeft,
  blobLeftAnchor = 'top',
  blobRight,
  title,
  subtitle,
  ctaText,
  ctaHref,
  heroImg,
  heroImgWidth = '46%',
  heroAlt = '',
}: HeroBannerProps) {
  return (
    <div style={{ maxWidth: 1368, margin: '0 auto', padding: '5px 36px 64px' }}>
      <section
        aria-label="Hero banner"
        style={{
          position: 'relative',
          background: bgColor,
          borderRadius: 24,
          width: '100%',
          height: 580,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'stretch',
        }}
        className="hero-banner-card"
      >
        {/* Left blob */}
        {blobLeft && (
          <Image
            src={`/${blobLeft}`}
            alt=""
            aria-hidden
            width={300}
            height={300}
            style={{
              position: 'absolute',
              left: 0,
              ...(blobLeftAnchor === 'bottom' ? { bottom: 0, top: 'auto' } : { top: 0 }),
              width: '22%',
              height: 'auto',
              zIndex: 1,
              pointerEvents: 'none',
            }}
            className="hero-blob-hide"
          />
        )}

        {/* Right blob */}
        {blobRight && (
          <Image
            src={`/${blobRight}`}
            alt=""
            aria-hidden
            width={560}
            height={400}
            style={{ position: 'absolute', right: 0, bottom: 0, width: '42%', height: 'auto', zIndex: 1, pointerEvents: 'none' }}
            className="hero-blob-hide"
          />
        )}

        {/* Hero image */}
        {heroImg && (
          <div
            style={{ position: 'absolute', right: 70, top: 0, width: heroImgWidth, height: '100%', zIndex: 3, display: 'flex', alignItems: 'center' }}
            className="hero-photo-wrap"
          >
            <Image
              src={`/${heroImg}`}
              alt={heroAlt}
              width={660}
              height={580}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        )}

        {/* Left text */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            flex: '0 0 48%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 32px 0 68px',
          }}
          className="hero-left"
        >
          <h1
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.15,
              color: textColor,
              maxWidth: 540,
              margin: '0 0 12px',
            }}
            className="hero-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.7,
              color: textColor,
              maxWidth: 440,
              margin: '0 0 24px',
            }}
            className="hero-subtitle"
          >
            {subtitle}
          </p>
          <a
            href={ctaHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-start',
              background: '#FFCF46',
              color: '#2A4365',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: 20,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              padding: '14px 32px',
              borderRadius: 18,
              textDecoration: 'none',
              boxShadow: '0 6px 0 #E5BA3F',
              transition: 'transform 0.08s ease, box-shadow 0.08s ease',
            }}
            className="hero-cta"
          >
            {ctaText}
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 1300px) {
          .hero-title { font-size: 46px !important; }
        }
        @media (max-width: 1100px) {
          .hero-banner-card { height: 500px !important; }
          .hero-left { padding: 0 16px 0 48px !important; flex: 0 0 52% !important; }
          .hero-photo-wrap { width: 50% !important; right: 40px !important; }
          .hero-title { font-size: 40px !important; }
          .hero-subtitle { font-size: 18px !important; line-height: 1.6 !important; }
        }
        @media (max-width: 860px) {
          .hero-banner-card { height: 420px !important; border-radius: 20px !important; }
          .hero-left { padding: 0 12px 0 36px !important; flex: 0 0 54% !important; }
          .hero-photo-wrap { width: 48% !important; right: 24px !important; }
          .hero-title { font-size: 34px !important; }
          .hero-subtitle { font-size: 16px !important; line-height: 1.5 !important; max-width: 100% !important; }
          .hero-cta { font-size: 15px !important; padding: 11px 20px !important; }
          .hero-blob-hide { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-banner-card { height: auto !important; border-radius: 16px !important; }
          .hero-left { flex: 0 0 100% !important; padding: 40px 24px !important; }
          .hero-title { max-width: 100% !important; font-size: 28px !important; }
          .hero-subtitle { font-size: 16px !important; line-height: 1.5 !important; max-width: 100% !important; margin-bottom: 20px !important; }
          .hero-cta { font-size: 15px !important; padding: 11px 22px !important; }
          .hero-photo-wrap { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-cta { font-size: 14px !important; padding: 11px 20px !important; }
        }
        .hero-cta:hover { transform: translateY(3px); box-shadow: 0 3px 0 #E5BA3F !important; }
        .hero-cta:active { transform: translateY(6px); box-shadow: 0 0 0 #E5BA3F !important; }
      `}</style>
    </div>
  )
}
