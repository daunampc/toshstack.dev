export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[url(/images/bg-login.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/10" />
      <>{children}</>
    </div>
  );
}
