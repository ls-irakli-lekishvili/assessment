export type ItemTypeT = 'news' | 'event' | 'announcement';

export interface INewsData {
  id: number;
  title: string;
  content: string;
  date: string;
  icon: string;
  itemType: ItemTypeT;
}
export const newsData: INewsData[] = [
  {
    id: 1,
    title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
    content: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
    itemType: 'news',
    date: new Date().toDateString(),
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Napa_Valley.jpg/1200px-Napa_Valley.jpg',
  },
  {
    id: 2,
    title: 'ღვინის დღეები ბოლნისში',
    content:
      'ბოლნური ღვინო უკვე მეშვიდე წელია, ქართული ტრადიციული ტრადიციული წესით ქვევრში მზადდება - RMG-ის მხარდაჭერა მეღვინეებს',
    itemType: 'event',
    date: new Date().toDateString(),
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Napa_Valley.jpg/1200px-Napa_Valley.jpg',
  },
  {
    id: 3,
    title: 'ღვინის ფესტივალი ღვინის სამშობლოში',
    content:
      'საქართველოს მთავრობის ინიციატივით, დღეს, ქალაქ ბოლნისში ახალი, ყოველწლიური ღვინის ფესტივალი ,,ღვინის დღეები საქართველოში” გაიმართა, რომელიც სრულად მიეძღვნა ქართული ღვინის პოპულარიზაციას, როგორც ადგილობრივ, ისე საერთაშორისო დონეზე.',
    itemType: 'announcement',
    date: new Date().toDateString(),
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Napa_Valley.jpg/1200px-Napa_Valley.jpg',
  },
];
