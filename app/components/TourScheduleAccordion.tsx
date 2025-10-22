"use client";

/**
 * TourScheduleAccordion Component
 *
 * This component creates an interactive accordion-style timeline for the Legends Road Rally
 * tour schedule. Each day can be clicked to reveal detailed itineraries, descriptions,
 * and embedded Google Maps for each location. The component uses smooth animations
 * and maintains the site's forest green and gold color scheme.
 */

import { useState } from "react";

// Define the structure for each day's itinerary
interface DayItinerary {
  day: number;
  title: string;
  description: string;
  locations: {
    name: string;
    description: string;
    activities?: string[];
  }[];
  highlights?: string[];
  notes?: string;
}

// Tour schedule data with detailed information for each day
const tourScheduleData: DayItinerary[] = [
  {
    day: 1,
    title: "Arrive Buffalo, NY - Niagara Falls",
    description:
      "Welcome to the adventure! We'll start our journey at one of the world's most spectacular natural wonders.",
    locations: [
      {
        name: "Niagara Falls",
        description:
          "Experience the breathtaking power and beauty of Niagara Falls, one of the world's most famous waterfalls.",
        activities: [
          "Maid of the Mist boat tour",
          "Observation deck viewing",
          "Group photos at the falls",
          "Welcome dinner and orientation",
        ],
      },
    ],
    highlights: [
      "First glimpse of the magnificent Niagara Falls",
      "Team building activities",
      "Getting to know your fellow travelers",
    ],
    notes: "Arrive by 2:00 PM for orientation and welcome activities.",
  },
  {
    day: 2,
    title: "Sacred Grove, Hill Cumorah, Grandin Building, Whitmer Farm",
    description:
      "Walk in the footsteps of Joseph Smith through the sacred sites where the Restoration began.",
    locations: [
      {
        name: "Sacred Grove",
        description:
          "The hallowed grove where Joseph Smith received the First Vision in 1820.",
        activities: [
          "Guided tour through the grove",
          "Personal reflection time",
          "Group devotional",
        ],
      },
      {
        name: "Hill Cumorah",
        description:
          "The hill where Joseph Smith received the golden plates from the angel Moroni.",
        activities: [
          "Hill Cumorah Pageant site visit",
          "Historical presentation",
          "Group photos",
        ],
      },
      {
        name: "Grandin Building",
        description: "Where the Book of Mormon was first printed in 1830.",
        activities: [
          "Print shop demonstration",
          "Historical artifacts viewing",
          "Book of Mormon printing history",
        ],
      },
      {
        name: "Whitmer Farm",
        description:
          "The farm where the Church was officially organized on April 6, 1830.",
        activities: [
          "Church organization site tour",
          "Historical reenactment",
          "Group testimony meeting",
        ],
      },
    ],
    highlights: [
      "Walk through the Sacred Grove where Joseph Smith saw God the Father and Jesus Christ",
      "Visit the Hill Cumorah where the golden plates were buried",
      "See where the Book of Mormon was first printed",
      "Stand where the Church was officially organized",
    ],
    notes:
      "This is a spiritually powerful day. Come prepared for reflection and testimony building.",
  },
  {
    day: 3,
    title: "Harmony, PA - Susquehanna Priesthood Restoration Site",
    description:
      "Visit the sacred site where John the Baptist restored the Aaronic Priesthood.",
    locations: [
      {
        name: "Susquehanna River",
        description:
          "The sacred river where John the Baptist appeared to Joseph Smith and Oliver Cowdery.",
        activities: [
          "Riverbank devotional",
          "Priesthood restoration reenactment",
          "Baptismal font demonstration",
        ],
      },
    ],
    highlights: [
      "Stand where John the Baptist appeared",
      "Learn about priesthood restoration",
      "Experience the power of this sacred site",
    ],
    notes:
      "Bring your scriptures for this powerful priesthood restoration experience.",
  },
  {
    day: 4,
    title:
      "Kirtland, OH - Whitney Store, Kirtland Temple, Hiram OH: John Johnson Farm",
    description:
      "Explore the early Church headquarters and witness the dedication of the first temple.",
    locations: [
      {
        name: "Whitney Store",
        description:
          "The Newel K. Whitney Store where Joseph Smith received many revelations.",
        activities: [
          "Store tour and demonstration",
          "Revelation room visit",
          "Historical presentation",
        ],
      },
      {
        name: "Kirtland Temple",
        description: "The first temple built by the Church, dedicated in 1836.",
        activities: [
          "Temple exterior tour",
          "Historical presentation",
          "Group photos",
        ],
      },
      {
        name: "John Johnson Farm",
        description:
          "Where Joseph Smith received many revelations and where the Word of Wisdom was revealed.",
        activities: [
          "Farm tour",
          "Revelation room visit",
          "Word of Wisdom discussion",
        ],
      },
    ],
    highlights: [
      "Visit the first temple built by the Church",
      "Walk through the Whitney Store",
      "Experience the John Johnson Farm",
    ],
    notes:
      "This day focuses on the early Church headquarters and temple building.",
  },
  {
    day: 5,
    title: "Notre Dame University, City of Chicago Sites",
    description:
      "Experience the cultural and educational highlights of the Midwest.",
    locations: [
      {
        name: "Notre Dame University",
        description:
          "Tour the beautiful campus of one of America's most prestigious Catholic universities.",
        activities: ["Campus tour", "Golden Dome visit", "Grotto reflection"],
      },
      {
        name: "Chicago Sites",
        description:
          "Explore the Windy City's famous landmarks and attractions.",
        activities: [
          "Millennium Park",
          "Navy Pier",
          "MLB Game (schedule pending)",
          "Deep dish pizza dinner",
        ],
      },
    ],
    highlights: [
      "Tour Notre Dame's beautiful campus",
      "Experience Chicago's vibrant culture",
      "Possible MLB game attendance",
    ],
    notes: "MLB game schedule will be confirmed closer to the tour date.",
  },
  {
    day: 6,
    title: "Travel to Nauvoo, IL",
    description: "Journey to the beautiful city of Nauvoo, the City Beautiful.",
    locations: [
      {
        name: "Nauvoo, Illinois",
        description:
          "The beautiful city on the Mississippi River where the Saints built their temple.",
        activities: [
          "Arrival and orientation",
          "City overview tour",
          "Mississippi River walk",
          "Group dinner",
        ],
      },
    ],
    highlights: [
      "Arrive in historic Nauvoo",
      "First glimpse of the Mississippi River",
      "Orientation to the city",
    ],
    notes: "Travel day with arrival in Nauvoo by evening.",
  },
  {
    day: 7,
    title: "Nauvoo House, Nauvoo Temple, Historic Nauvoo",
    description: "Immerse yourself in the rich history of Nauvoo's golden era.",
    locations: [
      {
        name: "Nauvoo Temple",
        description:
          "The reconstructed temple where early Saints received their endowments.",
        activities: [
          "Temple exterior tour",
          "Historical presentation",
          "Group photos",
        ],
      },
      {
        name: "Historic Nauvoo",
        description:
          "Walk through the restored pioneer village and experience 1840s life.",
        activities: [
          "Pioneer village tour",
          "Blacksmith shop demonstration",
          "Bakery visit",
          "Cultural hall activities",
        ],
      },
      {
        name: "Nauvoo House",
        description:
          "The hotel built by Joseph Smith to accommodate visitors to Nauvoo.",
        activities: [
          "Historical tour",
          "Joseph Smith connection",
          "Architecture appreciation",
        ],
      },
    ],
    highlights: [
      "Visit the reconstructed Nauvoo Temple",
      "Experience pioneer life in Historic Nauvoo",
      "Learn about Joseph Smith's vision for the city",
    ],
    notes: "Full day exploring Nauvoo's rich history and culture.",
  },
  {
    day: 8,
    title: "Carthage Jail, Hawn's Mill, Adam-ondi-Ahman, Far West Temple Site",
    description:
      "Visit the sites of persecution and the promise of future glory.",
    locations: [
      {
        name: "Carthage Jail",
        description:
          "The site where Joseph Smith and Hyrum Smith were martyred.",
        activities: ["Jail tour", "Martyrdom presentation", "Reflection time"],
      },
      {
        name: "Hawn's Mill",
        description:
          "Site of the Hawn's Mill Massacre where 17 Saints were killed.",
        activities: [
          "Memorial site visit",
          "Historical presentation",
          "Memorial service",
        ],
      },
      {
        name: "Adam-ondi-Ahman",
        description:
          "The valley where Adam blessed his posterity and where Christ will return.",
        activities: ["Valley tour", "Devotional", "Group photos"],
      },
      {
        name: "Far West Temple Site",
        description:
          "The cornerstones of the Far West Temple, dedicated but never completed.",
        activities: [
          "Cornerstone viewing",
          "Historical presentation",
          "Reflection time",
        ],
      },
    ],
    highlights: [
      "Visit Carthage Jail where the Prophet was martyred",
      "Pay respects at Hawn's Mill",
      "Experience the sacred valley of Adam-ondi-Ahman",
      "See the Far West Temple cornerstones",
    ],
    notes:
      "This is an emotionally powerful day. Come prepared for reflection and reverence.",
  },
  {
    day: 9,
    title:
      "Kansas City Temple, Independence Visitor Center, Liberty Jail, World's Best Barbeque",
    description:
      "Experience the heart of Mormon history in Missouri and enjoy Kansas City's famous cuisine.",
    locations: [
      {
        name: "Kansas City Temple",
        description: "The beautiful temple serving the Kansas City area.",
        activities: ["Temple exterior tour", "Grounds walk", "Group photos"],
      },
      {
        name: "Independence Visitor Center",
        description:
          "Learn about the Church's presence in Independence and the Temple Lot.",
        activities: [
          "Visitor center tour",
          "Temple Lot viewing",
          "Historical presentation",
        ],
      },
      {
        name: "Liberty Jail",
        description:
          "Where Joseph Smith was imprisoned during the winter of 1838-39.",
        activities: ["Jail tour", "Revelation presentation", "Reflection time"],
      },
      {
        name: "Kansas City Barbeque",
        description: "Experience the world-famous Kansas City barbeque scene.",
        activities: [
          "Barbeque dinner",
          "Local cuisine experience",
          "Group celebration",
        ],
      },
    ],
    highlights: [
      "Visit the Kansas City Temple",
      "Learn about Independence and the Temple Lot",
      "Experience Liberty Jail where Joseph received revelations",
      "Enjoy world-famous Kansas City barbeque",
    ],
    notes: "A day of spiritual reflection and culinary celebration.",
  },
  {
    day: 10,
    title: "Closing Ceremonies/Party - Depart Kansas City",
    description: "Celebrate the journey and say farewell to new friends.",
    locations: [
      {
        name: "Kansas City",
        description:
          "Final day in Kansas City with closing ceremonies and departure.",
        activities: [
          "Closing ceremonies",
          "Testimony meeting",
          "Farewell party",
          "Departure preparations",
        ],
      },
    ],
    highlights: [
      "Share testimonies and experiences",
      "Celebrate new friendships",
      "Reflect on the journey",
      "Say farewell to fellow travelers",
    ],
    notes:
      "Departure times will be coordinated based on individual travel arrangements.",
  },
];

