import { Navbar, NavbarProps } from '@mantine/core';
import { TbBarbell } from 'react-icons/tb';
import NavLink, { ILink } from './navLink';
import styles from 'styles/components/sidebar.module.scss';
import { Body } from 'components/typography';

interface IProps {
  baseProps?: Partial<NavbarProps>;
}

export const sections: Record<string, ILink[]> = {
  Top: [{ label: 'link1', link: '/', icon: <TbBarbell size={24} /> }],
  Middle: [
    { label: 'link1', link: '/', icon: <TbBarbell size={24} /> },
    { label: 'link2', link: '/', icon: <TbBarbell size={24} /> },
    { label: 'link3', link: '/', icon: <TbBarbell size={24} /> },
  ],
  Bottom: [
    { label: 'link1', link: '/', icon: <TbBarbell size={24} /> },
    { label: 'link2', link: '/', icon: <TbBarbell size={24} /> },
  ],
};

const Sidebar = (props: IProps) => {
  return (
    <Navbar
      hidden
      hiddenBreakpoint="sm"
      width={{ base: 300 }}
      {...props.baseProps}
      className={`${props.baseProps?.className ?? ''} ${styles.container}`}>
      {Object.entries(sections).map(([section, links]) => (
        <Navbar.Section grow w="100%" key={section}>
          <Body variant={5}>{section}</Body>
          {links.map((link) => (
            <NavLink {...link} key={link.label} />
          ))}
        </Navbar.Section>
      ))}
    </Navbar>
  );
};

export default Sidebar;
