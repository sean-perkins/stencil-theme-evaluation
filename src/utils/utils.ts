import { getMode } from "@stencil/core";

export const getIonMode = (ref?: any) => {
  if (ref?.mode) {
    return ref.mode;
  }

  const theme = getMode(ref);

  if (theme === 'ios' || theme === 'md') {
    return theme;
  }

  // TODO: Need to fallback to the platform if we cannot find the mode
  return 'md';
}

export const getIonTheme = (ref: any) => {
  return getMode(ref);
}

export type Mode = 'ios' | 'md';
export type Theme = 'ios' | 'md' | 'os';
