import type { NextPage } from "next";
import Head from "next/head";

import { Navigation } from "../../components/Navigation/Navigation";
import { Container } from "../../components/Layout/Layout";
import { TextField } from "../../components/TextField";

const feedbackAreas = [
  { id: "mirror", label: "Mirror Checks" },
  { id: "blindspot", label: "Blindspot Checks" },
  { id: "followDistance", label: "Following Distance" },
  { id: "indicating", label: "Indicating Rules" },
  { id: "speed", label: "Speed Control" },
  { id: "gapSelection", label: "Gap Selection" },
  { id: "laneChange", label: "Lane Change" },
  { id: "motorway", label: "Motorway Driving" },
  { id: "keepingLeft", label: "Keeping Left" },
  { id: "multiLaneTurn", label: "Turning into a multi lane road" },
];

const App: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>
          Big L Driving School | Driving Lessons North Shore, Auckland
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container className="py-6">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
          Student Feedback
        </h1>

        <form action="#" method="POST">
          <div className="overflow-hidden border sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <fieldset>
                <legend className="sr-only">Student Feedback</legend>
                <div className="col-span-6 mb-3 sm:col-span-3">
                  <TextField value="" name="fullName" label="Full name" />
                </div>
                <div className="col-span-6 mb-3 sm:col-span-3">
                  <TextField
                    value=""
                    name="email"
                    label="Email"
                    placeholder="jane@email.com"
                    type="email"
                  />
                </div>

                <div
                  className="mt-6 text-base font-medium text-gray-900"
                  aria-hidden="true"
                >
                  Areas to improve
                </div>
                <div className="mt-4 space-y-4">
                  {feedbackAreas.map((area, i) => (
                    <div className="flex items-start" key={i}>
                      <div className="flex h-5 items-center">
                        <input
                          id={area.id}
                          name={area.id}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor={area.id}
                          className="font-medium text-gray-700"
                        >
                          {area.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default App;
