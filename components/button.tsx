import { ButtonHTMLAttributes } from 'react';
import { Body, Heading, Subheading } from 'components/typography';
import styles from 'styles/components/button.module.scss';

type TColor = 'black' | 'medium-gray';

interface IProps {
  variant?: 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  color?: TColor;
  hoverColor?: TColor;
}

const Button = (
  props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof IProps> & IProps
) => {
  const {
    variant = 'filled',
    size = 'md',
    color = 'black',
    hoverColor = 'medium-gray',
    ...containerProps
  } = props;
  const typography = { sm: Body, md: Subheading, lg: Heading };
  const Typography = typography[size];
  return (
    <button
      {...containerProps}
      className={[
        styles[size],
        styles[
          containerProps.disabled
            ? 'disabled'
            : `${variant}-${color}-${hoverColor}`
        ],
        containerProps.className,
      ].join(' ')}>
      <Typography color="inherit">{props.children}</Typography>
    </button>
  );
};

export default Button;
