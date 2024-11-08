import React from "react";
import "./Main.css";
import SectionFourToSix from "./SectionFourToSix/SectionFourToSix";
import SectionOneToThree from "./SectionOneToThree/SectionOneToThree";
import YoutubeVideos from "../YoutubeVideos/YoutubeVideos";
const Main = () => {
  return (
    <>
      <SectionOneToThree />
      <SectionFourToSix />
      <YoutubeVideos />
    </>
  );
};

export default Main;
