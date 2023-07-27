import { useTranslation } from '~/hooks/i18n';

export default function Perfil() {
  const { translate } = useTranslation('pages.perfil');

  return <h1>{translate('subtitle')}</h1>;
}
