export interface Feature {
  name: string;
  description: string;
  icon: any;
}

export interface FooterLink {
  name: string;
  links: {
    name: string;
    href: string;
  }[];
}

export interface Testimonial {
  name: string;
  quote: string;
  avatar?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Step {
  name: string;
  description: string;
  icon: any;
} 