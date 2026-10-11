/**
 * Единственный источник данных о бизнесе: название, контакты, адрес, часы, соцсети.
 * Каждое значение — из analysis.md (с источником). Нет факта — {{VERIFY: что}}.
 * Компоненты берут данные ТОЛЬКО отсюда, поэтому телефон на сайте всегда один (NAP).
 */
export const business = {
  /** По адресу во всех официальных источниках — «ЗАГ-ЗАГ» (в брифе — «Зиг-Заг», см. SPEC → Допущения). */
  name: 'ЗАГ-ЗАГ',
  /** Короткое описание для title/description — без {{VERIFY}}. */
  tagline: 'гик-таверна Орды у Маяковской',
  description:
    'Гик-бар и кальян-бар ЗАГ-ЗАГ на Маяковской: меню с игровыми названиями, крафтовое пиво, кальяны, настолки, вечера MTG и D&D. Забронируй стол.',
  /** Телефон в формате +7XXXXXXXXXX и в человеческом виде. Источник: сайт бизнеса и Яндекс.Карты. */
  phone: { e164: '+79395114508', display: '+7 939 511-45-08' },
  email: '',
  address: {
    street: '1-й Тверской-Ямской переулок, 14',
    city: 'Москва',
    region: '',
    postalCode: '',
    note: 'От метро «Маяковская» — 340 м',
  },
  metro: { name: 'Маяковская', distance: '340 м' },
  geo: { lat: 0, lon: 0 },
  /** Часы в формате schema.org. Источники расходятся — пусто до подтверждения владельцем. */
  hours: [] as string[],
  hoursDisplay: '{{VERIFY: часы работы по дням}}',
  /** Игровые вечера — t.me/s/bar_zag_zag. */
  eventsSchedule: 'ср–вс, старт в 19:00',
  rating: {
    yandex: { value: '5.0', ratings: 1440, reviews: 802, date: '2026-10-08', url: 'https://yandex.com/maps/org/zag_zag/50033287551/' },
    twoGis: { value: '5', ratings: 141, reviews: 89, url: 'https://2gis.ru/moscow/firm/70000001028121451' },
  },
  links: {
    yandexMaps: 'https://yandex.com/maps/org/zag_zag/50033287551/',
    twoGis: 'https://2gis.ru/moscow/firm/70000001028121451',
    vk: 'https://vk.ru/bar_zag_zag',
    telegram: 'bar_zag_zag', // username без @ — для ссылки t.me/<username>
    whatsapp: '', // номер в формате 7XXXXXXXXXX
  },
  /** Цвет панели браузера на телефоне = --c-bg из DESIGN.md. */
  themeColor: '#261f13',
  /** Тип для JSON-LD: Store, LocalBusiness, Restaurant, BeautySalon, AutoRepair и т.д. */
  schemaType: 'BarOrPub',
  /** Реквизиты для подвала и политики конфиденциальности. Источник: подвал bar-zag-zag.clients.site. */
  legal: { operator: 'ООО «МУРЛОК»', inn: '9710141080', ogrn: '1247700780777' },
};

/** Заявки: адрес приёма (вебхук, форма, серверная функция). Пусто — форма предлагает мессенджеры. */
export const orderEndpoint = import.meta.env.PUBLIC_ORDER_ENDPOINT || '';

/** Демо для клиента: noindex + запрет в robots.txt. Включено по умолчанию до выкладки на домен клиента. */
export const isDemo = (import.meta.env.PUBLIC_DEMO ?? 'true') !== 'false';
