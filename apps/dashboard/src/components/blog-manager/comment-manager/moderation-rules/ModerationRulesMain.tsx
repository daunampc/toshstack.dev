import { Button, Switch, Tooltip } from '@mantine/core';
import { ImInfo } from 'react-icons/im';
import { FcFlashAuto } from 'react-icons/fc';
import { RiRobot2Line } from 'react-icons/ri';
import { VscGithubAction } from 'react-icons/vsc';
import { MdOutlineDisabledByDefault } from 'react-icons/md';

export default function ModerationRulesMain() {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="grid grid-cols-4 gap-3">
        {Array(8)
          .fill('_')
          .map((_, idx) => {
            return (
              <div
                key={idx}
                className="dark:bg-dark-charcoal bg-white shadow rounded-lg"
              >
                <div className="flex items-center gap-1 px-3 py-1.5">
                  <RiRobot2Line />
                  <div className="font-semibold dark:text-neutral-200">
                    AI Automation
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-3 border-t border-neutral-700">
                  <Switch
                    label={
                      <div className="flex items-center gap-1">
                        <span>Auto AI Comment</span>
                        <Tooltip label="Auto block comment by AI">
                          <ImInfo className="text-orange-500" size={15} />
                        </Tooltip>
                      </div>
                    }
                    size="sm"
                    classNames={{
                      label: 'dark:text-neutral-200 font-medium',
                    }}
                  />

                  <Switch
                    label={
                      <div className="flex items-center gap-1">
                        <span>Auto Block Comment</span>
                        <Tooltip label="Auto block comment spam 10 comment 1 second">
                          <ImInfo className="text-orange-500" size={15} />
                        </Tooltip>
                      </div>
                    }
                    description="Automation Block comment"
                    size="sm"
                    classNames={{
                      label: 'dark:text-neutral-200 font-medium',

                      description: 'font-medium',
                    }}
                  />

                  <Switch
                    label="Block Account Commment"
                    size="sm"
                    classNames={{
                      label: 'dark:text-neutral-200 font-medium',
                    }}
                  />
                  <Switch
                    label="Block Account Commment"
                    size="sm"
                    classNames={{
                      label: 'dark:text-neutral-200 font-medium',
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>

      <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-3">
        <ul className="space-y-3">
          {Array(6)
            .fill('_')
            .map((_, idx) => {
              return (
                <li
                  key={idx}
                  className="dark:bg-dark-charcoal-gray p-2 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-1.5 ">
                    <FcFlashAuto size={25} />
                    <div className="flex flex-col gap-0.5">
                      <div className="text-base font-medium dark:text-neutral-200 text-dark-slate">
                        Supabase is the Postgres development platform. Start
                        your project with a Postgres database,
                      </div>
                      <span className="text-xs font-medium dark:text-purple-300">
                        Supabase is the Postgres development platform. Start
                        your project with a Postgres database, Authentication,
                        instant APIs, Edge Functions, Realtime subscriptions,
                        Storage, and Vector embeddings
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button size="compact-sm" variant="light" color="red">
                      <MdOutlineDisabledByDefault />
                    </Button>
                    <Button size="compact-sm" variant="light" color="green">
                      <VscGithubAction />
                    </Button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
