export const SITE = {
  name: 'brazilianwax.ing',
  title: 'brazilianwax.ing • Premium Domain for Sale | Brazilian Waxing',
  description:
    'Own brazilianwax.ing — the clean, modern domain with powerful SEO built directly into the name for professional Brazilian waxing. Short, memorable, perfectly positioned.',
  url: 'https://brazilianwax.ing',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
  googleSiteVerification: '4PQjqbSuTetbyhjS3lmsqBZsWz6mjTnMSQBsfLusJ8o',
} as const;

/** Canonical homepage URL — always apex, HTTPS, trailing slash. */
export const CANONICAL_HOME = `${SITE.url}/`;

/** Build a canonical absolute URL for a path on the apex domain. */
export function canonicalUrl(pathname: string): string {
  if (pathname === '/' || pathname === '') {
    return CANONICAL_HOME;
  }

  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return new URL(normalizedPath, CANONICAL_HOME).href;
}

export const IMAGE_URL = `${SITE.url}/image.svg`;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry - brazilianwax.ing')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring brazilianwax.ing. Please provide details and next steps.\n\nBest regards,')}`;
