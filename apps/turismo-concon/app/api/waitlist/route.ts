import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";

const TIPOS = ["visitante", "emprendedor"] as const;
type Tipo = (typeof TIPOS)[number];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const nombre = body.nombre ? String(body.nombre).trim() : null;
  const tipoRaw = String(body.tipo ?? "visitante");
  const tipo: Tipo = (TIPOS as readonly string[]).includes(tipoRaw)
    ? (tipoRaw as Tipo)
    : "visitante";
  const actividad = body.actividad ? String(body.actividad).trim() : null;
  const mensaje = body.mensaje ? String(body.mensaje).trim() : null;

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Ingresa un email válido." },
      { status: 400 },
    );
  }

  const supabase = getServiceClient();

  // Modo fallback (sin Supabase configurado): no rompe la demo en local.
  if (!supabase) {
    console.log("[waitlist] (sin Supabase) nuevo registro:", {
      email,
      nombre,
      tipo,
      actividad,
    });
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase
    .from("waitlist")
    .upsert(
      { email, nombre, tipo, actividad, mensaje },
      { onConflict: "email,tipo", ignoreDuplicates: true },
    );

  if (error) {
    console.error("[waitlist] error Supabase:", error.message);
    return NextResponse.json(
      { error: "No pudimos guardar tu registro. Intenta de nuevo." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}
