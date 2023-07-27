import {ClientSpread, ServerSpread} from "~/utils/app-route-controller/types";
import {Logger} from "winston";
import {NavigateFunction} from "@remix-run/react";
import {RedirectFunction} from "@remix-run/server-runtime";
import {I18nCountry, SetupClient} from "~/server/infra/types";

export abstract class AppRouteController<
  Spread extends ServerSpread | ClientSpread
> {
  private readonly pathnameSanity: string;
  private readonly company: string;
  private readonly country: string;
  private readonly clientConfigs: SetupClient;
  private readonly pages: SetupClient['pages'];
  private readonly language: I18nCountry;

  constructor({
                pathname,
                company,
                country,
                language,
                clientConfigs,
                logger
              }: {
    pathname: string,
    company: string,
    country: string,
    language: I18nCountry;
    clientConfigs: SetupClient,
    logger: Logger | Console
  }) {
    // if (!company || !country) {
    //   logger.error('company or country params not found');
    //   throw new Error('company or country params not found');
    // }
    this.pathnameSanity = pathname.replace('/', '')
    this.company = company || 'pontua';
    this.country = country || 'br';
    this.language = language;
    this.clientConfigs = clientConfigs;
    this.pages = clientConfigs.pages;
  }
  
  abstract navigate: NavigateFunction | RedirectFunction;

  private readonly getStepsRoute = () => {
    const pageIndex = this.pages.findIndex((p) => p.page === this.pathnameSanity.replace('/',''))
    const steps = this.pages[pageIndex].steps || []
    return {steps, pageIndex}

  }

  private readonly getCurrentRoute = (route:string) => {
    const {steps} = this.getStepsRoute();

    const stepIndex = steps.findIndex(
        (s) => s.route === route,
    );
    return {step: steps[stepIndex], stepIndex}

  };

  private readonly getBackNextRoute = (
      currentRoute: string,
      target: 'back' | 'next',
      resultStatus?: 'success' | 'error',

  ) => {
    const { step, stepIndex } = this.getCurrentRoute(currentRoute);

    if (stepIndex === -1) {
      return ``;
    }

    const stepTarget = step[target];

    if (!stepTarget) {
      return '';
    }

    if (typeof stepTarget === 'string') {
      return `${stepTarget}`;
    }

    return `${stepTarget[resultStatus || 'success']}`;
  };


  private readonly next = (    currentRoute:string,
                               params?: Record<string, string>,
                               resultStatus?: 'success' | 'error',
                               ) => {

    const nextStep = this.getBackNextRoute(currentRoute,'next', resultStatus)

    return this.navigate(`./?step=${nextStep}`)
  }

  returnSpread = () => ({
    next: this.next,
    company: this.company,
    country: this.country,
    language: this.language,
    clientConfigs: this.clientConfigs,
    navigate: this.navigate,
    currentRoute: this.getCurrentRoute,
    ...this.returnExtendedSpread()
  });
  
  abstract returnExtendedSpread: () => Spread;
  
}