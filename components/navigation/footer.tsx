import { Footer as FooterMantine, FooterProps, Group } from '@mantine/core';
import styles from 'styles/components/footer.module.scss';
import { Body, Heading } from '../typography';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from 'public/wolfplanet.svg';
import {
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react';

interface IProps {
  baseProps?: Partial<FooterProps>;
}

const Footer = (props: IProps) => {
  return (
    <FooterMantine
      height={'238px'}
      {...props.baseProps}
      className={`${props.baseProps?.className ?? ''} ${styles.container}`}>
      <div className={styles.groupFooter}>
        <div className={styles.contentFooter}>
          <Link href="/">
            <Image src={LogoSVG} alt="Logo" className={styles.headerlogo} />
          </Link>

          <Group>
            <FacebookLogo size={24} color="white" />
            <XLogo size={24} color="white" />
            <InstagramLogo size={24} color="white" />
            <LinkedinLogo size={24} color="white" />
            <GoogleLogo size={24} color="white" />
          </Group>
        </div>
        <Body variant={2}>
          Privacy Policy | Terms of Use © 2024 WolfPlanet All Rights Reserved.
        </Body>
      </div>
    </FooterMantine>
  );
};

export default Footer;
