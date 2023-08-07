import { expect, it } from 'vitest';
import {
  HeroCard,
  HeroDescription,
  HeroImage,
  HeroInfo,
  HeroName,
  HeroThumbnail,
  HeroesContainer,
  HomeSubtitle,
  HomeTitle,
  HomeTitleDivider,
} from '~/components/home/styles';
import { renderRemix } from '../../../../tests/remix-stub';

describe('Renderização de styles-home', () => {
  it('Teste de Home Title', () => {
    const { container } = renderRemix(<HomeTitle />);
    const homeTitle = container.querySelector('h1') as HTMLElement;
    const computedStyle = window.getComputedStyle(homeTitle);
    expect(computedStyle.fontSize).toBe('24px');
    expect(computedStyle.lineHeight).toBe('24.6px');
    expect(computedStyle.fontWeight).toBe('700');
    expect(computedStyle.letterSpacing).toBe('-0.72px');
    expect(computedStyle.color).toBe('rgb(8, 27, 78)');
    expect(computedStyle.marginBottom).toBe('24px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Home Title Divider', () => {
    const { container } = renderRemix(<HomeTitleDivider />);
    const homeTitleDivider = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(homeTitleDivider);
    expect(computedStyle.color).toBe('rgb(244, 55, 36)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Home Subtitle', () => {
    const { container } = renderRemix(<HomeSubtitle />);
    const homeSubtitle = container.querySelector('span') as HTMLElement;
    const computedStyle = window.getComputedStyle(homeSubtitle);
    expect(computedStyle.fontWeight).toBe('300');
    expect(computedStyle.letterSpacing).toBe('-0.72px');
    expect(computedStyle.color).toBe('rgb(119, 119, 119)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Heroes Container', () => {
    const { container } = renderRemix(<HeroesContainer />);
    const heroContainer = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(heroContainer);
    expect(computedStyle.display).toBe('grid');
    expect(computedStyle.paddingRight).toBe('15px');
    expect(computedStyle.gap).toBe('10px');
    expect(computedStyle.gridTemplateAreas).toBe(
      "'card0 card0 card1 card1 card2 card2' 'card3 card3 card4 card4 card5 card5' 'card6 card6 card6 card7 card7 card7' 'card8 card8 card8 card9 card9 card9'",
    );
    expect(computedStyle.overflow).toBe('');
    expect(computedStyle.maxHeight).toBe('calc(100vh - 161px)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Hero Card', () => {
    const { container } = renderRemix(<HeroCard />);
    const heroCard = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(heroCard);
    expect(computedStyle.backgroundColor).toBe('rgb(234, 236, 240)');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Hero Thumbnail', () => {
    const { container } = renderRemix(<HeroThumbnail />);
    const heroThumbnail = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(heroThumbnail);
    expect(computedStyle.width).toBe('83px');
    expect(computedStyle.height).toBe('119px');
    expect(computedStyle.overflow).toBe('hidden');
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.alignItems).toBe('center');
    expect(computedStyle.justifyContent).toBe('center');
    expect(computedStyle.borderRadius).toBe('8px');
    expect(computedStyle.minWidth).toBe('83px');
    expect(computedStyle.marginRight).toBe('8px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Hero Image', () => {
    const { container } = renderRemix(<HeroImage />);
    const heroImage = container.querySelector('img') as HTMLElement;
    const computedStyle = window.getComputedStyle(heroImage);
    expect(computedStyle.width).toBe('auto');
    expect(computedStyle.height).toBe('119px');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Hero Info', () => {
    const { container } = renderRemix(<HeroInfo />);
    const heroInfo = container.querySelector('div') as HTMLElement;
    const computedStyle = window.getComputedStyle(heroInfo);
    expect(computedStyle.maxWidth).toBe('100%');
    expect(computedStyle.display).toBe('flex');
    expect(computedStyle.alignItems).toBe('flex-start');
    expect(computedStyle.justifyContent).toBe('flex-start');
    expect(computedStyle.flexDirection).toBe('column');
    expect(container).toBeInTheDocument();
  });

  it('Teste de Hero Name', () => {
    const { container } = renderRemix(<HeroName />);
    const heroName = container.querySelector('h2') as HTMLElement;
    const computedStyle = window.getComputedStyle(heroName);
    expect(computedStyle.fontSize).toBe('16px');
    expect(computedStyle.fontWeight).toBe('700');
    expect(computedStyle.lineHeight).toBe('24px');
    expect(computedStyle.letterSpacing).toBe('-0.48px');
    expect(computedStyle.color).toBe('rgb(0, 0, 0)');
    expect(computedStyle.fontFamily).toBe("'Epilogue','Inter',sans-serif");
    expect(container).toBeInTheDocument();
  });

  it('Teste de Hero Description', () => {
    const { container } = renderRemix(<HeroDescription />);
    const heroDescription = container.querySelector('p') as HTMLElement;
    const computedStyle = window.getComputedStyle(heroDescription);
    expect(computedStyle.fontSize).toBe('12px');
    expect(computedStyle.fontWeight).toBe('300');
    expect(computedStyle.lineHeight).toBe('24px');
    expect(computedStyle.letterSpacing).toBe('-0.36px');
    expect(computedStyle.color).toBe('rgb(0, 0, 0)');
    expect(computedStyle.fontFamily).toBe("'Epilogue','Inter',sans-serif");
    expect(container).toBeInTheDocument();
  });
});
