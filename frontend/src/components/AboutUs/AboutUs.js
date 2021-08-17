import React from 'react';
import MediaCard from './Card/MediaCard';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import localclasses from './About.module.css';
import DhruvIMG from '../../assets/team/2.jpg';
import AkashIMG from '../../assets/team/3.jpg';
import AnushkaIMG from '../../assets/team/1.jpg';
import PrajaktaIMG from '../../assets/team/4.jpg';

const AboutUs = () => {
  return (
    <>
      <Link to="/">
        <i
          className={'fas fa-arrow-circle-left'}
          style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            fontSize: '10vh',
            color: 'white',
          }}
        ></i>
      </Link>
      <div
        className={localclasses.aboutus}
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 28%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Typography
          align="center"
          variant="h1"
          style={{
            color: 'white',
            paddingTop: '30px',
            fontFamily: 'poppins',
            fontWeight: '300',
            paddingBottom: '25px',
          }}
        >
          &nbsp;<span style={{ fontWeight: '800' }}>Query</span>lizer Creators
        </Typography>
        <div className={localclasses.cards}>
          <div style={{ marginRight: '10px' }}>
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
          <div style={{ marginRight: '10px' }}>
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
          <div style={{ marginRight: '10px' }}>
            <MediaCard
              name="Prajakta Mane"
              image={PrajaktaIMG}
              desc="A 3rd year undergrade at DYPCOE Pune India 💻|Data Science Enthusiast 👨‍💻|Always open for the opportunities.🙌"
              github="https://github.com/maneprajakta"
              linkedin="https://linkedin.com/in/maneprajakta"
              twitter="https://twitter.com/prajakta_mane_"
              gmail="mailto:prajakta916mane1@gmail.com"
              insta="https://www.instagram.com/prajakta_mane1/"
            />
          </div>
          <div style={{ marginRight: '10px' }}>
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
    </>
  );
};
export default AboutUs;
