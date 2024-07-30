import { Flex, Grid, Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const SecondMobileSection = ({ data }: any) => {
  return (
    <div id="second-section" className={styles.containerSecondMobileSection}>
      <div className={styles.widthContainerSecondMobileSection}>
        <span style={{ marginBottom: '24px' }}>
          <BodyBold color="#F2F3F7" variant={3}>
            {data.headline}
          </BodyBold>
        </span>
        <Body
          color="#9198B0"
          variant={1}
          fs={'18px'}
          style={{ textAlign: 'center', marginBottom: '36px' }}>
          {data.subheader}
        </Body>

        {data.cards.map((card: any, index: number) => (
          <>
            <Image
              src={card.image}
              alt="wolfavatar"
              className={`${styles[`daoCardImagesMobile${index + 1}`]}`}
            />
            <div className={styles.cardDarkMobileContainer} key={index}>
              <BodyBold color="#F2F3F7" variant={7}>
                {card.title}
              </BodyBold>
              <Body color="#9198B0" variant={1}>
                {card.description}
              </Body>
            </div>
          </>
        ))}

        {/* <div className={styles.cardDarkMobileContainer}>
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
        </div> */}
      </div>
    </div>
  );
};

export default SecondMobileSection;
