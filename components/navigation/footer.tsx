import { Footer as FooterMantine, FooterProps } from '@mantine/core';
import styles from 'styles/components/footer.module.scss';
import { Heading } from '../typography';

interface IProps {
  baseProps?: Partial<FooterProps>;
}

const Footer = (props: IProps) => {
  return (
    <FooterMantine
      height={'3.75rem'}
      {...props.baseProps}
      className={`${props.baseProps?.className ?? ''} ${styles.container}`}>
      <Heading>Footer</Heading>
    </FooterMantine>
  );
};

export default Footer;
