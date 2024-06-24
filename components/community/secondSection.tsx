import React from 'react';
import styles from '../../styles/pages/community/index.module.scss';
import WolfTooth from '../../public/Coin.svg';
import WolfToken from '../../public/WolfCoin.svg';
import Image from 'next/image';
import { Flex, Stack } from '@mantine/core';
import { Body, Heading } from 'components/typography';

const SecondSection = () => {
  return (
    <div id="second-section" className={styles.containerSecondSection}>
      <div className={styles.widthContainerSecondSection}>
        <Flex gap={'15.71px'}>
          <div className={styles.cardContainer}>
            <span>
              <Heading
                color="#F2F3F7"
                variant={6}
                style={{ display: 'inline' }}
                fs={'40px'}
                lh={'normal'}
                fw={400}>
                Wolf Planet{' '}
              </Heading>
              <Body
                color="#F2F3F7"
                variant={6}
                style={{ display: 'inline' }}
                fs={'40px'}
                lh={'normal'}
                fw={700}>
                星球的玩法
              </Body>
            </span>
            <Body
              color="#9198B0"
              variant={6}
              style={{ display: 'inline' }}
              fs={'18px'}
              lh={'normal'}
              fw={400}>
              双代币体系是一种在区块链项目中常见的经济模型，其中包含两种不同的代币。狼牙是平台上的股票币，狼牙的主要功能是用于平台的分红。Wolftoken,狼币是平台的通用货币，可以用于购买平台上的商品和服务。
              在狼星球上，用户可以使用狼币购买课程、铸造NFT，或进行其他交易。狼币具有现实世界的价值，可以在虚拟货币交易所上兑换成法币或其他资产。
              双代币体系的优势在于可以实现不同的功能分离，并为用户提供不同的激励机制。狼牙作为激励用户在平台上的发展，而狼币的支付功能可以方便用户进行交易。
            </Body>
          </div>
          <Stack spacing={'28.18px'}>
            <div className={styles.cardSubContainer}>
              <Flex gap={'9.39px'} align={'center'}>
                <Image
                  src={WolfTooth}
                  alt="WolfTooth"
                  className={styles.icon}
                />
                <Body
                  color="#F2F3F7"
                  variant={6}
                  style={{ display: 'inline' }}
                  fs={'40px'}
                  lh={'normal'}
                  fw={700}>
                  狼牙
                </Body>
              </Flex>
              <Body
                color="#9198B0"
                variant={6}
                style={{ display: 'inline' }}
                fs={'18px'}
                lh={'normal'}
                fw={400}>
                狼财会根据用户持有的狼牙比例进行Wolftoken空投。
              </Body>
            </div>
            <div className={styles.cardSubContainer}>
              <Flex gap={'9.39px'} align={'center'}>
                <Image
                  src={WolfToken}
                  alt="WolfToken"
                  className={styles.icon}
                />
                <Body
                  color="#F2F3F7"
                  variant={6}
                  style={{ display: 'inline' }}
                  fs={'40px'}
                  lh={'normal'}
                  fw={700}>
                  狼币
                </Body>
              </Flex>
              <Body
                color="#9198B0"
                variant={6}
                style={{ display: 'inline' }}
                fs={'18px'}
                lh={'normal'}
                fw={400}>
                支付：用户可以使用狼币购买课程、铸造NFT，或进行其他交易。
              </Body>
            </div>
          </Stack>
        </Flex>
      </div>
    </div>
  );
};

export default SecondSection;
