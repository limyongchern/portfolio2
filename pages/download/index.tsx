import { Flex, Stack } from '@mantine/core';
import styles from 'styles/pages/download/index.module.scss';
import Download1 from 'public/Download 1.png';
import Playstore from 'public/playstore.png';
import Apple from 'public/apple.png';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
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
          <div style={{ width: 900 }}>
            <Heading variant={0} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
              加入 Wolf Planet 星球，开启您的全球投资之旅！
            </Heading>
            <Heading
              variant={3}
              color="#9198B0"
              style={{ lineHeight: 1.5, padding: '24px 0px' }}>
              立即下载 Wolf Planet App：
            </Heading>

            <Flex
              gap={24}
              style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image src={Playstore} alt="play store" />
              <Image src={Apple} alt="apple" />
            </Flex>
          </div>
          <Image src={Sample} alt="sample" />
          <Heading variant={1} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
            Wolf Planet 星球，您的全球投资新天地！
          </Heading>
          <Heading variant={3} color="#9198B0" style={{ lineHeight: 1.5 }}>
            Linear Asks is a new take on intake. Submit requests directly from
            Slack and automatically send them to the relevant team in Linear.
            Eliminate cluttered channels and reduce context switching.
          </Heading>
          <Button className={styles.Button2}>Download</Button>
        </Stack>
      </div>
      <div className={styles.downloadContainer}>
        <div className={styles.backgroundWrapper}>
          <Image src={Download2} alt="Background 2" />
        </div>

        <Stack
          align="center"
          style={{ paddingBottom: '42px', paddingTop: '108px' }}>
          <Heading variant={0} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
            Download
          </Heading>
          <Heading variant={3} color="#9198B0" style={{ lineHeight: 1.5 }}>
            下载 Wolf Planet App，您可以：
          </Heading>
        </Stack>

        <div className={styles.downloadContainer2}>
          <Flex gap={30}>
            <Stack className={styles.iconSection}>
              <Stack>
                <Flex className={styles.iconContainer}>
                  <PhoneCall size={32} className={styles.icon} />
                  <Heading
                    variant={2}
                    color="#F2F3F7"
                    style={{ lineHeight: 1.5 }}>
                    Communicate
                  </Heading>
                </Flex>
                <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                  与来自全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
                </Body>
              </Stack>
              <Flex className={styles.iconContainer}>
                <PencilLine
                  size={32}
                  className={styles.icon}
                  style={{ marginTop: '30px' }}
                />
                <Heading
                  variant={2}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  Create
                </Heading>
              </Flex>
              <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
              </Body>
            </Stack>
            <Stack className={styles.iconSection}>
              <Stack>
                <Flex className={styles.iconContainer}>
                  <PhoneCall size={32} className={styles.icon} />
                  <Heading
                    variant={2}
                    color="#F2F3F7"
                    style={{ lineHeight: 1.5 }}>
                    Communicate
                  </Heading>
                </Flex>
                <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                  与来自全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
                </Body>
              </Stack>
              <Flex className={styles.iconContainer}>
                <PencilLine
                  size={32}
                  className={styles.icon}
                  style={{ marginTop: '30px' }}
                />
                <Heading
                  variant={2}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  Create
                </Heading>
              </Flex>
              <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
              </Body>
            </Stack>
            <Stack className={styles.iconSection}>
              <Flex className={styles.iconContainer}>
                <Star size={32} className={styles.icon} />
                <Heading
                  variant={2}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  Obtain
                </Heading>
              </Flex>
              <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                获取高质量的投资资讯和分析，助力您做出更明智的投资决策。
              </Body>
            </Stack>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Download;
