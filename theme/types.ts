declare const Themes: Themes.Themes;

declare namespace Themes {
  export interface Theme {
    borderRadius: BorderRadius;
    color: Color;
    size: Size;
    spacing: Spacing;
    typography: Typography;
    button: Button;
    card: Card;
    iconButton: IconButton;
    image: Image;
    link: Link;
    navigationDrawer: NavigationDrawer;
    tab: Counter2;
    textField: TextField;
  }
  export interface Text {
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
  }
  export interface TextField {
    label: Title;
    content: Title;
    helperText: Title;
    borderRadius: number;
  }
  export interface Tag {
    label: Title;
    small: Small;
    standard: Small;
    color: Color12;
  }
  export interface Color12 {
    background: Background;
    label: Background;
  }
  export interface Background {
    primary: string;
    secondary: string;
    success: string;
    alert: string;
    warning: string;
    link: string;
  }
  export interface Small {
    borderRadius: BorderRadius2;
  }
  export interface Counter2 {
    label: Title;
  }
  export interface Select {
    border: string;
    content: string;
  }
  export interface NavigationDrawer {
    header: Header;
    section: Section;
  }
  export interface Section {
    title: Title;
    item: Title;
  }
  export interface Header {
    title: Title;
    subtitle: Title;
  }
  export interface Link {
    label: Title;
    color: Color8;
  }
  export interface Color8 {
    label: Label;
  }
  export interface Label {
    enable: Enable2;
  }
  export interface Enable2 {
    default: string;
    light: string;
  }
  export interface Image {
    borderRadius: BorderRadius3;
  }
  export interface BorderRadius3 {
    medium: number;
    none: number;
  }
  export interface IconButton {
    semi: Semi;
    semiX: Semi;
    medium: Semi;
    standard: Standard3;
    float: Standard3;
    overlay: Standard3;
  }
  export interface Standard3 {
    color: Color7;
  }
  export interface Color7 {
    enable: Color5;
    disable: Color5;
    hover: Color5;
    focus: Color5;
  }
  export interface Semi {
    borderRadius: number;
  }
  export interface Card {
    borderRadius: BorderRadius2;
    color: Color5;
  }
  export interface Color5 {
    background: string;
  }
  export interface BorderRadius2 {
    enable: number;
    disable: number;
  }
  export interface Button {
    label: Title;
    borderRadius: number;
    contained: Contained;
    outlined: Contained;
    text: Contained;
  }
  export interface Contained {
    color: Color4;
  }
  export interface Color4 {
    enable: Enable;
    disable: Enable;
    hover: Enable;
    focus: Enable;
  }
  export interface Enable {
    background: string;
    border: string;
    label: string;
  }
  export interface Title {
    fontSize: number;
    letterSpacing: number;
    lineHeight: number;
    primary: Display;
    fallback: Display;
  }
  export interface Typography {
    fontSize: FontSize;
    lineHeight: LineHeight;
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    display: Display;
    headline: Display;
    body: Body2;
    fallback: Display;
  }
  export interface Body2 {
    regular: Display;
    bold: Display;
  }
  export interface Display {
    fontFamily: string;
    fontWeight: number;
  }
  export interface FontWeight {
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  }
  export interface FontFamily {
    primary: string;
    secondary: string;
    branding: string;
    code: string;
  }
  export interface LineHeight {
    auto: number;
    reset: number;
    small: number;
    medium: number;
    large: number;
  }
  export interface FontSize {
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
    level6: number;
    level7: number;
    level8: number;
    level9: number;
    level10: number;
    level11: number;
    level12: number;
    level13: number;
    level14: number;
    level15: number;
    level16: number;
    level17: number;
    level18: number;
  }
  export interface Spacing {
    none: number;
    nano: number;
    micro: number;
    tiny: number;
    small: number;
    standard: number;
    semi: number;
    large: number;
    xLarge: number;
  }
  export interface Size {
    none: number;
    micro: number;
    tiny: number;
    small: number;
    standard: number;
    semi: number;
    semiX: number;
    medium: number;
    mediumX: number;
    large: number;
    largeX: number;
    largeXX: number;
    largeXXX: number;
    huge: number;
    hugeX: number;
    hugeXX: number;
    hugeXXX: number;
    veryHuge: number;
  }
  export interface Color {
    primary: string;
    primaryActive: string;
    primaryLight: string;
    white: string;
    dark: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    success: string;
    black: string;
    divider: string;
    blue200: string;
    blue500: string;
    blue600: string;
    blue800: string;
    orange400: string;
    orange500: string;
    graybackground: string;
  }
  export interface BorderRadius {
    none: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    xxLarge: number;
    xxxLarge: number;
  }
  export interface BrandThemes {
    light: Theme;
  }
  export interface Themes {
    pontua: BrandThemes;
  }
}
//@ts-ignore
export = Themes;
