import React from 'react';
import styles from '../../styles/pages/community/index.module.scss';
import { Flex, Grid, Stack } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import WolfTooth from '../../public/Coin.svg';
import WolfToken from '../../public/WolfCoin.svg';
import Image from 'next/image';
const Community = () => {
  return (
    <div>
      <div id="first-section" className={styles.container}>
        <Stack align="center" justify="center" mb={'24px'}>
          <span style={{ textAlign: 'center' }}>
            <Heading color="#F2F3F7" variant={6} style={{ display: 'inline' }}>
              Wolf Planet{' '}
            </Heading>
            <Body color="#F2F3F7" variant={6} style={{ display: 'inline' }}>
              星球：跨域投资交流平台，探索七星奇遇
            </Body>
          </span>
        </Stack>
        <Stack align="center" justify="center">
          <span style={{ textAlign: 'center' }}>
            <Heading color="#9198B0" variant={7} style={{ display: 'inline' }}>
              Wolf Planet{' '}
            </Heading>
            <Body color="#9198B0" variant={7} style={{ display: 'inline' }}>
              星球是一个基于区块链技术的去中心化投资交流平台，汇聚了来自全球各地的专业投资者和分析师，为您提供高质量的投资资讯和分析，助力您做出更明智的投资决策。
            </Body>
          </span>
        </Stack>
      </div>
      <div id="second-section" className={styles.containerSecondSection}>
        <Flex p={'100px 250px'} gap={'32px'}>
          <div className={styles.cardContainer}>
            <span style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Heading
                color="#F2F3F7"
                variant={6}
                style={{ display: 'inline' }}
                fs={'42px'}
                lh={'normal'}
                fw={400}>
                Wolf Planet{' '}
              </Heading>
              <Body
                color="#F2F3F7"
                variant={6}
                style={{ display: 'inline' }}
                fs={'42px'}
                lh={'normal'}
                fw={700}>
                星球的玩法
              </Body>
            </span>
            <Body
              color="#9198B0"
              variant={6}
              style={{ display: 'inline' }}
              fs={'20px'}
              lh={'normal'}
              fw={700}>
              双代币体系是一种在区块链项目中常见的经济模型，其中包含两种不同的代币。狼牙是平台上的股票币，狼牙的主要功能是用于平台的分红。Wolftoken,狼币是平台的通用货币，可以用于购买平台上的商品和服务。
              在狼星球上，用户可以使用狼币购买课程、铸造NFT，或进行其他交易。狼币具有现实世界的价值，可以在虚拟货币交易所上兑换成法币或其他资产。
              双代币体系的优势在于可以实现不同的功能分离，并为用户提供不同的激励机制。狼牙作为激励用户在平台上的发展，而狼币的支付功能可以方便用户进行交易。
            </Body>
          </div>
          <Stack spacing={'36px'}>
            <div className={styles.cardSubContainer}>
              <Flex gap={'12px'} align={'center'}>
                <Image
                  src={WolfTooth}
                  alt="WolfTooth"
                  className={styles.icon}
                />
                <Body
                  color="#F2F3F7"
                  variant={6}
                  style={{ display: 'inline' }}
                  fs={'42px'}
                  lh={'normal'}
                  fw={700}>
                  狼牙
                </Body>
              </Flex>
              <Body
                color="#9198B0"
                variant={6}
                style={{ display: 'inline' }}
                fs={'20px'}
                lh={'normal'}
                fw={700}>
                狼财会根据用户持有的狼牙比例进行Wolftoken空投。
              </Body>
            </div>
            <div className={styles.cardSubContainer}>
              <Flex gap={'12px'} align={'center'}>
                <Image
                  src={WolfToken}
                  alt="WolfToken"
                  className={styles.icon}
                />
                <Body
                  color="#F2F3F7"
                  variant={6}
                  style={{ display: 'inline' }}
                  fs={'42px'}
                  lh={'normal'}
                  fw={700}>
                  狼币
                </Body>
              </Flex>
              <Body
                color="#9198B0"
                variant={6}
                style={{ display: 'inline' }}
                fs={'20px'}
                lh={'normal'}
                fw={700}>
                支付：用户可以使用狼币购买课程、铸造NFT，或进行其他交易。
              </Body>
            </div>
          </Stack>
        </Flex>
      </div>
      <div id="third-section" className={styles.containerThirdSection}>
        <Stack align="center" justify="center" spacing={0} p={'0 420px'}>
          <span style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Heading
              color="#F2F3F7"
              variant={6}
              fw={400}
              lh={'normal'}
              fs={'42px'}
              style={{ display: 'inline' }}>
              Dao{' '}
            </Heading>
            <Body
              color="#F2F3F7"
              variant={6}
              fw={700}
              lh={'normal'}
              fs={'42px'}
              style={{ display: 'inline' }}>
              特色
            </Body>
          </span>
          <Body
            color="#9198B0"
            variant={6}
            fw={700}
            lh={'normal'}
            fs={'20px'}
            style={{ textAlign: 'center' }}>
            狼星球的星球、部落/机构架构是基于 DAO
            的去中心化治理模式。每一个星球代表着一个投资主题，如股票星球、虚拟货币星球等。每一个星球都是一个独立的
            DAO，拥有自己的治理权利。
          </Body>
        </Stack>
        <Flex align="center" justify="center" mt={'70px'}>
          <Grid gutter="xl">
            <Grid.Col span={4}>
              <div className={styles.cardDarkContainer}>
                <Body
                  color="#F2F3F7"
                  variant={6}
                  fw={700}
                  lh={'normal'}
                  fs={'42px'}
                  style={{ marginBottom: '24px' }}>
                  星球
                </Body>
                <Body
                  color="#9198B0"
                  variant={6}
                  fw={700}
                  lh={'normal'}
                  fs={'20px'}>
                  星球是狼星球的基础单位，是用户参与投资交流、创作内容、打造个人
                  IP
                  形象等活动的主要场所。每一个星球都有自己的治理机制，用户可以通过投票、提案等方式参与星球的治理。
                </Body>
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div className={styles.cardDarkContainer}>
                <Body
                  color="#F2F3F7"
                  variant={6}
                  fw={700}
                  lh={'normal'}
                  fs={'42px'}
                  style={{ marginBottom: '24px' }}>
                  机构
                </Body>
                <Body
                  color="#9198B0"
                  variant={6}
                  fw={700}
                  lh={'normal'}
                  fs={'20px'}>
                  部落是星球内的子单位，是一个由志同道合用户组成的社区。部落可以根据用户的兴趣爱好、投资理念等因素进行划分。部落可以制定自己的规则和规范，自主管理部落的内部事务。
                </Body>
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div className={styles.cardDarkContainer}>
                <Body
                  color="#F2F3F7"
                  variant={6}
                  fw={700}
                  lh={'normal'}
                  fs={'42px'}
                  style={{ marginBottom: '24px' }}>
                  星球
                </Body>
                <Body
                  color="#9198B0"
                  variant={6}
                  fw={700}
                  lh={'normal'}
                  fs={'20px'}>
                  机构与部落是同等架构，是由现实存在的机构建立的私有单位，其属性为私有单位。用户需要在平台上核实身份后，其所属机构会在SBT上显示，则用户在加入机构时可以以SBT作审核核实
                </Body>
              </div>
            </Grid.Col>
          </Grid>
        </Flex>
      </div>
    </div>
  );
};

export default Community;
