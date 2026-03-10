const services = [
  {
    label: 'Flights',
    desc: 'Domestic & international flights',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
      </svg>
    ),
  },
  {
    label: 'Hotels',
    desc: 'Book hotels across India',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Holidays',
    desc: 'Curated tour packages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    label: 'Buses',
    desc: 'Book intercity bus tickets',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Cabs',
    desc: 'City & outstation travel',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    label: 'MICE',
    desc: 'Meetings & conferences',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: 'Airport Taxis',
    desc: 'Pickup & drop service',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="22 17 13 17" />
        <path d="M2 9v6h17l3-4-6-2H2z" />
        <path d="M8 17l-1-4M15 9l-1-5" />
        <circle cx="5" cy="17" r="2" />
        <circle cx="19" cy="17" r="2" />
      </svg>
    ),
  },
  {
    label: 'Pilgrim Tourism',
    desc: 'Religious tour packages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 22V8l9-6 9 6v14" />
        <path d="M12 22V16" />
        <path d="M9 13h6" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Our Services</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Everything you need for seamless travel across India</p>
        </div>

        {/*
          Law of Similarity: consistent icon circle size, stroke weight, and
          label typography across all service cards.
          4×2 grid gives breathing room and clear visual grouping.
        */}
        <div className="grid grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.label}
              className="group flex flex-col items-center gap-3 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-100 dark:border-blue-900 flex items-center justify-center text-[#1a3c6e] dark:text-blue-400
                group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:border-blue-300 dark:group-hover:border-blue-700
                group-hover:-translate-y-1.5 group-hover:shadow-md
                transition-all duration-200">
                {service.icon}
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">{service.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug hidden sm:block">{service.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
