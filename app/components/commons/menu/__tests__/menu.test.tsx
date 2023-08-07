import { renderRemix } from 'tests/remix-stub';
import { expect, it } from 'vitest';
import type {ListMenuProperties, ListMenuProperties } from '../menu';
import Menu from '../menu';

describe('Renderização de Menu', () => {
  const item = {
    title: 'menu',
    path: '/primeiros-passos',
    icon: 'user',
  } as ListMenuProperties;

  it('Teste de Menu', () => {
    const { container, debug } = renderRemix(
        <Menu item={item} open={false} />
    );
    debug(container)
    const menu = container.querySelector('div') as HTMLElement;

    expect(menu).toBeInTheDocument();
  });
});
