'use client';
import { User } from '@/entities/user/model';
import { createContext, useContext } from 'react';

const AuthContext = createContext<User | null>(null);

export function AUthProvider({
  initialUser,
  children,
}: {
  initialUser: User | null;
  children: React.ReactNode;
}) {
  return <AuthContext.Provider value={initialUser}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
