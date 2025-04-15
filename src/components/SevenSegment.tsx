import React from 'react';
import styles from '../styles/SevenSegment.module.css';

interface SevenSegmentProps {
  value: number; // 0-9 사이의 숫자
  bcdValue?: number[]; // BCD 입력 (선택적)
  showBCD?: boolean; // BCD 표시 여부
}

const SevenSegment: React.FC<SevenSegmentProps> = ({ 
  value, 
  bcdValue = [0, 0, 0, 0], 
  showBCD = false 
}) => {
  // 0-9 숫자에 대한 세그먼트 활성화 패턴
  // 세그먼트 순서: [a, b, c, d, e, f, g]
  const segmentPatterns = [
    [1, 1, 1, 1, 1, 1, 0], // 0
    [0, 1, 1, 0, 0, 0, 0], // 1
    [1, 1, 0, 1, 1, 0, 1], // 2
    [1, 1, 1, 1, 0, 0, 1], // 3
    [0, 1, 1, 0, 0, 1, 1], // 4
    [1, 0, 1, 1, 0, 1, 1], // 5
    [1, 0, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 0, 0, 0, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1]  // 9
  ];

  // 0-9 범위로 제한
  const normalizedValue = Math.max(0, Math.min(9, value));
  const segments = segmentPatterns[normalizedValue];

  return (
    <div className={styles.sevenSegmentContainer}>
      <div className={styles.display}>
        <div className={`${styles.segment} ${styles.segmentA} ${segments[0] ? styles.active : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentB} ${segments[1] ? styles.active : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentC} ${segments[2] ? styles.active : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentD} ${segments[3] ? styles.active : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentE} ${segments[4] ? styles.active : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentF} ${segments[5] ? styles.active : ''}`}></div>
        <div className={`${styles.segment} ${styles.segmentG} ${segments[6] ? styles.active : ''}`}></div>
      </div>
      
      {showBCD && (
        <div className={styles.bcdDisplay}>
          <div className={styles.bcdBits}>
            {bcdValue.map((bit, index) => (
              <div key={index} className={`${styles.bcdBit} ${bit ? styles.bcdActive : ''}`}>
                {bit}
              </div>
            ))}
          </div>
          <div className={styles.bcdLabels}>
            <span>8</span>
            <span>4</span>
            <span>2</span>
            <span>1</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SevenSegment;