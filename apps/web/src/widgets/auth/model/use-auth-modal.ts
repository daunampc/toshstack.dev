'use client';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { AuthTab } from './auth-modal.types';

export function useAuthModal() {
  const [opened, handlers] = useDisclosure();
  const [tab, setTab] = useState<AuthTab>('login');

  const openLogin = () => {
    setTab('login');
    handlers.open();
  };

  const openRegister = () => {
    setTab('register');
    handlers.open();
  };

  const close = () => {
    handlers.close();
    setTab('login'); // reset state
  };

  return {
    opened,
    tab,
    setTab,
    openLogin,
    openRegister,
    close,
  };
}
