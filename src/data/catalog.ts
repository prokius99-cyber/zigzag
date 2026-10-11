import type { ImageMetadata } from 'astro';
/**
 * Данные каталога. Каждая позиция — с источником (source): где подтверждены название и цена.
 * Цены не придумываются: нет цены в источнике — price: null («цену уточним»).
 */
export interface CatalogItem {
  id: string;
  name: string;
  /** Фильтр 1: например, рыба — ['Щука', 'Окунь'] */
  tags: string[];
  /** Фильтр 2: например, тип — 'Виброхвост' */
  kind: string;
  size?: string;
  price: number | null;
  colors?: string[];
  /** Путь в public/ или импорт из src/assets */
  image?: ImageMetadata | string;
  imageAlt?: string;
  note?: string;
  source: string;
}

export const catalog: CatalogItem[] = [
  // { id: 'jalpa', name: 'Jalpa', tags: ['Щука', 'Окунь'], kind: 'Виброхвост', price: 400, source: 'Яндекс.Карты, 2026-10-04' },
];

export const tagLabel = 'Рыба';
export const kindLabel = 'Тип';
