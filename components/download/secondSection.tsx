import { Flex, Stack } from '@mantine/core';
import styles from 'styles/pages/download/index.module.scss';
import { PencilLine, Phone, PhoneCall, Star } from '@phosphor-icons/react';
import { Body, Heading } from 'components/typography';

const secondSection = () => {
  return (
    <div className={styles.bottomContainer2}>
      <Heading
        variant={0}
        color="#F2F3F7"
        style={{ lineHeight: 1.5, textAlign: 'center' }}
        fs={40}>
        Download
      </Heading>
      <Heading
        variant={3}
        color="#9198B0"
        style={{
          lineHeight: 1.5,
          paddingBottom: '32.59px',
          textAlign: 'center',
        }}>
        下载 Wolf Planet App，您可以：
      </Heading>
      <div className={styles.downloadContainer2Mobile}>
        <Flex gap={23.28}>
          <Stack className={styles.iconSectionMobile}>
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
              <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                与来自全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
              </Body>
            </Stack>
            <Flex className={styles.iconContainer}>
              <PencilLine
                size={24.83}
                className={styles.icon}
                style={{ marginTop: '30px' }}
              />
              <Heading variant={3} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
                Create
              </Heading>
            </Flex>
            <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
              创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
            </Body>
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
              <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                获取高质量的投资资讯和分析，助力您做出更明智的投资决策。
              </Body>
            </Stack>
          </Stack>
        </Flex>
      </div>
    </div>
  );
};

export default secondSection;
