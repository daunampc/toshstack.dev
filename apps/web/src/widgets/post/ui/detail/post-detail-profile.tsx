import { Avatar, Button, Stack, Group, Text, Menu, ActionIcon, Divider } from '@mantine/core';
import {
  FiMoreVertical,
  FiUserPlus,
  FiMessageSquare,
  FiStar,
  FiCalendar,
  FiTrendingUp,
  FiTwitter,
  FiGithub,
  FiLink,
} from 'react-icons/fi';
import { PostDetailProfileProps } from '../../model';

export default function PostDetailProfile({ post }: PostDetailProfileProps) {
  if (!post) return null;
  return (
    <div className="py-3">
      <Stack gap="sm">
        {/* Header */}
        <Group justify="space-between" align="flex-start">
          <div className="flex items-center gap-1">
            <Avatar
              alt={post.author.handle}
              size={48}
              radius="xl"
              src={post.author.profile.avatar_url}
            />
            <div className="flex flex-col gap-0.5">
              <div className="text-sm font-semibold">{post.author.profile.display_name}</div>
              <div className="text-xs font-medium text-gray-500">{post.author.handle}</div>
            </div>
          </div>
          <Menu position="bottom-end" withArrow>
            <Menu.Target>
              <ActionIcon variant="subtle">
                <FiMoreVertical size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<FiStar size={14} />}>View profile</Menu.Item>
              <Menu.Item leftSection={<FiMessageSquare size={14} />}>Message</Menu.Item>
              <Menu.Divider />
              <Menu.Item color="red">Report user</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <div className="text-sm line-clamp-4 text-black-primary">
          {post.author.profile.about_me}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            color="indigo"
            className="flex-1"
            size="xs"
            radius="md"
            leftSection={<FiUserPlus size={14} />}
          >
            Follow
          </Button>
          <Button
            className="flex-1"
            size="xs"
            radius="md"
            variant="light"
            leftSection={<FiMessageSquare size={14} />}
          >
            Message
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <Stat icon={<FiTrendingUp size={14} />} label="Karma" value="12.4k" />
          <Stat icon={<FiStar size={14} />} label="Posts" value="128" />
          <Stat icon={<FiCalendar size={14} />} label="Joined" value="2021" />
        </div>

        <Divider />

        {/* Links */}
        <Group gap="xs">
          <ActionIcon variant="subtle">
            <FiTwitter size={16} />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <FiGithub size={16} />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <FiLink size={16} />
          </ActionIcon>
        </Group>
      </Stack>
    </div>
  );
}

/* ---------- Small stat component ---------- */

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center">
      <Group justify="center" gap={4}>
        <span className="text-gray-500">{icon}</span>
        <Text size="xs" c="dimmed">
          {label}
        </Text>
      </Group>
      <Text size="sm" fw={600}>
        {value}
      </Text>
    </div>
  );
}
