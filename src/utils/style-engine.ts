import { styleMap } from "../global";

export const registerStyle = (tagName: string, cssText: string) => {
  styleMap.set(tagName, cssText);
}

export const getStyle = (tagName: string) => {
  return styleMap.get(tagName);
}

export const applyStyle = (ref: any, tagName: string, theme: string) => {
  if (theme === 'os') {
    if (styleMap.has(tagName)) {
      const styleMod = getStyle(tagName);
      const existingStyle = ref.constructor.style.os;
      ref.constructor.style.os = existingStyle + styleMod;
    }
  }
}
