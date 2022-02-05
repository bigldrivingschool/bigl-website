import {
  KeyIcon,
  AcademicCapIcon,
  GlobeIcon,
  PencilIcon,
  CheckIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

const prices = [
  {
    name: "1 hour lesson",
    price: 375,
    content: [
      "A full 1 hour of driving",
      "Tailored to the driver's individual needs",
      "Includes take-home lesson notes",
      "Add $5 per hour using driving school vehicle",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="bg-grey-600 py-12">
      <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
        <div className="bg-white px-6 py-8  sm:p-10 sm:pb-6">
          <div className="flex justify-center">
            <span className="inline-flex rounded-full px-4 py-1 text-sm font-semibold uppercase leading-5 tracking-wide">
              Basic
            </span>
          </div>
          <div className="mt-4 flex justify-center text-6xl font-extrabold leading-none ">
            $10
          </div>
        </div>
        <div className="bg-white px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
          <ul>
            <li className="mt-4 flex items-start">
              <div className="flex-shrink-0">
                <CheckIcon className="h-6 w-6 text-green-500" />
              </div>
              <p className="ml-3 text-base leading-6 text-gray-700 ">
                $10/month per user
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
