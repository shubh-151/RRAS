import React from "react";

const About = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-20">
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                Join Us →
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt="Gabrielle Fernandez"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              Gabrielle Fernandez
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Marketing Lead
            </p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg"
              alt="Victória Silva"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              Victória Silva
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Back-end developer
            </p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Gabrielle Fernandez"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              Gabrielle Fernandez
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Sales
            </p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Sadie Lewis"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              Sadie Lewis
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Sales
            </p>
          </div>          
        </div>
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-4 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team →</p>
            <p className="text-3xl font-bold md:text-4xl">
              We&#x27;re just getting started
            </p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
