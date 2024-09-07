import { describe, it, expect, vi } from 'vitest';

const MOCK_COLORS = {
  red100: '#ff0000',
  red200: '#cc0000',
  blue100: '#0000ff',
  invalidColor: '#abcdef', // 숫자가 없는 키 (엣지 케이스)
};

const MOCK_FONTS = {
  title: {
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '0.1px',
    fontWeight: 'bold',
  },
  body: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    fontWeight: 'normal',
  },
};

vi.mock('../../tokens', () => ({
  Color: MOCK_COLORS,
  Font: MOCK_FONTS,
}));

describe('generateColorPalette', () => {
  it('올바른 색상 팔레트를 생성해야 한다', async () => {
    const { generateColorPalette } = await import('../generateTailwindConfig');
    const expectedOutput = {
      red: { '100': '#ff0000', '200': '#cc0000' },
      blue: { '100': '#0000ff' },
    };

    const colorPalette = generateColorPalette();
    expect(colorPalette).toEqual(expectedOutput);
  });

  it('숫자가 없는 잘못된 색상 키는 무시해야 한다', async () => {
    const { generateColorPalette } = await import('../generateTailwindConfig');
    const colorPalette = generateColorPalette();
    expect(colorPalette).not.toHaveProperty('invalidColor');
  });
});

describe('generateFontPalette', () => {
  it('올바른 폰트 팔레트를 생성해야 한다', async () => {
    const { generateFontPalette } = await import('../generateTailwindConfig');
    const expectedOutput = {
      title: [
        '24px',
        { lineHeight: '28px', letterSpacing: '0.1px', fontWeight: 'bold' },
      ],
      body: [
        '16px',
        { lineHeight: '24px', letterSpacing: '0px', fontWeight: 'normal' },
      ],
    };

    const fontPalette = generateFontPalette();
    expect(fontPalette).toEqual(expectedOutput);
  });
});
