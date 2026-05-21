import Button from './Button'

export default function PageHero({ eyebrow, title, description, primaryCta = 'Request a Quote', primaryTo = '/request-a-quote', secondaryCta, secondaryTo }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="absolute inset-0 placeholder-grid opacity-30" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-200">{eyebrow}</p>}
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          {description && <p className="mt-6 text-lg leading-8 text-slate-200">{description}</p>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to={primaryTo}>{primaryCta}</Button>
            {secondaryCta && <Button to={secondaryTo} variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">{secondaryCta}</Button>}
          </div>
        </div>
      </div>
    </section>
  )
}
