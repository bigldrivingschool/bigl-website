// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { FeedbackFormData } from "../../models";

type Data = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Get data submitted in request's body.
  const body: FeedbackFormData = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.email || !body.feedbackAreas.length) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Required fields are missing" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.name} ${body.email}` });
}
