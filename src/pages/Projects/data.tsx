import { arrayToMap } from "../../utils/functions";
import { Project } from "./interfaces";

export const projects: Project[] = [
  {
    id: 3,
    type: "image",
    identifier: "RgR",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/1.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/1.png",
      images: [
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/1.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/2.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/3.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/4.png",
      ],
      mediaViewType: "V",
    },
    name: "Dr.Pack",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/logo.png",
    tags: [2, 3, 4, 5, 6, 7, 13, 18, 25, 24, 39],
    description: "Desktop app - Web platform",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/1.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/1.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/2.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/3.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/3.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/4.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/4.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/5.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/5.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/6.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/6.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/7.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/7.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/8.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/8.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/2x/9.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dr.Pack/3x/9.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://check.medxsol.com",
        clickableText: "Visit the platform",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          `Dr.Pack, part of the Medxsol web platform, is an advanced web application designed to streamline and 
          automate daily tasks for pharmacists, assistants, and administrators. It simplifies medication 
          scheduling, patient billing, reporting, and healthcare coordination.`,
        tag: 1,
      },
      // {
      //   title: "",
      //   boldSentence: "",
      //   description:
      //     "- As someone who joined a company where a project had been stalled for five months without progress, it was challenging to release the first satisfactory version to the client just two months after starting my position, which made him accept the total seven months, and led to me receiving a financial bonus from the CEO as recognition of my achievement.",
      //   tag: 1,
      // },
      // {
      //   title: "",
      //   boldSentence: "",
      //   description:
      //     "- Our team has the lowest costs, fewest members, and handles the most challenging and profitable project compared to other teams in the company.",
      //   tag: 1,
      // },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "React.js, TypeScript, MaterialUI, react-query, Vite, Axios, Cloud Messaging.",
        tag: 1,
      },
      // {
      //   title: "# My Achievement:",
      //   boldSentence: "My Achievement",
      //   description:
      //     "- Led a small team and managed task organization, improving branching and automating workflow sequencing between designers and backend/frontend developers. Reduced wait times by about 40% through the implementation of various specialized CI/CD technologies.",
      //   tag: 1,
      // },
      // {
      //   title: "",
      //   boldSentence: "",
      //   description:
      //     "- Refactored page navigation and routing mechanism to reduce the depth of the browsing history stack, which helped reduce the average down to 2 actions to reach the target despite the size of code base and the speed required to constantly deliver new features to the client.",
      //   tag: 1,
      // },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Visit",
        actionType: "LINK",
        link: "https://check.medxsol.com",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 25,
    type: "image",
    identifier: "uzU",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/cover.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/1.png",
      images: [
        "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/1.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/2.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/3.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/4.png",
      ],
      mediaViewType: "V",
    },
    name: "Pharmacy RX",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/logo.PNG",
    tags: [2, 3, 4, 5, 6, 7, 13, 18, 25, 24, 39],
    description: "Web Dashboard",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/11.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/11.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      // {
      //   mediaViewer: {
      //     image:
      //       "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/1.PNG",
      //     mediaViewType: "V",
      //   },
      //   src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/1.PNG",
      //   type: "image",
      //   highlightWord: "",
      //   tag: 2,
      // },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/2.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      // {
      //   mediaViewer: {
      //     image:
      //       "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/3.PNG",
      //     mediaViewType: "V",
      //   },
      //   src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/3.PNG",
      //   type: "image",
      //   highlightWord: "",
      //   tag: 2,
      // },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/4.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/4.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/5.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/5.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/6.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/6.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/7.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/7.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/8.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/8.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/9.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/9.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/10.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/10.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/12.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/12.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      // {
      //   mediaViewer: {
      //     image:
      //       "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/13.png",
      //     mediaViewType: "V",
      //   },
      //   src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/13.png",
      //   type: "image",
      //   highlightWord: "",
      //   tag: 2,
      // },
      // {
      //   mediaViewer: {
      //     image:
      //       "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/14.PNG",
      //     mediaViewType: "V",
      //   },
      //   src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/14.PNG",
      //   type: "image",
      //   highlightWord: "",
      //   tag: 2,
      // },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/15.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/15.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      // {
      //   mediaViewer: {
      //     image:
      //       "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/2x/16.png",
      //     mediaViewType: "V",
      //   },
      //   src: "https://odayali2249.github.io/portfolio-resources/resources/web/Pharmacy RX/3x/16.png",
      //   type: "image",
      //   highlightWord: "",
      //   tag: 2,
      // }
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://chilliwack-ph.medxsol.com",
        clickableText: "Visit the platform",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          `Pharmacy RX, part of the Medxsol web platform, is a pharmacy management web app designed for registered 
          pharmacy administrators to efficiently handle patient prescription requests and orders. Patients using 
          the mobile app can upload prescription images, allowing admins to set medication reminders for patient, 
          review and generate medical receipts in response.`,
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "React.js, TypeScript, MaterialUI, react-query, Vite, Axios, Cloud Messaging.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Visit",
        actionType: "LINK",
        link: "https://chilliwack-ph.medxsol.com/",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 26,
    type: "image",
    identifier: "kzi",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/cover.PNG",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/1.png",
      images: [
        "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/1.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/2.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/3.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/4.png",
      ],
      mediaViewType: "V",
    },
    name: "Alef - Ignite Shield",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/logo.svg",
    tags: [2, 3, 4, 5, 6, 7, 13, 18, 25, 24, 39],
    description: "Web Dashboard",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/1.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/1.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/2.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/2.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/3.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/3.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/4.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/4.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/5.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/5.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/6.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/6.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/7.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/7.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/8.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/8.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/9.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/9.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/10.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/10.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/11.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/11.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/12.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/12.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/13.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/13.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/14.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/14.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/15.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/15.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/2x/16.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Ignite Shield/3x/16.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://stage.alefiot.xyz/",
        clickableText: "Visit the platform",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          `Interactive monitoring dashboard for reviewing real-time readings and statistics from IoT devices 
          installed across various assets and facilities.`,
        //   Each device is equipped with multiple configurable sensors of different types, providing detailed insights 
        // into operational performance, environmental conditions, and system health. The dashboard enables users to 
        // track, analyze, and visualize sensor data efficiently, enhancing decision-making and proactive maintenance. 
        // Customizable widgets allow users to filter data, set thresholds, and configure alerts, ensuring seamless 
        // monitoring tailored to specific needs.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "React.js, TypeScript, MaterialUI, react-query, Vite, Axios, Cloud Messaging.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Visit",
        actionType: "LINK",
        link: "https://stage.alefiot.xyz/",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 27,
    type: "image",
    identifier: "aSe",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/1.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/1.png",
      images: [
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/1.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/2.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/3.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/4.png",
      ],
      mediaViewType: "V",
    },
    name: "Dashboard Builder",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/logo.svg",
    tags: [2, 3, 4, 5, 6, 7, 13, 18, 25, 24, 39],
    description: "Web Dashboard",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/cover.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/1.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/2.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/3.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/3.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/4.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/4.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/5.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/5.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/6.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/6.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/2x/7.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/Dashboard Builder/3x/7.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://drive.google.com/drive/folders/1EaUWpQuqTVL4YYsIsd-H6hpzJJO2g-cA",
        clickableText: "DEMO",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "Dynamic dashboard builder that enables users to drag, drop, resize, and configure various widgets (charts, maps, cards) to create personalized dashboards. Built for IoT systems, it allows real-time monitoring of sensor readings, device statistics, and locations. Each widget is fully customizable through an intuitive configuration form, allowing users to modify data sources and adjust appearance for tailored insights.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "React.js, TypeScript, MaterialUI, react-query, Vite, Axios.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/demo.svg",
        label: "DEMO",
        actionType: "LINK",
        link: "https://drive.google.com/drive/folders/1EaUWpQuqTVL4YYsIsd-H6hpzJJO2g-cA",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 4,
    type: "image",
    identifier: "Vf8",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/cover.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/2.jpg",
      mediaViewType: "V",
    },
    name: "Bus Frames",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/bf/images/logo2.png",
    tags: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 14, 26, 24],
    description: "Full Stack System",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/11.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/11.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/12.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/12.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/13.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/13.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://odayali2249.github.io/business_frames/home",
        clickableText: "Visit the platform",
      },
      {
        text: "",
        url: "https://drive.google.com/drive/folders/1-iswUbvna8JNccxaxZA40a3Yb2TDAudE",
        clickableText: "DEMO",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "Implemented a personal, complex, feature-rich full stack project from scratch, the problem that this solution solves is to perform organized way to manage big content with +10,000,000 items within a company/institution, the content items could be services/products of that company, the platform offers a subsystem representing a recruitment platform so the company owner and his partner can hire/fire/promote employees, and most importantly, assign them permissions by creating permission groups of users, content (service/products) and operations (add/edit/delete).within the context mentioned, I talked about only 30% of the project.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "Back end: node.js, nest.js, dependency injection, Sequelize ORM, postgresql, TypeScript, JWT, Cookies ",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description: "Front end: react.js, javascript, redux, axios, Sass.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "Developed a fully functional, complex, well-structured and UI responsive full-stack project.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Excuted a modern methods for debugging and project maintenance, which increased the reliability in general, and the development speed of the system by 30%.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Individually, Analyzed and designed readable diagrams using online tools such as Cacoo to ensure that a system is built with a strong foundation.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Meticulously tracked the request transmission rate to minimize cloud connectivity, thereby enhancing speed and optimizing user experience.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Closely monitored rendering counts, ensuring minimal unnecessary UI rendering using core react.js techniques, thereby enhancing performance and elevating user experience which led to 20% less page loading time.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/demo.svg",
        label: "DEMO",
        actionType: "LINK",
        link: "https://drive.google.com/drive/folders/1-iswUbvna8JNccxaxZA40a3Yb2TDAudE",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Visit",
        actionType: "LINK",
        link: "https://odayali2249.github.io/business_frames/home",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  // {
  //   id: 5,
  //   type: "image",
  //   mediaUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/cover.jpg",
  //   mediaViewer: {
  //     image:
  //       "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/1.jpg",
  //     mediaViewType: "V",
  //   },
  //   name: "Ordert Platform",
  //   logoUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/ic_notification.png",
  //   tags: [2, 3, 25],
  //   description: "Web Platform",
  //   gallery: [
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/1.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/1.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/2.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/2.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/3.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/3.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/4.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/4.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/5.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/5.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/6.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/6.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/7.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/7.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/8.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/8.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/9.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/9.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/10.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/10.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/11.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/11.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/12.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/12.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/13.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/13.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //   ],
  //   linksTitle: "Links:",
  //   links: [
  //     {
  //       text: "",
  //       url: "https://ordert.com/welcome",
  //       clickableText: "Visit the platform",
  //     },
  //   ],
  //   aboutTitle: "About the Project:",
  //   aboutItems: [
  //     {
  //       title: "# Description:",
  //       boldSentence: "Description",
  //       description:
  //         "A web dashboard for restaurant management, payments, and various roles management, catering to end-users, waiters, owners, admins, and kitchen staff.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description:
  //         "It also a platform provides an abundance of interfaces to facilitate user interaction and the creation of integrated orders, with the ability to know the order status in real time through notifications.",
  //       tag: 1,
  //     },
  //     {
  //       title: "# My Achievement:",
  //       boldSentence: "My Achievement",
  //       description:
  //         "- Spearheaded a significant refactor of the Platform, optimizing and streamlining the codebase while integrating newer technologies. This initiative led to a remarkable 60% reduction in loading times on browsers.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description:
  //         "- Considered methods for decreasing rendering cost on browser rendering engine by using debouncing, memoization and lazy loading techniques which shortens the necessary waiting time and increases the level of customer access by 36%.",
  //       tag: 1,
  //     },
  //   ],
  //   options: [
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
  //       label: "Visit",
  //       actionType: "LINK",
  //       link: "https://ordert.com/welcome",
  //     },
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
  //       label: "Details",
  //       actionType: "DEFAULT",
  //     },
  //   ],
  // },
  {
    id: 24,
    type: "image",
    identifier: "E_y",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/8.PNG",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/1.png",
      images: [
        "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/1.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/2.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/3.png",
        "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/4.png",
      ],
      mediaViewType: "V",
    },
    name: "X.eMAR",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/logo.PNG",
    tags: [2, 3, 4, 5, 6, 7, 13, 18, 25, 24, 39],
    description: "Desktop app - Web platform",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/1.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/1.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/2.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/3.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/3.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/4.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/4.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/5.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/5.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/6.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/6.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/7.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/7.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/8.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/8.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/9.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/9.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/2x/10.PNG",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/X.eMAR/3x/10.PNG",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://check.medxsol.com",
        clickableText: "Visit the platform",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          `X.emar, part of the Medxsol web platform, is a dashboard for admins to efficiently schedule and manage 
          patient visits by nurses. It organizes patient visits into routes, covering essential tasks such as 
          medication administration, vital measurements, and other healthcare activities.`,
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "React.js, TypeScript, MaterialUI, react-query, Vite, Axios, Cloud Messaging.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Visit",
        actionType: "LINK",
        link: "https://check.medxsol.com",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 6,
    type: "image",
    identifier: "Mja",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/cover.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/4.jpg",
      mediaViewType: "V",
    },
    name: "MedX Website",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/medX/Logo.svg",
    tags: [2, 3, 15, 25, 26],
    description: "Website",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/11.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/11.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://medxsol.com/",
        clickableText: "Visit the platform",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description: "Promotional website.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "Stack",
        description: "react.js, TypeScript, next.js, TailwindCss.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "- Designed and coded complex components using tailwindCss and animation tools, imporving the receiving, acceptance and accessibilty of the visitors.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Implemented SEO best practices, escalating website traffic by 50%.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Visit",
        actionType: "LINK",
        link: "https://medxsol.com/",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 23,
    type: "image",
    identifier: "wWa",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/1.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/1.jpg",
      mediaViewType: "V",
    },
    name: "Poul-X",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/logo.jpg",
    tags: [2, 4, 24, 27],
    description: "Intelligence algorithm - Website",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/2x/11.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/web/poulX/3x/11.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/demo.svg",
        label: "DEMO",
        actionType: "LINK",
        link: "https://drive.google.com/drive/folders/1Bzj9Kgjjt8x2Uw1wYuesTJZrGNm3SIlV",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
    links: [
      {
        text: "",
        url: "https://drive.google.com/drive/folders/1Bzj9Kgjjt8x2Uw1wYuesTJZrGNm3SIlV",
        clickableText: "DEMO"
      },
    ]
  },
  // {
  //   id: 7,
  //   type: "image",
  //   mediaUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/cover.jpg",
  //   mediaViewer: {
  //     image:
  //       "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/3.jpg",
  //     mediaViewType: "V",
  //   },
  //   name: "Disrupt-X",
  //   logoUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/logo.png",
  //   tags: [2, 3],
  //   description: "Web Platform",
  //   gallery: [
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/1.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/1.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/2.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/2.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/3.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/3.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/4.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/4.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/5.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/5.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/6.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/6.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/7.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/7.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/8.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/8.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //   ],
  //   linksTitle: "Links:",
  //   links: [
  //     {
  //       text: "",
  //       url: "https://disrupt-x.io/",
  //       clickableText: "Visit the platform",
  //     },
  //   ],
  //   aboutTitle: "About the Project:",
  //   aboutItems: [
  //     {
  //       title: "# Description:",
  //       boldSentence: "Description",
  //       description:
  //         "Cloud IoT Solutions Platform/Store/Landing website which allows companies to host, manage, monitor their IoT Devices, the platform contains Roles management system control access privileges.",
  //       tag: 1,
  //     },
  //     {
  //       title: "# My Achievement:",
  //       boldSentence: "My Achievement",
  //       description:
  //         "Maintaining and improving software applications by fixing bugs and integrating new features. Enhanced system stability and contributed to smoother user experiences.",
  //       tag: 1,
  //     },
  //   ],
  //   options: [
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
  //       label: "Visit",
  //       actionType: "LINK",
  //       link: "https://disrupt-x.io/",
  //     },
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
  //       label: "Details",
  //       actionType: "DEFAULT",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   type: "image",
  //   mediaUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/cover.jpg",
  //   mediaViewer: {
  //     image:
  //       "https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/1.jpg",
  //     mediaViewType: "V",
  //   },
  //   name: "Facilitrol-X",
  //   logoUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/web/facility/logo.png",
  //   tags: [2, 3, 24],
  //   description: "Website",
  //   gallery: [
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/1.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/1.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/2.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/2.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/3.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/3.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/4.jpg",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/4.jpg",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 2,
  //     },
  //   ],
  //   linksTitle: "Links:",
  //   links: [
  //     {
  //       text: "",
  //       url: "https://facilitrol-x.io/",
  //       clickableText: "Visit the platform",
  //     },
  //   ],
  //   aboutTitle: "About the Project:",
  //   aboutItems: [
  //     {
  //       title: "# Description:",
  //       boldSentence: "Description",
  //       description:
  //         "A landing website for facility management software system which is a comprehensive platform designed to streamline and optimize the management of various aspects of a facility or building.",
  //       tag: 1,
  //     },
  //     {
  //       title: "# My Achievement:",
  //       boldSentence: "My Achievement",
  //       description:
  //         "Collaborated with the development and design teams to create user-friendly UI components that showcase promotional content, enhancing the website's appeal to visitors.",
  //       tag: 1,
  //     },
  //   ],
  //   options: [
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
  //       label: "Visit",
  //       actionType: "LINK",
  //       link: "https://facilitrol-x.io/",
  //     },
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
  //       label: "Details",
  //       actionType: "DEFAULT",
  //     },
  //   ],
  // },
  {
    id: 10,
    type: "image",
    identifier: "7sS",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/cover.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/2.jpg",
      mediaViewType: "V",
    },
    name: "Defcon Patrols",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/logo.png",
    tags: [9, 16, 17, 18, 5, 9, 19, 37, 24],
    description: "Mobile App",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://play.google.com/store/apps/details?id=com.disruptX.defcon&hl=en_US&gl=TR",
        clickableText: "Google Play",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "A mobile app offers a Cloud IoT Solutions Platform for hosting, managing, and monitoring IoT security devices in companies, covering various sensors in institutions. It alerts on alarms, minimizing damage to people and properties.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "Flutter, BLoC, Cloud Messaging, socket.io, Clean architecture, dependency  injection.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "- Refactor huge codebase, with +150 folder and +300 file, to git ride of deprecated packages and reduce code size, ended up with 30% less bundle size on play store.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Suggested and Achieved an alarm notification system by implementing bidirectional connection through mesaging service, enhancing the app's reliability and alignment with its purpose.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Play Store",
        actionType: "LINK",
        link: "https://play.google.com/store/apps/details?id=com.disruptX.defcon&hl=en_US&gl=TR",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 13,
    type: "image",
    identifier: "-R0",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/cover.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/2.jpg",
      mediaViewType: "V",
    },
    name: "MetroWatch",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/logo.png",
    tags: [16, 17, 37, 24],
    description: "Mobile App",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://play.google.com/store/apps/details?id=com.disruptX.metrowatch&hl=en_US&gl=TR",
        clickableText: "Google Play",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "A Feature rich platform enables companies to host, manage, and monitor IoT lock devices (e.g., pad lock, parking lock, asset tracker, bike cable), featuring role management for controlling access privileges and more.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description: "Flutter, BLoC, reactive-ble.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "- Collaborated with a 7-member team, organized efficient meetings, and met a tight deadline, reducing the development time for the first version to under 2 months.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Play Store",
        actionType: "LINK",
        link: "https://play.google.com/store/apps/details?id=com.disruptX.metrowatch&hl=en_US&gl=TR",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 9,
    type: "image",
    identifier: "kuL",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/cover.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/2.jpg",
      mediaViewType: "V",
    },
    name: "Ordert",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/logo.png",
    tags: [16, 18, 19, 20, 21, 37, 25],
    description: "Mobile App",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/11.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/11.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://play.google.com/store/apps/details?id=com.mod.ordert&hl=en_US&gl=TR",
        clickableText: "Google Play",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "App simplifies order management and table reservations, offering a visual layout for exploring table positions and additional features.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description: "Flutter, MVVM, GetX, Cloud Messaging, Code-magic.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "- Designed a complex, user friendly UI components to help user find their needs with a minimum number of actions.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Elevated the app to a new level, transitioning it from a state riddled with bugs to a polished, production-ready version for end users.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Proposed, designed, and implemented UI/UX enhancements to simplify feature usability for users, ensuring a more intuitive experience.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Introduced a modern CI/CD tool called Code Magic, which significantly reduced deployment time by 25%, improving our development process.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
        label: "Play Store",
        actionType: "LINK",
        link: "https://play.google.com/store/apps/details?id=com.mod.ordert&hl=en_US&gl=TR",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },

  {
    id: 11,
    type: "image",
    identifier: "6Pn",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/cover.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/2.jpg",
      mediaViewType: "V",
    },
    name: "Digital-X",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/logo.png",
    tags: [16, 17, 19],
    description: "Mobile App",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    // links: [
    //     {
    //         text: '',
    //         url: 'https://check.medxsol.com',
    //         clickableText: 'Visit the platform',
    //     }],
    aboutTitle: "About the Project:",
    aboutItems: [
      // {
      //     title: '# Description:',
      //     boldSentence: 'Description',
      //     description: "- A large-scale software platform was created from scratch after a five-month hiatus due to the search for a qualified developer. The initial release was successfully delivered and satisfied the client within two months of me starting the position and taking over the project, restoring the CEO's confidence in the continuation of the contract with the client.",
      //     tag: 1
      // },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description: "Flutter, BloC, Clean Architecture.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "Contributed in developement process of the app, including converting figma design to interactive coded UI, managing UI state and data I/O.",
        tag: 1,
      },
    ],
    options: [
      // {
      //   icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
      //   label: "Visit",
      //   actionType: "LINK",
      //   link: "https://check.medxsol.com",
      // },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 12,
    type: "image",
    identifier: "01q",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/cover.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/2.jpg",
      mediaViewType: "V",
    },
    name: "Muslim App",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/logo.png",
    tags: [16, 17, 19],
    description: "Mobile App",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    // links: [
    //     {
    //         text: '',
    //         url: 'https://check.medxsol.com',
    //         clickableText: 'Visit the platform',
    //     }],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "An app designed for Muslim communities within a city or country, facilitating easy location of mosques through map integration. It serves as a centralized platform for donations and disseminates announcements pertinent to the community's activities and events.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description: "Flutter, Clean-Architecture.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "- Actively participated in meetings, contributed to the development process, and ensured effective communication throughout the project.",
        tag: 1,
      },
    ],
    options: [
      // {
      //   icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
      //   label: "Visit",
      //   actionType: "LINK",
      //   link: "https://check.medxsol.com",
      // },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 14,
    type: "image",
    identifier: "_UE",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/cover.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/2.jpg",
      mediaViewType: "V",
    },
    name: "Global Mobility",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/logo.png",
    tags: [16, 17, 19],
    description: "Mobile App",
    gallery: [
      // {
      //     mediaViewer: {
      //         image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/1.jpg',
      //         mediaViewType: 'V'
      //     },
      //     src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
      // },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/7.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/7.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/8.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/8.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/9.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/9.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/10.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/10.jpg",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description: "An online scooter renting app in dubai city.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description: "Flutter, BloC, Clean-Architecture socket.io.",
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "My Achievement",
        description:
          "- Communicated with non-technical stuff and tester to resolve software issues.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Intergrated a map viewer widget with markers and tracking routes to enhance user situational awareness, aligning with the application's purpose.",
        tag: 1,
      },
    ],
    options: [
      // {
      //   icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
      //   label: "Visit",
      //   actionType: "LINK",
      //   link: "https://check.medxsol.com",
      // },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 21,
    type: "image",
    identifier: "EG_",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/qi/output.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/qi/logo.png",
      mediaViewType: "V",
    },
    name: "Q Interpreter",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/qi/logo.png",
    tags: [22, 23, 24],
    description: "Interpreter",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/qi/output.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/qi/output.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/qi/chart.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/qi/chart.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://github.com/OdayAli2249/Q-Interpreter",
        clickableText: "github",
      },
    ],
    aboutTitle: "About the Project:",
    hyperWords: new Map<string, string>([
      ["github", "https://github.com/OdayAli2249/Q-Interpreter"],
    ]),
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "The Q Interpreter is a Java-based project developed using JavaCC, aimed at interpreting the Q programming language (my made up programming language :-) ). This project provides a parser capable of understanding Q code through the utilization of tokens and grammars defined in a .jj file. JavaCC then generates a set of files that serve as the lexical and syntax analyzers, constructing a parse tree from the input code.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "Q interpreter support recursion functions! in the right is a screenshot of defining and testing Fibonacci sequence function.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description: "Complete details on github",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description: "Java JCC, Compiler Design, Software Engineering.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Github",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/Q-Interpreter",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 15,
    type: "image",
    identifier: "xzI",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/cc/6.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/cc/6.png",
      mediaViewType: "V",
    },
    name: "FuzzyDrive",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/cc/logo.png",
    tags: [24, 27, 28, 29, 30, 40, 37],
    description: "Evnironment Simulator",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cc/6.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cc/6.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cc/5.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cc/5.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cc/7.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cc/7.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cc/3.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cc/3.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cc/2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cc/2.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cc/1.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cc/1.png",
        type: "image",
        highlightWord: "",
        tag: 2,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "",
        url: "https://github.com/OdayAli2249/FuzzyDrive---AI-Powered-Self-Driving-Car-Simulation",
        clickableText: "github",
      },
      {
        text: "",
        url: "https://drive.google.com/drive/folders/1zw306jIbmizZnSh8cGc6N6iLfTnBA0jq",
        clickableText: "demo",
      },
      {
        text: "Reference",
        url: "https://www.researchgate.net/publication/2247942_Fuzzy_Control_to_Drive_Car-Like_Vehicles",
        clickableText: "Original research paper",
      },
    ],
    aboutTitle: "About the Project:",
    hyperWords: new Map<string, string>([
      [
        "here",
        "https://www.researchgate.net/publication/2247942_Fuzzy_Control_to_Drive_Car-Like_Vehicles",
      ],
      [
        "github",
        "https://github.com/OdayAli2249/FuzzyDrive---AI-Powered-Self-Driving-Car-Simulation",
      ],
    ]),
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description:
          "A Unity 3D simulation that demonstrates the capabilities of an AI-powered self-driving car using fuzzy logic and rule-based system technologies. This project tackles the complex challenge of implementing a self-driving car simulation, based on research from a self-driving car simulation paper which you can find here .",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "The simulation features two vehicles: one operated by the user and the other navigated by an intelligent system leveraging fuzzy logic principles and knowledge-based systems.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description: `My contribution is to transform a theoretical concept in a scientific research into a measurable and controllable computer simulation using artificial 
          intelligence technology, as well as an improvement on the method presented in the research to support handling unresolved rare case (only detected 
          through taking the proposed method to practical computer simulation).`,
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description: "Complete, Well documented details on github",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "# Stack:",
        description:
          "Artificial Intelligence, Rule-Based Systems, Expert Systems, Fuzzy Logic, Game Development, Unity 3D.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Github",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/FuzzyDrive---AI-Powered-Self-Driving-Car-Simulation",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/demo.svg",
        label: "DEMO",
        actionType: "LINK",
        link: "https://drive.google.com/drive/folders/1zw306jIbmizZnSh8cGc6N6iLfTnBA0jq",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 1,
    type: "video",
    identifier: "wNR",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg",
      // images: [
      //     'https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg',
      //     'https://odayali2249.github.io/portfolio-resources/resources/sc/2.jpg',
      //     'https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg',
      //     'https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg',
      //     'https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg'
      // ],
      // video: 'https://odayali2249.github.io/portfolio-resources/resources/sc/sc-demo-1.mp4',
      mediaViewType: "V",
    },
    name: "Poly Dynamics",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/sc/logo.jpg",
    tags: [30, 31, 32, 22, 37],
    hyperWords: new Map<string, string>([
      ["polygons", "https://www.mathsisfun.com/geometry/polygons.html"],
      [
        "brain-dots",
        "https://play.google.com/store/search?q=brain-dots&c=apps&hl=en_US&gl=TR",
      ],
      [
        "brain-it-on!",
        "https://play.google.com/store/search?q=Brain%20It%20On!&c=apps&hl=en_US&gl=TR",
      ],
      [
        "draw-a-stickman",
        "https://play.google.com/store/apps/details?id=com.hitcents.drawastickman&hl=en_US&gl=TR",
      ],
      [
        "love-balls",
        "https://play.google.com/store/search?q=love-balls&c=apps&hl=en_US&gl=TR",
      ],
    ]),
    description: "Physics engine - Games math",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/dashboard-1.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/dashboard-1.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/dashboard-2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/dashboard-2.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sc/6.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sc/6.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "Source Code:",
        url: "https://github.com/OdayAli2249/poly-dynamics-2D",
        clickableText: "Poly Dynamics",
      },
      {
        text: "DEMO",
        url: "https://drive.google.com/drive/folders/10ZuK_7OOMD-zlNDn203hk-63XNLrMH9M?usp=sharing",
        clickableText: "Poly Dynamics DEMO",
      },
      {
        text: "Documentation (In Arabic)",
        url: "https://drive.google.com/file/d/1M2ZfLIHVgRsdZFarElK_tG0nd-avTB3H/view?usp=sharing",
        clickableText: "Poly Dynamics Docs",
      },
      {
        text: "References:",
        url:
          "https://www.amazon.co.uk/Game-Physics-Engine-Development-Commercial-Grade/dp/" +
          "0123819768/ref=asc_df_0123819768/?tag=googshopuk-21&linkCode=df0&hvadid=311013355418&hvpos" +
          "=&hvnetw=g&hvrand=7481786533575717995&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&" +
          "hvlocphy=20339&hvtargid=pla-489055530895&psc=1&mcid=52deca3b3da739f69d09f33d10f8f0b0&th=1&psc=1",
        clickableText:
          "Game Physics Engine Development: How to Build a Robust Commercial-Grade Physics" +
          " Engine for your Game",
      },
      {
        text: "",
        url: "https://www.amazon.co.uk/Game-Physics-Cookbook-Gabor-Szauer/dp/1787123669",
        clickableText: "Game Physics Cookbook Paperback 24 Mar. 2017",
      },
      {
        text: "",
        url: "https://www.amazon.co.uk/Physics-Game-Programmers-Grant-Palmer/dp/159059472X",
        clickableText:
          "Physics for Game Programmers Paperback Illustrated, 20 April 2005",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "Physics Engine in Java and OpenGL",
        boldSentence: "Physics Engine in Java and OpenGL",
        description:
          "Developed a robust physics engine using Java and OpenGL, providing a platform for simulating complex physical interactions. " +
          "Leveraged the power of OpenGL for efficient rendering and visualization of 2D polygons and their dynamic behavior. " +
          "By reviewing the source code and physics concepts in my GitHub repository, you will gain valuable knowledge and qualifications necessary to create sophisticated physics-based games, akin to popular titles like Brain-Dots , Brain-It-On! , Draw-a-Stickman and Love-Balls .",
        tag: 1,
      },
      {
        title:
          "Interactive Dashboard for Creating Custom Polygons and Customizing Body Parameters",
        boldSentence:
          "Interactive Dashboard for Creating Custom Polygons and Customizing Body Parameters",
        description:
          "Implemented an intuitive dashboard interface allowing users to create custom polygons/shapes and customize parameters for each individual body within the simulation. " +
          "Provided controls to set initial angular and linear position, angle, mass and velocity for precise configuration of body dynamics. " +
          "Empowered users to initiate simulation execution with the click of a button, facilitating seamless interaction and exploration of dynamic scenarios. ",
        tag: 1,
      },
      {
        title: "Dynamic 2D Polygon Simulation",
        boldSentence: "Dynamic 2D Polygon Simulation",
        description:
          "Implemented a dynamic simulation environment featuring 2D polygons falling from a height onto a cracked ground, enhancing challenge and realism. " +
          "Designed the simulation to showcase realistic collisions and interactions between rigid bodies, accurately modeling physics principles. ",
        tag: 1,
      },
      {
        title: "Integration of ODE Solver and Euler Method",
        boldSentence: "Integration of ODE Solver and Euler Method",
        description:
          "Utilized an Ordinary Differential Equation (ODE) solver combined with the Euler method to simulate realistic physical behavior. " +
          "Implemented advanced numerical methods to accurately model the dynamics of rigid bodies and their interactions within the simulation environment. ",
        tag: 1,
      },
      {
        title: "In-depth Research and Reference Utilization",
        boldSentence: "In-depth Research and Reference Utilization",
        description:
          "Conducted extensive research, drawing insights from physics textbooks and scientific computation research to inform the simulator's design and implementation. " +
          "Incorporated findings from advanced physics concepts and computational methodologies to ensure fidelity and accuracy in the simulation's representation of physical phenomena. ",
        tag: 1,
      },
      {
        title: "Visualization of Collision and Interaction Dynamics",
        boldSentence: "Visualization of Collision and Interaction Dynamics",
        description:
          "Developed sophisticated visualization techniques with OpenGL to depict collision and interaction dynamics between rigid bodies. " +
          "Enabled users to observe and analyze the complex behavior of polygons as they collide, deform, and interact with each other and the environment. ",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Code",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/poly-dynamics-2D",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/demo.svg",
        label: "DEMO",
        actionType: "LINK",
        link: "https://drive.google.com/drive/folders/10ZuK_7OOMD-zlNDn203hk-63XNLrMH9M?usp=sharing",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 16,
    type: "video",
    identifier: "ec-",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/ss/cover.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/ss/cover.png",
      mediaViewType: "V",
    },
    name: "ML Sudoku Solver",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/ss/logo.jpg",
    tags: [33, 34, 35, 27],
    hyperWords: new Map<string, string>([
      ["github", "https://github.com/OdayAli2249/ML-Sudoku-Solver"],
    ]),
    description: "Computer Vision - Machine Learning",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/5.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol2.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol3.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/5-sol4.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/1-sol.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/1-sol.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/2.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/2-sol.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/2-sol.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/3.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/3-sol.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/3-sol.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/4.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ss/4-sol.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ss/4-sol.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "Source Code:",
        url: "https://github.com/OdayAli2249/ML-Sudoku-Solver",
        clickableText: "ML Sudoku Solver",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "# Description",
        boldSentence: "# Description",
        description:
          "Real-Time ML Sudoku Solver is a project that demonstrates a fascinating intersection of computer vision and machine learning" +
          " to solve Sudoku puzzles directly from video capture.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Complete documentation about implementation available on github .",
        tag: 1,
      },
      {
        title: "# Stack",
        boldSentence: "# Stack",
        description:
          "Python, Machine Learning, Computer Vision, Tensorflow, Keras, OpenCV.",
        tag: 1,
      },
      {
        title: "# Features",
        boldSentence: "# Features",
        description:
          "- Real-Time Video Processing: Captures and processes video input to detect and solve Sudoku puzzles in real-time.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Image Input Support: Besides video, it can also detect and solve Sudoku puzzles in input image.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Machine Learning: Utilizes TensorFlow and Keras for digit recognition.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Computer Vision: Employs OpenCV for image preprocessing, features extraction and contour detection.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- Dynamic Overlay: Displays the solved Sudoku puzzle overlayed on the original video feed.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Code",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/ML-Sudoku-Solver",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  // {
  //   id: 17,
  //   type: "video",
  //   mediaUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/py/cover.png",
  //   mediaViewer: {
  //     image:
  //       "https://odayali2249.github.io/portfolio-resources/resources/py/cover.png",
  //     mediaViewType: "V",
  //   },
  //   name: "Python for Beginners",
  //   logoUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/py/logo.png",
  //   tags: [33],
  //   hyperWords: new Map<string, string>([
  //     [
  //       "github",
  //       "https://github.com/OdayAli2249/My-Python-Course-Lab-Files-f23",
  //     ],
  //   ]),
  //   description: "Educational - Voluntary",
  //   gallery: [
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/py/image1.png",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/py/image1.png",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 1,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/py/image2.png",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/py/image2.png",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 1,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/py/image3.png",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/py/image3.png",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 1,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/py/image4.png",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/py/image4.png",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 1,
  //     },
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/py/image5.png",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/py/image5.png",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 1,
  //     },
  //   ],
  //   linksTitle: "Links:",
  //   links: [
  //     {
  //       text: "Source Code:",
  //       url: "https://github.com/OdayAli2249/My-Python-Course-Lab-Files-f23",
  //       clickableText: "Course Files",
  //     },
  //   ],
  //   aboutTitle: "About the Project:",
  //   aboutItems: [
  //     {
  //       title: "# Description",
  //       boldSentence: "# Description",
  //       description:
  //         "This is the lab files and exercises belong to a free, voluntary Python course that I created, organized and taught at the faculty of information technology engineering," +
  //         " damascus university. The aim of this course was to provide a comprehensive introduction to Python programming, covering fundamental concepts and progressing to more advanced topics, including an introduction to artificial intelligence.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description: `- The curriculum is designed to be comprehensive and engaging, featuring various exercises that illustrate advanced concepts and reinforce each chapter's goals.
  //                Exercises include a "Guess the Number" game, an employee list CRUD application, a "Worm" game, a multi-player Tic-Tac-Toe game, finally, in the AI introduction chapter, a family relationship recognition program using First-order logic. These practical projects ensure learners gain hands-on experience with Python's diverse capabilities.`,
  //       tag: 1,
  //     },
  //     {
  //       title: "# Chapters",
  //       boldSentence: "# Chapters",
  //       description: "",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description:
  //         "- Basics: Data types, loops, control commands, conditions.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description:
  //         "- Functions: Defining and calling functions, arguments, return values, scope.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description: "- Data Structures: Lists, tuples, dictionaries, sets.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description:
  //         "- Object-Oriented Programming (OOP): Classes, objects, inheritance, polymorphism.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description:
  //         "- Storage and Handling of Files: Reading from and writing to files, handling different file formats.",
  //       tag: 1,
  //     },
  //     {
  //       title: "",
  //       boldSentence: "",
  //       description:
  //         "- Introduction to Artificial Intelligence: Basic concepts of AI, simple AI project.",
  //       tag: 1,
  //     },
  //   ],
  //   options: [
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
  //       label: "Code",
  //       actionType: "LINK",
  //       link: "https://github.com/OdayAli2249/My-Python-Course-Lab-Files-f23",
  //     },
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
  //       label: "Details",
  //       actionType: "DEFAULT",
  //     },
  //   ],
  // },
  {
    id: 18,
    type: "video",
    identifier: "pgb",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/cb/cover.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/cb/cover.png",
      mediaViewType: "V",
    },
    name: "Connected Bridges Game",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/cb/logo.png",
    tags: [1, 27, 36, 37],
    hyperWords: new Map<string, string>([
      ["github", "https://github.com/OdayAli2249/Connect-Bridges-Game"],
    ]),
    description: "Intelligence Search Algorithm",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cb/CBG1.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cb/CBG1.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/cb/CBG2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/cb/CBG2.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "Source Code:",
        url: "https://github.com/OdayAli2249/Connect-Bridges-Game",
        clickableText: "Conncted Bridges Game",
      },
    ],
    aboutTitle: "Description",
    aboutItems: [
      {
        title: "",
        boldSentence: "",
        description:
          "A web application that generates a connected bridge game grid and solves it using various algorithms. The application is built with an Express.js server that serves HTML document and features depth-first search, breadth-first search, A*, and hill climbing algorithms.",
        tag: 1,
      },
      {
        title: "# Game Rules",
        boldSentence: "",
        description:
          "The game is played on an 𝑛×𝑚 grid where each cell can either represent wild land or water. Connected wild cells form islands, while connected water cells constitute the sea. The entire grid ensures every water cell is connected, forming a continuous sea. Players can move islands left, right, up, or down, provided there are no grid border crossings or collisions with other islands. The objective is to strategically move the islands to create a continuous connection of wild cells from the top edge to the bottom edge of the grid.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- More context about the project is available on github .",
        tag: 1,
      },
      {
        title: "# Stack",
        boldSentence: "# Stack",
        description:
          "Intelligence Search Algorithms, node.js, express.js, HTML5, CSS",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Code",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/Connect-Bridges-Game",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 2,
    type: "video",
    identifier: "BEu",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg",
      mediaViewType: "V",
    },
    name: "Ultimate Mines Weeper",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/ms/logo.jpg",
    tags: [22, 24, 30, 37, 38],
    description: "Multithreads System - Game",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ms/1.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ms/1.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ms/menu.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ms/menu.jpg",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg",
        type: "image",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ms/3.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ms/3.jpg",
        type: "image",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg",
        type: "image",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/ms/5.jpg",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/ms/5.jpg",
        type: "image",
        tag: 1,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "Source Code:",
        url: "https://github.com/OdayAli2249/mines-weeper-game/",
        clickableText: "Ultimate Mines Weeper",
      },
      {
        text: "DEMO:",
        url: "https://drive.google.com/drive/folders/1Ku5xlSo3HvlcCpj6LKSet5IKCy6-SazJ?usp=drive_link",
        clickableText: "Ultimate Mines Weeper DEMO",
      },
    ],
    aboutTitle: "About the Project:",
    aboutItems: [
      {
        title: "",
        boldSentence: "",
        description:
          "An enhanced version of the classic mines weeper game implemented in Java using Multithreaded and Object-Oriented Programming (OOP) principles.",
        tag: 1,
      },
      {
        title: "",
        boldSentence: "",
        description:
          "- A new rules get added to the game like supporting multiplay (human vs human, human vs computer), save and load game, display saved game, score record, shield concepts (something like health) and more..",
        tag: 1,
      },
      {
        title: "Multithreading Programming for UI and Computation Separation",
        boldSentence:
          "Multithreading Programming for UI and Computation Separation",
        description:
          "Carefully managed interactions between threads to ensure smooth gameplay and user experience.",
        tag: 1,
      },
      {
        title:
          "Object-Oriented Programming (OOP) and Advanced Software Architecture",
        boldSentence:
          "Object-Oriented Programming (OOP) and Advanced Software Architecture",
        description:
          "Employed Object-Oriented Programming principles to design a modular and scalable codebase.",
        tag: 1,
      },
      {
        title: "Mines Weeper Game with Advanced Roles",
        boldSentence: "Mines Weeper Game with Advanced Roles",
        description:
          "Developed a Mines Weeper game with additional roles, offering enhanced gameplay experiences beyond the traditional rules.",
        tag: 1,
      },
      {
        title: "File Storage for Game Persistence and Statistics",
        boldSentence: "File Storage for Game Persistence and Statistics",
        description:
          "Leveraged Java I/O stream SDK for efficient reading and writing of game data, enabling players to resume saved games and track their progress over time.",
        tag: 1,
      },
      {
        title: "Desktop Application in Java",
        boldSentence: "Desktop Application in Java",
        description:
          "Built a desktop application using Java, leveraging its robustness and cross-platform compatibility. Utilized Java's rich ecosystem and libraries to develop a feature-rich Mines Weeper game.",
        tag: 1,
      },
      {
        title: "Flexible User Interface (UI) for Parameter Customization",
        boldSentence:
          "Flexible User Interface (UI) for Parameter Customization",
        description:
          "Empowered players to adjust settings such as the number of shields for each player, board dimensions, and timeout settings to tailor the game to their preferences.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Code",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/mines-weeper-game/",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/demo.svg",
        label: "DEMO",
        actionType: "LINK",
        link: "https://drive.google.com/drive/folders/1Ku5xlSo3HvlcCpj6LKSet5IKCy6-SazJ?usp=drive_link",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 19,
    type: "video",
    identifier: "nJc",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/hi/cover.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/hi/cover.png",
      mediaViewType: "V",
    },
    name: "Hitori Solver",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/hi/logo.png",
    tags: [33, 27],
    description: "Algorithms - Problem Solving",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/hi/h-1.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/hi/h-1.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/hi/h-2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/hi/h-2.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/hi/h-3.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/hi/h-3.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/hi/h-5.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/hi/h-5.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "Source Code:",
        url: "https://github.com/OdayAli2249/hitori-solver/",
        clickableText: "Hitori Solver",
      },
    ],
    aboutTitle: "About the project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "# Description:",
        description: `This project is a Hitori puzzle solver developed using Prolog for the logic processing and Python's Tkinter for the graphical user interface (GUI).
                 Hitori is a logic-based number puzzle where the objective is to eliminate numbers from the grid so that no row or column contains duplicate numbers and the entire remaining cells form a single contiguous block.`,
        tag: 1,
      },
      {
        title: "# Features:",
        boldSentence: "# Features:",
        description: "",
        tag: 1,
      },
      {
        title: "Solver Engine",
        boldSentence: "Solver Engine:",
        description:
          "Implemented in Prolog, leveraging the power of a rule-based system and first-order logic to solve the Hitori puzzles efficiently.",
        tag: 1,
      },
      {
        title: "Interactive GUI",
        boldSentence: "Interactive GUI",
        description: `Developed with Python's Tkinter, providing a user-friendly interface to input puzzles and visualize the solutions.`,
        tag: 1,
      },
      {
        title: "Seamless Integration",
        boldSentence: "Seamless Integration",
        description:
          "Uses the pyswip library to interface between the Prolog solver and the Python application.",
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "Stack",
        description: "Prolog, Python, Tkinter, pyswip.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Code",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/hitori-solver/",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  {
    id: 20,
    type: "video",
    identifier: "QYo",
    mediaUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/sa/cover.png",
    mediaViewer: {
      image:
        "https://odayali2249.github.io/portfolio-resources/resources/sa/cover.png",
      mediaViewType: "V",
    },
    name: "Covid-19 Sentiment Analysis",
    logoUrl:
      "https://odayali2249.github.io/portfolio-resources/resources/sa/logo.png",
    tags: [33, 34, 27],
    description: "",
    gallery: [
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sa/1.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sa/1.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sa/2.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sa/2.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
      {
        mediaViewer: {
          image:
            "https://odayali2249.github.io/portfolio-resources/resources/sa/final results table.png",
          mediaViewType: "V",
        },
        src: "https://odayali2249.github.io/portfolio-resources/resources/sa/final results table.png",
        type: "image",
        highlightWord: "",
        tag: 1,
      },
    ],
    linksTitle: "Links:",
    links: [
      {
        text: "Source Code:",
        url: "https://github.com/OdayAli2249/covid-19-sentiment-analysis",
        clickableText: "Covid-19 Sentiment Analysis",
      },
    ],
    aboutTitle: "About the project:",
    aboutItems: [
      {
        title: "# Description:",
        boldSentence: "Description",
        description: `Understanding public sentiment during crises is crucial for policymakers, health organizations, and businesses to
                 respond effectively, mitigate panic, and address public concerns. This project aims to analyze the sentiment of social media posts and
                  other textual data related to COVID-19 using Natural Language Processing (NLP) and Machine Learning techniques.`,
        tag: 1,
      },
      {
        title: "# My Achievement:",
        boldSentence: "Achievements:",
        description: "",
        tag: 1,
      },
      {
        title: "Data Collection",
        boldSentence: "Data Collection",
        description: `Gathering a diverse set of textual data related to COVID-19 from various sources.`,
        tag: 1,
      },
      {
        title: "Data Preprocessing",
        boldSentence: "Data Preprocessing",
        description: `Cleaning, normalizing, and tokenizing the text data to prepare it for analysis.`,
        tag: 1,
      },
      {
        title: "Vectorization",
        boldSentence: "Vectorization",
        description: `Converting text data into numerical representations using different vectorization
                 methods such as word embeddings, Bag of Words, and TF-IDF.`,
        tag: 1,
      },
      {
        title: "Model Training",
        boldSentence: "Model Training",
        description: `Utilizing two different classifiers/models—Deep Learning with Artificial Neural
                 Networks and Linear Regression—to predict sentiment.`,
        tag: 1,
      },
      {
        title: "Evaluation and Results",
        boldSentence: "Evaluation and Results",
        description: `Displaying the performance of the models through plots and tables to compare their
                 effectiveness.`,
        tag: 1,
      },
      {
        title: "# Stack:",
        boldSentence: "Stack",
        description: "Python, nltk, keras, sklearn.",
        tag: 1,
      },
    ],
    options: [
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
        label: "Code",
        actionType: "LINK",
        link: "https://github.com/OdayAli2249/covid-19-sentiment-analysis",
      },
      {
        icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
        label: "Details",
        actionType: "DEFAULT",
      },
    ],
  },
  // {
  //   id: 22,
  //   type: "video",
  //   mediaUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/et/cover.png",
  //   mediaViewer: {
  //     image:
  //       "https://odayali2249.github.io/portfolio-resources/resources/et/cover.png",
  //     mediaViewType: "V",
  //   },
  //   name: "Ether Website",
  //   logoUrl:
  //     "https://odayali2249.github.io/portfolio-resources/resources/et/logo.png",
  //   tags: [2, 3, 15],
  //   description: "Web3 - Blockchain",
  //   gallery: [
  //     {
  //       mediaViewer: {
  //         image:
  //           "https://odayali2249.github.io/portfolio-resources/resources/et/cover.png",
  //         mediaViewType: "V",
  //       },
  //       src: "https://odayali2249.github.io/portfolio-resources/resources/et/cover.png",
  //       type: "image",
  //       highlightWord: "",
  //       tag: 1,
  //     },
  //   ],
  //   linksTitle: "Links:",
  //   links: [
  //     {
  //       text: "Source Code:",
  //       url: "https://github.com/OdayAli2249/ether-website",
  //       clickableText: "Ether Website",
  //     },
  //     {
  //       text: "Visit:",
  //       url: "https://odayali2249.github.io/ether-website/",
  //       clickableText: "Ether Website",
  //     },
  //   ],
  //   aboutTitle: "About the project:",
  //   aboutItems: [
  //     {
  //       title: "# Description:",
  //       boldSentence: "",
  //       description: `A simple web page that interact with ethereum blockchain and fetch data like node number and balance.`,
  //       tag: 1,
  //     },
  //     {
  //       title: "# Stack:",
  //       boldSentence: "# Stack:",
  //       description: "React.js, Typescript, TailwindCss, React-Query.",
  //       tag: 1,
  //     },
  //   ],
  //   options: [
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/code.svg",
  //       label: "Code",
  //       actionType: "LINK",
  //       link: "https://github.com/OdayAli2249/ether-website",
  //     },
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/visit.svg",
  //       label: "Visit",
  //       actionType: "LINK",
  //       link: "https://odayali2249.github.io/ether-website/",
  //     },
  //     {
  //       icon: "https://odayali2249.github.io/portfolio-resources/resources/details.svg",
  //       label: "Details",
  //       actionType: "DEFAULT",
  //     },
  //   ],
  // },
];

export const projectsMap: Map<number, Project> = arrayToMap(projects);
