import { expect, it } from 'vitest';
import { Layout } from '~/components/layout/styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de styles-layout', () => {
  it('Teste de Layout', () => {
    const { container } = renderRemix(<Layout />);
    const layout = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(layout);
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.height).toBe('100vh');
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.alignItems).toBe('flex-start');
    expect(computedStyle.justifyContent).toBe('center');
    expect(container).toBeInTheDocument();
  });
});
