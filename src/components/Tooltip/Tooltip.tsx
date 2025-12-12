import React, { type ReactNode } from 'react';
import { TooltipBase, type TooltipVariant } from './TooltipBase';

export type { TooltipVariant } from './TooltipBase';

export interface TooltipProps {
  /** Content to show in the tooltip */
  content: ReactNode;
  /** The element that triggers the tooltip */
  children: ReactNode;
  /** Visual variant */
  variant?: TooltipVariant;
  /** Additional CSS class */
  className?: string;
}

/**
 * Tooltip component for showing contextual information on hover.
 * Renders via portal to escape overflow:hidden containers.
 *
 * @example
 * <Tooltip content="This is a tip" variant="tip">
 *   <span>Hover me</span>
 * </Tooltip>
 */
export function Tooltip({
  content,
  children,
  variant = 'default',
  className,
}: TooltipProps) {
  return (
    <TooltipBase
      content={content}
      variant={variant}
      className={className}
    >
      {children}
    </TooltipBase>
  );
}
