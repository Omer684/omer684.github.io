// Sharp-cornered editorial button. Renders <a> when `href` is set, else <button>.
export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  icon: Icon,
  ...rest
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ease-expo cursor-pointer select-none'

  const variants = {
    primary: 'bg-ink text-paper hover:bg-accent',
    accent: 'bg-accent text-white hover:bg-accent-ink',
    outline: 'border border-ink/80 text-ink hover:bg-ink hover:text-paper',
    ghost: 'text-ink hover:text-accent',
    // For use on dark backgrounds (e.g. the black-hole hero).
    light: 'bg-paper text-ink hover:bg-accent hover:text-white',
  }

  const cls = `${base} ${variants[variant] || variants.primary} ${className}`

  const inner = (
    <>
      <span>{children}</span>
      {Icon ? (
        <Icon
          size={16}
          className="transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  }

  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}
