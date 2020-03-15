export default class Root {
  constructor(_, props) {
    this.document = null;
  }

  appendChild(child) {
    this.document = child;
  }

  removeChild() {
    this.document = null;
  }

  async render() {
    await this.document.render();
  }
}
