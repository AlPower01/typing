import type { Metadata } from 'next'
import SiteFooter from '@/components/layout/SiteFooter'
import HeroBanner from '@/components/sections/HeroBanner'
import StatsBar from '@/components/sections/StatsBar'
import FeaturesSection from '@/components/sections/FeaturesSection'
import CurriculumSection from '@/components/sections/CurriculumSection'
import RosteringSection from '@/components/sections/RosteringSection'
import AccessibilitySection from '@/components/sections/AccessibilitySection'
import PlusSection from '@/components/sections/PlusSection'
import StandardsSection from '@/components/sections/StandardsSection'
import SafetySection from '@/components/sections/SafetySection'
import FaqSection from '@/components/sections/FaqSection'
import { studentTabs, studentPanels } from '@/lib/student-features-data'
import { sharedCurriculumSections } from '@/lib/curriculum-data'

export const metadata: Metadata = {
  title: 'Typing.com for Educators — Keyboarding for Classrooms & Districts',
  description: 'Keep daily routines simple with clear lesson flow and visible progress.',
}

const teacherTabs = [
  { label: 'Easy Rostering' },
  { label: 'Complete Classroom Control' },
  { label: 'Robust Assignment Creation' },
  { label: 'Real-Time Monitoring' },
  { label: 'Comprehensive, Exportable Reports' },
  { label: 'Unlimited Custom Content' },
  { label: 'Configurable Auto-Grading' },
  { label: 'District-Wide Management' },
]

