# react-keynote
React keynote renderer from jsx

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
), path.resolve(__dirname), context.document());

```
