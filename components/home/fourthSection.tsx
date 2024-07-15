import { Body, Heading } from 'components/typography';
import styles from './home.module.scss';
import Image from 'next/image';
import { Stack } from '@mantine/core';
import section4vid from 'public/videoImageMobile.png';

const fourthSection = () => {
  return (
    <div className={styles.section4}>
      <div className={styles.section4p2}>
        <Stack>
          <Heading
            variant={0}
            color={'#F2F3F7'}
            style={{ lineHeight: 1.5 }}
            fs={36}>
            Wolf Planet space for video
          </Heading>
          <Body
            variant={1}
            fw={700}
            color={'#9198B0'}
            style={{ padding: '24px 0px', lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Body>
          <Image src={section4vid} alt="Video" className={styles.sec4Vid} />
        </Stack>
      </div>
    </div>
  );
};

export default fourthSection;
