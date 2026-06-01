// These unions are derived from the single source of truth in db-contract.ts,
// which the schema-drift test checks against the live database CHECK constraints.
// To change the vocabulary, edit db-contract.ts (and migrate the DB in the same commit).
import {
  STATUS_VALUES,
  BID_STATUS_VALUES,
  LOST_REASON_VALUES,
} from "./db-contract";

export type SubmissionStatus = (typeof STATUS_VALUES)[number];

export type BidStatus = (typeof BID_STATUS_VALUES)[number];

export type LostReason = (typeof LOST_REASON_VALUES)[number];

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
  // Bid / estimate
  bid_amount: number | null;
  bid_notes: string | null;
  bid_file_url: string | null;
  bid_status: BidStatus;
  bid_sent_at: string | null;
  bid_accepted_at: string | null;
  bid_start_date: string | null;
  // Crew
  crew_member_ids: string[];
  // Pipeline
  lost_reason: LostReason | null;
  lost_note: string | null;
  after_photos_uploaded: boolean;
  final_payment_confirmed: boolean;
  archived_at: string | null;
  reply_token: string;
}

export interface Message {
  id: string;
  created_at: string;
  submission_id: string;
  is_from_admin: boolean;
  is_bid: boolean;
  body: string;
  sent_by_email: string;
}

export interface CrewMember {
  id: string;
  name: string;
  active: boolean;
  created_at: string;
}

export interface BidBlock {
  id: string;
  submission_id: string;
  sort_order: number;
  source_key: string;
  title: string;
  body: string;
  photo_paths: string[];
  created_at: string;
}

export const STATUS_LABELS: Record<SubmissionStatus, string> = {
  to_bid: "To Bid",
  contacted: "Contacted",
  bid_sent: "Bid Sent",
  on_deck: "On Deck",
  active: "Active",
  finishing: "Finishing",
  fully_complete: "Fully Complete",
  lost: "Lost",
};

export const STATUS_COLORS: Record<SubmissionStatus, string> = {
  to_bid: "#11B2E8",
  contacted: "#3B82B0",
  bid_sent: "#A65D37",
  on_deck: "#7B5EA7",
  active: "#C5880A",
  finishing: "#2A7A2A",
  fully_complete: "#2A2421",
  lost: "#9e9087",
};

export interface SubmissionNote {
  id: string;
  submission_id: string;
  body: string;
  created_at: string;
}

export const KANBAN_COLUMNS: SubmissionStatus[] = [
  "to_bid",
  "contacted",
  "bid_sent",
  "on_deck",
  "active",
  "finishing",
  "fully_complete",
  "lost",
];

export interface SubmissionNote {
  id: string;
  submission_id: string;
  body: string;
  created_at: string;
}
