'use client';

import { FaPlus, FaRegGem } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@mantine/core';
import { useAuth } from 'app/_providers/auth-provider';
import { AuthModal } from '../auth/ui';
import { UserMenu } from '../user/ui/menu';
export default function Header() {
  const data = useAuth();
  return (
    <div className="z-20 w-full top-0  backdrop-blur-lg bg-white/30  fixed py-3 isolate">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(150,100,255,0.25),rgba(255,255,255,0)_70%)] -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(150,100,255,0.25),rgba(255,255,255,0)_70%)] -z-10"></div>

      {/* <div className="absolute inset-0 -z-30 " /> */}
      <div className="flex items-center mx-12 gap-8">
        <div className="flex items-center basis-3/4 justify-between">
          <div className="font-medium flex items-center gap-4">
            <Link href={'/'} className="bg-white rounded-xl text-sm px-2 py-1.5 font-bold">
              ToshStack
            </Link>
            <div className="hidden lg:flex items-center gap-4">
              <div className="bg-white rounded-xl text-sm px-2 py-1.5 font-semibold flex items-center gap-1">
                <span>All</span>
                <FaPlus size={10} className="text-gray-600" />
              </div>
              <div className="bg-white rounded-xl text-sm px-2 py-1.5 font-semibold flex items-center gap-1">
                <span>News</span>
                <FaPlus size={10} className="text-gray-600" />
              </div>
              <div className="bg-white rounded-xl text-sm px-2 py-1.5 font-semibold flex items-center gap-1">
                <span>Exclusive</span>
                <FaPlus size={10} className="text-gray-600" />
              </div>
              <div className="bg-white rounded-xl text-sm px-2 py-1.5 font-semibold flex items-center gap-1">
                <span>Guides</span>
                <FaPlus size={10} className="text-gray-600" />
              </div>
              <div className="bg-white rounded-xl text-sm px-2 py-1.5 font-semibold flex items-center gap-1">
                <span>Suggested</span>
                <FaPlus size={10} className="text-gray-600" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">{/* <SelectLanguage /> */}</div>
        </div>
        <div className="basis-1/4 flex items-center gap-2 justify-end">
          {!data && <AuthModal />}
          {data && <UserMenu />}
          <Button
            variant="gradient"
            radius={'lg'}
            size="sm"
            leftSection={<FaRegGem />}
            gradient={{ from: 'orange', to: 'red', deg: 220 }}
            className="font-semibold md:block hidden text-xs"
          >
            Go premium
          </Button>
        </div>
      </div>
    </div>
  );
}
