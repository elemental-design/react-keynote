import Root from './root';
import Document from './document';
import Text from './text';
import Slide from './slide';
import View from './view';


class SlideTitle {
  constructor(_, props) {
    this.props = props;
    this.type = 'slide_title';

    console.log({ props });
  }
}
class SlideBody {
  constructor(_, props) {
    this.props = props;
    this.type = 'slide_body';

    console.log({ props });
  }
}

const constructors = {
  document: Document,
  slide: Slide,
  slide_title: SlideTitle,
  slide_body: SlideBody,
  text: Text,
  view: View,
  root: Root,
};

function createInstance(element, root) {
  const { type, props = {} } = element;

  if (constructors[type]) {
    return new constructors[type](root, props);
  }

  throw new Error(`Invalid element of type ${type} passed to react-keynote renderer`);
}

export { createInstance };
