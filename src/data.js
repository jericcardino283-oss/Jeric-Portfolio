
/* ════════════════════════════════════════════════════════════
   Portfolio content configuration
   Colours & fonts: src/styles/global.css
   Photos: public/img
   ════════════════════════════════════════════════════════════ */

export const profile = {
  name: 'Jeric',
  full: 'Jeric A. Cardiño',
  role: 'Web Developer',
  location: 'CSJDM Bulacan, Philippines',
  email: 'jericcardino283@gmail.com',
  intro: 'I build responsive websites and practical applications using Java, Flutter, and Dart. I enjoy transforming creative ideas into user-friendly digital experiences through clean design and functional code.',
  github: 'https://github.com/jericcardino283-oss',
  linkedin: 'https://www.linkedin.com/in/cardiño-jeric-a-61a45242b',
  resume: '',
  avatar: 'img/faces/smile.jpg',
}

// Quick highlights under the hero introduction
export const heroCounts = [
  { value: '3', label: 'Featured Projects' },
  { value: '8', label: 'Certifications' },
  { value: '4', label: 'Core Languages' },
]

export const about = {
  photos: [
    'img/photos/portrait-tilt.jpg',
    'img/photos/portrait-profile.jpg',
    'img/photos/portrait-seated.jpg',
    'img/photos/portrait-smile.jpg',
  ],

  roles: [
    'Web Developer',
    'Database Management',
    'Software Development',
    'UI/UX Designer',
  ],

  paragraphs: [
    "Hi! I'm Jeric, an Information Systems student passionate about web development, application design, and technology.",
    "I enjoy building user-friendly websites and applications using Java, Flutter, and Dart. I'm continuously improving my programming skills, exploring modern technologies, and creating practical digital solutions that solve real-world problems.",
  ],

  stats: [
    { value: '1.50', label: 'GWA · BS Information Systems' },
    { value: '3', label: 'Featured Projects' },
    { value: '8', label: 'Certifications Earned' },
    { value: '4', label: 'Core Programming Languages' },
  ],
}

/* Project visuals: project */
export const projects = [
  {
    title: 'ProjectList',
    tag: 'Project',
    visual: 'project',
    text: 'A project repository by Jeric. Visit GitHub to explore the available files and project details.',
    tech: [],
    link: 'https://github.com/jericcardino283-oss/ProjectList',
    color: '#34231F',
  },
  {
    title: 'Application',
    tag: 'Application project',
    visual: 'project',
    text: 'An application project by Jeric. Visit GitHub to explore the available files and project details.',
    tech: [],
    link: 'https://github.com/jericcardino283-oss/Application',
    color: '#3A2420',
  },
  {
    title: 'Websi',
    tag: 'Flutter project',
    visual: 'project',
    text: 'A Flutter project by Jeric. Visit GitHub to explore the available files and project details.',
    tech: ['Flutter'],
    link: 'https://github.com/jericcardino283-oss/Websi',
    color: '#30211F',
  },
]

export const journey = [
  {
    year: '2026',
    title: 'Growing as a Developer',
    org: 'Information Systems',
    text: 'Learned about website design and application development using Java, Flutter, and Dart.',
    photo: 'img/photos/portrait-laptop.jpg',
    note: 'A valuable learning experience',
  },
  {
    year: '2025',
    title: 'Exploring Technology',
    org: 'Information Systems',
    text: 'Explored programming, website design, and how information systems support problem-solving',
    photo: 'img/photos/portrait-smile.jpg',
    note: 'Building ideas as a team',
  },
  {
    year: '2024',
    title: 'Information Systems',
    org: 'New Era University',
    text: 'Started my journey in Information Systems, learning about technology, information management, and problem-solving.',
    photo: 'img/photos/portrait-look.jpg',
    note: 'Learning and growing',
  },
  {
    year: '2024',
    title: 'Started My IS Journey',
    org: 'Information Systems Student',
    text: 'Began studying Information Systems and learned the fundamentals of technology, information management, and problem-solving.',
    photo: 'img/photos/portrait-seated.jpg',
    note: 'Building a strong foundation',
  },
]

export const skills = [
  'Systems Analysis & Design',
  'Database Design (ERD, normalization)',
  'UML / Flowcharts',
  'Requirements Gathering',
  'Data Analysis (Excel, Power BI, or Tableau)',
  'Project Management (Agile/Scrum)',
  'REST APIs',
  'Figma / UI-UX Design',
  'Business Process Modeling',
  'Technical Documentation',
  'IT Project Documentation / SDLC',
  'Cybersecurity Basics',
  'ERP Basics (SAP, Odoo)',
  'Problem Solving',
  'Team Collaboration',
  'Flutter',
  'Dart',
  'Java',
  'JavaScript',
  'HTML',
  'CSS',
  'C++',
  'Python',
]

export const highlights = [
  {
    value: 10,
    suffix: '',
    label: 'Systems Designed',
    note: 'Building practical Information Systems skills',
  },
  {
    value: 3,
    suffix: '',
    label: 'GitHub Repositories',
    note: 'View my 3 public repositories',
    link: profile.github,
  },
  {
    value: 8,
    suffix: '',
    label: 'Technologies Applied',
    note: '8 programming and web technologies',
  },
  {
    value: 10,
    suffix: '',
    label: 'Seminars',
    note: 'Looking forward to joining',
  },
]

// Certificates displayed on the wall
export const certifications = [
  {
    title: 'Project management: the start of the project journey',
    issuer: 'OpenLearn · The Open University',
    image: 'img/certificates/project-management.png',
  },
  {
    title: 'Data analysis: visualisations in Excel',
    issuer: 'OpenLearn · The Open University',
    image: 'img/certificates/data-analysis-excel.png',
  },
  {
    title: 'Introduction to cyber security: stay safe online',
    issuer: 'OpenLearn · The Open University',
    image: 'img/certificates/cyber-security.png',
  },
  {
    title: 'Introducing technology and innovation management',
    issuer: 'OpenLearn · The Open University',
    image: 'img/certificates/technology-innovation.png',
  },
  {
    title: 'Network Support and Security',
    issuer: 'Cisco Networking Academy',
    image: 'img/certificates/cisco-network-support-security.png',
    orientation: 'landscape',
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'Cisco Networking Academy',
    image: 'img/certificates/cisco-introduction-iot.png',
    orientation: 'landscape',
  },
]

// Hero animation frames
export const lookFrames = {
  from: 0,
  to: 28,
}

export const contactSticker = 'img/stickers/ig/f000.png'
