import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="highlights"
      className=" w-screen common-padding h-full bg-zinc overflow-hidden"
    >
      <div className=" screen-max-width">
        <div className="w-full mb-12 flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className=" flex flex-wrap items-end gap-5">
            <p className="link sm:text-sm">
              Watch the Film
              <img src={watchImg} alt="watch" className=" ml-2" />
            </p>
            <p className="link ">
              Watch the Event
              <img src={rightImg} alt="right" className=" ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
