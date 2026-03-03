const logotext = "Bala";
const meta = {
    title: "Balamurugan",
    description: "I’m Bala Murugan, an Information Technology student and aspiring AI & Full-Stack Developer based in Chennai.",
};

const introdata = {
    title: "I’m Balamurugan",
    animated: {
        first: "I solve real-world problems",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I’m Bala Murugan, an Information Technology student and aspiring AI & Full-Stack Developer based in Chennai.",
    // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
    your_img_url: "me.JPG",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I’m an Information Technology student with a strong interest in AI and Full-Stack Development. I enjoy solving real-world problems through code and building scalable, user-focused applications. I’m passionate about continuous learning, innovation, and contributing to impactful tech solutions.",
};
const worktimeline = [{
    jobtitle: "Full-stack developer intern",
    where: "Ethical Intelligent Technologies",
    date: "2025",
},
    // {
    //     jobtitle: "Designer of week",
    //     where: "Jamalya",
    //     date: "2019",
    // },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "NodeJS, ExpressJS",
    value: 90,
},
{
    name: "AI",
    value: 50,
},
{
    name: "MongoDB, Postgresql",
    value: 80,
},
{
    name: "Git, Github",
    value: 85,
},
{
    name: "Docker",
    value: 50,
},
];

const edu = [{
    title: "St. Joseph's Institute of Technology, Chennai, OMR.",
    description: "Currently pursuing a Bachelor’s degree in Information Technology with a CGPA of 8.52.",
},
{
    title: "Kaligi Ranganathan Montford Matriculation Higher Secondary School",
    description: "Completed 12th grade with 78% overall marks.",
},
    // {
    //     title: "Wordpress Design",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
];

const dataportfolio = [{
    img: "visa.png",
    description: "DQS AI - Data Qualtiy Scoring for Transaction Data",
    link: "https://github.com/just-bm/visa-hackathon",
},
{
    img: "shell.png",
    description: "Built my own shell.",
    link: "https://github.com/just-bm/shell",
},
{
    img: "https://github.com/just-bm/streamer/raw/main/frontend/public/screenshot-for-readme.png",
    description: "Video and Audio calling application.",
    link: "https://github.com/just-bm/streamer",
},
{
    img: "yt.png",
    description: "YouTube Playlist to MP3 Downloader",
    link: "https://github.com/just-bm/youtube-playlist-to-mp3",
},
{
    img: "resume.png",
    description: "ATS Scoring for resumes.",
    link: "https://ats-lime.vercel.app/",
},
{
    img: "wikipedia.png",
    description: "Semantic Search on Wikipedia dataset",
    link: "https://wikipedia-app-omega.vercel.app/",
},

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "tbalancemurugan@gmail.com",
    YOUR_FONE: "+91 7395936320",
    description: "Have a project idea, collaboration opportunity, or just want to connect? Feel free to reach out. I’m always open to discussing new ideas, innovative solutions, and exciting tech opportunities.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_USER_ID,
    YOUR_AUTO_REPLY_TEMPLATE_ID: process.env.REACT_APP_AUTO_REPLY_TEMPLATE_ID,
};

const socialprofils = {
    github: "https://github.com/just-bm",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/just0bm0or0balamurugan/",
    twitter: "https://twitter.com",
    resume: "https://drive.google.com/file/d/19d0OT4_xe_e5JJFXwZLmWWzEtq8Pb5C0/view?usp=sharing",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    edu,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};