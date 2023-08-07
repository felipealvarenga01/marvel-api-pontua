import { expect, it } from 'vitest';
import {
  Agent,
  AgentList,
  SelectedAgentContainer,
} from '~/components/agent-selection/styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Teste de renderização de styles', () => {
  it('Teste de Agent List', () => {
    const { container } = renderRemix(<AgentList />);
    const avatarDivContainer = container.querySelector('ul') as HTMLElement;
    const computedStyle = window.getComputedStyle(avatarDivContainer);
    expect(computedStyle.border).toBe('1px solid #eaecf0');
    expect(computedStyle.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Selected Agent Container', () => {
    const { container } = renderRemix(<SelectedAgentContainer agentSelected />);
    const avatarDivContainer = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(avatarDivContainer);
    expect(computedStyle.fontWeight).toBe('500');
    expect(computedStyle.color).toBe('rgb(16, 24, 40)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Agent', () => {
    const { container } = renderRemix(<Agent />);
    const avatarDivContainer = container.querySelector('li') as HTMLElement;
    const computedStyle = window.getComputedStyle(avatarDivContainer);
    expect(computedStyle.backgroundColor).toBe('rgb(234, 236, 240)');
    expect(container).toBeInTheDocument();
  });
});
