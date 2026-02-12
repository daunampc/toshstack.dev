export interface Profile {
  profile_id: string;
  avatar_url?: string | null;
  display_name: string;
  // gender: Gender;
  about_me: string | null;
  banner_url?: string | null;
  heading?: string | null;
  description?: string | null;
  // country: Country;
  mature: boolean;
  phone?: string | null;
  address?: string | null;
  social_profile_id?: string | null; // uuid
}
