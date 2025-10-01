import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import styles from "./MediaAndEvents.module.scss";

export default function MediaAndEvents() {
  const mediaItems = [
    {
      id: 1,
      image: "/images/media-events-1.png",
      alt: "Media Event 1",
      link: "https://google.com",
    },
    {
      id: 2,
      image: "/images/media-events-2.png",
      alt: "Media Event 2",
      link: "https://google.com",
    },
    {
      id: 3,
      image: "/images/media-events-3.png",
      alt: "Media Event 3",
      link: "https://google.com",
    },
    {
      id: 4,
      image: "/images/media-events-4.png",
      alt: "Media Event 4",
      link: "https://google.com",
    },
    {
      id: 5,
      image: "/images/media-events-5.png",
      alt: "Media Event 5",
      link: "https://google.com",
    },
    {
      id: 6,
      image: "/images/media-events-6.png",
      alt: "Media Event 6",
      link: "https://google.com",
    },
    {
      id: 7,
      image: "/images/media-events-7.png",
      alt: "Media Event 7",
      link: "https://google.com",
    },
  ];

  return (
    <section className={styles.mediaAndEvents}>
      <div className={styles.titleContainer}>
        <SectionTitle size="large" weight="medium" color="black">
          Media and Events
        </SectionTitle>
      </div>

      <div className={styles.mediaContainer}>
        <div className={styles.mediaGrid}>
          {mediaItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mediaItem}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={200}
                  height={150}
                  className={styles.mediaImage}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
