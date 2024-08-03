import Color from '../Color';
import { SemanticColorType } from './SemanticColor.types';

const SemanticColor: SemanticColorType = {
  // Background Color
  colorBg: Color.gray10,
  colorBgAlt: Color.gray20,
  colorBgSurface: Color.gray10,
  colorBgSurfaceHover: Color.gray25,
  colorBgSurfaceSelected: Color.gray35,
  colorBgSurfaceDisabled: Color.gray20,
  colorBgSurfaceSuccess: Color.green30,
  colorBgSurfaceWarning: Color.orange30,
  colorBgSurfaceError: Color.red30,
  colorBgFill: Color.yellow50,
  colorBgFillHover: Color.yellow40,
  colorBgFillDisabled: Color.gray60,
  colorBgFillSecondary: Color.gray10,
  colorBgFillSecondaryHover: Color.gray20,
  colorBgFillTertiary: Color.gray35,
  colorBgFillTertiaryHover: Color.gray40,
  colorBgFillSuccess: Color.green50,
  colorBgFillWarning: Color.orange50,
  colorBgFillError: Color.red55,

  // Text Color
  colorText: Color.gray100,
  colorTextSecondary: Color.gray70,
  colorTextDisabled: Color.gray60,
  colorTextInverse: Color.gray10,
  colorTextOnBgHover: Color.gray45,
  colorTextInfo: Color.lightblue80,
  colorTextSuccess: Color.green60,
  colorTextWarning: Color.orange60,
  colorTextError: Color.red65,
  colorTextEmphasis: Color.blue70,
  colorTextLink: Color.blue70,
  colorTextLinkHover: Color.blue80,
  colorTextLinkInverse: Color.blue45,

  // Icon Color
  colorIcon: Color.gray80,
  colorIconHover: Color.gray90,
  colorIconDisabled: Color.gray55,
  colorIconSecondary: Color.gray65,
  colorIconSecondaryHover: Color.gray70,
  colorIconInfo: Color.lightblue60,
  colorIconSuccess: Color.green60,
  colorIconWarning: Color.orange60,
  colorIconError: Color.red60,
  colorIconInverse: Color.gray45,

  // Border Color
  colorBorder: Color.gray45,
  colorBorderHover: Color.gray55,
  colorBorderDisabled: Color.gray40,
  colorBorderSecondary: Color.gray40,
  colorBorderTertiary: Color.gray55,
  colorBorderInfo: Color.lightblue45,
  colorBorderSuccess: Color.green30,
  colorBorderWarning: Color.orange45,
  colorBorderError: Color.red45,
  colorBorderFocus: Color.gray100,

  // Material Color
  colorMaterialDimmer: 'rgba(26, 26, 26, 0.52)',
};

export default SemanticColor;
