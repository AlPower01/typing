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
import { studentTabs, studentPanels } from '@/lib/student-features-data'
import { sharedCurriculumSections } from '@/lib/curriculum-data'

export const metadata: Metadata = {
  title: 'Typing.com for Homeschoolers — Flexible Typing Practice at Home',
  description: 'Structured typing lessons, progress tracking, and a full K–12 curriculum for homeschool families. Free forever, with optional PLUS for deeper learning.',
}

// ─── Instructor / parent features ────────────────────────────────────────────

const instructorTabs = [
  { label: 'Simple Family Setup' },
  { label: 'Visual Progress Tracking' },
  { label: 'Motivating Daily Goals' },
  { label: 'Unlimited Custom Content' },
  { label: 'Printable Reports' },
  { label: 'Flexible Learning Controls' },
]

const instructorPanels = [
  {
    title: 'Add Your Students & Start Typing',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Family account setup dashboard',
    accordionItems: [
      { label: 'Quick Student Creation', text: 'Add students one at a time or create multiple at once. No rostering systems, no spreadsheets—just names and you\'re ready.' },
      { label: 'Simple Class Structure', text: 'Organize students into classes if you have multiple children or just add them individually. It\'s flexible to fit however you homeschool.' },
      { label: 'Choose Curriculum by Grade', text: 'Select the curriculum that matches each child\'s grade level—Kindergarten through 12th Grade, or Adult Learner—and they\'re ready to start their typing journey.' },
      { label: 'Self-Join Links', text: 'Generate a unique link students can use to create their own accounts and join your class—perfect for older, independent learners.' },
    ],
  },
  {
    title: 'See What They\'ve Accomplished at a Glance',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Visual progress tracking dashboard',
    accordionItems: [
      { label: 'Student Dashboard', text: 'View each student\'s overall typing time, lessons completed, average speed and accuracy, and earned achievements all in one place.' },
      { label: 'Activity Tracker Calendar', text: 'See which days your student practiced typing with a visual monthly calendar view—makes it easy to celebrate streaks and consistency.' },
      { label: 'Lesson Progress Bars', text: 'Watch their progress across all curriculum areas with clear visual indicators. Know exactly which lessons are complete and what\'s coming next.' },
      { label: 'Typing Test Results', text: 'Review performance on all typing tests with date, WPM, accuracy, and improvement trends over time. Print certificates to celebrate milestones.' },
    ],
  },
  {
    title: 'Set Daily Expectations & Build Habits',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Daily goal and streak tracking interface',
    accordionItems: [
      { label: 'Daily Typing Goals', text: 'Set a required number of daily typing minutes for each student. A clear daily goal timer shows them exactly how much time remains.' },
      { label: 'Game Access Control', text: 'Optionally restrict access to typing games until the daily goal is met—a simple, effective way to ensure practice comes before play.' },
      { label: 'Encourage Streaks', text: 'Students earn streak achievements for consecutive days and weeks of typing, helping them build lasting habits and see their dedication rewarded.' },
      { label: 'Live Activity Monitoring', text: 'See real-time activity over the last 30 minutes. Know who\'s actively typing and what they\'re working on right now.' },
    ],
  },
  {
    title: 'Create Lessons for Your Unique Curriculum',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Custom lesson creation interface',
    accordionItems: [
      { label: 'Your Content, Your Way', text: 'Build custom typing lessons using vocabulary from your history unit, spelling words, science terms, Bible verses, or any content you want them to practice.' },
      { label: 'Lesson Types', text: 'Create Typing Lessons, Typing Tests, or Written Prompts. Choose from Standard screens, Advanced (longer), Falling Letter, Block Letters, or Coding screens.' },
      { label: 'Over 500,000 Created by Educators', text: 'Access lessons shared by other homeschool parents and teachers, or keep yours private for your family only.' },
      { label: 'Assign & Track', text: 'Assign custom lessons to your students and monitor their progress just like any other lesson in the curriculum.' },
    ],
  },
  {
    title: 'Simple Reports When You Need Them',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Printable progress report',
    accordionItems: [
      { label: 'Activity Summary', text: 'See total typing time, lessons completed, and average speed and accuracy for any date range—perfect for weekly reviews or end-of-semester records.' },
      { label: 'Test Reports', text: 'Review typing test performance over time with Test Improvement Summary and Test Activity Details.' },
      { label: 'Lesson Details', text: 'Drill into specific lessons to see quiz results, typing accuracy, and completion status.' },
      { label: 'Print & Export', text: 'Generate printable reports for your homeschool records or portfolio reviews. Export to share with co-op teachers or evaluators.' },
    ],
  },
  {
    title: 'Adjust Settings to Fit Your Family',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Flexible learning controls panel',
    accordionItems: [
      { label: 'Game & Lesson Control', text: 'Enable or disable specific typing games and lessons for each student. Turn off content that doesn\'t fit your curriculum or values.' },
      { label: 'Grading Thresholds', text: 'Set minimum speed and accuracy requirements to earn stars on lessons, or let students work at their own pace without pressure.' },
      { label: 'Accessibility Options', text: 'Enable dyslexic font, high contrast theme, dictation, closed captions, typing sounds, or one-handed typing for students who need them.' },
      { label: 'Lesson Progression', text: 'Allow students to redo completed lessons, skip around in the curriculum, or require sequential completion—your choice.' },
      { label: 'Student Announcements', text: 'Post custom messages to the student dashboard to encourage, remind, or celebrate progress.' },
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

const curriculumSections = sharedCurriculumSections

// ─── PLUS rows ────────────────────────────────────────────────────────────────

const plusRows = [
  { feature: 'Grade-based typing lessons, tests, and games',                                                                          free: true,  plus: true },
  { feature: 'SSO with Google, Microsoft, Clever, and ClassLink',                                                                     free: true,  plus: true },
  { feature: 'Classroom-level settings',                                                                                              free: true,  plus: true },
  { feature: '100% ad-free experience',                                                                                               free: false, plus: true },
  { feature: 'Beyond Typing curriculum (digital citizenship, AI literacy, creative writing, coding, test prep, career prep)',         free: false, plus: true },
  { feature: 'Assign lessons, tests, and games',                                                                                      free: false, plus: true },
  { feature: 'Real-time student activity monitoring',                                                                                 free: false, plus: true },
  { feature: 'Auto grading with customizable thresholds',                                                                             free: false, plus: true },
  { feature: 'Customized benchmarking',                                                                                               free: false, plus: true },
  { feature: 'Daily practice time goals',                                                                                             free: false, plus: true },
  { feature: 'Individual student settings (IEP support)',                                                                             free: false, plus: true },
  { feature: 'Unlimited data retention (Free: 70 days)',                                                                              free: false, plus: true },
  { feature: 'Dedicated account management',                                                                                          free: false, plus: true },
  { feature: 'Priority phone and email support',                                                                                      free: false, plus: true },
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
            badge="Student Features"
            title="An engaging, motivating experience that builds real typing skills."
            subtitle="Structured practice, games, personalized feedback, and progression systems that keep students motivated from their first lesson through mastery."
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
          subtitle="Manage your students, set goals, monitor daily activity, and see exactly where they are—without district dashboards or complicated reports you don't need."
          tabs={instructorTabs}
          panels={instructorPanels}
        />


        {/* ── PLUS ──────────────────────────────────────────────────── */}
        <div id="plus">
          <PlusSection rows={plusRows} showPricing={false} />
        </div>

        {/* ── Accessibility ─────────────────────────────────────────── */}
        <AccessibilitySection cards={accessCards} />

        {/* ── Safety ────────────────────────────────────────────────── */}
        <SafetySection
          theme="green"
          description="Typing.com is built for schools and families, which means privacy isn't an afterthought — it's the foundation. Students never share personal data."
        />

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <FaqSection items={faqItems} />

        {/* ── Footer ────────────────────────────────────────────────── */}
        <SiteFooter tagline="Typing for Flexible Home Learning" />

      </div>
    </>
  )
}
