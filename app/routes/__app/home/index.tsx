import { useTranslation } from '~/hooks/i18n';

export default function Home() {
  const { translate } = useTranslation('pages.home');

  return <h1>{translate('subtitle')}</h1>;
}
