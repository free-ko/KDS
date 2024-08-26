import type { FontSizeType } from './FontSize.types'
import type { FontWeightType } from './FontWeight.types'
import type { LetterSpacingType } from './LatterSpacing.types'

export type FontKey =
  | 'display3xl'
  | 'display2xl'
  | 'displayXl'
  | 'headline3xl'
  | 'headline2xl'
  | 'headlineXl'
  | 'headlineMd'
  | 'headlineSm'
  | 'bodyLgBold'
  | 'bodyLgSemiBold'
  | 'bodyLgMedium'
  | 'bodyLgRegular'
  | 'bodyMdBold'
  | 'bodyMdSemiBold'
  | 'bodyMdMedium'
  | 'bodyMdRegular'
  | 'labelLgBold'
  | 'labelLgRegular'
  | 'labelMdBold'
  | 'labelMdRegular'
  | 'labelSmBold'
  | 'labelSmRegular'

export type FontType = FontSizeType & {
  fontWeight: FontWeightType
  letterSpacing: LetterSpacingType
}
