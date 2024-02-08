import { setMode } from "@stencil/core";

const defaultTheme = 'md';

const isAllowedTheme = (theme: string) => ['ios', 'md', 'os'].includes(theme);

export const initialize = () => {
  setMode(el => {
    while (el) {
      const theme = el.getAttribute('theme');
      if (theme) {
        if (isAllowedTheme(theme)) {
          return theme;
        }
      }
      el = el.parentElement;
    }
    return defaultTheme;
  });
}

export default initialize;

