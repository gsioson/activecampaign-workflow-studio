const SOURCES = new Set(['canva', 'jotform', 'shopify', 'gmail', 'wix', 'calendly', 'clay', 'forms', 'other']);
const ACTIONS = new Set(['create', 'upsert', 'tag', 'subscribe', 'note', 'deal', 'campaign', 'automation', 'series', 'import', 'choose']);

// Logs are private to the Vercel project. This endpoint never reads or exposes them.
module.exports = function promptLog(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }
  if (request.headers['sec-fetch-site'] === 'cross-site') {
    return response.status(403).json({ error: 'Origin not allowed' });
  }
  if (request.headers.origin) {
    try {
      if (new URL(request.headers.origin).host !== request.headers.host) {
        return response.status(403).json({ error: 'Origin not allowed' });
      }
    } catch {
      return response.status(403).json({ error: 'Origin not allowed' });
    }
  }
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers['content-type'] || '')) {
    return response.status(415).json({ error: 'Expected application/json' });
  }
  let body;
  try {
    body = request.body;
    if (typeof body === 'string') body = JSON.parse(body);
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid body');
    if (Buffer.byteLength(JSON.stringify(body), 'utf8') > 32768) {
      return response.status(413).json({ error: 'Entry too large' });
    }
  } catch {
    return response.status(400).json({ error: 'Invalid JSON' });
  }
  if (typeof body.prompt !== 'string' || !body.prompt.trim() || body.prompt.length > 4000 ||
      typeof body.id !== 'string' || !/^[a-zA-Z0-9_-]{8,80}$/.test(body.id) ||
      !SOURCES.has(body.source) || !ACTIONS.has(body.action) ||
      typeof body.submittedAt !== 'string' || !Number.isFinite(Date.parse(body.submittedAt))) {
    return response.status(400).json({ error: 'Invalid prompt entry' });
  }
  const entry = {
    event: 'prompt_submitted',
    schemaVersion: 1,
    id: body.id,
    receivedAt: new Date().toISOString(),
    submittedAt: new Date(body.submittedAt).toISOString(),
    prompt: body.prompt.trim(),
    source: body.source,
    action: body.action
  };
  // One structured line keeps newlines in submitted text from forging log events.
  // Client IDs allow consumers to deduplicate a retried delivery.
  console.info(JSON.stringify(entry));
  return response.status(201).json({ recorded: true, id: entry.id });
};
