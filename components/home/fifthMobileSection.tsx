import Button from 'components/button';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import styles from './home.module.scss';

const fifthMobileSection = () => {
  return (
    <div className={styles.section5}>
      <div className={styles.section5p2}>
        <Heading
          variant={0}
          color={'#F2F3F7'}
          style={{ lineHeight: 1.5 }}
          fs={36}>
          CTA text to contact or smth
        </Heading>
        <Body
          variant={1}
          fw={700}
          color={'#9198B0'}
          style={{ paddingTop: '24px', lineHeight: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </Body>
        <Button className={styles.button}>Contact Us</Button>
      </div>
    </div>
  );
};

export default fifthMobileSection;
