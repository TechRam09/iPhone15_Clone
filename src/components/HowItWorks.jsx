import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        toggleActions: "play pause play restart",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 1.5,
      ease: "power2.in",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
    });

    gsap.to("#frameVideo", {
      scrollTrigger: {
        trigger: "#frameVideo",
        toggleActions: "play pause restart restart",
        start: "-10% bottom",
      },

      onComplete: () => {
        videoRef.current.play();
      },
    });
  }, []);

  const videoRef = useRef();
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming
          </h2>
          <p className="hiw-subtitle">
            Its here. The Biggest redesign in the histoy of Aplle GPUs
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img src={frameImg} alt="frame" className=" relative z-10" />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                id="frameVideo"
                playsInline
                muted
                autoPlay
                preload="none"
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
          <div className="hiw-text-container mt-14 lg:px-36">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text g_fadeIn">
                A17 Pro is an entirely new class of iPhone chip that delivers
                our{" "}
                <span className="text-white">
                  best graphics performance by far.
                </span>
              </p>
              <p className="hiw-text g_fadeIn mt-6">
                Mobile{" "}
                <span className="text-white">
                  games will look and feel so immersive
                </span>
                , with incredibly detailed environments and characters.And with
                industry-leading speed and efficiency, A17 Pro takes fast and
                runs with it.
              </p>
            </div>

            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Pro-class GPU</p>
              <p className="hiw-text">with 6 cores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
// why my video animation is not working
