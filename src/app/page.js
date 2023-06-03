"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { delay, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src="/finan.svg" alt="lund" width={987} height={233} />
          <Link href="https://whatsapp.com/"/>

          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
