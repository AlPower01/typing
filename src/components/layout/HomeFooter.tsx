import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: "What's New", href: '#' },
  { label: 'In the Press', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Support', href: '#' },
]

export default function HomeFooter() {
  return (
    <>
      <style>{`
        .home-footer {
          max-width: 1368px;
          margin: 0 auto;
          padding: 14px 36px;
          border-top: 1px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .home-footer-nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
          font-size: 13px;
          font-weight: 500;
          color: #4A5568;
        }
        .home-footer-nav a {
          color: #4A5568;
          text-decoration: none;
          white-space: nowrap;
        }
        .home-footer-nav a:hover {
          text-decoration: underline;
        }
        .home-footer-nav .sep {
          margin: 0 8px;
          color: #CBD5E0;
          user-select: none;
        }
        .home-footer-right {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #4A5568;
          white-space: nowrap;
          flex-wrap: wrap;
        }
        .home-footer-right .sep {
          margin: 0 4px;
          color: #CBD5E0;
          user-select: none;
        }
        @media (max-width: 600px) {
          .home-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <footer className="home-footer">
        <nav className="home-footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link, i) => (
            <span key={link.label}>
              {i > 0 && <span className="sep">|</span>}
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
        </nav>
        <div className="home-footer-right">
          <Image
            src="/images/USflag.png"
            alt="US Flag"
            width={20}
            height={14}
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          />
          <span>EN ∨</span>
          <span className="sep">|</span>
          <span>Brought to you by</span>
          <Image
            src="/images/teaching_logo1.svg"
            alt="Teaching.com"
            width={90}
            height={20}
            style={{ height: 18, width: 'auto', display: 'inline-block', verticalAlign: 'middle', filter: 'brightness(0) opacity(0.65)' }}
          />
        </div>
      </footer>
    </>
  )
}
