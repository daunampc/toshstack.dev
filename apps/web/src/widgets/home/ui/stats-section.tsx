
import { Badge } from '@mantine/core';

export default function StatsSection() {
  return (
    <div className="w-full bg-gradient-to-r from-violet-200 to-pink-200 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <Badge color="grape" variant="light">
            Our Achievements
          </Badge>
          <div className="text-2xl font-bold text-gray-800">Our Achievements</div>
          <div className="text-gray-700">
            Add the third color if needed and set the direction of the gradient if you are looking
            for a linear-gradients or radial-gradient.
          </div>
        </div>
        <div className=" flex items-center gap-20 mt-10 md:flex-nowrap flex-wrap justify-center">
          <div className="flex flex-col items-center gap-3 w-1/4">
            <div className="text-5xl font-bold text-gray-800 font-poppins">120K+</div>
            <div className="text-lg text-center text-gray-700 font-medium ">Monthly Readers</div>
          </div>

          <div className="flex flex-col items-center gap-3 w-1/4">
            <div className="text-5xl font-bold font-poppins text-gray-800">3.5K+</div>
            <div className="text-lg text-center text-gray-700 font-medium ">
              Tech Articles Published
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 w-1/4">
            <div className="text-5xl font-bold font-poppins text-gray-800">500+</div>
            <div className="text-lg text-center text-gray-700 font-medium ">
              Tools & Products Reviewed
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 w-1/4">
            <div className="text-5xl font-bold font-poppins text-gray-800">96%</div>
            <div className="text-lg text-center text-gray-700 font-medium ">
              Positive User Feedback
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

