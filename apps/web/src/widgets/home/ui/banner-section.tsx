import Image from "next/image";
import { LuDot } from "react-icons/lu";

export default function BannerSection() {
  return (
    <section className="relative">
      <Image width={3600} height={3600} src={'/images/home-banner.jpg'} alt="home-banner" className="object-cover w-full h-[650px] rounded-2xl" />
      <div className="
      max-w-2xl
      p-6
      absolute
      bottom-0 left-0
      bg-white
      rounded-tr-[90px]
      space-y-3
      ">
        <div className="absolute -top-16 bg-white left-0 p-6 rounded-r-[40px]">
          <div className="inline-block">
            <span
              className="pl-2 pr-3 py-1 text-sm font-semibold text-gray-800
                   border-l-4 border-purple-500
                   bg-gradient-to-r from-purple-200 via-purple-50 to-transparent">
              BEST OF THE WEEK
            </span>
          </div>
        </div>
        <div className="relative">

          <div className="flex items-center">
            <div className="text-xs font-semibold text-blue-500">Blockchain News</div>
            <LuDot />
            <div className="text-xs font-semibold text-gray-500">4 hours ago</div>
          </div>
          <div className="text-3xl  font-semibold text-black-primary">
            Former FTX CEO Sam Bankman-Fried and Debtors Reach Settlement in Embed Proceeding
          </div>
        </div>
      </div>
    </section>
  )
}
