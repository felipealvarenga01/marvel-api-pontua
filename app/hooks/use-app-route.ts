import {useLocation, useMatches, useNavigate} from "@remix-run/react";
import { ClientAppRouteController } from '~/utils/app-route-controller';
export const useAppRoute = () =>{
    const [, route] = useMatches()
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const clientAppRouteController = new ClientAppRouteController({
        navigate,
        pathname,
        route,
    })

    return clientAppRouteController.returnSpread();
}