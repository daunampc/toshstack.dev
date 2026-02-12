import { HeaderDashboard } from '@/components/layout/Header';
import { SidebarDashboard } from '@/components/layout/Sidebar';
import { useAppSelector } from '@/hooks';
import { Breadcrumbs } from '@mantine/core';
import clsx from 'clsx';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Outlet } from 'react-router';

const DashboardLayout: React.FC = () => {
  const isOpenSidebbar = useAppSelector(
    state => state.sidebarSliceReducer.isOpen,
  );
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row">
        <SidebarDashboard />
        <div
          className={clsx(
            isOpenSidebbar ? 'md:ml-64' : 'md:ml-0',
            'min-h-screen w-full transition-all duration-300 ease-in-out flex flex-col',
          )}
        >
          <HeaderDashboard />
          <div className="space-y-2 dark:bg-dark-charcoal bg-white shadow p-3   border-t dark:border-neutral-600">
            <h2 className="dark:text-neutral-200 font-semibold ">
              Dashboard Layout
            </h2>
            <Breadcrumbs
              separator={
                <MdKeyboardDoubleArrowRight className="dark:text-neutral-300" />
              }
              className="text-sm dark:text-neutral-200"
            >
              <div className="font-medium">Dashboard</div>
              <div className="dark:text-neutral-400 font-medium">
                Blog Manager
              </div>
              <div className="dark:text-neutral-400 font-medium">
                Post Manager
              </div>
              <div className=" font-medium">Post Manager</div>
            </Breadcrumbs>
          </div>
          <main className="flex-1 p-5 space-y-3">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
