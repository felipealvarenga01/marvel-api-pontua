import {
  AgentName,
  AgentThumbnail,
  AgentThumbnailContainer,
  DivContainerAvatar,
} from '~/components/agent-selection/styles';

export default function AvatarContainer({
  thumbnail,
  name,
}: {
  thumbnail: string;
  name: string;
}) {
  return (
    <DivContainerAvatar>
      <AgentThumbnailContainer>
        <AgentThumbnail src={thumbnail} alt={name} />
      </AgentThumbnailContainer>
      <AgentName>{name}</AgentName>
    </DivContainerAvatar>
  );
}
