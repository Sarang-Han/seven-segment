'use client'; // 클라이언트 컴포넌트로 지정

import React, { useEffect, useState } from 'react';
import styles from '../styles/DigitalClock.module.css';
import SevenSegment from './SevenSegment';

const DigitalClock: React.FC = () => {
  // 초기 상태는 모두 0으로 설정
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
    };
    
    // 초기 실행
    updateClock();
    
    // 1초마다 업데이트
    const timer = setInterval(updateClock, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // 각 자릿수별 숫자
  const hour1 = Math.floor(hours / 10);
  const hour2 = hours % 10;
  const min1 = Math.floor(minutes / 10);
  const min2 = minutes % 10;
  const sec1 = Math.floor(seconds / 10);
  const sec2 = seconds % 10;
  
  // 숫자를 BCD로 변환하는 함수
  const numberToBcd = (num: number): number[] => {
    return [
      (num & 8) ? 1 : 0,  // 8's place
      (num & 4) ? 1 : 0,  // 4's place
      (num & 2) ? 1 : 0,  // 2's place
      (num & 1) ? 1 : 0   // 1's place
    ];
  };

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clockDigits}>
        <SevenSegment value={hour1} bcdValue={numberToBcd(hour1)} showBCD={true} />
        <SevenSegment value={hour2} bcdValue={numberToBcd(hour2)} showBCD={true} />
        <div className={styles.colon}>:</div>
        <SevenSegment value={min1} bcdValue={numberToBcd(min1)} showBCD={true} />
        <SevenSegment value={min2} bcdValue={numberToBcd(min2)} showBCD={true} />
        <div className={styles.colon}>:</div>
        <SevenSegment value={sec1} bcdValue={numberToBcd(sec1)} showBCD={true} />
        <SevenSegment value={sec2} bcdValue={numberToBcd(sec2)} showBCD={true} />
      </div>
    </div>
  );
};

export default DigitalClock;