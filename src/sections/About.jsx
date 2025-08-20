import React from "react";
import Profile from "../assets/Profile_img.png";
import Button from '../components/Button'
const About = () => {
  return (
    <div className="pt-24 mx-3 mb-3 sm:mx-10 min-h-[70vh] sm:min-h-[55vh] lg:min-h-screen flex flex-col-reverse sm:flex-row justify-center items-start sm:items-center flex-shrink-0 flex-grow gap-4">
      <>
        <div className="basis-3/4 flex flex-col gap-4 ">
          <h1>Hi, I am Akash👋</h1>
          <p>
            <p>
              A tech enthusiast exploring the world of AWS and
              DevOps. I love documenting my learning journey through blogs, from
              hosting static websites on S3 to deploying scalable apps on EC2
              with load balancing and auto-scaling.
            </p>
          </p>

          <a href="/resume.pdf" download>
            <Button>Download Resume</Button>
          </a>
        </div>

        <div className="w-full flex justify-center items-center lg:block  basis-1/2 lg:basis-1/4 py-4 sm:py-0 ">
          <img
            src={Profile}
            alt="profile"
            className="rounded-full w-[200px] h-[200px] object-cover text-center "
          />
        </div>
      </>
    </div>
  );
};

export default About;
