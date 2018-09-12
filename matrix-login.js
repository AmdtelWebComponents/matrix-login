import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `matrix-login`
 * Login screen for Matrix
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MatrixLogin extends PolymerElement {
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
        value: 'matrix-login',
      },
    };
  }
}

window.customElements.define('matrix-login', MatrixLogin);
