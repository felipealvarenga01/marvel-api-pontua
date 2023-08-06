import { useState } from 'react';
import { FiCheck, FiChevronDown, FiUser } from 'react-icons/fi';
import AvatarContainer from '~/components/agent-selection/avatar';
import {
  Agent,
  AgentList,
  AgentThumbnail,
  DivContainerSelect,
  SelectedAgent,
  SelectedAgentContainer,
} from '~/components/agent-selection/styles';

export default function Select({
  options,
}: {
  placeholder: string;
  options: any[];
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState({
    id: 0,
    thumbnail: <FiUser size={20} />,
    name: 'Selecione um agente',
  });

  const verifyAgentSelected = (id: number) => {
    return id == selectedAgent.id;
  };

  return (
    <DivContainerSelect>
      <SelectedAgent onClick={() => setShowOptions(!showOptions)}>
        <SelectedAgentContainer agentSelected={selectedAgent.id !== 0}>
          {selectedAgent.thumbnail}
          <span>{selectedAgent.name}</span>
        </SelectedAgentContainer>

        <FiChevronDown size={20} />
      </SelectedAgent>
      {showOptions && (
        <AgentList>
          {options.map((agent) => (
            <Agent
              agentSelected={verifyAgentSelected(agent.id)}
              key={agent.id}
              onClick={() => {
                setSelectedAgent({
                  id: agent.id,
                  thumbnail: (
                    <AgentThumbnail src={agent.thumbnail} alt={agent.name} />
                  ),
                  name: agent.name,
                });
                setShowOptions(false);
              }}
            >
              <AvatarContainer thumbnail={agent.thumbnail} name={agent.name} />
              {verifyAgentSelected(agent.id) && <FiCheck />}
            </Agent>
          ))}
        </AgentList>
      )}
    </DivContainerSelect>
  );
}
