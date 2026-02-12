'use client';
import { Button, Checkbox, TextInput } from '@mantine/core';
import { useRegisterForm } from '../model/use-register-form';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import clsx from 'clsx';
import { useRegister } from '../model/use-register';
import { ERROR_MESSAGE } from '@/shared/config/error-config';
import { useAuthModalContext } from '@/widgets/auth/model';
import { useEffect } from 'react';

export function RegisterForm() {
  const { mutate, isPending, data, error } = useRegister();
  const { setTab } = useAuthModalContext();
  const form = useRegisterForm();
  useEffect(() => {
    if (!isPending && data && !error) setTab('login');
  }, [isPending, data, error]);
  return (
    <form
      onSubmit={form.onSubmit((values) =>
        mutate({
          email: values.email,
          password: values.password,
          re_password: values.re_password,
        })
      )}
      className="space-y-2.5 w-full"
    >
      <TextInput
        disabled={isPending}
        key={form.key('email')}
        {...form.getInputProps('email')}
        leftSection={<MdEmail />}
        error={ERROR_MESSAGE[error?.code ?? '']}
        withAsterisk
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <TextInput
        disabled={isPending}
        key={form.key('password')}
        {...form.getInputProps('password')}
        leftSection={<RiLockPasswordFill />}
        withAsterisk
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <TextInput
        disabled={isPending}
        key={form.key('re_password')}
        {...form.getInputProps('re_password')}
        leftSection={<RiLockPasswordFill />}
        withAsterisk
        label="Reply password"
        placeholder="Enter your password"
        type="password"
      />
      <div className="text-xs font-medium text-gray-600">Forgot password ?</div>

      <Checkbox
        disabled={isPending}
        key={form.key('is_policy')}
        size="xs"
        className="font-medium text-gray-700"
        label="You agree to our Terms and Privacy Policy"
        {...form.getInputProps('is_policy')}
      />
      <div
        className={clsx(
          data && !error ? 'text-green-500' : 'text-red-500',
          'text-center text-sm font-medium'
        )}
      >
        {error && error.message}
        {data && 'Register success'}
      </div>
      <Button
        loading={isPending}
        disabled={isPending}
        loaderProps={{ type: 'dots' }}
        tabIndex={0}
        type="submit"
        className="w-full"
      >
        Register
      </Button>
    </form>
  );
}
