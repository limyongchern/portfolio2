import styles from '../styles/components/typography/index.module.scss';
import { HTMLAttributes } from 'react';

const tags = ['Heading', 'Body', 'Caption', 'BodyBold'] as const;
type TTag = (typeof tags)[number];

const getTagComponent =
  (tag: TTag) =>
  (
    props: HTMLAttributes<HTMLSpanElement> & {
      variant: number;
      fw?: number;
      lh?: number | string;
    }
  ) =>
    (
      <p
        {...props}
        className={`${styles[tag.toLowerCase() + props.variant]} ${
          props.className
        }`}
        style={{
          color: props.color,
          fontWeight: props.fw,
          lineHeight: props.lh,
          ...props.style,
        }}>
        {props.children}
      </p>
    );

export const { Heading, Body, Caption, BodyBold } = tags.reduce((acc, tag) => {
  const TagComponent = getTagComponent(tag);
  return { ...acc, [tag]: TagComponent };
}, {} as Record<TTag, ReturnType<typeof getTagComponent>>);
