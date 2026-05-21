import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from './Button'
import { navigation, serviceLinks } from '../data/navigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navClass = ({ isActive }) => `text-sm font-bold transition hover:text-accent ${isActive ? 'text-accent' : 'text-navy'}`
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-lg font-extrabold text-white">BSG</span>
          <span className="leading-tight"><span className="block text-base font-extrabold text-navy">BSG-Stalwarts</span><span className="block text-xs font-semibold text-slate-500">Engineering Contractor</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => item.name === 'Services' ? (
            <div className="group relative" key={item.name}>
              <NavLink to={item.href} className={navClass}>Services <ChevronDown className="inline h-4 w-4" /></NavLink>
              <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-card transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {serviceLinks.map((s) => <Link key={s.href} to={s.href} className="block rounded-xl px-4 py-3 text-sm font-bold text-navy hover:bg-slate-50 hover:text-accent">{s.name}</Link>)}
              </div>
            </div>
          ) : <NavLink key={item.href} to={item.href} className={navClass}>{item.name}</NavLink>)}
        </nav>
        <div className="hidden lg:block"><Button to="/request-a-quote">Request a Quote</Button></div>
        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 lg:hidden" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
        <div className="grid gap-1">
          {[...navigation, { name: 'Request a Quote', href: '/request-a-quote' }].map((item) => <Link onClick={() => setOpen(false)} key={item.href} to={item.href} className="rounded-xl px-4 py-3 font-bold text-navy hover:bg-slate-50">{item.name}</Link>)}
          <div className="mt-2 rounded-xl bg-slate-50 p-2">{serviceLinks.map(s => <Link onClick={() => setOpen(false)} key={s.href} to={s.href} className="block rounded-lg px-4 py-2 text-sm font-semibold text-slate-700">{s.name}</Link>)}</div>
        </div>
      </div>}
    </header>
  )
}
