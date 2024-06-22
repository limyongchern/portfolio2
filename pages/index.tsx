import { Card, Flex, Stack } from '@mantine/core';
import { GlobeHemisphereWest, Union } from '@phosphor-icons/react';
import BackgroundVideo from 'components/BackgroundVideo';
import Button from 'components/button';
import { Body, Heading } from 'components/typography';
import styles from 'styles/pages/index.module.scss';
import Image from 'next/image';
import backgroundImage from 'public/Bg1.png';
import section4vid from 'public/section4Vid.png';
import planetHome from 'public/Planet4Home.png';
import NFT from 'public/NFT.png';
import card4Icon from 'public/card4Icon.png';
import card2Icon from 'public/card2Icon.png';

interface IProps {}

const Home = (props: IProps) => {
  return (
    <div>
      <div className={styles.video}>
        <BackgroundVideo />
      </div>
      <div className={styles.titleColumn}>
        <Heading variant={0} color="white">
          Wolf Planet 星球：跨域投资交流平台
        </Heading>
        <Heading variant={3} className={styles.subheading}>
          Wolf Planet
          星球是基于区块链技术的去中心化投资交流平台，旨在为用户提供跨域、专业、高效的投资交流体验。
        </Heading>
      </div>
      <div className={styles.planetsSection}>
        <Heading variant={0} color="white" style={{ marginBottom: '-200px' }}>
          在这里，您可以
        </Heading>
        <div className={styles.cardsContainer}>
          <Card className={styles.card}>
            <GlobeHemisphereWest size={164} color={'#9198B0'} />
            <Heading variant={1} color="#F2F3F7">
              互动
            </Heading>
            <Heading
              variant={3}
              className={styles.cardWord}
              style={{ lineHeight: 1.5 }}>
              加入由不同投资主题形成的星球，与全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
            </Heading>
          </Card>
          <Card className={styles.card}>
            <Image src={card2Icon} alt="card 2 icon" color={'#9198B0'} />
            <Heading variant={1} color="#F2F3F7">
              组织
            </Heading>
            <Heading
              variant={3}
              className={styles.cardWord}
              style={{ lineHeight: 1.5 }}>
              创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
            </Heading>
          </Card>
          <Card className={styles.card}>
            <Image color="#9198B0" src={NFT} alt="NFT" />
            <Heading variant={1} color="#F2F3F7">
              NFT
            </Heading>
            <Heading
              variant={3}
              className={styles.cardWord}
              style={{ lineHeight: 1.5 }}>
              通过获取和持有
              NFT，解锁更多功能和权益，例如参与星球或部落的治理、获得专属投资资讯等。
            </Heading>
          </Card>
          <Card className={styles.card}>
            <Image src={card4Icon} alt="card 4" color={'#9198B0'} />
            <Heading variant={1} color="#F2F3F7">
              社群
            </Heading>
            <Heading
              variant={3}
              className={styles.cardWord}
              style={{ lineHeight: 1.5 }}>
              参与
              DAO社区自治组织的运营，共同管理星球或部落的运营，保障社区的公平公正。
            </Heading>
          </Card>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.backgroundWrapper}>
          <Image
            src={backgroundImage}
            alt="Background Image"
            className={styles.backgroundImage}
          />
        </div>
        <Flex className={styles.section3Content}>
          <Stack className={styles.section3Word}>
            <Heading variant={0} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
              Wolf Planet 星球汇聚了来自全球各地的专业投资
            </Heading>
            <Heading variant={3} color="#9198B0" style={{ lineHeight: 1.5 }}>
              Wolf Planet
              星球汇聚了来自全球各地的专业投资者和分析师，为您提供高质量的投资资讯和分析，助力您做出更明智的投资决策。
            </Heading>
          </Stack>
          <Image
            src={planetHome}
            alt="Planet"
            className={styles.section3Planet}
          />
        </Flex>
      </div>
      <div className={styles.section4}>
        <div className={styles.section4p2}>
          <Stack>
            <Heading variant={0} color={'#F2F3F7'}>
              Wolf Planet space for video
            </Heading>
            <Heading
              variant={3}
              color={'#9198B0'}
              style={{ padding: '24px 0px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Heading>
            <Image src={section4vid} alt="Video" className={styles.sec4Vid} />
          </Stack>
        </div>
      </div>
      <div className={styles.section5}>
        <div className={styles.section5p2}>
          <Heading variant={0} color={'#F2F3F7'}>
            CTA text to contact or smth
          </Heading>
          <Heading variant={3} color={'#9198B0'} style={{ paddingTop: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Heading>
          <Button className={styles.button}>
            <Body variant={3} className={styles.buttonText}>
              Contact Us
            </Body>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
