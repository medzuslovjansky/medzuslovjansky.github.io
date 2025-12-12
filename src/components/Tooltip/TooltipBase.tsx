import React, {
  type ReactNode,
  type CSSProperties,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Tooltip.module.scss';

export type TooltipVariant = 'default' | 'info' | 'caution' | 'warning' | 'tip';

export interface TooltipBaseProps {
  /** Content to show in the tooltip */
  content: ReactNode;
  /** The element that triggers the tooltip */
  children: ReactNode;
  /** Visual variant */
  variant?: TooltipVariant;
  /** Additional CSS class for the trigger wrapper */
  className?: string;
  /** HTML tag for the trigger wrapper */
  as?: 'span' | 'abbr';
  /** Additional props for the trigger element (e.g., title for <abbr>) */
  triggerProps?: Record<string, unknown>;
}

// Simple registry: only one tooltip visible at a time
let activeTooltip: (() => void) | null = null;

function registerActive(hide: () => void): void {
  if (activeTooltip && activeTooltip !== hide) {
    activeTooltip(); // Hide previous tooltip
  }
  activeTooltip = hide;
}

function unregisterActive(hide: () => void): void {
  if (activeTooltip === hide) {
    activeTooltip = null;
  }
}

/**
 * Base tooltip component that portals content to document.body.
 * Escapes overflow:hidden containers like sticky tables.
 * Only one tooltip can be visible at a time.
 *
 * Mobile: tap to show, tap elsewhere to hide.
 * Desktop: hover/focus to show, leave/blur to hide.
 */
export function TooltipBase({
  content,
  children,
  variant = 'default',
  className,
  as: Tag = 'span',
  triggerProps = {},
}: TooltipBaseProps) {
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<CSSProperties>({});
  const [mounted, setMounted] = useState(false);

  // Only render portal on client, and suppress native title tooltip
  useEffect(() => {
    setMounted(true);
    // Remove title attr on mount to prevent double tooltip
    // (title was there for SSR/no-JS fallback)
    if (triggerRef.current?.hasAttribute('title')) {
      triggerRef.current.removeAttribute('title');
    }
  }, []);

  const hide = useCallback(() => setIsVisible(false), []);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    // Position above the trigger, centered
    let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
    let top = triggerRect.top - tooltipRect.height - 8;

    // Keep within viewport horizontally
    const padding = 8;
    if (left < padding) left = padding;
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }

    // If no room above, show below
    if (top < padding) {
      top = triggerRect.bottom + 8;
    }

    setPosition({
      position: 'fixed',
      left: `${left}px`,
      top: `${top}px`,
    });
  }, []);

  const show = useCallback(() => {
    registerActive(hide);
    setIsVisible(true);
    // Use requestAnimationFrame to ensure tooltip is rendered before measuring
    requestAnimationFrame(() => {
      requestAnimationFrame(updatePosition);
    });
  }, [hide, updatePosition]);

  const handleMouseEnter = useCallback(() => {
    show();
  }, [show]);

  const handleMouseLeave = useCallback(() => {
    unregisterActive(hide);
    setIsVisible(false);
  }, [hide]);

  // Click/tap toggles on mobile, shows on desktop
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (isVisible) {
      unregisterActive(hide);
      setIsVisible(false);
    } else {
      show();
    }
  }, [isVisible, hide, show]);

  // Close when clicking outside (for mobile)
  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        unregisterActive(hide);
        setIsVisible(false);
      }
    };

    // Delay adding listener to avoid immediate trigger
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible, hide]);

  // Update position on scroll/resize while visible
  useEffect(() => {
    if (!isVisible) return;

    const handleUpdate = () => updatePosition();
    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [isVisible, updatePosition]);

  // Cleanup on unmount
  useEffect(() => {
    return () => unregisterActive(hide);
  }, [hide]);

  const tooltipContent = (
    <div
      ref={tooltipRef}
      className={`${styles.tooltipPortal} ${styles[variant]} ${isVisible ? styles.visible : ''}`}
      style={position}
      role="tooltip"
      aria-hidden={!isVisible}
    >
      {content}
      <span className={styles.arrow} />
    </div>
  );

  return (
    <>
      <Tag
        ref={triggerRef as React.RefObject<HTMLSpanElement>}
        className={`${styles.trigger} ${className ?? ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        tabIndex={0}
        aria-describedby={isVisible ? 'tooltip' : undefined}
        {...triggerProps}
      >
        {children}
      </Tag>
      {mounted && createPortal(tooltipContent, document.body)}
    </>
  );
}
