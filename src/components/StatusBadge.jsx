import { CheckCircle2, Clock3 } from "lucide-react";

export default function StatusBadge({ status = "pending" }) {
  const isPaid = status === "paid";

  return (
    <section
      className={`mt-6 overflow-hidden rounded-3xl border p-6 shadow-sm transition-all ${
        isPaid
          ? "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white"
          : "border-amber-200 bg-gradient-to-br from-amber-50 via-white to-white"
      }`}
    >

      <div className="flex items-center justify-between">

        {/* Icon */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            isPaid
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
              : "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
          }`}
        >
          {
            isPaid
              ? <CheckCircle2 size={30}/>
              : <Clock3 size={30}/>
          }
        </div>


        {/* Status */}
        <div className="text-right">

          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Payment Status
          </p>


          <h3
            className={`mt-1 text-lg font-bold ${
              isPaid
                ? "text-emerald-700"
                : "text-amber-700"
            }`}
          >
            {
              isPaid
                ? "Paid"
                : "Waiting Payment"
            }
          </h3>

        </div>

      </div>



      {/* Divider */}
      <div className="my-5 h-px bg-zinc-200"/>



      {/* Info */}
      <div className="flex items-center justify-between text-sm">

        <span className="text-zinc-500">
          Invoice Status
        </span>


        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isPaid
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {
            isPaid
              ? "Completed"
              : "Pending"
          }
        </span>

      </div>


    </section>
  );
}