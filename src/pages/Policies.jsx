const sections = [
  {
    id: 'booking',
    title: 'Booking Policy',
    items: [
      'All customers must provide accurate information when completing the reservation form.',
      'Reservations are subject to availability and confirmation.',
      'Customers must review their selected package and itinerary before confirming.',
      'Advance booking is recommended to secure preferred travel dates.',
    ],
  },
  {
    id: 'payment',
    title: 'Payment Policy',
    items: [
      'Payment instructions will be provided after the booking details are confirmed.',
      'Required deposits and payment deadlines will be communicated before reservation confirmation.',
      'Customers must provide proof of payment when requested.',
      'Additional charges must be settled according to the agreed payment terms.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation and Refund Policy',
    items: [
      'Customers must notify the agency if they wish to cancel.',
      'Refund eligibility depends on the timing of cancellation and applicable booking conditions.',
      'Non-refundable expenses, such as confirmed third-party reservations, may be deducted where applicable and disclosed.',
      'Refund processing details will be communicated to the customer.',
    ],
  },
  {
    id: 'rescheduling',
    title: 'Rescheduling Policy',
    items: [
      'Requests to change travel dates must be submitted in advance.',
      'Rescheduling is subject to availability.',
      'Additional charges may apply if suppliers or accommodations impose change fees.',
      'Customers will be informed of any changes before confirmation.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    paragraphs: [
      'Liwaliw sa Liliw Tour respects the privacy of its customers. Personal information collected through the website, including names, contact numbers, and email addresses, will be used for booking arrangements, customer communication, and other legitimate business purposes.',
      'We are committed to protecting customer information and will not disclose personal data to unauthorized parties, except when required by law or necessary to fulfill confirmed travel arrangements with appropriate safeguards.',
      'Access to customer information is limited to authorized personnel and retained only as long as necessary for the stated purposes or legal requirements.',
    ],
  },
  {
    id: 'terms',
    title: 'Terms and Conditions',
    items: [
      'Customers are expected to follow the agreed itinerary and tour guidelines.',
      "Changes to schedules may occur due to weather conditions, safety concerns, or circumstances beyond the agency's control.",
      'Customers must follow the rules and regulations of each destination.',
      'Personal belongings remain the responsibility of each traveler.',
      'Customers are encouraged to arrive at the designated meeting place on time.',
      'The agency may modify travel arrangements when necessary for customer safety and convenience. Significant changes will be communicated promptly.',
    ],
  },
]

export default function Policies() {
  return (
    <main>
      <section className="bg-forest text-white text-center py-20 px-4">
        <h1 className="text-6xl md:text-7xl">POLICIES AND TERMS</h1>
        <p className="mt-4">Please read these before booking your tour.</p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        <nav className="md:sticky md:top-24 self-start">
          <ul className="space-y-2 text-sm font-semibold">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-stone-600 hover:text-forest">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-4xl text-forest">{s.title.toUpperCase()}</h2>
              {s.items && (
                <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
                  {s.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              )}
              {s.paragraphs && (
                <div className="mt-3 space-y-3 text-stone-700">
                  {s.paragraphs.map((t) => <p key={t}>{t}</p>)}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}