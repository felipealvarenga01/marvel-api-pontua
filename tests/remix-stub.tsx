/* eslint-disable sonarjs/cognitive-complexity */
import type { RouteMatch, SubmitFunction } from '@remix-run/react';
import * as remixReact from '@remix-run/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { UseFormReturn } from 'react-hook-form';
import * as useFormContextImport from 'react-hook-form';
import type { Mock } from 'vitest';
import { vi } from 'vitest';


import * as useTranslationImport from '../app/hooks/i18n';
import * as useAppRouteImport from '../app/hooks/use-app-route';
import * as useDeviceDetectImport from '../app/hooks/use-device-detect';

import * as useModalImport from '../app/hooks/use-modal';
import { ThemeProviderOmni } from '../app/hooks/use-theme';


vi.mock('react-hook-form', async () => {
    const reactFormActual = await vi.importActual<typeof useFormContextImport>(
        'react-hook-form',
    );

    return {
        __esModule: true,
        ...reactFormActual,
    };
});

vi.mock('@remix-run/react', async () => {
    const remixReactActual = await vi.importActual<typeof remixReact>(
        '@remix-run/react',
    );

    return {
        __esModule: true,
        ...remixReactActual,
    };
});

type ReturnAppRoute = ReturnType<typeof useAppRouteImport.useAppRoute>;
type UseMatches = RouteMatch[];
type UseSubmit = SubmitFunction;
type ReturnUseTranslation = string;
type UseNavigation = ReturnType<typeof remixReact.useNavigation>;
type UseNavigate = ReturnType<typeof remixReact.useNavigate>;
type UseActionData = ReturnType<typeof remixReact.useActionData>;
type UseSearchParams = ReturnType<typeof remixReact.useSearchParams>;
type UseFormContext = UseFormReturn;
type UseDeviceDetect = useDeviceDetectImport.DeviceDetect;

const useAppRoute = vi
    .fn<any, ReturnAppRoute>()
    .mockReturnValue({} as ReturnAppRoute);

const translate = vi.fn().mockImplementation((e) => e);
const useMatches = vi
    .fn<any, UseMatches>()
    .mockReturnValue([
        {} as RouteMatch,
        { data: '' } as RouteMatch,
        { data: '' } as RouteMatch,
    ]);
const useLocation = vi.fn<any, any>().mockReturnValue({
    assign: vi.fn(),
    reload: vi.fn(),
    replace: vi.fn(),
    origin: '',
    ancestorOrigins: {} as DOMStringList,
    hash: '',
    host: '',
    hostname: '',
    href: '',
    pathname: 'document',
    port: '',
    protocol: '',
    search: '',
    searchParams: new URLSearchParams(),
    toString: () => '',
    toJSON: () => '',
});

const useSubmit = vi.fn<any, UseSubmit>().mockImplementation(() => vi.fn());
const useNavigation = vi
    .fn<any, UseNavigation>()
    .mockReturnValue({ state: 'idle' } as ReturnType<
        typeof remixReact.useNavigation
    >);
const useNavigate = vi
    .fn<any, UseNavigate>()
    .mockReturnValue(
        vi.fn() as unknown as ReturnType<typeof remixReact.useNavigate>,
    );
const useActionData = vi
    .fn<any, UseActionData>()
    .mockReturnValue(
        {} as unknown as ReturnType<typeof remixReact.useActionData>,
    );
const useDeviceDetect = vi
    .fn<any, UseDeviceDetect>()
    .mockReturnValue({ isMobile: false, isAndroid: false, isIOS: false });
const useSearchParams = vi
    .fn<any, UseSearchParams>()
    .mockReturnValue([new URLSearchParams(), () => {}]);


const useFormContext = vi.fn<any, UseFormContext>().mockReturnValue({
    clearErrors: vi.fn(),
    control: {
        register: vi.fn().mockReturnValue({ onChange: vi.fn(), onBlur: vi.fn() }),
        unregister: vi.fn(),
        getFieldState: vi.fn(),
        _removeUnmounted: vi.fn(),
        _options: { shouldUnregister: false },
        _names: {
            array: new Set('test'),
            mount: new Set('test'),
            unMount: new Set('test'),
            watch: new Set('test'),
            focus: 'test',
            watchAll: false,
        },
        _subjects: {},
        _getWatch: vi.fn(),
        _formValues: ['test'],
        _defaultValues: ['test'],
    } as any,
    formState: {
        errors: {},
        isDirty: false,
        isSubmitting: false,
        isValid: true,
        dirtyFields: {},
        touchedFields: {},
        submitCount: 0,
        isLoading: false,
        isSubmitSuccessful: false,
        isSubmitted: false,
        isValidating: false,
        defaultValues: {},
    },
    handleSubmit: vi.fn(),
    getFieldState: vi.fn(),
    register: vi.fn(),
    setError: vi.fn(),
    setValue: vi.fn(),
    trigger: vi.fn(),
    unregister: vi.fn(),
    reset: vi.fn(),
    resetField: vi.fn(),
    setFocus: vi.fn(),
    getValues: vi.fn().mockReturnValue({}),
    watch: vi.fn().mockReturnValue({}),
});

