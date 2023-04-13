import Button from 'components/button';
import { Body, Heading, Subheading } from 'components/typography';
import styles from 'styles/pages/index.module.scss';

interface IProps {}

const Page = (props: IProps) => {
  return (
    <div className={styles.container}>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
      <Body>Body</Body>
      <Button variant="outline">BUTTON</Button>
    </div>
  );
};

export default Page;
