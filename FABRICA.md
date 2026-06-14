# 🏭 Fábrica de Ideas — desarrollo 100% con IA

Repositorio para idear, validar y construir productos digitales asistido por IA.
Cada idea vive como un **subproyecto** independiente, con su propio plan, su estado
y (cuando corresponde) su propia app desplegable.

> Nota: `README.md` en la raíz es el perfil público de GitHub de Felipe y **no se toca**.
> La fábrica vive en `FABRICA.md`, `apps/` e `ideas/`.

## 🔁 El proceso (de idea a producto)

Cada idea recorre estas etapas. La IA acelera todas, pero las decisiones son tuyas.

| Etapa | Qué hacemos | Entregable |
|-------|-------------|------------|
| 1. **Concepto** | Problema, público, propuesta de valor | Doc `concepto.md` |
| 2. **Validación** | Landing + lista de espera, medir interés real | Página publicada + señups |
| 3. **MVP** | Producto mínimo usable con clientes reales | App en producción |
| 4. **Tracción** | Iterar con datos, primeros ingresos | Métricas y roadmap |
| 5. **Escala** | Automatizar, crecer | — |

## 📦 Ideas en la fábrica

| Idea | Carpeta | Estado | Etapa |
|------|---------|--------|-------|
| 🏄 **turismo.concon** — marketplace de experiencias locales | [`apps/turismo-concon`](apps/turismo-concon) | 🟢 Activa | 2 · Validación (landing + waitlist) |
| 🎧 **Podcast Pepe y Sofía** — cuentacuentos personalizados para niñas/os | [`ideas/podcast-pepe-sofia`](ideas/podcast-pepe-sofia) | 🟡 Concepto | 1 · Concepto |

## 🧰 Stack base de la fábrica

- **Web/App**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Backend / datos**: Supabase (Postgres + Auth)
- **Deploy**: Vercel
- **IA / automatización**: agentes para contenido, generación de audio/imágenes y flujos (n8n)

## 🚀 Cómo seguir

1. Entra al subproyecto que quieras avanzar.
2. Lee su `README.md` (cómo correrlo y desplegarlo) y su `concepto.md`.
3. Itera. Cuando una idea valida, sube de etapa en la tabla de arriba.
