type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Best-effort, in-memory rate limiting. This is per server instance, not
// distributed — sufficient to blunt casual abuse of the contact form on a
// low-traffic marketing site, not a substitute for a real rate-limiting
// service if traffic grows significantly.
export function checkRateLimit(
  key: string,
  { limit = 5, windowMs = 60 * 60 * 1000 } = {},
): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (bucket.count >= limit) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { allowed: true };
}

// Periodically drop expired buckets so the map doesn't grow unbounded on a
// long-lived server instance.
setInterval(
  () => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  },
  10 * 60 * 1000,
).unref?.();
