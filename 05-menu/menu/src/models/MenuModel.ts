export interface MenuData {
  menuElements: MenuModel[];
}
export interface MenuModel {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

export interface FilterCategoriesProps {
  allCategories: string[];
  filterItems: (category: string) => void | MenuModel[];
}
