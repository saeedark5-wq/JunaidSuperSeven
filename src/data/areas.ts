export interface Area {
  id: string
  name: string
  tagline: string
  description: string
  highlight: string
  image: string
  stats: string
}

export const featuredAreas: Area[] = [
  {
    id: "the-springs",
    name: "The Springs",
    tagline: "Serene Family Living in Nature",
    description:
      "The Springs is a peaceful and highly sought-after residential community in Dubai, known for its family-friendly environment, landscaped greenery, and tranquil lakes. This gated community features beautifully designed townhouses with spacious layouts, private gardens, and scenic walking paths. Residents enjoy a safe, quiet lifestyle while being close to major hubs like Dubai Marina and Sheikh Zayed Road.",
    highlight: "Gated community | Lakes & parks | Family-oriented | Prime location",
    image: "/images/the spring prime location.jfif",
    stats: "Premium family community in the heart of Dubai",
  },
  {
    id: "international-city",
    name: "International City",
    tagline: "Affordable Living, Global Community",
    description:
      "One of Dubai's most vibrant and affordable communities, International City offers a unique blend of residential clusters themed after different countries. With over 10 years of specialization in this area, Junaid Ali has unmatched expertise in International City properties.",
    highlight: "Average ROI of 7-9% | Studios from AED 35,000/year | 1BR from AED 50,000/year",
    image: "/images/international city prime location.jfif",
    stats: "500+ properties sold in International City",
  },
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    tagline: "The Centre of Now",
    description:
      "Home to the iconic Burj Khalifa and Dubai Mall, Downtown Dubai is the epitome of luxury urban living. Junaid Ali offers premium properties in this prestigious district, from elegant apartments to penthouses with breathtaking skyline views.",
    highlight: "Prime location | Luxury living | High capital appreciation | World-class amenities",
    image: "/images/downtown prime location.jfif",
    stats: "Premium listings in Downtown Dubai",
  },
  {
    id: "dubai-sports-city",
    name: "Dubai Sports City",
    tagline: "Live Where Champions Train",
    description:
      "Dubai Sports City is an integrated sports-themed community featuring world-class venues including ICC Academy, Dubai Stadium, and golf courses. Ideal for investors seeking high-growth potential in Dubai's expanding real estate market.",
    highlight: "High ROI potential | Growing community | Sports lifestyle | Affordable luxury",
    image: "/images/sports city prime location.jfif",
    stats: "Excellent off-plan investment opportunities",
  },
{
    id: "skycourts",
    name: "Skycourts",
    tagline: "Modern Living in Dubailand",
    description:
      "Skycourts in Dubailand offers contemporary apartments with modern design and resort-style amenities. This emerging community provides excellent value for both end-users and investors, with strong appreciation potential.",
    highlight: "Contemporary design | Resort amenities | Value for money | Capital growth potential",
    image: "/images/skycouts prime location.jpg",
    stats: "Growing community with high demand",
  },
]
