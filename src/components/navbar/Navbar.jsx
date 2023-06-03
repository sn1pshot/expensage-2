"use client"
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Features",
    url: "/features",
  },
  {
    id: 3,
    title: "Dashboard", 
    url: "/dashboard",
  },
  {
    id: 4,
    title: "Pricing",
    url: "/pricing",
  }
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image src="/vector.svg" alt="logo" width={50} height={50} />
      <Link href="/" className="text-2xl font-extrabold flex flex-1 items-stretch justify-start p-2">ExpenSage</Link>
      <div className={styles.links}>
        {Links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
