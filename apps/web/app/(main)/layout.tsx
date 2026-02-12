import { HeaderMain } from '@/widgets/header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMain />
      <div className="grow flex flex-raw container mx-auto">{children}</div>
    </div>
  );
}
