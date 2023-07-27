import type { Commons, I18n, Pages } from '~/server/infra/types';

const brazilPages: Pages = {
  login: {
    title: 'Login',
    subtitle: 'Texto',
  },
  home: {
    title: 'Home',
    subtitle: 'Texto 2',
  },
  perfil: {
    title: 'Perfil',
    subtitle: 'Texto 3',
  },
};

const brazilCommons: Commons = {
  errors: {
    somethingWrong: 'Ops... Algo deu errado!',
    tryAgain: 'Tentar novamente',
    unfortunatelyWeHadAProblem:
      'Infelizmente tivemos um problema técnico e não conseguimos carregar a página para continuar o seu cadastro. Por favor, tente novamente ou se o erro persistir retorne mais tarde.',
    goToHome: 'Voltar à página inicial',
    fieldRequired: 'Campo obrigatório.',
    badRequest:
      'Infelizmente tivemos um problema técnico ao enviar os dados. Por favor, tente novamente mais tarde.',
    internalServerError:
      'Infelizmente tivemos um problema técnico inesperado. Por favor, tente novamente mais tarde.',
  },
  next: 'Continuar',
  back: 'Voltar',
  sketch: 'Rascunho',
};

export default {
  'pt-BR': { pages: brazilPages, common: brazilCommons },
} as I18n;
