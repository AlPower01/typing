import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HomeFooter from '@/components/layout/HomeFooter'

export const metadata: Metadata = {
  title: 'Typing.com — Learn to Type Free',
  description: 'Free typing lessons, games and tests. Trusted by 39 million+ students since 2005.',
}

const cards = [
  {
    href: '/educator',
    barColor: '#FCD9C0',
    barBorder: '#FAB889',
    imgSrc: '/images/educator_thumb.png',
    imgAlt: 'Educator thumbnail',
    title: "I'm an Educator",
    desc: 'From classrooms to districts, keyboarding and Beyond Typing.',
    linkText: 'Explore Educators »',
  },
  {
    href: '/homeschool',
    barColor: '#D7F4DB',
    barBorder: '#84DC91',
    imgSrc: '/images/homeschool_thumb.png',
    imgAlt: 'Homeschool thumbnail',
    title: "I'm Homeschooling",
    desc: 'Flexible at-home typing paths and parent visibility.',
    linkText: 'Explore Homeschooling »',
  },
  {
    href: '/individual',
    barColor: '#BEE3F8',
    barBorder: '#90CEF4',
    imgSrc: '/images/individual_thumb.png',
    imgAlt: 'Individual thumbnail',
    title: "I'm an Individual",
    desc: 'Self-paced practice for one-off typers and personal goals.',
    linkText: 'Explore Individuals »',
  },
]

export default function HomePage() {
  return (
    <>
      <style>{`
        .home-page {
          background: #F0F9FD;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        /* Decorative squircles */
        .squircle-left {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: auto;
          pointer-events: none;
          opacity: 0.5;
          z-index: 0;
        }
        .squircle-right {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 70%;
          width: auto;
          pointer-events: none;
          opacity: 0.5;
          z-index: 0;
        }

        /* Hero */
        .home-hero {
          position: relative;
          z-index: 1;
          max-width: 1368px;
          margin: 0 auto;
          padding: 40px 24px 16px;
          text-align: center;
        }
        .home-badge {
          display: inline-block;
          background: #fff;
          border: 1.5px solid #90CDF4;
          color: #2B6CB0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 6px 18px;
          margin-bottom: 24px;
        }
        .home-h1 {
          font-size: 58px;
          font-weight: 700;
          line-height: 1.1;
          color: #1A202C;
          max-width: 1100px;
          margin: 0 auto 20px;
        }
        .home-subtitle {
          font-size: 18px;
          font-weight: 500;
          line-height: 34px;
          color: #4A5568;
          max-width: 780px;
          margin: 0 auto 28px;
        }
        .home-prompt {
          font-size: 20px;
          font-weight: 700;
          color: #1A202C;
          margin-bottom: 28px;
        }

        /* Cards grid */
        .home-cards-wrap {
          position: relative;
          z-index: 1;
          max-width: 1368px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .home-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        /* Individual card */
        .persona-card-outer {
          position: relative;
          /* reserve space for the 6px shadow below */
          padding-bottom: 6px;
          display: flex;
          flex-direction: column;
        }
        /* Shadow layer — always blue-100, sits behind the surface card */
        .persona-card-shadow {
          position: absolute;
          inset: 0;
          top: 6px;
          border-radius: 12px;
          background: #DAF0FB;
          border: 1px solid #90CEF4;
          transition: opacity 0.25s ease;
          z-index: 0;
        }
        /* Surface card — sits above the shadow, stretches to fill row height */
        .persona-card {
          position: relative;
          z-index: 1;
          flex: 1;
          background: #fff;
          border-radius: 12px;
          border: 1px solid #90CEF4;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.25s ease;
          will-change: transform;
        }
        .persona-card:hover {
          transform: translateY(6px);
        }
        .persona-card:hover ~ .persona-card-shadow {
          opacity: 0;
        }
        .persona-card-outer:hover .persona-card-shadow {
          opacity: 0;
        }
        .persona-card-outer:hover .persona-card {
          transform: translateY(6px);
        }

        /* Card accent bar */
        .persona-card-bar {
          height: 12px;
          width: 100%;
          flex-shrink: 0;
        }
        /* Card body */
        .persona-card-body {
          padding: 0 24px 28px;
          text-align: center;
        }
        .persona-card-img {
          display: block;
          margin: 20px auto 0;
          width: 149px;
          height: 149px;
          object-fit: contain;
        }
        .persona-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1A202C;
          margin: 16px 0 10px;
          line-height: 1.2;
        }
        .persona-card-desc {
          font-size: 16px;
          font-weight: 500;
          color: #4A5568;
          line-height: 1.5;
          margin: 0 0 16px;
        }
        .persona-card-link {
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          color: #3182CE;
          letter-spacing: 0.03em;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .home-h1 { font-size: 46px; }
        }
        @media (max-width: 860px) {
          .home-h1 { font-size: 38px; }
          .home-cards {
            grid-template-columns: repeat(2, 1fr);
          }
          .home-cards .persona-card-outer:last-child {
            grid-column: 1 / -1;
            max-width: 284px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .home-h1 { font-size: 28px; }
          .home-subtitle { font-size: 15px; line-height: 26px; }
          .home-cards { grid-template-columns: 1fr; }
          .home-cards .persona-card-outer:last-child {
            grid-column: auto;
            max-width: none;
          }
          .squircle-left,
          .squircle-right { display: none; }
        }
      `}</style>

      <div className="home-page">
        {/* Decorative squircles */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pimrary_squircle2.svg"
          alt=""
          aria-hidden="true"
          className="squircle-left"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pimrary_squircle.svg"
          alt=""
          aria-hidden="true"
          className="squircle-right"
        />

        {/* Hero */}
        <section className="home-hero">
          <div className="home-badge">38,916,000 students and counting 🎉</div>
          <h1 className="home-h1">
            The Typing Platform for Classrooms, Families, and Independent Learners
          </h1>
          <p className="home-subtitle">
            Interactive lessons, real-time progress tracking, and practical tools tailored for each audience.
          </p>
          <p className="home-prompt">Choose your role to continue</p>
        </section>

        {/* Cards */}
        <div className="home-cards-wrap">
          <div className="home-cards">
            {cards.map((card) => (
              <div className="persona-card-outer" key={card.title}>
                {/* Shadow renders first (behind) — always blue-100 per design */}
                <div className="persona-card-shadow" aria-hidden="true" />
                {/* Surface card renders on top via z-index: 1 */}
                <Link href={card.href} className="persona-card">
                  <div
                    className="persona-card-bar"
                    style={{
                      background: card.barColor,
                      borderBottom: `1.5px solid ${card.barBorder}`,
                    }}
                  />
                  <div className="persona-card-body">
                    <Image
                      src={card.imgSrc}
                      alt={card.imgAlt}
                      width={149}
                      height={149}
                      className="persona-card-img"
                      style={{ width: 149, height: 149 }}
                    />
                    <h2 className="persona-card-title">{card.title}</h2>
                    <p className="persona-card-desc">{card.desc}</p>
                    <span className="persona-card-link">{card.linkText}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Simple homepage footer */}
        <HomeFooter />
      </div>
    </>
  )
}
