import { CalendarDays, FileText } from "lucide-react";

export default function InvoiceCard({ data }) {
  return (
    <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">

      <div className="flex items-start justify-between">

        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
            <FileText size={16} />
            Invoice
          </div>

          <h2 className="text-lg font-semibold text-zinc-900">
            {data.invoice}
          </h2>
        </div>


        <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
          {data.type}
        </div>

      </div>


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


      <div className="mt-8 rounded-2xl bg-zinc-900 p-5 text-white">

        <p className="text-sm text-zinc-400">
          Total Pembayaran
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          Rp{data.amount.toLocaleString("id-ID")}
        </h3>

      </div>

    </section>
  );
}