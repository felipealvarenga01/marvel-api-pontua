const borderRadius = {
  none: 0,
  small: 2,
  medium: 4,
  large: 8,
  xLarge: 10,
  xxLarge: 16,
  xxxLarge: 28,
};
const button = {
  label: {
    fontSize: 14,
    letterSpacing: 1.23,
    lineHeight: 1.5,
    primary: {
      fontFamily: 'Epilogue',
      fontWeight: 700,
    },
    fallback: {
      fontFamily: 'Arial',
      fontWeight: 500,
    },
  },
  borderRadius: 4,
  contained: {
    color: {
      enable: {
        background: '#f4ab34',
        border: '#FFFFFF00',
        label: '#333333',
      },
      disable: {
        background: '#777777',
        border: '#FFFFFF00',
        label: '#fafafa',
      },
      hover: {
        background: '#ef8426',
        border: '#FFFFFF00',
        label: '#333333',
      },
      focus: {
        background: '#F8C675',
        border: '#FFFFFF00',
        label: '#333333',
      },
    },
  },
  outlined: {
    color: {
      enable: {
        background: '#FFFFFF00',
        border: '#f4ab34',
        label: '#fafafa',
      },
      disable: {
        background: '#FFFFFF00',
        border: '#777777',
        label: '#bbbbbb',
      },
      hover: {
        background: '#343a40',
        border: '#f4ab34',
        label: '#fafafa',
      },
      focus: {
        background: '#495057',
        border: '#f4ab34',
        label: '#fafafa',
      },
    },
  },
  text: {
    color: {
      enable: {
        background: '#FFFFFF00',
        border: '#FFFFFF00',
        label: '#fafafa',
      },
      disable: {
        background: '#FFFFFF00',
        border: '#FFFFFF00',
        label: '#bbbbbb',
      },
      hover: {
        background: '#343a40',
        border: '#FFFFFF00',
        label: '#fafafa',
      },
      focus: {
        background: '#495057',
        border: '#FFFFFF00',
        label: '#fafafa',
      },
    },
  },
};
const card = {
  borderRadius: {
    enable: 4,
    disable: 0,
  },
  color: {
    background: '#333333',
  },
};
const checkbox = {
  label: {
    fontSize: 14,
    letterSpacing: 0.22,
    lineHeight: 1.5,
    primary: {
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    fallback: {
      fontFamily: 'Arial',
      fontWeight: 400,
    },
  },
  borderRadius: 2,
};
const iconButton = {
  semi: {
    borderRadius: 16,
  },
  semiX: {
    borderRadius: 20,
  },
  medium: {
    borderRadius: 24,
  },
  standard: {
    color: {
      enable: {
        background: '#FFFFFF00',
      },
      disable: {
        background: '#FFFFFF00',
      },
      hover: {
        background: '#343a40',
      },
      focus: {
        background: '#495057',
      },
    },
  },
  float: {
    color: {
      enable: {
        background: '#333333',
      },
      disable: {
        background: '#777777',
      },
      hover: {
        background: '#343a40',
      },
      focus: {
        background: '#495057',
      },
    },
  },
  overlay: {
    color: {
      enable: {
        background: '#ffffff',
      },
      disable: {
        background: '#ffffff',
      },
      hover: {
        background: '#ffffff',
      },
      focus: {
        background: '#ffffff',
      },
    },
  },
};
const image = {
  borderRadius: {
    medium: 4,
    none: 0,
  },
};
const link = {
  label: {
    fontSize: 16,
    letterSpacing: 0.51,
    lineHeight: 1.5,
    primary: {
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    fallback: {
      fontFamily: 'Arial',
      fontWeight: 400,
    },
  },
  color: {
    label: {
      enable: {
        default: '#227bbd',
        light: '#777777',
      },
    },
  },
};
const navigationDrawer = {
  header: {
    title: {
      fontSize: 20,
      letterSpacing: 0.24,
      lineHeight: 1.25,
      primary: {
        fontFamily: 'Roboto',
        fontWeight: 500,
      },
      fallback: {
        fontFamily: 'Arial',
        fontWeight: 400,
      },
    },
    subtitle: {
      fontSize: 14,
      letterSpacing: 0.22,
      lineHeight: 1.5,
      primary: {
        fontFamily: 'Roboto',
        fontWeight: 400,
      },
      fallback: {
        fontFamily: 'Arial',
        fontWeight: 400,
      },
    },
  },
  section: {
    title: {
      fontSize: 12,
      letterSpacing: 0.38,
      lineHeight: 1.5,
      primary: {
        fontFamily: 'Roboto',
        fontWeight: 400,
      },
      fallback: {
        fontFamily: 'Arial',
        fontWeight: 400,
      },
    },
    item: {
      fontSize: 14,
      letterSpacing: 0.22,
      lineHeight: 1.5,
      primary: {
        fontFamily: 'Roboto',
        fontWeight: 400,
      },
      fallback: {
        fontFamily: 'Arial',
        fontWeight: 400,
      },
    },
  },
};
const tab = {
  label: {
    fontSize: 14,
    letterSpacing: 1.23,
    lineHeight: 1.5,
    primary: {
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    fallback: {
      fontFamily: 'Arial',
      fontWeight: 400,
    },
  },
};
const textField = {
  label: {
    primary: {
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    fallback: {
      fontFamily: 'Arial',
      fontWeight: 400,
    },
    fontSize: 14,
    letterSpacing: 0.11,
    lineHeight: 1.5,
  },
  content: {
    primary: {
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    fallback: {
      fontFamily: 'Arial',
      fontWeight: 400,
    },
    fontSize: 16,
    letterSpacing: 0.51,
    lineHeight: 1.25,
  },
  helperText: {
    primary: {
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    fallback: {
      fontFamily: 'Arial',
      fontWeight: 400,
    },
    fontSize: 12,
    letterSpacing: 0.38,
    lineHeight: 1.25,
  },
  borderRadius: 4,
};
const heading1 = {
  fontSize: 96,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
};
const heading2 = {
  fontSize: 60,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
};
const heading3 = {
  fontSize: 48,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
};
const heading4 = {
  fontSize: 34,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0.27,
};
const heading5 = {
  fontSize: 24,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0,
};
const heading6 = {
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 0.24,
};
const subtitle1 = {
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 0.13,
};
const subtitle2 = {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 0.11,
};
const body1 = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0.51,
};
const body2 = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0.22,
};
const caption = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: 0.38,
};
const size = {
  none: 0,
  micro: 4,
  tiny: 8,
  small: 16,
  standard: 24,
  semi: 32,
  semiX: 40,
  medium: 48,
  mediumX: 56,
  large: 64,
  largeX: 72,
  largeXX: 80,
  largeXXX: 88,
  huge: 96,
  hugeX: 128,
  hugeXX: 144,
  hugeXXX: 192,
  veryHuge: 256,
};
const typography = {
  fontSize: {
    level1: 13,
    level2: 14,
    level3: 16,
    level4: 18,
    level5: 20,
    level6: 23,
    level7: 26,
    level8: 29,
    level9: 32,
    level10: 36,
    level11: 41,
    level12: 46,
    level13: 52,
    level14: 58,
    level15: 66,
    level16: 74,
    level17: 83,
  },
  lineHeight: {
    auto: 1,
    reset: 1,
    small: 1.25,
    medium: 1.5,
    large: 2,
  },
  fontFamily: {
    primary: 'Roboto',
    secondary: 'sans-serif',
    branding: 'Roboto',
    code: 'Roboto Mono',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
  },
  display: {
    fontFamily: 'Roboto',
    fontWeight: 700,
  },
  headline: {
    fontFamily: 'Roboto',
    fontWeight: 500,
  },
  body: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    bold: {
      fontFamily: 'Roboto',
      fontWeight: 700,
    },
  },
  fallback: {
    fontFamily: 'Arial',
    fontWeight: 400,
  },
};
const spacing = {
  none: 0,
  nano: 4,
  micro: 6,
  tiny: 8,
  small: 16,
  standard: 24,
  semi: 32,
  large: 48,
  xLarge: 64,
};
const color = {
  white: '#FFFFFF',
  black: '#000000',
  divider: '#ebeff2',
  blue200: '#747d94',
  blue500: '#293D71',
  blue600: '#213770',
  blue800: '#00113d',
  orange400: '#f43724',
  orange500: '#f21a05',
  graybackground: '#f5f6f8',
  gray100: '#eaecf0',
  gray200: '#D0D5DD',
  gray300: '#f9fafb',
  gray400: '#B7B7B7',
  gray500: '#777777',
  success: '#50cd89',
};
const pontuaLightTheme = {
  borderRadius,
  button,
  card,
  checkbox,
  iconButton,
  image,
  link,
  navigationDrawer,
  tab,
  textField,
  size,
  typography,
  spacing,
  color,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  caption,
};

const themes = {
  pontua: {
    light: pontuaLightTheme,
  },
};

export { themes as default };