const teacherPanels = [
  {
    title: 'Get Started in Minutes, Not Hours',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Easy class rostering interface',
    accordionItems: [
      { label: 'SSO & Rostering Integrations', text: 'Sign in with Google, Microsoft, Clever, or Classlink. Students and classes sync automatically—no spreadsheets, no manual data entry.' },
      { label: 'Multiple Adding Options', text: 'Create students one at a time, add multiple manually, import via CSV, or generate a self-join link students can use to register themselves.' },
      { label: 'Google Classroom Integration', text: 'Create classes and sync rosters directly from Google Classroom with a single click.' },
      { label: 'Role Switcher', text: 'Teachers with district or school admin access can toggle between roles instantly to access the right dashboard for the task at hand.' },
    ],
  },
  {
    title: 'Manage Classes with Precision & Flexibility',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Classroom control dashboard',
    accordionItems: [
      { label: 'Individual Class Dashboards', text: 'View enrolled students with last login, typing time, average speed, and accuracy. Access assignments, run reports, and review weekly scoreboards—all from one screen.' },
      { label: 'Fine-Tuned Settings', text: 'Set grading thresholds by letter grades or points. Enable or disable specific games and lessons. Configure daily typing goals and restrict game access until goals are met.' },
      { label: 'Announcements', text: 'Post custom messages to the class dashboard with optional expiration dates to communicate deadlines, reminders, or encouragement.' },
      { label: 'Accessibility Options', text: 'Enable dyslexic font, high contrast theme, dictation, closed captions, typing sounds, or one-handed typing modes for any student who needs them.' },
      { label: 'Advanced Controls', text: 'Allow lesson restarts, non-sequential progression, or restrict access by IP address and class schedule for secure, controlled learning environments.' },
    ],
  },
  {
    title: 'Assign Exactly What Students Need',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Assignment creation interface',
    accordionItems: [
      { label: 'Assignment Builder', text: 'Create assignments from Core Curriculum lessons, Typing Tests, Games, or Custom Lessons. Assign to entire grades or specific classes. Add titles, descriptions, and optional due dates.' },
      { label: 'Google Classroom Sync', text: 'Push assignments directly to Google Classroom and sync student progress automatically—no duplicate grading or manual updates.' },
      { label: 'Progress Tracking', text: 'View overall class completion, average accuracy and speed, top scorers, and individual student status for every assignment in real time.' },
      { label: 'Active & Past Assignments', text: 'Easily review what\'s currently assigned and revisit historical assignments to track growth and inform instructional decisions.' },
    ],
  },
  {
    title: 'See Student Activity as It Happens',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Real-time monitoring dashboard',
    accordionItems: [
      { label: 'Live Activity Dashboard', text: 'Monitor real-time student activity over the last 30 minutes across all classes or filter by a specific class. See exactly who\'s actively typing and what they\'re working on.' },
      { label: 'Dashboard Snapshot', text: 'View average typing time per student, recent assignments, most active classes ranked by typing time, and last week\'s top performers for speed, activity, and game engagement.' },
      { label: 'Individual Student Drill-Down', text: 'Access any student\'s full dashboard to review total time, lessons completed, average speed and accuracy, activity tracker calendar, typing test results, and earned achievements. Use \'Log In As\' to see the platform exactly as the student sees it.' },
    ],
  },
  {
    title: 'Generate Reports That Actually Answer Your Questions',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Exportable reports dashboard',
    accordionItems: [
      { label: 'Test Reports', text: 'Test Improvement Summary and Test Activity Details show progress over time and identify trends in performance.' },
      { label: 'Lesson Reports', text: 'Current Lesson Progress, Quiz Details, Typing Lesson Details, and Written Prompt Details provide granular insight into student work.' },
      { label: 'Activity Reports', text: 'Activity Summary and Class Scoreboard reveal engagement patterns and participation levels across your classes.' },
      { label: 'Game & Usage Reports', text: 'Game Summary, Game Details, and License Usage reports help track game engagement and seat allocation across your district or school.' },
      { label: 'Visual & Exportable', text: 'Toggle between graph and table views. Export to share with colleagues, administrators, or parents. Print for meetings or grading records.' },
    ],
  },
  {
    title: 'Build Lessons That Match Your Instruction',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Custom lesson creation interface',
    accordionItems: [
      { label: 'Over 500,000 Created by Educators', text: 'Teachers on the platform have built an extensive library of custom lesson screens, which they can optionally share with other educators.' },
      { label: 'Lesson Types', text: 'Create Typing Lessons, Typing Tests, or Written Prompts. Choose from Standard screens, Advanced (longer), Game screens, Falling Letter, Block Letters, or Coding screens.' },
      { label: 'Keyboard Layouts', text: 'Select Full Keyboard, No Keyboard, or Numeric Keyboard to match the skill focus of each lesson.' },
      { label: 'Visibility Controls', text: 'Save as Draft or Published. Choose whether lessons appear in the student lesson list or only when assigned.' },
      { label: 'Reinforce Any Subject', text: 'Custom lessons allow you to integrate vocabulary, spelling, history facts, science terms, or any other content into typing practice—making every keystroke instructionally meaningful.' },
    ],
  },
  {
    title: 'Grading That Works Automatically',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Auto-grading configuration',
    accordionItems: [
      { label: 'Customizable Grading Thresholds', text: 'Set benchmarks by letter grades or points. Define minimum speed and accuracy requirements to earn stars on each lesson.' },
      { label: 'Instant Results', text: 'Lessons and typing tests grade themselves the moment students complete them—no manual review, no waiting.' },
      { label: 'Exportable Records', text: 'Pull grading reports for any date range, class, or student. Export to your grade book or share with parents during conferences.' },
      { label: 'Google Classroom Integration', text: 'Sync grades directly to Google Classroom so your grade book updates automatically without duplicate data entry.' },
    ],
  },
  {
    title: 'Scale Across Schools & Districts with Confidence',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'District-wide management dashboard',
    accordionItems: [
      { label: 'Multi-Role Dashboard', text: 'District admins and school admins have dashboards that provide visibility across multiple classes, schools, or the entire district.' },
      { label: 'License Management', text: 'View expiration dates, seat usage, and purchase additional licenses or renew existing ones. Use the \'Free All Seats\' button to unassign inactive students and redistribute licenses efficiently.' },
      { label: 'Usage & Growth Tracking', text: 'Monitor implementation success, identify trends in typing time, speed, and accuracy across schools, and ensure resources are being used effectively.' },
      { label: 'Global Search', text: 'Quickly find students, classes, custom lessons, or assignments across your entire organization without navigating through multiple menus.' },
      { label: 'Support & Resources', text: 'Access knowledge base, FAQs, support contact forms, and \'What\'s New\' product updates—all from the top navigation.' },
    ],
  },
]

const curriculumSections = sharedCurriculumSections

const accessibilityCards = [
  {
    iconSrc: 'images/screenreader.svg',
    title: 'Screen Reader Compatibility',
    desc: 'Optimized for assistive technology with proper labels, roles, and clear announcements across all interactive elements.',
  },
  {
    iconSrc: 'images/keyboard.svg',
    title: 'Keyboard Navigation',
    desc: 'Full keyboard operability with no traps, logical tab order, and visible focus indicators throughout the platform.',
  },
  {
    iconSrc: 'images/dictation.svg',
    title: 'Dictation Support',
    desc: 'Speech-to-text capability for supported activities, giving students with motor difficulties an equal path through every lesson.',
  },
  {
    iconSrc: 'images/closed.svg',
    title: 'Closed Captions',
    desc: 'All instructional video content includes accurate closed captions, supporting deaf and hard-of-hearing students and English language learners.',
  },
  {
    iconSrc: 'images/dictation.svg',
    title: 'High Contrast Mode',
    desc: 'Built-in high contrast themes keep text and UI elements clearly legible for students with low vision or light sensitivity.',
  },
  {
    iconSrc: 'images/keyboard.svg',
    title: 'Adjustable Text Size',
    desc: 'Students can increase text size across the platform without breaking layouts, keeping every lesson readable at any scale.',
  },
  {
    iconSrc: 'images/screenreader.svg',
    title: 'Reduced Motion Support',
    desc: 'Typing.com honours the prefers-reduced-motion setting, removing animations that could affect students with vestibular disorders.',
  },
  {
    iconSrc: 'images/closed.svg',
    title: 'WCAG 2.2 AA Certified',
    desc: 'Our platform meets the full WCAG 2.2 AA standard — independently verified to ensure every student can participate without barriers.',
  },
]

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

