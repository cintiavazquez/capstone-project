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

