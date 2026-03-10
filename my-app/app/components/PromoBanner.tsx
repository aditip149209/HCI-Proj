const offers = [
  {
    tag: 'Up to 10% off',
    title: 'Book with SBI Card',
    desc: 'Get cashback on ticket bookings using SBI Credit or Debit Cards.',
    light: 'bg-blue-50 border-blue-200',
    dark: 'dark:bg-blue-950/30 dark:border-blue-800/50',
    tagLight: 'bg-blue-100 text-blue-800',
    tagDark: 'dark:bg-blue-900/50 dark:text-blue-300',
  },
  {
    tag: 'New',
    title: 'Vande Bharat Express',
    desc: "Experience India's fastest semi-high-speed train on premium routes.",
    light: 'bg-orange-50 border-orange-200',
    dark: 'dark:bg-orange-950/30 dark:border-orange-800/50',
    tagLight: 'bg-orange-100 text-orange-800',
    tagDark: 'dark:bg-orange-900/50 dark:text-orange-300',
  },
  {
    tag: 'Monsoon Special',
    title: 'Holiday Packages',
    desc: 'Explore curated packages to hill stations and scenic destinations.',
    light: 'bg-green-50 border-green-200',
    dark: 'dark:bg-green-950/30 dark:border-green-800/50',
    tagLight: 'bg-green-100 text-green-800',
    tagDark: 'dark:bg-green-900/50 dark:text-green-300',
  },
]

export default function PromoBanner() {
  return (
    <section className="bg-slate-50 dark:bg-gray-950 py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Offers &amp; Updates</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Latest deals and announcements from Indian Railways</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`rounded-xl border p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${offer.light} ${offer.dark}`}
            >
              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${offer.tagLight} ${offer.tagDark}`}>
                {offer.tag}
              </span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">{offer.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{offer.desc}</p>
              </div>
              <a href="#" className="text-sm font-medium text-[#1a3c6e] dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mt-auto">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
