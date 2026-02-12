import { Select, TextInput } from '@mantine/core';

import { IoMdSearch } from 'react-icons/io';
import { CommentSortBy as CommentSortByType, CommentSortByProps } from '../model';

export function CommentSortBy({ value, onChange }: CommentSortByProps) {
  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <div className="text-xs font-medium">Sort by:</div>
        <Select
          w={80}
          className="font-medium"
          radius={'md'}
          variant="unstyled"
          size="sm"
          data={[
            { label: 'Best', value: 'best' },
            { label: 'Top', value: 'top' },
            { label: 'New', value: 'new' },
            { label: 'Old', value: 'old' },
          ]}
          value={value}
          onChange={(value) => value && onChange(value as CommentSortByType)}
          allowDeselect={false}
        />
        <TextInput
          radius={'xl'}
          size="sm"
          leftSection={<IoMdSearch />}
          placeholder="Search your comment"
        />
      </div>
    </>
  );
}
