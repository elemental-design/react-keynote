import { Slide as KeynoteSlide } from 'keynote-js';

export default class Slide {
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
      if (child.type === 'slide_title') {
        this.slide.setTitle(child.props.children, child.props.style);
        continue;
      } else if (child.type === 'slide_body') {
        this.slide.setBody(child.props.children, child.props.style);
        continue;
      }
      // await child.render({ layout: nodeTree.children[i].layout });
      await child.render({ parent: { id: this.id } });

      i += 1;
    }
  }

  async render({ parent }) {
    const { name, style } = this.props;

    this.slide = new KeynoteSlide({
      ...this.props,
      parent,
    });

    await this.slide.create();


    await this.renderChildren();
  }
}
