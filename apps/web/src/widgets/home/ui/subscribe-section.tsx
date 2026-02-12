import Image from 'next/image';

export default function SubscribeSection() {
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="flex lg:flex-row flex-col items-center max-w-screen-xl mx-auto lg:p-0 p-12">
        <div className="w-1/2 lg:block hidden">
          <Image
            src={'/images/about-us-our-team.png'}
            alt="subscribe-image-a"
            className="h-[550px] object-contain"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col w-full">
          <div className="space-y-2">
            <Image
              src={'/images/logo-a.png'}
              alt="logo-toshstack"
              width={400}
              height={400}
              className="w-52 h-20"
            />
            <div className="space-y-1">
              <div className="text-2xl font-bold">Subscribe to our Newsletter</div>
              <div className="font-medium text-gray-800">
                Former FTX CEO Sam Bankman-Fried and Debtors Reach Settlement in Embed Proceeding
              </div>
            </div>
            <div className="text-sm text-gray-700 font-medium">
              From smarter code assistants to automated testing and deployment
            </div>
          </div>
          <>
          </>
        </div>
      </div>
    </div>
  );
}
