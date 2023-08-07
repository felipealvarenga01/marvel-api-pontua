import { expect, it } from 'vitest';
import { renderRemix } from '../../../../../tests/remix-stub';
import HeaderLogin from "~/components/login/header-login";

describe('Renderização de Header Login', () => {
  it('Teste de header login container', () => {
    const { container } = renderRemix(<HeaderLogin />);
    const layout = container.querySelector('header') as HTMLElement;
    const computedStyle = window.getComputedStyle(layout);
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.paddingTop).toBe('49px');
    expect(computedStyle.paddingLeft).toBe('106px');
    expect(container).toBeInTheDocument();
  });
});
