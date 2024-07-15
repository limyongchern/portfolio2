import { Body, Heading } from 'components/typography';
import React from 'react';
import styles from './community.module.scss';

const FirstMobileSection = () => {
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.widthMobileContainer}>
        <span style={{ textAlign: 'center' }}>
          <Heading
            color="#F2F3F7"
            variant={6}
            fs={'36px'}
            lh={'60px'}
            fw={400}
            style={{ display: 'inline' }}>
            Wolf Planet{' '}
          </Heading>
          <Body
            color="#F2F3F7"
            variant={6}
            fs={'30px'}
            lh={'normal'}
            fw={700}
            style={{ display: 'inline' }}>
            星球：跨域投资交流平台，探索七星奇遇
          </Body>
        </span>

        <Body
          color="#9198B0"
          variant={7}
          fs={'18px'}
          lh={'normal'}
          fw={700}
          style={{ textAlign: 'center' }}>
          Wolf Planet
          星球是一个基于区块链技术的去中心化投资交流平台，汇聚了来自全球各地的专业投资者和分析师，为您提供高质量的投资资讯和分析，助力您做出更明智的投资决策。
        </Body>
      </div>
    </div>
  );
};

export default FirstMobileSection;
