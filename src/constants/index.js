import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a dedicated Full Stack Developer with a talent for building robust and scalable web applications. With 3 years of practical experience, I have developed expertise in front-end technologies such as React.js, as well as back-end systems utilizing Node.js and MongoDB. My mission is to apply my skills to create innovative solutions that enhance business performance and deliver outstanding user experiences`;
export const ABOUT_TEXT = `I am a versatile and dedicated Full Stack Developer passionate about building efficient and user-centric web applications. Over the past 3 years, I have gained extensive experience with technologies like React.js, Node.js, Express.js and MongoDB. My journey in web development started with a curiosity about how things work, evolving into a fulfilling career where I embrace learning and tackling new challenges. I excel in collaborative settings and enjoy solving complex problems to deliver exceptional solutions. `;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Full Stack Developer",
    company: "Rayfide Infotech",
    description: `Contributed as part of a team to develop and maintain web applications using JavaScript, React.js, and Node.js. Assisted in implementing RESTful APIs and integrating them with MongoDB databases. Collaborated with stakeholders to understand project requirements and align on timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Software Engineer",
    company: "Capgemini",
    description: `Worked closely with backend developers to integrate frontend components with Node.js APIs and maintained RESTful APIs. Focused on implementing responsive designs and optimizing overall performance.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Node.js", "mongoDB", "mySQL"],
  },
];

export const PROJECTS = [
  
  {
    title: "Hotel Booking System",
    image: project1,
    description: 
      "A full-stack hotel booking system with features like user authentication, searching, filtering, and an admin panel. The application includes interactive and responsive user interfaces and efficient back-end API integrations.",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS", "Redux"],
  },
  {
    title: "CodeSocial - Social Media WebApp ",
    image: project2,
    description: 
      "A fully functional social media web application allowing users to create profiles, post content, comment, and interact securely and efficiently. It features secure authentication and responsive design.",
    technologies: ["Node.js", "Express.js","Mongoose" ,"Docker", "MVC Architecture"],

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind","Framer motion"],
  },
 
];

export const CONTACT = {
  address: "Gurugram, IN ",
  email: "itsanmolg@gmail.com",
  linkedin:"https://www.linkedin.com/in/imanmolgupta/",
  github:"https://github.com/imAnmolGupta",
};
