import { Component, Prop, getMode, h } from '@stencil/core';
import { Mode, getIonMode } from '../../utils/utils';
import { applyStyle } from '../../utils/style-engine';

/**
 * @virtualProp {"ios" | "md" | "os"} theme - The theme determines which styles to use.
 */
@Component({
  tag: 'my-button',
  styleUrls: {
    ios: 'button.ios.css',
    md: 'button.md.css',
    os: 'button.os.css',
  },
  shadow: true,
})
export class Button {
  @Prop() mode: Mode;

  connectedCallback() {
    /* theme isn't resolved until after connectedCallback */
    /* would need to figure out how to get that to work */
    applyStyle(this, 'my-button', 'os');
  }

  componentWillLoad() {
    const theme = getMode(this);
    const ionMode = getIonMode(this);
  }

  render() {
    const mode = getIonMode(this);
    return (
      <button>
        <slot></slot>
        {mode === 'md' && <div class="ripple-effect"></div>}
      </button>
    );
  }
}
