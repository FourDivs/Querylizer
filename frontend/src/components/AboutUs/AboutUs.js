import React from "react";
import MediaCard from "./Card/MediaCard";
import { Typography } from "@material-ui/core";

import localclasses from "./About.module.css";
import DhruvIMG from "../../assets/team/2.jpg";
import AkashIMG from "../../assets/team/3.jpg";
import AnushkaIMG from "../../assets/team/1.jpg";
import PrajaktaIMG from "../../assets/team/4.jpg";

const AboutUs = () => {
  return (
    <div
      className={localclasses.aboutus}
      style={{ background: "linear-gradient(180deg, rgba(0,0,0,1) 28%, rgba(255,255,255,1) 100%)" }}
    >
      <Typography
        align="center"
        variant="h1"
        style={{
          color: "white",
          paddingTop: "30px",
          fontFamily: "poppins",
          fontWeight: "300",
        }}
      >
        &nbsp;<span style={{ fontWeight:"800" }}>Query</span>lizer Creators
      </Typography>
      <div className={localclasses.cards}>
      <div style={{marginRight:"10px"}}>
            <MediaCard
            name="Akash Salvi"
            image={AkashIMG}
            desc="I'm a Web Developer 👨‍💻 by heart , I love exploring new technologies 👨🏻‍🎓. I have interest in competitive programmer ✍️. "
            github="https://github.com/Akash-Salvi"
            linkedin="https://www.linkedin.com/in/akash-salvi-30327217b/"
            twitter="https://twitter.com/AkashAjaySalvi"
            gmail="mailto:akashsalvi21@gmail.com"
            insta="https://www.instagram.com/akash.1_11_00/"
            />
        </div>
        <div style={{marginRight:"10px"}}>
        <MediaCard
          name="Anushka Deshpande"
          image={AnushkaIMG}
          desc="A 3rd Year CSE Undergrad👨‍🎓🚀. Endeavouring competitve programming👨‍💻. I love exploring new technologies 👨🏻‍🎓. "
          github="https://github.com/kothariji"
          linkedin="https://www.linkedin.com/in/kotharidhruv/"
          twitter="https://twitter.com/_kothariji"
          gmail="mailto:kotharidhruv25@gmail.com"
          insta="https://www.instagram.com/junior.kothari/"
        />
        </div>
        <div style={{marginRight:"10px"}}>
        <MediaCard
          name="Prajakta Mane"
          image={PrajaktaIMG}
          desc="An aspiring React and Django developer🚀💻. Endeavouring competitve programming👨‍💻. Always open for the opportunities.🙌"
          github="https://github.com/Nishant127"
          linkedin="https://www.linkedin.com/in/nishant-handge-618673190/"
          twitter="https://twitter.com/Nishant40079455"
          gmail="mailto:handgenishant@gmail.com"
          insta="https://www.instagram.com/nishant_127/"
        />
        </div>
        <div style={{marginRight:"10px"}}>
        <MediaCard
          name="Dhruv Kothari"
          image={DhruvIMG}
          desc="A 3rd Year CSE Undergrad👨‍🎓🚀| Competitive Programmer 🏆 | Web Developer👨‍💻 | Technical Writer ✍️"
          github="https://github.com/kothariji"
          linkedin="https://www.linkedin.com/in/kotharidhruv/"
          twitter="https://twitter.com/_kothariji"
          gmail="mailto:kotharidhruv25@gmail.com"
          insta="https://www.instagram.com/junior.kothari/"
        />
        </div>
        
        
      </div>
    </div>
  );
};
export default AboutUs;