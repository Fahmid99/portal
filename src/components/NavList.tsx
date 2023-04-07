import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = { root: { width: 150 } };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Menu',
    expandAriaLabel: 'Show more Basic components',
    links: [
      {
        key: 'ActivityItem',
        name: 'ActivityItem',
        url: '#/examples/activityitem',
      },
      {
        key: 'Breadcrumb',
        name: 'Breadcrumb',
        url: '#/examples/breadcrumb',
      },
      {
        key: 'Button',
        name: 'Button',
        url: '#/examples/button',
      },
    ],
  },
  
];

export const NavList: React.FunctionComponent = () => {
  return (
    <Nav styles={navStyles} ariaLabel="Nav example similar to one found in this demo page" groups={navLinkGroups} />
  );
};

export default NavList; 