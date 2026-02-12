import slugifyLib from 'slugify';

export function slugify(str: string): string {
  return slugifyLib(str, {
    lower: true,
    strict: true,
    remove: /[^a-zA-Z0-9\s-@]/g,
  });
}

export const makeId = (text: string): string => {
  return slugifyLib(text, { lower: true, strict: true });
};
