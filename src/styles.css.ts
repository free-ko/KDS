import { style } from '@vanilla-extract/css';

import { Color, Font, Radius } from './token';

export const headline3xl = style({
  ...Font.headline3xl,
});

export const headline2xl = style({
  ...Font.headline2xl,
});

export const bodyBlue60Text = style({
  ...Font.bodyLgMedium,
  color: Color.blue60,
});

export const radius100 = style({
  width: '100px',
  height: '100px',
  backgroundColor: Color.green30,
  borderRadius: Radius.full,
});
