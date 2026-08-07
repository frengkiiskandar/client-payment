import { CheckCircle2, Clock3 } from "lucide-react";

export default function Navbar() {
  const isPaid = false;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">
            F
          </div>

          <div className="leading-tight">
            <h1 className="text-sm font-semibold text-zinc-900 sm:text-base">
              Frengki Studio
            </h1>

            <p className="text-xs text-zinc-500">
              Secure Payment
            </p>
          </div>
        </div>

        {/* Status */}
        <div
          className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium sm:text-sm ${
            isPaid
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-amber-200 bg-amber-50 text-amber-700"
          }`}
        >
          {isPaid ? (
            <>
              <CheckCircle2 size={16} />
              <span>Paid</span>
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