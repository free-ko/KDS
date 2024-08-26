type Spacing =
  | 'space0'
  | 'space50'
  | 'space100'
  | 'space150'
  | 'space200'
  | 'space250'
  | 'space300'
  | 'space350'
  | 'space400'
  | 'space450'
  | 'space500'
  | 'space600'
  | 'space650'
  | 'space700'
  | 'space800'
  | 'space900'
  | 'space1000'
  | 'space1100'
  | 'space1200'
  | 'space1600'
  | 'space2000'

export type SpacingKey = Spacing

export type SpacingType = Record<SpacingKey, string>
