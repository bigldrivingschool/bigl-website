/* This example requires Tailwind CSS v2.0+ */
export const ContactCTA = () => {
  return (
    <div className="bg-gray-50">
      <div className=" mx-auto flex max-w-7xl flex-col items-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="mb-11 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="mb-3 block">Ready to book?</span>
          <span className="block max-w-xl text-red-600">
            Call or email us now to get started on your journey to a new driver
            licence!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium uppercase text-white hover:bg-gray-700"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
