export function HomePage() {
  const projects = [
    ProjectObject({
      title: "EdCurex",
      image: "/images/projects-thumbnail/edcurex-project-thumbnail.jpg",
      desc: "EdCurex is a 3-paged landing page website for a medical organization. It constains the main landing page, contact us page and about us page.",
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
      desc: "AboutMovies is a webapp that allows you to explore the world of movies. It`s developed mainly for givig details in full on a particular movies or tv shows and also to inttroduce you to a new one",
      stack: ["HTML", "CSS", "JavaScript"],
      url: "https://aboutmovies-six.vercel.app/",
      githubUrl: "https://github.com/overcomer-v/aboutmovies",
    }),
  ];

  return (
    <div className="">
      <section className="md:px-24 lg:px-60 md:pt-24 pt-12 px-8">
        <div className="flex gap-16 pb-16 md:flex-row flex-col items-start md:items-center ">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold">HELLO</h3>
            <h1 className="text-5xl font-semibold text-amber-600">
              I'm Overcomer
            </h1>
            <p>Web developer and web designer</p>
            <a
              href="mailto:atoyejeovercomer2@gmail.com?subject=Hiring%20Inquiry"
              className="px-6 opacity-85 w-fit py-3 rounded-xl mt-4 text-xs text-amber-600 font-semibold border-[2px] border-amber-600"
            >
              HIRE ME
            </a>
          </div>{" "}
          <img
            className="h-60 w-60 object-cover rounded-2xl border-amber-800"
            src="/images/IMG_20240902_100056_(3).jpg"
            alt=""
          />
        </div>
        <div className="flex gap-3 pb-16 ">
          <SocialLinks
            iconData={"fab fa-google"}
            to={"mailto:atoyejeovercomer2@gmail.com?subject=Hiring%20Inquiry"}
          ></SocialLinks>
          <SocialLinks
            iconData={"fab fa-github"}
            to={"https://github.com/overcomer-v"}
          ></SocialLinks>
          <SocialLinks
            iconData={"fab fa-twitter"}
            to={"https://x.com/victor_atoyeje_?s=09"}
          ></SocialLinks>
        </div>
      </section>

      <section className="px-8 py-16 md:px-12 lg:px-60 md:py-24 bg-neutral-900 flex flex-col gap-8 ">
        <div className="flex items-center gap-12">
          <i className="fa fa-info-circle text-8xl text-amber-600 hidden md:flex"></i>
          <div>
            <div className="w-fit mb-4">
              <h1 className="font-semibold text-sm">ABOUT ME</h1>
              <div className="w-[60%] bg-amber-600 h-1 rounded-md mt-2"></div>
            </div>
            <p className="text-sm opacity-80">
              I'm Atoyeje Overcomer, a web developer with a passion for building
              responsive and user focused websites. I specialize in creating
              clean and efficient code using HTML, CSS, JavaScript and React. I
              thrive on turning ideas into interactive, functional web
              experiences and constantly explore new technologies to stay ahead.
              I'm focused on delivering high quality work.
            </p>
          </div>
        </div>
        <div className="mt-8 flex md:flex-row flex-col gap-12">
          <div className="flex items-center h-fit w-fit py-4 gap-2 border-y-2 border-amber-600 text-amber-600">
            <h5>TechStack</h5>
            <i className="fa fa-arrow-right"></i>
          </div>

          <div className="flex flex-wrap gap-4">
            <img
              className="h-12 w-12 object-cover rounded-lg"
              src="/images/134b64009d7c45128e6bde5b6587553e.jpg"
              alt=""
            />
            <img
              className="h-12 w-12 object-cover rounded-lg"
              src="/images/JavaScript-logo.png"
              alt=""
            />
            <img
              className="h-12 w-12 object-cover rounded-lg"
              src="/images/tailwind.png"
              alt=""
            />
            <img
              className="h-12 w-12 object-cover rounded-lg"
              src="/images/css3-emblem-blue-shield-and-white-text-vector.jpg"
              alt=""
            />
            <img
              className="h-12 w-12 object-cover rounded-lg"
              src="/images/html5-emblem-orange-shield-and-white-text-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" md:px-12 lg:px-60 px-8 py-16">
        <div className="w-fit mb-4">
          <h1 className="font-semibold text-sm">SERVICES</h1>
          <div className="w-[60%] bg-amber-600 h-1 rounded-md mt-2"></div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-8">
          <ServicesCard
            icondata={"fa-bullseye"}
            title={"Frontend Web Development"}
            content={`Building responsive,fast and accessible website using HTML CSS Javascript and React.`}
          ></ServicesCard>
          <ServicesCard
            icondata={"fa-bullseye"}
            title={"Website Performance Optimization"}
            content={`Improving load speed, responsiveness and SEO for a better user experience`}
          ></ServicesCard>
          <ServicesCard
            icondata={"fa-bullseye"}
            title={"UI / UX Implementations"}
            content={`Translating designs from Adobe, Figma, XD, etc into pixel perfect webpages`}
          ></ServicesCard>
          <ServicesCard
            icondata={"fa-bullseye"}
            title={"Single Page Applications (SPA)"}
            content={`Creating dynamic smooth single page apps using modern javascript frameworks.`}
          ></ServicesCard>
          <ServicesCard
            icondata={"fa-bullseye"}
            title={"Website Maintanance and Updates"}
            content={`Keep websites up to date with content changes, bug fixes and enhancements.`}
          ></ServicesCard>
          <ServicesCard
            icondata={"fa-bullseye"}
            title={"Landing Pages and Portfolio Sites"}
            content={`Designing and developing landing pages that convert visitors into customers`}
          ></ServicesCard>
        </div>
      </section>
      <section className="md:px-12 lg:px-60 md:py-16 px-8">
        <div className="w-fit mb-4">
          <h1 className="font-semibold text-sm">FEATURED PROJECTS</h1>
          <div className="w-[60%] bg-amber-600 h-1 rounded-md mt-2"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              image={project.imageSrc}
              desc={project.desc}
              stack={project.stack}
              url={project.url}
              githubUrl={project.githubUrl}
            ></ProjectCard>
          ))}
        </div>
      </section>
      <section className="flex flex-col mt-48 mb-12">
        <div className="flex gap-2 m-auto mb-2">
          <SocialLinks
            iconData={"fab fa-google"}
            to={"mailto:atoyejeovercomer2@gmail.com?subject=Hiring%20Inquiry"}
          ></SocialLinks>
          <SocialLinks
            iconData={"fab fa-github"}
            to={"https://github.com/overcomer-v"}
          ></SocialLinks>
          <SocialLinks
            iconData={"fab fa-twitter"}
            to={"https://x.com/victor_atoyeje_?s=09"}
          ></SocialLinks>
        </div>
        <p className="m-auto text-xs opacity-20">atoyejeovercomer2@gmail.com</p>
      </section>
    </div>
  );
}

