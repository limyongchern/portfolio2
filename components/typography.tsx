import styles from '../styles/components/typography/index.module.scss';
import { HTMLAttributes } from 'react';

const tags = ['Heading', 'Body', 'Caption', 'BodyBold', 'BodyDmsans'] as const;
type TTag = (typeof tags)[number];

const getTagComponent = (tag: TTag) => {
  const TagComponent = (
    props: HTMLAttributes<HTMLSpanElement> & {
      variant: number;
      fw?: number;
      lh?: number | string;
      fs?: number | string;
    }
  ) => (
    <p
      {...props}
      className={`${styles[tag.toLowerCase() + props.variant]} ${
        props.className
      }`}
      style={{
        color: props.color,
        fontWeight: props.fw,
        lineHeight: props.lh,
        fontSize: props.fs,
        ...props.style,
      }}>
      {props.children}
    </p>
  );

  TagComponent.displayName = `${tag}Component`;
  return TagComponent;
};

export const { Heading, Body, Caption, BodyBold, BodyDmsans } = tags.reduce(
  (acc, tag) => {
    const TagComponent = getTagComponent(tag);
    return { ...acc, [tag]: TagComponent };
  },
  {} as Record<TTag, ReturnType<typeof getTagComponent>>
);
