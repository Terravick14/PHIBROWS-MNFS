import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import SocialProof from "./components/SocialProof/SocialProof";
import BookingForm from "./components/BookingForm/BookingForm";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

const Showcase = lazy(() => import("./components/Showcase/Showcase"));
const FAQ      = lazy(() => import("./components/FAQ/FAQ"));

const Loader = () => (
  <div className="py-24 text-center font-mono text-xs uppercase tracking-widest text-cream/20">
    Cargando…
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-noir text-cream">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={<Loader />}>
          <Showcase />
        </Suspense>
        <SocialProof />
        <Suspense fallback={<Loader />}>
          <FAQ />
        </Suspense>
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
