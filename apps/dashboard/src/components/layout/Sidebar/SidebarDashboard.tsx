import { Button, Collapse, Kbd, TextInput } from '@mantine/core';

import { clsx } from 'clsx';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { PiDotOutlineLight } from 'react-icons/pi';
import { IoArrowUndoOutline, IoSearchSharp } from 'react-icons/io5';
import { useEffect, useMemo, useState } from 'react';
import { menuSidebar, menuSidebarBlogManager } from '@/data/menu-sidebar';
import { Link, useLocation } from 'react-router';
import type { DropDownMenu, IMenuSidebar, SidebarMenuShow } from '@/types';
import { useAppSelector } from '@/hooks';

export default function SidebarDashboard() {
  const location = useLocation();
  const isOpenSidebar = useAppSelector(
    state => state.sidebarSliceReducer.isOpen,
  );
  // const dispatch = useDispatch();
  const key_sidebar = location.pathname.split('/').filter(Boolean);
  const [menuShow, setMenuShow] = useState<SidebarMenuShow>('root');
  const [dropDown, setDropDown] = useState<DropDownMenu>({
    key: undefined,
    is_show: false,
  });
  const dataMenu = useMemo(() => {
    if (menuShow === 'root') return menuSidebar;
    else if (menuShow === 'blog-manager') return menuSidebarBlogManager;
    else return menuSidebar;
  }, [menuShow]);

  useEffect(() => {
    if (key_sidebar && key_sidebar[0]) {
      dataMenu.find(it => {
        if (it.key && it.key.includes(key_sidebar[0])) {
          setMenuShow(it.key as SidebarMenuShow);
        }
      });
    }
  }, []);
  const handelShowDropDown = (item: IMenuSidebar) => {
    if (!item.open_menu) {
      if (item.children) {
        if (dropDown.key === item.key) {
          if (dropDown.is_show) setDropDown({ ...dropDown, is_show: false });
          else setDropDown({ ...dropDown, is_show: true });
        } else {
          setDropDown({ key: item.key, is_show: true });
        }
      }
    } else {
      setMenuShow(item.key as SidebarMenuShow);
    }
  };

  useEffect(() => {
    if (menuShow !== 'root') {
      if (
        key_sidebar &&
        key_sidebar[0] &&
        key_sidebar[1] &&
        key_sidebar[0] === menuShow
      ) {
        if (key_sidebar && key_sidebar[0]) {
          setDropDown({
            key: `${key_sidebar[0]}/${key_sidebar[1]}`,
            is_show: true,
          });
        }
      }
    } else {
      if (key_sidebar && key_sidebar[0]) {
        setDropDown({
          key: key_sidebar[0],
          is_show: true,
        });
      }
    }
  }, [menuShow]);
  return (
    <aside
      className={clsx(
        isOpenSidebar ? 'left-0' : '-left-full',
        'font-roboto z-51 shrink-0 w-64 dark:bg-dark-charcoal bg-white shadow dark:border-r dark:border-r-neutral-700 dark:text-white h-screen fixed ease-in-out top-0 flex flex-col transition-all duration-200',
      )}
    >
      <Link
        to={'/'}
        className="p-4 font-bold text-xl border-b dark:border-neutral-700 border-neutral-300"
      >
        Toshstack
      </Link>
      <div className="px-2 my-2 flex items-center gap-1">
        {menuShow !== 'root' && (
          <Button
            onClick={() => setMenuShow('root')}
            variant="gradient"
            size="compact-lg"
          >
            <IoArrowUndoOutline />
          </Button>
        )}
        <TextInput
          variant="default"
          classNames={{
            input:
              'dark:text-white dark:bg-dark-charcoal-gray dark:border-gray-500',
            wrapper: '',
          }}
          className="grow"
          leftSection={<IoSearchSharp />}
          placeholder="Search"
          rightSection={
            <Kbd
              size={'sm'}
              className="mr-2 border-none dark:bg-dark-charcoal dark:broder-gray-600 dark:text-white"
            >
              ⌘+K
            </Kbd>
          }
        />
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto dark:scrollbar-custom-dark scrollbar-custom border-t border-gray-300 dark:border-gray-600">
        <ul className="flex flex-col gap-1.5">
          {dataMenu.map(it => {
            const Icon = it.icon;
            return (
              <li key={it.key}>
                {!it.path ? (
                  <div
                    onClick={() => handelShowDropDown(it)}
                    className={clsx(
                      location.pathname === it.path
                        ? 'dark:bg-dark-charcoal-gray'
                        : 'hover:dark:bg-neutral-800/60',
                      'flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-50 transition-all duration-300',
                    )}
                  >
                    <div className="flex items-center gap-1 relative">
                      {Icon && (
                        <Icon className="w-6 h-5 dark:text-gray-500 text-gray-700" />
                      )}
                      <span
                        className={clsx(
                          'text-sm font-medium dark:text-gray-200 text-dark-slate',
                        )}
                      >
                        {it.label}
                      </span>
                      {it.count && (
                        <div className="px-1 bg-yellow-900 text-yellow-400  text-xs text-center font-semibold rounded-md leading-6">
                          +99
                        </div>
                      )}
                    </div>
                    {it.children && (
                      <MdKeyboardArrowRight
                        className={clsx(
                          dropDown.key === it.key && dropDown.is_show
                            ? 'rotate-90'
                            : 'rotate-0',
                          'transition-all duration-300',
                        )}
                      />
                    )}
                  </div>
                ) : (
                  <Link
                    to={it.path}
                    className={clsx(
                      location.pathname === it.path
                        ? 'dark:bg-dark-charcoal-gray'
                        : 'dark:hover:dark:bg-neutral-800/60',
                      'flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300',
                    )}
                  >
                    <div className="flex items-center gap-1 relative">
                      {Icon && (
                        <Icon className="w-6 h-5 dark:text-gray-500 text-gray-700" />
                      )}
                      <span
                        className={clsx(
                          'text-sm font-medium dark:text-gray-200 text-dark-slate',
                        )}
                      >
                        {it.label}
                      </span>
                      {it.count && (
                        <div className="px-1 bg-yellow-900 text-yellow-400  text-xs text-center font-semibold rounded-md leading-6">
                          +99
                        </div>
                      )}
                    </div>
                  </Link>
                )}
                {it.children && (
                  <Collapse
                    in={
                      dropDown.key === it.key && dropDown.is_show && it.children
                        ? true
                        : false
                    }
                    className=""
                  >
                    <ul className="font-montserrat">
                      {it.children &&
                        it.children.map((it_children, idx) => {
                          if (it_children.path) {
                            return (
                              <Link
                                to={it_children.path}
                                key={idx}
                                className="flex items-center gap-1 relative ps-4 py-2 hover:dark:text-gray-100 dark:text-gray-400 text-gray-600 transition-all duration-300"
                              >
                                <PiDotOutlineLight />

                                <span
                                  className={clsx(
                                    location.pathname === it_children.path
                                      ? 'text-blue-500 font-semibold'
                                      : 'dark:text-gray-200 text-dark-slate hover:text-dark-slate/80 hover:dark:text-slate-400',
                                    'text-xs font-semibold',
                                  )}
                                >
                                  {it_children.label}
                                </span>
                              </Link>
                            );
                          }
                        })}
                    </ul>
                  </Collapse>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
