"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "../actions";

const initialState = { ok: false, error: undefined as string | undefined };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.ok) router.push("/admin");
  }, [state.ok, router]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black text-white mb-1">
            <span className="text-[#E87C3E]">▲</span> EAAM
          </div>
          <p className="text-slate-500 text-sm mt-2">Panel de administración</p>
        </div>

        <form action={formAction} className="space-y-4">
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#E87C3E] transition-colors"
            autoFocus
          />
          {state.error && (
            <p className="text-red-400 text-sm">{state.error}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#E87C3E] text-white py-3 rounded-lg font-bold text-sm disabled:opacity-50 hover:bg-[#d16c34] transition-colors"
          >
            {pending ? "Verificando..." : "Entrar"}
          </button>
        </form>

        <p className="text-center text-slate-600 text-xs mt-8">
          Configurá <code className="text-slate-500">ADMIN_TOKEN</code> en{" "}
          <code className="text-slate-500">.env.local</code>
        </p>
      </div>
    </div>
  );
}
