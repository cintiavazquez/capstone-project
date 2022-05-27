import { GlobalStyle } from "../src/stories/GlobalStyle";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  ),
});

Object.defineProperty(NextImage, "__esModule", {
  configurable: true,
  value: true
});



export const decorators = [
  (Story) => {
    return (
      <div style={{ margin: '3em' }}>
         <GlobalStyle />
        <Story />
      </div>
    );
  },
];

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'grey',
        value: '#808080',
      },
    ],
  },
};

