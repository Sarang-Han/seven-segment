'use client';

import React from 'react';
import styles from './page.module.css';
import DigitalClock from '../components/DigitalClock';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>7-Segment</h1>
      <p className={styles.description}>
        BCD 입력과 7-Segment 출력으로 구성된 디지털 시계 구현
      </p>
      
      <div className={styles.clockSection}>
        <DigitalClock />
      </div>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} 디지털논리설계 프로젝트</p>
        <div className={styles.footerLinks}>
          <a href="https://github.com/Sarang-Han" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  );
}