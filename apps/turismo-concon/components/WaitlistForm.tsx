"use client";

import { useState } from "react";

const ACTIVIDADES = [
  "SUP (Stand Up Paddle)",
  "Yoga",
  "Tenis",
  "Paddle",
  "Vela",
  "Nado",
  "Otra",
];

type Estado = "idle" | "loading" | "ok" | "error";

export default function WaitlistForm() {
  const [tipo, setTipo] = useState<"visitante" | "emprendedor">("visitante");
  const [estado, setEstado] = useState<Estado>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("loading");
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email"),
      nombre: form.get("nombre"),
      actividad: form.get("actividad"),
      mensaje: form.get("mensaje"),
      tipo,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Algo salió mal.");
      }
      setEstado("ok");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo salió mal.");
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="text-4xl">🎉</div>
        <h3 className="mt-3 text-xl font-bold text-mar-dark">
          ¡Estás en la lista!
        </h3>
        <p className="mt-2 text-slate-600">
          Te escribiremos apenas abramos turismo.concon. Gracias por sumarte a
          la ola. 🌊
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl bg-arena p-1">
        {(["visitante", "emprendedor"] as const).map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setTipo(opt)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
              tipo === opt
                ? "bg-mar text-white shadow"
                : "text-slate-600 hover:text-mar-dark"
            }`}
          >
            {opt === "visitante" ? "Quiero reservar" : "Soy emprendedor"}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Nombre
          </label>
          <input
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-mar focus:ring-2 focus:ring-mar-light/40"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Email <span className="text-atardecer">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-mar focus:ring-2 focus:ring-mar-light/40"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {tipo === "visitante"
              ? "¿Qué actividad te interesa?"
              : "¿Qué actividad ofreces?"}
          </label>
          <select
            name="actividad"
            defaultValue=""
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:border-mar focus:ring-2 focus:ring-mar-light/40"
          >
            <option value="" disabled>
              Elige una opción
            </option>
            {ACTIVIDADES.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {tipo === "emprendedor" && (
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Cuéntanos de tu emprendimiento
            </label>
            <textarea
              name="mensaje"
              rows={3}
              placeholder="Nombre, dónde operas, qué ofreces..."
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-mar focus:ring-2 focus:ring-mar-light/40"
            />
          </div>
        )}
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={estado === "loading"}
        className="mt-6 w-full rounded-xl bg-atardecer px-4 py-3 font-semibold text-white shadow-md transition hover:brightness-95 disabled:opacity-60"
      >
        {estado === "loading" ? "Enviando..." : "Sumarme a la lista de espera"}
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Sin spam. Solo te avisamos cuando lancemos.
      </p>
    </form>
  );
}
