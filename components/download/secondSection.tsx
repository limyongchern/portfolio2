import { Flex, Stack } from '@mantine/core';
import styles from './download.module.scss';
import { PencilLine, Phone, PhoneCall, Star } from '@phosphor-icons/react';
import { Body, Heading } from 'components/typography';

const secondSection = () => {
  return (
    <div className={styles.bottomContainer2}>
      <Heading
        variant={1}
        color="#F2F3F7"
        style={{ lineHeight: 1.5, textAlign: 'center' }}
        fs={36}>
        Download
      </Heading>
      <Body
        variant={8}
        color="#9198B0"
        fs={18}
        style={{
          lineHeight: 1.5,
          paddingBottom: '32.59px',
          textAlign: 'center',
        }}>
        下载 Wolf Planet App，您可以：
      </Body>
      <div className={styles.downloadContainer2Mobile}>
        <Stack className={styles.iconSectionMobile}>
          <Stack>
            <Flex className={styles.iconContainer}>
              <PhoneCall size={24.83} className={styles.icon} />
              <Body
                variant={1}
                fs={24}
                color="#F2F3F7"
                style={{ lineHeight: 1.5, paddingBottom: '20px' }}>
                沟通
              </Body>
            </Flex>
            <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
              与来自全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
            </Body>
            <Flex className={styles.iconContainer}>
              <PencilLine
                size={24.83}
                className={styles.icon}
                style={{ marginTop: '30px' }}
              />
              <Body
                variant={1}
                fs={24}
                color="#F2F3F7"
                style={{ lineHeight: 1.5 }}>
                创建
              </Body>
            </Flex>
            <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
              创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
            </Body>
            <Stack className={styles.iconSection}>
              <Flex className={styles.iconContainer}>
                <Star size={24.83} className={styles.icon} />
                <Body
                  variant={1}
                  color="#F2F3F7"
                  fs={24}
                  style={{ lineHeight: 1.5, paddingBottom: '20px' }}>
                  学习
                </Body>
              </Flex>
              <Body variant={1} color="#9198B0" style={{ lineHeight: 1.5 }}>
                获取高质量的投资资讯和分析，助力您做出更明智的投资决策。
              </Body>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default secondSection;
