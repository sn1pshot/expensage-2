import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src="/finan.svg" alt="lund" width={987} height={233} />
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
} 
