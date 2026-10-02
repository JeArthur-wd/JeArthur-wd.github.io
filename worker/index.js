import { MODELS, SYSTEM_PROMPT } from "../lib/twin.js";

const MAX_MESSAGES = 20;
const MAX_CHARS = 1000;

function cors(origin, env) {
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim());
  return {
    "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0] || "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const headers = cors(origin, env);
    const json = (obj, status = 200) =>
      new Response(JSON.stringify(obj), { status, headers: { ...headers, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (req.method !== "POST") return json({ error: "Not found." }, 404);
    if (origin && headers["Access-Control-Allow-Origin"] !== origin) return json({ error: "Origin not allowed." }, 403);
    if (!env.OPENROUTER_API_KEY) return json({ error: "Chat is not configured." }, 500);

    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: "Invalid request." }, 400);
    }

    const messages = (Array.isArray(body?.messages) ? body.messages : [])
      .filter((m) => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
      .slice(-MAX_MESSAGES)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

    if (!messages.length || messages[messages.length - 1].role !== "user") {
      return json({ error: "No question provided." }, 400);
    }

    // Try each model in order; free models are often rate-limited, so fall back on any failure.
    const models = env.OPENROUTER_MODEL ? [env.OPENROUTER_MODEL] : MODELS;
    let text = "";
    for (const model of models) {
      const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "X-Title": "Arthur Jemba Digital Twin",
        },
        body: JSON.stringify({
          model,
          stream: false,
          max_tokens: 1000,
          temperature: 0.4,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        }),
        signal: AbortSignal.timeout(25000),
      }).catch(() => null);

      if (!upstream || !upstream.ok) {
        if (upstream) console.error("OpenRouter error", model, upstream.status);
        continue;
      }
      const data = await upstream.json().catch(() => null);
      text = data?.choices?.[0]?.message?.content?.trim() || "";
      if (text) break;
    }

    if (!text) return json({ error: "The twin is unavailable right now. Please try again." }, 502);

    return new Response(text, { headers: { ...headers, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
  },
};
