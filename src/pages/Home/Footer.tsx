import { TabList, Tab } from '@fluentui/react-components';

export const Footer = () => {
  return (
    <>
      <TabList disabled size="medium" style={{ justifyContent: 'center' }}>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
        <Tab value="tab4">Fourth Tab</Tab>
      </TabList>
    </>
  );
};
