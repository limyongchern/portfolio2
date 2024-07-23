import { Flex, Stack } from '@mantine/core';
import styles from './index.module.scss';
import Playstore from 'public/playstore.png';
import Apple from 'public/apple.png';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import Sample from 'public/Cards-Landing.png';
import Button from 'components/button';
import Download2 from 'public/Download2.png';
import { PencilLine, Phone, PhoneCall, Star } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import FirstSection from 'components/download/firstSection';
import SecondSection from 'components/download/secondSection';

const Download = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 835) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    };
  }, [width]);
  return (
    <>
      {!isMobile && (
        <>
          <div className={styles.topContainer}>
            <Stack className={styles.downloadContent}>
              <div style={{ maxWidth: 706.667 }}>
                <Heading
                  variant={8}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  加入 Wolf Planet 星球，开启您的全球投资之旅！
                </Heading>
                <Body
                  variant={1}
                  color="#9198B0"
                  style={{ lineHeight: 1.5, padding: '24px 0px' }}>
                  立即下载 Wolf Planet App：
                </Body>

                <Flex
                  gap={24}
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={Playstore} alt="play store" />
                  <Image src={Apple} alt="apple" />
                </Flex>
              </div>
              <div>
                <Image src={Sample} alt="sample" className={styles.image} />

                <Heading
                  fs={42}
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, padding: '0px 106px' }}>
                  Wolf Planet 星球，您的全球投资新天地！
                </Heading>
                <Body
                  fs={20}
                  variant={1}
                  color="#9198B0"
                  style={{
                    lineHeight: 1.5,
                    padding: '20px 150px',
                    textAlign: 'center',
                    margin: '0px auto',
                    maxWidth: '800px',
                  }}>
                  Linear Asks is a new take on intake. Submit requests directly
                  from Slack and automatically send them to the relevant team in
                  Linear. Eliminate cluttered channels and reduce context
                  switching.
                </Body>
              </div>

              <Button className={styles.Button2}>Download</Button>
            </Stack>
          </div>
          <div className={styles.bottomContainer}>
            <Stack align="center" style={{}}>
              <Heading
                variant={0}
                color="#F2F3F7"
                style={{ lineHeight: 1.5 }}
                fs={40}>
                Download
              </Heading>
              <Body
                variant={1}
                color="#9198B0"
                style={{ lineHeight: 1.5, paddingBottom: '32.59px' }}>
                下载 Wolf Planet App，您可以：
              </Body>

              <div className={styles.downloadContainer2}>
                <Flex gap={23.28}>
                  <Stack className={styles.iconSection}>
                    <Stack>
                      <Flex className={styles.iconContainer}>
                        <PhoneCall size={24.83} className={styles.icon} />
                        <Heading
                          variant={3}
                          color="#F2F3F7"
                          style={{ lineHeight: 1.5, paddingBottom: '20px' }}>
                          Communicate
                        </Heading>
                      </Flex>
                      <Body
                        variant={1}
                        color="#9198B0"
                        style={{ lineHeight: 1.5 }}>
                        与来自全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
                      </Body>
                    </Stack>
                    <Flex className={styles.iconContainer}>
                      <PencilLine
                        size={24.83}
                        className={styles.icon}
                        style={{ marginTop: '30px' }}
                      />
                      <Heading
                        variant={3}
                        color="#F2F3F7"
                        style={{ lineHeight: 1.5 }}>
                        Create
                      </Heading>
                    </Flex>
                    <Body
                      variant={1}
                      color="#9198B0"
                      style={{ lineHeight: 1.5 }}>
                      创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
                    </Body>
                  </Stack>
                  <Stack className={styles.iconSection}>
                    <Stack>
                      <Flex className={styles.iconContainer}>
                        <PhoneCall size={24.83} className={styles.icon} />
                        <Heading
                          variant={3}
                          color="#F2F3F7"
                          style={{ lineHeight: 1.5, paddingBottom: '20px' }}>
                          Communicate
                        </Heading>
                      </Flex>
                      <Body
                        variant={1}
                        color="#9198B0"
                        style={{ lineHeight: 1.5 }}>
                        与来自全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
                      </Body>
                    </Stack>
                    <Flex className={styles.iconContainer}>
                      <PencilLine
                        size={24.83}
                        className={styles.icon}
                        style={{ marginTop: '30px' }}
                      />
                      <Heading
                        variant={3}
                        color="#F2F3F7"
                        style={{ lineHeight: 1.5 }}>
                        Create
                      </Heading>
                    </Flex>
                    <Body
                      variant={1}
                      color="#9198B0"
                      style={{ lineHeight: 1.5 }}>
                      创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
                    </Body>
                  </Stack>
                  <Stack className={styles.iconSection}>
                    <Flex className={styles.iconContainer}>
                      <Star size={24.83} className={styles.icon} />
                      <Heading
                        variant={3}
                        color="#F2F3F7"
                        style={{ lineHeight: 1.5, paddingBottom: '20px' }}>
                        Obtain
                      </Heading>
                    </Flex>
                    <Body
                      variant={1}
                      color="#9198B0"
                      style={{ lineHeight: 1.5 }}>
                      获取高质量的投资资讯和分析，助力您做出更明智的投资决策。
                    </Body>
                  </Stack>
                </Flex>
              </div>
            </Stack>
          </div>
        </>
      )}
      {isMobile && (
        <>
          <FirstSection />
          <SecondSection />
        </>
      )}
    </>
  );
};

export default Download;
