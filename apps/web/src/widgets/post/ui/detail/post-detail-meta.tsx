import { Text, Stack, Divider, Group, Badge } from '@mantine/core';

export default function PostDetailMeta() {
  return (
    <div className="py-2">
      <Stack gap="sm">
        <div className="text-base font-semibold">Post Info</div>
        <Divider />

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-700">Posted</div>
          <div className="text-xs text-black-primary font-medium">2 days ago</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-700">Comment</div>
          <div className="text-xs text-black-primary font-medium">366K</div>
        </div>

        <Group justify="space-between">
          <Text size="xs" c="dimmed">
            Score
          </Text>
          <Text size="xs">5.6K</Text>
        </Group>

        <Divider />

        <Stack gap={6}>
          <Badge radius="sm" variant="light">
            AI
          </Badge>
          <Badge radius="sm" variant="light">
            Discussion
          </Badge>
        </Stack>
      </Stack>
    </div>
  );
}
