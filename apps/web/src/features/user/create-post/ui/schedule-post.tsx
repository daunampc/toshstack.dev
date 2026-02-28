import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';
import { useMemo, useCallback } from 'react';
import { SchedulePostProps } from '../model/types';

export function SchedulePost({ form }: SchedulePostProps) {
  const [opened, { open, close }] = useDisclosure();

  // Minimum date is current time
  const minDate = useMemo(() => new Date(), []);

  // Maximum date is 90 days from now
  const maxDate = useMemo(() => dayjs().add(90, 'day').toDate(), []);

  // Convert stored string to Date for the picker
  const currentValue = useMemo(() => {
    const value = form.values.schedule_post;
    if (!value) return null;
    const date = dayjs(value).toDate();
    return isNaN(date.getTime()) ? null : date;
  }, [form.values.schedule_post]);

  // Mantine v8 DateTimePicker onChange returns string | null
  const handleDateChange = useCallback(
    (value: string | null) => {
      // Convert to ISO string if value exists
      const isoValue = value ? dayjs(value).toISOString() : null;
      form.setFieldValue('schedule_post', isoValue);
      // Validate immediately after change
      form.validateField('schedule_post');
    },
    [form]
  );

  const handleCancelSchedule = () => {
    close();
    form.setFieldValue('schedule_post', null);
    form.clearFieldError('schedule_post');
  };

  const handleSave = () => {
    const validation = form.validateField('schedule_post');
    if (!validation.hasError) {
      close();
    }
  };

  return (
    <>
      <Button type="button" onClick={open} radius={'xl'} variant="light">
        Set display time.
      </Button>
      <Modal
        radius={'lg'}
        centered
        title={
          <div className="flex flex-col gap-1">
            <div className="font-medium">Schedule Post</div>
            <div className="text-sm text-black-primary">Time Zone: Asia/Saigon</div>
          </div>
        }
        opened={opened}
        onClose={close}
      >
        <div className="flex flex-col gap-2">
          <DateTimePicker
            clearable
            value={currentValue}
            minDate={minDate}
            maxDate={maxDate}
            onChange={handleDateChange}
            size="md"
            aria-label="Schedule Post"
            radius={'xl'}
            placeholder="Pick date and time"
            error={form.errors.schedule_post}
            valueFormat="DD/MM/YYYY HH:mm"
          />
          <div>
            <div className="text-sm font-medium text-neutral-600">Advanced Options</div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1.5">
          <Button
            onClick={handleCancelSchedule}
            type="button"
            radius={'xl'}
            variant="light"
            color="red"
          >
            Cancel
          </Button>
          <Button onClick={handleSave} type="button" radius={'xl'} variant="filled" color="indigo">
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}
