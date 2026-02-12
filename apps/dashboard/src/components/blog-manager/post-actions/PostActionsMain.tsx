import { Tabs } from '@mantine/core';

import EditorTiptap from './editor/EditorTiptap';
import { LuFileText, LuSettings } from 'react-icons/lu';
import PostActionsGeneral from './PostActionsGeneral';
import PostActionsSettings from './PostActionsSettings';
export default function PostActionsMain() {
  return (
    <div className="w-full rounded-md gap-3">
      <Tabs
        defaultValue={'general'}
        classNames={{
          tabLabel: 'text-sm dark:text-neutral-200 font-semibold',
          tab: 'hover:dark:bg-dark-charcoal',
          list: '',
        }}
      >
        <Tabs.List className="dark:before:border-dark-charcoal">
          <Tabs.Tab
            value="general"
            leftSection={
              <LuFileText size={16} className="dark:text-neutral-200" />
            }
          >
            General
          </Tabs.Tab>
          <Tabs.Tab
            value="content"
            leftSection={
              <LuFileText size={16} className="dark:text-neutral-200" />
            }
          >
            Content
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={
              <LuSettings size={16} className="dark:text-neutral-200" />
            }
          >
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="general">
          <PostActionsGeneral />
        </Tabs.Panel>
        <Tabs.Panel value="content">
          <div className="flex-1 dark:bg-dark-charcoal bg-white shadow rounded-md">
            <EditorTiptap />
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <PostActionsSettings />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
