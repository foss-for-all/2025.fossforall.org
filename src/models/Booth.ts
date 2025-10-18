export interface BoothSpeaker {
  code: string;
  name: string;
  biography: string | null;
  avatar_url: string;
  email: string;
  timezone: string;
  locale: string;
}

export interface BoothAnswer {
  id: number;
  question: {
    id: number;
    question: Record<string, string>;
    required: boolean;
    target: string;
    options: any[];
  };
  answer: string;
  answer_file: string | null;
  submission: string;
  person: string | null;
  options: any[];
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
  answers?: BoothAnswer[];
  // Extended with local data
  speakerDetails?: BoothSpeaker[];
  logo?: string | null;
}
