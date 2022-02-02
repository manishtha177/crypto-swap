import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Tab = styled(TabUnstyled)`
  color: #b3bcd0;
  cursor: pointer;
  font-family: Konnect;
  font-size: 20px;
  background-color: rgba(179, 188, 208, 0.2);
  width: 100%;
  border: none;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #020b44;
    color: white};
  }
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: white;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

interface Iprops {
  selectedTab: number;
  setSelectedTab: Function;
}

export default function BasicTabs({ selectedTab, setSelectedTab }: Iprops) {
  const handleChange: Function = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabsUnstyled
        value={selectedTab}
        onChange={(ev, val) => handleChange(ev, val)}
        aria-label='basic tabs example'
      >
        <TabsList>
          <Tab {...a11yProps(0)}>Swap</Tab>
          <Tab {...a11yProps(1)}>Pool</Tab>
        </TabsList>
      </TabsUnstyled>
    </Box>
  );
}