const faqItems = [
  {
    question: 'Is Typing.com really free?',
    answer: 'Yes. Core typing instruction — including grade-based lessons, typing tests, and games — is completely free with no content restrictions or time limits. PLUS adds advanced features like assignments, auto-grading, real-time monitoring, and an ad-free experience.',
  },
  {
    question: "What's included in PLUS that isn't in Free?",
    answer: 'PLUS provides an ad-free experience, assignment creation, real-time student monitoring, auto-grading thresholds, custom benchmarking, daily goals, individual student settings, unlimited data retention, priority support, and Beyond Typing curriculum (digital citizenship, AI literacy, creative writing, coding, test prep, career prep).',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most faculty are up and running in under 10 minutes. Classes and students sync automatically if using Google Classroom, Clever, or ClassLink.',
  },
  {
    question: 'What devices does Typing.com support?',
    answer: 'Typing.com is web-based and works on any device with a modern browser — including Chromebooks, laptops, and desktops.',
  },
  {
    question: "How does Typing.com align with my state's standards?",
    answer: 'The platform maps to ISTE and Common Core nationwide, provides state-specific alignments for 11 states, and offers custom curricula for Texas and New York. Teachers can view alignments directly in the portal.',
  },
  {
    question: 'What about students with IEPs or accessibility needs?',
    answer: 'Typing.com is WCAG 2.2 AA certified and includes dyslexic font, high contrast theme, read aloud, captions, one-handed modes, and screen reader support. These features are always free.',
  },
  {
    question: 'How does data retention work?',
    answer: 'Free accounts retain data for up to 70 days. PLUS accounts offer unlimited data retention.',
  },
  {
    question: 'Do you offer district-wide pricing?',
    answer: 'PLUS starts as low as $1.14 per student for large district licences, with bulk discounts available. Contact our sales team for a custom quote.',
  },
  {
    question: "Is my students' data safe?",
    answer: 'Yes. The platform is COPPA and FERPA compliant, never sells student data, and meets district privacy standards.',
  },
]

export default function EducatorPage() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* Hero */}
      <span id="features" aria-hidden="true" />
      <HeroBanner
        bgColor="#FEF3EC"
        blobLeft="images/orange_squircle_left.svg"
        blobRight="images/orange_squircle_right.svg"
        title="Typing &amp; Beyond for Classrooms, Schools and Districts"
        subtitle="Keep daily routines simple with clear lesson flow and visible progress."
        ctaText="Sign Up Now »"
        ctaHref="/signup"
        heroImg="images/educator_hero.png"
        heroAlt="Teacher in a classroom with students"
      />

      {/* Stats */}
      <StatsBar
        tagline="Preparing students for the future."
        stats={[
          { number: '39 million+', label: 'Students' },
          { number: '677,000+', label: 'Teachers' },
          { number: 'Since 2005', label: 'Trusted in schools' },
          { number: '500,000+', label: 'Lessons created by educators' },
        ]}
      />

      {/* Student Features */}
      <FeaturesSection
        variant="student"
        theme="orange"
        badge="Student Features"
        title="An engaging, motivating experience that builds real typing skills."
        subtitle="Structured practice, games, personalized feedback, and progression systems that keep students motivated from their first lesson through mastery."
        tabs={studentTabs}
        panels={studentPanels}
      />

      {/* Curriculum */}
      <span id="curriculum" aria-hidden="true" />
      <CurriculumSection sections={curriculumSections} />

      {/* Teacher Features */}
      <FeaturesSection
        variant="teacher"
        theme="orange"
        badge="Teacher & Admin Features"
        title="Complete classroom control with zero complexity."
        subtitle="Manage classes, create assignments, track progress in real time, and generate reports—all without wrestling with complicated software or endless clicks."
        tabs={teacherTabs}
        panels={teacherPanels}
      />

      {/* Rostering & Sync */}
      <RosteringSection />

      {/* Accessibility */}
      <AccessibilitySection cards={accessibilityCards} />

      {/* Plus */}
      <PlusSection rows={plusRows} />

      {/* Standards */}
      <StandardsSection />

      {/* Safety */}
      <SafetySection />

      {/* FAQ */}
      <FaqSection items={faqItems} />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
