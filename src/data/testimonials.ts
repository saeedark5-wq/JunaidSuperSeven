export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  content: string
  rating: number
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Muhammad Saeed",
    role: "Buyer",
    location: "UAE",
    content:
      "Junaid helped me secure a prime investment property in International City with excellent ROI. His market knowledge and negotiation skills are unmatched. Highly recommended for anyone looking to invest in Dubai real estate.",
    rating: 5,
  },
  {
    id: "2",
    name: "Zubair Ahmad",
    role: "Rental",
    location: "UAE",
    content:
      "Professional, responsive, and results-driven. Junaid found me the perfect rental property within my budget and timeline. His knowledge of the Dubai market is exceptional. Will definitely work with him again.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mohanned Nuiyam Abdullannan",
    role: "Rental",
    location: "UAE",
    content:
      "Finding a rental in Dubai was easy with Junaid. He understood my requirements perfectly and found me a beautiful apartment. His follow-up service has been excellent even after move-in.",
    rating: 5,
  },
  {
    id: "4",
    name: "Tintu Thomas",
    role: "Rental",
    location: "UAE",
    content:
      "Junaid's honesty and professionalism set him apart. He made the entire rental process seamless and transparent. Highly recommended for anyone looking for property in Dubai.",
    rating: 5,
  },
  {
    id: "5",
    name: "Abdulaziz Mehsen Said",
    role: "Investor",
    location: "UAE",
    content:
      "Junaid's honesty and professionalism set him apart. He didn't just sell me a property; he educated me about the market and helped me make an informed decision. My investment is already showing great returns.",
    rating: 5,
  },
  {
    id: "6",
    name: "Daud Khan",
    role: "Buyer",
    location: "UAE",
    content:
      "Junaid provided excellent service and helped me find the perfect property. His knowledge of the Dubai market and dedication to his clients is truly commendable. Highly recommended.",
    rating: 5,
  },
]
