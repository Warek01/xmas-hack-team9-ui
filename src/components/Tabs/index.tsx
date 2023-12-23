import { FC, memo } from 'react';
import classNames from 'classnames';

import type { TabsProps } from './types';

const Tabs: FC<TabsProps> = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <ul className="flex gap-0.5">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={classNames(
            'rounded-t-lg flex items-center justify-center px-8 duration-100',
            selectedTab === tab
              ? 'bg-white text-secondary cursor-default pointer-events-none'
              : 'text-white bg-secondary hover:bg-secondary/70' +
                  ' cursor-pointer',
          )}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default memo(Tabs);
