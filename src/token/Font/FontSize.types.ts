type FontSize =
  | '12px'
  | '14px'
  | '16px'
  | '24px'
  | '30px'
  | '36px'
  | '40px'
  | '48px'
  | '54px'
  | '64px';

type LineHeight =
  | '16px'
  | '20px'
  | '24px'
  | '32px'
  | '40px'
  | '44px'
  | '48px'
  | '54px'
  | '60px'
  | '70px';

export type FontSizeKey =
  | 'size12'
  | 'size14'
  | 'size16'
  | 'size24'
  | 'size30'
  | 'size36'
  | 'size40'
  | 'size48'
  | 'size54'
  | 'size64';

export type FontSizeType = {
  fontSize: FontSize;
  lineHeight: LineHeight;
};
