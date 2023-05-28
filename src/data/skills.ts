import jsLogo from "../assets/js-icon.webp";
import tsLogo from "../assets/ts-icon.webp";
import reactLogo from "../assets/react-icon.webp";
import vueLogo from "../assets/vue-icon.webp";
import nuxtLogo from "../assets/nuxt-icon.webp";
import nextLogo from "../assets/next-icon.webp";
import tailwindLogo from "../assets/tailwind-icon.webp";
import gitLogo from "../assets/git-icon.webp";

export type Skill = {
  name: string;
  logo: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "JavaScript",
    logo: jsLogo,
    description:
      "JavaScript (JS): Mastering JavaScript, I create interactive web experiences with seamless navigation, dynamic content, and optimized code. My expertise extends to frameworks like React and jQuery, enhancing user interactions and crafting robust solutions.",
  },
  {
    name: "TypeScript",
    logo: tsLogo,
    description:
      "TypeScript (TS): With TypeScript, I build reliable and scalable web projects. I leverage its strong typing system for error detection and maintainable code. Proficient in Angular and React, I develop type-safe applications for exceptional user experiences.",
  },
  {
    name: "React",
    logo: reactLogo,
    description:
      "React: Using React, I create engaging web applications with reusable UI components, optimized performance, and seamless integration of libraries and APIs. With Redux or React Router, I deliver intuitive and visually appealing solutions.",
  },
  {
    name: "Vue",
    logo: vueLogo,
    description:
      "Vue.js: With Vue.js, I develop robust and intuitive web apps using its component-based architecture. Reactive data binding ensures efficient updates, while Vuex manages complex state. Delivering elegant solutions, I integrate Vue with external libraries and APIs.",
  },
  {
    name: "Nuxt",
    logo: nuxtLogo,
    description:
      "Nuxt.js: Nuxt.js allows me to create performant SSR and static websites. Leveraging its file-based routing and automatic code-splitting, I deliver efficient page rendering and optimized performance. With built-in features like Vuex and middleware, I develop scalable and secure web solutions.",
  },
  {
    name: "Next",
    logo: nextLogo,
    description:
      "Next.js: Using Next.js, I build high-performance web apps with hybrid rendering capabilities. With server-side rendering and static site generation, I ensure fast initial loads and smooth navigation. Next.js's routing and API routes enhance flexibility and scalability.",
  },
  {
    name: "Tailwind",
    logo: tailwindLogo,
    description:
      "Tailwind CSS: With Tailwind CSS, I design visually stunning and responsive interfaces. Leveraging its utility-first approach and extensive class library, I create rapid prototypes and optimize performance with leaner CSS.",
  },
  {
    name: "Git",
    logo: gitLogo,
    description:
      "Git: Proficient in Git, I manage code efficiently for collaborative projects. Leveraging branching, merging, and version control, I ensure organized workflows, clean history, and smooth collaboration. Experienced in Git workflows and automation with hooks, I maintain code integrity and streamline development.",
  },
];
