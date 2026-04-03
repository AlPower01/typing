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

export const metadata: Metadata = {
  title: 'Typing.com for Individuals — Free Typing Practice at Your Own Pace',
  description: 'Self-paced typing lessons, tests and games for beginners through advanced learners. 100% free, no account required.',
}

// ─── Feature section data ────────────────────────────────────────────────────

const featureTabs = [
  { label: 'Engaging Lessons' },
  { label: 'Typing Tests & Benchmarks' },
  { label: 'Adaptive Curriculum' },
  { label: 'Fun Typing Games' },
  { label: 'Gamified Learning' },
  { label: 'Unlockable Worlds' },
]

const featurePanels = [
  {
    title: 'Step-by-step lessons that build real speed',
    desc: 'From first-time typists to seasoned professionals, our structured lessons guide you through every key at your own pace — with instant feedback after every stroke.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Interactive typing lesson interface',
  },
  {
    title: 'Built-in typing tests with real WPM tracking',
    desc: 'Take timed tests to measure your speed and accuracy. Set personal goals, track your growth, and share results — all for free.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Typing test results',
  },
  {
    title: 'A curriculum that adjusts to your level',
    desc: 'Whether you\'re a complete beginner or brushing up on speed, Typing.com automatically adapts difficulty so you\'re always improving without frustration.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Adaptive curriculum overview',
  },
  {
    title: 'Typing games that turn practice into play',
    desc: 'Arcade-style games make it easy to build speed without feeling like work. Perfect for short sessions between your day.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Fun typing games',
  },
  {
    title: 'Earn badges and stay motivated every session',
    desc: 'Unlock achievements and climb leaderboards as you progress. Streaks and rewards give you a reason to come back every day.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Gamified learning rewards',
  },
  {
    title: 'Complete lessons and unlock new worlds',
    desc: 'Progress through the curriculum to discover themed worlds and exclusive content — turning your typing journey into an adventure.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Unlockable worlds and rewards',
  },
]

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

