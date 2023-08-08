import {
  TabCard,
  TabInfoAgentAvatar,
  TabInfoAgentContainer,
  TabInfoAgentDescription,
  TabInfoAgentTitle,
  TabInfoContainer,
} from '~/components/tabs/tabs-styles';

export default function CardVisaoGeral({
  name,
  description,
  thumbnail,
}: {
  name: string;
  description?: string;
  thumbnail: string;
}) {
  return (
    <TabCard>
      <TabInfoContainer>
        <TabInfoAgentAvatar src={thumbnail} alt={name} />
        <TabInfoAgentContainer>
          <TabInfoAgentTitle>{name}</TabInfoAgentTitle>
          <TabInfoAgentDescription>{description}</TabInfoAgentDescription>
        </TabInfoAgentContainer>
      </TabInfoContainer>
    </TabCard>
  );
}
