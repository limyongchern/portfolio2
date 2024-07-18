import styles from './home.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Body, Heading } from 'components/typography';
import { MagicMotion } from 'react-magic-motion';
import TempImage1 from 'public/TempImages/TempImage1.jpg';
import TempImage2 from 'public/TempImages/TempImage2.jpg';
import TempImage3 from 'public/TempImages/TempImage3.jpg';
import TempImage4 from 'public/TempImages/TempImage4.jpg';
import { MagicTabSelect } from 'react-magic-motion';

const dummyTabs = [
  {
    id: 1,
    title: '去中心化',
    content: [
      '系统安全性高',
      '信息公开透明、不可篡改',
      '技术更安全、更平等、更透明',
    ],
    image: TempImage1,
  },
  {
    id: 2,
    title: '无地域界限',
    content: [
      '跨越地理边界的交流互动',
      '全球投资者共建共享',
      '机会平等,资源共享',
    ],
    image: TempImage2,
  },
  {
    id: 3,
    title: 'DAO 社区治理',
    content: [
      '基于智能合约的去中心化自治',
      '社区用户参与管理',
      '透明公开的治理机制',
    ],
    image: TempImage3,
  },
  {
    id: 4,
    title: '收益模式',
    content: [
      '将社区贡献转化为代币',
      '参与互动获得奖励',
      '内容可铸造成NFT，获取收益',
    ],
    image: TempImage4,
  },
];

const BlockchainSection = () => {
  const [selectedImage, setSelectedImage] = useState(dummyTabs[0].image);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) setSelectedImage(dummyTabs[hoveredIndex].image);
    // setSelectedImage(dummyTabs[hoveredIndex].image);
  }, [hoveredIndex, isMounted]);

  const tabsComponents = dummyTabs.map((item, i) => {
    return (
      <button
        key={item.id}
        onMouseEnter={() => setHoveredIndex(i)}
        className={styles.buttonsContainer}>
        {hoveredIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: 'spring', bounce: 0.35 }}>
            <span
              style={{
                borderRadius: '16px',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                background:
                  'var(--neutral-glass-1-add-blur, rgba(255, 255, 255, 0.12))',
              }}
            />
          </MagicTabSelect>
        )}
        <Body variant={10} color="white" className={styles.cardTitle3}>
          {item.title}
        </Body>
        {item.content.map((content, i) => (
          <Body
            variant={1}
            color="#9198B0"
            key={i}
            style={{ marginTop: '8px', lineHeight: '2rem' }}>
            <li>{content}</li>
          </Body>
        ))}
      </button>
    );
  });

  return (
    <div
      className={styles.blockchainSection}
      style={{ backgroundColor: '#272935' }}>
      <Heading
        variant={0}
        color="white"
        style={{ marginBottom: '-240px' }}
        fw={40}>
        故事的起点
      </Heading>
      <div style={{ display: 'flex', gap: 20 }}>
        <div className={styles.selectedImageContainer} style={{}}>
          <Image
            src={selectedImage}
            className={styles.selectedImage}
            alt="temp-image"
          />
        </div>
        {isMounted && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              margin: '0.75rem 0',
            }}>
            {tabsComponents}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockchainSection;
