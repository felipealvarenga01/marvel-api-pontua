import { expect, it } from 'vitest';
import { debug } from 'winston';
import { Header } from '~/components/commons/header/header-styles';
import {
  Divider,
  Icon,
  Nav,
  NavIcon,
  SidebarNav,
} from '~/components/commons/sidebar/sidebar-styles';
import { renderRemix } from '../../../../../tests/remix-stub';

describe('Renderização de styles Sidebar', () => {
  it('Teste de Header', () => {
    const { container } = renderRemix(<Header />);
    const header = container.querySelector('header') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.justifyContent).toBe('center');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Nav', () => {
    const { container } = renderRemix(<Nav open />);
    const loginBackground = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(loginBackground);
    expect(computedStyle.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(computedStyle.padding).toBe('24px 24px');
    expect(computedStyle.height).toBe('72px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de SidebarNav', () => {
    const { container } = renderRemix(<SidebarNav />);
    const loginBackground = container.querySelector('nav') as HTMLElement;
    const computedStyle = window.getComputedStyle(loginBackground);
    expect(computedStyle.marginTop).toBe('8px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Icon', () => {
    const { container } = renderRemix(<Icon iconName={'user'} />);
    const loginBackground = container.querySelector('svg') as SVGSVGElement;
    const computedStyle = window.getComputedStyle(loginBackground);
    expect(computedStyle.fontSize).toBe('');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Divider', () => {
    const { container } = renderRemix(<Divider />);
    const loginBackground = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(loginBackground);
    expect(computedStyle.marginTop).toBe('8px');
    expect(computedStyle.marginBottom).toBe('14px');
    expect(container).toBeInTheDocument();
  });
});
