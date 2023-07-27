import { renderHook } from '@testing-library/react';
import { useEffect, useLayoutEffect } from 'react';
import { vi } from 'vitest';
import useIsomorphicLayoutEffect from '../use-isophormic-layout-effect';

vi.mock('react', () => ({
    useEffect: vi.fn(),
    useLayoutEffect: vi.fn(),
}));

describe('useIsomorphicLayoutEffect', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should use useLayoutEffect when window is defined', () => {
        renderHook(() => useIsomorphicLayoutEffect(() => {}, []));

        expect(useEffect).not.toHaveBeenCalled();
        expect(useLayoutEffect).toHaveBeenCalled();
    });
});
