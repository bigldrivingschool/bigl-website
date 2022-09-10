// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid, { MailDataRequired } from "@sendgrid/mail";
import { FeedbackFormData } from "../../models";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

type Data = {
  data?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body: FeedbackFormData = req.body;

  console.log("body: ", body);

  if (!body.name || !body.email || !body.feedbackAreas.length) {
    return res.status(400).json({ data: "Required fields are missing" });
  }

  const msg: MailDataRequired = {
    from: "testemail@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    mailSettings: {
      sandboxMode: {
        enable: true,
      },
    },
    templateId: "d-b71666d8c05e4225a858ee820ba0abbe",
    dynamicTemplateData: {
      feedback: body.feedbackAreas,
    },
  };

  try {
    const sendGridResp = await sendgrid.send(msg);
    console.log(sendGridResp);
  } catch (error: any) {
    return res.status(error?.statusCode || 500).json({ error: error.message });
  }

  res.status(200).json({ data: `${body.name} ${body.email}` });
}
