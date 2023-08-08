import { expect, it } from 'vitest';
import {
  Hover,
  HoverSubMenu,
  IconChevronContainer,
  SidebarLabel,
  SubMenuList,
  SubMenuListItem,
} from '~/components/commons/menu/menu-styles';
import { renderRemix } from '../../../../../tests/remix-stub';

describe('Renderização de styles do Menu', () => {
  it('Teste de Hover', () => {
    const { container } = renderRemix(<Hover />);
    const header = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.padding).toBe('0px 16px');
    expect(computedStyle.borderRadius).toBe('10px');
    expect(computedStyle.backgroundColor).toBe('rgb(245, 246, 248)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Hover SubMenu', () => {
    const { container } = renderRemix(<HoverSubMenu open />);
    const header = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.paddingLeft).toBe('16px');
    expect(computedStyle.borderRadius).toBe('10px');
    expect(computedStyle.paddingRight).toBe('0px');
    expect(computedStyle.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de HoverSubMenu com propriedade false', () => {
    const { container } = renderRemix(<HoverSubMenu open={false} />);
    const header = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.paddingLeft).toBe('16px');
    expect(computedStyle.borderRadius).toBe('10px');
    expect(computedStyle.paddingRight).toBe('16px');
    expect(computedStyle.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de HoverSubMenu com propriedade false', () => {
    const { container } = renderRemix(<SidebarLabel />);
    const header = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.color).toBe('rgb(0, 0, 0)');
    expect(computedStyle.marginLeft).toBe('8px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de HoverSubMenu com propriedade false', () => {
    const { container } = renderRemix(<IconChevronContainer subNav />);
    const header = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.rotate).toBe('');
    expect(container).toBeInTheDocument();
  });

  it('Teste de HoverSubMenu com propriedade false', () => {
    const { container } = renderRemix(
      // @ts-ignore
      <SubMenuList subnav={'true'} open />,
    );
    const header = container.querySelector('ul') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.position).toBe('initial');
    expect(computedStyle.background).toBe('rgba(0, 0, 0, 0)');
    expect(computedStyle.borderRadius).toBe('initial');
    expect(computedStyle.padding).toBe('0px 0px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de HoverSubMenu com propriedade false', () => {
    const { container } = renderRemix(
      // @ts-ignore
      <SubMenuList subnav={'true'} open={false} />,
    );
    const header = container.querySelector('ul') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.position).toBe('absolute');
    expect(computedStyle.background).toBe('rgb(255, 255, 255)');
    expect(computedStyle.left).toBe('74px');
    expect(computedStyle.borderRadius).toBe('10px');
    expect(computedStyle.width).toBe('auto');
    expect(computedStyle.padding).toBe('16px 0px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de HoverSubMenu com propriedade false', () => {
    const { container } = renderRemix(<SubMenuListItem open />);
    const header = container.querySelector('li') as HTMLElement;
    const computedStyle = window.getComputedStyle(header);
    expect(computedStyle.height).toBe('40px');
    expect(computedStyle.padding).toBe('0px 24px');
    expect(container).toBeInTheDocument();
  });
});
