import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para uso EXCLUSIVO en el servidor (usa la service role key).
 * Devuelve null si las variables de entorno no están configuradas, para que la
 * landing siga funcionando en local sin Supabase (modo fallback).
 */
export function getServiceClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
