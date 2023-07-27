import { redirect } from '@remix-run/node';
import { ServerAppRouteController } from '~/utils/app-route-controller';

export async function getAppRouteServer({ request }: { request: Request }) {
  const serverAppRouteController =
    await ServerAppRouteController.createInstance({
      redirect,
      request,
    });
  
  return serverAppRouteController.returnSpread();
}
