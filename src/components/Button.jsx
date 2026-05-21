import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-sky-200'
  const variants = {
    primary: 'bg-accent text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20',
    secondary: 'bg-navy text-white hover:bg-navy2 shadow-lg shadow-navy/20',
    outline: 'border border-navy/20 bg-white text-navy hover:bg-slate-50',
    ghost: 'text-navy hover:bg-slate-100'
  }
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button type={type} className={cls} {...props}>{children}</button>
}
