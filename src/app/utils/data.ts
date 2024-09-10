export const navigationLinks = [
  { label: 'Intro', path: '#home' },
  { label: 'About Me', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string

  image: string
  description: string
  tags: string[]
}
export const projectsData: projectType[] = [
  {
    name: 'MERN Stack Blogging Website',
    repo: 'https://github.com/GKDEADDEVIL/Blog',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg',
    description: 'A comprehensive blog application built using the MERN stack, featuring user authentication, various categories, and a personal profile for frequent updates.',
    tags: ['mern', 'react', 'node.js', 'express', 'mongodb', 'typescript', 'auth']
  },
  {
    name: 'Price Scrap',
    repo: 'https://github.com/GKDEADDEVIL/price-scrap',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg',
    description: 'An application to track and compare product prices across different online stores, helping users save money through effective price monitoring.',
    tags: ['python', 'web-scraping', 'beautifulsoup', 'requests', 'automation']
  },
  {
    name: 'Bounty Hawk',
    repo: 'https://github.com/GKDEADDEVIL/Bounty-Hawk',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg',
    description: 'Bounty Hawk is a sophisticated tool designed for bug bounty hunters. It automates the process of reconnaissance, vulnerability scanning, and exploitation, aiding in the discovery of security flaws in web applications.',
    tags: ['python', 'bug-bounty', 'automation', 'web-security']
  },
  {
    name: 'MaxPhisher',
    repo: 'https://github.com/GKDEADDEVIL/MaxPhisher',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg',
    description: '[Private]',
    tags: ['python', 'phishing', 'social-engineering', 'security']
  },
  {
    name: 'Food Delivery App',
    repo: 'https://github.com/GKDEADDEVIL/food-deliveryApp',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg',
    description: 'A React Native application designed for food delivery services, including features for ordering, tracking, and managing deliveries.',
    tags: ['react-native', 'mobile-app', 'javascript', 'redux', 'firebase']
  },
  {
    name: 'Personal Portfolio',
    repo: 'https://github.com/GKDEADDEVIL/portfolio',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg',
    description: 'A personal portfolio website showcasing my skills, projects, and experience, designed to present my work to potential employers and collaborators.',
    tags: ['react', 'next.js', 'tailwindcss', 'ui/ux', 'design']
  },
  {
    name: 'Chat Application',
    repo: 'https://github.com/GKDEADDEVIL/chat-application',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg',
    description: 'A real-time chat application built with Node.js and Socket.io, featuring user authentication and chat rooms for group discussions.',
    tags: ['node.js', 'socket.io', 'express', 'mongodb', 'javascript']
  }
];

export const skillsData = [
  {
    img: 'react/react-original.svg',
    name: 'React JS'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Next.js'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'express/express-original.svg',
    name: 'Express.js'
  },
  {
    img: 'rust/rust-original.svg',
    name: 'Rust'
  },
  {
    img: 'django/django-plain.svg',
    name: 'Django'
  },
  {
    img: 'flask/flask-original.svg',
    name: 'Flask'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'c/c-original.svg',
    name: 'C'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img: 'solidity/solidity-original.svg',
    name: 'Solidity'
  },
  {
    img: 'bash/bash-original.svg',
    name: 'Bash'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'windows11/windows11-original.svg',
    name: 'Windows'
  },
  {
    img: 'linux/linux-original.svg',
    name: 'Linux'
  },
  {
    img: 'ubuntu/ubuntu-original.svg',
    name: 'Ubuntu'
  },
  {
    img: 'centos/centos-original.svg',
    name: 'CentOS'
  },
  {
    img: 'debian/debian-original.svg',
    name: 'Debian '
  },
  {
    img: 'archlinux/archlinux-original.svg',
    name: 'Arch Linux'
  },
  {
    img: 'eclipse/eclipse-original.svg',
    name: 'Eclipse'
  }
]
