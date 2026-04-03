import type { Metadata } from 'next'
import SiteFooter from '@/components/layout/SiteFooter'
import HeroBanner from '@/components/sections/HeroBanner'
import StatsBar from '@/components/sections/StatsBar'
import FeaturesSection from '@/components/sections/FeaturesSection'
import CurriculumSection from '@/components/sections/CurriculumSection'
import AccessibilitySection from '@/components/sections/AccessibilitySection'
import PlusSection from '@/components/sections/PlusSection'
import SafetySection from '@/components/sections/SafetySection'
import FaqSection from '@/components/sections/FaqSection'

export const metadata: Metadata = {
  title: 'Typing.com for Educators — Keyboarding for Classrooms & Districts',
  description: 'Keep daily routines simple with clear lesson flow and visible progress.',
}

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
    title: 'Hundreds of interactive, step-by-step lessons',
    desc: 'From home row basics to advanced speed drills, structured lessons guide every student through the keyboard with instant feedback and clear progression.',
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Interactive typing lesson interface',
  },
  {
    title: 'Built-in typing tests with real WPM tracking',
    desc: 'Students take timed tests to measure speed and accuracy. Clear benchmarks set personal goals and let educators track progress across the class.',
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Typing test and benchmark results',
  },
  {
    title: 'A curriculum that adjusts to every learner',
    desc: "The platform automatically adapts lesson difficulty based on each student's performance, keeping them challenged without feeling overwhelmed.",
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Adaptive curriculum overview',
  },
  {
    title: 'Games that make practice genuinely fun',
    desc: "Reinforce skills with arcade-style typing games that feel more like play than practice. Students build speed without even realising they're learning.",
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Fun typing games',
  },
  {
    title: 'Earn badges, climb leaderboards, stay motivated',
    desc: 'Achievements, streaks, and class leaderboards give students something to work toward every session — turning daily practice into a habit they actually enjoy.',
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Gamified learning rewards',
  },
  {
    title: 'Complete lessons and unlock new worlds',
    desc: 'As students progress through lessons and tests, they unlock new themed worlds and rewards — turning the learning journey into an adventure worth continuing.',
    ctaText: 'Start Typing Today »',
    ctaHref: '/signup',
    imgSrc: 'images/right_student_carousel.png',
    imgAlt: 'Unlockable worlds and rewards',
  },
]

const teacherTabs = [
  { label: 'Easy Rostering' },
  { label: 'Complete Classroom Control' },
  { label: 'Robust Assignment Creation' },
  { label: 'Real-Time Monitoring' },
  { label: 'Exportable Reports' },
  { label: 'Unlimited Custom Content' },
  { label: 'Configurable Auto-Grading' },
  { label: 'District-Wide Management' },
]

