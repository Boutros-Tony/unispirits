import Image from "next/image";
import styles from "./VisionMission.module.scss";

export default function VisionMission() {
  const items = [
    {
      id: "vision",
      icon: "/images/vision-icon.png", // Update with actual icon path
      title: "Vision",
      text: "To be a distinguished name in the creation of innovative spirits, wines, and vinegars,<br /> fostering a legacy of refinement and inspiring excellence across the world.",
    },
    {
      id: "strategy",
      icon: "/images/strategy-icon.png", // Update with actual icon path
      title: "Strategy",
      text: "To nurture our own brands and private labels, expanding thoughtfully into <br /> international markets. Our approach emphasizes timeless craftsmanship combined <br /> with a sensitivity to emerging trends and sustainable practices.",
    },
    {
      id: "mission",
      icon: "/images/mission-icon.png", // Update with actual icon path
      title: "Mission",
      text: "To craft products of uncompromising quality, blending tradition with innovation<br /> to elevate the senses and enrich the industry with authentic experiences.",
    },
    {
      id: "goal",
      icon: "/images/goal-icon.png", // Update with actual icon path
      title: "Goal",
      text: "To grow as a leader and trendsetter in the industry,<br /> shaping the future of premium beverages through innovation,<br /> integrity, and a steadfast commitment to excellence and sustainability.",
    },
    {
      id: "target",
      icon: "/images/target-icon.png", // Update with actual icon path
      title: "Target",
      text: "To serve both local and global markets with a curated selection of refined spirits<br /> and wines designed to satisfy connoisseurs and inspire new audiences<br /> with elegance and authenticity.",
    },
  ];

  return (
    <div className={styles.visionMission}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.item} ${
                index % 2 === 1 ? styles.itemReverse : ""
              }`}
            >
              <div className={styles.iconContainer}>
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={40}
                  height={40}
                  className={styles.icon}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.divider}></div>
              <div className={styles.content}>
                <h3 className={`mohave italic medium red ${styles.title}`}>
                  {item.title}
                </h3>
                <p
                  className={`mohave light medium black ${styles.text}`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
