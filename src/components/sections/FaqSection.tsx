'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  items: FaqItem[]
}

export default function FaqSection({ items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" style={{ background: '#ffffff', padding: '88px 0 96px' }} className="faq-section">
      <div style={{ maxWidth: 1368, margin: '0 auto', padding: '0 48px' }} className="faq-wrap">
        <h2 style={{
          fontSize: 38, fontWeight: 700, lineHeight: 1.2, color: '#212731',
          textAlign: 'center', marginBottom: 48,
        }} className="faq-title">
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  background: '#f7fdff',
                  border: '1px solid #bce2f8',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    padding: '0 24px 0 28px', minHeight: 72,
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  }}
                  className="faq-question"
                >
                  <span style={{ fontSize: 20, fontWeight: 700, color: '#212731', lineHeight: 1.2 }} className="faq-question-text">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0, width: 32, height: 32,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 28, fontWeight: 900, color: '#3082cf', lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  role="region"
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.28s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{
                      padding: '0 28px 22px',
                      fontSize: 16, fontWeight: 500, color: '#63676e', lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .faq-section { padding: 64px 0 72px !important; }
          .faq-wrap { padding: 0 32px !important; }
          .faq-title { font-size: 30px !important; margin-bottom: 36px !important; }
        }
        @media (max-width: 600px) {
          .faq-section { padding: 56px 0 60px !important; }
          .faq-wrap { padding: 0 20px !important; }
          .faq-title { font-size: 26px !important; margin-bottom: 28px !important; }
          .faq-question { min-height: 60px !important; padding: 0 18px 0 20px !important; }
          .faq-question-text { font-size: 17px !important; }
        }
      `}</style>
    </section>
  )
}
