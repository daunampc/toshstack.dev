'use client';
import { Button } from '@mantine/core';
import { LogoutButtonProps } from '../model/types';
import { useLogout } from '../model/use-logout';
import { toast } from 'sonner';

export function LogoutButton({ children, ...props }: LogoutButtonProps) {
  const { isPending, mutate } = useLogout({
    onSuccess: () => {
      window.location.reload();
    },
    onError: () => {
      toast.error('Logout error');
    },
  });
  return (
    <Button disabled={isPending} loading={isPending} {...props} onClick={mutate}>
      {children}
    </Button>
  );
}
