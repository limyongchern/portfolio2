import styles from './firstSection.module.scss';
import { useRouter } from 'next/router';
import { Body, BodyBold, BodyDmsans } from 'components/typography';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FirstSection = ({ data }: any) => {
  const router = useRouter();

  const Typewriter = ({
    srcString,
    srcString2,
    minTypingDelay = 100,
    typingDelayVariation = 200,
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
        <BodyBold color="#F2F3F7" variant={11} style={{ marginTop: 0 }}>
          {content} {srcString !== content && <span>|</span>}
        </BodyBold>
        <BodyBold color="#F2F3F7" variant={11} style={{ marginTop: 0 }}>
          {content2}{' '}
          {srcString2 !== content2 && content === srcString && <span>|</span>}
        </BodyBold>
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
            {/* <BodyBold color="#F2F3F7" variant={11} style={{ marginTop: 0 }}>
              {data.headline1}
            </BodyBold>
            <BodyBold
              color="#F2F3F7"
              variant={11}
              style={{ marginTop: 0, width: 500, whiteSpace: 'nowrap' }}>
              {data.headline2}
            </BodyBold> */}
            <Typewriter
              srcString={data.headline1}
              srcString2={data.headline2}
            />
            <Body
              color="#9198B0"
              variant={8}
              style={{ marginTop: 15, width: 510 }}>
              {data.subheader}
            </Body>
            {/* <BodyDmsans
              color="#9198B0"
              variant={1}
              style={{ marginTop: 15, width: 510 }}>
              {data.subheader}
            </BodyDmsans> */}
          </span>
          <Image
            src={data.homeHeroImage}
            className={styles.homeHeroImage}
            alt="wolfavatar"
          />
          {/* <div className={styles.homeHeroVideo}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.homeHeroVideo}>
              <source src="/Home/Home-Hero-Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FirstSection;
