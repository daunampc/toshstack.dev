import { ThemeProviderContext, type Theme } from '@/context/ThemeContext';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { theme as themeConfigMantine } from '@/config/theme';
export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme: Theme;
  storageKey?: string;
};
export default function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <MantineProvider theme={themeConfigMantine} defaultColorScheme={'auto'}>
        {children}
      </MantineProvider>
    </ThemeProviderContext.Provider>
  );
}
