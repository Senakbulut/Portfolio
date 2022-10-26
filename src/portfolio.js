/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Sena AKBULUT",
  logo_name: "SenaAkbulut",
  nickname: "Frontend Developer",
  subTitle:
    "I develop projects related to front end using up-to-date technologies and I design and code.",
  resumeLink:
    "https://drive.google.com/file/d/1wDXpz03dO67V-1oI8bAtBUfZ1EjS-wjE/view?usp=sharing",
  portfolio_repository: "https://github.com/Senakbulut/SenaPortfolio.github.io",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Senakbulut",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/senaakbulut/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://medium.com/@senaakbulut",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:senaakbulut51@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Sena_Akbulut_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/senakbulut_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development ",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS, React Js and Vue Js",
        "⚡ Creating modern, creative and fluent website designs",
        "⚡ Developing user interfaces with React Js, a Javascript library and Vue Js a Javascript framework",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            backgroundColor: "transparent",
            color: "#CB3837",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            backgroundColor: "transparent",
            color: "#1e55e3",
          },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#f2da3f",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#61DAFB",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Sass/Scss",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#f87dff",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          skill: "Next JS",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "green",
          },
        },
        {
          skillName: "NuxtJS",
          skill: "Nuxt JS",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "RESTAPI",
          skill: "REST API",
          style: {
            color: "green",
          },
        },
        {
          skillName: "CONTEXTAPI",
          skill: "Context API",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Axios",
          fontAwesomeClassname: "simple-icons:axios",
          style: {
            color: "#8c5fcf",
          },
        },
        {
          skillName: "Webflow",
          fontAwesomeClassname: "simple-icons:webflow",
          style: {
            color: "#1e55e3",
          },
        },
        {
          skillName: "Elementor",
          fontAwesomeClassname: "simple-icons:elementor",
          style: {
            color: "#8c5fcf",
          },
        },
        {
          skillName: "MUI",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Software and Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Control of projects with git control system and tools",
        "⚡ Making various queries, relationships and arrangements on DB",
      ],
      softwareSkills: [
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "Azure Devops",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing user interfaces by reading pixel perfect designs for web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },

        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#2EC866",
      },
      profileLink:
        "https://coursera.org/share/87a2a7766c1a964226b0b6520bf3b069r",
    },
    {
      siteName: "Cisco",
      iconifyClassname: "simple-icons:cisco",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.cisco.com",
    },
    {
      siteName: "Django",
      iconifyClassname: "simple-icons:django",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.djangoproject.com/",
    },
    {
      siteName: "LKD",
      iconifyClassname: "simple-icons:linux",
      style: {
        color: "#323754",
      },
      profileLink: "https://kamp.linux.org.tr/2020/kis/",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#8934eb",
      },
      profileLink: "https://www.udemy.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Karadeniz Technical University",
      subtitle: "Computer engineering",
      logo_path: "logo.png",
      alt_name: "KTU",
      duration: "08.2016 - 07.2021",
      descriptions: [
        "⚡ I graduated from Karadeniz Technical University Computer Engineering.",
      ],
      website_link: "https://www.ktu.edu.tr",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/CWY4A6UXS5WD",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Packet Tracer",
      subtitle: "",
      logo_path: "cisco1.png",
      certificate_link:
        "https://www.netacad.com/portal/profile/1013747439/certi",
      alt_name: "",
      color_code: "#0C9D5899",
    },
    {
      title: "GNU/Linux System Management",
      subtitle: "",
      logo_path: "kamp.png",
      certificate_link: "https://kamp.linux.org.tr/2020/kis/",
      alt_name: "",
      color_code: "#1F70C199",
    },
    {
      title: "PostgreSQL",
      subtitle: "",
      logo_path: "kamp.png",
      certificate_link: "https://kamp.linux.org.tr/2020/kis/",
      alt_name: "",
      color_code: "#0C9D5899",
    },
    {
      title: "Django",
      subtitle: "",
      logo_path: "django.png",
      certificate_link: "https://djangogirls.org/",
      alt_name: "IBM",
      color_code: "#f7941e",
    },
    {
      title: "Web Tasarım HTML 5 CSS 3 BOOTSTRAP 4 JAVASCRIPT",
      subtitle: "",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/course/web-tasarim-html-css-bootstrap-javascript-jquery/?src=sac&kw=html+css++javascr",
      alt_name: "",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Internship",
  description:
    "Professional work experience: I have been working at Radity for more than 1 year. As of the time I started in this company, I took part in 3 projects and I was in some projects for a short time for support purposes. I have developed more projects with React Js and Typescript and I am still developing. There is a project that I am developing with Vue Js. University period: I did an internship in computer networks in the summer of 3rd year. During this internship, I learned about networks, which is an important part of the computer world, and made various applications. In the 4th grade, I did an internship on my field, Frontend. I worked with Vue Js framework. I worked as a volunteer communication coordinator at KTU Artificial Intelligence Club.",
  header_image_path: "work.jpg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Frontend Developer",
          company: "Radity",
          company_url: "https://radity.com/en/",
          logo_path: "https://mir-s3-cdn-cf.behance.net/user/276/f4931d346681895.5d7b895616542.png",
          duration: "September 2021 - PRESENT",
          location: "Remote",
          description:
            "I have been working at Radity for more than 1 year. As of the time I started in this company, I took part in 3 projects and I was in some projects for a short time for support purposes. I have developed more projects with React Js and Typescript and I am still developing. There is a project that I am developing with Vue Js.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Fixed Networks Customer Engineering",
          company: "Nokia",
          company_url: "https://www.nokia.com/tr_tr/",
          logo_path: "nokia.jpg",
          duration: "August 2020 - September 2020",
          location: "İstanbul",
          description:
            "I have made various projects and presentations in the field of networking on Cisco packet tracer, Docker and Wireshark.",
          color: "#ee3c26",
        },
        {
          title: "Frontend Development",
          company: "Foreks Digital Solutions",
          company_url: "https://www.foreks.com/",
          logo_path: "",
          duration: "February 2021 - March 2021",
          location: "İstanbul",
          description:
            "I made a front end project with Vue Js and had the opportunity to get to know the CSS grid structure more closely.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Communication Coordinator",
          company: "KTU Artificial Intelligence Club",
          company_url: "https://www.instagram.com/ktuyapayzeka/",
          logo_path: "ai.png",
          duration: "September 2019 - September 2020",
          location: "Trabzon",
          description: "",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I design and code a website, work with animations. Also, I'm doing new projects with React Js library and Vue Js framework. I am working with javascript algorithms.",
  avatar_image_path: "calıs.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "senapp.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Frontend Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@senaakbulut",
    avatar_image_path: "blog.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bahçelievler/Istanbul",
    avatar_image_path: "mail.jpg",
    location_map_link:
      "https://www.google.com/maps/place/Karadeniz+Technical+University/@40.9976822,39.7690297,17z/data=!3m1!4b1!4m5!3m4!1s0x40643b54b3b2061f:0x7abdf48cd6c81000!8m2!3d40.9976782!4d39.7712184",
  },
  phoneSection: {
    title: "Mail",
    subtitle: "senaakbulut51@gmail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
