import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const LINGUE_LABEL: Record<string, string> = {
  "it-IT": "italiano",
  "en-US": "inglese",
  "fr-FR": "francese",
  "de-DE": "tedesco",
  "es-ES": "spagnolo",
  "ja-JP": "giapponese",
  "zh-CN": "cinese mandarino",
};

export async function POST(req: NextRequest) {
  try {
    const { testo, lingua } = await req.json();
    if (!testo || !lingua) {
      return NextResponse.json({ error: "Missing params" }, { status: 400 });
    }

    if (lingua === "it-IT") {
      return NextResponse.json({ traduzione: testo });
    }

    const linguaLabel = LINGUE_LABEL[lingua] || lingua;

    const response = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: `Traduci il seguente testo in ${linguaLabel}. Restituisci SOLO il testo tradotto, senza introduzioni, note o spiegazioni.\n\n${testo}`,
        },
      ],
    });

    const content = response.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "Unexpected response" }, { status: 500 });
    }

    return NextResponse.json({ traduzione: content.text });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
