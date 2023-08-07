import {TabsContainer, TabsItem, TabsList} from "~/components/commons/tabs/tabs-styles";

type Props = {
    name: string,
    active: boolean
}

export default function Tabs({tabs}: {tabs?: Array<Props>}){
    return(
        <TabsContainer>
            <TabsList>
                {tabs && tabs.map((tab, index) => (
                    <TabsItem active={tab.active} key={index}>{tab.name}</TabsItem>
                ))}
            </TabsList>
        </TabsContainer>
    )
}