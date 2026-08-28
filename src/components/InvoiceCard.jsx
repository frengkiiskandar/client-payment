import { CalendarDays, FileText, CheckCircle2 } from "lucide-react";

export default function InvoiceCard({ data }) {
  const total = data.amount;
  const dibayar = data.dibayar || 0;
  const sisa = Math.max(total - dibayar, 0);

  const isLunas = sisa === 0;

  return (
    <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
            <FileText size={16} />
            Invoice
          </div>

          <h2 className="text-lg font-semibold text-zinc-900">
            {data.invoice}
          </h2>
        </div>

        <div className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
          {data.type}
        </div>

      </div>


      {/* Information */}
      <div className="mt-8 space-y-5">

        <div>
          <p className="text-sm text-zinc-500">
            Client
          </p>

          <p className="mt-1 font-semibold text-zinc-900">
            {data.client}
          </p>
        </div>


        <div>
          <p className="text-sm text-zinc-500">
            Project
          </p>

          <p className="mt-1 font-semibold text-zinc-900">
            {data.project}
          </p>
        </div>


        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <CalendarDays size={16} />
          {data.date}
        </div>

      </div>


      {/* Payment Summary */}
      <div className="mt-8 rounded-2xl bg-zinc-900 p-5 text-white sm:p-6">

        <div className="flex items-center justify-between">

          <p className="text-sm text-zinc-400">
            {isLunas ? "Pembayaran Lunas" : "Sisa Pembayaran"}
          </p>

          {isLunas && (
            <CheckCircle2
              size={18}
              className="text-emerald-400"
            />
          )}

        </div>


        <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Rp{sisa.toLocaleString("id-ID")}
        </h3>


        {/* Detail pembayaran */}
        <div className="mt-5 border-t border-zinc-700 pt-4 space-y-2">

          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">
              Total proyek
            </span>

            <span className="font-medium text-zinc-200">
              Rp{total.toLocaleString("id-ID")}
            </span>
          </div>


          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">
              Sudah dibayar
            </span>

            <span className="font-medium text-zinc-200">
              Rp{dibayar.toLocaleString("id-ID")}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}