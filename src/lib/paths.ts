import type { Category, Subcategory } from './categories';

export const PATH = {
  home: '/',
  posts: '/posts',
  series: '/series',
  archive: '/archive',
  about: '/about',
  category: (category: Category) => `/category/${category}`,
  subcategory: (category: Category, subcategory: Subcategory) =>
    `/category/${category}/${subcategory}`,
} as const;
