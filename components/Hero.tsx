import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full bg-black dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="text-center md:tracking-wider mb-1 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Vishwaa, a Full Stack Developer.
          </p>
         
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-6xl lg:text-6xl"
          />

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Portfolio with Next.js
          </p>

         
          <div>
          <a href="https://drive.google.com/file/d/1jM3FzvqGznLdYwJ0_kAYB2RvrDzpxLNE/view?usp=drive_link" 
              download="Vishwaa_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
            <MagicButton
              title="Resume download"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
