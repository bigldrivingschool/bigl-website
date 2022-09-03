import {
  KeyIcon,
  AcademicCapIcon,
  GlobeIcon,
  PencilIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import { Container } from "../Layout/Layout";

const features = [
  {
    name: "LEARNERS LICENCE",
    description:
      "Big L Driving School can help you prepare for the theory test on the NZ Road Codes with the ability to direct you to any available resources.",
    icon: ClipboardCheckIcon,
  },
  {
    name: "RESTRICTED LICENCE",
    description:
      "We can to help you achieve your goal of getting your Restricted Licence. We have an added advantage of in-depth knowledge of Driver Testing and the Restricted Test routes in the area.",
    icon: KeyIcon,
  },
  {
    name: "FULL LICENCE",
    description:
      "Big L Driving School can help you prepare for your Full Licence Test which involves driving into speed zones up to 70 km/h involving various manoeuvres. We can help you in identifying and responding to driving hazards as you progress through the test.",
    icon: AcademicCapIcon,
  },
  {
    name: "OVERSEAS CONVERSION",
    description:
      "We can assist you with your licence conversion by offering our services in understanding the New Zealand Road Codes and passing the Theory Test followed by Full Driving Licence test.",
    icon: GlobeIcon,
  },
  {
    name: "MOCK TEST",
    description:
      "We can to help you achieve your goal of getting your Restricted Licence. We have an added advantage of in-depth knowledge of Driver Testing and the Restricted Test routes in the area.",
    icon: PencilIcon,
  },
];

export const Services = () => {
  return (
    <Container className="bg-white py-12">
      <div className="lg:text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-red-600">
          Our Services
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          Learn to drive with safe passing skills
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
};
