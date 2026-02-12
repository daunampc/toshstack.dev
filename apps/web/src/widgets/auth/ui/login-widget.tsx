import { LoginForm } from '@/features/auth/login/ui';
import { Button } from '@mantine/core';
import Image from 'next/image';
export default function LoginWidget() {
  return (
    <div className="max-w-lg inset-0 w-full p-4 bg-white shadow rounded-lg relative z-10">
      <div className="w-full flex flex-col items-center ">
        <Image
          src={'/images/logo-a.png'}
          alt="logo"
          width={1200}
          height={500}
          className="w-36 h-14"
        />

        <div className="text-center text-lg font-semibold">Sign In to Toshstack</div>
        <div className="text-sm text-gray-700 font-medium">
          Welcome back! Please sign in to continue
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
            <Image width={25} height={25} alt="github-mark" src={'/images/github-mark.png'} />{' '}
          </Button>
        </div>
        <div className="flex items-center gap-6 my-2 w-full">
          <div className="w-full h-px bg-gray-200 flex-1"></div>
          <div className="font-semibold text-xs">OR</div>
          <div className="w-full h-px bg-gray-200 flex-1"></div>
        </div>
        <LoginForm />
        <div className="text-xs font-medium mt-1.5 text-center">
          Dont have an account? <span className="text-purple-500">Register now</span>
        </div>
      </div>
    </div>
  );
}
