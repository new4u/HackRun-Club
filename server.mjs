import { createServer } from 'node:http';
import { URL } from 'node:url';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

const json = (res, status, body) => {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  });
  res.end(payload);
};

const parseBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf-8');
  if (!raw) return {};
  return JSON.parse(raw);
};

const ensureTable = async () => {
  if (!process.env.DATABASE_URL) return;
  await pool.query(`
    create table if not exists survey_submissions (
      id bigserial primary key,
      purpose text,
      time_commit text,
      code_level text,
      ai_level text,
      wechat_id text,
      created_at timestamptz default now()
    )
  `);
};

await ensureTable();

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    });
    res.end();
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/survey') {
    try {
      const body = await parseBody(req);
      if (!process.env.DATABASE_URL) {
        json(res, 500, { ok: false, error: 'DATABASE_URL is not set' });
        return;
      }
      await pool.query(
        `insert into survey_submissions (purpose, time_commit, code_level, ai_level, wechat_id)
         values ($1, $2, $3, $4, $5)`,
        [
          body.purpose || null,
          body.timeCommit || null,
          body.codeLevel || null,
          body.aiLevel || null,
          body.wechatId || null
        ]
      );
      json(res, 200, { ok: true });
    } catch (err) {
      json(res, 500, { ok: false });
    }
    return;
  }

  json(res, 200, { ok: true });
});

const port = Number(process.env.PORT || 3000);
server.listen(port);
