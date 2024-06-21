import BackgroundVideo from 'components/BackgroundVideo';
import Button from 'components/button';
import { Body, Heading, Subheading } from 'components/typography';
import styles from 'styles/pages/index.module.scss';

interface IProps {}

const Home = (props: IProps) => {
  return (
    <div>
      <BackgroundVideo />
    </div>
  );
};

export default Home;
