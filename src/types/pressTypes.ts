export type category =
  | '종합/경제'
  | '방송/통신'
  | 'IT'
  | '영자지'
  | '스포츠/연예'
  | '매거진/전문지'
  | '지역';

export interface press {
  press: string;
  logo: string;
  darkLogo: string;
  category?: category;
  totalPage?: string;
  time?: string;
  mainTitle?: string;
  mainLink?: string;
  mainImg?: string;
  relatedArticles?: relatedArticle[];
}

interface relatedArticle {
  title: string;
  link: string;
}
