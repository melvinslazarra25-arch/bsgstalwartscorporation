import SEO from '../components/SEO'
import Button from '../components/Button'

export default function NotFound() {
  return <>
    <SEO title="Page Not Found | BSG-Stalwarts Corporation" description="The page you are looking for could not be found." />
    <section className="py-28"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"><h1 className="text-6xl font-extrabold text-navy">404</h1><p className="mt-4 text-2xl font-bold text-slate-700">Page not found</p><p className="mt-4 text-slate-600">The page you are looking for may have moved or does not exist.</p><div className="mt-8"><Button to="/">Return Home</Button></div></div></section>
  </>
}
