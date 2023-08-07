import {
  TabsContainer,
  TabsItem,
  TabsList,
} from '~/components/tabs/tabs-styles';

type Props = {
  name: string;
  active: boolean;
  path: string;
};

export default function Tabs({
  tabs,
  changeStep,
}: {
  tabs?: Array<Props>;
  changeStep: (stepName: string) => void;
}) {
  return (
    <TabsContainer>
      <TabsList>
        {tabs &&
          tabs.map((tab, index) => (
            <TabsItem
              active={tab.active}
              key={index}
              onClick={() => changeStep(tab.path)}
            >
              {tab.name}
            </TabsItem>
          ))}
      </TabsList>
    </TabsContainer>
  );
}
