import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import styles from "./OurBusiness.module.scss";

export default function OurBusiness() {
  return (
    <section className={styles.ourBusiness}>
      <div className={styles.container}>
        <SectionTitle size="large" weight="medium">
          Our Business
        </SectionTitle>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <Image
              src="/images/our-business-section-logo.png"
              alt="UniSpirits Business Logo"
              width={400}
              height={300}
              className={styles.businessLogo}
            />
          </div>

          <div className={styles.textSection}>
            <SectionTitle
              size="medium"
              weight="regular"
              color="red"
              className={styles.companyTitle}
            >
              Company
            </SectionTitle>

            <div className={styles.textContent}>
              <p>
                At <strong>Unispirits</strong>, we embody craftsmanship and
                quality <br /> through a luxurious portfolio of spirits and
                wines
                <br /> tailored for the discerning palate. Founded in Belgium
                <br /> by the grandson of the original{" "}
                <strong>Nader Distilleries Co.</strong>
                <br /> founder, our company brings a rich heritage of
                <br />
                distillation and excellence, combined with dedicated
                <br />
                craftsmanship to meet both European and
                <br /> international markets.
              </p>

              <p>
                Our parent company, <strong>Nader Distilleries Co.</strong>, has
                <br />
                been a symbol of tradition and mastery since 1950 in
                <br /> Lebanon. Renowned for its legendary arak, Lebanon&apos;s
                <br />
                national beverage, <strong>Nader Distilleries</strong> has grown
                into
                <br /> an internationally respected producer of ethyl alcohol,
                <br />
                premium spirits, wines, and vinegars. Building on this <br />{" "}
                legacy,
                <strong>Unispirits</strong> delivers authentic quality and{" "}
                <br />
                expertise in every product we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
