import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
/*import SuggestState from './suggest-state.js';
import LongestPrefixPicker from './longest-prefix-picker.js';
*/

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

/*
let el = document.createElement("div");
let suggestState = new SuggestState(el);
let longestPrefixPicker = new LongestPrefixPicker(suggestState);
suggestState.addSuggestionSet("goo", ["good", "google"]);
console.log("Picking for golf, got " + longestPrefixPicker.pick("golf"));
suggestState.addSuggestionSet("go", ["gone", "goal"]);
console.log("Picking for golf, got " + longestPrefixPicker.pick("golf"));
suggestState.addSuggestionSet("g", ["go", "get"]);
console.log("Picking for golf, got " + longestPrefixPicker.pick("golf"));
*/