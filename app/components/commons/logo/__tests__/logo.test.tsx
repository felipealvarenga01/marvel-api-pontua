import { renderRemix } from 'tests/remix-stub';
import { expect, it } from 'vitest';
import { Logo } from '../logo';

describe('Renderização de Logo', () => {
  it('Teste de Logo com side bar fechada', () => {
    const { container, debug } = renderRemix(<Logo open={false} />);
    debug();
    const logotipo = container.querySelector('img') as HTMLElement;
    const logoName = logotipo.getAttribute('src');
    expect(logoName).toContain('logoPontua.svg');
  });

  it('Teste de Logo com side bar aberta', () => {
    const { container, debug } = renderRemix(<Logo open />);
    debug();
    const logotipo = container.querySelector('img') as HTMLElement;
    const logoName = logotipo.getAttribute('src');
    expect(logoName).toContain('logoPontuaInteiro.svg');
  });
});
