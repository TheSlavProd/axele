import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";

import { motion } from "framer-motion";
import { useState } from "react";

export const Hero = () => {

  const [elementIsVisible, setElementIsVisible] = useState(false);
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  }
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible:any) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Experience The</span>{" "}
          <span>
            <b>Best Qulaity Music</b>
          </span>
          <span className="text-[15px] text-[#525D6E]">
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            <br />
            Suspendisse in leo non risus tincidunt lobortis.
          </span>
          <div>
            <span className="text-[13px]">Download now on IOS and Android</span>
            <DownloadAds />
          </div>
        </div>
        <div className="images relative w-[50%]">
         
          <img
            src={require("./assets/p 1.png")}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-[13rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("./assets/p 2.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("./assets/p 3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("./assets/p 4.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;