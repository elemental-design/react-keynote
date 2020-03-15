import { Document as KeynoteDocument } from 'keynote-js';

export default class Document {
  constructor(_, props) {
    this.document = new KeynoteDocument(props);

    this.props = props;

    this.children = [];
  }

  appendChild(child) {
    // child.parent = this;

    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    if (index !== -1) {
      child.parent = null;
      this.children.splice(index, 1);
    }
  }

  async renderSlides() {
    const { children, props } = this;

    const doc = await this.document.get();

    // const nodeTree = {
    //   style: props.style,
    //   children: children.map((child) => ({ style: child.props.style }))
    // };

    // computeLayout(nodeTree);

    let i = 0;
    for (const child of children) {
      if (i === 0) {
        const slides = await this.document.getSlides();

        if (child.props.title) {
          slides[0].setTitle(child.props.title, child.props.style);
        }
        if (child.props.body) {
          slides[0].setTitle(child.props.body, child.props.style);
        }
      } else {
        // await child.render({ parent: this.document, layout: nodeTree.children[i].layout });
        await child.render({ parent: { id: doc.id } });
      }
      i += 1;
    }
  }

  async render() {
    await this.document.create();

    await this.renderSlides();
  }
}
