import { expect, it } from 'vitest';
import { RightRow } from '~/components/commons/header/header-styles';
import { renderRemix } from '../../../../../tests/remix-stub';

describe('Renderização de styles do Header', () => {
  it('Teste de RightRow', () => {
    const { container } = renderRemix(<RightRow />);
    const header = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.marginRight).toBe('');
    expect(computedStyle.marginLeft).toBe('');
    expect(container).toBeInTheDocument();
  });
});
