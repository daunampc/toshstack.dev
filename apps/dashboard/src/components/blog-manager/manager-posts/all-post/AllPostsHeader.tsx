import {
  handleBulkSelect,
  handleFilterPost,
  handleLayoutChange,
} from '@/features/post-manager/store/postManager.slice';
import type {
  AllPostFilterKey,
  AllPostLayout,
} from '@/features/post-manager/types/postsManager.types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  Select,
  Switch,
  TextInput,
} from '@mantine/core';
import { BiSearch } from 'react-icons/bi';
import { LuImport } from 'react-icons/lu';
import { MdCached } from 'react-icons/md';
import { PiExportBold } from 'react-icons/pi';

export default function AllPostsHeader() {
  const dispatch = useAppDispatch();
  const postManagerState = useAppSelector(state => state.postManagerReducer);
  const activeFilters = (
    Object.keys(postManagerState.allPost.filter) as AllPostFilterKey[]
  ).filter(key => postManagerState.allPost.filter[key]);
  console.log(activeFilters);
  return (
    <div className="w-full space-y-3">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <TextInput
              placeholder="Search post"
              size="sm"
              leftSection={<BiSearch />}
              w={350}
              classNames={{
                input:
                  'dark:bg-dark-charcoal dark:border-neutral-600 font-medium dark:text-neutral-200',
              }}
            />
            <Select
              value={postManagerState.allPost.layout}
              onChange={(_, option) =>
                dispatch(handleLayoutChange(option.value as AllPostLayout))
              }
              data={[
                {
                  value: 'grid-view',
                  label: 'Grid view',
                },
                {
                  value: 'list-view',
                  label: 'List view',
                },
              ]}
              w={150}
              variant="filled"
              size="sm"
              classNames={{
                input:
                  'dark:bg-dark-charcoal font-semibold dark:text-neutral-200',
                dropdown:
                  'dark:bg-dark-charcoal dark:text-neutral-200 dark:border-neutral-600 font-medium',
                option: 'hover:bg-dark-charcoal-gray',
              }}
            />
            <Popover position="bottom-start">
              <Popover.Target>
                <Button className="dark:bg-dark-charcoal" size="sm">
                  Filter
                </Button>
              </Popover.Target>
              <Popover.Dropdown
                className="dark:bg-dark-charcoal dark:border-neutral-700"
                w={200}
              >
                <CheckboxGroup
                  onChange={value => {
                    dispatch(handleFilterPost(value as AllPostFilterKey[]));
                  }}
                  value={activeFilters}
                >
                  <div className="space-y-2.5">
                    <Checkbox
                      label="Top likes"
                      value={'top_likes'}
                      size="sm"
                      className="dark:text-neutral-200 font-medium"
                    />
                    <Checkbox
                      label="Top comments"
                      value={'top_comments'}
                      size="sm"
                      className="dark:text-neutral-200 font-medium"
                    />
                    <Checkbox
                      label="Top views"
                      value={'top_views'}
                      size="sm"
                      className="dark:text-neutral-200 font-medium"
                    />
                    <Checkbox
                      label="Reports"
                      value={'reports'}
                      size="sm"
                      className="dark:text-neutral-200 font-medium"
                    />
                  </div>
                </CheckboxGroup>
              </Popover.Dropdown>
            </Popover>
          </div>
          <Popover position="bottom-end" radius={'md'} withinPortal>
            <Popover.Target>
              <Button className="dark:bg-dark-charcoal" size="sm">
                Actions
              </Button>
            </Popover.Target>
            <Popover.Dropdown
              className="dark:bg-dark-charcoal dark:border-neutral-700 space-y-3 gap-3"
              w={280}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <Button
                    size="xs"
                    leftSection={<MdCached />}
                    color="red"
                    variant="light"
                    className="w-full"
                    justify="start"
                  >
                    Clear Cache
                  </Button>
                  <Button
                    size="xs"
                    leftSection={<LuImport />}
                    color="green"
                    variant="filled"
                    className="w-full"
                    justify="start"
                  >
                    Import data
                  </Button>
                  <Button
                    size="xs"
                    leftSection={<PiExportBold />}
                    color="blue"
                    variant="filled"
                    className="w-full"
                    justify="start"
                  >
                    Export data
                  </Button>
                </div>
                <div className="space-y-3">
                  <Button
                    size="xs"
                    leftSection={<PiExportBold />}
                    color="red"
                    variant="filled"
                    className="w-full"
                    justify="start"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
      <div className="w-full">
        <Switch
          checked={postManagerState.allPost.bulkSelect.is_select}
          label={
            <div className="flex gap-1">
              <span>Bulk Select</span>
              <b className="text-purple-500">
                {postManagerState.allPost.bulkSelect.data.length}
              </b>
            </div>
          }
          onClick={() => dispatch(handleBulkSelect())}
          className="dark:text-neutral-200 font-medium"
        />
      </div>
    </div>
  );
}
