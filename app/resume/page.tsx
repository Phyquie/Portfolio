

'use client'

const resumeData = {
  name: 'Ayush Bisht',
  email: 'ayushbisht.me@gmail.com',
  phone: '+91 8057152390',
  linkedin: 'linkedin.com/in/ayushbisht8057',
  github: 'github.com/phyquie',
  summary: `Results-driven Full Stack Developer specializing in the MERN stack and Next.js to build high-performance, user-centric web applications. Proven ability to architect and deploy scalable solutions by leveraging modern frameworks, RESTful APIs, and secure authentication protocols. An agile collaborator dedicated to solving complex problems and delivering robust software from concept to deployment.`,
  education: [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Roorkee Institute of Technology',
      location: 'Roorkee, Uttarakhand',
      duration: '2022 – 2026',
    },
    {
      degree: 'Senior Secondary Education (CBSE)',
      school: `St. Joseph’s Convent School`,
      location: 'Nainital, Uttarakhand',
      duration: '2021–2022',
    },
  ],
  experience: [
    {
      title: 'Front End Developer',
      company: 'Awaatech Pvt Limited',
      location: 'Remote',
      duration: 'Mar 2025 – Jun 2025',
      bullets: [
        'Engineered responsive UI components with Next.js & Tailwind CSS, boosting user engagement.',
        'Integrated a secure Stripe API payment gateway, managing checkout sessions, webhooks, and customer data.',
        'Executed technical SEO using SSR and semantic HTML, increasing organic traffic in two months.',
        'Integrated RESTful APIs with efficient client-side state management using TanStack Query.'
      ]
    },
    {
      title: 'Full Stack Trainee',
      company: 'Exprism',
      location: 'Remote',
      duration: 'Jan 2024 – Jul 2024',
      bullets: [
        'Built end-to-end MERN stack applications with JWT-based authentication and role-based access control (RBAC).',
        'Designed and implemented scalable MongoDB schemas with Mongoose, optimizing query performance.',
        'Worked in an Agile/Scrum team, using Git for version control to meet sprint goals and deliver features on schedule.',
        'Deployed full-stack solutions to cloud platforms like Vercel and Render, configuring CI/CD pipelines.'
      ]
    }
  ],
  projects: [
    {
      name: 'Rozgaar',
      stack: 'Next.js, PostgreSQL, Prisma, Clerk Auth, Redux',
      duration: 'July 2025 – Aug 2025',
      bullets: [
        'Developed a fully responsive job portal platform supporting job creation, deletion, and detailed listings.',
        'Implemented authentication and authorization with Clerk for secure, scalable user management.',
        'Integrated Prisma ORM with PostgreSQL for efficient database operations and schema management.',
        'Built resume submission workflows with acceptance/rejection logic to streamline hiring processes.',
        'Utilized Redux and createSlice API to optimize state management, ensuring clean, modular, and maintainable code.'
      ]
    },
    {
      name: 'SportWave',
      stack: 'Next.js, MongoDB, Express, TanStack Query, Stripe integration',
      duration: 'Feb 2025 – March 2025',
      bullets: [
        'Architected a full-stack platform for sports event management, featuring user profiles, team creation, and scheduling.',
        'Implemented a dual authentication system using Google OAuth and JWTs for secure and flexible user access.',
        'Integrated Stripe Connect to manage multi-party payments for event registration and team fees.'
      ]
    },
    {
      name: 'SocialHive',
      stack: 'React.js, Node.js, MongoDB, Express, Daisy-UI',
      duration: 'Aug 2024 – Oct 2024',
      bullets: [
        'Built a full-stack social media app with a Node.js/Express RESTful API for posts, comments, and follows.',
        'Engineered a real-time chat feature using WebSockets for instantaneous communication.',
        'Designed scalable MongoDB schemas for efficient storage and retrieval of user-generated content.'
      ]
    }
  ],
  skills: [
    'Frontend: JavaScript (ES6+), React.js, Next.js, HTML5, CSS3, Tailwind CSS, Shadcn',
    'Backend: Node.js, Express.js, REST APIs, GraphQL',
    'Databases: MongoDB, PostgreSQL',
    'Languages: C++, JavaScript',
    'Tools: Git, Github, Vercel, Render, Prisma'
  ],
  certifications: [
    { name: 'React (Basic)', org: 'HackerRank', link: '#' },
    { name: 'JavaScript (Intermediate)', org: 'HackerRank', link: '#' }
  ]
};



