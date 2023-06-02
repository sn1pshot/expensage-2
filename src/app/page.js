import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/finan.svg" alt="lund" width={300} height={300} />
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/FIRST.svg" alt="lund" width={713} height={531} href="http://localhost:3000/about" />
      </div>
    </div>
  );
}
