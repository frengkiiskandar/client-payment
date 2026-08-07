import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 pb-8">

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-zinc-200
          bg-white/70
          p-6
          text-center
          shadow-sm
          backdrop-blur-xl
        "
      >

        {/* Gradient blur decoration */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative">


          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-lg">
            <Sparkles size={18}/>
          </div>


          <h3 className="mt-4 text-sm font-semibold text-zinc-900">
            Frengki Studio
          </h3>


          <p className="mt-1 text-xs text-zinc-500">
            Digital solutions crafted with care
          </p>


          <div className="mx-auto my-5 h-px max-w-xs bg-zinc-200" />


          <p className="text-xs text-zinc-400">
            Secure payment experience
          </p>


          <p className="mt-1 text-xs text-zinc-400">
            © {new Date().getFullYear()} Frengki Studio
          </p>


        </div>


      </div>

    </footer>
  );
}