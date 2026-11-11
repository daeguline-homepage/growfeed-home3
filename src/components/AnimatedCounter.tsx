import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number | string;
  start?: number;
  duration?: number; // duration in ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
  rangeEnd?: number | string;
  rangeSeparator?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  start = 0,
  duration = 1400,
  decimals,
  prefix = '',
  suffix = '',
  separator = ',',
  className = '',
  rangeEnd,
  rangeSeparator = ' ~ ',
}) => {
  // Parse numeric values if passed as string with prefix (e.g. '최대 '), % or commas
  const parseNum = (val: number | string): { extractedPrefix: string; num: number; extractedSuffix: string } => {
    if (typeof val === 'number') return { extractedPrefix: '', num: val, extractedSuffix: '' };
    const clean = val.replace(/,/g, '').trim();
    const match = clean.match(/^([^\d+-]*)([+-]?\d+(?:\.\d+)?)(.*)$/);
    if (match && match[2] !== undefined) {
      return {
        extractedPrefix: match[1] || '',
        num: parseFloat(match[2]),
        extractedSuffix: match[3] || '',
      };
    }
    return { extractedPrefix: '', num: 0, extractedSuffix: val };
  };

  const { extractedPrefix: endPrefix, num: targetEnd, extractedSuffix: endSuffix } = parseNum(end);
  const parsedRangeEnd = rangeEnd !== undefined ? parseNum(rangeEnd) : null;

  const [count, setCount] = useState<number>(start);
  const [secondCount, setSecondCount] = useState<number>(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Auto-detect decimals
  const targetDecimals =
    decimals !== undefined
      ? decimals
      : targetEnd.toString().includes('.')
      ? targetEnd.toString().split('.')[1].length
      : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentVal = start + (targetEnd - start) * easedProgress;
      setCount(currentVal);

      if (parsedRangeEnd) {
        const currentSecondVal = start + (parsedRangeEnd.num - start) * easedProgress;
        setSecondCount(currentSecondVal);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetEnd);
        if (parsedRangeEnd) {
          setSecondCount(parsedRangeEnd.num);
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, start, targetEnd, parsedRangeEnd?.num, duration]);

  const formatNumber = (num: number, dec: number) => {
    const fixed = num.toFixed(dec);
    const [intPart, decPart] = fixed.split('.');
    const formattedInt = separator
      ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
      : intPart;
    return decPart ? `${formattedInt}.${decPart}` : formattedInt;
  };

  const formattedFirst = formatNumber(count, targetDecimals);
  const formattedSecond =
    parsedRangeEnd !== null
      ? formatNumber(
          secondCount,
          parsedRangeEnd.num.toString().includes('.')
            ? parsedRangeEnd.num.toString().split('.')[1].length
            : 0
        )
      : '';

  return (
    <span ref={elementRef} className={`inline-block tabular-nums transition-all ${className}`}>
      {prefix}
      {endPrefix}
      {formattedFirst}
      {endSuffix}
      {parsedRangeEnd !== null ? `${rangeSeparator}${parsedRangeEnd.extractedPrefix}${formattedSecond}${parsedRangeEnd.extractedSuffix}` : ''}
      {suffix}
    </span>
  );
};
