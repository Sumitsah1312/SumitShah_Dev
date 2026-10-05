import type { SkillGroup, ExperienceItem, ProjectItem, EducationItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: 'SUMIT KUMAR SHAH',
  role: 'Software Developer | .NET Backend Engineer',
  headline: 'Building scalable backend systems and thoughtful digital experiences.',
  bio: 'Software developer experienced in building RESTful APIs, secure business applications, database-driven workflows, and modern web interfaces.',
  aboutSummary: `I am a Software Developer with a strong foundation in backend development and modern web technologies, holding a B.Tech in Electronics and Communication Engineering from Delhi Technological University (DTU). My core expertise lies in designing robust C# and ASP.NET Core Web APIs, optimizing database operations with Entity Framework Core & PostgreSQL, and implementing enterprise-grade security models including JWT authentication and Role-Based Access Control (RBAC).`,
  email: 'hireme.sumit@gmail.com',
  phone: '+91 9319264210',
  location: 'Delhi NCR, India',
  availability: 'Open for Backend & Full-Stack Engineering Roles',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages for backend logic, algorithm design, and modern web applications.',
    skills: [
      { name: 'C#', level: 'Expert', isPrimary: true },
      { name: 'SQL', level: 'Advanced', isPrimary: true },
      { name: 'C++', level: 'Intermediate', isPrimary: true },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend & Frameworks',
    description: 'Enterprise backend stacks, RESTful web services, and high-performance ORMs.',
    skills: [
      { name: '.NET 8', level: 'Expert', isPrimary: true },
      { name: 'ASP.NET Core', level: 'Expert', isPrimary: true },
      { name: 'ASP.NET Core Web API', level: 'Expert', isPrimary: true },
      { name: 'Entity Framework Core', level: 'Expert', isPrimary: true },
      { name: 'LINQ', level: 'Expert', isPrimary: true },
      { name: 'ASP.NET MVC', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Expert', isPrimary: true },
      { name: 'Dependency Injection', level: 'Advanced' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Relational data modeling, query optimization, indexing, and migration management.',
    skills: [
      { name: 'PostgreSQL', level: 'Expert', isPrimary: true },
      { name: 'SQL Server', level: 'Advanced', isPrimary: true },
    ],
  },
  {
    category: 'Architecture & Security',
    description: 'Design patterns, enterprise security protocols, multi-tenancy, and clean modular code.',
    skills: [
      { name: 'Clean Architecture', level: 'Advanced', isPrimary: true },
      { name: 'SOLID Principles', level: 'Advanced', isPrimary: true },
      { name: 'JWT Authentication', level: 'Expert', isPrimary: true },
      { name: 'ASP.NET Identity', level: 'Advanced', isPrimary: true },
      { name: 'Role-Based Access (RBAC)', level: 'Expert' },
      { name: 'Microservices Concepts', level: 'Intermediate' },
    ],
  },
  {
    category: 'Frontend & UI',
    description: 'Modern, responsive client interfaces designed for seamless backend API integration.',
    skills: [
      { name: 'React.js', level: 'Advanced', isPrimary: true },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced', isPrimary: true },
      { name: 'Bootstrap', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Development Workflows',
    description: 'DevOps containers, API documentation, testing, and version control tools.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', isPrimary: true },
      { name: 'Docker', level: 'Intermediate', isPrimary: true },
      { name: 'Postman', level: 'Expert', isPrimary: true },
      { name: 'Swagger / OpenAPI', level: 'Advanced' },
      { name: 'VS Code / Visual Studio', level: 'Expert' },
    ],
  },
  {
    category: 'Computer Science Fundamentals',
    description: 'Strong theoretical grounding enabling efficient problem-solving and clean system architecture.',
    skills: [
      { name: 'Data Structures & Algorithms', level: '500+ Solved', isPrimary: true },
      { name: 'Database Management Systems (DBMS)', level: 'Advanced', isPrimary: true },
      { name: 'Operating Systems', level: 'Foundational' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Expert', isPrimary: true },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'mash-virtual',
    role: 'Software Developer',
    company: 'Mash Virtual',
    location: 'Delhi NCR, India',
    period: 'August 2024 – April 2026',
    type: 'Full-time',
    techStack: ['C#', '.NET 8', 'ASP.NET Core Web API', 'ASP.NET MVC', 'EF Core', 'LINQ', 'PostgreSQL', 'Docker'],
    bulletPoints: [
      'Developed and maintained RESTful APIs and business logic across multiple production systems utilizing reusable CRUD operations, robust validation patterns, and centralized error handling.',
      'Designed database access layers, complex relational queries, filtering, sorting, pagination, and database schema migrations using EF Core, LINQ, and PostgreSQL.',
      'Contributed significantly to HRMS database query optimization, reducing latency and improving overall application performance by approximately 25–30%.',
      'Implemented enterprise security architectures using ASP.NET Identity, JWT authentication, fine-grained role-based authorization (RBAC), and tenant-specific data isolation.',
      'Built automated background email notification services, SMTP integrations, salary slip PDF generation engines, CSV data export pipelines, dynamic feedback forms, and dynamic QR code generation.',
      'Extensively validated API endpoints using Postman and Swagger, adhered to Git/GitHub version control workflows, and containerized dev workflows using Docker.',
    ],
    keyHighlights: [
      'Boosted HRMS query response speed by 25–30%',
      'Architected 40+ secure multi-tenant APIs',
      'Built automated PDF & QR generation engine',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'qard-hasana',
    title: 'QardHasana',
    subtitle: 'Interest-Free Microloan Platform',
    organization: 'Mash Virtual',
    year: '2026',
    role: 'Software Developer',
    stack: ['.NET 8', 'C#', 'ASP.NET Core Web API', 'EF Core', 'LINQ', 'PostgreSQL', 'JWT', 'SMTP'],
    isPrivate: true,
    visualConcept: 'Financial dashboard architecture showing automated loan lifecycle state transitions, transaction ledgers, and dynamic filter aggregation reports.',
    contributions: [
      'Developed and enhanced REST APIs for loan request lifecycle management, multi-stage approval workflows, and real-time loan status tracking.',
      'Implemented structured transaction data management with strict database validations and enum-based state transition safety.',
      'Optimized complex LINQ queries, applied targeted database indexes, and minimized N+1 database roundtrips for financial reporting.',
      'Built analytics dashboard reporting with multi-criteria filtering (date, status, user tier), financial summaries, aggregations, and CSV/Excel export pipelines.',
      'Implemented JWT authentication, role-based authorization, strict resource ownership validation checks, external service integration, and automated SMTP email notifications.',
    ],
    architectureHighlights: [
      {
        title: 'State Transition Pipeline',
        description: 'Enum-enforced workflow machine preventing illegal loan state transitions and keeping transactional logs immutable.',
      },
      {
        title: 'Query & Indexing Optimization',
        description: 'Covering indexes and projection queries reduced database roundtrips and memory overhead during large export aggregations.',
      },
      {
        title: 'Resource Ownership Guard',
        description: 'Custom authorization filters enforcing tenant and user ownership checks across all loan modification endpoints.',
      },
    ],
    metrics: ['Multi-Stage Approval Workflow', 'Enum-Enforced State Machine', 'CSV / Excel Automated Export'],
  },
  {
    id: 'setika-hrms',
    title: 'Setika',
    subtitle: 'Enterprise Human Resource Management System',
    organization: 'Mash Virtual',
    year: '2025',
    role: 'Software Developer',
    stack: ['.NET 8', 'C#', 'ASP.NET Core Web API', 'EF Core', 'LINQ', 'PostgreSQL', 'iTextSharp', 'ASP.NET Identity'],
    isPrivate: true,
    visualConcept: 'Interactive HR analytics cockpit with real-time employee attendance tracking, automated leave workflows, and salary slip PDF rendering preview.',
    contributions: [
      'Developed and maintained 40+ RESTful APIs covering employee lifecycle management, attendance logs, leave request approval workflows, tenant isolation, and administrative reporting.',
      'Implemented accurate punch-in/punch-out tracking workflows, supervisor leave approval chains, interactive attendance dashboards, and smooth EF Core migrations.',
      'Engineered automated salary slip PDF generation service leveraging iTextSharp.LGPLv2.Core with dynamic styling and secure payload rendering.',
      'Automated background scheduled email notifications for employee birthdays, work anniversaries, company announcements, and leave workflow updates.',
      'Integrated ASP.NET Identity with fine-grained role-based authorization ensuring data security across HR managers, team leads, and employees.',
    ],
    architectureHighlights: [
      {
        title: '40+ Modular REST Endpoints',
        description: 'Clean controller-service separation structured for maintainability and straightforward unit testing.',
      },
      {
        title: 'Dynamic PDF Engine',
        description: 'Low-memory streaming PDF generator utilizing iTextSharp for pixel-precise salary slip output.',
      },
      {
        title: '25-30% Query Acceleration',
        description: 'Refactored unindexed join queries and applied async EF Core streaming for HR analytics dashboards.',
      },
    ],
    metrics: ['25–30% Query Performance Boost', '40+ RESTful API Endpoints', 'Automated PDF Salary Slips'],
  },
  {
    id: 'session-feed',
    title: 'SessionFeed',
    subtitle: 'Dynamic Multi-Tenant Feedback System',
    organization: 'Mash Virtual',
    year: '2025',
    role: 'Software Developer',
    stack: ['C#', 'ASP.NET MVC', 'EF Core', 'LINQ', 'PostgreSQL', 'QRCoder', 'Bootstrap'],
    isPrivate: true,
    visualConcept: 'No-code form builder canvas with question type primitives (MCQ, Rating, Short Answer), live response chart analytics, and instant QR code generator.',
    contributions: [
      'Independently designed and built an ASP.NET MVC feedback platform featuring dynamic form creation supporting custom question types (MCQ, True/False, star ratings, and open-ended text).',
      'Implemented form activation/deactivation toggles, complete CRUD management, user authentication, role-based authorization, and isolated multi-tenant response storage.',
      'Integrated QRCoder library to dynamically generate feedback submission URLs and scannable QR code images directly from session IDs.',
      'Constructed comprehensive admin analytics dashboards, individual response review tools, filtered feedback summary aggregations, and CSV export capabilities.',
    ],
    architectureHighlights: [
      {
        title: 'Polymorphic Question Engine',
        description: 'Extensible database schema supporting dynamic question rendering and structured response serialization.',
      },
      {
        title: 'Dynamic QR Code Generation',
        description: 'In-memory QR code rendering eliminating disk storage overhead and allowing instant session feedback link distribution.',
      },
      {
        title: 'Multi-Tenant Response Storage',
        description: 'Tenant key indexing ensuring survey responses remain strictly isolated per client session.',
      },
    ],
    metrics: ['100% Independent Development', 'Dynamic Form & QR Generator', 'Multi-Tenant Data Isolation'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Delhi Technological University (DTU)',
    degree: 'Bachelor of Technology (B.Tech) in Electronics & Communication Engineering',
    period: '2020 – 2024',
    gpa: 'CGPA: 8.3 / 10',
    location: 'Delhi, India',
    achievements: [
      'General Secretary — Cognitive Minds Society, DTU',
      'Mentored 25+ junior students through structured weekly technical & coding sessions',
      'Focused coursework in Data Structures & Algorithms, Computer Networks, and DBMS',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: '500+ DSA Problems Solved',
    organization: 'GeeksforGeeks, LeetCode & Coding Platforms',
    description: 'Demonstrated strong algorithmic reasoning, data structures mastery, and problem-solving capability across competitive programming platforms.',
    metric: '500+ Solved',
    iconName: 'Code',
  },
  {
    title: 'General Secretary',
    organization: 'Cognitive Minds Society, DTU',
    description: 'Led technical society initiatives, organized tech workshops, hackathons, and community learning sessions.',
    metric: 'Leadership',
    iconName: 'Award',
  },
  {
    title: 'Technical Mentor',
    organization: 'DTU Student Community',
    description: 'Mentored 25+ students in data structures, C++ programming, and software engineering concepts through weekly hands-on guidance.',
    metric: '25+ Mentored',
    iconName: 'Users',
  },
];
