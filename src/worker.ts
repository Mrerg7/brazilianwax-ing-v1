const CANONICAL_ORIGIN = 'https://brazilianwax.ing';
const APEX_HOST = 'brazilianwax.ing';

interface Env {
  ASSETS: Fetcher;
}

function normalizePathname(pathname: string): string {
  if (pathname === '/index.html' || pathname === '/index.htm') {
    return '/';
  }
  if (pathname.endsWith('/index.html') || pathname.endsWith('/index.htm')) {
    return pathname.slice(0, pathname.lastIndexOf('/index.')) + '/';
  }
  return pathname;
}

function redirectToCanonical(url: URL, status = 301): Response {
  const normalizedPath = normalizePathname(url.pathname);
  const destination = new URL(
    normalizedPath + url.search + url.hash,
    CANONICAL_ORIGIN,
  );
  return Response.redirect(destination.href, status);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === `www.${APEX_HOST}`) {
      return redirectToCanonical(url);
    }

    if (url.protocol === 'http:') {
      return redirectToCanonical(url);
    }

    if (url.pathname.endsWith('/index.html') || url.pathname.endsWith('/index.htm')) {
      const normalizedPath = normalizePathname(url.pathname);
      const destination = new URL(
        normalizedPath + url.search + url.hash,
        CANONICAL_ORIGIN,
      );
      return Response.redirect(destination.href, 301);
    }

    if (
      url.hostname === APEX_HOST &&
      url.pathname === '/' &&
      !request.url.endsWith('/') &&
      !url.search &&
      !url.hash
    ) {
      return Response.redirect(`${CANONICAL_ORIGIN}/`, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
