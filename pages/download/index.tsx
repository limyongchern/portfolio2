import { Flex, Stack } from '@mantine/core';
import styles from 'styles/pages/download/index.module.scss';
import Download1 from 'public/Download 1.png';
import Playstore from 'public/playstore.png';
import Apple from 'public/apple.png';
import Image from 'next/image';
import { Heading } from 'components/typography';
import Sample from 'public/Cards-Landing.png';
import Button from 'components/button';
import Download2 from 'public/Download2.png';
import { PencilLine, Phone, PhoneCall, Star } from '@phosphor-icons/react';

const Download = () => {
  return (
    <>
      <div className={styles.downloadContainer}>
        <div className={styles.backgroundWrapper}>
          <Image src={Download1} alt="wallpaper1" />
        </div>
        <Stack className={styles.downloadContent}>
          <Heading variant={0} color="#F2F3F7">
            加入 Wolf Planet 星球，开启您的全球投资之旅！
          </Heading>
          <Heading variant={3} color="#9198B0">
            立即下载 Wolf Planet App：
          </Heading>
          <Flex>
            <Image src={Playstore} alt="play store" />
            <Image src={Apple} alt="apple" />
          </Flex>
          <Image src={Sample} alt="sample" />
          <Heading variant={1} color="#F2F3F7">
            Wolf Planet 星球，您的全球投资新天地！
          </Heading>
          <Heading variant={3} color="#9198B0">
            Linear Asks is a new take on intake. Submit requests directly from
            Slack and automatically send them to the relevant team in Linear.
            Eliminate cluttered channels and reduce context switching.
          </Heading>
          <Button className={styles.button}>Download</Button>
        </Stack>
      </div>
      <div className={styles.downloadContainer}>
        <div className={styles.backgroundWrapper}>
          <Image src={Download2} alt="Background 2" />
        </div>
        <div className={styles.downloadContainer2}>
          <Star size={32} color="#50C7BA" />
          <PhoneCall size={32} color="#50C7BA" />
          <PhoneCall size={32} color="#50C7BA" />
          <PencilLine size={32} color="#50C7BA" />
          <PencilLine size={32} color={'#50C7BA'} />
        </div>
      </div>
    </>
  );
};

export default Download;
