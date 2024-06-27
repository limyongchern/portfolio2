import BackgroundVideo from 'components/BackgroundVideo';
import styles from '../../styles/pages/download/index.module.scss';
import { Body, Heading } from 'components/typography';
import Image from 'next/image';
import { Flex, Stack } from '@mantine/core';
import Button from 'components/button';
import Playstore from 'public/playstore.png';
import Apple from 'public/apple.png';
import Sample from 'public/Cards-Landing.png';

const firstSection = () => {
  return (
    <>
      <div className={styles.topContainer2}>
        <Stack className={styles.downloadContentMobile}>
          <Heading
            variant={1}
            fw={700}
            color="#F2F3F7"
            style={{ lineHeight: 1.5 }}>
            加入 Wolf Planet 星球，开启您的全球投资之旅！
          </Heading>
          <Body
            variant={1}
            color="#9198B0"
            fw={700}
            style={{ lineHeight: 1.5, padding: '24px 0px' }}>
            立即下载 Wolf Planet App：
          </Body>

          <Stack style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image src={Playstore} alt="play store" />
            <Image src={Apple} alt="apple" />
          </Stack>
          <Image src={Sample} alt="sample" className={styles.sampleImage} />
          <div>
            <Heading
              fs={36}
              variant={1}
              color="#F2F3F7"
              className={styles.headingMobile}>
              Wolf Planet 星球，您的全球投资新天地！
            </Heading>
            <Body
              variant={1}
              fw={700}
              color="#9198B0"
              className={styles.subheadingMobile}>
              Linear Asks is a new take on intake. Submit requests directly from
              Slack and automatically send them to the relevant team in Linear.
              Eliminate cluttered channels and reduce context switching.
            </Body>
          </div>

          <Button className={styles.Button2}>Download</Button>
        </Stack>
      </div>
    </>
  );
};

export default firstSection;
