import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  target,
  rel,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  }[size];

  const variantClasses = {
    primary:
      'relative group overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-medium shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-purple-400/30 hover:border-cyan-300/60',
    secondary:
      'glass-panel text-slate-200 hover:text-white border border-purple-500/30 hover:border-cyan-400/60 hover:bg-purple-950/40 shadow-[0_0_15px_rgba(0,0,0,0.5)]',
    outline:
      'border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 bg-transparent hover:bg-cyan-950/20',
  }[variant];

  const content = (
    <>
      {/* Light sheen hover animation for primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
      )}

      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </span>
    </>
  );

  const baseClasses = `inline-flex items-center justify-center rounded-xl font-medium tracking-wide transition-all duration-300 cursor-pointer active:scale-95 ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