function ServicesCard({ title, content, icondata }) {
  return (
    <div className="bg-neutral-900 p-8 rounded-2xl flex flex-col gap-2">
      <i className={`fa ${icondata} text-2xl`}></i>
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm opacity-55">{content}</p>
    </div>
  );
}
function SocialLinks({ iconData, to }) {
  return (
    <a href={to}>
      <i className={`${iconData} bg-neutral-800 rounded-full p-2`}></i>
    </a>
  );
}

function ProjectCard({ title, image, desc, stack, url, githubUrl }) {
  return (
    <div className="p-6 bg-neutral-900 rounded-2xl">
      <img
        className="mb-4 w-full md:h-[200px] h-[130px] rounded-xl object-cover"
        src={image}
        alt=""
      />
      <h1 className="font-semibold mb-2">{title}</h1>
      <p className="text-sm opacity-60 mb-4">{desc}</p>
      <div className="flex gap-2 items-center">
        {stack.map((e) => (
          <p className="text-amber-600 border-neutral-500 rounded-md px-2 py-1 opacity-80 text-[0.6rem]">
            {e.toUpperCase()}
          </p>
        ))}{" "}
      </div>
      <div className="flex justify-between items-center mt-8">
        <a href={githubUrl}>
          <i className="fab fa-github"></i>
        </a>
        <a href={url}>
          <button className="text-xs flex gap-2 items-center bg-amber-600 py-2 px-4 font-semibold rounded-lg">
            <h1>VISIT</h1>
            <i className="fa fa-globe"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

function ProjectObject({ title, image, desc, stack, url,githubUrl }) {
  return {
    title: title,
    imageSrc: image,
    desc: desc,
    stack: stack,
    url: url,
    githubUrl:githubUrl,
  };
}
