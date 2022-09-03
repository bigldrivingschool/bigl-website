import { Button } from "../Button";
import { FacebookIcon, InstagramIcon } from "../Icons";
import { Container } from "../Layout/Layout";

// https://tailwindui.com/page-examples/landing-page-01

export const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-200 bg-gray-50">
        <Container className="py-12 lg:flex lg:items-center lg:justify-between lg:py-16">
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              About Us
            </h4>
            <p className="max-w-xl text-base text-gray-500">
              We provide a range of services, from full and restricted driving
              lessons to mock tests and overseas conversion. The instructor,
              Pravin Kalyan (PK) is NZTA qualified and holds dual qualification
              of Driving Instructor and Driver Testing Officer.
            </p>
          </div>
          <div className="mt-8 flex flex-col lg:mt-0 lg:flex-shrink-0">
            <div className="mb-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Contact
              </h4>
              <p className="text-base text-gray-500">Big L Driving School</p>
              <p className="text-base text-gray-500">Silverdale</p>
              <p className="text-base text-gray-500">Auckland</p>
            </div>

            <Button>Contact Us</Button>
            <div className="mt-8 flex">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <FacebookIcon />
              </a>
              <a href="#" className="ml-6 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className=" bg-stone-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <span className="text-white">
            Copyright (c) {new Date().getFullYear()}, Big L Driving School
          </span>
        </div>
      </div>
    </>
  );
};
