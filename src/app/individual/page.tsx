import type { Metadata } from 'next'
import Link from 'next/link'
import HeroBanner from '@/components/sections/HeroBanner'
import StatsBar from '@/components/sections/StatsBar'
import FeaturesSection from '@/components/sections/FeaturesSection'
import IndivPlusSection from '@/components/sections/IndivPlusSection'
import CurriculumSection from '@/components/sections/CurriculumSection'
import SafetySection from '@/components/sections/SafetySection'
import AccessibilitySection from '@/components/sections/AccessibilitySection'
import FaqSection from '@/components/sections/FaqSection'
import SiteFooter from '@/components/layout/SiteFooter'
import { studentTabs as featureTabs, studentPanels as featurePanels } from '@/lib/student-features-data'
import { sharedCurriculumSections } from '@/lib/curriculum-data'

export const metadata: Metadata = {
  title: 'Typing.com for Individuals — Free Typing Practice at Your Own Pace',
  description: 'Self-paced typing lessons, tests and games for beginners through advanced learners. 100% free, no account required.',
}

// ─── Stats data ──────────────────────────────────────────────────────────────

const statsData = {
  tagline: "The world's most popular free typing program.",
  stats: [
    { number: '100% Free',    label: 'Core typing with no limits' },
    { number: '10,000+',      label: 'Professional lessons' },
    { number: 'All levels',   label: 'Beginner through advanced' },
    { number: 'Any device',   label: 'Chromebook, laptop, or desktop' },
  ],
}

// ─── Curriculum data ─────────────────────────────────────────────────────────

const curriculumSections = sharedCurriculumSections

// ─── Accessibility cards ─────────────────────────────────────────────────────

const accessCards = [
  {
    iconSrc: 'images/screenreader.svg',
    title: 'Screen Reader Compatibility',
    desc: 'Full support for JAWS, NVDA, and VoiceOver — every lesson and test is fully navigable without a mouse.',
  },
  {
    iconSrc: 'images/keyboard.svg',
    title: 'Keyboard Navigation',
    desc: 'Every feature in Typing.com is reachable and operable using only a keyboard, with clear visible focus indicators.',
  },
  {
    iconSrc: 'images/dictation.svg',
    title: 'Dictation Support',
    desc: 'Voice-to-text tools and speech recognition workflows are supported across lessons and test environments.',
  },
  {
    iconSrc: 'images/closed.svg',
    title: 'Closed Captions',
    desc: 'All video and audio content includes accurate closed captions to support learners who are deaf or hard of hearing.',
  },
]

