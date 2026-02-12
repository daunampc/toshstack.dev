import { Button, TextInput } from '@mantine/core';

import { IoSearchSharp } from 'react-icons/io5';
import { TiThMenu } from 'react-icons/ti';
import HeaderNotification from './HeaderNotification';
import HeaderLanguage from './HeaderLanguage';
import HeaderTheme from './HeaderTheme';
import HeaderAccount from './HeaderAccount';
import HeaderMessage from './HeaderMessage';
import HeaderSetting from './HeaderSetting';
import HeaderGift from './HeaderGift';
import { useAppDispatch } from '@/hooks';
import { handleSidebar } from '@/features/sidebar/store/sidebarSlice';
export default function HeaderDashboard() {
  const dispatch = useAppDispatch();
  return (
    <header className="px-4 sticky inset-y-0 h-16 inset-x-0 dark:bg-dark-charcoal bg-white  shadow z-100 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => dispatch(handleSidebar())}
          variant="outline"
          size="compact-sm"
          color="gray"
        >
          <TiThMenu />
        </Button>
        <div className="lg:block hidden">
          <TextInput
            placeholder="Search"
            classNames={{
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-500 dark:text-white',
              wrapper: '',
            }}
            w={250}
            leftSection={<IoSearchSharp />}
            size="sm"
            variant="default"
          />
        </div>
      </div>
      <div className="md:flex hidden items-center gap-2">
        {/*Header Language*/}
        <HeaderLanguage />
        {/* Header Theme*/}
        <HeaderTheme />
        {/*Header Gift*/}
        <HeaderGift />
        {/*Header Notification*/}
        <HeaderNotification />
        {/*HeaderMessage*/}
        <HeaderMessage />
        {/*Header Account*/}
        <HeaderAccount />
        {/*Header Setting*/}
        <HeaderSetting />
      </div>
      <div className="md:hidden block">
        <HeaderAccount />
      </div>
    </header>
  );
}
