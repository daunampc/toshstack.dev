import { LuDatabaseZap } from 'react-icons/lu';
import { MdOutlineSecurity } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
export default function FeatureSection() {
  return (

    <>
      <div className="space-y-1.5 text-center">
        <h2 className="text-3xl font-semibold">
          Everything You Need to Learn & Build Better Software
        </h2>
        <span className="text-sm font-medium text-gray-700">
          In-depth tutorials, curated tools, and a secure modern platform — built by developers, for
          developers.
        </span>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between gap-20 px-12 mt-10">
        <div className="flex lg:flex-row flex-col items-center gap-6 lg:w-1/3 w-full text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-pink-600 rounded-full flex-shrink-0">
            <RiTeamFill size={35} className="text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold">Expert-Written Tech Content</div>
            <span className="text-gray-600 font-medium text-sm">
              In-depth articles, tutorials, and troubleshooting guides written by developers and
              tech professionals.
            </span>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-6 lg:w-1/3 w-full text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-teal-600 rounded-full flex-shrink-0">
            <LuDatabaseZap size={35} className="text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold">Curated Tools & Products</div>
            <span className="text-gray-600 font-medium text-sm">
              Carefully selected software and digital products to help you build, learn, and work
              more efficiently.
            </span>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-6 lg:w-1/3 w-full text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-orange-600 rounded-full flex-shrink-0">
            <MdOutlineSecurity size={35} className="text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold">Secure & Modern Platform</div>
            <span className="text-gray-600 font-medium text-sm">
              Built with modern technologies, fast performance, and a focus on security and user
              experience.
            </span>
          </div>
        </div>
      </div>

    </>

  )
}

