export type Radius =
  | '0px'
  | '2px'
  | '4px'
  | '6px'
  | '8px'
  | '12px'
  | '16px'
  | '20px'
  | '24px'
  | '9999px';

export type RadiusKey =
  | 'none'
  | '3xs'
  | '2xs'
  | 'xs'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full';

export type RadiusType = Record<RadiusKey, Radius>;
