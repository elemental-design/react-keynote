
import * as TestRenderer from 'react-test-renderer';
import yoga from 'yoga-layout-prebuilt';

import computeYogaTree from './jsonUtils/computeYogaTree';

class Slide {
  constructor(props, children, pptx) {
    this.props = props;
    this.pptx = pptx;
  }

  async render() {
    const { title, subtitle, style, children } = this.props;

    let slide;

    console.log('reached here');

    if (title) {
      slide = this.pptx.makeTitleSlide();
      console.log('made title slide');

      slide.setTitle(title);
      if (subtitle) {
        slide.setSubTitle(subtitle);
      }
    } else {
      slide = this.pptx.makeNewSlide();
    }

    return slide;
  }
}

class Text {
  constructor(props, children, pptx, slide) {
    this.props = props;
    this.children = children;
    this.pptx = pptx;
    this.slide = slide;
  }

  async render() {
    const { children } = this;
    const { style } = this.props;

    if (!children) {
      return true;
    }
    console.log({ layout: this.props.layout });
    const { width, height } = this.props.layout;

    if (Array.isArray(children)) {
      for (const child of children) {
        if (typeof child === 'string') {
          console.log({ child });
          const { fontSize = 16, color = '#000000', textAlign } = style || {};

          this.slide.addText(child, {
            // y: 66,
            // x: 'c',
            // cx: '50%',
            cx: width,
            cy: height,
            // cy: 60,
            font_size: fontSize,
            align: textAlign,
            color: color.includes('#') ? color.slice(1) : color,
          });
        }
      }
    }

    return true;
  }
}

class Document {
  constructor(props, children, pptx) {
    this.props = props;
    this.pptx = pptx;
  }

  async render() {
    const { title, style } = this.props;
    const { width, height } = this.props.layout || {};

    console.log({ layout: this.props.layout });

    this.pptx.setDocTitle(title);
    this.pptx.setSlideSize(width, height, 'screen16x9', 0, 0);

    return true;
  }
}

const renderers = {
  document: Document,
  slide: Slide,
  text: Text,
};

const walkTree = async (node, yogaNode, pptx, slide) => {
  const { type, props, children } = node;

  console.log({ type, props, children, slide: Boolean(slide) });

  try {
    props.layout = {
      left: yogaNode.getComputedLeft(),
      right: yogaNode.getComputedRight(),
      top: yogaNode.getComputedTop(),
      bottom: yogaNode.getComputedBottom(),
      width: yogaNode.getComputedWidth(),
      height: yogaNode.getComputedHeight(),
    };

    const Renderer = renderers[type];
    const renderer = new Renderer(props, children, pptx, slide);

    const result = await renderer.render();

    if (result && children) {
      let index = 0;
      for (const child of children) {
        index += 1;

        if (child && typeof child !== 'string') {
          if (type === 'slide') {
            await walkTree(child, yogaNode, pptx, result);
          } else {
            // await walkTree(child, yogaNode.getChild(index), pptx, slide);
            await walkTree(child, yogaNode, pptx, slide || result);
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
    console.log('ERROR: ', { type, props, children });
  }
}

const renderTree = async (element, pptx) => {
  let renderer;

  if (typeof TestRenderer.act !== 'undefined') {
    TestRenderer.act(() => {
      // synchronous callback
      renderer = TestRenderer.create(element);
    });
  } else {
    renderer = TestRenderer.create(element);
  }

  if (!renderer) {
    throw new Error('Cannot access react renderer');
  }

  const json = renderer.toJSON();
  if (!json) {
    throw new Error('Cannot render react element');
  }

  // const yogaNode = computeYogaTree(json, new Context());
  const yogaNode = computeYogaTree(json, {});
  yogaNode.calculateLayout(undefined, undefined, yoga.DIRECTION_LTR);

  // console.dir(json, { depth: null });

  await walkTree(json, yogaNode, pptx);
  

  return json;
}

export default renderTree;
