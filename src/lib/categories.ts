export const CATEGORY_MAP = {
  dev: ['framework', 'cloud'],
  'life-jp': ['diary', 'sharing'],
} as const;

export type Category = keyof typeof CATEGORY_MAP;
export type Subcategory<C extends Category = Category> =
  (typeof CATEGORY_MAP)[C][number];

export function isSubcategoryOf(
  category: Category,
  subcategory: string,
): subcategory is Subcategory {
  return (CATEGORY_MAP[category] as readonly string[]).includes(subcategory);
}
