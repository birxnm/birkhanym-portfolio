const styles = {
  solid: 'bg-pink text-white border-pink hover:bg-ink hover:border-ink',
  outline: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-white',
}

// Pill button. In-page anchors (#id) scroll; anything else opens in a new tab.
export default function Button({ href, variant = 'outline', children, className = '' }) {
  const external = !href.startsWith('#')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export function Arrow({ char = '→' }) {
  return (
    <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">
      {char}
    </span>
  )
}
