import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          A Smarter Way to Learn
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Clear lessons, focused practice, and real understanding — all in one streamlined learning
          experience.
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold text-sky-600">Smart Prep</span>
            <h3 className="mt-2 text-2xl font-semibold text-gray-900">
              Build Better Software with Practical, Real-World Programming Knowledge
            </h3>
            <ul className="mt-4 text-gray-700 space-y-1 font-normal">
              <li>
                A professional platform dedicated to developers who want more than surface-level
                tutorials. We provide in-depth programming content, hands-on examples, and carefully
                curated resources to help you understand how software is actually built, maintained,
                and scaled in real-world environments.
              </li>
              <li>
                Our focus is not just on how things work, but why they work — empowering you to make
                better technical decisions with confidence.
              </li>
            </ul>
          </div>

          <div className="aspect-video rounded-lg bg-gray-200 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Image
              className="rounded-lg object-cover"
              src={'/images/home-t1.jpg'}
              alt="home-t1.jpg"
              fill
            />
          </div>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="aspect-video rounded-lg bg-gray-200 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Image
              className="rounded-lg object-cover"
              src={'/images/home-t2.jpg'}
              alt="home-t2"
              fill
            />
          </div>

          <div>
            <span className="text-sm font-semibold text-sky-600">Smart Prep</span>
            <h3 className="mt-2 text-2xl font-semibold text-gray-900">
              Expert-Written Technical Content
            </h3>
            <p className="mt-4 text-gray-700 space-y-1 font-normal">
              Our content is written by developers with real production experience. Each article
              focuses on practical problems, common pitfalls, and proven solutions used in modern
              software systems, saving you time and helping you avoid costly mistakes.
            </p>
          </div>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold text-sky-600">Smart Prep</span>
            <h3 className="mt-2 text-2xl font-semibold text-gray-900">
              Hands-On Tutorials with Real Context
            </h3>
            <p className="mt-4 text-gray-700 space-y-1 font-normal">
              Tutorials are designed around real applications, not toy examples. You’ll learn how to
              structure projects, write clean code, and make informed technical decisions that scale
              as your application grows.{' '}
            </p>
          </div>

          <div className="aspect-video rounded-lg bg-gray-200 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Image
              className="rounded-lg object-cover"
              src={'/images/home-t3.png'}
              alt="home-t1.jpg"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
