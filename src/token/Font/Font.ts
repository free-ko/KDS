import type { FontKey, FontType } from './Font.types';
import FontSize from './FontSize';
import FontWeight from './FontWeight';
import LetterSpacing from './LetterSpacing';

const Font: Record<FontKey, FontType> = {
  display3xl: {
    ...FontSize.size64,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  display2xl: {
    ...FontSize.size54,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  displayXl: {
    ...FontSize.size48,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  headline3xl: {
    ...FontSize.size40,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  headline2xl: {
    ...FontSize.size36,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  headlineXl: {
    ...FontSize.size30,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  headlineMd: {
    ...FontSize.size24,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  headlineSm: {
    ...FontSize.size24,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  bodyLgBold: {
    ...FontSize.size16,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  bodyLgSemiBold: {
    ...FontSize.size16,
    fontWeight: FontWeight.semiBold,
    letterSpacing: LetterSpacing.tight,
  },
  bodyLgMedium: {
    ...FontSize.size16,
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.tight,
  },
  bodyLgRegular: {
    ...FontSize.size16,
    fontWeight: FontWeight.regular,
    letterSpacing: LetterSpacing.tight,
  },
  bodyMdBold: {
    ...FontSize.size14,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  bodyMdSemiBold: {
    ...FontSize.size14,
    fontWeight: FontWeight.semiBold,
    letterSpacing: LetterSpacing.tight,
  },
  bodyMdMedium: {
    ...FontSize.size14,
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.tight,
  },
  bodyMdRegular: {
    ...FontSize.size14,
    fontWeight: FontWeight.regular,
    letterSpacing: LetterSpacing.tight,
  },
  labelLgBold: {
    ...FontSize.size16,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  labelLgRegular: {
    ...FontSize.size16,
    fontWeight: FontWeight.regular,
    letterSpacing: LetterSpacing.tight,
  },
  labelMdBold: {
    ...FontSize.size14,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  labelMdRegular: {
    ...FontSize.size14,
    fontWeight: FontWeight.regular,
    letterSpacing: LetterSpacing.tight,
  },
  labelSmBold: {
    ...FontSize.size12,
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  },
  labelSmRegular: {
    ...FontSize.size12,
    fontWeight: FontWeight.regular,
    letterSpacing: LetterSpacing.tight,
  },
};

export default Font;
