/**
 * Меню из каталога бизнеса (https://bar-zag-zag.clients.site/, прочитано 2026-10-08).
 * Цены, вес и категории — дословно с сайта; состав — только там, где он опубликован.
 * Фото — официальные фото каталога (карта «файл → URL» в .premiumsite/scout/photo-sources.txt).
 */
import type { ImageMetadata } from 'astro';

export type Category = 'grill' | 'burgers' | 'salad' | 'soup' | 'snacks';

export const categories: { id: Category; label: string }[] = [
  { id: 'grill', label: 'Горячее и гриль' },
  { id: 'burgers', label: 'Бургеры' },
  { id: 'soup', label: 'Супы' },
  { id: 'salad', label: 'Салаты' },
  { id: 'snacks', label: 'Закуски' },
];

export interface Dish {
  slug: string;
  name: string;
  price: number;
  /** «180 г», «3 шт.» — как на сайте; null — не указано. */
  portion: string | null;
  category: Category | null;
  composition: string | null;
  photo: string;
  source: string;
}

const SRC = 'https://bar-zag-zag.clients.site/';

export const dishes: Dish[] = [
  { slug: 'svitki-ognya', name: 'Свитки огня', price: 470, portion: '180 г', category: 'snacks', composition: 'спринг-роллы, соус шрирача', photo: 'dish-svitki-ognya', source: SRC },
  { slug: 'elfiyskie-moloki', name: 'Эльфийские молоки', price: 690, portion: '330 г', category: 'soup', composition: 'кокосовое молоко, грибы, курица, черри, кинза', photo: 'dish-elfiyskie-moloki', source: SRC },
  { slug: 'bochok-sema', name: 'Сочный бочок Сэма', price: 1290, portion: '400 г', category: 'grill', composition: 'свинина, картофель, овощи', photo: 'dish-bochok-sema', source: SRC },
  { slug: 'delikotes-upyrybi', name: 'Деликотес из упырыбы', price: 330, portion: '185 г', category: null, composition: null, photo: 'dish-delikotes-upyrybi', source: SRC },
  { slug: 'elunnye-kletski', name: 'Элунные клецки', price: 650, portion: null, category: 'grill', composition: 'самолепные пельмени с мясом, сливочно-грибной соус', photo: 'dish-elunnye-kletski', source: SRC },
  { slug: 'zakuska-kapytnya', name: 'Закуска из капытня', price: 890, portion: '200 г', category: 'salad', composition: null, photo: 'dish-zakuska-kapytnya', source: SRC },
  { slug: 'skvigo-bif', name: 'Строганый сквиго-биф', price: 1290, portion: '400 г', category: 'grill', composition: null, photo: 'dish-stroganyj-skvigo-bif', source: SRC },
  { slug: 'solenye-pribory', name: 'Соленые приборы бойзов', price: 230, portion: '100 г', category: 'salad', composition: null, photo: 'dish-solenye-pribory', source: SRC },
  { slug: 'palchiki-murloka', name: 'Пальчики мурлока', price: 790, portion: '400 г', category: 'grill', composition: null, photo: 'dish-palchiki-murloka', source: SRC },
  { slug: 'zverburger', name: 'Зверобургер', price: 790, portion: '275 г', category: 'burgers', composition: null, photo: 'dish-zverburger', source: SRC },
  { slug: 'leroy-dzhenkins', name: 'Лирой Дженкинс', price: 850, portion: '255 г', category: 'burgers', composition: null, photo: 'dish-leroy-dzhenkins', source: SRC },
  { slug: 'shirburger', name: 'Ширбургер', price: 890, portion: '295 г', category: 'burgers', composition: null, photo: 'dish-shirburger', source: SRC },
  { slug: 'gryzlodyor', name: 'Грызлодёр', price: 1390, portion: '570 г', category: 'burgers', composition: null, photo: 'dish-gryzlodyor', source: SRC },
  { slug: 'imperator-40k', name: 'Император 40К', price: 690, portion: '1 шт.', category: 'salad', composition: null, photo: 'dish-imperator-40k', source: SRC },
  { slug: 'imperator-30k', name: 'Император 30К', price: 890, portion: '1 шт.', category: 'salad', composition: null, photo: 'dish-imperator-30k', source: SRC },
  { slug: 'orki-korki', name: 'Орки-корки', price: 240, portion: '1 шт.', category: 'snacks', composition: null, photo: 'dish-orki-korki', source: SRC },
  { slug: 'severnaya-pohlebka', name: 'Северная похлёбка', price: 690, portion: '1 шт.', category: 'soup', composition: null, photo: 'dish-severnaya-pohlebka', source: SRC },
  { slug: 'lukovyj-syr', name: 'Острый луковый сыр', price: 770, portion: '1 шт.', category: 'soup', composition: null, photo: 'dish-lukovyj-syr', source: SRC },
  { slug: 'borsch-gordyni', name: 'Борщ кладбища гордыни', price: 650, portion: '1 шт.', category: 'soup', composition: null, photo: 'dish-borsch-gordyni', source: SRC },
  { slug: 'skryten', name: 'Поджаренный скрытень', price: 590, portion: '1 шт.', category: 'grill', composition: null, photo: 'dish-skryten', source: SRC },
  { slug: 'krylya-pustoty', name: 'Огненные крылья пустоты', price: 650, portion: '3 шт.', category: 'grill', composition: null, photo: 'dish-krylya-pustoty', source: SRC },
  { slug: 'medovyj-pirog', name: 'Медовый горшечный пирог', price: 700, portion: '1 шт.', category: 'grill', composition: null, photo: 'dish-medovyj-pirog', source: SRC },
  { slug: 'kabanyi-ryobra', name: 'Кабаньи рёбра в пиве', price: 1290, portion: '1 шт.', category: 'grill', composition: null, photo: 'dish-kabanyi-ryobra', source: SRC },
  { slug: 'noga-dolgonoga', name: 'Нога лесного долгонога', price: 1250, portion: '1 шт.', category: 'grill', composition: null, photo: 'dish-noga-dolgonoga', source: SRC },
  { slug: 'prygolap', name: 'Закуска из прыголапа', price: 990, portion: null, category: 'grill', composition: null, photo: 'dish-zakuska-prygolapa', source: SRC },
  { slug: 'dyhanie-drakona', name: 'Дыхание дракона', price: 770, portion: null, category: 'grill', composition: null, photo: 'dish-dyhanie-drakona', source: SRC },
  { slug: 'serdca-porchi', name: 'Сердца порчи', price: 870, portion: null, category: 'grill', composition: null, photo: 'dish-serdca-porchi', source: SRC },
  { slug: 'steik-cherporoga', name: 'Нежный стейк из черпорога', price: 1950, portion: null, category: 'grill', composition: null, photo: 'dish-steik-cherporoga', source: SRC },
  { slug: 'klanovyj-pir', name: 'Клановый пир', price: 4950, portion: null, category: 'grill', composition: null, photo: 'dish-klanovyj-pir', source: SRC },
];

/** Все фото из src/assets/photos по имени файла без расширения. */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });
export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace('.jpg', ''), mod.default]),
);
