'use client';
import { Button, Modal } from '@mantine/core';
import { LuCircleUser } from 'react-icons/lu';
import { useAuthModalContext } from '../model/auth-modal.context';
import Image from 'next/image';
import { LoginForm } from '@/features/auth/login/ui';
import { RegisterForm } from '@/features/auth/register/ui';

export default function AuthModal() {
  const { openLogin, close, opened, tab, setTab } = useAuthModalContext();
  return (
    <div>
      <Button onClick={openLogin} leftSection={<LuCircleUser />} radius={'lg'} color="grape">
        Log In
      </Button>
      <Modal
        closeOnClickOutside={false}
        withCloseButton
        overlayProps={{
          blur: 8,
        }}
        size={550}
        radius="md"
        opened={opened}
        onClose={close}
      >
        <div className="w-full flex flex-col items-center ">
          <Image
            src={'/images/logo-a.png'}
            alt="logo"
            width={1200}
            height={500}
            className="w-36 h-14"
          />

          <div className="text-center text-lg font-semibold">
            {tab === 'login' ? 'Sign In' : 'Sign Up'} to Toshstack
          </div>
          <div className="text-sm text-gray-700 font-medium">
            Welcome back! Please {tab === 'login' ? 'sign in' : 'sign up'} to continue
          </div>
          <div className="flex items-center gap-3 mt-4 w-full">
            <Button
              variant="white"
              size="md"
              className="flex-1  rounded-md shadow-sm bg-white border border-gray-200"
            >
              <Image width={25} height={25} alt="google" src={'/images/google.png'} />
            </Button>
            <Button
              className="flex-1 rounded-md shadow-sm bg-white border border-gray-200"
              size="md"
              variant="white"
            >
              <Image width={25} height={25} alt="facebook" src={'/images/facebook.png'} />
            </Button>
            <Button
              className="flex-1 rounded-md shadow-sm  bg-white border border-gray-200"
              size="md"
              variant="white"
            >
              <Image
                width={25}
                height={25}
                alt="github-mark"
                src={'/images/github-mark.png'}
              />{' '}
            </Button>
          </div>
          <div className="flex items-center gap-6 my-2 w-full">
            <div className="w-full h-px bg-gray-200 flex-1"></div>
            <div className="font-semibold text-xs">OR</div>
            <div className="w-full h-px bg-gray-200 flex-1"></div>
          </div>
          {tab === 'login' && <LoginForm />}
          {tab === 'register' && <RegisterForm />}

          <div
            onClick={() => setTab(tab === 'login' ? 'register' : 'login')}
            className="text-xs font-medium mt-1.5 text-center"
          >
            Dont have an account?{' '}
            <span className="text-purple-500">{tab === 'register' ? 'Login' : 'Register'} now</span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
