import { Switch } from '@mantine/core';
import { MdDarkMode } from 'react-icons/md';

export function ThemeSwitch() {
  return (
    <div className="flex items-center  justify-between px-3">
      <div className="flex items-center text-sm gap-1">
        <MdDarkMode size={20} className="w-8 text-gray-600" />
        <span className="font-medium text-black-primary">Dark mode</span>
      </div>
      <Switch size="sm" />
    </div>
  );
}
