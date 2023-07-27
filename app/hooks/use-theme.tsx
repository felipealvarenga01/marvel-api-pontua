import { Global, ThemeProvider, css } from '@emotion/react';
import facepaint from 'facepaint';
import React from 'react';
import themes from '../../theme';
import type { BrandThemes, Themes } from '../../theme/types';

type ThemesType = {
  company: keyof Themes;
  theme: keyof BrandThemes;
};

export const mq = facepaint(['@media(min-width: 775px)']);

export function ThemeProviderOmni({
  company,
  theme,
  children,
}: React.PropsWithChildren<ThemesType>) {
  const themeSelected = themes[company][theme];

  return (
    <ThemeProvider theme={themeSelected}>
      <Global
        styles={css`
          html,
          body {
          }

          @media screen and (max-width: 768px) {
          }
        `}
      />

      {children}
    </ThemeProvider>
  );
}
