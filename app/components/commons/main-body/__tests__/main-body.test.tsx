import {renderRemix} from 'tests/remix-stub';
import {expect, it} from 'vitest';
import { MainBody } from "../main-body";

describe('Renderização Main Body', () => {

    it('Teste de Main Body', () => {
        const {container} = renderRemix(
            <MainBody />,
        );
        const main = container.querySelector('main') as HTMLElement;
        const computedStyle = window.getComputedStyle(main);
        expect(computedStyle.display).toBe('flex');
        expect(computedStyle.flexDirection).toBe('column');
        expect(computedStyle.flex).toBe('1');
        expect(computedStyle.alignItems).toBe('flex-start');
        expect(computedStyle.padding).toBe('24px 32px 32px 32px');
        expect(computedStyle.paddingTop).toBe('24px');
        expect(computedStyle.overflow).toBe('auto');
        expect(container).toBeInTheDocument();
    });


});