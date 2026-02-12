import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { RegisterPayload } from './types';

export function useRegisterForm() {
  return useForm<RegisterPayload>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      re_password: '',
      is_policy: false,
    },
    validate: {
      email: isEmail('Email not valid'),
      password: isNotEmpty('Password not empty'),
      re_password: isNotEmpty('Reply password not empty'),
      is_policy: (v) => (v ? null : 'You must agree'),
    },
  });
}
