import { Tabs } from '@mantine/core';
import { LuScanSearch } from 'react-icons/lu';
import { VscSymbolKeyword } from 'react-icons/vsc';

export default function SeoCheckerKeyword() {
  return (
    <Tabs
      defaultValue="keywords"
      classNames={{
        tab: 'dark:text-neutral-200 font-medium dark:hover:bg-dark-charcoal-gray',
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="keywords" leftSection={<VscSymbolKeyword size={12} />}>
          Keywords
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="keywords">
        <ul className="p-3 flex flex-col gap-1.5 max-h-60 overflow-y-auto">
          {Array(10)
            .fill('_')
            .map((_, idx) => {
              return (
                <li key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-1  text-sm dark:text-blue-400">
                    <LuScanSearch />
                    <span className="line-clamp-1">
                      How to fix data home, to fix data home to fix data home
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium flex-shrink-0">
                    <div className="text-orange-500">
                      10% <b>Visibilty</b>
                    </div>
                    <div className="text-green-500">
                      1.0 <b>Position</b>
                    </div>
                    <div className="text-cyan-500">
                      10% <b>Visibilty</b>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </Tabs.Panel>
    </Tabs>
  );
}
