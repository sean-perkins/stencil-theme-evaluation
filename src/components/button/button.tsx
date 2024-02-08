import { Component, Prop, getMode, h } from '@stencil/core';
import { Mode, getIonMode } from '../../utils/utils';

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

  componentWillLoad() {
    const theme = getMode(this);
    const ionMode = getIonMode(this);

    console.log('The theme is: ', theme);
    console.log('The mode is: ', ionMode);
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
