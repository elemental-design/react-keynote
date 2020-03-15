import { Slide as KeynoteSlide } from 'keynote-js';

export default class View {
  constructor(_, props) {
    this.props = props;

    this.slide = new KeynoteSlide(props);

    this.children = [];
  }

  appendChild(child) {
    child.parent = this;

    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    if (index !== -1) {
      child.parent = null;
      this.children.splice(index, 1);
    }
  }

  async renderChildren() {
    const { children, props } = this;

    let i = 0;
    for (const child of children) {
      // await child.render({ layout: nodeTree.children[i].layout });
      await child.render({ parent: { id: this.id } });

      i += 1;
    }
  }

  async render({ layout }) {
    const { name, style } = this.props;
    const { left, top } = layout;
    const { width, height, backgroundColor } = style;


    await this.slide.create();


    await this.renderChildren();
  }
}
