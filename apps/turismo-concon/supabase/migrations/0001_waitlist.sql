-- turismo.concon — tabla de lista de espera (waitlist)
-- Ejecútalo en Supabase: Dashboard > SQL Editor, o vía `supabase db push`.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  nombre text,
  tipo text not null default 'visitante'
    check (tipo in ('visitante', 'emprendedor')),
  actividad text,
  mensaje text,
  created_at timestamptz not null default now()
);

-- Evita registros duplicados del mismo email para el mismo tipo.
create unique index if not exists waitlist_email_tipo_idx
  on public.waitlist (email, tipo);

-- RLS activado: solo el backend (service role) puede leer/escribir.
-- El service role omite RLS, así que no hace falta ninguna policy pública.
alter table public.waitlist enable row level security;
