import { Badge, Progress } from '@mantine/core';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router';

export default function AccountBilling() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <div className="dark:bg-dark-charcoal bg-white shadow p-3.5 rounded-lg">
          <div className="font-semibold dark:text-neutral-200">
            Plan details
          </div>
          <div className="mt-5 flex items-center gap-8">
            <div>
              <div className="text-sm font-medium dark:text-neutral-400 text-gray-600">
                Plan
              </div>
              <span className="dark:text-neutral-200 font-semibold">
                DNPC Normal
              </span>
            </div>
            <div>
              <div className="text-sm font-medium dark:text-neutral-400 text-gray-600">
                Cost
              </div>
              <div className="flex items-center gap-2">
                <span className="dark:text-neutral-200 font-semibold">
                  $49/month
                </span>
                <Badge className="capitalize" size="sm" variant="light">
                  Discounted until 3/10/2025
                </Badge>
              </div>
            </div>
          </div>
          <div className="dark:bg-dark-charcoal-gray bg-gray-100/60 p-2 rounded-lg mt-4">
            <div className="flex items-center justify-between">
              <div className="font-medium dark:text-neutral-200  text-sm">
                Plan usage
              </div>
              <Badge
                size="sm"
                className="capitalize"
                variant="light"
                color="green"
              >
                Updated 22 hrs ago
              </Badge>
            </div>
            <div className="text-sm font-medium dark:text-neutral-400 text-gray-600">
              Usage resets on Apr 2,2020
            </div>
            <div className="my-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm dark:text-neutral-200 text-dark-slate">
                  Usage
                </div>
                <div className="font-semibold dark:text-neutral-200 text-dark-slate">
                  $4,798/$6.000
                </div>
              </div>
              <Progress
                color="indigo"
                value={70}
                classNames={{ root: 'dark:bg-dark-charcoal' }}
                animated
              />
              <div className="text-sm dark:text-neutral-400 text-gray-600 font-medium">
                When your account meets the requirements, you will receive a
                surprise offer.
              </div>
            </div>
            <div className="border-t dark:border-neutral-700 border-neutral-300 pt-2">
              <div className="font-medium text-sm dark:text-neutral-400 text-gray-600">
                Plan benefits
              </div>
              <ul className="space-y-2.5 mt-2">
                <li className="flex items-center text-sm">
                  <TiTick className="text-green-600" size={25} />
                  <span className="dark:text-neutral-200 font-medium">
                    5.000 Key AI per month (plus 10% buffer)
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  <TiTick className="text-green-600" size={25} />
                  <span className="dark:text-neutral-200 font-medium">
                    5.000 Key AI per month (plus 10% buffer)
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  <TiTick className="text-green-600" size={25} />
                  <span className="dark:text-neutral-200 font-medium">
                    5.000 Key AI per month (plus 10% buffer)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-3">
          <div className="font-semibold text-sm dark:text-neutral-200 text-dark-slate">
            Billing History
          </div>
          <div className="my-2 w-full h-px dark:bg-neutral-700"></div>
          <ul>
            <ul className="flex flex-col gap-3">
              <li className="space-y-1.5 dark:bg-dark-charcoal-gray bg-gray-100/50 p-2.5 rounded-md">
                <div className="flex items-center gap-1.5">
                  <span className="dark:text-neutral-200 text-sm font-medium">
                    Subscription for $99.00
                  </span>
                  <Badge
                    className="capitalize"
                    size="sm"
                    radius={'md'}
                    color="yellow"
                    variant="light"
                  >
                    Scheduled
                  </Badge>
                </div>
                <div className="font-medium text-sm dark:text-neutral-400">
                  April 4, 2020
                </div>
                <Link className="font-medium text-blue-500 text-sm" to={'/'}>
                  Invoice
                </Link>
              </li>
              <li className="space-y-1.5 dark:bg-dark-charcoal-gray bg-gray-100/50 p-2.5 rounded-md">
                <div className="flex items-center gap-1.5">
                  <span className="dark:text-neutral-200 text-sm font-medium">
                    Subscription for $99.00
                  </span>
                  <Badge
                    className="capitalize"
                    size="sm"
                    radius={'md'}
                    color="green"
                    variant="light"
                  >
                    Paid
                  </Badge>
                </div>
                <div className="font-medium text-sm dark:text-neutral-400">
                  April 4, 2020
                </div>
                <Link className="font-medium text-blue-500 text-sm" to={'/'}>
                  Invoice
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
