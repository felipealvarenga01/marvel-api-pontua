import { expect, it } from 'vitest';
import CardVisaoGeral from '~/components/perfil/card-visao-geral';
import {
  TabInfoAgentAvatar,
  TabInfoAgentContainer,
  TabInfoAgentDescription,
  TabInfoAgentTitle,
} from '~/components/tabs/tabs-styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de Visão Geral', () => {
  it('Teste de Tab Info Container', () => {
    const { getByText } = renderRemix(
      <CardVisaoGeral
        name={'testeName'}
        description={'teste'}
        thumbnail={
          'https://pontua.com.br/wp-content/uploads/2022/08/banner-cadastro.png'
        }
      />,
    );
    const tabInfoContainer = getByText('testeName');

    expect(tabInfoContainer).toBeInTheDocument();
  });

  it('Teste de Visão Geral Container', () => {
    const { container } = renderRemix(<TabInfoAgentContainer />);
    const tabInfoAgentContainer = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(tabInfoAgentContainer);
    expect(computedStyle.marginLeft).toBe('16px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Visão Geral Agent Avatar', () => {
    const { container } = renderRemix(<TabInfoAgentAvatar />);
    const tabInfoAgentAvatar = container.querySelector('img') as HTMLElement;
    const computedStyle = window.getComputedStyle(tabInfoAgentAvatar);
    expect(computedStyle.width).toBe('124px');
    expect(computedStyle.borderRadius).toBe('100%');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Visão Geral Agent Title', () => {
    const { container } = renderRemix(<TabInfoAgentTitle />);
    const tabInfoAgentTitle = container.querySelector('h2') as HTMLElement;
    const computedStyle = window.getComputedStyle(tabInfoAgentTitle);
    expect(computedStyle.fontSize).toBe('24px');
    expect(computedStyle.fontWeight).toBe('700');
    expect(computedStyle.lineHeight).toBe('24.6px');
    expect(computedStyle.letterSpacing).toBe('-0.72px');
    expect(computedStyle.fontFamily).toBe("'Epilogue','Inter',sans-serif");
    expect(computedStyle.color).toBe('rgb(8, 27, 78)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Visão Geral Agent Description', () => {
    const { container } = renderRemix(<TabInfoAgentDescription />);
    const tabInfoAgentDescription = container.querySelector('p') as HTMLElement;
    const computedStyle = window.getComputedStyle(tabInfoAgentDescription);
    expect(computedStyle.fontSize).toBe('16px');
    expect(computedStyle.fontWeight).toBe('600');
    expect(computedStyle.lineHeight).toBe('24.6px');
    expect(computedStyle.letterSpacing).toBe('-0.48px');
    expect(computedStyle.fontFamily).toBe("'Epilogue','Inter',sans-serif");
    expect(computedStyle.color).toBe('rgb(113, 113, 113)');
    expect(computedStyle.marginTop).toBe('8px');
    expect(container).toBeInTheDocument();
  });
});
