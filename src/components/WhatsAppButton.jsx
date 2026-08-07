import { MessageCircle, Send } from "lucide-react";

export default function WhatsAppButton() {

  const phone = "6281275691395";

  const message = encodeURIComponent(
    "Halo Frengki, saya sudah melakukan pembayaran untuk invoice INV-20260807-001. Berikut saya kirim bukti transfer."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;


  return (
    <section className="mt-6 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-5 shadow-sm sm:p-6">


      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
          <MessageCircle size={24}/>
        </div>


        <div>

          <h3 className="font-semibold text-zinc-900">
            Sudah melakukan pembayaran?
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
            Kirim bukti transfer agar pembayaran dapat segera kami verifikasi.
          </p>

        </div>

      </div>



      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-emerald-600
          px-5
          py-4
          font-semibold
          text-white
          transition-all
          hover:bg-emerald-700
          active:scale-[0.98]
        "
      >

        <Send 
          size={20}
          className="transition-transform group-hover:translate-x-1"
        />

        Konfirmasi Pembayaran

      </a>


    </section>
  );
}

