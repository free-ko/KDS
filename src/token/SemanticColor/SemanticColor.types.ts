type BackgroundColor =
  | 'colorBg'
  | 'colorBgAlt'
  | 'colorBgSurface'
  | 'colorBgSurfaceHover'
  | 'colorBgSurfaceSelected'
  | 'colorBgSurfaceDisabled'
  | 'colorBgSurfaceSuccess'
  | 'colorBgSurfaceWarning'
  | 'colorBgSurfaceError'
  | 'colorBgFill'
  | 'colorBgFillHover'
  | 'colorBgFillDisabled'
  | 'colorBgFillSecondary'
  | 'colorBgFillSecondaryHover'
  | 'colorBgFillTertiary'
  | 'colorBgFillTertiaryHover'
  | 'colorBgFillSuccess'
  | 'colorBgFillWarning'
  | 'colorBgFillError';

type TextColor =
  | 'colorText'
  | 'colorTextSecondary'
  | 'colorTextDisabled'
  | 'colorTextInverse'
  | 'colorTextOnBgHover'
  | 'colorTextInfo'
  | 'colorTextSuccess'
  | 'colorTextWarning'
  | 'colorTextError'
  | 'colorTextEmphasis'
  | 'colorTextLink'
  | 'colorTextLinkHover'
  | 'colorTextLinkInverse';

type IconColor =
  | 'colorIcon'
  | 'colorIconHover'
  | 'colorIconDisabled'
  | 'colorIconSecondary'
  | 'colorIconSecondaryHover'
  | 'colorIconInfo'
  | 'colorIconSuccess'
  | 'colorIconWarning'
  | 'colorIconError'
  | 'colorIconInverse';

type BorderColor =
  | 'colorBorder'
  | 'colorBorderHover'
  | 'colorBorderDisabled'
  | 'colorBorderSecondary'
  | 'colorBorderTertiary'
  | 'colorBorderInfo'
  | 'colorBorderSuccess'
  | 'colorBorderWarning'
  | 'colorBorderError'
  | 'colorBorderFocus';

type MaterialColor = 'colorMaterialDimmer';

export type SemanticColorKey =
  | BackgroundColor
  | TextColor
  | IconColor
  | BorderColor
  | MaterialColor;

export type SemanticColorType = Record<SemanticColorKey, string>;
