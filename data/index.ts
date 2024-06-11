export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "MyStudents", link: "#mystudents" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - Desphilman",
    desc: "Collaborated in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    width: 95,
    height: 87,
  },
  {
    id: 2,
    title: "Full Stack Developer - IntelgTech",
    desc: "Designed and developed 10+ front-end and back-end web applications utilizing ReactJS and Node.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    width: 98,
    height: 97,
  },
  {
    id: 3,
    title: "Freelance Web Dev Projects",
    desc: "Led the dev of a web apps for International clients, from initial concept to deployment",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    width: 103,
    height: 98,
  },
  {
    id: 4,
    title: "Lead Web Developer - ACECR",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    width: 123,
    height: 87,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sanaz-shahraeini",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanaz-shahraeini-80019026",
  },
];
export const services = [
  {
    title: "Frontend Developer",
    icon: "/assets/web.png",
  },
  {
    title: "Python Programmer",
    icon: "/assets/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "/assets/backend.png",
  },
  {
    title: "Web Dev Lecturer",
    icon: "/assets/creator.png",
  },
];
