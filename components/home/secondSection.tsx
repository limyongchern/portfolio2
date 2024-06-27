import NFT from 'public/NFT.png';
import card4Icon from 'public/card4Icon.png';
import card2Icon from 'public/card2Icon.png';
import card1Icon from 'public/GlobeHemisphereWest.png';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import styles from '../../styles/pages/index.module.scss';
import { Card, Flex, Stack } from '@mantine/core';

const secondSection = () => {
  return (
    <div className={styles.planetsSection}>
      <Heading
        variant={0}
        color="white"
        style={{ marginBottom: '-200px' }}
        fs={36}
        fw={700}>
        在这里，您可以
      </Heading>
      <div className={styles.section2}>
        <Card className={styles.card}>
          <Image
            src={card1Icon}
            alt="card 1 icon"
            width={164}
            height={164}
            color={'#9198B0'}
          />
          <Heading variant={2} color="#F2F3F7" fw={700}>
            互动
          </Heading>
          <Body
            variant={1}
            fw={700}
            className={styles.cardWord}
            style={{ lineHeight: 1.5 }}>
            加入由不同投资主题形成的星球，与全球各地的投资者交流互动，分享观点、进行讨论、发布文章等。
          </Body>
        </Card>
        <Card className={styles.card}>
          <Image
            src={card2Icon}
            alt="card 2 icon"
            color={'#9198B0'}
            width={133}
            height={133}
          />
          <Heading
            variant={2}
            color="#F2F3F7"
            fw={700}
            style={{ paddingTop: '16px' }}>
            组织
          </Heading>
          <Body
            variant={1}
            fw={700}
            className={styles.cardWord}
            style={{ lineHeight: 1.5 }}>
            创建或加入由志同道合的用户组成的部落，根据兴趣爱好、投资理念等因素进行划分，打造专属的投资交流空间。
          </Body>
        </Card>
        <Card className={styles.card}>
          <Image color="#9198B0" src={NFT} alt="NFT" width={310} height={164} />
          <Heading variant={2} color="#F2F3F7" fw={700}>
            NFT
          </Heading>
          <Body
            variant={1}
            fw={700}
            className={styles.cardWord}
            style={{ lineHeight: 1.5 }}>
            通过获取和持有
            NFT，解锁更多功能和权益，例如参与星球或部落的治理、获得专属投资资讯等。
          </Body>
        </Card>
        <Card className={styles.card}>
          <Image
            src={card4Icon}
            alt="card 4"
            color={'#9198B0'}
            width={164}
            height={164}
          />
          <Heading variant={2} color="#F2F3F7" fw={700}>
            社群
          </Heading>
          <Body
            variant={1}
            fw={700}
            className={styles.cardWord}
            style={{ lineHeight: 1.5 }}>
            参与
            DAO社区自治组织的运营，共同管理星球或部落的运营，保障社区的公平公正。
          </Body>
        </Card>
      </div>
    </div>
  );
};
export default secondSection;
