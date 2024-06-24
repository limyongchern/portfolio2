import React, { useEffect, useState } from 'react';
import styles from '../../styles/pages/community/index.module.scss';
import { Flex, Grid, Stack, Transition } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import WolfTooth from '../../public/Coin.svg';
import WolfToken from '../../public/WolfCoin.svg';
import Image from 'next/image';
import Planet1 from '../../public/Planet/Planet_1.png';
import Planet2 from '../../public/Planet/Planet_2.png';
import Planet3 from '../../public/Planet/Planet_3.png';
import Planet4 from '../../public/Planet/Planet_4.png';
import Planet5 from '../../public/Planet/Planet_5.png';
import Planet6 from '../../public/Planet/Planet_6.png';
import Planet7 from '../../public/Planet/Planet_7.png';
import Planet1Big from '../../public/Planet/BigPlanet_1.png';
import Planet2Big from '../../public/Planet/BigPlanet_2.png';
import Planet3Big from '../../public/Planet/BigPlanet_3.png';
import Planet4Big from '../../public/Planet/BigPlanet_4.png';
import Planet5Big from '../../public/Planet/BigPlanet_5.png';
import Planet6Big from '../../public/Planet/BigPlanet_6.png';
import Planet7Big from '../../public/Planet/BigPlanet_7.png';

