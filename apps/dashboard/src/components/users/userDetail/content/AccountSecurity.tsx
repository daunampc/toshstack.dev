import { Alert, Button, Image, Switch } from '@mantine/core';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import chromePNG from '@/assets/images/chrome.png';
import bravePNG from '@/assets/images/brave.png';
import safariPNG from '@/assets/images/safari.png';
import vietnamPNG from '@/assets/images/vietnam.png';
import { FaTrash } from 'react-icons/fa6';

export default function AccountSecurity() {
  return (
    <div className="max-w-7xl">
      <Alert
        color="red"
        variant="light"
        title="Security process"
        className="font-medium"
        classNames={{ message: 'dark:text-neutral-200' }}
      >
        Account security UI/UX balances strong protection with a seamless user
        experience. Good design makes security intuitive rather than a burden,
        building user trust while preventing unauthorized access
      </Alert>
      <div className="mt-4 space-y-4">
        <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-12 flex-1">
            <div className="basis-1/3">
              <div className="font-semibold text-sm dark:text-neutral-200">
                Password
              </div>
              <span className="dark:text-neutral-400 font-medium text-xs">
                Follow Styles API documentation to learn more.
              </span>
            </div>
            <div className="flex items-center gap-1 basis-2/3">
              <div className="flex items-center dark:text-neutral-300">
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
              </div>
              <div className="flex items-center gap-0.5 text-xs font-medium text-green-500">
                <MdVerified size={16} />
                <span>Vefified</span>
              </div>
            </div>
          </div>
          <Button
            size="xs"
            variant="filled"
            className="dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200"
          >
            Edit
          </Button>
        </div>
        <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-12 flex-1">
            <div className="basis-1/3">
              <div className="font-semibold text-sm dark:text-neutral-200">
                Password level 2
              </div>
              <span className="dark:text-neutral-400 font-medium text-xs">
                Follow Styles API documentation to learn more.
              </span>
            </div>
            <div className="flex items-center gap-1 basis-2/3">
              <div className="flex items-center dark:text-neutral-300">
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
                <HiDotsHorizontal size={20} />
              </div>
              <div className="flex items-center gap-0.5 text-xs font-medium text-green-500">
                <MdVerified size={16} />
                <span>Vefified</span>
              </div>
            </div>
          </div>
          <Button
            size="xs"
            variant="filled"
            className="dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200"
          >
            Edit
          </Button>
        </div>
        <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-12 flex-1">
            <div className="basis-1/3">
              <div className="font-semibold text-sm dark:text-neutral-200">
                Two-step verification
              </div>
              <span className="dark:text-neutral-400 font-medium text-xs">
                Follow Styles API documentation to learn more. To anybody who's
                reading this, I pray that whatever
              </span>
            </div>
            <div className="flex items-center gap-1 basis-2/3">
              <Switch
                label="Two-step verification"
                size="xs"
                className="dark:text-neutral-200 font-medium"
              />
              <div className="flex items-center gap-0.5 text-xs font-medium text-green-500">
                <MdVerified size={16} />
                <span>Vefified</span>
              </div>
            </div>
          </div>
          <Button
            size="xs"
            variant="filled"
            className="dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200"
          >
            Edit
          </Button>
        </div>
        <div className="dark:bg-dark-charcoal p-3 rounded-lg bg-white shadow">
          <div className="dark:text-neutral-200 font-semibold">
            Browers and devices
          </div>
          <span className="text-sm dark:text-neutral-400 font-medium">
            Alert supports Styles API, you can add styles to any inner element
            of the component withclassNames prop. Follow Styles API
            documentation to learn more.
          </span>
          <div className="w-full h-px dark:bg-neutral-700 bg-gray-200 my-2"></div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="dark:bg-dark-charcoal-gray rounded-lg p-2">
                  <Image src={chromePNG} className="w-8 h-8" />
                </div>
                <div className="dark:text-neutral-200 font-semibold text-sm">
                  Chrome on Mac OS X
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <div className="dark:bg-dark-charcoal-gray rounded-lg overflow-hidden p-2">
                    <Image src={vietnamPNG} className="w-6 h-4 object-cover" />
                  </div>
                  <div className="font-medium dark:text-neutral-300 text-sm">
                    Buon ma thuot, Vietnam
                  </div>
                </div>
                <div className="font-medium dark:text-neutral-300 text-sm">
                  Current session
                </div>
                <Button variant="transparent" size="compact-sm">
                  <FaTrash className="text-red-500" />
                </Button>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="dark:bg-dark-charcoal-gray rounded-lg p-2">
                  <Image src={bravePNG} className="w-8 h-8" />
                </div>
                <div className="dark:text-neutral-200 font-semibold text-sm">
                  Brave on Mac OS X
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <div className="dark:bg-dark-charcoal-gray rounded-lg overflow-hidden p-2">
                    <Image src={vietnamPNG} className="w-6 h-4 object-cover" />
                  </div>
                  <div className="font-medium dark:text-neutral-300 text-sm">
                    Buon ma thuot, Vietnam
                  </div>
                </div>
                <div className="font-medium dark:text-neutral-300 text-sm">
                  Current session
                </div>
                <Button variant="transparent" size="compact-sm">
                  <FaTrash className="text-red-500" />
                </Button>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="dark:bg-dark-charcoal-gray rounded-lg p-2">
                  <Image src={bravePNG} className="w-8 h-8" />
                </div>
                <div className="dark:text-neutral-200 font-semibold text-sm">
                  Brave on Mac OS X
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <div className="dark:bg-dark-charcoal-gray rounded-lg overflow-hidden p-2">
                    <Image src={vietnamPNG} className="w-6 h-4 object-cover" />
                  </div>
                  <div className="font-medium dark:text-neutral-300 text-sm">
                    Buon ma thuot, Vietnam
                  </div>
                </div>
                <div className="font-medium dark:text-neutral-300 text-sm">
                  Current session
                </div>
                <Button variant="transparent" size="compact-sm">
                  <FaTrash className="text-red-500" />
                </Button>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="dark:bg-dark-charcoal-gray rounded-lg p-2">
                  <Image src={safariPNG} className="w-8 h-8" />
                </div>
                <div className="dark:text-neutral-200 font-semibold text-sm">
                  Safari on Mac OS X
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <div className="dark:bg-dark-charcoal-gray rounded-lg overflow-hidden p-2">
                    <Image src={vietnamPNG} className="w-6 h-4 object-cover" />
                  </div>
                  <div className="font-medium dark:text-neutral-300 text-sm">
                    Buon ma thuot, Vietnam
                  </div>
                </div>
                <div className="font-medium dark:text-neutral-300 text-sm">
                  Current session
                </div>
                <Button variant="transparent" size="compact-sm">
                  <FaTrash className="text-red-500" />
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
