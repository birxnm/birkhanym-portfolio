import { Link } from 'react-router-dom'

const styles = {
  solid: 'bg-pink text-white border-pink hover:brightness-95',
  outline: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-white',
}

export default function Button({ to, href, variant = 'outline', children, className = '' }) {
  const cls = `inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition ${styles[variant]} ${className}`
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  )
}
