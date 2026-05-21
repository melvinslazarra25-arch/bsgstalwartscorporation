import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileStickyCTA from '../components/MobileStickyCTA'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}
