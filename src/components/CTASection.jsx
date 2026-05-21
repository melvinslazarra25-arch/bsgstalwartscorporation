import Button from './Button'

export default function CTASection({ title = 'Need an Engineering Contractor for Your Facility or Project?', description = 'Contact BSG-Stalwarts Corporation to discuss HVAC/R, MEPF, maintenance, products, or project management requirements.', buttonText = 'Request a Quote', buttonTo = '/request-a-quote' }) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">{description}</p>
        </div>
        <Button to={buttonTo}>{buttonText}</Button>
      </div>
    </section>
  )
}
