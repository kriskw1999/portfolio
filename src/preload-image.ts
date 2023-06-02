import meNoBg from "./assets/me_no_bg.webp";

const preloadImage = (url: string) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = url;
  document.head.appendChild(link);
};

preloadImage(meNoBg);
