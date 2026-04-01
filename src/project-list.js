export const projects = [
  ProjectObject({
    title: "EdCure",
    image: "/images/projects-thumbnail/edcurex-project-thumbnail.jpg",
    desc: "EdCurex is a 3-paged landing page website for a medical organization. It contains Home page, Contact Us page and About Us page.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://edcurex-pbcu.vercel.app/",
    githubUrl: "https://github.com/overcomer-v/Edcurex",
  }),
  ProjectObject({
    title: "Elixora",
    image: "/images/projects-thumbnail/elixora-thumbnail.jpg",
    desc: "Elixora is a single-page landing page containing all the essential information on a single page with a means for the client to make contact.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://elixora-mu.vercel.app/",
    githubUrl: "https://github.com/overcomer-v/Elixora",
  }),
  ProjectObject({
    title: "AboutMovies",
    image: "/images/projects-thumbnail/aboutmovies-project-thumbnail.jpg",
    desc: "AboutMovies is a webapp that allows you to explore the world of movies. It gives full details on particular movies and tv shows and also provide movie suggestions",
    stack: ["React", "TailwindCSS", "JavaScript"],
    url: "https://aboutmovies-six.vercel.app/",
    githubUrl: "https://github.com/overcomer-v/aboutmovies",
  }),

  ProjectObject({
    title: "QuilStory",
    image:"/images/Screenshot 2026-03-31 185628.png",
    desc: "Quilstory is a safe web app designed to record your Journals and Notes in one places, and one if its distinct features is the storage of image together with the journals, to capture the moment better",
    stack: ["React", "TailwindCSS", "JavaScript"],
    url: "https://quilstory.vercel.app/",
    githubUrl:"https://github.com/overcomer-v/quilstory"
  }),
];

function ProjectObject({ title, image, desc, stack, url, githubUrl }) {
  return {
    title: title,
    imageSrc: image,
    desc: desc,
    stack: stack,
    url: url,
    githubUrl: githubUrl,
  };
}
