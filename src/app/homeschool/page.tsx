import type { Metadata } from 'next'
import Link from 'next/link'
import HeroBanner from '@/components/sections/HeroBanner'
import StatsBar from '@/components/sections/StatsBar'
import FeaturesSection from '@/components/sections/FeaturesSection'
import PlusSection from '@/components/sections/PlusSection'
import CurriculumSection from '@/components/sections/CurriculumSection'
import SafetySection from '@/components/sections/SafetySection'
import AccessibilitySection from '@/components/sections/AccessibilitySection'
import FaqSection from '@/components/sections/FaqSection'
import SiteFooter from '@/components/layout/SiteFooter'

export const metadata: Metadata = {
  title: 'Typing.com for Homeschoolers — Flexible Typing Practice at Home',
  description: 'Structured typing lessons, progress tracking, and a full K–12 curriculum for homeschool families. Free forever, with optional PLUS for deeper learning.',
}

// ─── Student features ────────────────────────────────────────────────────────

const studentTabs = [
  { label: 'Engaging Lessons' },
  { label: 'Typing Tests & Benchmarks' },
  { label: 'Adaptive Curriculum' },
  { label: 'Fun Typing Games' },
  { label: 'Gamified Learning' },
  { label: 'Unlockable Worlds' },
]

const studentPanels = [
  {
    title: 'Step-by-step lessons that build real speed',
    desc: 'From first-time typists to seasoned learners, our structured lessons guide your child through every key at their own pace — with instant feedback after every stroke.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Interactive typing lesson interface',
  },
  {
    title: 'Built-in typing tests with real WPM tracking',
    desc: 'Take timed tests to measure speed and accuracy. Set personal goals, track progress over time, and celebrate milestones together.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Typing test results showing WPM and accuracy',
  },
  {
    title: 'A curriculum that adjusts to your child\'s level',
    desc: 'Whether your child is a complete beginner or brushing up on speed, Typing.com automatically adapts difficulty so they\'re always improving — without frustration.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Adaptive curriculum overview',
  },
  {
    title: 'Typing games that turn practice into play',
    desc: 'Arcade-style games make it easy to build speed without feeling like work. Perfect for short daily sessions in your homeschool routine.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Fun typing games for kids',
  },
  {
    title: 'Earn badges and stay motivated every session',
    desc: 'Unlock achievements and climb leaderboards as your child progresses. Streaks and rewards give them a reason to come back every day.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Gamified learning rewards and badges',
  },
  {
    title: 'Complete lessons and unlock new worlds',
    desc: 'Progress through the curriculum to discover themed worlds and exclusive content — turning your child\'s typing journey into an adventure.',
    ctaText: 'Start Typing Free »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Unlockable worlds and rewards',
  },
]

// ─── Instructor / parent features ────────────────────────────────────────────

const instructorTabs = [
  { label: 'Simple Family Setup' },
  { label: 'Printable Reports' },
  { label: 'Motivating Daily Goals' },
  { label: 'Flexible Learning Controls' },
  { label: 'Unlimited Custom Content' },
  { label: 'Visual Progress Tracking' },
]

