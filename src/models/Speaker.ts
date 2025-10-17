export interface Speaker {
  code: string;
  name: string;
  biography: string;
  submissions: string[];
  avatar_url: string;
  answers: string[];
  email: string;
  timezone: string;
  locale: string;
  has_arrived: boolean;
  organization?: string;
}
