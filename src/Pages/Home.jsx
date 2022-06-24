import React from "react";
import HeroSection from "../components/Home/HeroSection";
import About from "../components/Home/About";
import Tools from "../components/Home/Tools";
import Testimonial from "../components/Home/Testimonial";
import Works from "../components/Home/works";
import Facts from "../components/Home/Facts";
import Services from "../components/Home/Services";
import LatestWork from "../components/Home/LatestWork";

function Main() {
  return (
    <div>
      <HeroSection />
      <h6>about me</h6>
      <h2>Welcome to ani graphics</h2>
      <p>
        I am Anila Adnan. A Graphics Designer, UI/UX Designer, and Video
        Animator with more than 3 years of experience. I am here to provide you
        with my best creative ideas. My passion is to deliver a Great Design and
        Respect the opinion of My client. I love to get new experiences and
        always learn from my surroundings. I've done more than 400 projects. You
        can check it through portfolio section on this website. I am looking
        forward to any opportunities and challenges.
      </p>
      <About />
      <Tools />
      <Works />
      <Services />
      <LatestWork />
      <Facts />

      <h6>testimonials</h6>
      <h2>What Clients say!</h2>
      <Testimonial />
    </div>
  );
}
export default Main;
