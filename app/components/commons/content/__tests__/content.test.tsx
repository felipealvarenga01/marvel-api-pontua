import { renderRemix } from 'tests/remix-stub';
import { expect, it } from 'vitest';
import { Content } from '../content';

describe('Renderização corretas de estilização de content', () => {
  it('Teste de Content', () => {
    const { container } = renderRemix(<Content />);
    const content = container.querySelector('section') as HTMLElement;
    const computedStyle = window.getComputedStyle(content);
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.flexDirection).toBe('column');
  });
});
