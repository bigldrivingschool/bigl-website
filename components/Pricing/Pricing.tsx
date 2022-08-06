import { CheckIcon, PlusCircleIcon } from "@heroicons/react/outline";

const pricePackages = [
  {
    name: "1 hour lesson",
    price: 70,
    description: "Our most popular option",
    content: [
      "A full 1 hour of driving",
      "Tailored to the driver's individual needs",
      "Includes take-home lesson notes",
    ],
    addVechicle: true,
  },
  {
    name: "6 x 1 hour driving lessons",
    price: 400,
    description: "A great package deal!",
    content: [
      "Tailored to the driver's individual needs",
      "Includes take-home lesson notes",
    ],
    addVechicle: true,
  },
  {
    name: "10 x 1 hour driving lessons",
    price: 650,
    description: "Our best value package deal!",
    content: [
      "Tailored to the driver's individual needs",
      "Includes take-home lesson notes",
    ],
    addVechicle: true,
  },
  {
    name: "1 hour mock test",
    price: 75,
    description: "Drive on real test routes",
    content: [
      "A full 1 hour of driving",
      "Restricted or full licence mock test",
    ],
    addVechicle: true,
  },
];

export const Pricing = () => {
  return (
    <div className=" bg-stone-900 py-12">
      <div className="mb-10 lg:text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-red-600">
          OUR PACKAGES
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
          We offer a variety of services and plans to get you ready for your
          driving exam. Feel free to call us for any custom requirements.
        </p>
      </div>
      <div className="my-4 flex justify-center">
        {pricePackages.map((pricePackage) => (
          <div
            className="ch mb-4 mr-4 max-w-sm overflow-hidden rounded-lg shadow-lg"
            key={pricePackage.name}
          >
            <div className="bg-white px-6 py-8  sm:p-10 sm:pb-6">
              <div className="flex justify-center">
                <span className="inline-flex rounded-full px-4 py-1 text-sm font-semibold uppercase leading-5 tracking-wide">
                  {pricePackage.name}
                </span>
              </div>
              <div className="mt-4 flex justify-center text-6xl font-extrabold leading-none text-red-600">
                ${pricePackage.price}
              </div>
              <div className="mt-4 flex justify-center text-sm font-semibold leading-5 text-gray-600">
                {pricePackage.description}
              </div>
            </div>
            <div className="bg-slate-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
              <ul>
                {pricePackage.content.map((content, i) => (
                  <li className="mt-4 flex items-start" key={i}>
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700 ">
                      {content}
                    </p>
                  </li>
                ))}

                {pricePackage.addVechicle && (
                  <li className="mt-4 flex items-start" key="i">
                    <div className="flex-shrink-0">
                      <PlusCircleIcon className="h-6 w-6 text-orange-500" />
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700 ">
                      Add $5 per hour using driving school vehicle
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
