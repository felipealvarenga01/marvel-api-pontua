import type { LoaderArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { error } from 'console';
import { ScreenError } from '~/components/commons/error/screen-error';
import { MainBody } from '~/components/commons/main-body/main-body';
import { useAppRoute } from '~/hooks/use-app-route';
import { DeviceDetectProvider } from '~/hooks/use-device-detect';
import { ThemeProviderOmni } from '~/hooks/use-theme';
import { getAppRouteServer } from '~/server/application/commons/common.server';
import { createSession } from '~/server/application/commons/session.server';
import { isMobileUserAgent } from '~/server/application/commons/user-agent';

export async function loader({ request }: LoaderArgs) {
  try {
    const { company, country, tenant, translations, clientConfigs, language } =
      await getAppRouteServer({ request });

    const isMobile = isMobileUserAgent(request);

    const headers = await createSession(request, {
      company,
      country,
    });

    const data = {
      tenant,
      translations,
      clientConfigs,
      language,
      isMobile,
    };

    return json(data, headers);
  } catch (err) {
    error(err);

    return redirect('/error');
  }
}

export default function AppLayout() {
  const {
    themeConfigs: { company },
  } = useAppRoute();
  const actionData = useActionData();

  return (
    <ThemeProviderOmni company="pontua" theme="light">
      <DeviceDetectProvider>
        <MainBody />
      </DeviceDetectProvider>
    </ThemeProviderOmni>
  );
}

export function ErrorBoundary() {
  return (
    <DeviceDetectProvider>
      <ThemeProviderOmni company="pontua" theme="light">
        <ScreenError />
      </ThemeProviderOmni>
    </DeviceDetectProvider>
  );
}
