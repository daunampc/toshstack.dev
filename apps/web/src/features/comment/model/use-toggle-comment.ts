import { useDisclosure } from '@mantine/hooks';

export function useToggleComment(initial = false) {
  const [opened, { close, open }] = useDisclosure(initial);

  return {
    opened,
    open,
    close,
  };
}
