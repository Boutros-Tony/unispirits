import styles from "./page.module.scss";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import OurBusiness from "@/components/OurBusiness";
import OurBrands from "@/components/OurBrands";
import ProductSlider from "@/components/ProductSlider";
import ProductsAndServices from "@/components/ProductsAndServices";
import MediaAndEvents from "@/components/MediaAndEvents";
import GetInTouch from "@/components/GetInTouch";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HeroSlider />

      <div className={styles.backgroundWrapper}>
        <OurBusiness />
        <ProductsAndServices />
        <OurBrands />
        <ProductSlider />
        <MediaAndEvents />
        <GetInTouch />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
