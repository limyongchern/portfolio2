import { Flex, Grid, Stack } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import React from 'react';
import styles from '../../styles/pages/community/index.module.scss';

const ThirdMobileSection = () => {
  return (
    <div id="third-section" className={styles.containerThirdMobileSection}>
      <div className={styles.widthContainerThirdMobileSection}>
        <span style={{ marginBottom: '24px' }}>
          <Heading
            color="#F2F3F7"
            variant={6}
            fw={400}
            lh={'normal'}
            fs={'40px'}
            style={{ display: 'inline' }}>
            Dao{' '}
          </Heading>
          <Body
            color="#F2F3F7"
            variant={6}
            fw={700}
            lh={'normal'}
            fs={'40px'}
            style={{ display: 'inline' }}>
            特色
          </Body>
        </span>
        <Body
          color="#9198B0"
          variant={6}
          fw={700}
          lh={'normal'}
          fs={'18px'}
          style={{ textAlign: 'center', marginBottom: '36px' }}>
          狼星球的星球、部落/机构架构是基于 DAO
          的去中心化治理模式。每一个星球代表着一个投资主题，如股票星球、虚拟货币星球等。每一个星球都是一个独立的
          DAO，拥有自己的治理权利。
        </Body>

        <div className={styles.cardDarkMobileContainer}>
          <Body color="#F2F3F7" variant={6} fw={400} lh={'normal'} fs={'36px'}>
            星球
          </Body>
          <Body color="#9198B0" variant={6} fw={400} lh={'normal'} fs={'18px'}>
            星球是狼星球的基础单位，是用户参与投资交流、创作内容、打造个人 IP
            形象等活动的主要场所。每一个星球都有自己的治理机制，用户可以通过投票、提案等方式参与星球的治理。
          </Body>
        </div>

        <div className={styles.cardDarkMobileContainer}>
          <Body color="#F2F3F7" variant={6} fw={400} lh={'normal'} fs={'36px'}>
            部落
          </Body>
          <Body color="#9198B0" variant={6} fw={400} lh={'normal'} fs={'18px'}>
            部落是星球内的子单位，是一个由志同道合用户组成的社区。部落可以根据用户的兴趣爱好、投资理念等因素进行划分。部落可以制定自己的规则和规范，自主管理部落的内部事务。
          </Body>
        </div>

        <div className={styles.cardDarkMobileContainer}>
          <Body color="#F2F3F7" variant={6} fw={400} lh={'normal'} fs={'36px'}>
            机构
          </Body>
          <Body color="#9198B0" variant={6} fw={400} lh={'normal'} fs={'18px'}>
            机构与部落是同等架构，是由现实存在的机构建立的私有单位，其属性为私有单位。用户需要在平台上核实身份后，其所属机构会在SBT上显示，则用户在加入机构时可以以SBT作审核核实
          </Body>
        </div>
      </div>
    </div>
  );
};

export default ThirdMobileSection;
