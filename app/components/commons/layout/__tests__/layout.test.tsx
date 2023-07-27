import { renderRemix } from 'tests/remix-stub';
import { expect, it } from 'vitest';
import { Layout } from '../layout';

describe('Renderização corretas de estilização de Layout', () => {

    it('Teste de Layout', () => {
        const { container} = renderRemix(
            <Layout />,
        );
        const layout = container.querySelector('main') as HTMLElement;
        const computedStyle = window.getComputedStyle(layout);
        expect(computedStyle.display).toBe('flex');
        expect(computedStyle.flexDirection).toBe('row');
        expect(computedStyle.position).toBe('fixed');
        expect(computedStyle.top).toBe('0px');
        expect(computedStyle.right).toBe('0px');
        expect(computedStyle.bottom).toBe('0px');
        expect(computedStyle.left).toBe('0px');
    });
});