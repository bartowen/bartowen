# 🏄 turismo.concon

Marketplace de experiencias recreativas locales de **Concón, Chile**: SUP, yoga,
tenis, paddle, vela y nado, conectando visitantes con emprendedores locales.

**Etapa actual:** Validación — landing + lista de espera.

Stack: **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** ·
**Supabase** (waitlist) · deploy en **Vercel**.

---

## 🚀 Correr en local

```bash
cd apps/turismo-concon
npm install
cp .env.example .env.local   # opcional (ver abajo)
npm run dev
```

Abre http://localhost:3000

> **Sin Supabase configurado**, la landing funciona igual: los registros de la
> lista de espera se imprimen en consola (modo fallback) y el formulario
> muestra el mensaje de éxito. Ideal para probar el diseño antes de conectar la
> base de datos.

## 🗄️ Conectar Supabase (guardar la lista de espera de verdad)

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. En **SQL Editor**, ejecuta el contenido de
   [`supabase/migrations/0001_waitlist.sql`](supabase/migrations/0001_waitlist.sql).
3. En **Project Settings > API** copia:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
4. Pégalas en `.env.local` (usa `.env.example` como base) y reinicia `npm run dev`.

> ⚠️ La `service_role` key es secreta y solo se usa en el servidor
> (`app/api/waitlist/route.ts`). Nunca la expongas en el cliente ni la subas al repo.

## ☁️ Deploy en Vercel

1. Importa el repo en Vercel y define **Root Directory** = `apps/turismo-concon`.
2. Agrega las variables de entorno `NEXT_PUBLIC_SUPABASE_URL` y
   `SUPABASE_SERVICE_ROLE_KEY` en el proyecto de Vercel.
3. Deploy. Vercel detecta Next.js automáticamente.

## 📁 Estructura

```
app/
  layout.tsx            # metadata + html base
  page.tsx              # landing (hero, actividades, cómo funciona, emprendedores, waitlist)
  globals.css           # Tailwind
  api/waitlist/route.ts # endpoint POST que guarda en Supabase (o fallback)
components/
  WaitlistForm.tsx      # formulario (visitante / emprendedor)
lib/
  supabase.ts           # cliente server-side (service role)
supabase/migrations/    # SQL de la tabla waitlist
```

## ✅ Próximos pasos (rumbo al MVP)

- [ ] Conectar Supabase y publicar en Vercel con dominio propio.
- [ ] Medir conversión de la lista de espera (visitantes vs emprendedores).
- [ ] Onboarding de los primeros 5–10 emprendedores locales.
- [ ] Catálogo de actividades + perfiles de emprendedor.
- [ ] Sistema de reservas con calendario y pagos.