const instructorPanels = [
  {
    title: 'Add your students and start typing in minutes',
    desc: 'Set up your children in seconds — no email address required. Manage all learners from one parent dashboard without any classroom overhead.',
    ctaText: 'Get Started Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Family account setup dashboard',
    bullets: [
      { html: '<strong>No email required</strong> for students to get started' },
      { html: '<strong>One parent login</strong> manages all children' },
      { html: 'Works on <strong>any device</strong> with a keyboard' },
      { html: '<strong>Instant access</strong> to full K–12 curriculum' },
    ],
  },
  {
    title: 'Share progress with a printable report',
    desc: 'Generate clear, parent-friendly reports to document your child\'s growth — perfect for portfolios, assessments, or sharing with co-ops.',
    ctaText: 'Get Started Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Printable progress report example',
    bullets: [
      { html: '<strong>WPM and accuracy</strong> summaries per student' },
      { html: 'Export as <strong>PDF or spreadsheet</strong>' },
      { html: 'Track <strong>growth over time</strong> with trend charts' },
      { html: 'Perfect for <strong>co-op or portfolio</strong> documentation' },
    ],
  },
  {
    title: 'Set daily goals that keep kids on track',
    desc: 'Define daily or weekly typing targets that fit your homeschool schedule. Students earn rewards for hitting their goals — keeping motivation high.',
    ctaText: 'Get Started Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Daily goal and streak tracking interface',
    bullets: [
      { html: 'Set <strong>custom daily or weekly</strong> typing targets' },
      { html: '<strong>Streak tracking</strong> rewards consistent practice' },
      { html: 'Goals adjust <strong>automatically</strong> as skills improve' },
      { html: 'Works with <strong>any schedule</strong> — morning or afternoon' },
    ],
  },
  {
    title: 'Control what your child sees and when',
    desc: 'Lock or unlock content, set pacing, and assign specific lessons to match your curriculum plan and your child\'s readiness.',
    ctaText: 'Get Started Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Flexible learning controls panel',
    bullets: [
      { html: '<strong>Assign specific lessons</strong> to individual children' },
      { html: '<strong>Lock or unlock</strong> content at any time' },
      { html: 'Set <strong>grade-based paths</strong> for each learner' },
      { html: 'Works alongside <strong>any homeschool curriculum</strong>' },
    ],
  },
  {
    title: 'Create lessons from your own curriculum',
    desc: 'Turn any reading list, vocabulary set, or passage into a typing lesson. Build custom content that reinforces what you\'re already teaching.',
    ctaText: 'Get Started Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Custom lesson creation interface',
    bullets: [
      { html: 'Create <strong>custom passages</strong> from any subject' },
      { html: 'Upload <strong>reading lists</strong> as typing content' },
      { html: 'Access <strong>500,000+ educator-created</strong> lessons' },
      { html: 'Build <strong>vocabulary lessons</strong> tied to your units' },
    ],
  },
  {
    title: 'See exactly how each child is progressing',
    desc: 'Visual dashboards show WPM growth, lesson completion, and accuracy trends at a glance — so you always know where each child stands.',
    ctaText: 'Get Started Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Visual progress tracking dashboard',
    bullets: [
      { html: '<strong>Live WPM and accuracy</strong> per student' },
      { html: 'Spot <strong>plateaus early</strong> and adjust pacing' },
      { html: '<strong>Lesson completion</strong> tracking across subjects' },
      { html: 'Monitor progress from <strong>any device</strong>' },
    ],
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

const statsData = {
  tagline: 'Families trust Typing.com to build real skills at home.',
  stats: [
    { number: 'K–12 & Adult', label: 'Full grade coverage' },
    { number: '10,000+',      label: 'Built-in lessons' },
    { number: 'Free Forever', label: 'Core typing is always free' },
    { number: '6 Games',      label: 'To keep practice fun' },
  ],
}

// ─── Curriculum ───────────────────────────────────────────────────────────────

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
      { name: 'Business Writing',            grade: '8-12' },
      { name: 'Email Etiquette',             grade: '6-12' },
      { name: 'Resume & Cover Letters',      grade: '9-12' },
      { name: 'Professional Communication',  grade: '8-12' },
      { name: 'Interview Preparation',       grade: '9-12' },
      { name: 'Workplace Skills',            grade: '9-12' },
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
      { name: 'Create a Lesson',      grade: 'All Ages' },
      { name: 'Share with Others',    grade: 'All Ages' },
      { name: 'Import Content',       grade: 'All Ages' },
      { name: 'Lesson Library',       grade: 'All Ages' },
      { name: 'AI-Assisted Creation', grade: 'All Ages' },
      { name: 'Community Spotlight',  grade: 'All Ages' },
    ],
  },
]

// ─── PLUS rows ────────────────────────────────────────────────────────────────

const plusRows = [
  { feature: 'Grade-based lessons/tests/games, SSO, class settings',                    free: true,  plus: true },
  { feature: 'Ad-free, Beyond Typing curriculum, assignments, real-time monitoring',     free: false, plus: true },
  { feature: 'Auto grading, custom benchmarks, daily goals, IEP support',               free: false, plus: true },
  { feature: 'Unlimited data retention (Free: 70 days), account mgmt, priority support', free: false, plus: true },
]

