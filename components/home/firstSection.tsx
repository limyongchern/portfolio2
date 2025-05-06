import styles from './firstSection.module.scss';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HomeHeroImage from 'public/YC2.jpg';

const FirstSection = ({ data }: any) => {
  const Typewriter = ({
    srcString,
    srcString2,
    minTypingDelay = 50,
    typingDelayVariation = 100,
  }: any) => {
    const [content, setContent] = useState('');
    const [content2, setContent2] = useState('');

    useEffect(() => {
      const cursorPosition = content.length;
      const typingDelay =
        0 | (Math.random() * typingDelayVariation + minTypingDelay);

      if (cursorPosition == srcString.length) return;

      const timer = setTimeout(() => {
        setContent(content + srcString[cursorPosition]);
        clearTimeout(timer);
      }, typingDelay);
    }, [content]);

    useEffect(() => {
      if (content === srcString) {
        const cursorPosition = content2.length;
        const typingDelay =
          0 | (Math.random() * typingDelayVariation + minTypingDelay);

        if (cursorPosition == srcString2.length) return;

        const timer = setTimeout(() => {
          setContent2(content2 + srcString2[cursorPosition]);
          clearTimeout(timer);
        }, typingDelay);
      }
    }, [content, content2]);

    return (
      <div style={{ height: 150 }}>
        <>
          <Heading
            color="#F2F3F7"
            variant={9}
            style={{ marginTop: 0, width: 550, lineHeight: 1.1 }}>
            {content} {srcString !== content && <span>|</span>}
          </Heading>
          <Heading
            color="#F2F3F7"
            variant={9}
            style={{ marginTop: 0, width: 650, lineHeight: 1.1 }}>
            {content2}{' '}
            {srcString2 !== content2 && content === srcString && <span>|</span>}
          </Heading>
        </>
      </div>
    );
  };

  return (
    <>
      <div id="first-section" className={styles.container}>
        <div className={styles.widthContainer}>
          <span
            style={{
              textAlign: 'start',
              marginBottom: 230,
              marginLeft: 60,
            }}>
            <Typewriter
              srcString={data.headline1}
              srcString2={data.headline2}
            />

            <BodyDmsans
              color="#9198B0"
              variant={2}
              style={{ marginTop: 5, width: 650 }}>
              {data.subheader}
            </BodyDmsans>
          </span>
          <Image
            src={HomeHeroImage}
            className={styles.homeHeroImagePhone}
            style={{ marginLeft: 0 }}
            alt="wolfavatar"
          />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