export default function TourScheduleAccordion() {
  // State to track which day is currently expanded
  // Only one day can be open at a time (accordion behavior)
  const [openDayIndex, setOpenDayIndex] = useState<number | null>(null);

  // Function to toggle the accordion for a specific day
  const toggleDay = (dayIndex: number) => {
    // If clicking the same day that's open, close it
    // Otherwise, open the clicked day
    setOpenDayIndex(openDayIndex === dayIndex ? null : dayIndex);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-[var(--legends-gold)]">
      <h3 className="text-2xl font-bold text-[var(--legends-dark-black)] mb-6 font-mono">
        TOUR SCHEDULE
      </h3>

      {/* Timeline container with vertical line */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--legends-gold)]"></div>

        {/* Day items */}
        <div className="space-y-4">
          {tourScheduleData.map((day, index) => (
            <div key={day.day} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-5 w-3 h-3 bg-[var(--legends-gold)] rounded-full border-2 border-white shadow-lg z-10"></div>

              {/* Day content - unified container */}
              <div
                className={`ml-12 rounded-lg border border-[var(--legends-gold)] shadow-md transition-all duration-300 ${
                  openDayIndex === index
                    ? "bg-gradient-to-br from-[var(--legends-cream)] to-white"
                    : "bg-white"
                }`}
              >
                {/* Clickable day header */}
                <button
                  onClick={() => toggleDay(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    openDayIndex === index
                      ? "bg-transparent text-[var(--legends-dark-black)]"
                      : "bg-white text-[var(--legends-dark-black)] hover:bg-[var(--legends-cream)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold font-mono">
                        Day {day.day} – {day.title}
                      </h4>
                      <p className="text-sm text-[var(--legends-dark-black)] opacity-80 mt-1">
                        {day.description}
                      </p>
                    </div>
                    {/* Expand/collapse icon */}
                    <div
                      className={`transform transition-transform duration-300 ${
                        openDayIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-[var(--legends-gold)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDayIndex === index
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    {/* Day highlights */}
                    {day.highlights && (
                      <div className="mb-6">
                        <h5 className="text-lg font-bold text-[var(--legends-dark-black)] mb-3 font-mono">
                          Highlights
                        </h5>
                        <ul className="space-y-2">
                          {day.highlights.map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="flex items-start"
                            >
                              <span className="w-2 h-2 bg-[var(--legends-gold)] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              <span className="text-[var(--legends-dark-black)]">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Locations and activities */}
                    <div className="mb-6">
                      <h5 className="text-lg font-bold text-[var(--legends-dark-black)] mb-3 font-mono">
                        Locations & Activities
                      </h5>
                      <div className="space-y-4">
                        {day.locations.map((location, locationIndex) => (
                          <div
                            key={locationIndex}
                            className="bg-white rounded-lg p-4 shadow-sm border border-[var(--legends-gold)] hover:shadow-md transition-shadow duration-200"
                          >
                            <h6 className="font-bold text-[var(--legends-dark-black)] mb-2">
                              {location.name}
                            </h6>
                            <p className="text-[var(--legends-dark-black)] mb-3 text-sm">
                              {location.description}
                            </p>

                            {/* Activities list */}
                            {location.activities && (
                              <div className="mb-3">
                                <h7 className="font-semibold text-[var(--legends-dark-black)] text-sm mb-2 block">
                                  Activities:
                                </h7>
                                <ul className="space-y-1">
                                  {location.activities.map(
                                    (activity, activityIndex) => (
                                      <li
                                        key={activityIndex}
                                        className="flex items-start text-sm"
                                      >
                                        <span className="w-1.5 h-1.5 bg-[var(--legends-gold)] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                        <span className="text-[var(--legends-dark-black)]">
                                          {activity}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional notes */}
                    {day.notes && (
                      <div className="bg-gradient-to-r from-[var(--legends-gold)] bg-opacity-5 to-[var(--legends-gold)] bg-opacity-10 rounded-lg p-4 border border-[var(--legends-gold)] shadow-sm">
                        <h5 className="text-sm font-bold text-[var(--legends-dark-black)] mb-2 font-mono">
                          Important Notes:
                        </h5>
                        <p className="text-sm text-[var(--legends-dark-black)]">
                          {day.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
