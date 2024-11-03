import { Icons } from "@/components/icons";
import { HomeIcon, Paperclip } from "lucide-react";

export const DATA = {
  name: "Misan Etchie",
  description: "Software Engineer",
  initials: "ME",
  url: "https://misanetc.vercel.app",
  location: "Flagstaff, AZ, USA",
  summary: `I am a dedicated Software Developer with expertise in developing
                and maintaining cross-platform mobile applications using the
                Flutter framework. With a strong foundation in programming
                concepts and a passion for crafting intuitive user experiences,
                I excel in implementing UI/UX designs, building custom widgets,
                and integrating APIs to create performant applications for both
                Android and iOS platforms.`,
  avatarUrl: "/me.png",
  TechnicalSkills: [
    "Mobile app development",
    "Native iOS Development– Swift, UIkit & SwiftUI",
    "Android & iOS development with Flutter framework",
    "Dart programming language",
    "SQL",
    "Amazon Web Services (AWS)",
    "Firebase",
    "Agile Development Methodology",
    "Git (Version Control)",
  ],
  Reasearch: [
    "Comparative Research on Large Language Models",
    "Comparative Research on AI & Human Support Communities for Developers",
    "Research on Inclusivity of Newcomers in Open Source Software (JabRef)",
  ],

  SoftSkills: [
    "Copywriting skills",
    "Leadership and Team Coordination",
    "Event Organization and Management",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "msnetchie11@gmail.com",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MisanEtchie?tab=repositories",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/misan-etchie/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:msnetchie11@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1PC6Sg1j5tyIPNl_BpEZpxp2V86T3MBcH/view?usp=sharing",
        icon: Paperclip,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Northern Arizona's Reshape Lab",
      href: "https://www.reshapelab.site/",
      badges: [],
      location: "Claymont, Delaware",
      title: "Graduate Research Assistant",
      logoUrl: "/reshapeLogo.png",
      start: "August 2024",
      end: "Present",
      description: `
In my role as a Graduate Research Assistant in the RESHAPE Lab at Northern Arizona University, I engage in cutting-edge research focused on Large Language Models (LLMs) and their applications in software engineering
- Conducted research comparing the effectiveness of Large Language Model Assistants versus human communities in resolving developers' issues. 
-  Researched ways to improve inclusivity for newcomers in Open Source software projects, with a specific focus on the JabRef reference management tool.`,
    },
    {
      company: "Wiseki Technologies",
      href: "https://wiseki.com/",
      badges: [],
      location: "Nigeria",
      title: "Mobile Developer ",
      logoUrl: "/wisekilogo.png",
      start: "June 2023",
      end: "August 2024",
      description: `As a Mobile Developer at Wiseki Technologies, I contributed to the development and maintenance of cutting-edge applications, focusing on innovative solutions in the tech startup space. Below are the key applications I worked on:
- In charge of maintaining and updating Wiseki Technologies’ already existing cryptocurrency trading platform; SekiApp                           .
- Collaborated with other Flutter developers and the backend team to deliver a finance app with security at the forefront.
- In charge of starting Wiseki’s shopping platform mobile project, as well as maintaining the application.
- Implemented the application UI and developed reusable custom widgets to speed up application development.
- Handled app and widget state management using Riverpod.
- Integrated third-party libraries to interact with the back-end API.
- Provided proper and extensive documentation on how to make use of the custom widgets library created and integrated into the application.
- In charge of building Wiseki’s bill payment platform from the ground up, as well as maintaining and publishing the application.
`,
    },

    {
      company: "New Horizons Learning Centre",
      href: "https://www.newhorizonsnigeria.com.ng/",
      badges: [],
      location: "London, England",
      title: "Software Engineer(Intern)",
      logoUrl: "/newhorizons.png",
      start: "July 2021",
      end: "Nov 2021",
      description: `- Implemented agile software development methodologies in meaning business and user requirements
- Developed and tested consumer-facing software systems for the company with a team of software engineers
`,
    },
  ],
  education: [
    {
      school: "Nothern Arizona University",
      href: "https://nau.edu/",
      degree: "MSc. Computer Science",
      logoUrl: "/nau.png",
      start: "August 2024",
      end: "May 2026",
      desc: [
        "Awarded Graduate Research Assistantship for exceptional academic performance and research potential",
        "Undergoing coursework in advanced computer science topics",
      ],
    },
    {
      school: "Lead City University",
      href: "https://www.lcu.edu.ng/",
      degree: "BSc. Computer Science",
      logoUrl: "/lcu.png",
      start: "September 2018",
      end: "July 2022",
      desc: [
        "First Class Honors with a CGPA of 4.66 (3.73 US Equivalent)",
        "Director of Welfarism and Community, National Association of Computing Students (NACOS), LCU Chapter",
        "2022 ‘Influential Leadership’ Award— Head of Department, Computer Science",
        "Class Representative and Liaison Officer",
        "Member of Lead City’s Student Ambassadorial Team (SAT) 2020-2021",
      ],
    },
  ],
  projects: [
    {
      title: "SekiApp",
      href: "https://chatcollect.com",
      isExpendible: true,
      dates: "",
      active: true,
      description:
        "In charge of maintaining and updating Wiseki Technologies’ already existing cryptocurrency trading ",
      technologies: [
        // "Next.js",
        "Flutter",
      ],
      links: [
        {
          type: "Website",
          href: "https://sekiapp.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App store",
          href: "https://apps.apple.com/us/app/sekiapp/id1622624126",
        },
        {
          type: "Google Play",
          href: "https://apps.apple.com/us/app/sekiapp/id1622624126",
        },
      ],

      image: "/wisekiImage.png",
      images: ["/wisekiImage.png"],
    },
    {
      title: "Trailabout",
      href: "https://chatcollect.com",
      isExpendible: true,
      dates: "",
      active: true,
      description:
        "TrailAbout is a social platform tailored for outdoor enthusiasts, explorers, travelers, and sight-seers. Users can share their hiking, camping, and travel experiences through posts that highlight specific locations. The app features location tagging, user interactions, and the ability to explore new places through community-shared posts, creating a network for nature lovers and explorers.",
      technologies: [
        "SwiftUI, ",
        "MapKit ",
        "API Integration ",
        "Firebase ",
        "Firebase Authentication",
        "Firebase Firestore",
        "Firebase Storage ",
        "Core Location ",
        "Swift",
        "Git ",
        "RESTful APIs",
        "JSON.",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/MisanEtchie/TrailAbout",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "App store",
          href: "https://apps.apple.com/us/app/trailabout/id6737364778",
        },
      ],

      image: "/trailabout1.png",
      images: [
        "/trailabout1.png",
        "/trailabout2.png",
        "/trailabout6.png",
        "/trailabout3.png",
        "/trailabout4.png",
        "/trailabout5.png",
      ],
      policy: ` <h1 class="font-bold text-3xl">TrailAbout Privacy Policy</h1>
      <p>Effective Date: 23rd of October, 2024</p>
      <li class="py-2 font-medium">1. Introduction</li>
      <p>Welcome to TrailAbout! We value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, store, and use your data when you use TrailAbout.</p>
      By using TrailAbout, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue using the app.
      <li class="py-2 font-medium">2. Information We Collect</li>
      <p>To provide an engaging experience in TrailAbout, we collect the following types of information:</p>
      <p>User Authentication Data: When you create an account or sign in using third-party providers (such as Google, Apple, or Facebook), we collect basic authentication data, which may include your name, email address, and profile photo. This information is used to create and manage your account within the app.</p>
      <p>Posts and Content: When you create posts, upload photos, or interact with content within TrailAbout, this data is stored securely on our servers to ensure the app functions as intended.</p>
      <li class="py-2 font-medium">3. How We Use Your Information</li>
      <p>Authentication: Your login information is used only to authenticate your account and give you access to the app's features. We do not share your authentication data with third parties.                             </p>
      <p>User-Generated Content: Your posts, including text and images, are stored so that they are visible to you and other users of TrailAbout. This data helps enhance your experience and the community aspect of the app.</p>
      <li class="py-2 font-medium">4. Data Sharing and Disclosure</li>
      <p>No Third-Party Sharing: We do not share, sell, or rent your personal information or posts to any third-party organizations for advertising or marketing purposes.
      <p>Internal Use Only: The data you provide, such as your account information and posts, is used solely to operate and improve the functionality of TrailAbout.
      <li class="py-2 font-medium">5. Data Security</li>
      <p>We take your data security seriously. All user data, including authentication details and posts, are securely stored using industry-standard encryption methods. We regularly review our security practices to ensure your information is safe. </p>
      <li class="py-2 font-medium">6. Data Retention</li>
      <p>Authentication Data: We retain your authentication data for as long as your account is active. If you delete your account, this information is permanently removed from our systems.</p>
      <p>Posts and Content: Posts and other user-generated content remain stored as long as your account is active. If you delete specific posts or your account, the corresponding data will be permanently deleted.</p>
      <li class="py-2 font-medium">7. Your Rights and Choices</li>
      <p>Access and Deletion: You have the right to access and update your personal information at any time through the app. If you wish to delete your account, you can do so in the app’s settings, and all your data will be removed permanently.</p>
      <p>Control Over Content: You can delete individual posts or photos you have shared in the app. Once deleted, the content will no longer be visible to other users or retained by TrailAbout.</p>
      <li class="py-2 font-medium">8. Children's Privacy</li>
      <p>TrailAbout is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and become aware that your child has provided us with personal data, please contact us, and we will delete such information from our systems.</p>
      <li class="py-2 font-medium">9. Changes to This Privacy Policy</li>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any significant updates by posting the new policy on the app and updating the "Effective Date" above.</p>
      <li class="py-2 font-medium">10. Contact Us</li>
      <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
<p class="pt-2">Email:  <a  class="link" href="mailto:msnetchie11@gmail.com" target="_blank">msnetchie11@gmail.com</a></p>
<p class="pt-2">Website: <a class="link" href="https://misanetc.vercel.app" target="_blank">misanetc.vercel.app </a></p>
      <p>By using TrailAbout, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.</p>`,
    },
    {
      title: "Raincheck",
      href: "https://chatcollect.com",
      isExpendible: true,
      dates: "",
      active: true,
      description:
        "Raincheck is a weather-focused app that provides real-time weather updates and forecasts. It allows users to plan their activities based on upcoming weather conditions. The app also integrates reminders, enabling users to reschedule events or outdoor plans when rain or inclement weather is expected.",
      technologies: [
        "SwiftUI, ",
        "OpenWeatherMap API",
        "JSON",
        "Combine",
        "Core Location",
        "Git",
        "RESTful APIs",
        "UI/UX.",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/MisanEtchie/Weather-App",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/raincheck1.png",
      images: [
        "/raincheck1.png",
        "/raincheck2.png",
        "/raincheck3.png",
        "/raincheck4.png",
      ],
      policy: `
<h1 class="font-bold text-3xl">Raincheck Privacy Policy</h1>
<p>Effective Date: 23rd of October, 2024</p>

<li class="py-2 font-medium">1. Introduction</li>

<p>Thank you for using Raincheck! Your privacy is important to us. This Privacy Policy explains how we handle your data when you use our app and services.</p>

<p>By using Raincheck, you agree to this Privacy Policy. Please note that Raincheck does not collect, store, or share any personally identifiable information (PII) or location data.</p>

<li class="py-2 font-medium">2. Information We Do Not Collect</li>

<p>No Personal Information: Raincheck does not collect or store any personal data such as your name, email address, or phone number.</p>
<p>No Location Data: Raincheck accesses your device's location services solely to provide real-time weather information based on your current location. This location data is not stored or shared in any form.</p>
<p>No Usage Data: Raincheck does not track, collect, or store data about your usage patterns, device type, or interactions with the app.</p>

<li class="py-2 font-medium">3. How We Use Your Information</li>

<p>Raincheck uses real-time location data only to deliver accurate weather forecasts to your device while the app is in use. Once you close the app, any location data is no longer accessed, and no data is stored.</p>

<li class="py-2 font-medium">4. Data Sharing and Disclosure</li>

<p>Since Raincheck does not collect or store any data, there is no information to share or disclose to third parties.</p>

<li class="py-2 font-medium">5. Data Retention</li>

<p>No personal or location data is retained once the app is closed. Raincheck does not store any information on its servers.</p>

<li class="py-2 font-medium">6. Data Security</li>

<p>Raincheck does not collect or store your personal data. Any location data used to provide weather forecasts is handled locally on your device and is not transmitted to our servers or stored in any form.</p>

<li class="py-2 font-medium">7. Your Choices and Rights</li>

<p>Location Access: You can enable or disable location access for Raincheck through your device settings at any time. Without location access, Raincheck will not be able to provide weather forecasts based on your current location.</p>
<p>Deleting the App: You can stop using Raincheck and any interaction with your location by uninstalling the app.</p>

<li class="py-2 font-medium">8. Changes to This Privacy Policy</li>

<p>We may update this Privacy Policy from time to time. If we make any changes, we will update the "Effective Date" at the top of this page. Your continued use of the app after any updates means you accept the revised policy.</p>

<li class="py-2 font-medium">9. Contact Us</li>

<p>If you have any questions about this Privacy Policy or how Raincheck operates, please feel free to contact us at:</p>

<p class="pt-2">Email:  <a  class="link" href="mailto:msnetchie11@gmail.com" target="_blank">msnetchie11@gmail.com</a></p>
<p class="pt-2">Website: <a class="link" href="https://misanetc.vercel.app" target="_blank">misanetc.vercel.app </a></p>
<li class="py-2 font-medium">10. Children's Privacy</li>

<p>Raincheck does not knowingly collect personal information from children under the age of 13. Since we do not collect any data, the app is safe for users of all ages.</p>
<p>By using Raincheck, you acknowledge that you have read and understood this Privacy Policy.</p>`,
    },
    {
      title: "Roadmap",
      href: "https://chatcollect.com",
      isExpendible: true,
      dates: "",
      active: true,
      description:
        "Roadmap is a narrative-driven game where users interact with characters and stories through customizable cards, including character selection and love interest cards. Players advance by making choices that shape the story, while engaging with character emotions, game levels, and dynamic backgrounds.",
      technologies: [
        "Flutter",
        "Dart",
        "Mobile Development",
        "Cross Platform",
        "UI/UX",
        "Responsive Design",
        "State Management.",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/MisanEtchie/Roadmap",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/roadmap1.png",
      images: [
        "/roadmap1.png",
        "/roadmap2.png",
        "/roadmap3.png",
        "/roadmap4.png",
        "/roadmap5.png",
      ],

      policy: ` 
      <h1 class="font-bold text-3xl">Privacy Policy for Roadmap</h1>
<p>Effective Date: 23rd of October, 2024</p>
<p>Thank you for using Roadmap. Your privacy is important to us. This privacy policy outlines the practices and measures we take to ensure your privacy and security when using the Roadmap app.</p>
<li class="py-2 font-medium">Data Collection</li>
<p class="pb-4">Roadmap does not collect, store, or share any personal information or data from its users. This means:</p>
<p>No Personal Data: We do not request or store any personal information such as names, email addresses, phone numbers, or any other identifying information.</p>
<p>No Location Data: Roadmap does not access or collect any location data from your device</p>

<p>No Third-Party Tracking: We do not use any third-party services that collect information about your use of the app, nor do we use any analytics or advertising frameworks that track your behavior.</p>

<li class="py-2 font-medium">Local Data</li>
<p>Any data generated within the app (such as game progress or settings) is stored locally on your device. This data is not shared with or transmitted to any external servers or third parties.</p>
<li class="py-2 font-medium">Security</li>
<p>We are committed to ensuring that your data remains private and secure. Since we do not collect or store any data, there is no risk of unauthorized access or data breaches in connection with your use of Roadmap.</p>
<li class="py-2 font-medium">Changes to This Privacy Policy</li>
<p>We reserve the right to update this privacy policy as needed to reflect changes in our app or legal requirements. If we make any changes, the updated policy will be made available in the app.</p>
<p>If you have any questions about this Privacy Policy or how Raincheck operates, please feel free to contact us at:</p>

<p class="pt-2">Email:  <a  class="link" href="mailto:msnetchie11@gmail.com" target="_blank">msnetchie11@gmail.com</a></p>
<p class="pt-2">Website: <a class="link" href="https://misanetc.vercel.app" target="_blank">misanetc.vercel.app </a></p>
`,
    },
  ],
  volunteerWork: [
    {
      title:
        "40th Annual International Conference on Software Maintenance and Evolution (ICSME)",
      role: "Event Organizing Volunteer",
      dates: "October 6th - 11th, 2024",
      location: " Flagstaff, Arizona",

      image: "/icsme.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      link: ["https://conf.researchr.org/home/icsme-2024"],
      desc: [
        "Assisted speakers, and provided room support as part of the event organizing team.",
        "Interviewed keynote speaker Denae Ford-Robinson and Jonan Richards at the conference, discussing their research on AI, community, and software engineering.",
      ],
    },

    {
      title: "Upsurge Global",
      role: " Learning Facilitator Volunteer",
      dates: "November 2019 - Present",
      location: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",

      desc: [
        "Create learning content on subjects such as social media and content marketing, artificial intelligence, and object-oriented programming for high school students.",
        "In charge of lecturing students on industry-relevant courses and skills; tech, writing, and marketing.",
      ],
    },
    {
      title: "Volunteer Contributor",
      role: " ",
      dates: "January 2020 - Present",
      location: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      link: ["https://muckrack.com/misan-etchie  "],
      desc: [
        "I created highly informative tech publications on cybersecurity and software engineering for third-party websites, including Hackernoon, ReadWrite, Infosecurity Magazine, and more.",
      ],
    },
  ],
} as any;
