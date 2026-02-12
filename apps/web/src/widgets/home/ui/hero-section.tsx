import Image from 'next/image';
import { Button } from '@mantine/core';
import { RiShoppingBag4Fill } from 'react-icons/ri';
import Link from 'next/link';

export default function HeroSection() {

  return (
    <section className="relative min-h-screen overflow-hidden isolate flex items-center">
      {/* Base soft blue wash */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(120%_80%_at_50%_40%,#f5f8ff_0%,#e0eaf9_45%,#eaf1ff_70%,#eef4ff_100%)]" />
      {/* Central purple orb (multi-layer for depth) */}
      <div className="absolute inset-0 -z-20 gpu bg-[radial-gradient(closest-side_at_50%_48%,rgba(120,87,255,0.55),rgba(170,140,255,0.35)_35%,rgba(200,180,255,0.18)_52%,rgba(255,255,255,0)_62%)]" />
      <div className="absolute inset-0 -z-20 gpu bg-[radial-gradient(35%_35%_at_52%_52%,rgba(180,160,255,0.35),rgba(255,255,255,0)_70%)]" />
      {/* Side glows */}
      <div className="absolute -z-10 left-[-10%] top-[18%] w-[52vw] h-[52vw] rounded-full blur-3xl opacity-60 gpu bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.45),rgba(147,197,253,0)_60%)]" />
      <div className="absolute -z-10 right-[-8%] bottom-[18%] w-[54vw] h-[54vw] rounded-full blur-3xl opacity-60 gpu bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.38),rgba(125,211,252,0)_62%)]" />
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.22))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 -z-0 bg-gradient-to-b from-transparent to-white" />

      <div className="relative z-10 container">
        <div className="flex items-start gap-8">
          <div className="basis-full xl:basis-3/4">
            <div className="mt-16">
              <div className="flex items-center">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="inline-block pb-8">
                    <span
                      className="pl-2 pr-3 py-1 text-sm font-semibold text-gray-800 
                   border-l-4 border-purple-500 
                   bg-gradient-to-r from-purple-200 via-purple-50 to-transparent"
                    >
                      Used by some of the worlds largest companies,
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-black-primary max-w-xl">
                      {'Toshstack'}
                    </div>
                    <div className="font-medium text-gray-800">
                      Discover in-depth tech articles, practical guides, and curated digital
                      products — all in one place. From developers to creators, we help you stay
                      ahead with knowledge you can use and tools you can trust.
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-2">
                    <Button
                      href={'/blog'}
                      component={Link}
                      size="md"
                      className="font-bold text-sm"
                      radius="md"
                      color="violet"
                      variant="filled"
                    >
                      Blog now
                    </Button>
                    <Button
                      size="md"
                      leftSection={<RiShoppingBag4Fill size={20} />}
                      classNames={{ section: 'me-1' }}
                      className="font-semibold text-sm"
                      radius="md"
                      color="grape"
                      variant="outline"
                    >
                      Shop now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:block hidden relative">
            <div className="w-[700px] h-[700px] rounded-full overflow-hidden relative">
              <Image
                src="/images/about-us-hello-1.png"
                alt="gift-a"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
