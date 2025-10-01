import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import VisionMission from "@/components/VisionMission";
import styles from "./ProductsAndServices.module.scss";

export default function ProductsAndServices() {
  return (
    <section className={styles.productsAndServices}>
      <div className={styles.container}>
        <SectionTitle size="medium" weight="regular" color="red">
          Products and Services
        </SectionTitle>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p>
              <strong>Unispirits</strong> specializes in brand development, from
              conceptualization to realization, and in creating exclusive
              private <br /> labels that merge modern innovation with timeless
              craftsmanship. Our offering includes a carefully curated selection
              of <br /> refined red, rosé, white, and sweet wines as well as a
              range of spirits such as whisky, vodka, gin, brandy, and arak.{" "}
              <br /> We also provide high-quality cider and wine vinegars, with
              plans to introduce specialty beers and non-alcoholic <br />{" "}
              spirits, including an elegant non-alcoholic gin.
            </p>

            <p>
              Every product reflects our unwavering commitment to excellence and
              luxury. Our goal is to elevate brands and craft <br /> exceptional
              experiences through meticulous attention to detail, craftsmanship,
              and dedication to quality. At <strong>Unispirits</strong>, <br />{" "}
              luxury is central to everything we do delivering the finest taste,
              style, and distinction.
            </p>
          </div>

          <div className={styles.imageSection}>
            <Image
              src="/images/products-and-services-section.png"
              alt="A World of Spirits - UniSpirits product range illustration"
              width={600}
              height={200}
              className={styles.spiritsIllustration}
            />
            <h3 className={styles.imageTitle}>A WORLD OF SPIRITS</h3>
          </div>
        </div>
      </div>

      <VisionMission />
    </section>
  );
}
