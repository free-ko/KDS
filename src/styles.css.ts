import { style } from '@vanilla-extract/css';

import { Color, Elevation, Font, Radius } from './tokens';

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

export const radius100AndElevationXl = style({
  width: '100px',
  height: '100px',
  backgroundColor: Color.orange10,
  borderRadius: Radius.full,
  boxShadow: Elevation.xl,
});
