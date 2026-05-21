import { Mail, MessageCircle, Phone, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../utils/siteConfig'

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-slate-200 bg-white text-xs font-bold text-navy shadow-2xl md:hidden">
      <a href={`tel:${siteConfig.phone}`} className="flex flex-col items-center gap-1 p-2"><Phone className="h-5 w-5" />Call</a>
      <a href={`mailto:${siteConfig.email}`} className="flex flex-col items-center gap-1 p-2"><Mail className="h-5 w-5" />Email</a>
      <a href={siteConfig.messenger} className="flex flex-col items-center gap-1 p-2"><MessageCircle className="h-5 w-5" />Chat</a>
      <Link to="/request-a-quote" className="flex flex-col items-center gap-1 bg-accent p-2 text-white"><FileText className="h-5 w-5" />Quote</Link>
    </div>
  )
}
