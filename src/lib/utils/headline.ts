import headlineNewsData from '@/assets/data/headlineNewsData.json' assert { type: 'json' };

interface Headline {
  press: string;
  title: string;
}

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
