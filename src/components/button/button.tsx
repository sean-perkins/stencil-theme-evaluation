import { Component, Prop, h } from '@stencil/core';
import { Mode, getIonMode, getIonTheme } from '../../utils/utils';

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
  /**
   * The mode refers to the feel of the button. This could reflect
   * iOS specific behaviors, Android (MD) specific behaviors, or
   * eventually web specific behaviors.
   *
   * This demo only includes "md" and "ios" modes to align with Ionic Framework.
   */
  @Prop() mode: Mode;

  @Prop() disabled = false;

  componentWillLoad() {
    const theme = getIonTheme(this);
    const ionMode = getIonMode(this);

    console.log('The theme is: ', theme);
    console.log('The mode is: ', ionMode);
  }

  render() {
    const mode = getIonMode(this);
    const { disabled } = this;
    return (
      <button disabled={disabled}>
        <slot></slot>
        {mode === 'md' && <div class="ripple-effect"></div>}
      </button>
    );
  }
}
