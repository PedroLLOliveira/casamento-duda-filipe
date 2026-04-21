"use client";

import { useState } from "react";

function formatPhoneInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function RsvpForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guestsCount: "",
    guestNames: "",
    dietaryRestriction: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  function updateField(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    if (!form.name.trim()) {
      setFeedback("Informe seu nome completo.");
      setLoading(false);
      return;
    }

    if (!form.phone.trim()) {
      setFeedback("Informe seu telefone.");
      setLoading(false);
      return;
    }

    if (Number(form.guestsCount || 0) < 0) {
      setFeedback("A quantidade de acompanhantes não pode ser negativa.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          guestsCount: Number(form.guestsCount || 0),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao confirmar presença.");
      }

      setFeedback("Presença confirmada com sucesso! 💛");
      setForm({
        name: "",
        phone: "",
        guestsCount: "",
        guestNames: "",
        dietaryRestriction: "",
        message: "",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro inesperado.";
      setFeedback(message);
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-[#e6ddd4] bg-[#fcfaf7] px-4 py-3 text-[#2f2824] outline-none transition focus:border-[#b6947c] focus:ring-2 focus:ring-[#ead9cc]";

  const labelClass =
    "mb-2 block text-sm uppercase tracking-[0.18em] text-[#8c6f5a]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Nome completo</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={inputClass}
          placeholder="Digite seu nome"
        />
      </div>

      <div>
        <label className={labelClass}>Telefone</label>
        <input
          type="text"
          value={form.phone}
          onChange={(e) => updateField("phone", formatPhoneInput(e.target.value))}
          className={inputClass}
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label className={labelClass}>Quantidade de acompanhantes</label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={String(form.guestsCount)}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, "");
            updateField("guestsCount", onlyNumbers === "" ? 0 : Number(onlyNumbers));
          }}
          className={inputClass}
          placeholder="0"
        />
      </div>

      <div>
        <label className={labelClass}>Nome dos acompanhantes</label>
        <textarea
          value={form.guestNames}
          onChange={(e) => updateField("guestNames", e.target.value)}
          className={inputClass}
          placeholder="Informe os nomes, se houver"
          rows={3}
        />
      </div>

      <div>
        <label className={labelClass}>Restrição alimentar</label>
        <textarea
          value={form.dietaryRestriction}
          onChange={(e) => updateField("dietaryRestriction", e.target.value)}
          className={inputClass}
          placeholder="Nos conte se houver alguma restrição"
          rows={3}
        />
      </div>

      <div>
        <label className={labelClass}>Mensagem para os noivos</label>
        <textarea
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass}
          placeholder="Escreva uma mensagem carinhosa, se desejar"
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#8c6f5a] px-6 py-4 text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Confirmar presença"}
      </button>

      {feedback && (
        <div className="rounded-2xl bg-[#f5ede6] px-4 py-3 text-center text-sm text-[#6b615a]">
          {feedback}
        </div>
      )}
    </form>
  );
}