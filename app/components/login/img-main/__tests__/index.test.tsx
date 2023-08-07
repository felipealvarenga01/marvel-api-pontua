import { expect, it } from 'vitest';
import ImgLogin from '~/components/login/img-main';
import { renderRemix } from '../../../../../tests/remix-stub';

describe('Renderização de Header Login', () => {
  it('Teste de header login container', () => {
    const { container } = renderRemix(<ImgLogin />);
    const layout = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(layout);
    expect(computedStyle.width).toBe('62%');
    expect(container).toBeInTheDocument();
  });
});