const curriculumSections = [
  {
    id: 'keyboarding',
    label: 'Keyboarding',
    subtitle: 'Core touch-typing instruction from first key reaches through advanced fluency.',
    lessons: [
      { name: 'Pre-Keyboarding',             grade: 'K-6' },
      { name: 'Learn the Keys',              grade: 'K-12 – Adults' },
      { name: 'Punctuation & Numbers',       grade: '1-3' },
      { name: 'Punctuation & Advanced Keys', grade: '4-12 + Adult' },
      { name: 'Personalized Practice',       grade: 'K-12 – Adults' },
      { name: 'Typing Tests',                grade: 'K-12 – Adults' },
      { name: 'Numeric Keypad / 10-Key',     grade: 'Adult + Core' },
      { name: 'Dvorak Keyboard',             grade: 'Core' },
    ],
  },
  {
    id: 'cross-curricular',
    label: 'Cross-Curricular',
    subtitle: 'Reinforce academic vocabulary and skills across every subject area.',
    lessons: [
      { name: 'Science Vocabulary', grade: 'K-12' },
      { name: 'Math Terminology',   grade: '3-12' },
      { name: 'Social Studies',     grade: 'K-8' },
      { name: 'ELA Practice',       grade: 'K-12' },
      { name: 'World Languages',    grade: '4-12' },
      { name: 'STEM Essentials',    grade: '6-12' },
    ],
  },
  {
    id: 'digital-citizenship',
    label: 'Digital Citizenship',
    subtitle: 'Navigate the digital world safely and responsibly.',
    lessons: [
      { name: 'Online Safety',        grade: 'K-12' },
      { name: 'Privacy & Security',   grade: '4-12' },
      { name: 'Cyberbullying',        grade: 'K-8' },
      { name: 'Digital Footprint',    grade: '6-12' },
      { name: 'Screen Time Balance',  grade: 'K-6' },
      { name: 'Copyright & Fair Use', grade: '6-12' },
    ],
  },
  {
    id: 'ai-literacy',
    label: 'AI Literacy',
    subtitle: 'Build foundational knowledge and critical thinking skills around artificial intelligence.',
    lessons: [
      { name: 'What is AI?',         grade: 'K-6' },
      { name: 'AI in Daily Life',    grade: '4-12' },
      { name: 'Responsible AI Use',  grade: '6-12' },
      { name: 'Prompt Engineering',  grade: '8-12' },
      { name: 'AI Ethics',           grade: '8-12' },
      { name: 'AI & Future Careers', grade: '6-12' },
    ],
  },
  {
    id: 'computer-applications',
    label: 'Computer Applications',
    subtitle: 'Practical software skills you use every day.',
    lessons: [
      { name: 'Word Processing',     grade: 'K-12' },
      { name: 'Spreadsheets',        grade: '4-12' },
      { name: 'Presentations',       grade: 'K-12' },
      { name: 'Email Etiquette',     grade: '4-12' },
      { name: 'File Management',     grade: 'K-8' },
      { name: 'Collaboration Tools', grade: '6-12' },
    ],
  },
  {
    id: 'coding',
    label: 'Coding',
    subtitle: 'Introductory and intermediate programming concepts for every level.',
    lessons: [
      { name: 'Block Coding',  grade: 'K-5' },
      { name: 'HTML Basics',   grade: '6-12' },
      { name: 'Python Intro',  grade: '8-12' },
      { name: 'JavaScript',    grade: '8-12' },
      { name: 'Algorithms',    grade: '4-12' },
      { name: 'App Design',    grade: '6-12' },
    ],
  },
  {
    id: 'creative-writing',
    label: 'Creative Writing',
    subtitle: 'Inspire expression and build writing fluency through meaningful practice.',
    lessons: [
      { name: 'Short Stories',          grade: 'K-12' },
      { name: 'Poetry',                 grade: 'K-12' },
      { name: 'Persuasive Essays',      grade: '4-12' },
      { name: 'Journals & Reflections', grade: 'K-8' },
      { name: 'Research Reports',       grade: '6-12' },
      { name: 'Creative Fiction',       grade: '6-12' },
    ],
  },
  {
    id: 'test-prep',
    label: 'Test Prep',
    subtitle: 'Build the speed and accuracy you need to succeed on digital assessments.',
    lessons: [
      { name: 'Typing Assessments',    grade: 'K-12' },
      { name: 'Essay Practice',        grade: '4-12' },
      { name: 'State Test Prep',       grade: '3-12' },
      { name: 'ACT/SAT Ready',         grade: '8-12' },
      { name: 'Reading Comprehension', grade: '3-12' },
      { name: 'Timed Challenges',      grade: '4-12' },
    ],
  },
  {
    id: 'career-prep',
    label: 'Career Prep',
    subtitle: 'Workplace-ready communication and productivity skills for adults and learners.',
    lessons: [
      { name: 'Business Writing',         grade: '8-12' },
      { name: 'Email Etiquette',          grade: '6-12' },
      { name: 'Resume & Cover Letters',   grade: '9-12' },
      { name: 'Professional Communication', grade: '8-12' },
      { name: 'Interview Preparation',    grade: '9-12' },
      { name: 'Workplace Skills',         grade: '9-12' },
    ],
  },
  {
    id: 'standards',
    label: 'Standards',
    subtitle: 'Aligned to national and state standards for learning and digital literacy.',
    lessons: [
      { name: 'ISTE Standards',      grade: 'K-12' },
      { name: 'Common Core ELA',     grade: 'K-12' },
      { name: 'CSTA Standards',      grade: 'K-12' },
      { name: 'State Standards',     grade: 'K-12' },
      { name: '21st Century Skills', grade: 'K-12' },
      { name: 'NGSS Integration',    grade: 'K-12' },
    ],
  },
  {
    id: 'custom-lessons',
    label: 'Custom Lessons',
    subtitle: 'Create and save your own lessons — or explore thousands created by the community.',
    lessons: [
      { name: 'Create a Lesson',     grade: 'All Ages' },
      { name: 'Share with Others',   grade: 'All Ages' },
      { name: 'Import Content',      grade: 'All Ages' },
      { name: 'Lesson Library',      grade: 'All Ages' },
      { name: 'AI-Assisted Creation',grade: 'All Ages' },
      { name: 'Community Spotlight', grade: 'All Ages' },
    ],
  },
]

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

        {/* ── Accessibility ───────────────────────────────────────── */}
        <AccessibilitySection cards={accessCards} />

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
