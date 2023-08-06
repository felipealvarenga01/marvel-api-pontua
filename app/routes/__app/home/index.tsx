import { useLoaderData } from '@remix-run/react';
import { useTranslation } from '~/hooks/i18n';
import { getInfoHeroes } from '~/server/application/get-info-heroes/get-info-heroes.server';

type LoaderData = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

export async function loader() {
  return await getInfoHeroes({ urlPath: '/characters' });
}

export default function Home() {
  const loaderData = useLoaderData() as LoaderData[];
  const { translate } = useTranslation('pages.home');

  return (
    <>
      <h1>{translate('subtitle')}</h1>;
      <div>
        {loaderData &&
          loaderData.map((hero, index) => (
            <div key={index}>
              <div>
                <img src={hero.thumbnail} alt={hero.name} />
                <h2>{hero.name}</h2>
              </div>

              <p>{hero.description}</p>
            </div>
          ))}
      </div>
    </>
  );
}
