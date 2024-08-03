type GrayColor =
  | 'gray10'
  | 'gray15'
  | 'gray20'
  | 'gray25'
  | 'gray30'
  | 'gray35'
  | 'gray40'
  | 'gray45'
  | 'gray50'
  | 'gray55'
  | 'gray60'
  | 'gray65'
  | 'gray70'
  | 'gray80'
  | 'gray90'
  | 'gray100';

type BlueColor =
  | 'blue10'
  | 'blue15'
  | 'blue20'
  | 'blue25'
  | 'blue30'
  | 'blue35'
  | 'blue40'
  | 'blue45'
  | 'blue50'
  | 'blue55'
  | 'blue60'
  | 'blue65'
  | 'blue70'
  | 'blue80'
  | 'blue90'
  | 'blue100';

type LightBlueColor =
  | 'lightblue10'
  | 'lightblue15'
  | 'lightblue20'
  | 'lightblue25'
  | 'lightblue30'
  | 'lightblue35'
  | 'lightblue40'
  | 'lightblue45'
  | 'lightblue50'
  | 'lightblue55'
  | 'lightblue60'
  | 'lightblue65'
  | 'lightblue70'
  | 'lightblue80'
  | 'lightblue90'
  | 'lightblue100';

type RedColor =
  | 'red10'
  | 'red15'
  | 'red20'
  | 'red25'
  | 'red30'
  | 'red35'
  | 'red40'
  | 'red45'
  | 'red50'
  | 'red55'
  | 'red60'
  | 'red65'
  | 'red70'
  | 'red80'
  | 'red90'
  | 'red100';

type GreenColor =
  | 'green10'
  | 'green15'
  | 'green20'
  | 'green25'
  | 'green30'
  | 'green35'
  | 'green40'
  | 'green45'
  | 'green50'
  | 'green55'
  | 'green60'
  | 'green65'
  | 'green70'
  | 'green80'
  | 'green90'
  | 'green100';

type OrangeColor =
  | 'orange10'
  | 'orange15'
  | 'orange20'
  | 'orange25'
  | 'orange30'
  | 'orange35'
  | 'orange40'
  | 'orange45'
  | 'orange50'
  | 'orange55'
  | 'orange60'
  | 'orange65'
  | 'orange70'
  | 'orange80'
  | 'orange90'
  | 'orange100';

type YellowColor =
  | 'yellow10'
  | 'yellow15'
  | 'yellow20'
  | 'yellow25'
  | 'yellow30'
  | 'yellow35'
  | 'yellow40'
  | 'yellow45'
  | 'yellow50'
  | 'yellow55'
  | 'yellow60'
  | 'yellow65'
  | 'yellow70'
  | 'yellow80'
  | 'yellow90'
  | 'yellow100';

type TealColor =
  | 'teal10'
  | 'teal15'
  | 'teal20'
  | 'teal25'
  | 'teal30'
  | 'teal35'
  | 'teal40'
  | 'teal45'
  | 'teal50'
  | 'teal55'
  | 'teal60'
  | 'teal65'
  | 'teal70'
  | 'teal80'
  | 'teal90'
  | 'teal100';

type PurpleColor =
  | 'purple10'
  | 'purple15'
  | 'purple20'
  | 'purple25'
  | 'purple30'
  | 'purple35'
  | 'purple40'
  | 'purple45'
  | 'purple50'
  | 'purple55'
  | 'purple60'
  | 'purple65'
  | 'purple70'
  | 'purple80'
  | 'purple90'
  | 'purple100';

type MagentaColor =
  | 'magenta10'
  | 'magenta15'
  | 'magenta20'
  | 'magenta25'
  | 'magenta30'
  | 'magenta35'
  | 'magenta40'
  | 'magenta45'
  | 'magenta50'
  | 'magenta55'
  | 'magenta60'
  | 'magenta65'
  | 'magenta70'
  | 'magenta80'
  | 'magenta90'
  | 'magenta100';

export type ColorKey =
  | GrayColor
  | BlueColor
  | LightBlueColor
  | RedColor
  | GreenColor
  | OrangeColor
  | YellowColor
  | TealColor
  | PurpleColor
  | MagentaColor;

export type ColorType = Record<ColorKey, string>;
