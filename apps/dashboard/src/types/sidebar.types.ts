import type { IconType } from 'react-icons/lib';

export type DropDownMenu = {
  key: string | undefined;
  is_show: boolean;
};

export type SidebarMenuShow =
  | 'root'
  | 'blog-manager'
  | 'website-manager'
  | 'products-manager'
  | 'pricing-plans';

export interface IMenuSidebar {
  key?: string | SidebarMenuShow;
  /** Hiển thị tên menu */
  label: string;

  /** Tên icon hoặc ReactNode để render icon */
  icon?: IconType;

  /** Số lượng (badge, thông báo), optional */
  count?: number;

  /** Đường dẫn điều hướng */
  path?: string;

  /** Các menu con (submenu) */
  children?: IMenuSidebar[];

  /** Có cho phép collapse/expand menu con hay không */
  open_menu?: boolean;
}
