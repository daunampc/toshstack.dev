import { TextInput } from '@mantine/core';

export default function PostSettingsMain() {
  return (
    <div className="w-full grid grid-cols-4">
      <div className="dark:bg-dark-charcoal bg-white shadow rounded-md">
        <div className="p-3 font-medium text-sm">General</div>
        <div className="w-full h-px dark:bg-neutral-600" />
        <div className="p-3">
          <TextInput
            label="Page title"
            className="font-medium"
            classNames={{ input: 'dark:bg-dark-charcoal-gray' }}
            placeholder="Enter your page title (DNPC)"
          />
        </div>
      </div>
    </div>
  );
}
