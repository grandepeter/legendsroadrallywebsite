/**
 * Legends Road Rally Landing Page
 *
 * This is the main landing page for the Legends Road Rally website. It features
 * all the key sections including hero, about, trip details, gallery, pricing,
 * and contact information. The page uses a forest green and gold color scheme
 * to create an adventurous and historical feel appropriate for a youth road trip
 * experience focused on church history and adventure.
 */

import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed Header Component */}
      <Header />

      {/* Add padding to compensate for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--legends-dark-green)] to-[var(--legends-forest-green)] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left side - Main Title and Description */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-bold text-[var(--legends-gold)] mb-6 font-mono tracking-wider">
                  LEGENDS ROAD RALLY
                </h1>
                <p className="text-2xl lg:text-3xl font-semibold text-[var(--legends-cream)] mb-8 leading-relaxed">
                  10-DAY, 9-NIGHT ADVENTURE <br />
                  THAT WILL CHANGE YOUR LIFE!
                </p>
                <p className="text-lg text-[var(--legends-cream)] mb-8 opacity-90 leading-relaxed">
                  From Niagara Falls to Sacred Grove, Kirtland Temple, Chicago,
                  Nauvoo, Carthage & Liberty Jail. Discover the stories of early
                  Saints and pioneers as you embark on an unforgettable journey
                  across America with your peers.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="#reserve"
                    className="bg-[var(--legends-gold)] text-[var(--legends-dark-green)] px-8 py-4 rounded-xl font-bold text-xl hover:bg-[var(--legends-cream)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    RESERVE YOUR SPOT NOW!
                  </a>
                </div>
              </div>

              {/* Right side - Hero Image Placeholder */}
              <div className="flex-1 max-w-lg">
                <div className="bg-gradient-to-r from-[var(--legends-gold)] to-[var(--legends-cream)] rounded-2xl p-8 aspect-square flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-[var(--legends-dark-green)] rounded-full flex items-center justify-center">
                      <span className="text-[var(--legends-gold)] text-4xl">
                        📸
                      </span>
                    </div>
                    <p className="text-[var(--legends-dark-green)] font-semibold text-lg">
                      Hero Image Placeholder
                    </p>
                    <p className="text-[var(--legends-dark-green)] text-sm mt-2 opacity-75">
                      Temple climbing adventure photo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trip Dates Section */}
        <section
          id="trip-dates"
          className="py-16 px-4 bg-[var(--legends-cream)]"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--legends-dark-green)] mb-12 text-center font-mono">
              NEXT TRIP DATES
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tour 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-[var(--legends-gold)]">
                <h3 className="text-2xl font-bold text-[var(--legends-dark-green)] mb-4 font-mono">
                  TOUR 1: JUNE 16-25, 2026
                </h3>
                <ul className="space-y-3 text-[var(--legends-dark-green)]">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Ages 14-25
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    First come - First served
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Arrive in Buffalo, NY
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Depart from Kansas City
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Travel in groups of 21
                  </li>
                </ul>
              </div>

              {/* Tour 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-[var(--legends-gold)]">
                <h3 className="text-2xl font-bold text-[var(--legends-dark-green)] mb-4 font-mono">
                  TOUR 2: JULY_7-16, 2026
                </h3>
                <ul className="space-y-3 text-[var(--legends-dark-green)]">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Ages 14-25
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    First come - First served
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Arrive in Buffalo, NY
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Depart from Kansas City
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[var(--legends-gold)] rounded-full mr-3"></span>
                    Travel in groups of 21
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 px-4 bg-[var(--legends-forest-green)]"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--legends-gold)] mb-12 text-center font-mono">
              ABOUT THE EXPERIENCE
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-[var(--legends-cream)]">
                <p className="text-xl mb-6 leading-relaxed">
                  Experience the adventure of a lifetime as you trace the
                  footsteps of pioneers and early Saints across America. This
                  isn't just a road trip— it's a transformative journey that
                  will strengthen your faith, build lasting friendships, and
                  create memories that will last forever.
                </p>
                <p className="text-lg mb-6 leading-relaxed opacity-90">
                  Each day brings new discoveries, from the natural wonder of
                  Niagara Falls to the sacred sites where our church was
                  restored. Travel with your peers in comfortable vehicles, stay
                  in quality accommodations, and experience America's rich
                  history firsthand.
                </p>
                <p className="text-lg mb-6 leading-relaxed opacity-90">
                  Led by experienced guides who are passionate about church
                  history and youth ministry, this adventure combines spiritual
                  growth with pure fun and excitement.
                </p>
              </div>

              {/* Gallery Placeholder */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--legends-gold)] rounded-xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--legends-dark-green)] rounded-xl flex items-center justify-center">
                      <span className="text-[var(--legends-gold)] text-2xl">
                        🚗
                      </span>
                    </div>
                    <p className="text-[var(--legends-dark-green)] font-semibold text-sm">
                      Transportation
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--legends-gold)] rounded-xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--legends-dark-green)] rounded-xl flex items-center justify-center">
                      <span className="text-[var(--legends-gold)] text-2xl">
                        🏛️
                      </span>
                    </div>
                    <p className="text-[var(--legends-dark-green)] font-semibold text-sm">
                      Historical Sites
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--legends-gold)] rounded-xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--legends-dark-green)] rounded-xl flex items-center justify-center">
                      <span className="text-[var(--legends-gold)] text-2xl">
                        🌊
                      </span>
                    </div>
                    <p className="text-[var(--legends-dark-green)] font-semibold text-sm">
                      Niagara Falls
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--legends-gold)] rounded-xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--legends-dark-green)] rounded-xl flex items-center justify-center">
                      <span className="text-[var(--legends-gold)] text-2xl">
                        🌅
                      </span>
                    </div>
                    <p className="text-[var(--legends-dark-green)] font-semibold text-sm">
                      Scenic Views
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 px-4 bg-[var(--legends-cream)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--legends-dark-green)] mb-12 text-center font-mono">
              WHAT'S INCLUDED
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-xl mx-4">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--legends-dark-green)] text-3xl">
                      🚌
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-4">
                    Transportation
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Comfortable vehicles for the entire journey
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--legends-dark-green)] text-3xl">
                      🏠
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-4">
                    Lodging
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Quality accommodations throughout the trip
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--legends-dark-green)] text-3xl">
                      🍽️
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-4">
                    All Meals & Snacks
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Delicious food to fuel your adventure
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--legends-dark-green)] text-3xl">
                      👥
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-4">
                    Experienced Guides
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Knowledgeable leaders passionate about the journey
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--legends-dark-green)] text-3xl">
                      👕
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-4">
                    T-Shirts
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Commemorative gear to remember your trip
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[var(--legends-gold)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--legends-dark-green)] text-3xl">
                      🎉
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-4">
                    Plenty of Entertainment
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Fun activities and games throughout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="reserve"
          className="py-16 px-4 bg-[var(--legends-dark-green)]"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[var(--legends-gold)] mb-8 font-mono">
              PRICE
            </h2>

            <div className="mb-12">
              <div className="text-8xl font-bold text-[var(--legends-cream)] mb-4">
                $1,875
              </div>
              <div className="text-xl text-[var(--legends-cream)] opacity-80">
                AIRFARE NOT INCLUDED
              </div>
            </div>

            <div className="mb-12">
              <div className="text-2xl font-bold text-[var(--legends-gold)] mb-6">
                RESERVE YOUR SPOT NOW!
              </div>
              <div className="text-lg text-[var(--legends-cream)] opacity-90 mb-8">
                $100 NON-REFUNDABLE DEPOSIT REQUIRED
              </div>

              <a
                href="#contact"
                className="inline-block bg-[var(--legends-gold)] text-[var(--legends-dark-green)] px-10 py-5 rounded-xl font-bold text-xl hover:bg-[var(--legends-cream)] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                GET STARTED TODAY
              </a>
            </div>
          </div>
        </section>

        {/* Swag Section */}
        <section
          id="swag"
          className="py-16 px-4 bg-[var(--legends-forest-green)]"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--legends-gold)] mb-12 text-center font-mono">
              BUY SWAG
            </h2>

            <div className="flex justify-center">
              <div className="bg-black rounded-2xl p-8 shadow-2xl max-w-md">
                <div className="bg-[var(--legends-gold)] rounded-xl p-6 aspect-[4/5] flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-[var(--legends-dark-green)] rounded-full flex items-center justify-center">
                      <span className="text-[var(--legends-gold)] text-3xl">
                        👕
                      </span>
                    </div>
                    <p className="text-[var(--legends-dark-green)] font-bold text-xl mb-2">
                      LEGENDS ROAD RALLY
                    </p>
                    <p className="text-[var(--legends-dark-green)] text-sm mt-2 opacity-75">
                      "FROM NIAGARA TO NAUVOO, FULL SEND."
                    </p>
                  </div>
                </div>
                <p className="text-[var(--legends-cream)] text-center mt-4">
                  Official Tournament T-Shirt
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-[var(--legends-cream)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--legends-dark-green)] mb-12 text-center font-mono">
              CONTACT US
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-xl mx-4">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--legends-dark-green)] mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-[var(--legends-dark-green)] mb-6 text-lg leading-relaxed">
                    Ready to embark on the adventure of a lifetime? Contact us
                    to reserve your spot or ask any questions about our upcoming
                    trips.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-[var(--legends-gold)] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[var(--legends-dark-green)] text-sm">
                          📧
                        </span>
                      </span>
                      <span className="text-[var(--legends-dark-green)] font-semibold">
                        mdaynes@beechwoodstrategy.com
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-[var(--legends-gold)] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[var(--legends-dark-green)] text-sm">
                          📞
                        </span>
                      </span>
                      <span className="text-[var(--legends-dark-green)] font-semibold">
                        +1-703-624-1947
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-[var(--legends-gold)] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[var(--legends-dark-green)] text-sm">
                          🏢
                        </span>
                      </span>
                      <span className="text-[var(--legends-dark-green)] font-semibold">
                        Legends Road LLC
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--legends-gold)] rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-[var(--legends-dark-green)] rounded-full flex items-center justify-center">
                      <span className="text-[var(--legends-gold)] text-4xl">
                        💬
                      </span>
                    </div>
                    <p className="text-[var(--legends-dark-green)] font-bold text-lg mb-2">
                      Ready to Contact Us?
                    </p>
                    <p className="text-[var(--legends-dark-green)] text-sm opacity-75">
                      Send us an email or give us a call today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-[var(--legends-dark-green)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[var(--legends-gold)] mb-12 text-center font-mono">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="bg-white rounded-2xl p-10 shadow-xl mx-4">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-3">
                    What age group can participate?
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Our trips are designed for youth ages 14-25 who are members
                    of The Church of Jesus Christ of Latter-day Saints.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-3">
                    How many people are in each group?
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Each group consists of 21 participants, ensuring personal
                    attention and meaningful connections throughout the journey.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-3">
                    What is included in the tour price?
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    The $1,875 price includes transportation, lodging, all meals
                    and snacks, experienced guides, t-shirts, and entertainment.
                    Airfare to Buffalo, NY and from Kansas City is not included.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-3">
                    How do I reserve my spot?
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Contact us at mdaynes@beechwoodstrategy.com or call
                    +1-703-624-1947 to secure your place with a $100
                    non-refundable deposit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--legends-dark-green)] mb-3">
                    Is the tour first-come, first-served?
                  </h3>
                  <p className="text-[var(--legends-dark-green)]">
                    Yes, spots are reserved on a first-come, first-served basis.
                    We recommend booking early to secure your preferred tour
                    dates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-[var(--legends-dark-green)] border-t-2 border-[var(--legends-gold)]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[var(--legends-gold)] font-mono">
                LEGENDS ROAD RALLY
              </h3>
            </div>
            <p className="text-[var(--legends-cream)] opacity-80 mb-4">
              © 2025 Legends Road LLC. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-[var(--legends-cream)]">
              <span>mdaynes@beechwoodstrategy.com</span>
              <span>•</span>
              <span>+1-703-624-1947</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
