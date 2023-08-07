import {renderRemix} from 'tests/remix-stub';
import {expect, it} from 'vitest';
import Menu, {ListMenuProperties} from '../menu';
import {ThemeProviderOmni} from "~/hooks/use-theme";

describe('Renderização de Menu', () => {
const item = {
        title: "Primeiros Passos",
        path: '/primeiros-passos',
        icon: 'teacher',
    } as ListMenuProperties

    it('Teste de Menu', () => {
        const {container, debug} = renderRemix(
            <ThemeProviderOmni company={'pontua'} theme={'light'}>
                <Menu item={item} open={false}/>
            </ThemeProviderOmni>

        );
        const menu = container.querySelector('div') as HTMLElement;

        expect(menu).toBeInTheDocument();
    });

});


