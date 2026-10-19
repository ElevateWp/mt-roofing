import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'forest' | 'ghost' | 'ghost-light' | 'paper' | 'lime' | 'red' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = 'forest',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body rounded-pill transition-all duration-250 cursor-pointer select-none no-underline font-medium';

  const sizeStyles = {
    sm: 'text-13 px-4 py-2 gap-2 min-h-[36px]',
    md: 'text-15 px-6 py-3 gap-2.5 min-h-[44px]',
    lg: 'text-17 px-8 py-4 gap-3 min-h-[52px]',
  };

  const variantStyles = {
    forest:
      'bg-[#00A9D8] text-white hover:bg-[#18C5ED] active:bg-[#102A3B] shadow-sm',
    ghost:
      'bg-transparent text-[#17191C] border border-[#DCE5EA] hover:border-[#17191C] hover:text-[#62676D] hover:bg-[#F3F8FC]/40',
    'ghost-light':
      'bg-transparent text-paper border border-paper/30 hover:border-paper hover:bg-paper/10',
    paper:
      'bg-paper text-[#17191C] border border-paper hover:bg-paper-secondary hover:border-paper-secondary',
    lime:
      'bg-[#00A9D8] text-white hover:bg-[#18C5ED] active:bg-[#102A3B] shadow-sm',
    red:
      'bg-[#00A9D8] text-white hover:bg-[#18C5ED] active:bg-[#102A3B] shadow-sm',
    navy:
      'bg-[#102A3B] text-paper hover:bg-[#18C5ED] active:bg-[#102A3B] shadow-sm',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          aria-label={ariaLabel}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