const Community = () => {
  const [activePlanet, setActivePlanet] = useState<number>(1);
  const [transitioning, setTransitioning] = useState<boolean>(true);

  // useEffect(() => {
  //   if (transitioning) {
  //     const timeout = setTimeout(() => {
  //       setTransitioning(false);
  //     }, 500); // Match this duration with your CSS transition duration
  //     return () => clearTimeout(timeout);
  //   }
  // }, [transitioning]);

  const handlePlanetChange = (index: number) => {
    setTransitioning(false); // Set transitioning to false immediately

    setTimeout(() => {
      setActivePlanet(index + 1);
    }, 500); // Adjust the duration if necessary
    // Set a short timeout to set transitioning to true again
    setTimeout(() => {
      setTransitioning(true);
    }, 500); // Adjust the duration if necessary
  };

  console.log(transitioning);
  const PlanetList = [
    {
      name: '瑞金星球',
      planet: Planet1,
    },
    {
      name: '璀璨星球',
      planet: Planet2,
    },
    {
      name: '汇神星球',
      planet: Planet3,
    },
    {
      name: '时光星球',
      planet: Planet4,
    },
    {
      name: '虚幻星球',
      planet: Planet5,
    },
    {
      name: '债魔星球',
      planet: Planet6,
    },
    {
      name: '繁荣星球',
      planet: Planet7,
    },
  ];

  console.log(activePlanet);
  return (
    <>
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
      <div id="fourth-section" className={styles.containerFourthSection}>
        <Stack align="center" justify="center" spacing={0} p={'50px 420px'}>
          <span style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Body
              color="#F2F3F7"
              variant={6}
              fw={700}
              lh={'normal'}
              fs={'42px'}
              style={{ display: 'inline' }}>
              七星奇遇：探索{' '}
            </Body>
            <Heading
              color="#F2F3F7"
              variant={6}
              fw={600}
              lh={'normal'}
              fs={'42px'}
              style={{ display: 'inline' }}>
              Wolf Planet{' '}
            </Heading>
            <Body
              color="#F2F3F7"
              variant={6}
              fw={700}
              lh={'normal'}
              fs={'42px'}
              style={{ display: 'inline' }}>
              星球
            </Body>
          </span>
          <Body
            color="#9198B0"
            variant={6}
            fw={700}
            lh={'normal'}
            fs={'20px'}
            style={{ textAlign: 'center' }}>
            Wolf Planet
            星球是一个由七个独具特色的星球组成的神秘社区，每个星球都拥有独特的属性和玩法。
          </Body>
        </Stack>

        <div
          style={{
            position: 'absolute',
            padding: '0 80px',
            marginTop: '-100px',
            zIndex: 4,
          }}>
          {PlanetList.map((item, index) => (
            <Flex
              key={index}
              align={'center'}
              mb={'18px'}
              style={{ cursor: 'pointer' }}
              onClick={() => handlePlanetChange(index)}>
              <Image
                src={item.planet}
                alt=""
                className={styles.planetSize}
                style={
                  activePlanet === index + 1 ? { opacity: 1 } : { opacity: 0.5 }
                }
              />
              <Body
                color={activePlanet === index + 1 ? '#F2F3F7' : '#BBCDF5'}
                variant={6}
                fw={700}
                lh={'normal'}
                fs={'15px'}>
                {index + 1}. {item.name}
              </Body>
            </Flex>
          ))}
        </div>
        <Transition
          mounted={transitioning}
          transition={'slide-up'}
          duration={200}
          timingFunction="ease">
          {(styles) => (
            <div style={{ position: 'relative', ...styles }}>
              {activePlanet === 1 && (
                <Stack align="center" justify="center" spacing={'24px'}>
                  <Body
                    color="#F2F3F7"
                    variant={6}
                    fw={600}
                    lh={'normal'}
                    fs={'42px'}
                    style={{ textAlign: 'center' }}>
                    瑞金星球：贵金属星球
                  </Body>
                  <Body
                    color="#9198B0"
                    variant={6}
                    fw={700}
                    lh={'normal'}
                    fs={'20px'}
                    style={{ textAlign: 'center' }}>
                    表面布满金、银等珍贵金属矿石，是宇宙中最珍贵的资源之一。
                  </Body>
                  <Image
                    src={Planet1Big}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      width: '100%',
                    }}
                  />
                </Stack>
              )}
              {activePlanet === 2 && (
                <Stack align="center" justify="center" spacing={'24px'}>
                  <Body
                    color="#F2F3F7"
                    variant={6}
                    fw={600}
                    lh={'normal'}
                    fs={'42px'}
                    style={{ textAlign: 'center' }}>
                    璀璨星球：商品星球
                  </Body>
                  <Body
                    color="#9198B0"
                    variant={6}
                    fw={700}
                    lh={'normal'}
                    fs={'20px'}
                    style={{ textAlign: 'center' }}>
                    拥有丰富的商品资源，居民以种植、收穫、交易为生。
                  </Body>
                  <Image
                    src={Planet2Big}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      width: '100%',
                    }}
                  />
                </Stack>
              )}
              {activePlanet === 3 && (
                <Stack align="center" justify="center" spacing={'24px'}>
                  <Body
                    color="#F2F3F7"
                    variant={6}
                    fw={600}
                    lh={'normal'}
                    fs={'42px'}
                    style={{ textAlign: 'center' }}>
                    汇神星球：外汇星球
                  </Body>
                  <Body
                    color="#9198B0"
                    variant={6}
                    fw={700}
                    lh={'normal'}
                    fs={'20px'}
                    style={{ textAlign: 'center' }}>
                    居民能够自由地转換各种货币和价值，是金融交易中心。
                  </Body>
                  <Image
                    src={Planet3Big}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      width: '100%',
                    }}
                  />
                </Stack>
              )}
              {activePlanet === 4 && (
                <Stack align="center" justify="center" spacing={'24px'}>
                  <Body
                    color="#F2F3F7"
                    variant={6}
                    fw={600}
                    lh={'normal'}
                    fs={'42px'}
                    style={{ textAlign: 'center' }}>
                    时光星球：期货星球
                  </Body>
                  <Body
                    color="#9198B0"
                    variant={6}
                    fw={700}
                    lh={'normal'}
                    fs={'20px'}
                    style={{ textAlign: 'center' }}>
                    居民能够預測未来发展和趋势，在时间轴上进行交易。
                  </Body>
                  <Image
                    src={Planet4Big}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      width: '100%',
                    }}
                  />
                </Stack>
              )}
              {activePlanet === 5 && (
                <Stack align="center" justify="center" spacing={'24px'}>
                  <Body
                    color="#F2F3F7"
                    variant={6}
                    fw={600}
                    lh={'normal'}
                    fs={'42px'}
                    style={{ textAlign: 'center' }}>
                    虚幻星球：数字星球
                  </Body>
                  <Body
                    color="#9198B0"
                    variant={6}
                    fw={700}
                    lh={'normal'}
                    fs={'20px'}
                    style={{ textAlign: 'center' }}>
                    虚拟现实世界，居民可以创建和体验各种虚拟场景。
                  </Body>
                  <Image
                    src={Planet5Big}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      width: '100%',
                    }}
                  />
                </Stack>
              )}
              {activePlanet === 6 && (
                <Stack align="center" justify="center" spacing={'24px'}>
                  <Body
                    color="#F2F3F7"
                    variant={6}
                    fw={600}
                    lh={'normal'}
                    fs={'42px'}
                    style={{ textAlign: 'center' }}>
                    债魔星球：债券星球
                  </Body>
                  <Body
                    color="#9198B0"
                    variant={6}
                    fw={700}
                    lh={'normal'}
                    fs={'20px'}
                    style={{ textAlign: 'center' }}>
                    债券是重要的资产和交易对象，居民精通债券市场。
                  </Body>
                  <Image
                    src={Planet6Big}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      width: '100%',
                    }}
                  />
                </Stack>
              )}
              {activePlanet === 7 && (
                <Stack align="center" justify="center" spacing={'24px'}>
                  <Body
                    color="#F2F3F7"
                    variant={6}
                    fw={600}
                    lh={'normal'}
                    fs={'42px'}
                    style={{ textAlign: 'center' }}>
                    繁荣星球：股票星球
                  </Body>
                  <Body
                    color="#9198B0"
                    variant={6}
                    fw={700}
                    lh={'normal'}
                    fs={'20px'}
                    style={{ textAlign: 'center' }}>
                    Lorem ipsum
                  </Body>
                  <Image
                    src={Planet7Big}
                    alt=""
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      width: '100%',
                    }}
                  />
                </Stack>
              )}
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default Community;
