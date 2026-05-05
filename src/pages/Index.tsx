import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Zone from "@/components/Zone";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <Services />
      <Zone />
    </main>
    <Footer />
  </div>
);

export default Index;
