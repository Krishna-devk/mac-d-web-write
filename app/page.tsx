import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ServicesSection from '@/components/ServicesSection';
import McDelivery from '@/components/McDelivery';
import RestaurantsSection from '@/components/RestaurantsSection';
import NewsSection from '@/components/NewsSection';
import SubscribeSection from '@/components/SubscribeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <MenuSection /> */}
      <ServicesSection />
      <McDelivery />
      <RestaurantsSection />
      <NewsSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