// ─── Accessibility ────────────────────────────────────────────────────────────

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

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: 'Is Typing.com free for homeschool families?',
    answer: 'Yes — the full core typing curriculum, typing tests, and games are completely free. There\'s no account required to get started. PLUS unlocks an ad-free environment, extended curriculum, detailed reports, and unlimited history.',
  },
  {
    question: 'What ages or grades does it cover?',
    answer: 'Typing.com covers K–12 and adult learners. Grade-based learning paths are available for every level, from Pre-K keyboard introduction all the way through advanced adult speed training and 10-key practice.',
  },
  {
    question: 'How do I set up my children as students?',
    answer: 'Students don\'t need an email address to start. You create a parent account, add your children as learners, and they can log in with a simple username and password. The whole setup takes under two minutes.',
  },
  {
    question: 'Can I track my child\'s progress?',
    answer: 'Yes — your parent dashboard shows each child\'s WPM, accuracy, lesson completion, and streak history. With PLUS you can generate printable progress reports for portfolios or co-op documentation.',
  },
  {
    question: 'Can I control what content my students see?',
    answer: 'Yes. You can assign specific lessons, lock or unlock content sections, and set grade-appropriate paths for each child individually — all from your parent dashboard.',
  },
  {
    question: 'What about learners with learning differences?',
    answer: 'Typing.com is WCAG 2.2 AA compliant and supports screen readers, keyboard-only navigation, dictation tools, and closed captions. PLUS includes additional IEP and accommodation support features.',
  },
  {
    question: 'Do I need to install anything?',
    answer: 'No. Typing.com runs entirely in the browser on any device with a physical keyboard — Chromebooks, Windows laptops, Macs, or desktops. Nothing to install or maintain.',
  },
  {
    question: 'How much does PLUS cost for homeschool families?',
    answer: 'Homeschool PLUS pricing is designed to be family-friendly. Contact our team for current family plan pricing, or start with the free version — which includes everything most families need.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeschoolPage() {
  return (
    <>
      <style>{`
        .hs-prefooter {
          background: #D7F4DB;
          border-top: 1px solid #84DC91;
          border-bottom: 1px solid #84DC91;
          padding: 80px 24px;
          text-align: center;
        }
        .hs-prefooter-h2 {
          font-size: 46px;
          font-weight: 700;
          line-height: 1.15;
          color: #212731;
          margin: 0 0 24px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .hs-prefooter-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FFCF46;
          color: #2A4365;
          border-radius: 18px;
          padding: 16px 40px;
          font-family: 'Nunito', sans-serif;
          font-size: 18px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-decoration: none;
          box-shadow: 0 6px 0 #E5BA3F;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .hs-prefooter-cta:hover  { transform: translateY(3px); box-shadow: 0 3px 0 #E5BA3F; }
        .hs-prefooter-cta:active { transform: translateY(6px); box-shadow: 0 0 0 #E5BA3F; }
        @media (max-width: 768px) { .hs-prefooter-h2 { font-size: 34px !important; } }
        @media (max-width: 480px) { .hs-prefooter-h2 { font-size: 26px !important; } }
      `}</style>

      <div style={{ background: '#ffffff' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <HeroBanner
          bgColor="#D7F4DB"
          textColor="#212731"
          blobLeft="images/home_left_squircle.svg"
          blobLeftAnchor="bottom"
          blobRight="images/home_right_squircle.svg"
          title="Typing for Flexible Home Learning"
          subtitle="Keep daily routines simple with clear lesson flow and visible progress."
          ctaText="Start Typing Free »"
          ctaHref="/signup"
          heroImg="images/home_hero.png"
          heroImgWidth="44%"
          heroAlt="Parent and child learning to type together"
        />

        {/* ── Stats Bar ─────────────────────────────────────────────── */}
        <StatsBar tagline={statsData.tagline} stats={statsData.stats} />

        {/* ── Student Features ──────────────────────────────────────── */}
        <div id="features">
          <FeaturesSection
            variant="student"
            theme="green"
            badge="Features"
            title="An engaging, motivating experience that builds real typing skills."
            tabs={studentTabs}
            panels={studentPanels}
          />
        </div>

        {/* ── Curriculum ────────────────────────────────────────────── */}
        <div id="curriculum">
          <CurriculumSection sections={curriculumSections} />
        </div>

        {/* ── Instructor / Parent Features ──────────────────────────── */}
        <FeaturesSection
          variant="teacher"
          theme="green"
          badge="Homeschool Instructor Features"
          title="Simple tools to track progress without the classroom overhead."
          tabs={instructorTabs}
          panels={instructorPanels}
        />

        {/* ── PLUS ──────────────────────────────────────────────────── */}
        <div id="plus">
          <PlusSection rows={plusRows} />
        </div>

        {/* ── Safety ────────────────────────────────────────────────── */}
        <SafetySection
          theme="green"
          description="Typing.com is built for schools and families, which means privacy isn't an afterthought — it's the foundation. Students never share personal data."
          bullets={[
            'Students never need an email address',
            'All PII is managed at the parent or admin level',
            'We never share or sell your data, ever',
          ]}
        />

        {/* ── Accessibility ─────────────────────────────────────────── */}
        <AccessibilitySection cards={accessCards} />

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <FaqSection items={faqItems} />

        {/* ── Pre-footer CTA ────────────────────────────────────────── */}
        <div className="hs-prefooter">
          <h2 className="hs-prefooter-h2">
            Flexible typing practice your whole family will love.
          </h2>
          <Link href="/signup" className="hs-prefooter-cta">
            Start Typing Free »
          </Link>
        </div>

        {/* ── Footer ────────────────────────────────────────────────── */}
        <SiteFooter tagline="Typing for Flexible Home Learning" />

      </div>
    </>
  )
}
