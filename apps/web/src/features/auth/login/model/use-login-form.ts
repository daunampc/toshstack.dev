import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import type { LoginPayload } from './types';

export function useLoginForm() {
  return useForm<LoginPayload>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      is_policy: false,
    },
    validate: {
      email: isEmail('Email not valid'),
      password: isNotEmpty('Password not empty'),
      is_policy: (v) => (v ? null : 'You must agree'),
    },
  });
}
