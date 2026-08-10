// ============================================================
// PORTFOLIO DATA — Single source of truth
// ============================================================

export const personalInfo = {
  name: 'Minh Le',
  title: 'Frontend Developer Intern',
  subtitle: 'Second-year Information Technology student at FPT University',
  description:
    'Building responsive and user-friendly web experiences with JavaScript and ReactJS.',
  university: 'FPT University',
  degree: 'Bachelor of Information Technology',
  major: 'Software Engineering',
  educationPeriod: 'September 2024 – Present',
  status: 'Second-year Information Technology student',
  careerDirection: 'Frontend Development',
  english: 'IELTS 6.0',
  github: 'https://github.com/minhthien435',
};

export const aboutText = `I'm a second-year Information Technology student at FPT University with a strong interest in Frontend Development. I enjoy building responsive and user-friendly web applications using JavaScript and ReactJS. I'm continuously improving my skills through coursework, personal projects, and self-learning, and I'm currently looking for opportunities to grow as a Frontend Developer.`;

export const careerObjective = {
  goal: 'Become a Frontend Developer.',
  lookingFor: 'Frontend Developer Internship',
  reasons: [
    'Gain practical experience',
    'Improve ReactJS and JavaScript skills',
    'Learn from experienced developers',
    'Work on real-world projects',
    'Understand professional software development workflows',
  ],
};

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    icon: 'code',
  },
  {
    category: 'Frameworks & Libraries',
    items: ['ReactJS', 'Bootstrap', 'Tailwind CSS', 'React Router', 'Axios'],
    icon: 'layers',
  },
  {
    category: 'Version Control',
    items: ['Git', 'GitHub'],
    icon: 'git',
  },
  {
    category: 'Language',
    items: ['English – IELTS 6.0'],
    icon: 'globe',
  },
];

export const projects = [
  {
    id: 'eparking',
    name: 'eParking Management System',
    period: 'June 2026 – July 2026',
    role: 'Frontend Developer',
    type: 'Team Project',
    description:
      'A smart and automated parking management system designed to support parking management workflows from administration to customers.',
    shortDesc: 'Smart automated parking management system with ANPR and booking features.',
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
      'Visual parking floor and slot overview',
      'User authentication',
      'Role-based access control',
      'Incident management',
      'Dynamic pricing',
    ],
    techStack: ['ReactJS', 'Tailwind CSS', 'React Router', 'Axios', 'JavaScript', 'Git/GitHub'],
    github: 'https://github.com/minhthien435',
    liveDemo: 'https://eparking-v1.vercel.app/',
    hasLiveDemo: true,
  },
  {
    id: 'todo',
    name: 'Todo App',
    period: 'May 2026',
    role: 'Frontend Developer',
    type: 'Personal Project',
    description: 'A simple and responsive Todo List application for managing daily tasks.',
    shortDesc: 'Responsive task manager with CRUD operations and Local Storage persistence.',
    myContribution: [
      'Built the UI using HTML5 and CSS3',
      'Implemented application logic using JavaScript (ES6+)',
      'Implemented CRUD operations (Create, Read, Update, Delete)',
      'Implemented task filtering by status',
      'Implemented Local Storage persistence',
    ],
    features: [
      'Create tasks',
      'Read and display tasks',
      'Update task status',
      'Delete tasks',
      'Filter tasks by All, Active, and Completed',
      'Persist data using Local Storage',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Local Storage'],
    github: 'https://github.com/minhthien435',
    hasLiveDemo: false,
  },
];

export const certifications = [
  {
    name: 'Web Design for Everybody: Basics of Web Development & Coding',
    institution: 'University of Michigan',
    platform: 'Coursera',
    completed: 'July 28, 2025',
  },
  {
    name: 'Software Engineering Specialization',
    institution: 'University of Alberta',
    platform: 'Coursera',
    completed: 'March 22, 2026',
  },
  {
    name: 'User Experience Research and Design Specialization',
    institution: 'University of Michigan',
    platform: 'Coursera',
    completed: '2026',
  },
];

export const honors = [
  {
    medal: 'Silver Medal',
    event: 'Vovinam Musical Martial Arts',
    competition: 'Vovinam / Võ nhạc competition',
    organizer: 'FPT University',
    date: 'August 2025',
    note: 'Personal achievement demonstrating discipline, teamwork, and commitment.',
  },
];

export const contact = {
  message:
    'Interested in working together or discussing a project? Feel free to get in touch.',
  github: 'https://github.com/minhthien435',
};
