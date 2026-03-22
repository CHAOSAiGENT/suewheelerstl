export type SubmissionStatus =
  | "new"
  | "reviewed"
  | "quote_sent"
  | "scheduled"
  | "completed";

export interface Submission {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  address: string | null;
  service_types: string[];
  best_time: string | null;
  timeline: string | null;
  project_description: string;
  referral: string | null;
  photo_urls: string[];
  status: SubmissionStatus;
  admin_notes: string | null;
  client_token: string;
  client_token_expires_at: string;
}

export interface Message {
  id: string;
  created_at: string;
  submission_id: string;
  is_from_admin: boolean;
  body: string;
  sent_by_email: string;
}

export const STATUS_LABELS: Record<SubmissionStatus, string> = {
  new: "New",
  reviewed: "Reviewed",
  quote_sent: "Quote Sent",
  scheduled: "Scheduled",
  completed: "Completed",
};

export const STATUS_COLORS: Record<SubmissionStatus, string> = {
  new: "#11B2E8",
  reviewed: "#A65D37",
  quote_sent: "#6B5E55",
  scheduled: "#2A7A2A",
  completed: "#2A2421",
};
