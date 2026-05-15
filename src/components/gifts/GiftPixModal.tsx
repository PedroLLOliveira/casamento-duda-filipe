"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type Props = {
  open: boolean;
  onClose: () => void;
  itemName: string;
  itemImage: string;
  categoryLabel: string;
  value: number;
  paymentLink: string;
};

export default function GiftPixModal({
  open,
  onClose,
  itemName,
  itemImage,
  categoryLabel,
  value,
  paymentLink,
}: Props) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function generateQRCode() {
      if (!open) return;

      try {
        const url = await QRCode.toDataURL(paymentLink);
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Erro ao gerar QR Code:", error);
      }
    }

    generateQRCode();
  }, [open, paymentLink]);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(paymentLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar link:", error);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[32px] bg-[#fcfaf7] p-7 shadow-2xl">
        <div className="flex h-[220px] items-center justify-center overflow-hidden bg-[#f8f5f0]">
          <img
            src={itemImage}
            alt={itemName}
            className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#a07f67]">
          Presente selecionado
        </p>

        <h3 className="mt-3 font-serif text-4xl text-[#2f2824]">{itemName}</h3>

        <p className="mt-3 text-sm text-[#6b615a]">
          Este item faz parte da faixa <strong>{categoryLabel}</strong>.
        </p>

        {value > 0 && (
          <p className="mt-3 text-2xl font-semibold text-[#8c6f5a]">
            R$ {value.toFixed(2).replace(".", ",")}
          </p>
        )}

        <p className="mt-5 text-sm leading-7 text-[#6b615a]">
          Para presentear, basta escanear o QR Code ou abrir o link de pagamento
          correspondente a esta faixa de valor.
        </p>

        {qrCodeUrl && (
          <img
            src={qrCodeUrl}
            alt="QR Code do pagamento"
            className="mx-auto mt-6 h-56 w-56 rounded-2xl bg-white p-3"
          />
        )}

        <div className="mt-6 rounded-2xl border border-[#eadfd5] bg-white p-4 text-sm">
          <p className="font-medium text-[#8c6f5a]">Link de pagamento</p>
          <p className="mt-2 break-all text-[#4f4742]">{paymentLink}</p>
        </div>

        <a
          href={paymentLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block w-full rounded-full bg-[#8c6f5a] px-6 py-3 text-center text-white transition hover:opacity-90"
        >
          Abrir pagamento
        </a>

        <button
          onClick={handleCopyLink}
          className="mt-3 w-full rounded-full border border-[#8c6f5a] px-6 py-3 text-[#8c6f5a] transition hover:bg-[#f5ede6]"
        >
          {copied ? "Link copiado!" : "Copiar link"}
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full rounded-full bg-[#2f2824] px-6 py-3 text-white transition hover:opacity-90"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}