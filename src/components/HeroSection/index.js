import React, { useState } from "react";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrappper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg controls autoPlay loop muted>
          <source src={Video} type="video/mp4"></source>
        </VideoBg>

        {/* <VideoBg>
          <source src={Video} type="video/mp4" autoplay="true" loop muted />
        </VideoBg> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>CryptoCurrency</HeroH1>
        <HeroP>Have A Break. Have A Cryptocurrency.</HeroP>
        <HeroBtnWrappper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrappper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
