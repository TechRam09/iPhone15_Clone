import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className=" screen-max-width">
        <div>
          <p className=" font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple store </span>
            or <span className="underline text-blue">other retailer</span> near
            you. Or call 000800-040-1966
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-center md:justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright &copy; 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p
                key={i}
                className="font-semibold text-gray text-[0.65rem] md:text-xs hover:underline"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
          <p className="font-semibold text-gray text-xs">India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
