export function applyOpacityToHex(hex: string, opacity: number): string {
  const hexWithoutHash = hex.replace('#', '');
  const hexWithOpacity =
    hexWithoutHash + Math.floor(opacity * 255).toString(16);
  
  return `#${hexWithOpacity}`;
}
