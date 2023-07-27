import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useCountdown } from '../use-countdown';

describe('useCountdown', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.clearAllTimers();
    });

    it('Deverá inicializar com os segundos padrões', () => {
        const { result } = renderHook(() => useCountdown());
        expect(result.current.seconds).toBe(30);
    });

    it('Deverá atualizar os segundos quando chamar updateSeconds', () => {
        const { result } = renderHook(() => useCountdown());

        act(() => {
            result.current.updateSeconds(10);
        });

        expect(result.current.seconds).toBe(10);
    });

    it('Deverá diminuir os segundos por 1 a cada segundo', () => {
        const { result } = renderHook(() => useCountdown());

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(result.current.seconds).toBe(29);
    });

    it('Deverá parar a contagem quando o contador chegar a 0', () => {
        const { result } = renderHook(() => useCountdown());

        act(() => {
            result.current.updateSeconds(1);
            vi.advanceTimersByTime(1000);
        });

        expect(result.current.seconds).toBe(0);
        expect(result.current.isCountdownOver).toBe(true);
    });

    it('Deverá chamar updateSeconds sem possuir nenhum valor', () => {
        const { result } = renderHook(() => useCountdown());

        act(() => {
            result.current.updateSeconds();
            vi.advanceTimersByTime(1000);
        });

        expect(result.current.seconds).toBe(29);
        expect(result.current.isCountdownOver).toBe(false);
    });
});
