import Hero from "../components/Hero/Hero";
import SocialProof from "../components/SocialProof/SocialProof";
import Features from "../components/Features/Features";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import Showcase from "../components/Showcase/Showcase";
import VideoGallery from "../components/VideoGallery/VideoGallery";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <Services />
      <Process />
      <Showcase />
      <VideoGallery />
      <FAQ />
      <CTA />
    </>
  );
}