const teacherPanels = [
  {
    title: 'Get Started in Minutes, Not Hours',
    desc: 'Set up classes in minutes with built-in integrations and flexible student onboarding.',
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/feature_zoom.png',
    imgAlt: 'Easy class rostering interface',
    bullets: [
      { html: 'SSO with <strong>Google</strong>, <strong>Microsoft</strong>, <strong>Clever</strong>, or <strong>ClassLink</strong>' },
      { html: '<strong>Google Classroom sync</strong>' },
      { html: '<strong>Manual</strong>, <strong>CSV</strong>, or <strong>self-join</strong> student rostering' },
      { html: '<strong>Instant role switching</strong> for teachers and admins' },
    ],
  },
  {
    title: 'Total visibility and control over every class',
    desc: 'Manage assignments, pacing, and student progress from one centralized dashboard — without switching between tools.',
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Classroom control dashboard',
    bullets: [
      { html: '<strong>Assign lessons</strong> to individual students or full classes' },
      { html: '<strong>Set pacing</strong> and due dates for any activity' },
      { html: '<strong>Lock or unlock</strong> content per student or group' },
      { html: '<strong>Multi-class management</strong> from a single login' },
    ],
  },
  {
    title: 'Build custom assignments in seconds',
    desc: 'Choose from thousands of pre-built lessons or create your own — then assign with full control over timing, grading, and expectations.',
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Assignment creation interface',
    bullets: [
      { html: '<strong>Drag-and-drop</strong> lesson builder' },
      { html: 'Set <strong>WPM and accuracy targets</strong> per assignment' },
      { html: '<strong>Schedule</strong> assignments weeks in advance' },
      { html: 'Sync to <strong>Google Classroom</strong> or LMS' },
    ],
  },
  {
    title: "See every student's progress as it happens",
    desc: "Live dashboards let you monitor typing speed, accuracy, and time-on-task without interrupting the class.",
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Real-time monitoring dashboard',
    bullets: [
      { html: '<strong>Live WPM and accuracy</strong> per student' },
      { html: 'Spot <strong>struggling students</strong> before they fall behind' },
      { html: '<strong>Class averages</strong> updated in real time' },
      { html: 'Monitor from <strong>any device</strong> in the room' },
    ],
  },
  {
    title: 'Data you can share and act on',
    desc: 'Generate detailed reports on individual and class-wide performance — and export them to share with parents, admins, or your SIS.',
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Exportable reports',
    bullets: [
      { html: 'Export as <strong>CSV, PDF, or spreadsheet</strong>' },
      { html: 'Share <strong>parent-friendly progress reports</strong>' },
      { html: 'Track <strong>growth over time</strong> with trend charts' },
      { html: 'Align data to <strong>district standards</strong>' },
    ],
  },
  {
    title: 'Make Typing.com truly your own',
    desc: 'Build custom typing passages, vocabulary lists, and lessons using any text — then assign them alongside the built-in curriculum.',
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Custom content creation',
    bullets: [
      { html: 'Create <strong>custom passages</strong> from any subject' },
      { html: 'Upload <strong>class reading lists</strong> as typing content' },
      { html: 'Build and share lessons with <strong>your whole school</strong>' },
      { html: '<strong>500,000+ educator-created</strong> lessons available' },
    ],
  },
  {
    title: "Let the platform grade, so you don't have to",
    desc: 'Set your own WPM and accuracy thresholds, then let Typing.com automatically mark work complete or flag students who need more practice.',
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'Auto-grading configuration',
    bullets: [
      { html: 'Set <strong>custom passing thresholds</strong> per assignment' },
      { html: 'Auto-flag students <strong>below expectations</strong>' },
      { html: 'Grades sync to <strong>Google Classroom</strong> and LMS' },
      { html: 'Override with <strong>manual adjustments</strong> anytime' },
    ],
  },
  {
    title: 'Scale across every school in your district',
    desc: 'Admins can manage all schools, teachers, and students from one account — with role-based permissions and district-wide reporting.',
    ctaText: 'Start for Free »',
    ctaHref: '/signup',
    imgSrc: 'images/features_carousel.png',
    imgAlt: 'District-wide management dashboard',
    bullets: [
      { html: '<strong>Multi-school</strong> admin dashboard' },
      { html: '<strong>Role-based access</strong> for teachers vs. admins' },
      { html: 'District-wide <strong>curriculum standards</strong> enforcement' },
      { html: 'Bulk rostering via <strong>SIS integration</strong> or CSV' },
    ],
  },
]

const curriculumSections = [
  {
    id: 'keyboarding',
    label: 'Keyboarding',
    subtitle: 'Core touch-typing instruction from first key reaches through advanced fluency.',
    lessons: [
      { name: 'Pre-Keyboarding', grade: 'K-6' },
      { name: 'Learn the Keys', grade: 'K-12 – Adults' },
      { name: 'Punctuation & Numbers', grade: '1-3' },
      { name: 'Punctuation & Advanced Keys', grade: '4-12 + Adult' },
      { name: 'Personalized Practice', grade: 'K-12 – Adults' },
      { name: 'Typing Tests', grade: 'K-12 – Adults' },
      { name: 'Numeric Keypad / 10-Key', grade: 'Adult + Core' },
      { name: 'Dvork Keyboard', grade: 'Core' },
    ],
  },
  {
    id: 'cross-curricular',
    label: 'Cross-Curricular',
    subtitle: 'Reinforce academic vocabulary and skills across every subject area.',
    lessons: [
      { name: 'Science Vocabulary', grade: 'K-12' },
      { name: 'Math Terminology', grade: '3-12' },
      { name: 'Social Studies', grade: 'K-8' },
      { name: 'ELA Practice', grade: 'K-12' },
      { name: 'World Languages', grade: '4-12' },
      { name: 'STEM Essentials', grade: '6-12' },
    ],
  },
  {
    id: 'digital-citizenship',
    label: 'Digital Citizenship',
    subtitle: 'Teach students to navigate the digital world safely and responsibly.',
    lessons: [
      { name: 'Online Safety', grade: 'K-12' },
      { name: 'Privacy & Security', grade: '4-12' },
      { name: 'Cyberbullying', grade: 'K-8' },
      { name: 'Digital Footprint', grade: '6-12' },
      { name: 'Screen Time Balance', grade: 'K-6' },
      { name: 'Copyright & Fair Use', grade: '6-12' },
    ],
  },
  {
    id: 'ai-literacy',
    label: 'AI Literacy',
    subtitle: 'Build foundational knowledge and critical thinking skills around artificial intelligence.',
    lessons: [
      { name: 'What is AI?', grade: 'K-6' },
      { name: 'AI in Daily Life', grade: '4-12' },
      { name: 'Responsible AI Use', grade: '6-12' },
      { name: 'Prompt Engineering', grade: '8-12' },
      { name: 'AI Ethics', grade: '8-12' },
      { name: 'AI & Future Careers', grade: '6-12' },
    ],
  },
  {
    id: 'computer-applications',
    label: 'Computer Applications',
    subtitle: 'Practical software skills students and adults use every day.',
    lessons: [
      { name: 'Word Processing', grade: 'K-12' },
      { name: 'Spreadsheets', grade: '4-12' },
      { name: 'Presentations', grade: 'K-12' },
      { name: 'Email Etiquette', grade: '4-12' },
      { name: 'File Management', grade: 'K-8' },
      { name: 'Collaboration Tools', grade: '6-12' },
    ],
  },
  {
    id: 'coding',
    label: 'Coding',
    subtitle: 'Introductory and intermediate programming concepts for every level.',
    lessons: [
      { name: 'Block Coding', grade: 'K-5' },
      { name: 'HTML Basics', grade: '6-12' },
      { name: 'Python Intro', grade: '8-12' },
      { name: 'JavaScript', grade: '8-12' },
      { name: 'Algorithms', grade: '4-12' },
      { name: 'App Design', grade: '6-12' },
    ],
  },
  {
    id: 'creative-writing',
    label: 'Creative Writing',
    subtitle: 'Inspire expression and build writing fluency through meaningful practice.',
    lessons: [
      { name: 'Short Stories', grade: 'K-12' },
      { name: 'Poetry', grade: 'K-12' },
      { name: 'Persuasive Essays', grade: '4-12' },
      { name: 'Journals & Reflections', grade: 'K-8' },
      { name: 'Research Reports', grade: '6-12' },
      { name: 'Creative Fiction', grade: '6-12' },
    ],
  },
  {
    id: 'test-prep',
    label: 'Test Prep',
    subtitle: 'Build the speed and accuracy students need to succeed on digital assessments.',
    lessons: [
      { name: 'Typing Assessments', grade: 'K-12' },
      { name: 'Essay Practice', grade: '4-12' },
      { name: 'State Test Prep', grade: '3-12' },
      { name: 'ACT/SAT Ready', grade: '8-12' },
      { name: 'Reading Comprehension', grade: '3-12' },
      { name: 'Timed Challenges', grade: '4-12' },
    ],
  },
  {
    id: 'career-prep',
    label: 'Career Prep',
    subtitle: 'Workplace-ready communication and productivity skills for older students and adults.',
    lessons: [
      { name: 'Business Writing', grade: '8-12' },
      { name: 'Email Etiquette', grade: '6-12' },
      { name: 'Resume & Cover Letters', grade: '9-12' },
      { name: 'Professional Communication', grade: '8-12' },
      { name: 'Interview Preparation', grade: '9-12' },
      { name: 'Workplace Skills', grade: '9-12' },
    ],
  },
  {
    id: 'standards',
    label: 'Standards',
    subtitle: 'Aligned to the national and state standards your district already uses.',
    lessons: [
      { name: 'ISTE Standards', grade: 'K-12' },
      { name: 'Common Core ELA', grade: 'K-12' },
      { name: 'CSTA Standards', grade: 'K-12' },
      { name: 'State Standards', grade: 'K-12' },
      { name: '21st Century Skills', grade: 'K-12' },
      { name: 'NGSS Integration', grade: 'K-12' },
    ],
  },
  {
    id: 'custom-lessons',
    label: 'Custom Lessons',
    subtitle: 'Create, share, and assign your own lessons — or explore thousands made by educators like you.',
    lessons: [
      { name: 'Create a Lesson', grade: 'All Ages' },
      { name: 'Share with Class', grade: 'All Ages' },
      { name: 'Import Content', grade: 'All Ages' },
      { name: 'Lesson Library', grade: 'All Ages' },
      { name: 'AI-Assisted Creation', grade: 'All Ages' },
      { name: 'Educator Spotlight', grade: 'All Ages' },
    ],
  },
]

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
  { feature: 'Grade-based lessons/tests/games, SSO, class settings', free: true, plus: true },
  { feature: 'Ad-free, Beyond Typing curriculum, assignments, real-time monitoring', free: false, plus: true },
  { feature: 'Auto grading, custom benchmarks, daily goals, IEP support', free: false, plus: true },
  { feature: 'Unlimited data retention (Free: 70 days), account mgmt, priority support', free: false, plus: true },
]

