"use client";

import { useState } from "react";
import { formatPhone } from "@/lib/format";

type RsvpRecord = {
  _id?: string;
  name: string;
  phone: string;
  guestsCount: number;
  guestNames?: string;
  dietaryRestriction?: string;
  message?: string;
  createdAt: string;
};

export default function AdminPresencasPage() {
  const [password, setPassword] = useState("");
  const [records, setRecords] = useState<RsvpRecord[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [filter, setFilter] = useState("");

  async function loadRecords() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar presenças.");
      }

      setRecords(data);
      setAuthenticated(true);
      setPassword("");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erro inesperado.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  const filteredRecords = records.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#f8f5f0] px-6 py-16 text-[#3c342f]">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-center text-3xl font-serif">Área administrativa</h1>
          <p className="mt-4 text-center text-sm text-[#6b625c]">
            Informe a senha para visualizar a lista de presença.
          </p>

          <div className="mt-6 space-y-4">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-[#ddd] px-4 py-3 outline-none"
            />

            <button
              onClick={loadRecords}
              disabled={loading}
              className="w-full rounded-full bg-[#8c6f5a] px-6 py-3 text-white disabled:opacity-60"
            >
              {loading ? "Entrando..." : "Acessar"}
            </button>

            {error && <p className="text-center text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-16 text-[#3c342f]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-serif">Lista de presença</h1>
            <p className="mt-2 text-[#6b625c]">
              Total de confirmações: {records.length}
            </p>
          </div>

          <div className="w-full md:max-w-sm">
            <input
              type="text"
              placeholder="Filtrar por nome"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full rounded-2xl border border-[#ddd] bg-white px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-3xl bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b bg-[#f5efe8] text-[#5f5650]">
              <tr>
                <th className="px-4 py-4">Nome</th>
                <th className="px-4 py-4">Telefone</th>
                <th className="px-4 py-4">Acompanhantes</th>
                <th className="px-4 py-4">Nomes acompanhantes</th>
                <th className="px-4 py-4">Restrição alimentar</th>
                <th className="px-4 py-4">Mensagem</th>
                <th className="px-4 py-4">Enviado em</th>
              </tr>
            </thead>

            <tbody>
              {filteredRecords.map((item) => (
                <tr key={item._id || item.createdAt} className="border-b last:border-b-0">
                  <td className="px-4 py-4 font-medium">{item.name}</td>
                  <td className="px-4 py-4">{formatPhone(item.phone)}</td>
                  <td className="px-4 py-4">{item.guestsCount}</td>
                  <td className="px-4 py-4">{item.guestNames || "-"}</td>
                  <td className="px-4 py-4">{item.dietaryRestriction || "-"}</td>
                  <td className="px-4 py-4">{item.message || "-"}</td>
                  <td className="px-4 py-4">
                    {new Date(item.createdAt).toLocaleString("pt-BR")}
                  </td>
                </tr>
              ))}

              {filteredRecords.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-[#6b625c]">
                    Nenhum registro encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}