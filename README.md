# react-keynote
React keynote renderer from jsx (work in progress and API is not stable yet).

## Getting Started

```sh
npm i react-keynote
```

## Example Code

```jsx
import { render, Document, Slide, View, Text } from 'react-keynote';

render((
  <Document>
    <Slide>
      <Slide.Title>
        Welcome to the Slideshow!
      </Slide.Title>
      <Slide.Body>
        Here is some lorem ipsum...
      </Slide.Body>
    <Slide>
    <Slide>
      <View style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>
          Some centered text.
        </Text>
      </View>
    </Slide>
  </Document>
));

/* or 
const jsx = (
  ...
);

const [document] = document.getDocuments({ name: 'Existing Document Name' });

render(jsx, document);
*/

```
