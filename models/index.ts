export type FeedbackArea =
  | "mirror"
  | "blindspot"
  | "followDistance"
  | "indicating"
  | "speed"
  | "gapSelection"
  | "laneChange"
  | "motorway"
  | "keepingLeft"
  | "multiLaneTurn";

export type FeedbackFormData = {
  name: string;
  email: string;
  feedbackAreas: FeedbackArea[];
};

// {
//   "first_name": "Josh",
//   "feedback": ["blindspot", "mirror", "followDistance", "indicating", "speed", "gapSelection", "laneChange", "motorway", "keepingLeft","multiLaneTurn"]
//  }
