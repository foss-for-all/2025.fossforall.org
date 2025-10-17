export interface BoothSpeaker {
  code: string;
  name: string;
  biography: string | null;
  avatar_url: string;
  email: string;
  timezone: string;
  locale: string;
}

export interface Booth {
  code: string;
  title: string;
  speakers: string[];
  abstract: string;
  description: string;
  state: string;
  content_locale: string;
  do_not_record: boolean;
  is_featured: boolean;
  notes: string;
  median_score: number | null;
  mean_score: number | null;
  // Extended with local data
  speakerDetails?: BoothSpeaker[];
}
