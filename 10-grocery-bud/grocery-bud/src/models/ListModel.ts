export interface ListProps {
  items: ItemsProps[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

export interface ItemsProps {
  title: string;
  id: string;
}
