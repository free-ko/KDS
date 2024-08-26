import _ from 'lodash';

import { Color, Font } from '../tokens';

interface ITailwindFontObject {
  [key: string]: [
    string,
    { lineHeight: string; letterSpacing: string; fontWeight: string }
  ];
}

/**
 * tailwind.config.js 파일에 추가할 수 있는 `theme`의 `color` 객체를 생성합니다.
 *
 *
 *  * 예시:
 * 입력 `Color` 객체:
 * { 'red100': '#ff0000', 'red200': '#cc0000', 'blue100': '#0000ff' }
 *
 * @returns  {
 *   red: { '100': '#ff0000', '200': '#cc0000' },
 *   blue: { '100': '#0000ff' }
 * }
 */
export const generateColorPalette = () => {
  return _.transform(
    Color,
    (
      result: { [key: string]: { [key: string]: string } },
      value: string,
      key: string
    ) => {
      const match = key.match(/([a-zA-Z]+)(\d+)/);

      if (match) {
        const [, color, number] = match;

        result[color] = result[color] || {};
        result[color][number] = value;
      }
    },
    {} as { [key: string]: { [key: string]: string } }
  );
};

/**
 * tailwind.config.js 파일에 추가할 수 있는 `theme`의 `font` 객체를 생성합니다.
 *
 *
 * 입력 `Font` 객체:
 * {
 *   title: { fontSize: '24px', lineHeight: '28px', letterSpacing: '0.1px', fontWeight: 'bold' },
 *   body: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 'normal' }
 * }
 *
 *
 * @returns {ITailwindFontObject}  {
 *   title: ['24px', { lineHeight: '28px', letterSpacing: '0.1px', fontWeight: 'bold' }],
 *   body: ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: 'normal' }]
 *  }
 */
export const generateFontPalette = (): ITailwindFontObject => {
  const tailwindFontObj: ITailwindFontObject = {};

  for (const [key, value] of Object.entries(Font)) {
    tailwindFontObj[key] = [
      value.fontSize,
      {
        lineHeight: value.lineHeight,
        letterSpacing: value.letterSpacing,
        fontWeight: value.fontWeight,
      },
    ];
  }

  return tailwindFontObj;
};
