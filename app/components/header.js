// components/Header.js
import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
        <nav className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/blog">
                    Blog
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </nav>
        </nav>
    )
}
