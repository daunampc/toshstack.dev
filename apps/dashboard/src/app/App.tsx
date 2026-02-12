import { ThemeProvider } from '@/providers';
import { RouterProvider } from 'react-router';
import router from './router';

import { ModalsProvider } from '@mantine/modals';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModalsProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ModalsProvider>
    </ThemeProvider>
  );
}
