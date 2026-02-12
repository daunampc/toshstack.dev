import { HeaderHome } from "@/widgets/header";

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHome />
      <div>
        {children}
      </div>
    </div>
  )
}
