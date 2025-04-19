export type IconsId =
  | 'quote'
  | 'know-more'
  | 'arrow-1'
  | 'serving-snacks'
  | 'serving-quote'
  | 'serving-grill'
  | 'serving-fast-food'
  | 'serving-coffee'
  | 'serving-cocktails'
  | 'serving-cake'
  | 'footer-socials-tw'
  | 'footer-socials-in'
  | 'footer-socials-ig'
  | 'footer-socials-fb';

export type IconsKey =
  | 'Quote'
  | 'KnowMore'
  | 'Arrow1'
  | 'ServingSnacks'
  | 'ServingQuote'
  | 'ServingGrill'
  | 'ServingFastFood'
  | 'ServingCoffee'
  | 'ServingCocktails'
  | 'ServingCake'
  | 'FooterSocialsTw'
  | 'FooterSocialsIn'
  | 'FooterSocialsIg'
  | 'FooterSocialsFb';

export enum Icons {
  Quote = 'quote',
  KnowMore = 'know-more',
  Arrow1 = 'arrow-1',
  ServingSnacks = 'serving-snacks',
  ServingQuote = 'serving-quote',
  ServingGrill = 'serving-grill',
  ServingFastFood = 'serving-fast-food',
  ServingCoffee = 'serving-coffee',
  ServingCocktails = 'serving-cocktails',
  ServingCake = 'serving-cake',
  FooterSocialsTw = 'footer-socials-tw',
  FooterSocialsIn = 'footer-socials-in',
  FooterSocialsIg = 'footer-socials-ig',
  FooterSocialsFb = 'footer-socials-fb',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Quote]: '61697',
  [Icons.KnowMore]: '61698',
  [Icons.Arrow1]: '61699',
  [Icons.ServingSnacks]: '61700',
  [Icons.ServingQuote]: '61701',
  [Icons.ServingGrill]: '61702',
  [Icons.ServingFastFood]: '61703',
  [Icons.ServingCoffee]: '61704',
  [Icons.ServingCocktails]: '61705',
  [Icons.ServingCake]: '61706',
  [Icons.FooterSocialsTw]: '61707',
  [Icons.FooterSocialsIn]: '61708',
  [Icons.FooterSocialsIg]: '61709',
  [Icons.FooterSocialsFb]: '61710',
};
