import styles from './home.module.scss';
import { Heading } from '../../components/typography';
import hall from '@assets/icons/home-hall-icon.svg';
import tribes from '@assets/icons/home-tribe-icon.svg';
import house from '@assets/icons/home-hall-icon.svg';

const iconMap: Record<string, string> = {
  hall,
  tribes,
  house,
};

const Card = ({
  title,
  description,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon: string;
  onClick: any;
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={iconMap[icon] || icon} style={{ marginTop: -10 }} />
      <Heading
        variant={3}
        color="var(--Neutral-White, rgba(254, 254, 254, 1.00)"
        className={styles.cardTitle}>
        {title}
      </Heading>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
};

export default Card;
