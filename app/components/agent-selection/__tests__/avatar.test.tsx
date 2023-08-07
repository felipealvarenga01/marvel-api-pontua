import { expect, it } from 'vitest';
import AvatarContainer from '~/components/agent-selection/avatar';
import {
  AgentThumbnail,
  AgentThumbnailContainer,
  DivContainerAvatar,
} from '~/components/agent-selection/styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de Avatar', () => {
  it('Teste', () => {
    const { getByText, container } = renderRemix(
      <AvatarContainer
        thumbnail={
          'https://pontua.com.br/wp-content/uploads/2022/08/banner-cadastro.png'
        }
        name={'heroMarvel'}
      />,
    );
    const avatarName = getByText('heroMarvel');
    const avatarThubmnail = container.querySelector('img') as HTMLImageElement;

    expect(avatarName).toBeInTheDocument();

    expect(avatarThubmnail.src).toEqual(
      'https://pontua.com.br/wp-content/uploads/2022/08/banner-cadastro.png',
    );
  });

  it('Teste de Div Container Avatar', () => {
    const { container } = renderRemix(<DivContainerAvatar />);
    const avatarDivContainer = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(avatarDivContainer);
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.alignItems).toBe('center');
    expect(computedStyle.justifyContent).toBe('flex-start');
    expect(computedStyle.width).toBe('100%');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Agent Thumbnail Container', () => {
    const { container } = renderRemix(<AgentThumbnailContainer />);
    const agentThumbnailContainer = container.querySelector(
      'span',
    ) as HTMLElement;
    const computedStyle = window.getComputedStyle(agentThumbnailContainer);
    expect(computedStyle.width).toBe('24px');
    expect(computedStyle.height).toBe('24px');
    expect(computedStyle.borderRadius).toBe('12px');
    expect(computedStyle.marginRight).toBe('8px');
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.alignItems).toBe('center');
    expect(computedStyle.justifyContent).toBe('center');
    expect(computedStyle.overflow).toBe('hidden');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Agent Thumbnail', () => {
    const { container } = renderRemix(<AgentThumbnail />);
    const agentThumbnail = container.querySelector('img') as HTMLElement;
    const computedStyle = window.getComputedStyle(agentThumbnail);
    expect(computedStyle.width).toBe('auto');
    expect(computedStyle.height).toBe('24px');
    expect(container).toBeInTheDocument();
  });
});
