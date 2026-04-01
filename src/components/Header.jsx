import { SocialLinks } from "./SocialLinks";

export function Header() {
    return (
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
              className="px-6 opacity-85 w-fit py-3 rounded-xl  hover:bg-amber-600 hover:text-white mt-4 text-xs text-amber-600 font-semibold border-[2px] border-amber-600"
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
    );
}