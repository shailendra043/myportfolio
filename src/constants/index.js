import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    coincent,
    codingblocks,
    hackathon,
    carrent,
    jobit,
    freelance,
    tripguide,
    threejs,
    salil,
    krishna,
    sarthak,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Creative Designer",
      icon: mobile,
    },
    {
      title: "Data analyst",
      icon: backend,
    },
    {
      title: "Freelancer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Campus Ambasador",
      company_name: "Coincent (ARIES, IIT Roorkee)",
      icon: coincent,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Dec 2022",
      points: [
        "Promoting Coincent's initiatives and programs within the campus community.",
        "Organizing and hosting events, workshops, and information sessions to increase awareness and engagement.",
        "Serving as a liaison between Coincent and the student body, providing feedback and insights to improve programs.",
        "Recruiting and onboarding new participants for Coincent's activities and projects.",
      ],
    },
    {
      title: "Website Developer & Sales And Marketing",
      company_name: "CodingBlocks@LPU",
      icon: codingblocks,
      iconBg: "#383E56",
      date: "November 2022 - May 2023",
      points: [
        "Designing, developing, and maintaining websites using HTML, CSS, JavaScript, and related technologies.",
        "Collaborating with sales and marketing teams to align web development efforts with business goals and strategies.",
        "Implementing user-friendly interfaces and optimizing websites for performance and search engine visibility.",
        "Conducting market research and analysis to identify opportunities for website improvements and enhancements.",
      ],
    },
    {
      title: "Smart India Hackathon",
      company_name: "Government of India",
      icon: hackathon,
      iconBg: "#E6DEDD",
      date: "Oct 2023",
      points: [
        "Creating visually appealing and intuitive user interfaces for web applications and websites.",
        "Developing frontend components and features using React.js and other frontend frameworks.",
        "Collaborating closely with clients to understand their requirements and translate them into functional designs.",
        "Iteratively refining designs based on user feedback and usability testing to enhance user experience.",
      ],
    },

    {
      title: "Web Developer and UI/UX designer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Rehan's technical skills, collaboration, and creativity make him a strong candidate for any technical position.",
      name: "Salil Batra",
      designation: "Assistant Professor",
      company: "Lovely Professional University",
      image: salil,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rehan does.",
      name: "Krishna Kushwaha",
      designation: "Founder",
      company: "Web Jadugar",
      image: krishna,
    },
    {
      testimonial:
        "Rehan is a motivated and dedicated student with a strong academic record and a passion for learning.",
      name: "Sarthak Mehta",
      designation: "Founder",
      company: "Ace Classes",
      image: sarthak,
    },
  ];
  
  const projects = [
    {
      name: "TedxClarendonStreet",
      description:
        "TedxClarendonStreet: Igniting ideas and inspiration. Join our dynamic platform for thought-provoking talks, fostering innovation, and sparking meaningful conversations for positive change.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Locomotive",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/RehanMittal/clarendonstreet.git",
    },
    {
      name: "Welcome Solar System",
      description:
        "Welcome Solar System: Your premier destination for solar panel installations. Expert services and guidance to harness sustainable solar energy for a brighter tomorrow.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/RehanMittal/welcome-solar-system",
    },
    {
      name: "Movie Land",
      description:
        "MovieLand: Your gateway to cinematic exploration. Seamlessly browse, search, and discover films with our API-driven platform, delivering a rich movie experience at your fingertips.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/RehanMittal/basic-react-api-netflix",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };