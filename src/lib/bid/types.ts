export interface CopyblockItem {
  key: string;
  title: string;
  body: string;
}

export interface CopyblockCategory {
  key: string;
  label: string;
  blocks: CopyblockItem[];
}

export type CopyblockLibrary = CopyblockCategory[];

// A block instance in the live document (client-side before DB persist)
export interface BidBlockDraft {
  id: string; // client-generated uuid
  source_key: string;
  title: string;
  body: string;
  photo_paths: string[];
  sort_order: number;
}
