import { FeedbackArea, FeedbackFormData } from "../../models";
import { TextField } from "../TextField";

const feedbackAreas: { id: FeedbackArea; label: string }[] = [
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

export const FeedbackForm = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(event);
    const data: FeedbackFormData = {
      name: event.target.fullName.value,
      email: event.target.email.value,
      feedbackAreas: ["blindspot"],
    };

    const res = await fetch("/api/feedback", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden border sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <fieldset>
            <legend className="sr-only">Student Feedback</legend>
            <div className="col-span-6 mb-3 sm:col-span-3">
              <TextField name="fullName" label="Full name" id="fullName" />
            </div>
            <div className="col-span-6 mb-3 sm:col-span-3">
              <TextField
                name="email"
                label="Email"
                placeholder="jane@email.com"
                type="email"
                id="email"
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
  );
};
