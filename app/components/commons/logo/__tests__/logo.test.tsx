import { renderRemix } from 'tests/remix-stub';
import { expect, it } from 'vitest';
import { Logo } from '../logo';

describe('Renderização de Logo', () => {
  it('Teste de Logo com side bar fechada', () => {
    const { container} = renderRemix(<Logo open={false} />);
    const logotipo = container.querySelector('img') as HTMLElement;
    const logoName = logotipo.getAttribute('src');
    expect(logoName).toContain('logoPontua.svg');
  });

  it('Teste de Logo com side bar aberta', () => {
    const { container} = renderRemix(<Logo open />);
    const logotipo = container.querySelector('img') as HTMLElement;
    const logoName = logotipo.getAttribute('src');
    expect(logoName).toContain('logoPontuaInteiro.svg');
  });
});
