'use client';
import { Button } from '@mantine/core';
import { LogoutButtonProps } from '../model/types';
import { useLogout } from '../model/use-logout';

export function LogoutButton({ children, ...props }: LogoutButtonProps) {
  const { isPending, mutate } = useLogout();
  return (
    <Button disabled={isPending} loading={isPending} {...props} onClick={mutate}>
      {children}
    </Button>
  );
}