// ─── FAQ data ────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: 'Is Typing.com really free?',
    answer: 'Yes — the core typing curriculum, tests, and games are completely free with no account required. Personal PLUS unlocks an ad-free experience, extended curriculum access, and unlimited data retention.',
  },
  {
    question: 'What does Personal PLUS add?',
    answer: 'Personal PLUS removes all ads, unlocks the full Beyond Typing curriculum (test prep, creative writing, coding), provides unlimited progress history, grade-based learning paths, and priority support.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No — you can start typing immediately without signing up. Creating a free account lets you save your progress, track your WPM over time, and access more lessons.',
  },
  {
    question: 'What devices can I use?',
    answer: 'Typing.com works on any device with a physical keyboard — Chromebooks, Windows laptops, Macs, and desktop computers. For the best experience, a physical keyboard is recommended.',
  },
  {
    question: 'How is typing speed (WPM) calculated?',
    answer: 'Words Per Minute (WPM) is calculated by dividing the total characters typed by 5 (the average word length), then dividing by the number of minutes elapsed. Accuracy is factored into your net WPM score.',
  },
  {
    question: 'Can I take a typing test?',
    answer: 'Absolutely. Typing tests are free and available without an account. Choose from 1, 2, or 3-minute timed tests, and receive an instant WPM and accuracy score you can save or share.',
  },
  {
    question: "I'm an adult learner. Is there a curriculum for me?",
    answer: 'Yes — Typing.com has dedicated adult learning paths covering everything from beginner touch-typing to advanced speed drills, professional typing tests, and numeric keypad / 10-key training.',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function IndividualPage() {
  return (
    <>
      <style>{`
        /* Pre-footer CTA band */
        .indiv-prefooter {
          background: #F0F9FD;
          border-top: 1px solid #BEE3F8;
          border-bottom: 1px solid #BEE3F8;
          padding: 80px 24px;
          text-align: center;
        }
        .indiv-prefooter-h2 {
          font-size: 46px;
          font-weight: 700;
          line-height: 1.15;
          color: #212731;
          margin: 0 0 24px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .indiv-prefooter-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #DAF0FB;
          color: #2C5281;
          border: 1px solid #64B4ED;
          border-radius: 18px;
          padding: 16px 40px;
          font-size: 18px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-decoration: none;
          box-shadow: 0 6px 0 #90CEF4;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .indiv-prefooter-cta:hover  { transform: translateY(3px); box-shadow: 0 3px 0 #90CEF4; }
        .indiv-prefooter-cta:active { transform: translateY(6px); box-shadow: 0 0 0 #90CEF4; }
        @media (max-width: 768px) {
          .indiv-prefooter-h2 { font-size: 34px !important; }
        }
        @media (max-width: 480px) {
          .indiv-prefooter-h2 { font-size: 26px !important; }
        }
      `}</style>

      <div style={{ background: '#ffffff' }}>

        {/* ── Hero ────────────────────────────────────────────────── */}
        <HeroBanner
          bgColor="#3082CF"
          textColor="#ffffff"
          blobLeft="images/individual_hero_left_squircle.svg"
          blobLeftAnchor="bottom"
          blobRight="images/individual_hero_right_squircle.svg"
          title="Typing Practice That Moves at Your Pace"
          subtitle="Focus on faster, more accurate typing with a clear personal path."
          ctaText="Start Typing Free »"
          ctaHref="/signup"
          heroImg="images/individual_hero.png"
          heroImgWidth="42%"
          heroAlt="Student typing on a laptop"
        />

        {/* ── Stats Bar ───────────────────────────────────────────── */}
        <StatsBar tagline={statsData.tagline} stats={statsData.stats} />

        {/* ── Features ────────────────────────────────────────────── */}
        <div id="features">
          <FeaturesSection
            variant="student"
            theme="blue"
            badge="Features"
            title="An engaging, motivating experience that builds real typing skills."
            subtitle="Structured practice, games, personalized feedback, and progression systems that keep you motivated from your first lesson through mastery."
            tabs={featureTabs}
            panels={featurePanels}
          />
        </div>

        {/* ── Curriculum ──────────────────────────────────────────── */}
        <div id="curriculum">
          <CurriculumSection sections={curriculumSections} />
        </div>

        {/* ── Personal PLUS ────────────────────────────────────────── */}
        <IndivPlusSection />

        {/* ── Safety ──────────────────────────────────────────────── */}
        <SafetySection
          theme="blue"
          description="Your privacy matters. Typing.com is designed so you can practice freely without sharing personal information — your data is always yours."
          bullets={[
            'No personal information required to start',
            'All data is TLS encrypted in transit',
            'We never share or sell your data, ever',
          ]}
        />


        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <FaqSection items={faqItems} />

        {/* ── Pre-footer CTA band ──────────────────────────────────── */}
        <div className="indiv-prefooter">
          <h2 className="indiv-prefooter-h2">
            Typing Practice That Moves at Your Pace
          </h2>
          <Link href="/signup" className="indiv-prefooter-cta">
            Start Typing Today »
          </Link>
        </div>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <SiteFooter tagline="Free Typing Practice for Everyone — Beginner to Advanced" />

      </div>
    </>
  )
}
