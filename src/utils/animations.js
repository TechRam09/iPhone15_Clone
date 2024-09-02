export const animateWithGsapTimeline = (
  timeline,
  modelRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(modelRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
