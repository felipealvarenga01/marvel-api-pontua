import {AppRouteController} from "~/utils/app-route-controller/app-route-controller";
import {NavigateFunction, RouteMatch} from "@remix-run/react";
import {TenantsConfig} from "~/server/infra/types";
import {ClientSpread} from "~/utils/app-route-controller/types";

export class ClientAppRouteController extends AppRouteController<ClientSpread>{
  private readonly themeConfigs: TenantsConfig['themeConfigs'];
  constructor({
    navigate,
    pathname,
    route,
    }:{
    navigate: NavigateFunction;
    pathname:string;
    route: RouteMatch
  }) {
    super({
      pathname,
      company: route.data.tenant.company,
      country: route.data.country,
      language: route.data.tenant.language,
      clientConfigs: route.data.clientConfigs,
      logger:console
    });
    
    this.navigate = navigate;
  
    this.themeConfigs = route.data.tenant.themeConfigs;
  }
  
  navigate: NavigateFunction;
  
  returnExtendedSpread = () => ({
    themeConfigs: this.themeConfigs
  })
}