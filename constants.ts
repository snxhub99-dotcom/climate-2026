
import { ServiceModule, Testimonial, Candidate } from './types';

export const LOGO_URL = "https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/86877901/61b5559e-a090-45d1-9f92-f72ffe13c947/Our-Logo.jpg";

export const SERVICE_MODULES: ServiceModule[] = [
  {
    id: 'module-1',
    name: 'Standard Placement',
    percentage: 8.33,
    replacementDays: 90,
    description: 'Perfect for regular operational staff and junior management roles.',
    features: [
      'Comprehensive Background Check',
      '90-Day Replacement Guarantee',
      'Dedicated Account Manager',
      'Candidate Interview Coordination'
    ]
  },
  {
    id: 'module-2',
    name: 'Executive Search',
    percentage: 12.0,
    replacementDays: 180,
    description: 'High-touch recruitment for Executive Chefs, GMs, and Leadership.',
    features: [
      'Deep Market Mapping',
      'Psychometric Testing',
      '180-Day Replacement Guarantee',
      'Premium Board Selection Process',
      'Detailed Reference Audits'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Vikram Mehta",
    role: "Owner",
    restaurant: "The Golden Platter",
    quote: "Resto Jobs delivered top-tier chefs for our new opening within just two weeks. Their understanding of fine dining is unmatched.",
    stars: 5,
    image: "https://picsum.photos/seed/p1/100/100"
  },
  {
    id: 2,
    name: "Sarah Fernandes",
    role: "HR Director",
    restaurant: "Luxe Resorts",
    quote: "Professionalism at its best. The AI matching system they use saved us countless hours in the screening process.",
    stars: 5,
    image: "https://picsum.photos/seed/p2/100/100"
  },
  {
    id: 3,
    name: "Chef Rahul Singh",
    role: "Executive Chef",
    restaurant: "Spice Symphony",
    quote: "As a candidate, they found me a role that perfectly matched my career aspirations. Now as a client, I only trust Resto Jobs.",
    stars: 5,
    image: "https://picsum.photos/seed/p3/100/100"
  }
];

export const MOCK_CANDIDATES: Candidate[] = [
  { id: '1', position: 'Executive Chef', experience: '12 Years', location: 'Mumbai', skills: ['Italian', 'Continental', 'Fine Dining'], available: true },
  { id: '2', position: 'General Manager', experience: '15 Years', location: 'Delhi', skills: ['P&L Management', 'Luxury Ops'], available: true },
  { id: '3', position: 'Sommelier', experience: '8 Years', location: 'Goa', skills: ['Wine Pairing', 'Guest Relations'], available: true },
  { id: '4', position: 'Pastry Chef', experience: '6 Years', location: 'Bangalore', skills: ['Artisan Bread', 'French Pastry'], available: true },
];

export const CONTACT_INFO = {
  whatsapp: "919980856523",
  whatsappDisplay: "99808 56523",
  email: "restojobs@hariganautomation.digital",
  website: "www.hariganautomation.digital"
};
