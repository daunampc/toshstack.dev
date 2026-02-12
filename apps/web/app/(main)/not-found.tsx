import { Button } from '@mantine/core';
import Link from 'next/link';

export default function notFound() {
  return (
    <div className=" w-full">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12px 12px, #1e3a8a 2px, transparent 2px), radial-gradient(circle at 36px 36px, #1e3a8a 2px, transparent 2px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto flex max-w-6xl items-center h-full justify-center">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7dcc7] bg-white/70 px-3 py-1 text-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#b91c1c]" />
              <span className="text-[#6b7280]">404 • Page Not Found</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Wandering through a <span className="text-[#1e3a8a]">narrow alley</span> in Kyoto.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4b5563]">
              The page you’re looking for doesn’t exist or has been moved. Please return to a safe
              place, or try searching for it another way.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex items-center justify-center rounded-2xl bg-[#1e3a8a] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#17306f] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              >
                Go to Home
                <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
              </Link>

              <Button
                variant="light"
                radius={'lg'}
                size="lg"
                className="  border border-[#e7dcc7] bg-white/70 px-5 py-3 text-sm font-medium text-[#1f2937]"
              >
                Back
              </Button>

              <Link
                href="/search"
                className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-[#b91c1c]/10 px-5 py-3 text-sm font-medium text-[#b91c1c] transition hover:bg-[#b91c1c]/15 focus:outline-none focus:ring-2 focus:ring-[#b91c1c]/20"
              >
                Search
              </Link>
            </div>

            {/* Microcopy */}
            <div className="mt-8 flex items-center gap-3 text-sm text-[#6b7280]">
              <span className="hidden sm:inline">
                Tip: Double-check the URL or use the navigation menu
              </span>
            </div>
          </div>

          {/* Right: illustration card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[#e7dcc7] bg-white/70 shadow-sm backdrop-blur">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#b91c1c]/10 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#1e3a8a]/10 blur-2xl" />

              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#6b7280]">Error code</p>
                    <p className="mt-1 text-6xl font-semibold tracking-tight text-[#111827]">404</p>
                  </div>

                  {/* Stamp */}
                  <div className="relative">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-[#e7dcc7] bg-white shadow-sm">
                      <span className="text-xl font-semibold text-[#b91c1c]">失</span>
                    </div>
                    <p className="mt-2 text-center text-xs text-[#9ca3af]">shitsu</p>
                  </div>
                </div>

                {/* Minimal torii / path illustration */}
                <div className="mt-10">
                  <div className="relative mx-auto h-56 w-full max-w-md">
                    {/* ground */}
                    <div className="absolute bottom-0 left-1/2 h-2 w-[85%] -translate-x-1/2 rounded-full bg-[#111827]/10" />

                    {/* path */}
                    <div className="absolute bottom-0 left-1/2 h-44 w-40 -translate-x-1/2 rounded-[999px] bg-gradient-to-t from-[#1e3a8a]/10 to-transparent" />

                    {/* torii */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <div className="relative h-32 w-44">
                        <div className="absolute left-0 top-0 h-4 w-full rounded bg-[#b91c1c]" />
                        <div className="absolute left-4 top-6 h-3 w-[calc(100%-32px)] rounded bg-[#b91c1c]/90" />
                        <div className="absolute bottom-0 left-8 h-24 w-4 rounded bg-[#b91c1c]/95" />
                        <div className="absolute bottom-0 right-8 h-24 w-4 rounded bg-[#b91c1c]/95" />
                        <div className="absolute bottom-8 left-1/2 h-2 w-20 -translate-x-1/2 rounded bg-[#111827]/10" />
                      </div>
                    </div>

                    <div className="absolute right-6 top-10 rotate-6">
                      <div className="rounded-2xl border border-[#e7dcc7] bg-[#fbf7ef] px-4 py-3 shadow-sm">
                        <p className="text-xs text-[#6b7280]">お探しのページ</p>
                        <p className="text-sm font-medium text-[#1f2937]">見つかりません</p>
                      </div>
                    </div>

                    <div className="absolute left-8 top-12 h-2 w-2 rounded-full bg-[#b91c1c]/40" />
                    <div className="absolute left-14 top-20 h-1.5 w-1.5 rounded-full bg-[#b91c1c]/30" />
                    <div className="absolute left-20 top-14 h-1.5 w-1.5 rounded-full bg-[#b91c1c]/25" />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <Link className="text-[#1e3a8a] hover:underline" href="/help">
                    Trung tâm trợ giúp
                  </Link>
                  <span className="text-[#d1c4ac]">•</span>
                  <Link className="text-[#1e3a8a] hover:underline" href="/contact">
                    Liên hệ
                  </Link>
                  <span className="text-[#d1c4ac]">•</span>
                  <Link className="text-[#1e3a8a] hover:underline" href="/sitemap">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>

            {/* Side note */}
            <p className="mt-4 text-center text-xs text-[#9ca3af]">
              “Wabi-sabi”: tối giản, ấm, và chừa khoảng thở.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
