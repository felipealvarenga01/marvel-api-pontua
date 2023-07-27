import {renderRemix} from 'tests/remix-stub';
import {expect, it} from 'vitest';
import { MainHeader } from "../main-header";

describe('Renderização de Main Header', () => {

    it('Teste de Main Header', () => {
        const {container} = renderRemix(
            <MainHeader />,
        );
        const header = container.querySelector('header') as HTMLElement;
        const computedStyle = window.getComputedStyle(header);
        expect(computedStyle.height).toBe('60px');
        expect(computedStyle.padding).toBe('16px 32px');
        expect(computedStyle.width).toBe('100%');
        expect(computedStyle.display).toBe('flex');
        expect(computedStyle.flexDirection).toBe('row');
        expect(computedStyle.justifyContent).toBe('center');
        expect(container).toBeInTheDocument();
    });
});