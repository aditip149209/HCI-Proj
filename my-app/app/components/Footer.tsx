const footerColumns = [
  {
    heading: 'IRCTC Trains',
    links: [
      'Book Tickets',
      'PNR Status',
      'Train Schedule',
      'Trains Between Stations',
      'Cancel Ticket',
      'Refund Status',
    ],
  },
  {
    heading: 'Tourism',
    links: [
      'Holiday Packages',
      'Budget Hotels',
      'Premium Stays',
      'Hill Stations',
      'Pilgrim Tourism',
      'International Tours',
    ],
  },
  {
    heading: 'Corporate',
    links: [
      'About IRCTC',
      'Annual Reports',
      'Careers',
      'Tenders',
      'Press Releases',
      'Investor Relations',
    ],
  },
  {
    heading: 'Help & Connect',
    links: [
      'Customer Care',
      'FAQs',
      'Submit Feedback',
      'Lodge a Complaint',
      'Accessibility',
      'Security Tips',
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f2340] dark:bg-gray-950 text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/*
          Law of Proximity: consistent column gaps, tighter intra-column spacing,
          clear section header separators.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-white/10">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} IRCTC — Indian Railway Catering and Tourism Corporation Ltd. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300 transition-colors duration-150">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-150">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-150">Sitemap</a>
          </div>
          {/* Subdued social links — not competing with primary CTA */}
          <div className="flex gap-3">
            {['Facebook', 'Twitter', 'YouTube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-150 text-xs border border-white/10 px-2.5 py-1 rounded"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
