import { useTheme } from '@/hooks/useTheme';
import { Button, useMantineColorScheme } from '@mantine/core';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
export default function HeaderTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setColorScheme(theme === 'dark' ? 'light' : 'dark');
      }}
      size="compact-sm"
      variant="transparent"
      color={theme === 'dark' ? 'grape' : 'yellow'}
    >
      {theme === 'dark' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
    </Button>
  );
}
