// types.ts
import { LinkProps } from 'next/link';

interface MenuLink {
  id: number;
  title: string;
  url: string | '#';
  items?: never; // У ссылок не может быть вложенных элементов
}

interface MenuSection {
  id: number;
  title: string;
  items: MenuItem[]; // Рекурсивный тип
  url?: never | '#'; // У разделов не может быть прямого URL
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

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  href: string;
  variant: 'large' | 'fon' | 'bg-picture' | 'text-blue' | 'event';

  // Опциональные поля:
  imageUrl?: string; // Необязательно, если variant === 'bg-picture' (тогда previewImageUrl обязателен)
  previewImageUrl?: string; // Обязательно для 'large' и 'fon', необязательно для других
}

export interface ArticleCardProps extends Omit<LinkProps, 'href'> {
  variant?: 'large' | 'fon' | 'bg-picture' | 'text-blue' | 'default' | 'event';
  date: string;
  title: string;
  text?: string;
  imageUrl?: string;
  bgImageUrl?: string;
  previewImageUrl?: string;
  href: string;
  isFirstItem?: boolean;
  showMore?: boolean;
  children?: React.ReactNode;
}

export type ArticleCardVariant =
  | 'default'
  | 'text-blue'
  | 'bg-picture'
  | 'fon'
  | 'large'
  | 'event';
