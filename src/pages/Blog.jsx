import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return <>
    <SEO title="Blog and Updates | BSG-Stalwarts Corporation" description="Company updates, engineering articles, HVAC/R tips, MEPF guides, and maintenance topics." path="/blog" />
    <PageHero eyebrow="Blog" title="Company Updates and Engineering Resources" description="Publish project news, maintenance tips, hiring updates, and educational articles for SEO growth." />
    <section className="py-20"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">{blogPosts.map(post => <article key={post.title} className="rounded-2xl bg-white p-6 shadow-card"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">{post.category}</p><h2 className="mt-3 text-xl font-extrabold text-navy">{post.title}</h2><p className="mt-2 text-sm text-slate-500">{post.date}</p><p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p></article>)}</div></section>
    <CTASection title="Need engineering or maintenance support?" />
  </>
}
