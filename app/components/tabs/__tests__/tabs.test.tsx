import { expect, it } from 'vitest';
import {
  TabsContainer,
  TabsItem,
  TabsList,
} from '~/components/tabs/tabs-styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de Tabs', () => {
  it('Teste de Tabs', () => {
    const { container } = renderRemix(<TabsContainer />);
    const tabs = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(tabs);
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(computedStyle.padding).toBe('17px 0px 0px 4px');
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.borderRadius).toBe('6px');
    expect(computedStyle.marginBottom).toBe('30px');
    expect(computedStyle.marginTop).toBe('6px');
    expect(computedStyle.borderBottom).toBe('1px solid #eaecf0');
    expect(container).toBeInTheDocument();
  });

  it('Teste de TabsList', () => {
    const { container } = renderRemix(<TabsList />);
    const tabs = container.querySelector('ul') as HTMLElement;
    const computedStyle = window.getComputedStyle(tabs);
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.gap).toBe('15px');
    expect(computedStyle.width).toBe('100%');
    expect(container).toBeInTheDocument();
  });

  it('Teste de TabsItem', () => {
    const { container } = renderRemix(<TabsItem />);
    const tabs = container.querySelector('li') as HTMLElement;
    const computedStyle = window.getComputedStyle(tabs);
    expect(computedStyle.listStyle).toBe('none');
    expect(computedStyle.borderBottom).toBe('2px solid');
    expect(computedStyle.borderBottomColor).toBe('rgba(0, 0, 0, 0)');
    expect(computedStyle.paddingBottom).toBe('17px');
    expect(computedStyle.fontWeight).toBe('600');
    expect(computedStyle.fontSize).toBe('16px');
    expect(computedStyle.lineHeight).toBe('16px');
    expect(computedStyle.color).toBe('rgb(242, 26, 5)');
    expect(container).toBeInTheDocument();
  });
});
