import { CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const isPaid = false;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-200">
            F
          </div>

          <div className="leading-tight">
            <h1 className="text-sm font-bold tracking-tight text-zinc-900 sm:text-base">
              Frengki Studio
            </h1>

            <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
              <ShieldCheck size={13} className="text-emerald-500" />
              Secure Payment
            </div>
          </div>
        </div>


        {/* Payment Status */}
        <div
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm transition-all sm:text-sm ${
            isPaid
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-amber-200 bg-amber-50 text-amber-700"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                isPaid ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />

            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                isPaid ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
          </span>


          {isPaid ? (
            <>
              <CheckCircle2 size={16} />
              <span>Payment Completed</span>
            </>
          ) : (
            <>
              <Clock3 size={16} />
              <span>Waiting Payment</span>
            </>
          )}
        </div>

      </div>
    </header>
  );
}