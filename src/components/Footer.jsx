import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { serviceLinks } from '../data/navigation'
import { siteConfig } from '../utils/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-charcoal pb-20 pt-14 text-white md:pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold">BSG-Stalwarts Corporation</div>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">Engineering contracting company providing HVAC/R, MEPF, operations and maintenance, engineering products, and project management services for commercial and industrial clients.</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <span className="flex gap-2"><MapPin className="h-5 w-5 text-accent" />{siteConfig.address}</span>
            <span className="flex gap-2"><Phone className="h-5 w-5 text-accent" />{siteConfig.phone}</span>
            <span className="flex gap-2"><Mail className="h-5 w-5 text-accent" />{siteConfig.email}</span>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Services</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">{serviceLinks.map(s => <Link key={s.href} to={s.href} className="hover:text-accent">{s.name}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-extrabold">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <Link to="/about" className="hover:text-accent">About Us</Link>
            <Link to="/projects" className="hover:text-accent">Projects</Link>
            <Link to="/careers" className="hover:text-accent">Careers</Link>
            <Link to="/contact" className="hover:text-accent">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-slate-400 sm:px-6 lg:px-8">© {new Date().getFullYear()} BSG-Stalwarts Corporation. All rights reserved.</div>
    </footer>
  )
}
