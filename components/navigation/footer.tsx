import {
  Flex,
  Footer as FooterMantine,
  FooterProps,
  Group,
  Stack,
} from '@mantine/core';
import styles from 'styles/components/footer.module.scss';
import { Body, Heading } from '../typography';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from 'public/wolfplanet.svg';
import FBIcon from 'public/FBIcon.svg';
import XIcon from 'public/XIcon.svg';
import InsIcon from 'public/InsIcon.svg';
import LinkedInIcon from 'public/LinkedInIcon.svg';
import GoogleIcon from 'public/GoogleIcon.svg';

interface IProps {
  baseProps?: Partial<FooterProps>;
}

const Footer = (props: IProps) => {
  return (
    <FooterMantine
      height={'238px'}
      withBorder={false}
      {...props.baseProps}
      className={`${props.baseProps?.className ?? ''} ${styles.container}`}>
      <Stack w={'100%'}>
        <Group position="apart">
          <Link href="/">
            <Image src={LogoSVG} alt="Logo" className={styles.headerlogo} />
          </Link>

          <Group spacing={24}>
            <Image src={FBIcon} height={24} width={24} alt="Facebook" />
            <Image src={XIcon} height={24} width={24} alt="X" />
            <Image src={InsIcon} height={24} width={24} alt="Instagram" />
            <Image src={LinkedInIcon} height={24} width={24} alt="LinkedIn" />
            <Image src={GoogleIcon} height={24} width={24} alt="Google" />
          </Group>
        </Group>
        <Flex justify={'center'} mt={40}>
          <Body variant={2} color="#F2F3F7" fw={400}>
            Privacy Policy | Terms of Use © 2024 WolfPlanet All Rights Reserved.
          </Body>
        </Flex>
      </Stack>
    </FooterMantine>
  );
};

export default Footer;
