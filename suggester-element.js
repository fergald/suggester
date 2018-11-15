import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `suggester-element`
 * An autocompleting/suggesting element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SuggesterElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'suggester-element',
      },
    };
  }
}

window.customElements.define('suggester-element', SuggesterElement);
