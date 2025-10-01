import styles from "./SectionTitle.module.scss";

export default function SectionTitle({
  children,
  className = "",
  size = "medium", // medium (33px) or large (35px)
  weight = "medium", // medium or regular
  textAlign = "left",
  color = "black", // black or red
}) {
  return (
    <h2
      className={`title ${size} ${color} ${styles.sectionTitle} ${styles[textAlign]} ${styles[weight]} ${className}`}
    >
      {children}
    </h2>
  );
}
