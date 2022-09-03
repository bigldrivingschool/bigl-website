import { Button } from "../Button";
import { Container } from "../Layout/Layout";

/* This example requires Tailwind CSS v2.0+ */
export const ContactCTA = () => {
  return (
    <div className="bg-gray-50">
      <Container className="flex flex-col items-center py-12 lg:py-16">
        <h2 className="mb-11 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="mb-3 block">Ready to book?</span>
          <span className="block max-w-xl text-red-600">
            Call or email us now to get started on your journey to a new driver
            licence!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0">
          <Button>Contact Us Now</Button>
        </div>
      </Container>
    </div>
  );
};
