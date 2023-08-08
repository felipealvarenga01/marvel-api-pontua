import type { V2_MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import favicon from '~/assets/favicon/logoPontua.svg';
import { ModalProvider } from '~/hooks/use-modal';
import styles from './styles/global.css';

export const meta: V2_MetaFunction = () => {
  return [
    { charset: 'utf-8' },
    { title: 'Marvel Api Pontua' },
    { viewport: 'width=device-width,initial-scale=1' },
  ];
};

export function Head() {
  return (
    <>
      <Meta />
      <Links />
    </>
  );
}

export default function App() {
  return (
    <>
      <Head />

      <ModalProvider>
        <Outlet />
      </ModalProvider>

      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </>
  );
}

export function links() {
  return [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: favicon,
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@200;300;400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@200;300;400;500;600;700&family=Inter:wght@200;300;400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
    {
      href: styles,
      rel: 'stylesheet',
    },
  ];
}
