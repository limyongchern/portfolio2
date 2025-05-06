import { useState } from 'react';

import FirstSection from 'components/home/firstSection';
import SecondSection from 'components/home/secondSection';
import ThirdSection from 'components/home/thirdSection';

//image for FirstSection
import Yc from 'public/YC2.jpg';

//images for SecondSection
import Timeline1 from 'public/JOGET.jpg';
import Timeline4 from 'public/MonashGrad.jpeg';
import Timeline2 from 'public/SunwayGraduation.jpg';
import Timeline3 from 'public/THC.svg';
import Timeline5 from 'public/Vsys.jpg';

//images for ThirdSection
import ThirdSection1 from 'public/JogetLogo.svg';
import ThirdSection2 from 'public/THC.svg';
import ThirdSection3 from 'public/Vsys.svg';

import ContactMe from 'components/common/ContactMe';
import { isMobile } from 'react-device-detect';
import AboutUs from './about';

const FirstSectionData = {
  headline: `Hi I'm Yong Chern`,
  headline1: 'Hi',
  headline2: `I'm Yong Chern`,
  subheader: 'Welcome To My Portfolio',
  homeHeroImage: Yc,
};

const SecondSectionData = {
  headline: 'My Timeline',
  cards: [
    {
      id: 1,
      title: '1',
      description: 'Internship At Joget.inc',
      image: Timeline1,
    },
    {
      id: 2,
      title: '2',
      description:
        'Graduated From Sunway University With Bachelors Degree in Computer Science',
      image: Timeline2,
    },
    {
      id: 3,
      title: '3',
      description: `Did my second internship in The Hacker's Collective`,
      image: Timeline3,
    },
    {
      id: 4,
      title: '4',
      description: `Graduated From Monash University With Master's Degree In Business Information Systems`,
      image: Timeline4,
    },
    {
      id: 5,
      title: '5',
      description: `Start My First Job in V-Systems`,
      image: Timeline5,
    },
  ],
};

const ThirdSectionData = {
  headline: 'Working Experience',

  bottomCards: [
    {
      id: 1,
      title: 'Joget',
      bulletPoints: [
        'Contributed in helping on the creation of plugins using Java for their system.',
        'Helped in making tutorial guides on how to make use of the Joget System.',
      ],
      image: ThirdSection1,
    },
    {
      id: 2,
      title: 'The Hacker’s Collective',
      bulletPoints: [
        'Contributed in helping on fixing bugs in their website projects using Vue.js and Tailwind.',
        'Helped in making new webpages for their projects.',
        'Helped in designing webpages through Figma.',
      ],
      image: ThirdSection2,
    },
    {
      id: 3,
      title: 'V-Systems',
      bulletPoints: [
        'Developed websites, operator websites, web apps and using frameworks such as NextJs and Mantine library',
        'Developed PWA (Progressive Web App) using Vite + React.',
        'Practiced Agile methodology, collaborating with cross-functional teams.',
        'Engaged with product managers and QAs to ensure smooth implementation of updates and bug fixes, fostering seamless communication and project progression.',
      ],
      image: ThirdSection3,
    },
  ],
};

const Home = () => {
  return (
    <>
      {!isMobile && (
        <div>
          <div id="first">
            <FirstSection data={FirstSectionData} />
          </div>
          <div id="about">
            <AboutUs />
          </div>
          <div id="timeline">
            <SecondSection data={SecondSectionData} />
          </div>
          <div id="past_experience">
            <ThirdSection data={ThirdSectionData} />
          </div>
          <div id="contact_me">
            <ContactMe />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
