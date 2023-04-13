import { Text, TextProps } from '@mantine/core';
import styles from 'styles/components/typography/index.module.scss';

const tags = ['Heading', 'Subheading', 'Body'] as const;
type TTag = typeof tags[number];

const getTagComponent = (tag: TTag) => (props: TextProps) =>
  (
    <Text
      {...props}
      className={`${styles[tag.toLowerCase()]} ${props.className}`}>
      {props.children}
    </Text>
  );

export const { Heading, Subheading, Body } = tags.reduce((acc, tag) => {
  const TagComponent = getTagComponent(tag);
  return { ...acc, [tag]: TagComponent };
}, {} as Record<TTag, ReturnType<typeof getTagComponent>>);
