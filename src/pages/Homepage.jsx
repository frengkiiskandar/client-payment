import { useParams } from "react-router-dom";
import { payments } from "../data/payment";

import InvoiceCard from "../components/InvoiceCard";
import PaymentCard from "../components/PaymentCard";
import StatusBadge from "../components/StatusBadge";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";


const Homepage = () => {

  const { invoice } = useParams();


  const data = payments.find(
    item => item.invoice === invoice
  );


  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Invoice tidak ditemukan
      </div>
    );
  }


  return (
    <main className="min-h-screen bg-zinc-100">

      <div className="mx-auto max-w-3xl px-4 pb-10">

        <InvoiceCard data={data}/>

        <PaymentCard />

        <StatusBadge status={data.status} />

        <WhatsAppButton />

        <Footer />

      </div>

    </main>
  );
};


export default Homepage;