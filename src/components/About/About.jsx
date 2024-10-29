export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Praan is democratizing access to clean, healthy air
            </h2>
            <p className="mt-6 text-gray-600">
              Praan was founded by Angad Daryani during his sophomore year of
              college at Georgia Tech in 2017. What started with him alone grew
              to over 250 super talented people from Tesla, Apple, SpaceX,
              Microsoft, etc. volunteering their time to help make clean air
              accessible to all. Praan was always a moonshot, one that was even
              too early for Venture Capital. Yet, today Praan is funded by some
              of the most influential investors in the world. This is a story
              from dorm-room to market over 5 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
