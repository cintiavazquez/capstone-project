import { GlobalStyle } from "../src/stories/GlobalStyle";

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
