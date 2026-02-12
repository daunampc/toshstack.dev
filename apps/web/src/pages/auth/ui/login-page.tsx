import { LoginWidget } from '@/widgets/auth/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in | Toshtack',
  description:
    'Sign in to Toshtack to access your developer account, manage your content, and explore programming resources.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Sign in to Toshtack',
    description: 'Access your Toshtack account and continue exploring developer resources.',
    url: 'https://toshtack.dev/login',
    siteName: 'Toshtack',
    type: 'website',
  },
};
export const LoginPage = () => LoginWidget();
