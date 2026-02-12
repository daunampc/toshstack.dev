import { Button } from '@mantine/core';
import type { NavigationBackProps } from './Navigation.types';
import { MdOutlineChevronLeft } from 'react-icons/md';
import { useNavigate } from 'react-router';

export default function NavigationBack({ children }: NavigationBackProps) {
  const navigation = useNavigate();
  return (
    <div className="w-full space-y-3">
      <Button
        onClick={() => navigation(-1)}
        variant="gradient"
        color="grape"
        size="xs"
        leftSection={<MdOutlineChevronLeft />}
      >
        Back
      </Button>
      {children}
    </div>
  );
}
