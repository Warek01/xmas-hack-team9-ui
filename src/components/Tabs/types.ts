import type { Dispatch, SetStateAction } from 'react'

export interface TabsProps {
  tabs: any[];
  selectedTab: any;
  setSelectedTab: Dispatch<SetStateAction<any>>
}
