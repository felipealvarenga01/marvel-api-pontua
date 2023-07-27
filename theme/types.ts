declare const Themes: Themes.Themes;

declare namespace Themes{
  export interface Theme{
    asset: Asset
    borderRadius: BorderRadius
    color: Color
    elevation: Elevation
    opacity: Opacity
    size: Size
    spacing: Spacing
    typography: Typography
    alert: Alert
    appBarTop: AppBarTop
    avatar: Avatar
    badge: Badge
    button: Button
    card: Card
    checkbox: Checkbox
    counter: Counter
    dialog: Dialog
    divider: Divider
    expansionPanel: ExpansionPanel
    iconButton: IconButton
    image: Image
    link: Link
    navigationDrawer: NavigationDrawer
    progressIndicator: ProgressIndicator
    radioButton: RadioButton
    rating: Rating
    shortcut: Shortcut
    snackbar: Snackbar
    tab: Counter2
    tag: Tag
    textField: TextField
    h50_54_700: Text
    h44_56_700: Text
    h38_38_600: Text
    h34_34_600: Text
    h30_30_600: Text
    h26_26_600: Text
    h24_24_600: Text
    h22_38_500: Text
    h22_22_600: Text
    h20_20_600: Text
    b20_30_500: Text
    b20_30_600: Text
    b18_30_500: Text
    b18_18_600: Text
    b16_25_500: Text
    b16_16_500: Text
    b16_16_600: Text
    b15_16_500: Text
    b15_24_500: Text
    b15_15_600: Text
    b14_14_500: Text
    b14_22_500: Text
    b14_14_600: Text
    b14_14_700: Text
    b13_14_500: Text
    b13_21_500: Text
    b13_14_600: Text
    b13_14_700: Text
    b12_12_500: Text
    b12_12_600: Text
    b12_12_700: Text
    b11_12_600: Text
    b10_10_600: Text
    b9_10_600: Text
  }
  
