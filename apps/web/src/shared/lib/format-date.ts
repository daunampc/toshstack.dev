import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
/**
 * Returns a human-friendly relative time string (e.g. "5 minutes ago")
 * for a given timestamp.
 *
 * Accepts multiple input types:
 * - Date: a JavaScript Date instance
 * - string: any string that `new Date(value)` can parse (ISO recommended)
 * - number: a Unix timestamp in milliseconds (Date.now() style)
 *
 * How it works:
 * - Converts the input into a millisecond timestamp.
 * - Computes the difference between now and the input time.
 * - Maps the difference into the largest appropriate unit:
 *   seconds, minutes, hours, days, months (~30 days), years (~365 days).
 *
 * Important notes:
 * - The month/year calculations are approximations (30 days/month, 365 days/year).
 *   This is usually fine for "time ago" UI, but it's not calendar-accurate.
 * - If the input time is in the future (diff < 0), it returns "just now".
 * - This function does not handle singular/plural grammar ("1 seconds ago").
 *   If you need proper grammar, add a pluralization helper.
 *
 * @param createdAt The time to compare against the current time.
 * @returns A string like "12 seconds ago", "3 days ago", "2 years ago", or "just now".
 *
 * @example
 * timeAgo(Date.now() - 10_000) // "10 seconds ago"
 * timeAgo("2025-03-17T00:00:00.000Z") // e.g. "x months ago"
 */
export const timeAgo = (createdAt: Date | string | number): string => {
  const now = Date.now();
  const createdTime = new Date(createdAt).getTime();
  const diffMs = now - createdTime;

  if (diffMs < 0) return 'just now';

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 30) return `${days} days ago`;
  if (months < 12) return `${months} months ago`;
  return `${years} years ago`;
};

/**
 * Formats a JavaScript Date into "02 Jan 2025" (dd MMM yyyy).
 *
 * Timezone behavior:
 * - Default uses UTC to keep the output stable across environments (no day shifting).
 * - If you want to format in Vietnam time, pass "Asia/Ho_Chi_Minh".
 *
 * @param date     The Date instance to format.
 * @param timeZone IANA timezone name. Defaults to "UTC".
 * @returns        A string like "02 Jan 2025".
 */
export function formatDateToDdMonYyyy(date: Date, timeZone: string = 'UTC'): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error('Invalid Date');
  }

  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
    .format(date)
    .replace(/,/g, '');
}

/**
 * Formats an ISO-8601 timestamp (e.g. "2025-01-02T08:30:14.920Z")
 * into "02 Jan 2025" (dd MMM yyyy).
 *
 * Timezone behavior:
 * - Default is UTC because the input ends with "Z" (UTC) and this avoids date shifting.
 * - If you want to display by Vietnam time, pass `timeZone = "Asia/Ho_Chi_Minh"`.
 *
 * @param iso      ISO timestamp string (recommended to include timezone, e.g. ending with "Z").
 * @param timeZone IANA timezone name. Defaults to "UTC".
 * @returns        A formatted string like "02 Jan 2025".
 */
export function formatIsoToDdMonYyyy(iso: string, timeZone: string = 'UTC'): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid ISO date: "${iso}"`);
  }

  // en-GB typically produces "02 Jan 2025" for these options.
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
    .format(d)
    .replace(/,/g, '');
}

export function convertDateToIsoString(date: string) {
  const iso = dayjs(date, 'YYYY-MM-DD HH:mm:ss').utc().toISOString();
  return iso;
}
