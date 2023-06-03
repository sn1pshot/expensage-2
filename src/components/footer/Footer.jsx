import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Expensage. All rights reserved.</div>
      <div>
        <Image
          src="/github-mark-white.png"
          alt="github repo"
          width={18}
          height={16}
        />
        <Link href="https://github.com/skizzle010/expensage"/>
      </div>  
    </div>
  );
};

export default Footer;