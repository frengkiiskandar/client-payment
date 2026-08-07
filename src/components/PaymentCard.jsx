import { Building2, Copy } from "lucide-react";
import { bank } from "../data/payment";
import toast from "react-hot-toast";

export default function PaymentCard() {
  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber);

      toast.success("Nomor rekening berhasil disalin");

    } catch (error) {
      toast.error('Gagal Menyalin No Rekening')
    }
  };

  return (
    <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          <Building2 size={22} />
        </div>

        <div>
          <p className="text-sm text-zinc-500">Transfer Bank</p>

          <h3 className="font-semibold text-zinc-900">{bank.name}</h3>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
        <p className="text-sm text-zinc-500">Nomor Rekening</p>

        <div className="mt-2 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold tracking-wide text-zinc-900">
            {bank.accountNumber}
          </h2>

          <button
            onClick={copyAccount}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm transition hover:bg-zinc-100"
          >
            <Copy size={18} />
          </button>
        </div>

        <p className="mt-4 text-sm text-zinc-500">Atas Nama</p>

        <p className="mt-1 font-semibold text-zinc-900">{bank.accountName}</p>
      </div>
    </section>
  );
}
