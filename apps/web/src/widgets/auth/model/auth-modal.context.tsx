'use client';
import { createContext, useContext } from 'react';
import { useAuthModal } from './use-auth-modal';
type AuthModalContextValue = ReturnType<typeof useAuthModal>;

export const AuthModalContext = createContext<AuthModalContextValue | null>(null);
export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const modal = useAuthModal();
  return <AuthModalContext.Provider value={modal}>{children}</AuthModalContext.Provider>;
}

export function useAuthModalContext(): AuthModalContextValue {
  const context = useContext(AuthModalContext);

  if (!context) {
    throw new Error('useAuthModalContext must be used within <AuthModalProvider>');
  }

  return context;
}
