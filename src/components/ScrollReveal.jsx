import React from 'react';
import useInView from '../hooks/useInView';

/**
 * ScrollReveal wrapper component.
 * Fades and slides children into view when they enter the viewport.
 * 
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' | 'none'
 * @param {number} delay - delay in ms before animation starts
 * @param {number} distance - distance in px for the slide
 * @param {number} duration - duration in ms
 * @param {string} className - additional CSS classes
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 40,
  duration = 700,
  className = '',
  as: Tag = 'div',
  style: extraStyle = {},
  ...rest
}) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const transforms = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none'
  };

  const baseStyle = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'none' : transforms[direction],
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...extraStyle
  };

  return (
    <Tag ref={ref} className={className} style={baseStyle} {...rest}>
      {children}
    </Tag>
  );
}
