import {renderRemix} from 'tests/remix-stub';
import {expect, it} from 'vitest';
import {KTIcon} from '../icon';

describe('Renderização corretas com texto e estilos', () => {

    it('Teste de botão recebendo icone sem iconType', () => {
        const {container} = renderRemix(
            <KTIcon className='teste' iconName={'abstract33'}/>,
        );
        const kticon = container.querySelector('i') as HTMLElement;
        expect(kticon).toBeInTheDocument();

    });

    it('Teste de botão recebendo icone com iconType', () => {
        const {container} = renderRemix(
            <KTIcon iconName={'abstract33'} iconType= 'duotone'/>,
        );
        const kticon = container.querySelector('i') as HTMLElement;
        expect(kticon).toBeInTheDocument();

    });
});