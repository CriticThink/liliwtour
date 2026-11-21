import { Link } from 'react-router-dom'
import { Target, Eye, MapPin, Phone } from 'lucide-react'

const objectives = [
  ['Promote Local Tourism', 'Encourage more tourists to visit and explore the attractions of Liliw, Laguna.'],
  ['Showcase Local Culture', "Introduce visitors to the town's traditions, heritage, local delicacies, and famous footwear industry."],
  ['Provide Quality Travel Experiences', 'Offer organized, enjoyable, and convenient tour packages for different types of travelers.'],
  ['Support Local Businesses', 'Help promote local shops, restaurants, products, and tourism-related establishments.'],
  ['Attract More Visitors', 'Increase awareness of Liliw as a tourist destination through digital marketing and online promotions.'],
  ['Encourage Responsible Tourism', 'Promote respect for local communities, cultural heritage, and the natural environment.'],
]

const reasons = [
  ['Affordable Tour Packages', 'Reasonable prices without compromising the enjoyment and quality of the trip.'],
  ['Convenient Travel Arrangements', 'Organized itineraries to help travelers enjoy their trips with less planning and hassle.'],
  ['Local Tourism Experience', 'Discover Liliw through its famous attractions, traditional products, local food, and cultural heritage.'],
  ['Memorable Adventures', 'From sightseeing to nature exploration, we make every trip enjoyable and worthwhile.'],
  ['Friendly Customer Assistance', 'Helpful assistance and clear communication throughout the booking process and your trip.'],
]

const socials = ['Facebook', 'Instagram', 'TikTok']

export default function About() {
  return (
    <main>
      <section className="bg-forest text-white text-center py-20 px-4">
        <h1 className="text-6xl md:text-7xl">ABOUT US</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Dadalhin ka sa Liliw para maaliw! Get to know Liwaliw sa Liliw Tour.
        </p>
      </section>

      {/* Background */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-4 text-stone-700">
        <h2 className="text-5xl text-forest">OUR STORY</h2>
        <p>
          Liwaliw sa Liliw Tour is a travel agency dedicated to showcasing the beauty, culture, history, and tourist
          attractions of Liliw, Laguna, known as the Tsinelas Capital of the Philippines. The agency was established
          to encourage people to explore the town and discover the unique experiences it has to offer.
        </p>
        <p>
          Through organized tour packages and exciting travel experiences, we introduce visitors to the local heritage,
          natural attractions, traditional footwear industry, and nearby destinations. Traveling is more than just
          visiting places; it is about creating meaningful experiences, discovering local culture, and making
          unforgettable memories.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-cream rounded-2xl p-8 border border-black/5">
            <Target className="text-sunset" size={36} />
            <h2 className="text-4xl text-forest mt-3">MISSION</h2>
            <p className="mt-3 text-stone-700">
              To provide enjoyable, affordable, and memorable travel experiences by promoting the tourist attractions,
              cultural heritage, and local products of Liliw, Laguna. We are committed to delivering convenient travel
              arrangements, quality customer service, and meaningful tourism experiences while supporting local
              communities and businesses.
            </p>
          </div>
          <div className="bg-cream rounded-2xl p-8 border border-black/5">
            <Eye className="text-sunset" size={36} />
            <h2 className="text-4xl text-forest mt-3">VISION</h2>
            <p className="mt-3 text-stone-700">
              To become a trusted and recognized local travel agency that promotes Liliw, Laguna as a must-visit tourist
              destination in the Philippines, inspiring more people to discover its beauty, appreciate its culture, and
              support its local tourism industry.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-5xl text-forest text-center">COMPANY OBJECTIVES</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map(([title, text], i) => (
            <div key={title} className="bg-white rounded-2xl border border-black/5 p-6">
              <span className="font-display text-5xl text-sunset">{i + 1}</span>
              <h3 className="text-2xl mt-1">{title.toUpperCase()}</h3>
              <p className="text-sm text-stone-600 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-forest/5 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-forest text-center">WHY CHOOSE US?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, text]) => (
              <div key={title} className="border-l-4 border-sunset bg-white rounded-r-2xl p-6 shadow-sm">
                <h3 className="text-2xl text-forest">{title.toUpperCase()}</h3>
                <p className="text-sm text-stone-600 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-4 text-stone-700">
        <h2 className="text-5xl text-forest">WHAT MAKES US UNIQUE?</h2>
        <p>
          Unlike general travel agencies that offer destinations across different regions, Liwaliw sa Liliw Tour focuses
          on promoting Liliw, Laguna and its neighboring attractions. Our identity is rooted in the town's unique
          character as the Tsinelas Capital of the Philippines.
        </p>
        <p>
          We combine cultural exploration, nature adventures, and local experiences in one travel destination. More than
          simply bringing tourists to different places, we want them to appreciate the stories, traditions, products,
          and people that make Liliw special.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-ink text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl">CONTACT US</h2>
          <div className="mt-6 space-y-3">
            <p className="flex items-center justify-center gap-2">
              <MapPin size={18} /> Barangay Masikap, Liliw, Laguna, Philippines
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone size={18} /> 0981 241 7807
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {socials.map((s) => (
              <a key={s} href="#" className="border border-white/30 rounded-full px-5 py-2 text-sm hover:bg-white/10">
                {s}: Liwaliw sa Liliw Tour
              </a>
            ))}
          </div>
          <Link to="/booking" className="inline-block mt-8 bg-sunset px-8 py-3 rounded-full font-bold">
            Book Your Tour
          </Link>
        </div>
      </section>
    </main>
  )
}