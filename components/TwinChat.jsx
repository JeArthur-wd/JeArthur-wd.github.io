"use client";

import { useEffect, useState } from "react";
import { AssistantRuntimeProvider, useAui, Suggestions, useLocalRuntime } from "@assistant-ui/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Thread } from "@/components/assistant-ui/thread";
import { MessageCircle, X } from "lucide-react";

const SUGGESTIONS = [
  { title: "My background", label: "Who is Arthur?", prompt: "What's your background?" },
  { title: "Current work", label: "What are you working on now?", prompt: "What are you working on now?" },
  { title: "Tech stack", label: "Which technologies do you use?", prompt: "Which technologies do you use?" },
  { title: "Get in touch", label: "How can I contact you?", prompt: "How can I contact you?" },
];

// Cloudflare Worker URL in production; local `wrangler dev` otherwise.
const CHAT_API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:8787";

const toText = (m) =>
  m.content
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");

// Talks to our own /api/chat route (OpenRouter runs server-side, the key never reaches the browser).
const adapter = {
  async run({ messages, abortSignal }) {
    const res = await fetch(CHAT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .map((m) => ({ role: m.role, content: toText(m) })),
      }),
      signal: abortSignal,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { content: [{ type: "text", text: err.error || "Something went wrong. Please try again." }] };
    }
    return { content: [{ type: "text", text: await res.text() }] };
  },
};

function Chat() {
  const runtime = useLocalRuntime(adapter);
  const aui = useAui({ suggestions: Suggestions(SUGGESTIONS) });
  return (
    <AssistantRuntimeProvider runtime={runtime} aui={aui}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}

export default function TwinChat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="aui-scope">
      <TooltipProvider>
        <div
          className={`fixed bottom-24 right-4 z-[110] h-[min(640px,calc(100svh-7.5rem))] w-[min(420px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-2xl shadow-black/60 transition-all duration-200 sm:right-6 ${
            open ? "translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-3 opacity-0"
          }`}
          role="dialog"
          aria-label="Arthur's digital twin"
          aria-hidden={!open}
        >
          {mounted && <Chat />}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close chat" : "Chat with Arthur's digital twin"}
          aria-expanded={open}
          className="fixed bottom-4 right-4 z-[110] flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.03] sm:bottom-6 sm:right-6"
        >
          {open ? <X className="size-4" /> : <MessageCircle className="size-4" />}
          {open ? "Close" : "Ask my AI twin"}
        </button>
      </TooltipProvider>
    </div>
  );
}
