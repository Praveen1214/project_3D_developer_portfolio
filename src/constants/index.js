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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  android,
  java,
  bootstrap,
  kotline,
  evnify,
  sushiman ,
  primeroom,
  medicare,
  boxtime,
  github,
  insta,
  linkdin,
  portfolio,
  brickbreak,
  grp

  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Android",
    icon: android,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "Kotline",
    icon: kotline,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const content = [
  {
    name: "Project Help Group",
    description:
      "Project Help Group is a platform that connects with tech enthuastisc to help them with their projects. regularly i create contnet for them in sinhala language.",

      image: grp,
    source_code_link: "https://www.facebook.com/share/iT4KCBQYLjhxwhFU/?mibextid=K35XfP",
  },


]
  

const projects = [
  {
    name: "Evnify",
    description:
      "Introducing an all-inclusive event management system. Developed as a part of the IT Project for SLIIT's 2nd year 2nd semester,React for dynamic user interfaces, Node.js and Express for robust backend functionality, and MongoDB for data storage and Management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: evnify,
    source_code_link: "https://github.com/Scar1109/evnify",
  },
  {
    name: "Sushi-japan-resturent",
    description:
      "Sushi Japan Restaurant website, a personal project crafted with passion and dedication using HTML and CSS. Dive into the world of authentic Japanese cuisine with our meticulously designed online platform, offering a seamless user experience and captivating visuals.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sushiman,
    source_code_link: "https://github.com/Praveen1214/Sushi-japan-resturent",
  },
  {
    name: "MediCare",
    description:
      "web application, during the first-year, first-semester at SLIIT. Crafted with dedication and expertise, this platform embodies our commitment to learning and creativity, leveraging HTML, CSS, and PHP to deliver a seamless user experience and robust backend functionality.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },


    ],
    image: medicare,
    source_code_link: "https://github.com/Praveen1214/Health-Care",
  },


  {
    name: "Boxtime",
    description:
      "BoxTime, your ultimate companion for efficient homework management on the go. Developed using Kotlin for Android, this innovative software empowers students to stay organized, focused, and on top of their academic responsibilities like never before.they can self Evaluate thire progress",
    tags: [
      {
        name: "Kotline",
        color: "blue-text-gradient",
      },
      
    ],
    image: boxtime,
    source_code_link: "https://github.com/Praveen1214/MAD",
  },
  {
    name: "Primerooms",
    description:
      "The project is a room reservation system, allows customers to search for and book rooms, and sellers to manage their inventory and promote their rooms. The project includes  Register, Book Now, Add rooms, seller Register, Blog create by seller, feedback create and Service create by seller,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: primeroom,
    source_code_link: "https://github.com/Praveen1214/Primeroom-Rooms-Reservation-System",
  },
  {
    name: "Portfolio",
    description:
      "thisis my self-projects. Among them, you'll discover an exploration into the synergy of Vite.js and Three.js, where I've leveraged the power of Vite.js's lightning-fast build tooling and Three.js's dynamic 3D rendering capabilities to create immersive digital experiences.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "green-text-gradient",
      },
      {
        name: "taildwincss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },

  {
    name: "Brick Break",
    description:
      "I have developed a classic Brick Break game as part of my 2nd-year Mobile Application Development module project at SLIIT. Implemented in Kotlin, this game focuses on user interaction and gameplay mechanics. I have integrated smooth controls and captivating graphics to enhance the user experience.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
     
    ],
    image: brickbreak,
    source_code_link: "https://github.com/Praveen1214/Brick_Break",
  },
];

export { services, technologies, experiences, testimonials, projects,content };
