export interface AccordionItem {
  label: string
  text: string
}

export interface StudentPanel {
  title: string
  imgSrc: string
  imgAlt: string
  accordionItems?: AccordionItem[]
  paragraphs?: string[]
}

export const studentTabs = [
  { label: 'Engaging Lessons' },
  { label: 'Typing Tests & Benchmarks' },
  { label: 'Adaptive Curriculum' },
  { label: 'Fun Typing Games' },
  { label: 'Gamified Learning' },
  { label: 'Epic Unlockable Worlds' },
]

export const studentPanels: StudentPanel[] = [
  {
    title: 'Structured Lessons & Rich Curriculum',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Interactive typing lesson interface',
    accordionItems: [
      {
        label: 'Grade-Based Curriculum',
        text: 'Available for Kindergarten through Grade 12, Adult Learners, and Core. Learning paths are designed for every stage, adapting content to the right skill level.',
      },
      {
        label: 'Core Learning Path',
        text: 'Guides students through pre-keyboarding and advanced keys with grade-appropriate content — from home row basics to full keyboard fluency.',
      },
      {
        label: 'Beyond Typing',
        text: 'Includes digital citizenship, AI literacy, creative writing, computer applications, coding, test prep, and career prep.',
      },
      {
        label: 'Custom Lessons',
        text: 'Allow teachers to create their own typed content. Access 500,000+ educator-created examples to supplement any curriculum.',
      },
    ],
  },
  {
    title: 'Typing Tests & Benchmarking',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Typing test results showing WPM and accuracy',
    accordionItems: [
      {
        label: 'Timed Tests',
        text: '1-minute, 3-minute, and 5-minute durations draw from 50+ diverse passages to give students a consistent, fair benchmark.',
      },
      {
        label: 'Page Tests',
        text: '1-page, 2-page, and 3-page assessment options for longer-form accuracy and endurance measurement.',
      },
      {
        label: 'Test History',
        text: 'Maintains comprehensive records with date, WPM, and accuracy so students and teachers can track improvement over time.',
      },
      {
        label: 'Performance Charts',
        text: 'Display longitudinal data showing speed and accuracy trends across weeks and months.',
      },
      {
        label: 'Printable Certificates',
        text: 'Provide recognition of achievement with shareable, printable certificates for WPM milestones.',
      },
    ],
  },
  {
    title: 'Adaptive Curriculum with Real-Time Feedback',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Adaptive curriculum overview',
    paragraphs: [
      'Adaptive practice lessons appear throughout the curriculum for targeted practice on specific keys or skills where students need the most improvement.',
      'Real-Time Feedback: Instant corrections on every keystroke help students see mistakes immediately and improve faster with guided reinforcement.',
    ],
  },
  {
    title: 'Six Engaging Typing Games',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Fun typing games interface',
    accordionItems: [
      { label: 'Keyboard Ninja',           text: 'Chop falling letters before they hit the ground. Speed and accuracy matter.' },
      { label: 'Keyboard Jump',            text: 'Jump platforms by typing the right keys at the right moment.' },
      { label: 'Tommy Q: Zombie Defender', text: 'Defend against incoming zombie waves with typing speed and accuracy.' },
      { label: 'ZType',                    text: 'Destroy incoming ships by typing their labels before they reach you.' },
      { label: 'Type-a-Balloon',           text: 'Pop balloons by typing the letters they display before they float away.' },
      { label: 'Type Toss',                text: 'Keep objects in the air by typing accurately and quickly.' },
    ],
  },
  {
    title: 'Gamified Learning with Progress Tracking & Achievements',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Gamified learning dashboard',
    accordionItems: [
      {
        label: 'My Performance Dashboard',
        text: 'Shows total stars earned, average WPM, average accuracy, and cumulative time spent typing.',
      },
      {
        label: 'Streak Calendar',
        text: 'Displays daily and weekly typing streaks in a visual calendar view to encourage consistent practice.',
      },
      {
        label: 'Activity Tracker',
        text: 'Monthly calendar showing all practice days at a glance.',
      },
      {
        label: 'Lesson Progress',
        text: 'Shows completion status with visual progress bars across all curriculum sections.',
      },
      {
        label: 'Class Scoreboard',
        text: 'Rankings by speed and engagement, updated every 2 minutes to keep competition friendly and current.',
      },
      {
        label: 'Daily Goals',
        text: 'Set required daily typing minutes with a live timer to build consistent practice habits.',
      },
      {
        label: 'Earnable Achievements',
        text: 'Students earn 237 badges across speed, accuracy, time, games, streaks, and lessons.',
      },
      {
        label: 'Avatar & XP System',
        text: 'Students earn XP and advance through themed avatar tiers as their skills improve.',
      },
    ],
  },
  {
    title: 'Epic Unlockable Worlds with Leveling Characters',
    imgSrc: 'images/edu_features_img.png',
    imgAlt: 'Unlockable worlds and leveling characters',
    paragraphs: [
      'Students choose from 11 themed worlds including Grow Your Skills, The Flying Foxes, The Princess Adventures, and more. Each world has multiple characters that visually level up as students progress.',
      'The Low Vision world provides high-contrast visuals and accessible design for students who need additional visual support.',
    ],
  },
]
