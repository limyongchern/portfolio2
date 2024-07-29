import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import { MagicMotion } from 'react-magic-motion';

const SecondMobileSectionVertical = ({ data }: any) => {
  const [cardOpen, setCardOpen] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardOpen((cardOpen + 1) % 4);
    }, 3500);

    return () => clearTimeout(timer);
  }, [cardOpen]);

  const CollapsibleCardMobile = ({ data, index }: any) => {
    return (
      <div
        className={styles.collapsibleCardMobile}
        onMouseEnter={() => setCardOpen(index)}
        onClick={() => {
          setCardOpen(index);
        }}
        key={index}
        style={{
          height: cardOpen === index ? '400px' : '100px',
        }}>
        <Image
          src={data.image}
          className={styles.collapsibleImageMobile}
          alt="wolfavatar"
        />

        {cardOpen === index ? (
          <>
            <Body
              variant={11}
              color="white"
              className={styles.cardTitleOpenMobile}>
              {data.title}
            </Body>
            <Body
              variant={12}
              color="white"
              className={styles.cardDescription2Mobile}>
              {data.description}
            </Body>
          </>
        ) : (
          <Body variant={11} color="white" className={styles.cardNumberMobile}>
            {data.title}
          </Body>
        )}
      </div>
    );
  };

  return (
    <div
      className={styles.planetsSection}
      style={{ backgroundColor: '#272935' }}>
      <Heading
        variant={0}
        color="white"
        style={{ marginBottom: '-200px' }}
        fs={36}
        fw={700}>
        故事的起点
      </Heading>
      <MagicMotion transition={{ type: 'ease' }}>
        <div className={styles.collapsibleCardsContainerMobile}>
          {data.map((item: any, index: number) => (
            <CollapsibleCardMobile data={item} index={index} key={index} />
          ))}
        </div>
      </MagicMotion>
    </div>
  );
};
export default SecondMobileSectionVertical;
