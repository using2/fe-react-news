import headlineNewsData from '@/assets/data/headlineNewsData.json' assert { type: 'json' };
import { type Headline } from '@/types/news';

export function getHeadline() {
  const headlines: Headline[] = [];
  headlineNewsData.forEach((each) => {
    headlines.push({
      press: each.officeName,
      title: each.title,
    });
  });

  return headlines;
}
