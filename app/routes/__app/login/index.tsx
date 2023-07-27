import { useTranslation } from '~/hooks/i18n';

export default function Login() {
  const { translate } = useTranslation('pages.login');

  return <h1>{translate('subtitle')}</h1>;
}
