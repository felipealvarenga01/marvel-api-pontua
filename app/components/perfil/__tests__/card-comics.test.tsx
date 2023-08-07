import { expect, it } from 'vitest';
import { GridContainer } from '~/components/commons/content/content';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de Card-Comics', () => {
  it('Teste de Grid Container', () => {
    const { container } = renderRemix(<GridContainer />);
    const cardComics = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(cardComics);
    expect(computedStyle.display).toBe('grid');
    expect(computedStyle.gridTemplateColumns).toBe('1fr 1fr 1fr');
    expect(computedStyle.gridColumnGap).toBe(undefined);
    expect(computedStyle.gridRowGap).toBe(undefined);
    expect(container).toBeInTheDocument();
  });
});
