'use client';
import clsx from 'clsx';
import { Button, Checkbox, TextInput } from '@mantine/core';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useLoginForm } from '../model/use-login-form';
import { useLogin } from '../model/use-login';
export function LoginForm() {
  const { mutate, data, isPending, error } = useLogin();
  const form = useLoginForm();

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        mutate(
          {
            email: values.email,
            password: values.password,
          },
          {
            onSuccess: () => {
              window.location.reload();
            },
          }
        )
      )}
      className="space-y-2.5 w-full"
    >
      <TextInput
        disabled={isPending}
        key={form.key('email')}
        error={'124'}
        {...form.getInputProps('email')}
        leftSection={<MdEmail />}
        withAsterisk
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <TextInput
        disabled={isPending}
        error={true}
        key={form.key('password')}
        {...form.getInputProps('password')}
        leftSection={<RiLockPasswordFill />}
        withAsterisk
        label="Password"
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
        {data && 'Login success'}
        {}
        {error && error.message}
      </div>
      <Button
        loading={isPending}
        disabled={isPending}
        loaderProps={{ type: 'dots' }}
        tabIndex={0}
        type="submit"
        className="w-full"
      >
        Login
      </Button>
    </form>
  );
}
