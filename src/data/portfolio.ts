/**
 * Portfolio content
 * -----------------
 * Edit this file to change words, links, and facts.
 * Components only read these values, so a copy change does not require a layout edit.
 *
 * REPLACE CHECKLIST — search this file for "REPLACE":
 * [ ] site.linkedinUrl
 * [ ] each project's githubUrl
 * [ ] each project's liveUrl
 *
 * Files to swap (not in this file):
 * [ ] src/assets/profile.jpg   hero portrait. The included photo is a stand-in.
 * [ ] src/assets/resume.pdf    copied to /resume.pdf when you run dev or build.
 *
 * The first project in `projects` is rendered large. Reorder the array to feature another one.
 */

export interface Project {
  id: string
  title: string
  category: string
  description: string
  /** Shown on the featured project. Omit on smaller entries. */
  features?: readonly string[]
  tech: readonly string[]
  /** REPLACE with the real repository URL. */
  githubUrl: string
  /** REPLACE with the real live demo URL. */
  liveUrl: string
  status: 'complete' | 'in-progress'
}

/** One named group of skills. */
export interface Skill {
  category: string
  items: readonly string[]
}

export interface Experience {
  id: string
  organization: string
  role: string
  duration: string
  product: string
  highlights: readonly string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  specialization: string
  period: string
  cgpa: string
  expectedGraduation: string
}

export interface SiteProfile {
  name: string
  badge: string
  greeting: string
  /** Large second line of the hero heading, including punctuation. */
  nameLine: string
  /** Lines cycled by the hero typing effect. */
  typingLines: readonly string[]
  intro: string
  techTags: readonly string[]
  /** Two-line label overlaid on the portrait. */
  portraitLines: readonly [string, string]
  portraitFocus: string
  portraitAlt: string
  email: string
  githubUrl: string
  /** REPLACE with your real LinkedIn profile URL. */
  linkedinUrl: string
  /** Public URL. The file lives at src/assets/resume.pdf. */
  resumePath: string
  footerTagline: string
}

export const site: SiteProfile = {
  name: 'Amog Rao',
  badge: 'Available for Opportunities',
  greeting: "Hi, I'm",
  nameLine: 'Amog Rao.',
  typingLines: [
    'Aspiring Software Developer',
    'Full-Stack Developer',
    'AI Enthusiast',
  ],
  intro:
    "I'm a Computer Science Engineering student at KL University, specializing in AI for Autonomous Systems. I enjoy building web applications, solving programming problems, and exploring how AI can solve real-world challenges.",
  techTags: ['Java', 'React.js', 'Spring Boot', 'Python', 'AI'],
  portraitLines: ['Computer Science', 'Engineering'],
  portraitFocus: 'AI · Full stack · Software',
  portraitAlt: 'Portrait of Amog Rao',
  email: 'amograo77@gmail.com',
  githubUrl: 'https://github.com/amograo9661',
  linkedinUrl: 'https://www.linkedin.com/in/REPLACE-ME',
  resumePath: '/resume.pdf',
  footerTagline: 'Computer Science · Full-Stack · AI',
}

export const about = {
  title: 'About Me',
  statement:
    'I build software that combines thoughtful interfaces, reliable engineering and emerging AI technologies.',
  body: 'I am a Computer Science and Engineering student at KL University, specializing in AI for Autonomous Systems. I have a strong interest in software development, full-stack development and artificial intelligence. I work with Java, Python, React.js, Spring Boot and SQL, building web applications and user-friendly interfaces. I am seeking internship and full-time opportunities to work on real-world projects.',
  interestsLabel: 'Career interests',
  interests: [
    'Software Development',
    'Full-Stack Development',
    'AI/ML',
    'Autonomous Systems',
  ],
} as const

export const skills: readonly Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Web',
    items: [
      'HTML5',
      'CSS3',
      'React.js',
      'Node.js',
      'Spring Boot',
      'Bootstrap',
      'REST APIs',
    ],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'DBMS'],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'VS Code',
      'AWS',
      'Google AI Studio',
    ],
  },
  {
    category: 'Core Concepts',
    items: ['Data Structures and Algorithms', 'OOP', 'DBMS', 'SDLC'],
  },
  {
    category: 'Interests',
    items: [
      'AI',
      'Machine Learning',
      'Computer Vision',
      'Autonomous Vehicles',
      'UI/UX',
      'Application Testing',
    ],
  },
]

