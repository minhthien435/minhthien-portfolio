// ============================================================
// PORTFOLIO DATA — Updated for redesign
// ============================================================

export const personalInfo = {
  name: 'Minh Le',
  title: 'Frontend Developer Intern',
  subtitle: 'Second-year IT student at FPT University',
  description:
    'I build responsive, user-friendly web apps with ReactJS and modern JavaScript. Currently seeking a Frontend Developer Internship to grow through real-world projects.',
  university: 'FPT University',
  degree: 'Bachelor of Information Technology',
  major: 'Software Engineering',
  educationPeriod: 'September 2024 – Present',
  status: 'Second-year IT student',
  careerDirection: 'Frontend Development',
  english: 'IELTS 6.0',
  email: 'minhjordanlenguyen@gmail.com',
  github: 'https://github.com/minhthien435',
  githubHandle: 'minhthien435',
  cvUrl: '/SE203908_LÊ NGUYỄN THIÊN MINH.pdf',
  cvFilename: 'SE203908_LÊ_NGUYỄN_THIÊN_MINH.pdf',
};

export const aboutText = `I'm a second-year Information Technology student at FPT University, passionate about Frontend Development. I enjoy turning ideas into real, usable interfaces using ReactJS and modern web technologies. I'm always learning, always building.`;

export const careerObjective = {
  goal: 'Become a Frontend Developer.',
  lookingFor: 'Frontend Developer Internship',
  reasons: [
    'Gain practical, real-world experience',
    'Improve ReactJS and JavaScript skills',
    'Learn from experienced developers',
    'Understand professional software workflows',
  ],
};

export const skills = {
  frontend: [
    { name: 'HTML5',        color: 'rose'   },
    { name: 'CSS3',         color: 'cyan'   },
    { name: 'JavaScript',   color: 'yellow' },
    { name: 'ReactJS',      color: 'violet' },
    { name: 'Tailwind CSS', color: 'cyan'   },
    { name: 'Bootstrap',    color: 'violet' },
  ],
  tools: [
    { name: 'Git',    color: 'rose'  },
    { name: 'GitHub', color: 'gray'  },
    { name: 'VS Code',color: 'cyan'  },
  ],
  learning: [
    { name: 'TypeScript', color: 'cyan'   },
    { name: 'Node.js',    color: 'green'  },
    { name: 'Express.js', color: 'violet' },
  ],
};

export const projects = [
  {
    id: 'eparking',
    name: 'eParking Management System',
    period: 'June 2026 – July 2026',
    role: 'Frontend Developer',
    type: 'Team Project',
    featured: true,
    description:
      'A smart automated parking management system supporting workflows from administration to customers — including ANPR, booking, payment, and role-based access.',
    shortDesc: 'Smart parking management with ANPR, booking, and real-time floor visualization.',
    myContribution: [
      'Developed responsive user interfaces using ReactJS and Tailwind CSS',
      'Implemented navigation and routing using React Router',
      'Integrated REST APIs using Axios for booking and authentication',
      'Collaborated with teammates using Git and GitHub',
    ],
    features: [
      'Automatic Number Plate Recognition (ANPR)',
      'Parking slot management',
      'Advance parking booking',
      'Quick payment',
      'Visual parking floor overview',
      'User authentication',
      'Role-based access control',
      'Incident management',
      'Dynamic pricing',
    ],
    techStack: ['ReactJS', 'Tailwind CSS', 'React Router', 'Axios', 'JavaScript'],
    github: 'https://github.com/minhthien435/parking-management-system',
    liveDemo: 'https://eparking-v1.vercel.app/',
    hasLiveDemo: true,
    accentColor: 'violet',
  },
  {
    id: 'jamwave',
    name: 'JamWave – Music Streaming Web Platform',
    period: 'August 2026 – Present',
    role: 'Frontend Developer',
    type: 'Personal Project',
    featured: false,
    description:
      'A Spotify-inspired music streaming platform built with React and Zustand, featuring 2,400+ tracks, custom audio player engine, playlist management, and an AI music assistant for natural-language search.',
    shortDesc: 'Spotify-inspired music streaming platform with 2,400+ tracks, Zustand audio player, and AI music assistant.',
    myContribution: [
      'Built a Spotify-inspired music streaming platform with 2,400+ tracks from external music APIs',
      'Developed a custom audio player with React and Zustand, supporting queue, seeking, volume, and continuous playback',
      'Implemented search, playlists, and liked songs with REST API integration',
      'Integrated an AI music assistant for natural-language music search and recommendations',
    ],
    features: [
      '2,400+ Music Tracks',
      'Custom Audio Player Engine',
      'Zustand Global State Management',
      'Playback Queue & Seeking & Volume Controls',
      'Search, Playlists & Liked Songs',
      'REST API Integration',
      'AI Music Assistant & Recommendations',
    ],
    techStack: ['ReactJS', 'Zustand', 'JavaScript', 'REST APIs', 'Tailwind CSS', 'AI Integration'],
    github: 'https://github.com/minhthien435/JamWave',
    liveDemo: 'https://jam-wave.vercel.app/',
    hasLiveDemo: true,
    accentColor: 'cyan',
  },
  {
    id: 'todo',
    name: 'Todo App',
    period: 'May 2026',
    role: 'Frontend Developer',
    type: 'Personal Project',
    featured: false,
    description: 'A clean, responsive Todo List application for managing daily tasks with full CRUD and Local Storage persistence.',
    shortDesc: 'Task manager with CRUD, filtering, and Local Storage.',
    myContribution: [
      'Built the full UI using HTML5 and CSS3',
      'Implemented all application logic in JavaScript (ES6+)',
      'Built CRUD operations and task filtering',
      'Local Storage for data persistence',
    ],
    features: [
      'Create, read, update, delete tasks',
      'Filter by All / Active / Completed',
      'Local Storage persistence',
      'Responsive design',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Local Storage'],
    github: 'https://github.com/minhthien435/TodoApp',
    hasLiveDemo: false,
    accentColor: 'cyan',
  },
];

export const certifications = [
  {
    name: 'Web Design for Everybody: Basics of Web Development & Coding',
    institution: 'University of Michigan',
    platform: 'Coursera',
    completed: 'July 2025',
    color: 'violet',
    credentialUrl: 'https://www.coursera.org/specializations/web-design',
  },
  {
    name: 'Software Engineering Specialization',
    institution: 'University of Alberta',
    platform: 'Coursera',
    completed: 'March 2026',
    color: 'cyan',
    credentialUrl: 'https://www.coursera.org/specializations/software-engineering',
  },
  {
    name: 'User Experience Research and Design Specialization',
    institution: 'University of Michigan',
    platform: 'Coursera',
    completed: 'July 2026',
    color: 'yellow',
    credentialUrl: 'https://www.coursera.org/specializations/ux-research-design',
  },
];

export const achievement = {
  medal: 'Silver Award',
  event: 'Võ nhạc (Vovinam Musical Martial Arts) Competition',
  organizer: 'FPT University',
  date: 'August 2025',
  note: 'Demonstrates discipline, teamwork, and commitment to excellence.',
};

export const contact = {
  message:
    'Interested in working together or discussing a project? Feel free to get in touch.',
  github: 'https://github.com/minhthien435',
};

