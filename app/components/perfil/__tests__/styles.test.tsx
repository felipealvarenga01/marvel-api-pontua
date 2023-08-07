import { expect, it } from 'vitest';
import { PerfilName, PerfilNameDivider } from '~/components/perfil/styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de Styles de Perfil', () => {
  it('Teste de Perfil Name Divider', () => {
    const { container } = renderRemix(<PerfilNameDivider />);
    const perfilNameDivider = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(perfilNameDivider);
    expect(computedStyle.color).toBe('rgb(244, 55, 36)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Perfil Name', () => {
    const { container } = renderRemix(<PerfilName />);
    const perfilName = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(perfilName);
    expect(computedStyle.color).toBe('rgb(119, 119, 119)');
    expect(container).toBeInTheDocument();
  });
});