export const projects: readonly Project[] = [
  {
    id: 'ride-sharing',
    title: 'Ride Sharing System',
    category: 'Full-stack',
    description:
      'Web application connecting drivers and passengers to create, search and book rides.',
    features: [
      'Authentication',
      'Driver and passenger roles',
      'Ride creation and booking',
      'Ride search',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/amograo9661/REPLACE-ride-sharing',
    liveUrl: 'https://example.com/REPLACE-ride-sharing-live-demo',
    status: 'complete',
  },
  {
    id: 'bookmark-manager',
    title: 'Bookmark Manager',
    category: 'Full-stack · Team project',
    description:
      'Web app to organize and manage bookmarks, with an Express backend, local JSON storage and Gemini API integration.',
    tech: ['JavaScript', 'Express.js', 'Vite', 'JSON', 'Google AI Studio'],
    githubUrl: 'https://github.com/amograo9661/REPLACE-bookmark-manager',
    liveUrl: 'https://example.com/REPLACE-bookmark-manager-live-demo',
    status: 'complete',
  },
  {
    id: 'pickleball',
    title: 'Pickleball Website',
    category: 'Frontend',
    description: 'Clean, responsive website presenting pickleball information.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/amograo9661/REPLACE-pickleball-website',
    liveUrl: 'https://example.com/REPLACE-pickleball-live-demo',
    status: 'complete',
  },
  {
    id: 'autonomous-parking',
    title: 'Autonomous Parking System',
    category: 'AI for Autonomous Systems',
    description:
      'Computer vision and sensor-fusion based autonomous parking system that detects parking slots, identifies obstacles, plans collision-free trajectories and simulates autonomous parallel parking.',
    tech: [
      'Computer Vision',
      'Ultrasonic Sensors',
      'Sensor Fusion',
      'Trajectory Planning',
      'Simulation',
    ],
    githubUrl: 'https://github.com/amograo9661/REPLACE-autonomous-parking',
    liveUrl: 'https://example.com/REPLACE-autonomous-parking-live-demo',
    status: 'complete',
  },
  {
    id: 'home-tutor-finder',
    title: 'Home Tutor Finder',
    category: 'Concept · In progress',
    description:
      'Platform to find tutors by location, subject, availability and class level.',
    tech: [],
    githubUrl: 'https://github.com/amograo9661/REPLACE-home-tutor-finder',
    liveUrl: 'https://example.com/REPLACE-home-tutor-finder-live-demo',
    status: 'in-progress',
  },
]

export const experience: readonly Experience[] = [
  {
    id: 'sankalp',
    organization: 'Sankalp (Hello Vibe)',
    role: 'Frontend Developer & Application Tester Intern',
    duration: '6 Months',
    product: 'Sankalp - Praylock Panchang App',
    highlights: [
      'Built frontend screens and interactive elements',
      'Created clean user-friendly interfaces',
      'Improved navigation and design consistency',
      'Implemented UI features from team requirements',
      'Tested features and user flows',
      'Reported bugs and usability issues',
    ],
  },
]

export const education: readonly Education[] = [
  {
    id: 'kl-university',
    institution: 'KL University',
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'AI for Autonomous Systems',
    period: '2023 — 2027',
    cgpa: '8.81 / 10',
    expectedGraduation: 'May 2027',
  },
]

/**
 * Page sections. `showInNav` controls the sticky bar.
 * Education stays on the page, between Experience and Contact, without a nav link.
 */
export const sections = [
  { id: 'about', label: 'About', index: '01', showInNav: true },
  { id: 'skills', label: 'Skills', index: '02', showInNav: true },
  { id: 'projects', label: 'Projects', index: '03', showInNav: true },
  { id: 'experience', label: 'Experience', index: '04', showInNav: true },
  { id: 'education', label: 'Education', index: '05', showInNav: false },
  { id: 'contact', label: 'Contact', index: '06', showInNav: true },
] as const

export type SectionId = (typeof sections)[number]['id']

export const navItems = sections.filter((section) => section.showInNav)

/** Stable id list for the scroll spy. Built once so the effect is not reset every render. */
export const sectionIds: readonly SectionId[] = navItems.map((section) => section.id)

/** Look up a section by id so components do not depend on array order. */
export function getSection(id: SectionId) {
  const section = sections.find((item) => item.id === id)
  if (!section) {
    throw new Error(`Unknown section: ${id}`)
  }
  return section
}

export const contactCopy = {
  kicker: 'Contact',
  heading: "Let's build something worth talking about.",
  lead: "I'm always open to internship, full-time and interesting software development opportunities.",
  formNote: 'This form stays in the browser for now and does not send email.',
  submit: 'Send message',
  sending: 'Sending…',
  success: 'Thanks, {name}. This note stays on the page and has not been emailed.',
} as const
