import { AspectRatio } from '@mantine/core';

import Image from 'next/image';

export default function ReadersChoiceSection() {
  return (
    <section>
      <div className="inline-block">
        <span
          className="pl-2 pr-3 py-1 text-sm font-semibold text-gray-800
                   border-l-4 border-purple-500
                   bg-gradient-to-r from-purple-200 via-purple-50 to-transparent"
        >
          Readers Choice
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 mt-6 xl:gap-8">
        <div className="col-span-1">
          <AspectRatio ratio={16 / 9} className="relative rounded-xl overflow-hidden">
            {/* ảnh nền */}
            <Image
              width={600}
              height={600}
              src={'/images/home-v3.jpg'}
              alt="home-v3"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* overlay tím nhẹ */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 via-purple-400/10 to-transparent" />

            {/* nội dung text trên ảnh */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
              <p className="text-xs font-semibold">Blockchain News • 4 hours ago</p>
              <h3 className="mt-2 text-lg font-bold leading-snug">
                Over 65% of Crypto-Related Tweets and 84% of Conversations on Reddit Were Positive
                in 2023
              </h3>
              <div className="mt-2 flex gap-2 text-xs font-semibold">
                <span>#Ethereum</span>
                <span>#Analytics</span>
              </div>
            </div>
          </AspectRatio>
        </div>

        <div className="col-span-2 mt-8 xl:mt-0">
          <h3 className="text-xl font-semibold">
            Hey folks! We&apos;ve been building quietly — now it&apos;s time to launch.
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-3">
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="font-bold flex flex-col items-center justify-center bg-green-200 text-green-700 w-12 h-12 rounded-full">
                  <span>01</span>
                </div>
                <div className="text-lg font-semibold">Tech Articles & Guides</div>
              </div>
              <ul className="font-medium text-sm text-gray-800 mt-2">
                <li>
                  Stay up to date with practical tech articles, tutorials, and troubleshooting
                  guides.
                </li>
                <li>Written for developers, creators, and curious tech users.</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="font-bold flex flex-col items-center justify-center bg-orange-200 text-orange-700 w-12 h-12 rounded-full">
                  <span>02</span>
                </div>
                <div className="text-lg font-semibold">Curated Tech Products</div>
              </div>
              <ul className="font-medium text-sm text-gray-800 mt-2">
                <li>Discover tools, digital products, and software we actually recommend.</li>
                <li>Carefully selected to help you work faster and smarter.</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="font-bold flex flex-col items-center justify-center bg-purple-200 text-purple-700 w-12 h-12 rounded-full">
                  <span>03</span>
                </div>
                <div className="text-lg font-semibold">Honest Reviews & Comparisons</div>
              </div>
              <ul className="font-medium text-sm text-gray-800 mt-2">
                <li>We test tools in real workflows and share unbiased reviews</li>
                <li>So you can choose the right product with confidence.</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="font-bold flex flex-col items-center justify-center bg-teal-200 text-teal-700 w-12 h-12 rounded-full">
                  <span>04</span>
                </div>
                <div className="text-lg font-semibold">Community & Updates</div>
              </div>
              <ul className="font-medium text-sm text-gray-800 mt-2">
                <li>Follow the latest tech trends, updates, and releases.</li>
                <li>Learn what matters — without the noise.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
