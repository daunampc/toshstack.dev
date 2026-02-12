import { Switch, Tooltip } from '@mantine/core';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export default function PostActionsSettings() {
  return (
    <div className="space-y-3">
      <div className="dark:text-neutral-200 dark:bg-dark-charcoal bg-white shadow font-semibold p-3 rounded-md">
        Settings
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-3  dark:bg-dark-charcoal bg-white shadow p-3 rounded-md">
          <div className="dark:text-neutral-200  text-dark-slate font-medium">
            Comments & interactions
          </div>

          <Switch
            size="sm"
            label={
              <div className="flex items-center gap-1">
                <span>Allow users to comment.</span>
                <Tooltip label="Allow users to comment.">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            name="allow-comments"
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
          <Switch
            size="sm"
            label={
              <div className="flex items-center gap-1">
                <span>Allow reactions / likes</span>
                <Tooltip label="Allow reactions / likes">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
          <Switch
            label={
              <div className="flex items-center gap-1">
                <span>Show view count</span>
                <Tooltip label="Show view count">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
          <Switch
            label={
              <div className="flex items-center gap-1">
                <span>Show reading time</span>
                <Tooltip label="Show reading time">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
        </div>
        <div className="space-y-3  dark:bg-dark-charcoal bg-white shadow p-3 rounded-md">
          <div className="dark:text-neutral-200  text-dark-slate font-medium">
            Special display management
          </div>

          <Switch
            size="sm"
            label={
              <div className="flex items-center gap-1">
                <span>Disable sharing buttons</span>
                <Tooltip label="Disable sharing buttons users">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            name="allow-comments"
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
          <Switch
            size="sm"
            label={
              <div className="flex items-center gap-1">
                <span>Hide featured image in post</span>
                <Tooltip label="Hide featured image in post">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
          <Switch
            label={
              <div className="flex items-center gap-1">
                <span>Notify subscribers on publish</span>
                <Tooltip label="Notify subscribers on publish">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
          <Switch
            label={
              <div className="flex items-center gap-1">
                <span>Show reading time</span>
                <Tooltip label="Show reading time">
                  <IoMdInformationCircleOutline
                    className="dark:text-neutral-400"
                    size={17}
                  />
                </Tooltip>
              </div>
            }
            classNames={{ label: 'dark:text-neutral-200 font-medium' }}
            color="grape"
          />
        </div>
      </div>
    </div>
  );
}
