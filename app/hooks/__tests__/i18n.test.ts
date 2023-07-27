import type { RouteMatch } from '@remix-run/react';
import remixReact from '@remix-run/react';
import { vi } from 'vitest';
import { useTranslation } from '../i18n';

describe('i18n', () => {
    const createMock = (data: { translations: any } = { translations: {} }) => {
        vi.spyOn(remixReact, 'useMatches').mockReturnValue([
            undefined as unknown as RouteMatch,
            {
                data,
            } as RouteMatch,
        ]);
    };

    it('precisa ser traduzido', () => {
        createMock({ translations: { key1: { key2: 'Hello' } } });
        const { translate } = useTranslation();

        expect(translate('key1.key2')).toBe('Hello');
    });

    it('precisa ser traduzido com prefixo', () => {
        createMock({ translations: { key1: { key2: 'Hello' } } });
        const { translate } = useTranslation('key1');

        expect(translate('key2')).toBe('Hello');
    });

    it('Não devera ser traduzido quando não encontrar uma chave', () => {
        createMock({ translations: {} });
        const { translate } = useTranslation();

        expect(translate('key1.key2')).toBe('key1.key2');
    });

    it('Precisa ser traduzido quando possuir valores', () => {
        createMock({
            translations: { key1: 'this translate has {variable} inside' },
        });
        const { translate } = useTranslation();

        expect(translate('key1', { variable: '😉' })).toBe(
            'this translate has 😉 inside',
        );
    });

    it('Precisa ser traduzido quando possuir plurals', () => {
        createMock({
            translations: {
                key1: 'there is {value} account',
                key1_plural: 'there are {value} accounts',
            },
        });
        const { translate } = useTranslation();

        expect(translate('key1', { value: 1 })).toBe('there is 1 account');
        expect(translate('key1', { value: 2 })).toBe('there are 2 accounts');
    });
});
