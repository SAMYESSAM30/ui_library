import React from 'react';
import '../src/styles/globals.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    direction: {
      description: 'Text direction',
      defaultValue: 'ltr',
      toolbar: {
        title: 'Direction',
        icon: 'paragraph',
        items: [
          { value: 'ltr', title: 'LTR (Left to Right)' },
          { value: 'rtl', title: 'RTL (Right to Left)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const direction = context.globals.direction || 'ltr';
      const fontFamily = direction === 'rtl' ? 'El Messiri, sans-serif' : 'Noto Sans, sans-serif';
      return React.createElement(
        'div',
        {
          dir: direction,
          className: direction === 'rtl' ? 'rtl' : 'ltr',
          style: {
            fontFamily: fontFamily,
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