  export interface Text {
    fontSize: number
    fontWeight: number
    lineHeight: number
    letterSpacing: number
  }
  export interface TextField {
    label: Title
    content: Title
    helperText: Title
    borderRadius: number
  }
  export interface Tag {
    label: Title
    small: Small
    standard: Small
    color: Color12
  }
  export interface Color12 {
    background: Background
    label: Background
  }
  export interface Background {
    primary: string
    secondary: string
    success: string
    alert: string
    warning: string
    link: string
  }
  export interface Small {
    borderRadius: BorderRadius2
  }
  export interface Snackbar {
    content: Title
    borderRadius: number
  }
  export interface Shortcut {
    label: Title
    contained: Contained2
    outlined: Contained2
    borderRadius: number
  }
  export interface Contained2 {
    color: Color11
  }
  export interface Color11 {
    enable: Enable3
    disable: Enable3
    hover: Enable3
    focus: Enable3
  }
  export interface Enable3 {
    primary: Enable
    neutral: Enable
  }
  export interface Rating {
    counter: Counter2
    input: Counter2
  }
  export interface Counter2 {
    label: Title
  }
  export interface RadioButton {
    label: Title
    borderRadius: number
    color: Color10
  }
  export interface Color10 {
    select: Select
    unselect: Select
    disable: Select
  }
  export interface Select {
    border: string
    content: string
  }
  export interface ProgressIndicator {
    standard: Semi
    semi: Semi
    medium: Semi
    large: Semi
    color: Color9
  }
  export interface Color9 {
    stroke: string
    layer: string
  }
  export interface NavigationDrawer {
    header: Header
    section: Section
  }
  export interface Section {
    title: Title
    item: Title
  }
  export interface Header {
    title: Title
    subtitle: Title
  }
  export interface Link {
    label: Title
    color: Color8
  }
  export interface Color8 {
    label: Label
  }
  export interface Label {
    enable: Enable2
  }
  export interface Enable2 {
    default: string
    light: string
  }
  export interface Image {
    borderRadius: BorderRadius3
  }
  export interface BorderRadius3 {
    medium: number
    none: number
  }
  export interface IconButton {
    semi: Semi
    semiX: Semi
    medium: Semi
    standard: Standard3
    float: Standard3
    overlay: Standard3
  }
  export interface Standard3 {
    color: Color7
  }
  export interface Color7 {
    enable: Color5
    disable: Color5
    hover: Color5
    focus: Color5
  }
  export interface Semi {
    borderRadius: number
  }
  export interface ExpansionPanel {
    title: Title
    borderRadius: number
  }
  export interface Divider {
    color: Color5
  }
  export interface Dialog {
    title: Title
    body: Title
    borderRadius: number
    color: Color6
  }
  export interface Color6 {
    background: string
    title: string
  }
  export interface Counter {
    label: Title
    content: Title
    borderRadius: number
  }
  export interface Checkbox {
    label: Title
    borderRadius: number
  }
  export interface Card {
    borderRadius: BorderRadius2
    color: Color5
  }
  export interface Color5 {
    background: string
  }
  export interface BorderRadius2 {
    enable: number
    disable: number
  }
  export interface Button {
    label: Title
    borderRadius: number
    contained: Contained
    outlined: Contained
    text: Contained
  }
  export interface Contained {
    color: Color4
  }
  export interface Color4 {
    enable: Enable
    disable: Enable
    hover: Enable
    focus: Enable
  }
  export interface Enable {
    background: string
    border: string
    label: string
  }
  export interface Badge {
    label: Title
    standard: Standard2
    dot: Standard2
    color: Color3
  }
  export interface Color3 {
    primary: Color2
    secondary: Color2
    success: Color2
    alert: Color2
  }
  export interface Standard2 {
    height: number
    borderRadius: number
  }
  export interface Avatar {
    standard: Standard
    semi: Standard
    semiX: Standard
    medium: Standard
    largeXXX: Standard
    primary: Display
    fallback: Display
    color: Color2
  }
  export interface Color2 {
    background: string
    label: string
  }
  export interface Standard {
    fontSize: number
    letterSpacing: number
    lineHeight: number
    borderRadius: number
  }
  export interface AppBarTop {
    title: Title
  }
  export interface Alert {
    title: Title
    content: Title
    borderRadius: number
  }
  export interface Title {
    fontSize: number
    letterSpacing: number
    lineHeight: number
    primary: Display
    fallback: Display
  }
  export interface Typography {
    fontSize: FontSize
    lineHeight: LineHeight
    fontFamily: FontFamily
    fontWeight: FontWeight
    display: Display
    headline: Display
    body: Body2
    fallback: Display
  }
  export interface Body2 {
    regular: Display
    bold: Display
  }
  export interface Display {
    fontFamily: string
    fontWeight: number
  }
  export interface FontWeight {
    regular: number
    medium: number
    semibold: number
    bold: number
  }
  export interface FontFamily {
    primary: string
    secondary: string
    branding: string
    code: string
  }
  export interface LineHeight {
    auto: number
    reset: number
    small: number
    medium: number
    large: number
  }
  export interface FontSize {
    level1: number
    level2: number
    level3: number
    level4: number
    level5: number
    level6: number
    level7: number
    level8: number
    level9: number
    level10: number
    level11: number
    level12: number
    level13: number
    level14: number
    level15: number
    level16: number
    level17: number
    level18: number
  }
  export interface Spacing {
    none: number
    micro: number
    tiny: number
    small: number
    standard: number
    semi: number
    large: number
    xLarge: number
  }
  export interface Size {
    none: number
    micro: number
    tiny: number
    small: number
    standard: number
    semi: number
    semiX: number
    medium: number
    mediumX: number
    large: number
    largeX: number
    largeXX: number
    largeXXX: number
    huge: number
    hugeX: number
    hugeXX: number
    hugeXXX: number
    veryHuge: number
  }
  export interface Opacity {
    transparent: number
    lower: number
    veryLow: number
    low: number
    mediumLow: number
    disabledLow: number
    disabled: number
    medium: number
    mediumHigh: number
    high: number
    veryHigh: number
    opaque: number
  }
  export interface Elevation {
    none: string
    selectClick: string
    form: string
    intense: string
    padrao: string
  }
  export interface Color{
    primary: string
    primaryActive: string
    primaryLight: string
    success: string
    successActive: string
    successLight: string
    danger: string
    dangerActive: string
    dangerLight: string
    info: string
    infoActive: string
    infoLight: string
    alert: string
    warning: string
    warningActive: string
    warningLight: string
    white: string
    whiteActive: string
    dark: string
    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray500: string
    gray600: string
    gray700: string
    gray800: string
    gray900: string
  }
  export interface BorderRadius{
    none: number
    small: number
    medium: number
    large: number
    xLarge: number
    xxLarge: number
  }
  export interface Asset{
    font: Font
    brand: Brand
  }
  export interface BrandIcon {
    light: BrandDefault
    dark: BrandDefault
  }
  export interface BrandLogoDefault {
    azul: BrandDefault
    branco: BrandDefault
    laranja: BrandDefault
  }
  export interface BrandLogoCustom {
    azul: BrandDefault
    branco: BrandDefault
  }
  export interface BrandLogo {
    light: BrandDefault
    dark: BrandDefault
  }
  export interface Brand {
    icon: BrandIcon
    logo: BrandLogo
    default: BrandDefault
    custom: BrandCustom
  }
  export interface BrandDefault {
    file: string
    width: number
    height: number
  }
  export interface BrandCustom{
    optionA: OptionCustom
  }
  export  interface OptionCustom{
    file: string
    width: number
    height: number
    padding: number
    margin: number
  }
  export interface Font {
    file: File
  }
  export interface File {
    display: string
    headline: string
    body: Body
  }
  export interface Body {
    regular: string
    bold: string
  }
  
  export interface BrandThemes {
    dark: Theme
    light: Theme
  }
  export interface Themes {
    pontua: BrandThemes
  }
}
//@ts-ignore
export = Themes