interface mocks {
    translate?: Mock<any, ReturnUseTranslation>;
    useAppRoute?: Mock<any, ReturnAppRoute>;
    useMatches?: Mock<any, UseMatches>;
    useSubmit?: Mock<any, UseSubmit>;
    useNavigation?: Mock<any, UseNavigation>;
    useNavigate?: Mock<any, UseNavigate>;
    useActionData?: Mock<any, UseActionData>;
    useSearchParams?: Mock<any, UseSearchParams>;
    useFormContext?:
        | Mock<any, UseFormContext>
        | typeof useFormContextImport.useFormContext;
    useDeviceDetect?: Mock<any, UseDeviceDetect>;
    useModalProvider?: boolean;
    useModal?: Mock<any, ReturnType<typeof useModalImport.useModal>>;
    useUploadPhotoProvider?: boolean;
}
//helpers
export function FormWrapper({
                                children,
                                useFormProps,
                            }: {
    children: React.ReactNode;
    useFormProps?: useFormContextImport.UseFormProps;
}) {
    const methods = useFormContextImport.useForm(useFormProps);

    return (
        <useFormContextImport.FormProvider {...methods}>
            {children}
        </useFormContextImport.FormProvider>
    );
}

export function renderRemix(component: React.JSX.Element, mocks?: mocks) {
    return {
        user: userEvent.setup(),
        ...render(renderMocks(component, mocks)),
    };
}
export function renderMocks(
    component: React.JSX.Element,
    mocks?: mocks,
    hooks?: {
        shouldNotUseAppRoute?: boolean;
    },
) {
    vi.spyOn(useTranslationImport, 'useTranslation').mockReturnValue({
        translate: mocks?.translate || translate,
    });

    if (!hooks?.shouldNotUseAppRoute) {
        vi.spyOn(useAppRouteImport, 'useAppRoute').mockImplementation(
            mocks?.useAppRoute || useAppRoute,
        );
    }

    if (mocks?.useModal) {
        vi.spyOn(useModalImport, 'useModal').mockImplementation(mocks?.useModal);
    }

    vi.spyOn(remixReact, 'useMatches').mockImplementation(
        mocks?.useMatches || useMatches,
    );

    vi.spyOn(remixReact, 'useLocation').mockImplementation(useLocation);

    vi.spyOn(remixReact, 'useSubmit').mockReturnValue(
        mocks?.useSubmit || useSubmit,
    );

    vi.spyOn(remixReact, 'useNavigation').mockImplementation(
        mocks?.useNavigation || useNavigation,
    );

    vi.spyOn(remixReact, 'useNavigate').mockImplementation(
        mocks?.useNavigate || useNavigate,
    );
    //@ts-ignore
    vi.spyOn(remixReact, 'useActionData').mockImplementation(
        mocks?.useActionData || useActionData,
    );

    vi.spyOn(remixReact, 'useSearchParams').mockImplementation(
        mocks?.useSearchParams || useSearchParams,
    );

    vi.spyOn(useFormContextImport, 'useFormContext').mockImplementation(
        mocks?.useFormContext || useFormContext,
    );

    vi.spyOn(useDeviceDetectImport, 'useDeviceDetect').mockImplementation(
        mocks?.useDeviceDetect || useDeviceDetect,
    );

    function UploadContextProviderWrapper({
                                              children,
                                          }: {
        children: React.JSX.Element;
    }) {

            return children;

    }

    function ModalProviderWrapper({ children }: { children: React.JSX.Element }) {
            return children;
    }

    return (
        <ThemeProviderOmni company="pontua" theme="light">
            <ModalProviderWrapper>
                <UploadContextProviderWrapper>{component}</UploadContextProviderWrapper>
            </ModalProviderWrapper>
        </ThemeProviderOmni>
    );
}