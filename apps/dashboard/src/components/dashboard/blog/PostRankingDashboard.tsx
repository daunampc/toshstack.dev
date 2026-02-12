import { Button, Image } from '@mantine/core';
import AyakaJpg from '@/assets/images/ayaka.jpg';
import { TiEyeOutline } from 'react-icons/ti';
import { HiArrowTrendingUp } from 'react-icons/hi2';

export default function PostRankingDashboard() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg min-h-full">
      <div className="p-3 flex items-center justify-between">
        <div className=" font-semibold text-dark-slate dark:text-neutral-200">
          Post Rankings
        </div>
        <Button size="xs" variant="light" color="blue">
          View all
        </Button>
      </div>
      <ul className="relative">
        <li className="flex items-center gap-3 p-2">
          <div className="font-semibold text-sm text-dark-slate dark:text-neutral-200">
            01
          </div>
          <Image
            radius={'md'}
            src={AyakaJpg}
            w={'auto'}
            h={40}
            className="object-cover"
          />
          <div className="text-sm font-normal text-dark-slate dark:text-neutral-200">
            In order to get your Google One AI Premium trial we need to make
            sure you’re a current student.
          </div>
          <div className="text-sm flex items-center text-blue-500">
            <TiEyeOutline size={20} />
            <span className="font-medium">3426</span>
          </div>
          <div className="text-sm flex items-center text-green-600 dark:text-green-700 font-semibold">
            <HiArrowTrendingUp size={20} />
            <span className="">16%</span>
          </div>
        </li>
        <li className="flex items-center gap-3 p-2">
          <div className="font-semibold text-sm text-dark-slate dark:text-neutral-200">
            01
          </div>
          <Image
            radius={'md'}
            src={AyakaJpg}
            w={'auto'}
            h={40}
            className="object-cover"
          />
          <div className="text-sm font-normal text-dark-slate dark:text-neutral-200">
            In order to get your Google One AI Premium trial we need to make
            sure you’re a current student.
          </div>
          <div className="text-sm flex items-center text-blue-500">
            <TiEyeOutline size={20} />
            <span className="font-medium">3426</span>
          </div>
          <div className="text-sm flex items-center text-green-600 dark:text-green-700 font-semibold">
            <HiArrowTrendingUp size={20} />
            <span className="">16%</span>
          </div>
        </li>
        <li className="flex items-center gap-3 p-2">
          <div className="font-semibold text-sm text-dark-slate dark:text-neutral-200">
            01
          </div>
          <Image
            radius={'md'}
            src={AyakaJpg}
            w={'auto'}
            h={40}
            className="object-cover"
          />
          <div className="text-sm font-normal text-dark-slate dark:text-neutral-200">
            In order to get your Google One AI Premium trial we need to make
            sure you’re a current student.
          </div>
          <div className="text-sm flex items-center text-blue-500">
            <TiEyeOutline size={20} />
            <span className="font-medium">3426</span>
          </div>
          <div className="text-sm flex items-center text-green-600 dark:text-green-700 font-semibold">
            <HiArrowTrendingUp size={20} />
            <span className="">16%</span>
          </div>
        </li>
        <li className="flex items-center gap-3 p-2">
          <div className="font-semibold text-sm text-dark-slate dark:text-neutral-200">
            01
          </div>
          <Image
            radius={'md'}
            src={AyakaJpg}
            w={'auto'}
            h={40}
            className="object-cover"
          />
          <div className="text-sm font-normal text-dark-slate dark:text-neutral-200">
            In order to get your Google One AI Premium trial we need to make
            sure you’re a current student.
          </div>
          <div className="text-sm flex items-center text-blue-500">
            <TiEyeOutline size={20} />
            <span className="font-medium">3426</span>
          </div>
          <div className="text-sm flex items-center text-green-600 dark:text-green-700 font-semibold">
            <HiArrowTrendingUp size={20} />
            <span className="">16%</span>
          </div>
        </li>
      </ul>
      <div className="text-center font-medium text-blue-500 text-sm">
        View all
      </div>
    </div>
  );
}
