// types.ts
interface MenuLink {
  id: number;
  title: string;
  url: string | "#";
  items?: never; // У ссылок не может быть вложенных элементов
}

interface MenuSection {
  id: number;
  title: string;
  items: MenuItem[]; // Рекурсивный тип
  url?: never | "#"; // У разделов не может быть прямого URL
}

export type MenuItem = MenuLink | MenuSection;

export interface MenuData {
  title: string;
  items: MenuItem[];
}

export interface NavbarProps {
  menu: MenuData; // Принимаем один объект меню
  headerRef?: React.RefObject<HTMLDivElement>;
  handleClickRef?: (e: React.MouseEvent) => void;
}
