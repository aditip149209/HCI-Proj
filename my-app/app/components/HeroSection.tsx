import BookingWidget from './BookingWidget'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bannerImage.jpg')" }}
      />

      {/*
        Dark overlay — Gestalt Figure-Ground improvement.
        Ensures the booking widget (figure) clearly separates from the
        detailed train image (ground), reducing visual competition.
      */}
      <div className="absolute inset-0 bg-[#0c1e3d]/65" />

      {/* Subtle gradient at bottom for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-16 animate-fade-in-up">
        <div className="text-center mb-6">
          <h1 className="text-white text-4xl font-bold mb-2 drop-shadow-lg tracking-tight">
            Book Railway Tickets Online
          </h1>
          <p className="text-blue-200 text-base">
            Fast, secure, and convenient booking for Indian Railways
          </p>
        </div>
        <BookingWidget />
      </div>
    </section>
  )
}
