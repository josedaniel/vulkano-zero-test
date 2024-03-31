/* eslint-disable import/prefer-default-export */
import { html, css, LitElement } from 'lit';

export class VulkanoWebcomponent extends LitElement {

  // createRenderRoot() {
  //   return this;
  // }

  static styles = css`p {
    color: black;
    border: 1px solid #333;
    padding: 5px;
  }`;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = 'Jesús David';
  }

  render() {
    return html`<p>Buenos  días ${this.name}!</p>`;
  }
}

customElements.define('vulkano-webcomponent', VulkanoWebcomponent);