const faqItems = [
  {
    question: 'Is Typing.com really free?',
    answer: 'Yes — the full typing curriculum, lessons, games, and progress tracking are completely free for students, teachers, and individuals. No credit card required.',
  },
  {
    question: 'What does Personal PLUS add?',
    answer: 'Personal PLUS removes all ads, unlocks premium typing games, provides printable certificates, and gives access to advanced progress reports — all for one low monthly or annual fee.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'You can try lessons without an account, but creating a free account saves your progress, unlocks certificates, and lets teachers track student performance over time.',
  },
  {
    question: 'What devices can I use?',
    answer: "Typing.com works on any device with a physical keyboard — desktop computers, laptops, and Chromebooks. It's optimised for Chrome, Firefox, Safari, and Edge.",
  },
  {
    question: 'How is typing speed (WPM) calculated?',
    answer: 'WPM is calculated by dividing the total number of correctly typed characters by 5 (the average word length), then dividing by the number of minutes elapsed. Errors reduce your accuracy score but don\'t inflate your WPM.',
  },
  {
    question: 'Can I take a typing test?',
    answer: "Yes — free 1, 3, and 5-minute typing tests are available any time with no account needed. You'll get your WPM, accuracy score, and a shareable certificate when you're done.",
  },
  {
    question: "I'm an adult learner. Is there a curriculum for me?",
    answer: 'Absolutely. Typing.com includes beginner through advanced courses suitable for all ages, plus a dedicated section for adult learners covering professional and workplace typing scenarios.',
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
        tabs={teacherTabs}
        panels={teacherPanels}
      />

      {/* Accessibility */}
      <AccessibilitySection cards={accessibilityCards} />

      {/* Plus */}
      <PlusSection rows={plusRows} />

      {/* Safety */}
      <SafetySection />

      {/* FAQ */}
      <FaqSection items={faqItems} />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
