
export interface ServiceModule {
  id: string;
  name: string;
  percentage: number;
  replacementDays: number;
  features: string[];
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  restaurant: string;
  quote: string;
  stars: number;
  image: string;
}

export interface Candidate {
  id: string;
  position: string;
  experience: string;
  location: string;
  skills: string[];
  available: boolean;
}

export interface ChecklistResult {
  title: string;
  items: string[];
  salaryAdvice: string;
}
