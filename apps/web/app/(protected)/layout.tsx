import { HeaderMain } from '@/widgets/header';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMain />
      <div className="grow container mx-auto  py-4">{children}</div>
    </div>
  );
}