import { useRef } from 'react';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

const Sidebar = ({ onNavigate }: { onNavigate: (id: string) => void }) => (
  <nav className="bg-black min-h-screen w-full max-w-[220px] md:flex flex-col gap-2 py-8 px-4 border-r border-gray-800 hidden ">
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => onNavigate(section.id)}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-200 hover:bg-[#232326] transition-all text-left bg-gray-900 border border-gray-700"
      >
        {/* Icon placeholder */}
        <span className="inline-block w-5 text-center">
          {section.id === 'education' && <span>📚</span>}
          {section.id === 'experience' && <span>💼</span>}
          {section.id === 'skills' && <span>💡</span>}
        </span>
        {section.label}
      </button>
    ))}
  </nav>
);

const ResumePage = () => {
  // Refs for scrolling
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (id: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      education: educationRef,
      experience: experienceRef,
      skills: skillsRef,
      leadership: leadershipRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen w-full bg-black text-white flex">
      <Sidebar onNavigate={handleNavigate} />
      <div className="flex-1 px-4 md:px-12 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{resumeData.name}</h1>
            <div className="flex flex-wrap gap-4 text-base md:text-lg text-gray-300">
              <a href={`mailto:${resumeData.email}`} className="hover:underline">{resumeData.email}</a>
              <span>|</span>
              <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <span>|</span>
              <a href={`https://${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              <span>|</span>
              <span>{resumeData.phone}</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div ref={educationRef} id="education" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="bg-[#18191c] rounded-2xl p-6 border border-gray-700 mb-4">
            <div className="text-xl font-semibold mb-1">{resumeData.education[0].degree}</div>
            <div className="font-bold text-lg mb-2">{resumeData.education[0].school.toUpperCase()}</div>
            <div className="flex flex-wrap gap-3 mb-2">
              {/* <span className="border border-gray-400 rounded-lg px-3 py-1 text-sm">GPA: 4.00/4.00</span> */}
              <span className="border border-gray-400 rounded-lg px-3 py-1 text-sm">Expected Graduation: 06/26</span>
            </div>
            <ul className="list-disc ml-6 text-gray-300">
              <li>Relevant coursework in DSA, AI/ML, Web Dev, and Systems Programming</li>
              
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div ref={experienceRef} id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Relevant Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Example Experience Card 1 */}
            <div className="bg-[#18191c] rounded-2xl p-6 border border-gray-700 relative">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-2xl font-bold">Front End Developer</div>
                  <div className="font-semibold text-gray-300">Awwaltech Pvt Limited </div>
                </div>
                <span className="bg-white text-black px-3 py-1 rounded-lg text-xs font-bold">Completed</span>
              </div>
              <div className="text-gray-400 mb-2">Mar 2025 – Jun 2025</div>
              <ul className="list-disc ml-6 text-gray-200">
                <li> Engineered responsive UI components with Next.js & Tailwind CSS, boosting user engagement </li>
                <li>Integrated a secure Stripe API payment gateway, managing checkout sessions, webhooks, and customer data.</li>
                <li>Executed technical SEO using SSR and semantic HTML, increasing organic traffic in two months.</li>
                <li>Integrated RESTful APIs with efficient client-side state management using TanStack Query.</li>
              </ul>
            </div>
            {/* Example Experience Card 2 */}
            <div className="bg-[#18191c] rounded-2xl p-6 border border-gray-700 relative">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-2xl font-bold">Full Stack Trainee</div>
                  <div className="font-semibold text-gray-300">Explorin </div>
                </div>
                <span className="bg-white text-black px-3 py-1 rounded-lg text-xs font-bold">Completed</span>
              </div>
              <div className="text-gray-400 mb-2">Jun 2024 – Jul 2024</div>
              <ul className="list-disc ml-6 text-gray-200">
                <li>Built end-to-end MERN stack applications with JWT-based authentication and role-based access control (RBAC)</li>
                <li>Designed and implemented scalable MongoDB schemas with Mongoose, optimizing query performance.</li>
                <li> Worked in an Agile/Scrum team, using Git for version control to meet sprint goals and deliver features on schedule.</li>
                <li>Deployed full-stack solutions to cloud platforms like Vercel and Render, configuring CI/CD pipelines.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.skills.map((skill, idx) => (
              <li key={idx} className="bg-[#18191c] rounded-xl px-4 py-3 border border-gray-700 text-gray-200">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;