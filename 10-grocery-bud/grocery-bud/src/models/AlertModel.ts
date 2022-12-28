import { ItemsProps } from './ListModel';

export interface AlertProps {
  type: string;
  message: string;
  removeAlert: () => void;
  list?: ItemsProps[];
}
